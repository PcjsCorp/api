// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import json1 from '@polkadot/types-support/json/EventRecord.001.json' assert { type: 'json' };
import json3 from '@polkadot/types-support/json/EventRecord.003.json' assert { type: 'json' };
import rpcMetadata from '@polkadot/types-support/metadata/static-substrate';

import { TypeRegistry } from '../../create/index.js';
import { Metadata } from '../../metadata/index.js';

describe('EventRecord', (): void => {
  const registry = new TypeRegistry();

  describe('EventRecord (current)', (): void => {
    beforeEach((): void => {
      const metadata = new Metadata(registry, rpcMetadata);

      registry.setMetadata(metadata);
    });

    it('decodes older EventRecord correctly', (): void => {
      const records = registry.createType('Vec<EventRecord>', json1.params.result.changes[0][1], true);
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
    });

    it('decodes EventRecord with topics correctly', (): void => {
      const hex = json3.params.result.changes[0][1];
      const records = registry.createType('Vec<EventRecord>', hex, true);
      const er = records[0];

      expect(er.phase.type).toEqual('ApplyExtrinsic');
      expect(records.toHex()).toEqual(hex);
    });
  });
});
