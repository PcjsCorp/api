// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';
import type { AnyJson, BareOpts, Codec, CodecClass, DefinitionSetter, Inspect, IStruct, IU8a, Registry } from '../types/index.js';

import { isBoolean, isHex, isObject, isU8a, isUndefined, objectProperties, stringCamelCase, stringify, u8aConcatStrict, u8aToHex, u8aToU8a } from '@polkadot/util';

import { compareMap, decodeU8aStruct, mapToTypeMap, typesToMap } from '../utils/index.js';

type TypesDef<T = Codec> = Record<string, string | CodecClass<T>>;

type Definition = [CodecClass[], string[]];

function noopSetDefinition (d: Definition): Definition {
  return d;
}

/** @internal */
function decodeStructFromObject (registry: Registry, [Types, keys]: Definition, value: any, jsonMap: Map<string, string>): [Iterable<[string, Codec]>, number] {
  let jsonObj: Record<string, unknown> | undefined;
  const typeofArray = Array.isArray(value);
  const typeofMap = value instanceof Map;
  const count = keys.length;

  if (!typeofArray && !typeofMap && !isObject(value)) {
    throw new Error(`Struct: Cannot decode value ${stringify(value)} (typeof ${typeof value}), expected an input object, map or array`);
  } else if (typeofArray && value.length !== count) {
    throw new Error(`Struct: Unable to map ${stringify(value)} array to object with known keys ${keys.join(', ')}`);
  }

  const raw = new Array<[string, Codec]>(count);

  for (let i = 0; i < count; i++) {
    const key = keys[i];
    const jsonKey = jsonMap.get(key) || key;
    const Type = Types[i];
    let assign: unknown;

    try {
      if (typeofArray) {
        assign = value[i] as unknown;
      } else if (typeofMap) {
        assign = jsonKey && value.get(jsonKey);
      } else {
        assign = jsonKey && Object.prototype.hasOwnProperty.call(value, jsonKey) ? value[jsonKey] as unknown : undefined;

        if (isUndefined(assign)) {
          if (isUndefined(jsonObj)) {
            const entries = Object.entries(value);

            jsonObj = {};

            for (let e = 0, ecount = entries.length; e < ecount; e++) {
              if (Object.prototype.hasOwnProperty.call(value, entries[e][0])) {
                jsonObj[stringCamelCase(entries[e][0])] = entries[e][1];
              }
            }
          }

          assign = jsonKey && Object.prototype.hasOwnProperty.call(jsonObj, jsonKey) ? jsonObj[jsonKey] : undefined;
        }
      }

      raw[i] = [
        key,
        assign instanceof Type
          ? assign
          : new Type(registry, assign)
      ];
    } catch (error) {
      let type = Type.name;

      try {
        type = new Type(registry).toRawType();
      } catch {
        // ignore
      }

      throw new Error(`Struct: failed on ${jsonKey}: ${type}:: ${(error as Error).message}`);
    }
  }

  return [raw, 0];
}

/**
 * @name Struct
 * @description
 * A Struct defines an Object with key-value pairs - where the values are Codec values. It removes
 * a lot of repetition from the actual coding, define a structure type, pass it the key/Codec
 * values in the constructor and it manages the decoding. It is important that the constructor
 * values matches 100% to the order in th Rust code, i.e. don't go crazy and make it alphabetical,
 * it needs to decoded in the specific defined order.
 * @noInheritDoc
 */
export class Struct<
  // The actual Class structure, i.e. key -> Class
  S extends TypesDef = TypesDef,
  // input values, mapped by key can be anything (construction)
  V extends { [K in keyof S]: any } = { [K in keyof S]: any },
  // type names, mapped by key, name of Class in S
  E extends { [K in keyof S]: string } = { [K in keyof S]: string }> extends Map<keyof S, Codec> implements IStruct<keyof S> {
  readonly registry: Registry;

  public createdAtHash?: IU8a | undefined;
  public initialU8aLength?: number;
  public isStorageFallback?: boolean;

  readonly #jsonMap: Map<keyof S, string>;
  readonly #Types: Definition;

  constructor (registry: Registry, Types: S, value?: V | Map<unknown, unknown> | unknown[] | HexString | null, jsonMap = new Map<string, string>(), { definition, setDefinition = noopSetDefinition }: DefinitionSetter<Definition> = {}) {
    const typeMap = definition || setDefinition(mapToTypeMap(registry, Types));
    const [decoded, decodedLength] = isU8a(value) || isHex(value)
      ? decodeU8aStruct(registry, new Array<[string, Codec]>(typeMap[0].length), u8aToU8a(value), typeMap)
      : value instanceof Struct
        ? [value as Iterable<[string, Codec]>, 0]
        : decodeStructFromObject(registry, typeMap, value || {}, jsonMap);

    super(decoded);

    this.initialU8aLength = decodedLength;
    this.registry = registry;
    this.#jsonMap = jsonMap;
    this.#Types = typeMap;
  }

  public static with<S extends TypesDef> (Types: S, jsonMap?: Map<string, string>): CodecClass<Struct<S>> {
    let definition: Definition | undefined;

    // eslint-disable-next-line no-return-assign
    const setDefinition = (d: Definition) =>
      definition = d;

    return class extends Struct<S> {
      static {
        const keys = Object.keys(Types);

        objectProperties(this.prototype, keys, (k: string, _: number, self: Struct) =>
          self.get(k)
        );
      }

      constructor (registry: Registry, value?: unknown) {
        super(registry, Types, value as HexString, jsonMap, { definition, setDefinition });
      }
    };
  }

  /**
   * @description The available keys for this struct
   */
  public get defKeys (): string[] {
    return this.#Types[1];
  }

  /**
   * @description Checks if the value is an empty value '{}'
   */
  public get isEmpty (): boolean {
    return [...this.keys()].length === 0;
  }

  /**
   * @description The length of the value when encoded as a Uint8Array
   */
  public get encodedLength (): number {
    let total = 0;

    for (const v of this.values()) {
      total += v.encodedLength;
    }

    return total;
  }

  /**
   * @description returns a hash of the contents
   */
  public get hash (): IU8a {
    return this.registry.hash(this.toU8a());
  }

  /**
   * @description Returns the Type description of the structure
   */
  public get Type (): E {
    const result: Record<string, string> = {};
    const [Types, keys] = this.#Types;

    for (let i = 0, count = keys.length; i < count; i++) {
      result[keys[i]] = new Types[i](this.registry).toRawType();
    }

    return result as E;
  }

  /**
   * @description Compares the value of the input to see if there is a match
   */
  public eq (other?: unknown): boolean {
    return compareMap(this, other);
  }

  /**
   * @description Returns a specific names entry in the structure
   * @param key The name of the entry to retrieve
   */
  public override get (key: keyof S): Codec | undefined {
    return super.get(key);
  }

  /**
   * @description Returns the values of a member at a specific index (Rather use get(name) for performance)
   */
  public getAtIndex (index: number): Codec {
    return this.toArray()[index];
  }

  /**
   * @description Returns the a types value by name
   */
  public getT <T = Codec> (key: string): T {
    return super.get(key) as unknown as T;
  }

  /**
   * @description Returns a breakdown of the hex encoding for this Codec
   */
  public inspect (isBare?: BareOpts): Inspect {
    const inner: Inspect[] = [];

    for (const [k, v] of this.entries()) {
      inner.push({
        ...v.inspect(
          !isBare || isBoolean(isBare)
            ? isBare
            : isBare[k]
        ),
        name: stringCamelCase(k as string)
      });
    }

    return {
      inner
    };
  }

  /**
   * @description Converts the Object to an standard JavaScript Array
   */
  public toArray (): Codec[] {
    return [...this.values()];
  }

  /**
   * @description Returns a hex string representation of the value
   */
  public toHex (): HexString {
    return u8aToHex(this.toU8a());
  }

  /**
   * @description Converts the Object to to a human-friendly JSON, with additional fields, expansion and formatting of information
   */
  public toHuman (isExtended?: boolean, disableAscii?: boolean): Record<string, AnyJson> {
    const json: Record<string, AnyJson> = {};

    for (const [k, v] of this.entries()) {
      json[k as string] = v.toHuman(isExtended, disableAscii);
    }

    return json;
  }

  /**
   * @description Converts the Object to JSON, typically used for RPC transfers
   */
  public toJSON (): Record<string, AnyJson> {
    const json: Record<string, AnyJson> = {};

    for (const [k, v] of this.entries()) {
      // Here we pull out the entry against the JSON mapping (if supplied)
      // since this representation goes over RPC and needs to be correct
      json[(this.#jsonMap.get(k) || k) as string] = v.toJSON();
    }

    return json;
  }

  /**
   * @description Converts the value in a best-fit primitive form
   */
  public toPrimitive (disableAscii?: boolean): Record<string, AnyJson> {
    const json: Record<string, AnyJson> = {};

    for (const [k, v] of this.entries()) {
      json[k as string] = v.toPrimitive(disableAscii);
    }

    return json;
  }

  /**
   * @description Returns the base runtime type name for this instance
   */
  public toRawType (): string {
    return stringify(typesToMap(this.registry, this.#Types));
  }

  /**
   * @description Returns the string representation of the value
   */
  public override toString (): string {
    return stringify(this.toJSON());
  }

  /**
   * @description Encodes the value as a Uint8Array as per the SCALE specifications
   * @param isBare true when the value has none of the type-specific prefixes (internal)
   */
  public toU8a (isBare?: BareOpts): Uint8Array {
    const encoded: Uint8Array[] = [];

    for (const [k, v] of this.entries()) {
      encoded.push(
        v.toU8a(
          !isBare || isBoolean(isBare)
            ? isBare
            : isBare[k]
        )
      );
    }

    return u8aConcatStrict(encoded);
  }
}
