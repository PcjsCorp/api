// Copyright 2017-2025 @polkadot/types-codec authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Registry } from '../types/index.js';

import { i32 } from './I32.js';

/**
 * @name ISize
 * @description
 * A System default signed number, typically used in RPC to report non-consensus
 * data. It is a wrapper for [[I32]] as a WASM default (as generated by Rust bindings).
 * It is not to be used, since it creates consensus mismatches.
 */
export class isize extends i32 {
  constructor (registry: Registry, value?: unknown) {
    super(registry, value);

    throw new Error('The `isize` type should not be used. Since it is platform-specific, it creates incompatibilities between native (generally i64) and WASM (always i32) code. Use one of the `i32` or `i64` types explicitly.');
  }
}
