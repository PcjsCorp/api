// Copyright 2017-2025 @polkadot/api-derive authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Observable } from 'rxjs';
import type { SignedBlockExtended } from '../type/types.js';
import type { DeriveApi } from '../types.js';

import { switchMap } from 'rxjs';

import { memo } from '../util/index.js';

/**
 * @name subscribeNewBlocks
 * @returns The latest block & events for that block
 * @example
 * ```javascript
 * const unsub = await api.derive.chain.subscribeNewBlocks((newBlock) => {
 *   console.log(`Block Hash: ${newBlock.hash}`);
 * });
 * ```
 */
export function subscribeNewBlocks (instanceId: string, api: DeriveApi): () => Observable<SignedBlockExtended> {
  return memo(instanceId, (): Observable<SignedBlockExtended> =>
    api.derive.chain.subscribeNewHeads().pipe(
      switchMap((header) =>
        api.derive.chain.getBlock(header.createdAtHash || header.hash)
      )
    )
  );
}
