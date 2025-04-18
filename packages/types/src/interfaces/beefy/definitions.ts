// Copyright 2017-2025 @polkadot/types authors & contributors
// SPDX-License-Identifier: Apache-2.0

// order important in structs... :)
/* eslint-disable sort-keys */

import type { Definitions } from '../../types/index.js';

import { rpc } from './rpc.js';
import { runtime } from './runtime.js';

export default {
  rpc,
  runtime,
  types: {
    BeefyAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyCommitment: {
      payload: 'BeefyPayload',
      blockNumber: 'BlockNumber',
      validatorSetId: 'ValidatorSetId'
    },
    BeefyId: '[u8; 33]',
    BeefyEquivocationProof: {
      first: 'BeefyVoteMessage',
      second: 'BeefyVoteMessage'
    },
    BeefyCompactSignedCommitment: {
      commitment: 'BeefyCommitment',
      signaturesFrom: 'Vec<u8>',
      validatorSetLen: 'u32',
      signaturesCompact: 'Vec<EcdsaSignature>'
    },
    BeefySignedCommitment: {
      commitment: 'BeefyCommitment',
      signatures: 'Vec<Option<EcdsaSignature>>'
    },
    BeefyVersionedFinalityProof: {
      _enum: {
        V0: 'Null',
        V1: 'BeefyCompactSignedCommitment'
      }
    },
    BeefyNextAuthoritySet: {
      id: 'u64',
      len: 'u32',
      root: 'H256'
    },
    BeefyPayload: 'Vec<(BeefyPayloadId, Bytes)>',
    BeefyPayloadId: '[u8;2]',
    BeefyVoteMessage: {
      commitment: 'BeefyCommitment',
      id: 'AuthorityId',
      signature: 'Signature'
    },
    MmrRootHash: 'H256',
    ValidatorSetId: 'u64',
    ValidatorSet: {
      validators: 'Vec<AuthorityId>',
      id: 'ValidatorSetId'
    }
  }
} as Definitions;
