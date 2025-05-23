// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { u8aToHex } from '@polkadot/util';

import { TypeRegistry } from '../create/index.js';
import { fallbackExtensions } from './signedExtensions/index.js';
import { GenericExtrinsicPayload as ExtrinsicPayload } from './index.js';

describe('ExtrinsicPayload', (): void => {
  const registry = new TypeRegistry();
  const TEST = {
    address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x00001234',
    specVersion: 123,
    tip: '0x00000000000000000000000000005678'
  };

  const TEST_WITH_ASSET = {
    address: '5DTestUPts3kjeXSTMyerHihn1uwMfLj8vU8sqF7qYrFabHE',
    assetId: '0x010002043205011f' as `0x${string}`,
    blockHash: '0xde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7',
    era: '0x0703',
    genesisHash: '0xdcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025b',
    method: '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c',
    nonce: '0x00001234',
    specVersion: 123,
    tip: '0x00000000000000000000000000005678'
  };

  it('creates and can re-create from itself (U8a)', (): void => {
    const a = new ExtrinsicPayload(registry, TEST, { version: 4 });
    const b = new ExtrinsicPayload(registry, a.toU8a(), { version: 4 });

    expect(a.inspect()).toEqual(b.inspect());
    expect(a.toJSON()).toEqual(b.toJSON());
  });

  it('creates and can re-create from itself (hex)', (): void => {
    const a = new ExtrinsicPayload(registry, TEST, { version: 4 });
    const b = new ExtrinsicPayload(registry, a.toHex(), { version: 4 });

    expect(a.inspect()).toEqual(b.inspect());
    expect(a.toJSON()).toEqual(b.toJSON());
  });

  it('handles assetId correctly', () => {
    const reg = new TypeRegistry();

    reg.setSignedExtensions(fallbackExtensions.concat(['ChargeAssetTxPayment']));
    const ext = new ExtrinsicPayload(reg, TEST_WITH_ASSET, { version: 4 });
    // remove option byte
    const ext2 = new ExtrinsicPayload(reg, { ...TEST_WITH_ASSET, assetId: `0x${TEST_WITH_ASSET.assetId.slice(4)}` }, { version: 4 });

    expect(ext.assetId.toJSON()).toEqual({
      interior: {
        x2: [
          {
            palletInstance: 50
          },
          {
            generalIndex: 1984
          }
        ]
      },
      parents: 0
    });
    expect(ext.assetId.toJSON()).toEqual(ext2.assetId.toJSON());
  });

  it('handles toU8a(true) correctly', (): void => {
    expect(
      u8aToHex(
        new ExtrinsicPayload(registry, TEST, { version: 4 }).toU8a(true)
      )
    ).toEqual(
      // no method length prefix
      '0x0600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c0703d148e25901007b000000dcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025bde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7'
    );
  });

  it('handles toU8a(false) correctly', (): void => {
    expect(
      u8aToHex(
        new ExtrinsicPayload(registry, TEST, { version: 4 }).toU8a()
      )
    ).toEqual(
      // with method length prefix
      '0x940600ffd7568e5f0a7eda67a82691ff379ac4bba4f9c9b859fe779b5d46363b61ad2db9e56c0703d148e25901007b000000dcd1346701ca8396496e52aa2785b1748deb6db09551b72159dcb3e08991025bde8f69eeb5e065e18c6950ff708d7e551f68dc9bf59a07c52367c0280f805ec7'
    );
  });

  it('has a sane inspect of an empty value', (): void => {
    const reg = new TypeRegistry();

    reg.setSignedExtensions(fallbackExtensions.concat(['ChargeAssetTxPayment']));
    expect(new ExtrinsicPayload(reg, undefined).inspect()).toEqual({
      inner: [
        { name: 'method', outer: [new Uint8Array()] },
        { inner: undefined, name: 'era', outer: [new Uint8Array([0]), new Uint8Array([0])] },
        { name: 'nonce', outer: [new Uint8Array([0])] },
        { name: 'tip', outer: [new Uint8Array([0])] },
        { name: 'assetId', outer: [new Uint8Array([0])] },
        { name: 'specVersion', outer: [new Uint8Array([0, 0, 0, 0])] },
        { name: 'genesisHash', outer: [new Uint8Array(32)] },
        { name: 'blockHash', outer: [new Uint8Array(32)] }
      ]
    });
  });
});
