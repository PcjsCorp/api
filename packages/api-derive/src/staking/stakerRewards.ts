// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { u32, Vec } from '@polkadot/types';
import type { AccountId, EraIndex } from '@polkadot/types/interfaces';
import type { PalletStakingStakingLedger, SpStakingExposure, SpStakingExposurePage } from '@polkadot/types/lookup';
import type { BN } from '@polkadot/util';
import type { DeriveApi, DeriveEraPoints, DeriveEraPrefs, DeriveEraRewards, DeriveEraValPoints, DeriveEraValPrefs, DeriveStakerExposure, DeriveStakerReward, DeriveStakerRewardValidator } from '../types.js';
import type { DeriveStakingQuery } from './types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { BN_BILLION, BN_ZERO, objectSpread } from '@polkadot/util';

import { firstMemo, memo } from '../util/index.js';

type ErasResult = [DeriveEraPoints[], DeriveEraPrefs[], DeriveEraRewards[]];

// handle compatibility between generations of structures
function extractCompatRewards (claimedRewardsEras: Vec<u32>, ledger?: PalletStakingStakingLedger): u32[] {
  const l = ledger
    ? (
      ledger.legacyClaimedRewards ||
    (ledger as PalletStakingStakingLedger & { claimedRewards: Vec<u32> }).claimedRewards
    ).toArray()
    : [] as unknown as Vec<u32>;

  return claimedRewardsEras.toArray().concat(l);
}

function parseRewards (api: DeriveApi, stashId: AccountId, [erasPoints, erasPrefs, erasRewards]: ErasResult, exposures: DeriveStakerExposure[], claimedRewardsEras: Vec<u32>): DeriveStakerReward[] {
  return exposures.map(({ era, isEmpty, isValidator, nominating, validators: eraValidators }): DeriveStakerReward => {
    const { eraPoints, validators: allValPoints } = erasPoints.find((p) => p.era.eq(era)) || { eraPoints: BN_ZERO, validators: {} as DeriveEraValPoints };
    const { eraReward } = erasRewards.find((r) => r.era.eq(era)) || { eraReward: api.registry.createType('Balance') };
    const { validators: allValPrefs } = erasPrefs.find((p) => p.era.eq(era)) || { validators: {} as DeriveEraValPrefs };
    const validators: Record<string, DeriveStakerRewardValidator> = {};
    const stakerId = stashId.toString();

    Object.entries(eraValidators).forEach(([validatorId, exposure]): void => {
      const valPoints = allValPoints[validatorId] || BN_ZERO;
      const valComm = allValPrefs[validatorId]?.commission.unwrap() || BN_ZERO;
      const expTotal = (exposure as SpStakingExposure).total
        ? (exposure as SpStakingExposure).total?.unwrap()
        : (exposure as SpStakingExposurePage).pageTotal
          ? (exposure as SpStakingExposurePage).pageTotal?.unwrap()
          : BN_ZERO;
      let avail = BN_ZERO;
      let value: BN | undefined;

      if (!(expTotal.isZero() || valPoints.isZero() || eraPoints.isZero())) {
        avail = eraReward.mul(valPoints).div(eraPoints);

        const valCut = valComm.mul(avail).div(BN_BILLION);
        let staked: BN;

        if (validatorId === stakerId) {
          if ((exposure as SpStakingExposure).own) {
            staked = (exposure as SpStakingExposure).own.unwrap();
          } else {
            const expAccount = exposure.others.find(({ who }) => who.eq(validatorId));

            staked = expAccount
              ? expAccount.value.unwrap()
              : BN_ZERO;
          }
        } else {
          const stakerExp = exposure.others.find(({ who }) => who.eq(stakerId));

          staked = stakerExp
            ? stakerExp.value.unwrap()
            : BN_ZERO;
        }

        value = avail.sub(valCut).imul(staked).div(expTotal).iadd(validatorId === stakerId ? valCut : BN_ZERO);
      }

      validators[validatorId] = {
        total: api.registry.createType('Balance', avail),
        value: api.registry.createType('Balance', value)
      };
    });

    return {
      era,
      eraReward,
      // This might not always be accurate as you need validator account information in order to see if the rewards have been claimed.
      // This is possibly adjusted in `filterRewards` when need be.
      isClaimed: claimedRewardsEras.some((c) => c.eq(era)),
      isEmpty,
      isValidator,
      nominating,
      validators
    };
  });
}

function allUniqValidators (rewards: DeriveStakerReward[][]): [string[], string[][]] {
  return rewards.reduce(([all, perStash]: [string[], string[][]], rewards) => {
    const uniq: string[] = [];

    perStash.push(uniq);
    rewards.forEach(({ validators }) =>
      Object.keys(validators).forEach((validatorId): void => {
        if (!uniq.includes(validatorId)) {
          uniq.push(validatorId);

          if (!all.includes(validatorId)) {
            all.push(validatorId);
          }
        }
      })
    );

    return [all, perStash];
  }, [[], []]);
}

function removeClaimed (validators: string[], queryValidators: DeriveStakingQuery[], reward: DeriveStakerReward, claimedRewardsEras: Vec<u32>): void {
  const rm: string[] = [];

  Object.keys(reward.validators).forEach((validatorId): void => {
    const index = validators.indexOf(validatorId);

    if (index !== -1) {
      const valLedger = queryValidators[index].stakingLedger;

      if (extractCompatRewards(claimedRewardsEras, valLedger).some((e) => reward.era.eq(e))) {
        rm.push(validatorId);
      }
    }
  });

  rm.forEach((validatorId): void => {
    delete reward.validators[validatorId];
  });
}

function filterRewards (eras: EraIndex[], valInfo: [string, DeriveStakingQuery][], { claimedRewardsEras, rewards, stakingLedger }: { rewards: DeriveStakerReward[]; stakingLedger: PalletStakingStakingLedger, claimedRewardsEras: Vec<u32> }): DeriveStakerReward[] {
  const filter = eras.filter((e) => !extractCompatRewards(claimedRewardsEras, stakingLedger).some((s) => s.eq(e)));
  const validators = valInfo.map(([v]) => v);
  const queryValidators = valInfo.map(([, q]) => q);

  return rewards
    .filter(({ isEmpty }) => !isEmpty)
    .filter((reward): boolean => {
      if (!filter.some((e) => reward.era.eq(e))) {
        return false;
      }

      removeClaimed(validators, queryValidators, reward, claimedRewardsEras);

      return true;
    })
    .filter(({ validators }) => Object.keys(validators).length !== 0)
    .map((reward) => {
      let isClaimed = reward.isClaimed;
      const valKeys = Object.keys(reward.validators);

      if (!reward.isClaimed && valKeys.length) {
        for (const key of valKeys) {
          const info = queryValidators.find((i) => i.accountId.toString() === key);

          if (info) {
            isClaimed = info.claimedRewardsEras.toArray().some((era) => era.eq(reward.era));
            break;
          }
        }
      }

      return objectSpread({}, reward, {
        isClaimed,
        nominators: reward.nominating.filter((n) => reward.validators[n.validatorId])
      });
    });
}

export function _stakerRewardsEras (instanceId: string, api: DeriveApi): (eras: EraIndex[], withActive?: boolean) => Observable<ErasResult> {
  return memo(instanceId, (eras: EraIndex[], withActive = false): Observable<ErasResult> =>
    combineLatest([
      api.derive.staking._erasPoints(eras, withActive),
      api.derive.staking._erasPrefs(eras, withActive),
      api.derive.staking._erasRewards(eras, withActive)
    ])
  );
}

export function _stakerRewards (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[], withActive = false): Observable<DeriveStakerReward[][]> => {
    // Ensures that when number or string types are passed in they are sanitized
    // Ref: https://github.com/polkadot-js/api/issues/5910
    const sanitizedEras: EraIndex[] = eras.map((e) => typeof e === 'number' || typeof e === 'string' ? api.registry.createType('u32', e) : e);

    return combineLatest([
      api.derive.staking.queryMulti(accountIds, { withClaimedRewardsEras: true, withLedger: true }),
      api.derive.staking._stakerExposures(accountIds, sanitizedEras, withActive),
      api.derive.staking._stakerRewardsEras(sanitizedEras, withActive)
    ]).pipe(
      switchMap(([queries, exposures, erasResult]): Observable<DeriveStakerReward[][]> => {
        const allRewards = queries.map(({ claimedRewardsEras, stakingLedger, stashId }, index): DeriveStakerReward[] =>
          (!stashId || (!stakingLedger && !claimedRewardsEras))
            ? []
            : parseRewards(api, stashId, erasResult, exposures[index], claimedRewardsEras)
        );

        if (withActive) {
          return of(allRewards);
        }

        const [allValidators, stashValidators] = allUniqValidators(allRewards);

        return api.derive.staking.queryMulti(allValidators, { withClaimedRewardsEras: true, withLedger: true }).pipe(
          map((queriedVals): DeriveStakerReward[][] =>
            queries.map(({ claimedRewardsEras, stakingLedger }, index): DeriveStakerReward[] =>
              filterRewards(
                eras,
                stashValidators[index]
                  .map((validatorId): [string, DeriveStakingQuery | undefined] => [
                    validatorId,
                    queriedVals.find((q) => q.accountId.eq(validatorId))
                  ])
                  .filter((v): v is [string, DeriveStakingQuery] => !!v[1]),
                {
                  claimedRewardsEras,
                  rewards: allRewards[index],
                  stakingLedger
                }
              )
            )
          )
        );
      })
    );
  }
  );
}

/**
 * @name stakerRewards
 * @description Staking rewards history for a given staker.
 * @param { Uint8Array | string } accountId The stakers AccountId.
 * @param { boolean } withActive Whether to include the active era.
 * @example
 * ```javascript
 * const rewards = await api.derive.staking.stakerRewards(
 *   ALICE, //Alice accountId
 *   false
 * );
 * ```
 */
export const stakerRewards = /*#__PURE__*/ firstMemo(
  (api: DeriveApi, accountId: Uint8Array | string, withActive?: boolean) =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking._stakerRewards([accountId], eras, withActive))
    )
);

/**
 * @name stakerRewardsMultiEras
 * @description Staking rewards for multiple stakers over specific eras.
 * @param { Uint8Array | string } accountIds List of stakers identified by their AccountId.
 * @param { EraIndex[] } eras Eras for which to retrieve the data.
 * @example
 * ```javascript
 * const rewards = await api.derive.staking.stakerRewardsMultiEras(
 *   [ALICE, BOB, CHARLIER], //accountIds
 *   [100,101]  //eras
 * );
 * ```
 */
export function stakerRewardsMultiEras (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], eras: EraIndex[]) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], eras: EraIndex[]): Observable<DeriveStakerReward[][]> =>
    accountIds.length && eras.length
      ? api.derive.staking._stakerRewards(accountIds, eras, false)
      : of([])
  );
}

/**
 * @name stakerRewardsMulti
 * @description Staking rewards for multiple stakers.
 * @param { Uint8Array | string } accountIds List of stakers identified by their AccountId.
 * @param { boolean } withActive Whether to include the active era.
 * @example
 * ```javascript
 * const rewards = await api.derive.staking.stakerRewardsMulti(
 *   [ALICE, BOB, CHARLIER], //accountIds
 *   true
 * );
 * ```
 */
export function stakerRewardsMulti (instanceId: string, api: DeriveApi): (accountIds: (Uint8Array | string)[], withActive?: boolean) => Observable<DeriveStakerReward[][]> {
  return memo(instanceId, (accountIds: (Uint8Array | string)[], withActive = false): Observable<DeriveStakerReward[][]> =>
    api.derive.staking.erasHistoric(withActive).pipe(
      switchMap((eras) => api.derive.staking.stakerRewardsMultiEras(accountIds, eras))
    )
  );
}
