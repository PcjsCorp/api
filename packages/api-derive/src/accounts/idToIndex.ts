// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { AccountId, AccountIndex } from '@polkadot/types/interfaces';
import type { AccountIndexes, DeriveApi } from '../types.js';

import { map } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name idToIndex
 * @description Retrieves the corresponding AccountIndex.
 * @param {( AccountId | string )} accountId An accounts Id in different formats.
 * @example
 * ```javascript
 * const ALICE = '5GrwvaEF5zXb26Fz9rcQpDWS57CtERHpNehXCPcNoHGKutQY';
 * api.derive.accounts.idToIndex(ALICE, (accountIndex) => {
 *   console.log(`The AccountIndex of ${ALICE} is ${accountIndex}`);
 * });
 * ```
 */
export function idToIndex (instanceId: string, api: DeriveApi): (accountId: AccountId | string) => Observable<AccountIndex | undefined> {
  return memo(instanceId, (accountId: AccountId | string): Observable<AccountIndex | undefined> =>
    api.derive.accounts.indexes().pipe(
      map((indexes: AccountIndexes): AccountIndex | undefined =>
        indexes[accountId.toString()]
      )
    ));
}
