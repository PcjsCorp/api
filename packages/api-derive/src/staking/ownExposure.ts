// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Option, u32 } from '@polkadot/types';
import type { EraIndex } from '@polkadot/types/interfaces';
import type { SpStakingExposure, SpStakingExposurePage, SpStakingPagedExposureMetadata } from '@polkadot/types/lookup';
import type { AnyNumber } from '@polkadot/types-codec/types';
import type { DeriveApi, DeriveOwnExposure } from '../types.js';

import { combineLatest, map, of } from 'rxjs';

import { firstMemo, memo } from '../util/index.js';
import { erasHistoricApplyAccount } from './util.js';

export function _ownExposures (instanceId: string, api: DeriveApi): (accountId: Uint8Array | string, eras: EraIndex[], withActive: boolean, page: u32 | AnyNumber) => Observable<DeriveOwnExposure[]> {
  return memo(instanceId, (accountId: Uint8Array | string, eras: EraIndex[], _withActive: boolean, page: u32 | AnyNumber): Observable<DeriveOwnExposure[]> => {
    const emptyStakingExposure = api.registry.createType<SpStakingExposure>('Exposure');
    // The reason we don't explicitly make the actual types is for compatibility. If the chain doesn't have the noted type it will fail
    // on construction. Therefore we just make an empty option.
    const emptyOptionPage = api.registry.createType<Option<SpStakingExposurePage>>('Option<Null>');
    const emptyOptionMeta = api.registry.createType<Option<SpStakingPagedExposureMetadata>>('Option<Null>');

    return eras.length
      ? combineLatest([
        // Backwards and forward compat for historical integrity when using `erasHistoricApplyAccount`
        api.query.staking.erasStakersClipped
          ? combineLatest(eras.map((e) => api.query.staking.erasStakersClipped(e, accountId)))
          : of(eras.map((_) => emptyStakingExposure)),
        api.query.staking.erasStakers
          ? combineLatest(eras.map((e) => api.query.staking.erasStakers(e, accountId)))
          : of(eras.map((_) => emptyStakingExposure)),
        api.query.staking.erasStakersPaged
          ? combineLatest(eras.map((e) => api.query.staking.erasStakersPaged<Option<SpStakingExposurePage>>(e, accountId, page)))
          : of(eras.map((_) => emptyOptionPage)),
        api.query.staking.erasStakersOverview
          ? combineLatest(eras.map((e) => api.query.staking.erasStakersOverview(e, accountId)))
          : of(eras.map((_) => emptyOptionMeta))
      ]).pipe(
        map(([clp, exp, paged, expMeta]): DeriveOwnExposure[] =>
          eras.map((era, index) => ({ clipped: clp[index], era, exposure: exp[index], exposureMeta: expMeta[index], exposurePaged: paged[index] }))
        )
      )
      : of([]);
  }
  );
}

/**
 * @name ownExposure
 * @description Retrieves the staking exposure of a validator for a specific era, including their own stake.
 * @param { Uint8Array | string } accountId The validator stash account.
 * @param {EraIndex} era The staking era to query.
 * @param { u32 | AnyNumber } page? (Optional) The pagination index.
 * @example
 * ```javascript
 * const era = api.createType("EraIndex", 1000);
 * const exposure = await api.derive.staking.ownExposure(
 *   "11VR4pF6c7kfBhfmuwwjWY3FodeYBKWx7ix2rsRCU2q6hqJ",
 *   era
 * );
 * console.log(JSON.stringify(exposure));
 * ```
 */
export const ownExposure = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, era: EraIndex, page?: u32 | AnyNumber) =>
    api.derive.staking._ownExposures(accountId, [era], true, page || 0)
);

/**
 * @name ownExposures
 * @description Retrieves staking exposures for a validator across multiple historical eras.
 * @param { Uint8Array | string } accountId The validator stash account.
 * @param { boolean } withActive Whether to include the active era.
 * @example
 * ```javascript
 * const exposures = await api.derive.staking.ownExposures(
 *   ALICE,
 *   true
 * );
 * ```
 */
export const ownExposures = /*#__PURE__*/ erasHistoricApplyAccount('_ownExposures');
