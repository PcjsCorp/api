// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import { TypeRegistry } from '@polkadot/types';
import { Linkage } from '@polkadot/types-codec';

const registry = new TypeRegistry();

describe('Linkage', (): void => {
  it('decodes with ValidatorPrefs', (): void => {
    const LINKA = { next: '5GznmRvdi5htUJKnMSWJgJUzSJJXSvWuHRSEdyUbHJZDNcwU', previous: null };
    const PREFS = { commission: '10.00%' };

    // prefs sanity check
    expect(
      registry.createType(
        'ValidatorPrefsWithCommission',
        '0x0284d717'
      ).toHuman()
    ).toEqual(PREFS);

    // linkage sanity checks
    expect(
      new Linkage(registry, 'AccountId', '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36').toHuman()
    ).toEqual(LINKA);
    expect(
      registry.createType(
        'Linkage<AccountId>',
        '0x0001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36'
      ).toHuman()
    ).toEqual(LINKA);

    // actual check
    expect(
      registry.createType(
        '(ValidatorPrefsWithCommission, Linkage<AccountId>)',
        '0x0284d7170001da30b68f54f686f586ddb29de12b682dd8bd1404566fb8a8db5dec20aa5b6b36'
      ).toHuman()
    ).toEqual([PREFS, LINKA]);
  });
});
