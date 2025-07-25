// Copyright 2017-2025 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { SubmittableResult } from '@polkadot/api';
import type { EventRecord } from '@polkadot/types/interfaces';

type ContractEvents = 'CodeStored' | 'ContractEmitted' | 'ContractExecution' | 'Instantiated';

export function applyOnEvent <T> (result: SubmittableResult, types: ContractEvents[], fn: (records: EventRecord[]) => T, isRevive: boolean): T | undefined {
  if (result.isInBlock || result.isFinalized) {
    const section = isRevive ? 'revive' : 'contracts';
    const records = result.filterRecords(section, types);

    if (records.length) {
      return fn(records);
    }
  }

  return undefined;
}
