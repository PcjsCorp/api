// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { AnyU8a, Registry } from '@polkadot/types-codec/types';
import type { BN } from '@polkadot/util';
import type { IExtrinsicEra, INumber } from '../types/index.js';

import { Enum, Raw, Tuple, U64 } from '@polkadot/types-codec';
import { bnToBn, formatNumber, hexToU8a, isHex, isObject, isU8a, u8aToBn, u8aToU8a } from '@polkadot/util';

import { IMMORTAL_ERA } from './constants.js';

type MortalEraValue = [INumber, INumber];

interface MortalMethod {
  current: number;
  period: number;
}

interface MortalEnumDef {
  MortalEra: string;
}

interface ImmortalEnumDef {
  ImmortalEra: string;
}

function getTrailingZeros (period: number): number {
  const binary = period.toString(2);
  let index = 0;

  while (binary[binary.length - 1 - index] === '0') {
    index++;
  }

  return index;
}

/** @internal */
function decodeMortalEra (registry: Registry, value?: MortalMethod | Uint8Array | number[] | string): MortalEraValue {
  if (isU8a(value) || isHex(value) || Array.isArray(value)) {
    return decodeMortalU8a(registry, u8aToU8a(value));
  } else if (!value) {
    return [new U64(registry), new U64(registry)];
  } else if (isObject(value)) {
    return decodeMortalObject(registry, value);
  }

  throw new Error('Invalid data passed to Mortal era');
}

/** @internal */
function decodeMortalObject (registry: Registry, value: MortalMethod): MortalEraValue {
  const { current, period } = value;
  let calPeriod = Math.pow(2, Math.ceil(Math.log2(period)));

  calPeriod = Math.min(Math.max(calPeriod, 4), 1 << 16);

  const phase = current % calPeriod;
  const quantizeFactor = Math.max(calPeriod >> 12, 1);
  const quantizedPhase = phase / quantizeFactor * quantizeFactor;

  return [new U64(registry, calPeriod), new U64(registry, quantizedPhase)];
}

/** @internal */
function decodeMortalU8a (registry: Registry, value: Uint8Array): MortalEraValue {
  if (value.length === 0) {
    return [new U64(registry), new U64(registry)];
  }

  const first = u8aToBn(value.subarray(0, 1)).toNumber();
  const second = u8aToBn(value.subarray(1, 2)).toNumber();
  const encoded: number = first + (second << 8);
  const period = 2 << (encoded % (1 << 4));
  const quantizeFactor = Math.max(period >> 12, 1);
  const phase = (encoded >> 4) * quantizeFactor;

  if (period < 4 || phase >= period) {
    throw new Error('Invalid data passed to Mortal era');
  }

  return [new U64(registry, period), new U64(registry, phase)];
}

/** @internal */
// eslint-disable-next-line @typescript-eslint/ban-types
function decodeExtrinsicEra (value: IExtrinsicEra | MortalMethod | MortalEnumDef | ImmortalEnumDef | Uint8Array | string = new Uint8Array()): Uint8Array | Object | undefined {
  if (isU8a(value)) {
    return (!value.length || value[0] === 0)
      ? new Uint8Array([0])
      : new Uint8Array([1, value[0], value[1]]);
  } else if (!value) {
    return new Uint8Array([0]);
  } else if (value instanceof GenericExtrinsicEra) {
    return decodeExtrinsicEra(value.toU8a());
  } else if (isHex(value)) {
    return decodeExtrinsicEra(hexToU8a(value));
  } else if (isObject(value)) {
    const entries = Object.entries(value as MortalEnumDef).map(([k, v]): [string, any] => [k.toLowerCase(), v]);
    const mortal = entries.find(([k]) => k.toLowerCase() === 'mortalera');
    const immortal = entries.find(([k]) => k.toLowerCase() === 'immortalera');

    // this is to de-serialize from JSON
    return mortal
      ? { MortalEra: mortal[1] as string }
      : immortal
        ? { ImmortalEra: immortal[1] as string }
        : { MortalEra: value };
  }

  throw new Error('Invalid data passed to Era');
}

/**
 * @name ImmortalEra
 * @description
 * The ImmortalEra for an extrinsic
 */
export class ImmortalEra extends Raw {
  constructor (registry: Registry, _value?: AnyU8a) {
    // For immortals, we always provide the known value (i.e. treated as a
    // constant no matter how it is constructed - it is a fixed structure)
    super(registry, IMMORTAL_ERA);
  }
}

/**
 * @name MortalEra
 * @description
 * The MortalEra for an extrinsic, indicating period and phase
 */
export class MortalEra extends Tuple {
  constructor (registry: Registry, value?: MortalMethod | Uint8Array | number[] | string) {
    super(registry, {
      period: U64,
      phase: U64
    }, decodeMortalEra(registry, value));
  }

  /**
   * @description Encoded length for mortals occupy 2 bytes, different from the actual Tuple since it is encoded. This is a shortcut fro `toU8a().length`
   */
  public override get encodedLength (): number {
    return 2 | 0;
  }

  /**
   * @description The period of this Mortal wraps as a [[U64]]
   */
  public get period (): INumber {
    return this[0] as INumber;
  }

  /**
   * @description The phase of this Mortal wraps as a [[U64]]
   */
  public get phase (): INumber {
    return this[1] as INumber;
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public override toHuman (): any {
    return {
      period: formatNumber(this.period),
      phase: formatNumber(this.phase)
    };
  }

  /**
   * @description Returns a JSON representation of the actual value
   */
  public override toJSON (): any {
    return this.toHex();
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   * Period and phase are encoded:
   *   - The period of validity from the block hash found in the signing material.
   *   - The phase in the period that this transaction's lifetime begins (and, importantly,
   *     implies which block hash is included in the signature material). If the `period` is
   *     greater than 1 << 12, then it will be a factor of the times greater than 1<<12 that
   *     `period` is.
   */
  public override toU8a (_isBare?: boolean): Uint8Array {
    const period = this.period.toNumber();
    const encoded = Math.min(
      15,
      Math.max(1, getTrailingZeros(period) - 1)
    ) + (
      (
        this.phase.toNumber() / Math.max(period >> 12, 1)
      ) << 4
    );

    return new Uint8Array([
      encoded & 0xff,
      encoded >> 8
    ]);
  }

  /**
   * @description Get the block number of the start of the era whose properties this object describes that `current` belongs to.
   */
  public birth (current: BN | bigint | number | string): number {
    const phase = this.phase.toNumber();
    const period = this.period.toNumber();

    // FIXME No toNumber() here
    return (
      ~~(
        (
          Math.max(bnToBn(current).toNumber(), phase) - phase
        ) / period
      ) * period
    ) + phase;
  }

  /**
   * @description Get the block number of the first block at which the era has ended.
   */
  public death (current: BN | bigint | number | string): number {
    // FIXME No toNumber() here
    return this.birth(current) + this.period.toNumber();
  }
}

/**
 * @name GenericExtrinsicEra
 * @description
 * The era for an extrinsic, indicating either a mortal or immortal extrinsic
 */
export class GenericExtrinsicEra extends Enum implements IExtrinsicEra {
  constructor (registry: Registry, value?: unknown) {
    super(registry, {
      ImmortalEra,
      MortalEra
    }, decodeExtrinsicEra(value as string));
  }

  /**
   * @description Override the encoded length method
   */
  public override get encodedLength (): number {
    return this.isImmortalEra
      ? this.asImmortalEra.encodedLength
      : this.asMortalEra.encodedLength;
  }

  /**
   * @description Returns the item as a [[ImmortalEra]]
   */
  public get asImmortalEra (): ImmortalEra {
    if (!this.isImmortalEra) {
      throw new Error(`Cannot convert '${this.type}' via asImmortalEra`);
    }

    return this.inner as ImmortalEra;
  }

  /**
   * @description Returns the item as a [[MortalEra]]
   */
  public get asMortalEra (): MortalEra {
    if (!this.isMortalEra) {
      throw new Error(`Cannot convert '${this.type}' via asMortalEra`);
    }

    return this.inner as MortalEra;
  }

  /**
   * @description `true` if Immortal
   */
  public get isImmortalEra (): boolean {
    return this.index === 0;
  }

  /**
   * @description `true` if Mortal
   */
  public get isMortalEra (): boolean {
    return this.index > 0;
  }

  /**
   * @description Encodes the value as a Uint8Array as per the parity-codec specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public override toU8a (isBare?: boolean): Uint8Array {
    return this.isMortalEra
      ? this.asMortalEra.toU8a(isBare)
      : this.asImmortalEra.toU8a(isBare);
  }
}
