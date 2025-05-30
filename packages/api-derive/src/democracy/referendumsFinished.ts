// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { PalletDemocracyReferendumInfo } from '@polkadot/types/lookup';
import type { DeriveApi } from '../types.js';

import { map, switchMap } from 'rxjs';

import { memo } from '../util/index.js';

type ReferendumInfoFinished = PalletDemocracyReferendumInfo['asFinished'];

/**
 * @name referendumsFinished
 * @description Retrieves information about finished referendums.
 * @example
 * ```javascript
 * const referendums = await api.derive.democracy.referendumsFinished();
 * console.log("Finished Referendums:", referendums);
 * ```
 */
export function referendumsFinished (instanceId: string, api: DeriveApi): () => Observable<ReferendumInfoFinished[]> {
  return memo(instanceId, (): Observable<ReferendumInfoFinished[]> =>
    api.derive.democracy.referendumIds().pipe(
      switchMap((ids) =>
        api.query.democracy.referendumInfoOf.multi(ids)
      ),
      map((infos): ReferendumInfoFinished[] =>
        infos
          .map((o) => o.unwrapOr(null))
          .filter((info): info is PalletDemocracyReferendumInfo => !!info && info.isFinished)
          .map((info) => info.asFinished)
      )
    )
  );
}
