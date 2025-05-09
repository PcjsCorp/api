// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { Bytes, Option } from '@polkadot/types';
import type { BountyIndex } from '@polkadot/types/interfaces';
import type { PalletBountiesBounty } from '@polkadot/types/lookup';
import type { DeriveApi, DeriveBounties, DeriveCollectiveProposal } from '../types.js';

import { combineLatest, map, of, switchMap } from 'rxjs';

import { memo } from '../util/index.js';
import { filterBountiesProposals } from './helpers/filterBountyProposals.js';

type Result = [Option<PalletBountiesBounty>[], Option<Bytes>[], BountyIndex[], DeriveCollectiveProposal[]];

function parseResult ([maybeBounties, maybeDescriptions, ids, bountyProposals]: Result): DeriveBounties {
  const bounties: DeriveBounties = [];

  maybeBounties.forEach((bounty, index) => {
    if (bounty.isSome) {
      bounties.push({
        bounty: bounty.unwrap(),
        description: maybeDescriptions[index].unwrapOrDefault().toUtf8(),
        index: ids[index],
        proposals: bountyProposals.filter((bountyProposal) =>
          bountyProposal.proposal && ids[index].eq(bountyProposal.proposal.args[0])
        )
      });
    }
  });

  return bounties;
}

/**
 * @name bounties
 * @descrive Retrieves all active bounties, their descriptions, and associated proposals.
 * @example
 * ```javascript
 * const bounties = await api.derive.bounties();
 * console.log("Active bounties:", bounties);
 * ```
 */
export function bounties (instanceId: string, api: DeriveApi): () => Observable<DeriveBounties> {
  const bountyBase = api.query.bounties || api.query.treasury;

  return memo(instanceId, (): Observable<DeriveBounties> =>
    bountyBase.bounties
      ? combineLatest([
        bountyBase.bountyCount(),
        api.query.council
          ? api.query.council.proposalCount()
          : of(0)
      ]).pipe(
        switchMap(() => combineLatest([
          bountyBase.bounties.keys(),
          api.derive.council
            ? api.derive.council.proposals()
            : of([])
        ])),
        switchMap(([keys, proposals]): Observable<Result> => {
          const ids = keys.map(({ args: [id] }) => id);

          return combineLatest([
            bountyBase.bounties.multi(ids),
            bountyBase.bountyDescriptions.multi(ids),
            of(ids),
            of(filterBountiesProposals(api, proposals))
          ]);
        }),
        map(parseResult)
      )
      : of(parseResult([[], [], [], []]))
  );
}
