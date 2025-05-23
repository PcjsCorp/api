// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import type { Registry } from '@polkadot/types-codec/types';

import { TypeRegistry } from '@polkadot/types';
import { Enum, Null, Text, U32 } from '@polkadot/types-codec';
import { stringify, u8aToHex } from '@polkadot/util';

import { perf } from '../test/performance.js';

const PEnum = Enum.with({ a: U32, b: U32 });

describe('Enum', (): void => {
  const registry = new TypeRegistry();

  describe('typed enum (previously EnumType)', (): void => {
    it('provides a clean toString() (value)', (): void => {
      expect(
        new Enum(
          registry,
          { Text, U32 },
          new Uint8Array([0, 2 << 2, 49, 50])
        ).value.toString()
      ).toEqual('12');
    });

    it('provides a clean toString() (enum)', (): void => {
      expect(
        new Enum(
          registry,
          { Text, U32 },
          new Uint8Array([1, 2 << 2, 49, 50])
        ).toString()
      ).toEqual('{"u32":3289352}');
    });

    it('decodes from a JSON input (lowercase)', (): void => {
      expect(
        new Enum(
          registry,
          { Text, U32 },
          { text: 'some text value' }
        ).value.toString()
      ).toEqual('some text value');
    });

    it('decodes reusing instantiated inputs', (): void => {
      const foo = new Text(registry, 'bar');

      expect(
        new Enum(
          registry,
          { foo: Text },
          { foo }
        ).value
      ).toBe(foo);

      expect(
        new Enum(
          registry,
          { foo: Text },
          foo,
          0
        ).value
      ).toBe(foo);

      expect(
        new Enum(
          registry,
          { foo: Text },
          new Enum(registry, { foo: Text }, { foo })
        ).value
      ).toBe(foo);
    });

    it('decodes from hex', (): void => {
      expect(
        new Enum(
          registry,
          { Text, U32 },
          '0x0134120000'
        ).value.toString()
      ).toEqual('4660'); // 0x1234 in decimal
    });

    it('decodes from hex (string types)', (): void => {
      expect(
        new Enum(
          registry,
          // eslint-disable-next-line sort-keys
          { foo: 'Text', bar: 'u32' },
          '0x0134120000'
        ).value.toString()
      ).toEqual('4660'); // 0x1234 in decimal
    });

    it('decodes from a JSON input (mixed case)', (): void => {
      expect(
        new Enum(
          registry,
          { Text, U32 },
          { U32: 42 }
        ).value.toString()
      ).toEqual('42');
    });

    it('decodes from JSON string', (): void => {
      expect(
        new Enum(
          registry,
          { Null, U32 },
          'null'
        ).type
      ).toEqual('Null');
    });

    it('has correct isXyz/asXyz (Enum.with)', (): void => {
      const test = new (Enum.with({ First: Text, Second: U32, Third: U32 }))(registry, { Second: 42 }) as any as { isFirst: boolean; isSecond: boolean; asSecond: U32; isThird: boolean; asThird: never };

      // const asKeys = Object.keys(test).filter((k) => k.startsWith('as'));
      // const isKeys = Object.keys(test).filter((k) => k.startsWith('is'));

      // expect([isKeys, asKeys]).toEqual([
      //   ['isFirst', 'isSecond', 'isThird'],
      //   ['asFirst', 'asSecond', 'asThird']
      // ]);

      expect([test.isFirst, test.isSecond, test.isThird]).toEqual([false, true, false]);
      expect(test.asSecond.toNumber()).toEqual(42);
      expect((): never => test.asThird).toThrow(/Cannot convert 'Second' via asThird/);
    });

    it('stringifies with custom types', (): void => {
      class A extends Null { }
      class B extends Null { }
      class C extends Null { }
      class Test extends Enum {
        constructor (registry: Registry, value?: string, index?: number) {
          super(registry, {
            a: A,
            b: B,
            c: C
          }, value, index);
        }
      }

      expect(new Test(registry).toJSON()).toEqual({ a: null });
    });

    it('creates via with', (): void => {
      class A extends Null { }
      class B extends U32 { }
      class C extends Null { }
      const Test = Enum.with({ A, B, C });

      expect(new Test(registry).toJSON()).toEqual({ a: null });
      expect(new Test(registry, 1234, 1).toJSON()).toEqual({ b: 1234 });
      expect(new Test(registry, 0x1234, 1).toU8a()).toEqual(new Uint8Array([1, 0x34, 0x12, 0x00, 0x00]));
      expect(new Test(registry, 0x1234, 1).toU8a(true)).toEqual(new Uint8Array([0x34, 0x12, 0x00, 0x00]));
    });

    it('allows accessing the type and value', (): void => {
      const text = new Text(registry, 'foo');
      const enumType = new Enum(
        registry,
        { Text, U32 },
        { Text: text }
      );

      expect(enumType.type).toBe('Text');
      expect(enumType.value).toEqual(text);
    });

    describe('utils', (): void => {
      const DEF = { num: U32, str: Text };
      const u8a = new Uint8Array([1, 3 << 2, 88, 89, 90]);
      const test = new Enum(registry, DEF, u8a);

      it('compares against index', (): void => {
        expect(test.eq(1)).toBe(true);
      });

      it('compares against u8a', (): void => {
        expect(test.eq(u8a)).toBe(true);
      });

      it('compares against hex', (): void => {
        expect(test.eq(u8aToHex(u8a))).toBe(true);
      });

      it('compares against another enum', (): void => {
        expect(test.eq(new Enum(registry, DEF, u8a))).toBe(true);
      });

      it('compares against another object', (): void => {
        expect(test.eq({ str: 'XYZ' })).toBe(true);
      });

      it('compares against values', (): void => {
        expect(test.eq('XYZ')).toBe(true);
      });

      it('compares basic enum on string', (): void => {
        expect(new Enum(registry, ['A', 'B', 'C'], 1).eq('B')).toBe(true);
      });
    });
  });

  describe('string-only construction (old Enum)', (): void => {
    const testDecode = (type: string, input: any, expected: any): void =>
      it(`can decode from ${type}`, (): void => {
        const e = new Enum(registry, ['foo', 'bar'], input);

        expect(e.toString()).toBe(expected);
      });

    const testEncode = (to: 'toJSON' | 'toNumber' | 'toString' | 'toU8a', expected: any): void =>
      it(`can encode ${to}`, (): void => {
        const e = new Enum(registry, ['Foo', 'Bar'], 1);

        expect(e[to]()).toEqual(expected);
      });

    testDecode('Enum', undefined, 'foo');
    testDecode('Enum', new Enum(registry, ['foo', 'bar'], 1), 'bar');
    testDecode('number', 0, 'foo');
    testDecode('number', 1, 'bar');
    testDecode('string', 'bar', 'bar');
    testDecode('Uint8Array', Uint8Array.from([0]), 'foo');
    testDecode('Uint8Array', Uint8Array.from([1]), 'bar');

    testEncode('toJSON', 'Bar');
    testEncode('toNumber', 1);
    testEncode('toString', 'Bar');
    testEncode('toU8a', Uint8Array.from([1]));

    it('provides a clean toString()', (): void => {
      expect(
        new Enum(registry, ['foo', 'bar']).toString()
      ).toEqual('foo');
    });

    it('provides a clean toString() (enum)', (): void => {
      expect(
        new Enum(registry, ['foo', 'bar'], new Enum(registry, ['foo', 'bar'], 1)).toNumber()
      ).toEqual(1);
    });

    it('converts to and from Uint8Array', (): void => {
      expect(
        new Enum(registry, ['foo', 'bar'], new Uint8Array([1])).toU8a()
      ).toEqual(new Uint8Array([1]));
    });

    it('converts from JSON', (): void => {
      expect(
        new Enum(registry, ['foo', 'bar', 'baz', 'gaz', 'jaz'], 4).toNumber()
      ).toEqual(4);
    });

    it('has correct isXyz getters (Enum.with)', (): void => {
      const test = new (Enum.with(['First', 'Second', 'Third']))(registry, 'Second') as any as { isFirst: boolean; isSecond: boolean; isThird: boolean };

      expect([test.isFirst, test.isSecond, test.isThird]).toEqual([false, true, false]);
    });

    describe('utils', (): void => {
      it('compares against the index value', (): void => {
        expect(
          new Enum(registry, ['foo', 'bar'], 1).eq(1)
        ).toBe(true);
      });

      it('compares against the index value (false)', (): void => {
        expect(
          new Enum(registry, ['foo', 'bar'], 1).eq(0)
        ).toBe(false);
      });

      it('compares against the string value', (): void => {
        expect(
          new Enum(registry, ['foo', 'bar'], 1).eq('bar')
        ).toBe(true);
      });

      it('compares against the string value (false)', (): void => {
        expect(
          new Enum(registry, ['foo', 'bar'], 1).eq('foo')
        ).toBe(false);
      });

      it('has isNone set, with correct index (i.e. no values are used)', (): void => {
        const test = new Enum(registry, ['foo', 'bar'], 1);

        expect(test.isNone).toBe(true);
        expect(test.index).toEqual(1);
      });

      it('has a sane inspect', (): void => {
        expect(
          new Enum(
            registry,
            { Text, U32 },
            '0x0134120000'
          ).inspect()
        ).toEqual({
          inner: undefined,
          outer: [new Uint8Array([0x01]), new Uint8Array([0x34, 0x12, 0x00, 0x00])]
        });
      });
    });
  });

  describe('index construction', (): void => {
    it('creates enum where index is specified', (): void => {
      const Test = Enum.with({
        A: U32,
        B: U32
      });
      const test = new Test(registry, new U32(registry, 123), 1);

      expect(test.type).toEqual('B');
      expect((test.value as U32).toNumber()).toEqual(123);
    });

    it('creates enum when value is an enum', (): void => {
      const Test = Enum.with({
        A: U32,
        B: U32
      });
      const test = new Test(registry, new Test(registry, 123, 1));

      expect(test.type).toEqual('B');
      expect((test.value as U32).toNumber()).toEqual(123);
    });

    it('creates via enum with nested enums as the value', (): void => {
      const Nest = Enum.with({
        C: U32,
        D: U32
      });
      const Test = Enum.with({
        A: U32,
        B: Nest
      });
      const test = new Test(registry, new Nest(registry, 123, 1), 1);

      expect(test.type).toEqual('B');
      expect((test.value as Enum).type).toEqual('D');
      expect(((test.value as Enum).value as U32).toNumber()).toEqual(123);
    });
  });

  describe('toRawType', (): void => {
    it('has a sane output for basic enums', (): void => {
      expect(
        new Enum(registry, ['foo', 'bar']).toRawType()
      ).toEqual(stringify({ _enum: ['foo', 'bar'] }));
    });

    it('has a sane output for typed enums', (): void => {
      expect(
        // eslint-disable-next-line sort-keys
        new Enum(registry, { foo: Text, bar: U32 }).toRawType()
      // eslint-disable-next-line sort-keys
      ).toEqual(stringify({ _enum: { foo: 'Text', bar: 'u32' } }));
    });

    it('re-creates via rawType (c-like)', (): void => {
      const type = new Enum(registry, ['foo', 'bar']).toRawType() as 'Raw';

      expect(registry.createType(type, 1).toString()).toEqual('bar');
    });

    it('re-creates via rawType (types)', (): void => {
      const type = new Enum(registry, { A: Text, B: U32, C: U32 }).toRawType();
      const value = registry.createType(type, { B: 123 });

      expect((value as unknown as { isB: boolean }).isB).toEqual(true);
      expect((value as unknown as { asB: U32 }).asB.toNumber()).toEqual(123);
    });
  });

  describe('indexed enum', (): void => {
    const Test = Enum.with({
      A: 5,
      B: 42,
      C: 69,
      D: 255
    });

    it('handles an indexed C-like enum', (): void => {
      expect(new Test(registry, 'A').toNumber()).toEqual(5);
      expect(new Test(registry, 'B').toNumber()).toEqual(42);
      expect(new Test(registry, 'C').toNumber()).toEqual(69);
      expect(new Test(registry, 69).toNumber()).toEqual(69);
      expect(new Test(registry, 'D').toNumber()).toEqual(255);
    });

    it('creates proper raw structure', (): void => {
      expect(new Test(registry).toRawType()).toEqual(stringify({
        _enum: {
          A: 5,
          B: 42,
          C: 69,
          D: 255
        }
      }));
    });

    it('has the indexes for the enum', (): void => {
      expect(new Test(registry).defIndexes).toEqual([5, 42, 69, 255]);
    });

    it('has the correct outputs', (): void => {
      const test = new Test(registry, 5);

      expect(test.toU8a()).toEqual(new Uint8Array([5]));
      expect(test.toHex()).toEqual('0x05');
      expect(test.toJSON()).toEqual('A');
    });
  });

  describe('toHex', (): void => {
    it('has a proper hex representation & length', (): void => {
      const Test = Enum.with({
        A: Text,
        B: U32
      });
      const test = new Test(registry, 123, 1);

      expect(test.toHex()).toEqual('0x017b000000');
      expect(test.encodedLength).toEqual(1 + 4);
    });

    it('encodes a single entry correctly', (): void => {
      const Test = Enum.with({ A: 'u32' });
      const test = new Test(registry, 0x44332211, 0);

      expect(test.toHex()).toEqual(
        '0x' +
        '00' + // index
        '11223344' // u32 LE encoded
      );
    });

    it('encodes a single entry correctly (with embedded encoding)', (): void => {
      const Test = Enum.with({ A: 'MultiAddress' });
      const test = new Test(registry, registry.createType('AccountId', '0x0001020304050607080910111213141516171819202122232425262728293031'), 0);

      expect(test.toHex()).toEqual(
        '0x' +
        '00' + // index
        '00' + // MultiAddress indicating an embedded AccountId
        '0001020304050607080910111213141516171819202122232425262728293031' // AccountId
      );
    });
  });

  describe('toU8a', (): void => {
    const Test = Enum.with({
      A: Text,
      B: U32
    });

    it('has a correct toU8a() output', (): void => {
      expect(
        new Test(registry, { B: 69 }).toU8a()
      ).toEqual(
        new Uint8Array([1, 69, 0, 0, 0])
      );
    });

    it('has a correct toU8a(true) output', (): void => {
      expect(
        new Test(registry, { B: 69 }).toU8a(true)
      ).toEqual(
        new Uint8Array([69, 0, 0, 0])
      );
    });
  });

  perf('Enum', 20_000, [[new Uint8Array([0, 31, 32, 33, 34])]], (v: Uint8Array) => new PEnum(registry, v));
});
