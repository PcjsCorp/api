// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { DeriveApi, DeriveStakerPoints } from '../types.js';

import { map } from 'rxjs';

import { memo } from '../util/index.js';
import { erasHistoricApplyAccount } from './util.js';

export function _stakerPoints (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean) => Observable<DeriveStakerPoints[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean): Observable<DeriveStakerPoints[]> => {
    const stakerId = api.registry.createType('AccountId', accountId).toString();

    return api.derive.staking._erasPoints(eras, withActive).pipe(
      map((points): DeriveStakerPoints[] =>
        points.map(({ era, eraPoints, validators }): DeriveStakerPoints => ({
          era,
          eraPoints,
          points: validators[stakerId] || api.registry.createType('RewardPoint')
        }))
      )
    );
  });
}

/**
 * @name stakerPoints
 * @param { Uint8Array | string } accountId The stakers AccountId.
 * @param { boolean } withActive Whether to include the active era.
 * @description Retrieves the era reward points earned by a given staker across all eras.
 * @example
 * ```javascript
 * const points = await api.derive.staking.stakerPoints(
 *   ALICE, //Alice accountId
 *   false
 * );
 * console.log(
 *   'Validator Era Points:',
 *   points.map(({ era, points }) => `Era ${era}: ${points.toString()} points`)
 * );
 * ```
*/
export const stakerPoints = /*#__PURE__*/ erasHistoricApplyAccount('_stakerPoints');
