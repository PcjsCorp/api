// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Definitions } from '../../types/index.js';

import { v0 } from './v0.js';
import { v1 } from './v1.js';

// order important in structs... :)
/* eslint-disable sort-keys */

export default {
  rpc: {},
  types: {
    ...v0,
    ...v1,
    // latest mappings
    SiField: 'Si1Field',
    SiLookupTypeId: 'Si1LookupTypeId',
    SiPath: 'Si1Path',
    SiType: 'Si1Type',
    SiTypeDef: 'Si1TypeDef',
    SiTypeDefArray: 'Si1TypeDefArray',
    SiTypeDefBitSequence: 'Si1TypeDefBitSequence',
    SiTypeDefCompact: 'Si1TypeDefCompact',
    SiTypeDefComposite: 'Si1TypeDefComposite',
    SiTypeDefPrimitive: 'Si1TypeDefPrimitive',
    SiTypeDefSequence: 'Si1TypeDefSequence',
    SiTypeDefTuple: 'Si1TypeDefTuple',
    SiTypeParameter: 'Si1TypeParameter',
    SiTypeDefVariant: 'Si1TypeDefVariant',
    SiVariant: 'Si1Variant'
  }
} as Definitions;
