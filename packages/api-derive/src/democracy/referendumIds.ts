// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { ReferendumIndex } from '@polkadot/types/interfaces';
import type { BN } from '@polkadot/util';
import type { DeriveApi } from '../types.js';

import { map, of } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name referendumIds
 * @description Retrieves an array of active referendum IDs.
 * @example
 * ```javascript
 * const referendums = await api.derive.democracy.referendumIds();
 * ```
 */
export function referendumIds (instanceId: string, api: DeriveApi): () => Observable<BN[]> {
  return memo(instanceId, (): Observable<BN[]> =>
    api.query.democracy?.lowestUnbaked
      ? api.queryMulti<[ReferendumIndex, ReferendumIndex]>([
        api.query.democracy.lowestUnbaked,
        api.query.democracy.referendumCount
      ]).pipe(
        map(([first, total]): BN[] =>
          total.gt(first)
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            ? [...Array(total.sub(first).toNumber())].map((_, i): BN => first.addn(i))
            : []
        )
      )
      : of([])
  );
}
