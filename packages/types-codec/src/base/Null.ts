// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { Codec, Inspect, IU8a, Registry } from '../types/index.js';

import { isNull } from '@polkadot/util';

/**
 * @name Null
 * @description
 * Implements a type that does not contain anything (apart from `null`)
 */
export class Null implements Codec {
  readonly encodedLength = 0;
  readonly isEmpty = true;
  readonly registry: Registry;

  public createdAtHash?: IU8a;
  public initialU8aLength = 0;
  public isStorageFallback?: boolean;

  constructor (registry: Registry) {
    this.registry = registry;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    throw new Error('.hash is not implemented on Null');
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return other instanceof Null || isNull(other);
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (): Inspect {
    return {};
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return '0x';
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (): null {
    return this.toJSON();
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): null {
    return null;
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (): null {
    return null;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return 'Null';
  }

  /**
   * @description Returns the string representation of the value
   */
  public toString (): string {
    return '';
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   */
  public toU8a (_isBare?: boolean): Uint8Array {
    return new Uint8Array();
  }
}
