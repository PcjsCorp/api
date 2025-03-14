// Copyright 2017-2025 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

// Simple non-runnable checks to test type definitions in the editor itself

import '@polkadot/api-augment';

import type { TestKeyringMapSubstrate } from '@polkadot/keyring/testingPairs';

import { ApiPromise } from '@polkadot/api';
import { BlueprintPromise, ContractPromise } from '@polkadot/api-contract';
import { createTestPairs } from '@polkadot/keyring/testingPairs';

import abiIncrementer from './test/contracts/ink/v0/incrementer.json' assert { type: 'json' };

async function checkBlueprint (api: ApiPromise, pairs: TestKeyringMapSubstrate): Promise<void> {
  const blueprint = new BlueprintPromise(api, abiIncrementer as Record<string, unknown>, '0x1234');

  await blueprint.tx['new']({ gasLimit: 456, salt: '0x1234', value: 123 }, 42).signAndSend(pairs.bob);
  await blueprint.tx['new']({ gasLimit: 456, value: 123 }, 42).signAndSend(pairs.bob);
}

async function checkContract (api: ApiPromise, pairs: TestKeyringMapSubstrate): Promise<void> {
  const contract = new ContractPromise(api, abiIncrementer as Record<string, unknown>, '0x1234');

  // queries
  await contract.query['get'](pairs.alice.address, {});

  // execute
  await contract.tx['inc']({ gasLimit: 1234 }, 123).signAndSend(pairs.eve);
}

async function main (): Promise<void> {
  const api = await ApiPromise.create({
    hasher: (data: Uint8Array): Uint8Array => data
  });
  const pairs = createTestPairs();

  await Promise.all([
    checkBlueprint(api, pairs),
    checkContract(api, pairs)
  ]);
}

main().catch(console.error);
