// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { runtime } from './runtime.js';

export default {
  rpc: {},
  runtime,
  types: {
    FungiblesAccessError: {
      _enum: ['AssetIdConversionFailed', 'AmountToBalanceConversionFailed']
    }
  }
} as Definitions;
