// Copyright 2017-2025 @polkadot/api-contract authors & contributors
// SPDX-License-Identifier: Apache-2.0

/// <reference types="@polkadot/dev-test/globals.d.ts" />

import fs from 'node:fs';

import { toPromiseMethod } from '@polkadot/api';

import v0contractFlipper from '../test/contracts/ink/v0/flipper.contract.json' assert { type: 'json' };
import v0abiFlipper from '../test/contracts/ink/v0/flipper.json' assert { type: 'json' };
import v1contractFlipper from '../test/contracts/ink/v1/flipper.contract.json' assert { type: 'json' };
import v6contractErc20 from '../test/contracts/ink/v6/erc20.contract.json' assert { type: 'json' };
import { Code } from './Code.js';
import { mockApi, mockReviveApi } from './mock.js';

const v0wasmFlipper = fs.readFileSync(new URL('../test/contracts/ink/v0/flipper.wasm', import.meta.url), 'utf-8');

describe('Code', (): void => {
  it('can construct with an individual ABI/WASM combo', (): void => {
    expect(
      () => new Code(mockApi, v0abiFlipper as Record<string, unknown>, v0wasmFlipper, toPromiseMethod)
    ).not.toThrow();
  });

  it('can construct with an .contract ABI (v0)', (): void => {
    expect(
      () => new Code(mockApi, v0contractFlipper as Record<string, unknown>, null, toPromiseMethod)
    ).not.toThrow();
  });

  it('can construct with an .contract ABI (v1)', (): void => {
    expect(
      () => new Code(mockApi, v1contractFlipper as Record<string, unknown>, null, toPromiseMethod)
    ).not.toThrow();
  });

  it('can construct a revive compatible contract (v6)', (): void => {
    expect(
      () => new Code(mockApi, v6contractErc20 as Record<string, unknown>, null, toPromiseMethod)
    ).toThrow('The runtime does not expose api.tx.revive.instantiateWithCode with storageDepositLimit');

    expect(
      () => new Code(mockReviveApi, v6contractErc20 as Record<string, unknown>, null, toPromiseMethod)
    ).not.toThrow();
  });
});
