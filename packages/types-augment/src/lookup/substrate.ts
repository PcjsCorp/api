// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

/* eslint-disable sort-keys */

export default {
  /**
   * Lookup3: frame_system::AccountInfo<Nonce, pallet_balances::types::AccountData<Balance>>
   **/
  FrameSystemAccountInfo: {
    nonce: 'u32',
    consumers: 'u32',
    providers: 'u32',
    sufficients: 'u32',
    data: 'PalletBalancesAccountData'
  },
  /**
   * Lookup5: pallet_balances::types::AccountData<Balance>
   **/
  PalletBalancesAccountData: {
    free: 'u128',
    reserved: 'u128',
    frozen: 'u128',
    flags: 'u128'
  },
  /**
   * Lookup9: frame_support::dispatch::PerDispatchClass<sp_weights::weight_v2::Weight>
   **/
  FrameSupportDispatchPerDispatchClassWeight: {
    normal: 'SpWeightsWeightV2Weight',
    operational: 'SpWeightsWeightV2Weight',
    mandatory: 'SpWeightsWeightV2Weight'
  },
  /**
   * Lookup10: sp_weights::weight_v2::Weight
   **/
  SpWeightsWeightV2Weight: {
    refTime: 'Compact<u64>',
    proofSize: 'Compact<u64>'
  },
  /**
   * Lookup15: sp_runtime::generic::digest::Digest
   **/
  SpRuntimeDigest: {
    logs: 'Vec<SpRuntimeDigestDigestItem>'
  },
  /**
   * Lookup17: sp_runtime::generic::digest::DigestItem
   **/
  SpRuntimeDigestDigestItem: {
    _enum: {
      Other: 'Bytes',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      Consensus: '([u8;4],Bytes)',
      Seal: '([u8;4],Bytes)',
      PreRuntime: '([u8;4],Bytes)',
      __Unused7: 'Null',
      RuntimeEnvironmentUpdated: 'Null'
    }
  },
  /**
   * Lookup20: frame_system::EventRecord<kitchensink_runtime::RuntimeEvent, primitive_types::H256>
   **/
  FrameSystemEventRecord: {
    phase: 'FrameSystemPhase',
    event: 'Event',
    topics: 'Vec<H256>'
  },
  /**
   * Lookup22: frame_system::pallet::Event<T>
   **/
  FrameSystemEvent: {
    _enum: {
      ExtrinsicSuccess: {
        dispatchInfo: 'FrameSystemDispatchEventInfo',
      },
      ExtrinsicFailed: {
        dispatchError: 'SpRuntimeDispatchError',
        dispatchInfo: 'FrameSystemDispatchEventInfo',
      },
      CodeUpdated: 'Null',
      NewAccount: {
        account: 'AccountId32',
      },
      KilledAccount: {
        account: 'AccountId32',
      },
      Remarked: {
        _alias: {
          hash_: 'hash',
        },
        sender: 'AccountId32',
        hash_: 'H256',
      },
      UpgradeAuthorized: {
        codeHash: 'H256',
        checkVersion: 'bool',
      },
      RejectedInvalidAuthorizedUpgrade: {
        codeHash: 'H256',
        error: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup23: frame_system::DispatchEventInfo
   **/
  FrameSystemDispatchEventInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup24: frame_support::dispatch::DispatchClass
   **/
  FrameSupportDispatchDispatchClass: {
    _enum: ['Normal', 'Operational', 'Mandatory']
  },
  /**
   * Lookup25: frame_support::dispatch::Pays
   **/
  FrameSupportDispatchPays: {
    _enum: ['Yes', 'No']
  },
  /**
   * Lookup26: sp_runtime::DispatchError
   **/
  SpRuntimeDispatchError: {
    _enum: {
      Other: 'Null',
      CannotLookup: 'Null',
      BadOrigin: 'Null',
      Module: 'SpRuntimeModuleError',
      ConsumerRemaining: 'Null',
      NoProviders: 'Null',
      TooManyConsumers: 'Null',
      Token: 'SpRuntimeTokenError',
      Arithmetic: 'SpArithmeticArithmeticError',
      Transactional: 'SpRuntimeTransactionalError',
      Exhausted: 'Null',
      Corruption: 'Null',
      Unavailable: 'Null',
      RootNotAllowed: 'Null',
      Trie: 'SpRuntimeProvingTrieTrieError'
    }
  },
  /**
   * Lookup27: sp_runtime::ModuleError
   **/
  SpRuntimeModuleError: {
    index: 'u8',
    error: '[u8;4]'
  },
  /**
   * Lookup28: sp_runtime::TokenError
   **/
  SpRuntimeTokenError: {
    _enum: ['FundsUnavailable', 'OnlyProvider', 'BelowMinimum', 'CannotCreate', 'UnknownAsset', 'Frozen', 'Unsupported', 'CannotCreateHold', 'NotExpendable', 'Blocked']
  },
  /**
   * Lookup29: sp_arithmetic::ArithmeticError
   **/
  SpArithmeticArithmeticError: {
    _enum: ['Underflow', 'Overflow', 'DivisionByZero']
  },
  /**
   * Lookup30: sp_runtime::TransactionalError
   **/
  SpRuntimeTransactionalError: {
    _enum: ['LimitReached', 'NoLayer']
  },
  /**
   * Lookup31: sp_runtime::proving_trie::TrieError
   **/
  SpRuntimeProvingTrieTrieError: {
    _enum: ['InvalidStateRoot', 'IncompleteDatabase', 'ValueAtIncompleteKey', 'DecoderError', 'InvalidHash', 'DuplicateKey', 'ExtraneousNode', 'ExtraneousValue', 'ExtraneousHashReference', 'InvalidChildReference', 'ValueMismatch', 'IncompleteProof', 'RootMismatch', 'DecodeError']
  },
  /**
   * Lookup32: pallet_utility::pallet::Event
   **/
  PalletUtilityEvent: {
    _enum: {
      BatchInterrupted: {
        index: 'u32',
        error: 'SpRuntimeDispatchError',
      },
      BatchCompleted: 'Null',
      BatchCompletedWithErrors: 'Null',
      ItemCompleted: 'Null',
      ItemFailed: {
        error: 'SpRuntimeDispatchError',
      },
      DispatchedAs: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      IfElseMainSuccess: 'Null',
      IfElseFallbackCalled: {
        mainError: 'SpRuntimeDispatchError'
      }
    }
  },
  /**
   * Lookup35: pallet_indices::pallet::Event<T>
   **/
  PalletIndicesEvent: {
    _enum: {
      IndexAssigned: {
        who: 'AccountId32',
        index: 'u32',
      },
      IndexFreed: {
        index: 'u32',
      },
      IndexFrozen: {
        index: 'u32',
        who: 'AccountId32',
      },
      DepositPoked: {
        who: 'AccountId32',
        index: 'u32',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup36: pallet_balances::pallet::Event<T, I>
   **/
  PalletBalancesEvent: {
    _enum: {
      Endowed: {
        account: 'AccountId32',
        freeBalance: 'u128',
      },
      DustLost: {
        account: 'AccountId32',
        amount: 'u128',
      },
      Transfer: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      BalanceSet: {
        who: 'AccountId32',
        free: 'u128',
      },
      Reserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unreserved: {
        who: 'AccountId32',
        amount: 'u128',
      },
      ReserveRepatriated: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
        destinationStatus: 'FrameSupportTokensMiscBalanceStatus',
      },
      Deposit: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdraw: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Minted: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Suspended: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Restored: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Upgraded: {
        who: 'AccountId32',
      },
      Issued: {
        amount: 'u128',
      },
      Rescinded: {
        amount: 'u128',
      },
      Locked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Unlocked: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Frozen: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      TotalIssuanceForced: {
        _alias: {
          new_: 'new',
        },
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup37: frame_support::traits::tokens::misc::BalanceStatus
   **/
  FrameSupportTokensMiscBalanceStatus: {
    _enum: ['Free', 'Reserved']
  },
  /**
   * Lookup38: pallet_transaction_payment::pallet::Event<T>
   **/
  PalletTransactionPaymentEvent: {
    _enum: {
      TransactionFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128'
      }
    }
  },
  /**
   * Lookup39: pallet_asset_conversion_tx_payment::pallet::Event<T>
   **/
  PalletAssetConversionTxPaymentEvent: {
    _enum: {
      AssetTxFeePaid: {
        who: 'AccountId32',
        actualFee: 'u128',
        tip: 'u128',
        assetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
      },
      AssetRefundFailed: {
        nativeAmountKept: 'u128'
      }
    }
  },
  /**
   * Lookup40: frame_support::traits::tokens::fungible::union_of::NativeOrWithId<AssetId>
   **/
  FrameSupportTokensFungibleUnionOfNativeOrWithId: {
    _enum: {
      Native: 'Null',
      WithId: 'u32'
    }
  },
  /**
   * Lookup41: pallet_election_provider_multi_phase::pallet::Event<T>
   **/
  PalletElectionProviderMultiPhaseEvent: {
    _enum: {
      SolutionStored: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        origin: 'Option<AccountId32>',
        prevEjected: 'bool',
      },
      ElectionFinalized: {
        compute: 'PalletElectionProviderMultiPhaseElectionCompute',
        score: 'SpNposElectionsElectionScore',
      },
      ElectionFailed: 'Null',
      Rewarded: {
        account: 'AccountId32',
        value: 'u128',
      },
      Slashed: {
        account: 'AccountId32',
        value: 'u128',
      },
      PhaseTransitioned: {
        from: 'PalletElectionProviderMultiPhasePhase',
        to: 'PalletElectionProviderMultiPhasePhase',
        round: 'u32'
      }
    }
  },
  /**
   * Lookup42: pallet_election_provider_multi_phase::ElectionCompute
   **/
  PalletElectionProviderMultiPhaseElectionCompute: {
    _enum: ['OnChain', 'Signed', 'Unsigned', 'Fallback', 'Emergency']
  },
  /**
   * Lookup44: sp_npos_elections::ElectionScore
   **/
  SpNposElectionsElectionScore: {
    minimalStake: 'u128',
    sumStake: 'u128',
    sumStakeSquared: 'u128'
  },
  /**
   * Lookup45: pallet_election_provider_multi_phase::Phase<Bn>
   **/
  PalletElectionProviderMultiPhasePhase: {
    _enum: {
      Off: 'Null',
      Signed: 'Null',
      Unsigned: '(bool,u32)',
      Emergency: 'Null'
    }
  },
  /**
   * Lookup47: pallet_staking::pallet::pallet::Event<T>
   **/
  PalletStakingPalletEvent: {
    _enum: {
      EraPaid: {
        eraIndex: 'u32',
        validatorPayout: 'u128',
        remainder: 'u128',
      },
      Rewarded: {
        stash: 'AccountId32',
        dest: 'PalletStakingRewardDestination',
        amount: 'u128',
      },
      Slashed: {
        staker: 'AccountId32',
        amount: 'u128',
      },
      SlashReported: {
        validator: 'AccountId32',
        fraction: 'Perbill',
        slashEra: 'u32',
      },
      OldSlashingReportDiscarded: {
        sessionIndex: 'u32',
      },
      StakersElected: 'Null',
      Bonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Unbonded: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      Kicked: {
        nominator: 'AccountId32',
        stash: 'AccountId32',
      },
      StakingElectionFailed: 'Null',
      Chilled: {
        stash: 'AccountId32',
      },
      PayoutStarted: {
        eraIndex: 'u32',
        validatorStash: 'AccountId32',
        page: 'u32',
        next: 'Option<u32>',
      },
      ValidatorPrefsSet: {
        stash: 'AccountId32',
        prefs: 'PalletStakingValidatorPrefs',
      },
      SnapshotVotersSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      SnapshotTargetsSizeExceeded: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      ForceEra: {
        mode: 'PalletStakingForcing',
      },
      ControllerBatchDeprecated: {
        failures: 'u32',
      },
      CurrencyMigrated: {
        stash: 'AccountId32',
        forceWithdraw: 'u128'
      }
    }
  },
  /**
   * Lookup48: pallet_staking::RewardDestination<sp_core::crypto::AccountId32>
   **/
  PalletStakingRewardDestination: {
    _enum: {
      Staked: 'Null',
      Stash: 'Null',
      Controller: 'Null',
      Account: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup51: pallet_staking::ValidatorPrefs
   **/
  PalletStakingValidatorPrefs: {
    commission: 'Compact<Perbill>',
    blocked: 'bool'
  },
  /**
   * Lookup53: pallet_staking::Forcing
   **/
  PalletStakingForcing: {
    _enum: ['NotForcing', 'ForceNew', 'ForceNone', 'ForceAlways']
  },
  /**
   * Lookup54: pallet_session::pallet::Event<T>
   **/
  PalletSessionEvent: {
    _enum: {
      NewSession: {
        sessionIndex: 'u32',
      },
      ValidatorDisabled: {
        validator: 'AccountId32',
      },
      ValidatorReenabled: {
        validator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup55: pallet_democracy::pallet::Event<T>
   **/
  PalletDemocracyEvent: {
    _enum: {
      Proposed: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      Tabled: {
        proposalIndex: 'u32',
        deposit: 'u128',
      },
      ExternalTabled: 'Null',
      Started: {
        refIndex: 'u32',
        threshold: 'PalletDemocracyVoteThreshold',
      },
      Passed: {
        refIndex: 'u32',
      },
      NotPassed: {
        refIndex: 'u32',
      },
      Cancelled: {
        refIndex: 'u32',
      },
      Delegated: {
        who: 'AccountId32',
        target: 'AccountId32',
      },
      Undelegated: {
        account: 'AccountId32',
      },
      Vetoed: {
        who: 'AccountId32',
        proposalHash: 'H256',
        until: 'u32',
      },
      Blacklisted: {
        proposalHash: 'H256',
      },
      Voted: {
        voter: 'AccountId32',
        refIndex: 'u32',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      Seconded: {
        seconder: 'AccountId32',
        propIndex: 'u32',
      },
      ProposalCanceled: {
        propIndex: 'u32',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256',
      },
      MetadataTransferred: {
        _alias: {
          hash_: 'hash',
        },
        prevOwner: 'PalletDemocracyMetadataOwner',
        owner: 'PalletDemocracyMetadataOwner',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup56: pallet_democracy::vote_threshold::VoteThreshold
   **/
  PalletDemocracyVoteThreshold: {
    _enum: ['SuperMajorityApprove', 'SuperMajorityAgainst', 'SimpleMajority']
  },
  /**
   * Lookup57: pallet_democracy::vote::AccountVote<Balance>
   **/
  PalletDemocracyVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128'
      }
    }
  },
  /**
   * Lookup59: pallet_democracy::types::MetadataOwner
   **/
  PalletDemocracyMetadataOwner: {
    _enum: {
      External: 'Null',
      Proposal: 'u32',
      Referendum: 'u32'
    }
  },
  /**
   * Lookup60: pallet_collective::pallet::Event<T, I>
   **/
  PalletCollectiveEvent: {
    _enum: {
      Proposed: {
        account: 'AccountId32',
        proposalIndex: 'u32',
        proposalHash: 'H256',
        threshold: 'u32',
      },
      Voted: {
        account: 'AccountId32',
        proposalHash: 'H256',
        voted: 'bool',
        yes: 'u32',
        no: 'u32',
      },
      Approved: {
        proposalHash: 'H256',
      },
      Disapproved: {
        proposalHash: 'H256',
      },
      Executed: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MemberExecuted: {
        proposalHash: 'H256',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Closed: {
        proposalHash: 'H256',
        yes: 'u32',
        no: 'u32',
      },
      Killed: {
        proposalHash: 'H256',
      },
      ProposalCostBurned: {
        proposalHash: 'H256',
        who: 'AccountId32',
      },
      ProposalCostReleased: {
        proposalHash: 'H256',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup62: pallet_elections_phragmen::pallet::Event<T>
   **/
  PalletElectionsPhragmenEvent: {
    _enum: {
      NewTerm: {
        newMembers: 'Vec<(AccountId32,u128)>',
      },
      EmptyTerm: 'Null',
      ElectionError: 'Null',
      MemberKicked: {
        member: 'AccountId32',
      },
      Renounced: {
        candidate: 'AccountId32',
      },
      CandidateSlashed: {
        candidate: 'AccountId32',
        amount: 'u128',
      },
      SeatHolderSlashed: {
        seatHolder: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup65: pallet_membership::pallet::Event<T, I>
   **/
  PalletMembershipEvent: {
    _enum: ['MemberAdded', 'MemberRemoved', 'MembersSwapped', 'MembersReset', 'KeyChanged', 'Dummy']
  },
  /**
   * Lookup66: pallet_grandpa::pallet::Event
   **/
  PalletGrandpaEvent: {
    _enum: {
      NewAuthorities: {
        authoritySet: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
      },
      Paused: 'Null',
      Resumed: 'Null'
    }
  },
  /**
   * Lookup69: sp_consensus_grandpa::app::Public
   **/
  SpConsensusGrandpaAppPublic: '[u8;32]',
  /**
   * Lookup70: pallet_treasury::pallet::Event<T, I>
   **/
  PalletTreasuryEvent: {
    _enum: {
      Spending: {
        budgetRemaining: 'u128',
      },
      Awarded: {
        proposalIndex: 'u32',
        award: 'u128',
        account: 'AccountId32',
      },
      Burnt: {
        burntFunds: 'u128',
      },
      Rollover: {
        rolloverBalance: 'u128',
      },
      Deposit: {
        value: 'u128',
      },
      SpendApproved: {
        proposalIndex: 'u32',
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      UpdatedInactive: {
        reactivated: 'u128',
        deactivated: 'u128',
      },
      AssetSpendApproved: {
        index: 'u32',
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        amount: 'u128',
        beneficiary: 'AccountId32',
        validFrom: 'u32',
        expireAt: 'u32',
      },
      AssetSpendVoided: {
        index: 'u32',
      },
      Paid: {
        index: 'u32',
        paymentId: 'Null',
      },
      PaymentFailed: {
        index: 'u32',
        paymentId: 'Null',
      },
      SpendProcessed: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup71: pallet_asset_rate::pallet::Event<T>
   **/
  PalletAssetRateEvent: {
    _enum: {
      AssetRateCreated: {
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rate: 'u128',
      },
      AssetRateRemoved: {
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
      },
      AssetRateUpdated: {
        _alias: {
          new_: 'new',
        },
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        old: 'u128',
        new_: 'u128'
      }
    }
  },
  /**
   * Lookup73: pallet_contracts::pallet::Event<T>
   **/
  PalletContractsEvent: {
    _enum: {
      Instantiated: {
        deployer: 'AccountId32',
        contract: 'AccountId32',
      },
      Terminated: {
        contract: 'AccountId32',
        beneficiary: 'AccountId32',
      },
      CodeStored: {
        codeHash: 'H256',
        depositHeld: 'u128',
        uploader: 'AccountId32',
      },
      ContractEmitted: {
        contract: 'AccountId32',
        data: 'Bytes',
      },
      CodeRemoved: {
        codeHash: 'H256',
        depositReleased: 'u128',
        remover: 'AccountId32',
      },
      ContractCodeUpdated: {
        contract: 'AccountId32',
        newCodeHash: 'H256',
        oldCodeHash: 'H256',
      },
      Called: {
        caller: 'PalletContractsOrigin',
        contract: 'AccountId32',
      },
      DelegateCalled: {
        contract: 'AccountId32',
        codeHash: 'H256',
      },
      StorageDepositTransferredAndHeld: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      StorageDepositTransferredAndReleased: {
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup74: pallet_contracts::Origin<kitchensink_runtime::Runtime>
   **/
  PalletContractsOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32'
    }
  },
  /**
   * Lookup75: kitchensink_runtime::Runtime
   **/
  KitchensinkRuntimeRuntime: 'Null',
  /**
   * Lookup76: pallet_sudo::pallet::Event<T>
   **/
  PalletSudoEvent: {
    _enum: {
      Sudid: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>',
      },
      KeyChanged: {
        _alias: {
          new_: 'new',
        },
        old: 'Option<AccountId32>',
        new_: 'AccountId32',
      },
      KeyRemoved: 'Null',
      SudoAsDone: {
        sudoResult: 'Result<Null, SpRuntimeDispatchError>'
      }
    }
  },
  /**
   * Lookup77: pallet_im_online::pallet::Event<T>
   **/
  PalletImOnlineEvent: {
    _enum: {
      HeartbeatReceived: {
        authorityId: 'PalletImOnlineSr25519AppSr25519Public',
      },
      AllGood: 'Null',
      SomeOffline: {
        offline: 'Vec<(AccountId32,Null)>'
      }
    }
  },
  /**
   * Lookup78: pallet_im_online::sr25519::app_sr25519::Public
   **/
  PalletImOnlineSr25519AppSr25519Public: '[u8;32]',
  /**
   * Lookup81: pallet_offences::pallet::Event
   **/
  PalletOffencesEvent: {
    _enum: {
      Offence: {
        kind: '[u8;16]',
        timeslot: 'Bytes'
      }
    }
  },
  /**
   * Lookup83: pallet_identity::pallet::Event<T>
   **/
  PalletIdentityEvent: {
    _enum: {
      IdentitySet: {
        who: 'AccountId32',
      },
      IdentityCleared: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      IdentityKilled: {
        who: 'AccountId32',
        deposit: 'u128',
      },
      JudgementRequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementUnrequested: {
        who: 'AccountId32',
        registrarIndex: 'u32',
      },
      JudgementGiven: {
        target: 'AccountId32',
        registrarIndex: 'u32',
      },
      RegistrarAdded: {
        registrarIndex: 'u32',
      },
      SubIdentityAdded: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentitiesSet: {
        main: 'AccountId32',
        numberOfSubs: 'u32',
        newDeposit: 'u128',
      },
      SubIdentityRenamed: {
        sub: 'AccountId32',
        main: 'AccountId32',
      },
      SubIdentityRemoved: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      SubIdentityRevoked: {
        sub: 'AccountId32',
        main: 'AccountId32',
        deposit: 'u128',
      },
      AuthorityAdded: {
        authority: 'AccountId32',
      },
      AuthorityRemoved: {
        authority: 'AccountId32',
      },
      UsernameSet: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      UsernameQueued: {
        who: 'AccountId32',
        username: 'Bytes',
        expiration: 'u32',
      },
      PreapprovalExpired: {
        whose: 'AccountId32',
      },
      PrimaryUsernameSet: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      DanglingUsernameRemoved: {
        who: 'AccountId32',
        username: 'Bytes',
      },
      UsernameUnbound: {
        username: 'Bytes',
      },
      UsernameRemoved: {
        username: 'Bytes',
      },
      UsernameKilled: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup85: pallet_society::pallet::Event<T, I>
   **/
  PalletSocietyEvent: {
    _enum: {
      Founded: {
        founder: 'AccountId32',
      },
      Bid: {
        candidateId: 'AccountId32',
        offer: 'u128',
      },
      Vouch: {
        candidateId: 'AccountId32',
        offer: 'u128',
        vouching: 'AccountId32',
      },
      AutoUnbid: {
        candidate: 'AccountId32',
      },
      Unbid: {
        candidate: 'AccountId32',
      },
      Unvouch: {
        candidate: 'AccountId32',
      },
      Inducted: {
        primary: 'AccountId32',
        candidates: 'Vec<AccountId32>',
      },
      SuspendedMemberJudgement: {
        who: 'AccountId32',
        judged: 'bool',
      },
      CandidateSuspended: {
        candidate: 'AccountId32',
      },
      MemberSuspended: {
        member: 'AccountId32',
      },
      Challenged: {
        member: 'AccountId32',
      },
      Vote: {
        candidate: 'AccountId32',
        voter: 'AccountId32',
        vote: 'bool',
      },
      DefenderVote: {
        voter: 'AccountId32',
        vote: 'bool',
      },
      NewParams: {
        params: 'PalletSocietyGroupParams',
      },
      Unfounded: {
        founder: 'AccountId32',
      },
      Deposit: {
        value: 'u128',
      },
      Elevated: {
        member: 'AccountId32',
        rank: 'u32'
      }
    }
  },
  /**
   * Lookup87: pallet_society::GroupParams<Balance>
   **/
  PalletSocietyGroupParams: {
    maxMembers: 'u32',
    maxIntake: 'u32',
    maxStrikes: 'u32',
    candidateDeposit: 'u128'
  },
  /**
   * Lookup88: pallet_recovery::pallet::Event<T>
   **/
  PalletRecoveryEvent: {
    _enum: {
      RecoveryCreated: {
        account: 'AccountId32',
      },
      RecoveryInitiated: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryVouched: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
        sender: 'AccountId32',
      },
      RecoveryClosed: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      AccountRecovered: {
        lostAccount: 'AccountId32',
        rescuerAccount: 'AccountId32',
      },
      RecoveryRemoved: {
        lostAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup89: pallet_vesting::pallet::Event<T>
   **/
  PalletVestingEvent: {
    _enum: {
      VestingUpdated: {
        account: 'AccountId32',
        unvested: 'u128',
      },
      VestingCompleted: {
        account: 'AccountId32'
      }
    }
  },
  /**
   * Lookup90: pallet_scheduler::pallet::Event<T>
   **/
  PalletSchedulerEvent: {
    _enum: {
      Scheduled: {
        when: 'u32',
        index: 'u32',
      },
      Canceled: {
        when: 'u32',
        index: 'u32',
      },
      Dispatched: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      RetrySet: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
        period: 'u32',
        retries: 'u8',
      },
      RetryCancelled: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      CallUnavailable: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PeriodicFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      RetryFailed: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      PermanentlyOverweight: {
        task: '(u32,u32)',
        id: 'Option<[u8;32]>',
      },
      AgendaIncomplete: {
        when: 'u32'
      }
    }
  },
  /**
   * Lookup93: pallet_glutton::pallet::Event
   **/
  PalletGluttonEvent: {
    _enum: {
      PalletInitialized: {
        reinit: 'bool',
      },
      ComputationLimitSet: {
        compute: 'u64',
      },
      StorageLimitSet: {
        storage: 'u64',
      },
      BlockLengthLimitSet: {
        blockLength: 'u64'
      }
    }
  },
  /**
   * Lookup95: pallet_preimage::pallet::Event<T>
   **/
  PalletPreimageEvent: {
    _enum: {
      Noted: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Requested: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Cleared: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup96: pallet_proxy::pallet::Event<T>
   **/
  PalletProxyEvent: {
    _enum: {
      ProxyExecuted: {
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      PureCreated: {
        pure: 'AccountId32',
        who: 'AccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        disambiguationIndex: 'u16',
      },
      Announced: {
        real: 'AccountId32',
        proxy: 'AccountId32',
        callHash: 'H256',
      },
      ProxyAdded: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      ProxyRemoved: {
        delegator: 'AccountId32',
        delegatee: 'AccountId32',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      DepositPoked: {
        who: 'AccountId32',
        kind: 'PalletProxyDepositKind',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup97: kitchensink_runtime::ProxyType
   **/
  KitchensinkRuntimeProxyType: {
    _enum: ['Any', 'NonTransfer', 'Governance', 'Staking']
  },
  /**
   * Lookup99: pallet_proxy::DepositKind
   **/
  PalletProxyDepositKind: {
    _enum: ['Proxies', 'Announcements']
  },
  /**
   * Lookup100: pallet_multisig::pallet::Event<T>
   **/
  PalletMultisigEvent: {
    _enum: {
      NewMultisig: {
        approving: 'AccountId32',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigApproval: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      MultisigExecuted: {
        approving: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      MultisigCancelled: {
        cancelling: 'AccountId32',
        timepoint: 'PalletMultisigTimepoint',
        multisig: 'AccountId32',
        callHash: '[u8;32]',
      },
      DepositPoked: {
        who: 'AccountId32',
        callHash: '[u8;32]',
        oldDeposit: 'u128',
        newDeposit: 'u128'
      }
    }
  },
  /**
   * Lookup101: pallet_multisig::Timepoint<BlockNumber>
   **/
  PalletMultisigTimepoint: {
    height: 'u32',
    index: 'u32'
  },
  /**
   * Lookup102: pallet_bounties::pallet::Event<T, I>
   **/
  PalletBountiesEvent: {
    _enum: {
      BountyProposed: {
        index: 'u32',
      },
      BountyRejected: {
        index: 'u32',
        bond: 'u128',
      },
      BountyBecameActive: {
        index: 'u32',
      },
      BountyAwarded: {
        index: 'u32',
        beneficiary: 'AccountId32',
      },
      BountyClaimed: {
        index: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      BountyCanceled: {
        index: 'u32',
      },
      BountyExtended: {
        index: 'u32',
      },
      BountyApproved: {
        index: 'u32',
      },
      CuratorProposed: {
        bountyId: 'u32',
        curator: 'AccountId32',
      },
      CuratorUnassigned: {
        bountyId: 'u32',
      },
      CuratorAccepted: {
        bountyId: 'u32',
        curator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup103: pallet_tips::pallet::Event<T, I>
   **/
  PalletTipsEvent: {
    _enum: {
      NewTip: {
        tipHash: 'H256',
      },
      TipClosing: {
        tipHash: 'H256',
      },
      TipClosed: {
        tipHash: 'H256',
        who: 'AccountId32',
        payout: 'u128',
      },
      TipRetracted: {
        tipHash: 'H256',
      },
      TipSlashed: {
        tipHash: 'H256',
        finder: 'AccountId32',
        deposit: 'u128'
      }
    }
  },
  /**
   * Lookup104: pallet_assets::pallet::Event<T, I>
   **/
  PalletAssetsEvent: {
    _enum: {
      Created: {
        assetId: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      Issued: {
        assetId: 'u32',
        owner: 'AccountId32',
        amount: 'u128',
      },
      Transferred: {
        assetId: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
        amount: 'u128',
      },
      Burned: {
        assetId: 'u32',
        owner: 'AccountId32',
        balance: 'u128',
      },
      TeamChanged: {
        assetId: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      OwnerChanged: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      Thawed: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      AssetFrozen: {
        assetId: 'u32',
      },
      AssetThawed: {
        assetId: 'u32',
      },
      AccountsDestroyed: {
        assetId: 'u32',
        accountsDestroyed: 'u32',
        accountsRemaining: 'u32',
      },
      ApprovalsDestroyed: {
        assetId: 'u32',
        approvalsDestroyed: 'u32',
        approvalsRemaining: 'u32',
      },
      DestructionStarted: {
        assetId: 'u32',
      },
      Destroyed: {
        assetId: 'u32',
      },
      ForceCreated: {
        assetId: 'u32',
        owner: 'AccountId32',
      },
      MetadataSet: {
        assetId: 'u32',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        assetId: 'u32',
      },
      ApprovedTransfer: {
        assetId: 'u32',
        source: 'AccountId32',
        delegate: 'AccountId32',
        amount: 'u128',
      },
      ApprovalCancelled: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      TransferredApproved: {
        assetId: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        destination: 'AccountId32',
        amount: 'u128',
      },
      AssetStatusChanged: {
        assetId: 'u32',
      },
      AssetMinBalanceChanged: {
        assetId: 'u32',
        newMinBalance: 'u128',
      },
      Touched: {
        assetId: 'u32',
        who: 'AccountId32',
        depositor: 'AccountId32',
      },
      Blocked: {
        assetId: 'u32',
        who: 'AccountId32',
      },
      Deposited: {
        assetId: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      Withdrawn: {
        assetId: 'u32',
        who: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup106: pallet_lottery::pallet::Event<T>
   **/
  PalletLotteryEvent: {
    _enum: {
      LotteryStarted: 'Null',
      CallsUpdated: 'Null',
      Winner: {
        winner: 'AccountId32',
        lotteryBalance: 'u128',
      },
      TicketBought: {
        who: 'AccountId32',
        callIndex: '(u8,u8)'
      }
    }
  },
  /**
   * Lookup108: pallet_nis::pallet::Event<T>
   **/
  PalletNisEvent: {
    _enum: {
      BidPlaced: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidRetracted: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      BidDropped: {
        who: 'AccountId32',
        amount: 'u128',
        duration: 'u32',
      },
      Issued: {
        index: 'u32',
        expiry: 'u32',
        who: 'AccountId32',
        proportion: 'Perquintill',
        amount: 'u128',
      },
      Thawed: {
        index: 'u32',
        who: 'AccountId32',
        proportion: 'Perquintill',
        amount: 'u128',
        dropped: 'bool',
      },
      Funded: {
        deficit: 'u128',
      },
      Transferred: {
        from: 'AccountId32',
        to: 'AccountId32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup110: pallet_uniques::pallet::Event<T, I>
   **/
  PalletUniquesEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'AccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Frozen: {
        collection: 'u32',
        item: 'u32',
      },
      Thawed: {
        collection: 'u32',
        item: 'u32',
      },
      CollectionFrozen: {
        collection: 'u32',
      },
      CollectionThawed: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'AccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'AccountId32',
        admin: 'AccountId32',
        freezer: 'AccountId32',
      },
      ApprovedTransfer: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      ItemStatusChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      MetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      MetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      OwnershipAcceptanceChanged: {
        who: 'AccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      ItemPriceSet: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        whitelistedBuyer: 'Option<AccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u32',
        item: 'u32',
      },
      ItemBought: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        seller: 'AccountId32',
        buyer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup114: pallet_nfts::pallet::Event<T, I>
   **/
  PalletNftsEvent: {
    _enum: {
      Created: {
        collection: 'u32',
        creator: 'AccountId32',
        owner: 'AccountId32',
      },
      ForceCreated: {
        collection: 'u32',
        owner: 'AccountId32',
      },
      Destroyed: {
        collection: 'u32',
      },
      Issued: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      Transferred: {
        collection: 'u32',
        item: 'u32',
        from: 'AccountId32',
        to: 'AccountId32',
      },
      Burned: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      ItemTransferLocked: {
        collection: 'u32',
        item: 'u32',
      },
      ItemTransferUnlocked: {
        collection: 'u32',
        item: 'u32',
      },
      ItemPropertiesLocked: {
        collection: 'u32',
        item: 'u32',
        lockMetadata: 'bool',
        lockAttributes: 'bool',
      },
      CollectionLocked: {
        collection: 'u32',
      },
      OwnerChanged: {
        collection: 'u32',
        newOwner: 'AccountId32',
      },
      TeamChanged: {
        collection: 'u32',
        issuer: 'Option<AccountId32>',
        admin: 'Option<AccountId32>',
        freezer: 'Option<AccountId32>',
      },
      TransferApproved: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
        deadline: 'Option<u32>',
      },
      ApprovalCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
        delegate: 'AccountId32',
      },
      AllApprovalsCancelled: {
        collection: 'u32',
        item: 'u32',
        owner: 'AccountId32',
      },
      CollectionConfigChanged: {
        collection: 'u32',
      },
      CollectionMetadataSet: {
        collection: 'u32',
        data: 'Bytes',
      },
      CollectionMetadataCleared: {
        collection: 'u32',
      },
      ItemMetadataSet: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
      },
      ItemMetadataCleared: {
        collection: 'u32',
        item: 'u32',
      },
      Redeposited: {
        collection: 'u32',
        successfulItems: 'Vec<u32>',
      },
      AttributeSet: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
        namespace: 'PalletNftsAttributeNamespace',
      },
      AttributeCleared: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        namespace: 'PalletNftsAttributeNamespace',
      },
      ItemAttributesApprovalAdded: {
        collection: 'u32',
        item: 'u32',
        delegate: 'AccountId32',
      },
      ItemAttributesApprovalRemoved: {
        collection: 'u32',
        item: 'u32',
        delegate: 'AccountId32',
      },
      OwnershipAcceptanceChanged: {
        who: 'AccountId32',
        maybeCollection: 'Option<u32>',
      },
      CollectionMaxSupplySet: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      CollectionMintSettingsUpdated: {
        collection: 'u32',
      },
      NextCollectionIdIncremented: {
        nextId: 'Option<u32>',
      },
      ItemPriceSet: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        whitelistedBuyer: 'Option<AccountId32>',
      },
      ItemPriceRemoved: {
        collection: 'u32',
        item: 'u32',
      },
      ItemBought: {
        collection: 'u32',
        item: 'u32',
        price: 'u128',
        seller: 'AccountId32',
        buyer: 'AccountId32',
      },
      TipSent: {
        collection: 'u32',
        item: 'u32',
        sender: 'AccountId32',
        receiver: 'AccountId32',
        amount: 'u128',
      },
      SwapCreated: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        desiredItem: 'Option<u32>',
        price: 'Option<PalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      SwapCancelled: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        desiredItem: 'Option<u32>',
        price: 'Option<PalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      SwapClaimed: {
        sentCollection: 'u32',
        sentItem: 'u32',
        sentItemOwner: 'AccountId32',
        receivedCollection: 'u32',
        receivedItem: 'u32',
        receivedItemOwner: 'AccountId32',
        price: 'Option<PalletNftsPriceWithDirection>',
        deadline: 'u32',
      },
      PreSignedAttributesSet: {
        collection: 'u32',
        item: 'u32',
        namespace: 'PalletNftsAttributeNamespace',
      },
      PalletAttributeSet: {
        collection: 'u32',
        item: 'Option<u32>',
        attribute: 'PalletNftsPalletAttributes',
        value: 'Bytes'
      }
    }
  },
  /**
   * Lookup116: pallet_nfts::types::AttributeNamespace<sp_core::crypto::AccountId32>
   **/
  PalletNftsAttributeNamespace: {
    _enum: {
      Pallet: 'Null',
      CollectionOwner: 'Null',
      ItemOwner: 'Null',
      Account: 'AccountId32'
    }
  },
  /**
   * Lookup118: pallet_nfts::types::PriceWithDirection<Amount>
   **/
  PalletNftsPriceWithDirection: {
    amount: 'u128',
    direction: 'PalletNftsPriceDirection'
  },
  /**
   * Lookup119: pallet_nfts::types::PriceDirection
   **/
  PalletNftsPriceDirection: {
    _enum: ['Send', 'Receive']
  },
  /**
   * Lookup120: pallet_nfts::types::PalletAttributes<CollectionId>
   **/
  PalletNftsPalletAttributes: {
    _enum: {
      UsedToClaim: 'u32',
      TransferDisabled: 'Null'
    }
  },
  /**
   * Lookup121: pallet_nft_fractionalization::pallet::Event<T>
   **/
  PalletNftFractionalizationEvent: {
    _enum: {
      NftFractionalized: {
        nftCollection: 'u32',
        nft: 'u32',
        fractions: 'u128',
        asset: 'u32',
        beneficiary: 'AccountId32',
      },
      NftUnified: {
        nftCollection: 'u32',
        nft: 'u32',
        asset: 'u32',
        beneficiary: 'AccountId32'
      }
    }
  },
  /**
   * Lookup122: pallet_salary::pallet::Event<T, I>
   **/
  PalletSalaryEvent: {
    _enum: {
      Inducted: {
        who: 'AccountId32',
      },
      Registered: {
        who: 'AccountId32',
        amount: 'u128',
      },
      Paid: {
        who: 'AccountId32',
        beneficiary: 'AccountId32',
        amount: 'u128',
        id: 'Null',
      },
      CycleStarted: {
        index: 'u32',
      },
      Swapped: {
        who: 'AccountId32',
        newWho: 'AccountId32'
      }
    }
  },
  /**
   * Lookup123: pallet_core_fellowship::pallet::Event<T, I>
   **/
  PalletCoreFellowshipEvent: {
    _enum: {
      ParamsChanged: {
        params: 'PalletCoreFellowshipParamsTypeU128',
      },
      ActiveChanged: {
        who: 'AccountId32',
        isActive: 'bool',
      },
      Inducted: {
        who: 'AccountId32',
      },
      Offboarded: {
        who: 'AccountId32',
      },
      Promoted: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      Demoted: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      Proven: {
        who: 'AccountId32',
        atRank: 'u16',
      },
      Requested: {
        who: 'AccountId32',
        wish: 'PalletCoreFellowshipWish',
      },
      EvidenceJudged: {
        who: 'AccountId32',
        wish: 'PalletCoreFellowshipWish',
        evidence: 'Bytes',
        oldRank: 'u16',
        newRank: 'Option<u16>',
      },
      Imported: {
        who: 'AccountId32',
        rank: 'u16',
      },
      Swapped: {
        who: 'AccountId32',
        newWho: 'AccountId32'
      }
    }
  },
  /**
   * Lookup124: pallet_core_fellowship::ParamsType<Balance, BlockNumber, Ranks>
   **/
  PalletCoreFellowshipParamsTypeU128: {
    activeSalary: 'Vec<u128>',
    passiveSalary: 'Vec<u128>',
    demotionPeriod: 'Vec<u32>',
    minPromotionPeriod: 'Vec<u32>',
    offboardTimeout: 'u32'
  },
  /**
   * Lookup128: pallet_core_fellowship::Wish
   **/
  PalletCoreFellowshipWish: {
    _enum: ['Retention', 'Promotion']
  },
  /**
   * Lookup131: pallet_transaction_storage::pallet::Event<T>
   **/
  PalletTransactionStorageEvent: {
    _enum: {
      Stored: {
        index: 'u32',
      },
      Renewed: {
        index: 'u32',
      },
      ProofChecked: 'Null'
    }
  },
  /**
   * Lookup132: pallet_bags_list::pallet::Event<T, I>
   **/
  PalletBagsListEvent: {
    _enum: {
      Rebagged: {
        who: 'AccountId32',
        from: 'u64',
        to: 'u64',
      },
      ScoreUpdated: {
        who: 'AccountId32',
        newScore: 'u64'
      }
    }
  },
  /**
   * Lookup133: pallet_state_trie_migration::pallet::Event<T>
   **/
  PalletStateTrieMigrationEvent: {
    _enum: {
      Migrated: {
        top: 'u32',
        child: 'u32',
        compute: 'PalletStateTrieMigrationMigrationCompute',
      },
      Slashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      AutoMigrationFinished: 'Null',
      Halted: {
        error: 'PalletStateTrieMigrationError'
      }
    }
  },
  /**
   * Lookup134: pallet_state_trie_migration::pallet::MigrationCompute
   **/
  PalletStateTrieMigrationMigrationCompute: {
    _enum: ['Signed', 'Auto']
  },
  /**
   * Lookup135: pallet_state_trie_migration::pallet::Error<T>
   **/
  PalletStateTrieMigrationError: {
    _enum: ['MaxSignedLimits', 'KeyTooLong', 'NotEnoughFunds', 'BadWitness', 'SignedMigrationNotAllowed', 'BadChildRoot']
  },
  /**
   * Lookup136: pallet_child_bounties::pallet::Event<T>
   **/
  PalletChildBountiesEvent: {
    _enum: {
      Added: {
        index: 'u32',
        childIndex: 'u32',
      },
      Awarded: {
        index: 'u32',
        childIndex: 'u32',
        beneficiary: 'AccountId32',
      },
      Claimed: {
        index: 'u32',
        childIndex: 'u32',
        payout: 'u128',
        beneficiary: 'AccountId32',
      },
      Canceled: {
        index: 'u32',
        childIndex: 'u32'
      }
    }
  },
  /**
   * Lookup137: pallet_referenda::pallet::Event<T, I>
   **/
  PalletReferendaEvent: {
    _enum: {
      Submitted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
      },
      DecisionDepositPlaced: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        who: 'AccountId32',
        amount: 'u128',
      },
      DecisionStarted: {
        index: 'u32',
        track: 'u16',
        proposal: 'FrameSupportPreimagesBounded',
        tally: 'PalletConvictionVotingTally',
      },
      ConfirmStarted: {
        index: 'u32',
      },
      ConfirmAborted: {
        index: 'u32',
      },
      Confirmed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Approved: {
        index: 'u32',
      },
      Rejected: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      TimedOut: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Cancelled: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      Killed: {
        index: 'u32',
        tally: 'PalletConvictionVotingTally',
      },
      SubmissionDepositRefunded: {
        index: 'u32',
        who: 'AccountId32',
        amount: 'u128',
      },
      MetadataSet: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256',
      },
      MetadataCleared: {
        _alias: {
          hash_: 'hash',
        },
        index: 'u32',
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup138: frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>
   **/
  FrameSupportPreimagesBounded: {
    _enum: {
      Legacy: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      Inline: 'Bytes',
      Lookup: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        len: 'u32'
      }
    }
  },
  /**
   * Lookup140: frame_system::pallet::Call<T>
   **/
  FrameSystemCall: {
    _enum: {
      remark: {
        remark: 'Bytes',
      },
      set_heap_pages: {
        pages: 'u64',
      },
      set_code: {
        code: 'Bytes',
      },
      set_code_without_checks: {
        code: 'Bytes',
      },
      set_storage: {
        items: 'Vec<(Bytes,Bytes)>',
      },
      kill_storage: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
      },
      kill_prefix: {
        prefix: 'Bytes',
        subkeys: 'u32',
      },
      remark_with_event: {
        remark: 'Bytes',
      },
      __Unused8: 'Null',
      authorize_upgrade: {
        codeHash: 'H256',
      },
      authorize_upgrade_without_checks: {
        codeHash: 'H256',
      },
      apply_authorized_upgrade: {
        code: 'Bytes'
      }
    }
  },
  /**
   * Lookup144: pallet_utility::pallet::Call<T>
   **/
  PalletUtilityCall: {
    _enum: {
      batch: {
        calls: 'Vec<Call>',
      },
      as_derivative: {
        index: 'u16',
        call: 'Call',
      },
      batch_all: {
        calls: 'Vec<Call>',
      },
      dispatch_as: {
        asOrigin: 'KitchensinkRuntimeOriginCaller',
        call: 'Call',
      },
      force_batch: {
        calls: 'Vec<Call>',
      },
      with_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      if_else: {
        main: 'Call',
        fallback: 'Call',
      },
      dispatch_as_fallible: {
        asOrigin: 'KitchensinkRuntimeOriginCaller',
        call: 'Call'
      }
    }
  },
  /**
   * Lookup146: kitchensink_runtime::OriginCaller
   **/
  KitchensinkRuntimeOriginCaller: {
    _enum: {
      system: 'FrameSupportDispatchRawOrigin',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Council: 'PalletCollectiveRawOrigin',
      TechnicalCommittee: 'PalletCollectiveRawOrigin',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      AllianceMotion: 'PalletCollectiveRawOrigin'
    }
  },
  /**
   * Lookup147: frame_support::dispatch::RawOrigin<sp_core::crypto::AccountId32>
   **/
  FrameSupportDispatchRawOrigin: {
    _enum: {
      Root: 'Null',
      Signed: 'AccountId32',
      None: 'Null'
    }
  },
  /**
   * Lookup148: pallet_collective::RawOrigin<sp_core::crypto::AccountId32, I>
   **/
  PalletCollectiveRawOrigin: {
    _enum: {
      Members: '(u32,u32)',
      Member: 'AccountId32',
      _Phantom: 'Null'
    }
  },
  /**
   * Lookup151: pallet_babe::pallet::Call<T>
   **/
  PalletBabeCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusSlotsEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      plan_config_change: {
        config: 'SpConsensusBabeDigestsNextConfigDescriptor'
      }
    }
  },
  /**
   * Lookup152: sp_consensus_slots::EquivocationProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_babe::app::Public>
   **/
  SpConsensusSlotsEquivocationProof: {
    offender: 'SpConsensusBabeAppPublic',
    slot: 'u64',
    firstHeader: 'SpRuntimeHeader',
    secondHeader: 'SpRuntimeHeader'
  },
  /**
   * Lookup153: sp_runtime::generic::header::Header<Number, Hash>
   **/
  SpRuntimeHeader: {
    parentHash: 'H256',
    number: 'Compact<u32>',
    stateRoot: 'H256',
    extrinsicsRoot: 'H256',
    digest: 'SpRuntimeDigest'
  },
  /**
   * Lookup155: sp_consensus_babe::app::Public
   **/
  SpConsensusBabeAppPublic: '[u8;32]',
  /**
   * Lookup157: sp_session::MembershipProof
   **/
  SpSessionMembershipProof: {
    session: 'u32',
    trieNodes: 'Vec<Bytes>',
    validatorCount: 'u32'
  },
  /**
   * Lookup158: sp_consensus_babe::digests::NextConfigDescriptor
   **/
  SpConsensusBabeDigestsNextConfigDescriptor: {
    _enum: {
      __Unused0: 'Null',
      V1: {
        c: '(u64,u64)',
        allowedSlots: 'SpConsensusBabeAllowedSlots'
      }
    }
  },
  /**
   * Lookup160: sp_consensus_babe::AllowedSlots
   **/
  SpConsensusBabeAllowedSlots: {
    _enum: ['PrimarySlots', 'PrimaryAndSecondaryPlainSlots', 'PrimaryAndSecondaryVRFSlots']
  },
  /**
   * Lookup161: pallet_timestamp::pallet::Call<T>
   **/
  PalletTimestampCall: {
    _enum: {
      set: {
        now: 'Compact<u64>'
      }
    }
  },
  /**
   * Lookup162: pallet_indices::pallet::Call<T>
   **/
  PalletIndicesCall: {
    _enum: {
      claim: {
        index: 'u32',
      },
      transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
      },
      free: {
        index: 'u32',
      },
      force_transfer: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
        index: 'u32',
        freeze: 'bool',
      },
      freeze: {
        index: 'u32',
      },
      poke_deposit: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup165: pallet_balances::pallet::Call<T, I>
   **/
  PalletBalancesCall: {
    _enum: {
      transfer_allow_death: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      __Unused1: 'Null',
      force_transfer: {
        source: 'MultiAddress',
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_keep_alive: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
      },
      transfer_all: {
        dest: 'MultiAddress',
        keepAlive: 'bool',
      },
      force_unreserve: {
        who: 'MultiAddress',
        amount: 'u128',
      },
      upgrade_accounts: {
        who: 'Vec<AccountId32>',
      },
      __Unused7: 'Null',
      force_set_balance: {
        who: 'MultiAddress',
        newFree: 'Compact<u128>',
      },
      force_adjust_total_issuance: {
        direction: 'PalletBalancesAdjustmentDirection',
        delta: 'Compact<u128>',
      },
      burn: {
        value: 'Compact<u128>',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup167: pallet_balances::types::AdjustmentDirection
   **/
  PalletBalancesAdjustmentDirection: {
    _enum: ['Increase', 'Decrease']
  },
  /**
   * Lookup168: pallet_election_provider_multi_phase::pallet::Call<T>
   **/
  PalletElectionProviderMultiPhaseCall: {
    _enum: {
      submit_unsigned: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
        witness: 'PalletElectionProviderMultiPhaseSolutionOrSnapshotSize',
      },
      set_minimum_untrusted_score: {
        maybeNextScore: 'Option<SpNposElectionsElectionScore>',
      },
      set_emergency_election_result: {
        supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
      },
      submit: {
        rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
      },
      governance_fallback: {
        maybeMaxVoters: 'Option<u32>',
        maybeMaxTargets: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup169: pallet_election_provider_multi_phase::RawSolution<kitchensink_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseRawSolution: {
    solution: 'KitchensinkRuntimeNposSolution16',
    score: 'SpNposElectionsElectionScore',
    round: 'u32'
  },
  /**
   * Lookup170: kitchensink_runtime::NposSolution16
   **/
  KitchensinkRuntimeNposSolution16: {
    votes1: 'Vec<(Compact<u32>,Compact<u16>)>',
    votes2: 'Vec<(Compact<u32>,(Compact<u16>,Compact<PerU16>),Compact<u16>)>',
    votes3: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);2],Compact<u16>)>',
    votes4: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);3],Compact<u16>)>',
    votes5: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);4],Compact<u16>)>',
    votes6: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);5],Compact<u16>)>',
    votes7: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);6],Compact<u16>)>',
    votes8: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);7],Compact<u16>)>',
    votes9: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);8],Compact<u16>)>',
    votes10: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);9],Compact<u16>)>',
    votes11: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);10],Compact<u16>)>',
    votes12: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);11],Compact<u16>)>',
    votes13: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);12],Compact<u16>)>',
    votes14: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);13],Compact<u16>)>',
    votes15: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);14],Compact<u16>)>',
    votes16: 'Vec<(Compact<u32>,[(Compact<u16>,Compact<PerU16>);15],Compact<u16>)>'
  },
  /**
   * Lookup221: pallet_election_provider_multi_phase::SolutionOrSnapshotSize
   **/
  PalletElectionProviderMultiPhaseSolutionOrSnapshotSize: {
    voters: 'Compact<u32>',
    targets: 'Compact<u32>'
  },
  /**
   * Lookup225: sp_npos_elections::Support<sp_core::crypto::AccountId32>
   **/
  SpNposElectionsSupport: {
    total: 'u128',
    voters: 'Vec<(AccountId32,u128)>'
  },
  /**
   * Lookup226: pallet_staking::pallet::pallet::Call<T>
   **/
  PalletStakingPalletCall: {
    _enum: {
      bond: {
        value: 'Compact<u128>',
        payee: 'PalletStakingRewardDestination',
      },
      bond_extra: {
        maxAdditional: 'Compact<u128>',
      },
      unbond: {
        value: 'Compact<u128>',
      },
      withdraw_unbonded: {
        numSlashingSpans: 'u32',
      },
      validate: {
        prefs: 'PalletStakingValidatorPrefs',
      },
      nominate: {
        targets: 'Vec<MultiAddress>',
      },
      chill: 'Null',
      set_payee: {
        payee: 'PalletStakingRewardDestination',
      },
      set_controller: 'Null',
      set_validator_count: {
        _alias: {
          new_: 'new',
        },
        new_: 'Compact<u32>',
      },
      increase_validator_count: {
        additional: 'Compact<u32>',
      },
      scale_validator_count: {
        factor: 'Percent',
      },
      force_no_eras: 'Null',
      force_new_era: 'Null',
      set_invulnerables: {
        invulnerables: 'Vec<AccountId32>',
      },
      force_unstake: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      force_new_era_always: 'Null',
      cancel_deferred_slash: {
        era: 'u32',
        slashIndices: 'Vec<u32>',
      },
      payout_stakers: {
        validatorStash: 'AccountId32',
        era: 'u32',
      },
      rebond: {
        value: 'Compact<u128>',
      },
      reap_stash: {
        stash: 'AccountId32',
        numSlashingSpans: 'u32',
      },
      kick: {
        who: 'Vec<MultiAddress>',
      },
      set_staking_configs: {
        minNominatorBond: 'PalletStakingPalletConfigOpU128',
        minValidatorBond: 'PalletStakingPalletConfigOpU128',
        maxNominatorCount: 'PalletStakingPalletConfigOpU32',
        maxValidatorCount: 'PalletStakingPalletConfigOpU32',
        chillThreshold: 'PalletStakingPalletConfigOpPercent',
        minCommission: 'PalletStakingPalletConfigOpPerbill',
        maxStakedRewards: 'PalletStakingPalletConfigOpPercent',
      },
      chill_other: {
        stash: 'AccountId32',
      },
      force_apply_min_commission: {
        validatorStash: 'AccountId32',
      },
      set_min_commission: {
        _alias: {
          new_: 'new',
        },
        new_: 'Perbill',
      },
      payout_stakers_by_page: {
        validatorStash: 'AccountId32',
        era: 'u32',
        page: 'u32',
      },
      update_payee: {
        controller: 'AccountId32',
      },
      deprecate_controller_batch: {
        controllers: 'Vec<AccountId32>',
      },
      restore_ledger: {
        stash: 'AccountId32',
        maybeController: 'Option<AccountId32>',
        maybeTotal: 'Option<u128>',
        maybeUnlocking: 'Option<Vec<PalletStakingUnlockChunk>>',
      },
      migrate_currency: {
        stash: 'AccountId32',
      },
      __Unused31: 'Null',
      __Unused32: 'Null',
      manual_slash: {
        validatorStash: 'AccountId32',
        era: 'u32',
        slashFraction: 'Perbill'
      }
    }
  },
  /**
   * Lookup229: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup230: pallet_staking::pallet::pallet::ConfigOp<T>
   **/
  PalletStakingPalletConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup231: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Percent>
   **/
  PalletStakingPalletConfigOpPercent: {
    _enum: {
      Noop: 'Null',
      Set: 'Percent',
      Remove: 'Null'
    }
  },
  /**
   * Lookup232: pallet_staking::pallet::pallet::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletStakingPalletConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup237: pallet_staking::UnlockChunk<Balance>
   **/
  PalletStakingUnlockChunk: {
    value: 'Compact<u128>',
    era: 'Compact<u32>'
  },
  /**
   * Lookup239: pallet_session::pallet::Call<T>
   **/
  PalletSessionCall: {
    _enum: {
      set_keys: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'KitchensinkRuntimeSessionKeys',
        proof: 'Bytes',
      },
      purge_keys: 'Null'
    }
  },
  /**
   * Lookup240: kitchensink_runtime::SessionKeys
   **/
  KitchensinkRuntimeSessionKeys: {
    grandpa: 'SpConsensusGrandpaAppPublic',
    babe: 'SpConsensusBabeAppPublic',
    imOnline: 'PalletImOnlineSr25519AppSr25519Public',
    authorityDiscovery: 'SpAuthorityDiscoveryAppPublic',
    mixnet: 'SpMixnetAppPublic',
    beefy: 'SpConsensusBeefyEcdsaCryptoPublic'
  },
  /**
   * Lookup241: sp_authority_discovery::app::Public
   **/
  SpAuthorityDiscoveryAppPublic: '[u8;32]',
  /**
   * Lookup242: sp_mixnet::types::app::Public
   **/
  SpMixnetAppPublic: '[u8;32]',
  /**
   * Lookup243: sp_consensus_beefy::ecdsa_crypto::Public
   **/
  SpConsensusBeefyEcdsaCryptoPublic: '[u8;33]',
  /**
   * Lookup245: pallet_democracy::pallet::Call<T>
   **/
  PalletDemocracyCall: {
    _enum: {
      propose: {
        proposal: 'FrameSupportPreimagesBounded',
        value: 'Compact<u128>',
      },
      second: {
        proposal: 'Compact<u32>',
      },
      vote: {
        refIndex: 'Compact<u32>',
        vote: 'PalletDemocracyVoteAccountVote',
      },
      emergency_cancel: {
        refIndex: 'u32',
      },
      external_propose: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_majority: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      external_propose_default: {
        proposal: 'FrameSupportPreimagesBounded',
      },
      fast_track: {
        proposalHash: 'H256',
        votingPeriod: 'u32',
        delay: 'u32',
      },
      veto_external: {
        proposalHash: 'H256',
      },
      cancel_referendum: {
        refIndex: 'Compact<u32>',
      },
      delegate: {
        to: 'MultiAddress',
        conviction: 'PalletDemocracyConviction',
        balance: 'u128',
      },
      undelegate: 'Null',
      clear_public_proposals: 'Null',
      unlock: {
        target: 'MultiAddress',
      },
      remove_vote: {
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        index: 'u32',
      },
      blacklist: {
        proposalHash: 'H256',
        maybeRefIndex: 'Option<u32>',
      },
      cancel_proposal: {
        propIndex: 'Compact<u32>',
      },
      set_metadata: {
        owner: 'PalletDemocracyMetadataOwner',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup246: pallet_democracy::conviction::Conviction
   **/
  PalletDemocracyConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup248: pallet_collective::pallet::Call<T, I>
   **/
  PalletCollectiveCall: {
    _enum: {
      set_members: {
        newMembers: 'Vec<AccountId32>',
        prime: 'Option<AccountId32>',
        oldCount: 'u32',
      },
      execute: {
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused4: 'Null',
      disapprove_proposal: {
        proposalHash: 'H256',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      kill: {
        proposalHash: 'H256',
      },
      release_proposal_cost: {
        proposalHash: 'H256'
      }
    }
  },
  /**
   * Lookup250: pallet_elections_phragmen::pallet::Call<T>
   **/
  PalletElectionsPhragmenCall: {
    _enum: {
      vote: {
        votes: 'Vec<AccountId32>',
        value: 'Compact<u128>',
      },
      remove_voter: 'Null',
      submit_candidacy: {
        candidateCount: 'Compact<u32>',
      },
      renounce_candidacy: {
        renouncing: 'PalletElectionsPhragmenRenouncing',
      },
      remove_member: {
        who: 'MultiAddress',
        slashBond: 'bool',
        rerunElection: 'bool',
      },
      clean_defunct_voters: {
        numVoters: 'u32',
        numDefunct: 'u32'
      }
    }
  },
  /**
   * Lookup251: pallet_elections_phragmen::Renouncing
   **/
  PalletElectionsPhragmenRenouncing: {
    _enum: {
      Member: 'Null',
      RunnerUp: 'Null',
      Candidate: 'Compact<u32>'
    }
  },
  /**
   * Lookup252: pallet_membership::pallet::Call<T, I>
   **/
  PalletMembershipCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
      },
      swap_member: {
        remove: 'MultiAddress',
        add: 'MultiAddress',
      },
      reset_members: {
        members: 'Vec<AccountId32>',
      },
      change_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      set_prime: {
        who: 'MultiAddress',
      },
      clear_prime: 'Null'
    }
  },
  /**
   * Lookup253: pallet_grandpa::pallet::Call<T>
   **/
  PalletGrandpaCall: {
    _enum: {
      report_equivocation: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_equivocation_unsigned: {
        equivocationProof: 'SpConsensusGrandpaEquivocationProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      note_stalled: {
        delay: 'u32',
        bestFinalizedBlockNumber: 'u32'
      }
    }
  },
  /**
   * Lookup254: sp_consensus_grandpa::EquivocationProof<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocationProof: {
    setId: 'u64',
    equivocation: 'SpConsensusGrandpaEquivocation'
  },
  /**
   * Lookup255: sp_consensus_grandpa::Equivocation<primitive_types::H256, N>
   **/
  SpConsensusGrandpaEquivocation: {
    _enum: {
      Prevote: 'FinalityGrandpaEquivocationPrevote',
      Precommit: 'FinalityGrandpaEquivocationPrecommit'
    }
  },
  /**
   * Lookup256: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Prevote<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrevote: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrevote,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup257: finality_grandpa::Prevote<primitive_types::H256, N>
   **/
  FinalityGrandpaPrevote: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup258: sp_consensus_grandpa::app::Signature
   **/
  SpConsensusGrandpaAppSignature: '[u8;64]',
  /**
   * Lookup261: finality_grandpa::Equivocation<sp_consensus_grandpa::app::Public, finality_grandpa::Precommit<primitive_types::H256, N>, sp_consensus_grandpa::app::Signature>
   **/
  FinalityGrandpaEquivocationPrecommit: {
    roundNumber: 'u64',
    identity: 'SpConsensusGrandpaAppPublic',
    first: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)',
    second: '(FinalityGrandpaPrecommit,SpConsensusGrandpaAppSignature)'
  },
  /**
   * Lookup262: finality_grandpa::Precommit<primitive_types::H256, N>
   **/
  FinalityGrandpaPrecommit: {
    targetHash: 'H256',
    targetNumber: 'u32'
  },
  /**
   * Lookup264: pallet_treasury::pallet::Call<T, I>
   **/
  PalletTreasuryCall: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      spend_local: {
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
      },
      remove_approval: {
        proposalId: 'Compact<u32>',
      },
      spend: {
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        amount: 'Compact<u128>',
        beneficiary: 'MultiAddress',
        validFrom: 'Option<u32>',
      },
      payout: {
        index: 'u32',
      },
      check_status: {
        index: 'u32',
      },
      void_spend: {
        index: 'u32'
      }
    }
  },
  /**
   * Lookup265: pallet_asset_rate::pallet::Call<T>
   **/
  PalletAssetRateCall: {
    _enum: {
      create: {
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rate: 'u128',
      },
      update: {
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rate: 'u128',
      },
      remove: {
        assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId'
      }
    }
  },
  /**
   * Lookup266: pallet_contracts::pallet::Call<T>
   **/
  PalletContractsCall: {
    _enum: {
      call_old_weight: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate_old_weight: {
        value: 'Compact<u128>',
        gasLimit: 'Compact<u64>',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Option<Compact<u128>>',
        determinism: 'PalletContractsWasmDeterminism',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'MultiAddress',
        codeHash: 'H256',
      },
      call: {
        dest: 'MultiAddress',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        data: 'Bytes',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Option<Compact<u128>>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Bytes',
      },
      migrate: {
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup268: pallet_contracts::wasm::Determinism
   **/
  PalletContractsWasmDeterminism: {
    _enum: ['Enforced', 'Relaxed']
  },
  /**
   * Lookup269: pallet_sudo::pallet::Call<T>
   **/
  PalletSudoCall: {
    _enum: {
      sudo: {
        call: 'Call',
      },
      sudo_unchecked_weight: {
        call: 'Call',
        weight: 'SpWeightsWeightV2Weight',
      },
      set_key: {
        _alias: {
          new_: 'new',
        },
        new_: 'MultiAddress',
      },
      sudo_as: {
        who: 'MultiAddress',
        call: 'Call',
      },
      remove_key: 'Null'
    }
  },
  /**
   * Lookup270: pallet_im_online::pallet::Call<T>
   **/
  PalletImOnlineCall: {
    _enum: {
      heartbeat: {
        heartbeat: 'PalletImOnlineHeartbeat',
        signature: 'PalletImOnlineSr25519AppSr25519Signature'
      }
    }
  },
  /**
   * Lookup271: pallet_im_online::Heartbeat<BlockNumber>
   **/
  PalletImOnlineHeartbeat: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    validatorsLen: 'u32'
  },
  /**
   * Lookup272: pallet_im_online::sr25519::app_sr25519::Signature
   **/
  PalletImOnlineSr25519AppSr25519Signature: '[u8;64]',
  /**
   * Lookup273: pallet_identity::pallet::Call<T>
   **/
  PalletIdentityCall: {
    _enum: {
      add_registrar: {
        account: 'MultiAddress',
      },
      set_identity: {
        info: 'PalletIdentityLegacyIdentityInfo',
      },
      set_subs: {
        subs: 'Vec<(AccountId32,Data)>',
      },
      clear_identity: 'Null',
      request_judgement: {
        regIndex: 'Compact<u32>',
        maxFee: 'Compact<u128>',
      },
      cancel_request: {
        regIndex: 'u32',
      },
      set_fee: {
        index: 'Compact<u32>',
        fee: 'Compact<u128>',
      },
      set_account_id: {
        _alias: {
          new_: 'new',
        },
        index: 'Compact<u32>',
        new_: 'MultiAddress',
      },
      set_fields: {
        index: 'Compact<u32>',
        fields: 'u64',
      },
      provide_judgement: {
        regIndex: 'Compact<u32>',
        target: 'MultiAddress',
        judgement: 'PalletIdentityJudgement',
        identity: 'H256',
      },
      kill_identity: {
        target: 'MultiAddress',
      },
      add_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      rename_sub: {
        sub: 'MultiAddress',
        data: 'Data',
      },
      remove_sub: {
        sub: 'MultiAddress',
      },
      quit_sub: 'Null',
      add_username_authority: {
        authority: 'MultiAddress',
        suffix: 'Bytes',
        allocation: 'u32',
      },
      remove_username_authority: {
        suffix: 'Bytes',
        authority: 'MultiAddress',
      },
      set_username_for: {
        who: 'MultiAddress',
        username: 'Bytes',
        signature: 'Option<SpRuntimeMultiSignature>',
        useAllocation: 'bool',
      },
      accept_username: {
        username: 'Bytes',
      },
      remove_expired_approval: {
        username: 'Bytes',
      },
      set_primary_username: {
        username: 'Bytes',
      },
      unbind_username: {
        username: 'Bytes',
      },
      remove_username: {
        username: 'Bytes',
      },
      kill_username: {
        username: 'Bytes'
      }
    }
  },
  /**
   * Lookup274: pallet_identity::legacy::IdentityInfo<FieldLimit>
   **/
  PalletIdentityLegacyIdentityInfo: {
    additional: 'Vec<(Data,Data)>',
    display: 'Data',
    legal: 'Data',
    web: 'Data',
    riot: 'Data',
    email: 'Data',
    pgpFingerprint: 'Option<[u8;20]>',
    image: 'Data',
    twitter: 'Data'
  },
  /**
   * Lookup311: pallet_identity::types::Judgement<Balance>
   **/
  PalletIdentityJudgement: {
    _enum: {
      Unknown: 'Null',
      FeePaid: 'u128',
      Reasonable: 'Null',
      KnownGood: 'Null',
      OutOfDate: 'Null',
      LowQuality: 'Null',
      Erroneous: 'Null'
    }
  },
  /**
   * Lookup313: sp_runtime::MultiSignature
   **/
  SpRuntimeMultiSignature: {
    _enum: {
      Ed25519: '[u8;64]',
      Sr25519: '[u8;64]',
      Ecdsa: '[u8;65]'
    }
  },
  /**
   * Lookup315: pallet_society::pallet::Call<T, I>
   **/
  PalletSocietyCall: {
    _enum: {
      bid: {
        value: 'u128',
      },
      unbid: 'Null',
      vouch: {
        who: 'MultiAddress',
        value: 'u128',
        tip: 'u128',
      },
      unvouch: 'Null',
      vote: {
        candidate: 'MultiAddress',
        approve: 'bool',
      },
      defender_vote: {
        approve: 'bool',
      },
      payout: 'Null',
      waive_repay: {
        amount: 'u128',
      },
      found_society: {
        founder: 'MultiAddress',
        maxMembers: 'u32',
        maxIntake: 'u32',
        maxStrikes: 'u32',
        candidateDeposit: 'u128',
        rules: 'Bytes',
      },
      dissolve: 'Null',
      judge_suspended_member: {
        who: 'MultiAddress',
        forgive: 'bool',
      },
      set_parameters: {
        maxMembers: 'u32',
        maxIntake: 'u32',
        maxStrikes: 'u32',
        candidateDeposit: 'u128',
      },
      punish_skeptic: 'Null',
      claim_membership: 'Null',
      bestow_membership: {
        candidate: 'AccountId32',
      },
      kick_candidate: {
        candidate: 'AccountId32',
      },
      resign_candidacy: 'Null',
      drop_candidate: {
        candidate: 'AccountId32',
      },
      cleanup_candidacy: {
        candidate: 'AccountId32',
        max: 'u32',
      },
      cleanup_challenge: {
        challengeRound: 'u32',
        max: 'u32'
      }
    }
  },
  /**
   * Lookup316: pallet_recovery::pallet::Call<T>
   **/
  PalletRecoveryCall: {
    _enum: {
      as_recovered: {
        account: 'MultiAddress',
        call: 'Call',
      },
      set_recovered: {
        lost: 'MultiAddress',
        rescuer: 'MultiAddress',
      },
      create_recovery: {
        friends: 'Vec<AccountId32>',
        threshold: 'u16',
        delayPeriod: 'u32',
      },
      initiate_recovery: {
        account: 'MultiAddress',
      },
      vouch_recovery: {
        lost: 'MultiAddress',
        rescuer: 'MultiAddress',
      },
      claim_recovery: {
        account: 'MultiAddress',
      },
      close_recovery: {
        rescuer: 'MultiAddress',
      },
      remove_recovery: 'Null',
      cancel_recovered: {
        account: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup317: pallet_vesting::pallet::Call<T>
   **/
  PalletVestingCall: {
    _enum: {
      vest: 'Null',
      vest_other: {
        target: 'MultiAddress',
      },
      vested_transfer: {
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      force_vested_transfer: {
        source: 'MultiAddress',
        target: 'MultiAddress',
        schedule: 'PalletVestingVestingInfo',
      },
      merge_schedules: {
        schedule1Index: 'u32',
        schedule2Index: 'u32',
      },
      force_remove_vesting_schedule: {
        target: 'MultiAddress',
        scheduleIndex: 'u32'
      }
    }
  },
  /**
   * Lookup318: pallet_vesting::vesting_info::VestingInfo<Balance, BlockNumber>
   **/
  PalletVestingVestingInfo: {
    locked: 'u128',
    perBlock: 'u128',
    startingBlock: 'u32'
  },
  /**
   * Lookup319: pallet_scheduler::pallet::Call<T>
   **/
  PalletSchedulerCall: {
    _enum: {
      schedule: {
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel: {
        when: 'u32',
        index: 'u32',
      },
      schedule_named: {
        id: '[u8;32]',
        when: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      cancel_named: {
        id: '[u8;32]',
      },
      schedule_after: {
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      schedule_named_after: {
        id: '[u8;32]',
        after: 'u32',
        maybePeriodic: 'Option<(u32,u32)>',
        priority: 'u8',
        call: 'Call',
      },
      set_retry: {
        task: '(u32,u32)',
        retries: 'u8',
        period: 'u32',
      },
      set_retry_named: {
        id: '[u8;32]',
        retries: 'u8',
        period: 'u32',
      },
      cancel_retry: {
        task: '(u32,u32)',
      },
      cancel_retry_named: {
        id: '[u8;32]'
      }
    }
  },
  /**
   * Lookup321: pallet_glutton::pallet::Call<T>
   **/
  PalletGluttonCall: {
    _enum: {
      initialize_pallet: {
        newCount: 'u32',
        witnessCount: 'Option<u32>',
      },
      set_compute: {
        compute: 'u64',
      },
      set_storage: {
        storage: 'u64',
      },
      bloat: {
        garbage: 'Vec<[u8;1024]>',
      },
      set_block_length: {
        blockLength: 'u64'
      }
    }
  },
  /**
   * Lookup324: pallet_preimage::pallet::Call<T>
   **/
  PalletPreimageCall: {
    _enum: {
      note_preimage: {
        bytes: 'Bytes',
      },
      unnote_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      request_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      unrequest_preimage: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      ensure_updated: {
        hashes: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup326: pallet_proxy::pallet::Call<T>
   **/
  PalletProxyCall: {
    _enum: {
      proxy: {
        real: 'MultiAddress',
        forceProxyType: 'Option<KitchensinkRuntimeProxyType>',
        call: 'Call',
      },
      add_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxy: {
        delegate: 'MultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
      },
      remove_proxies: 'Null',
      create_pure: {
        proxyType: 'KitchensinkRuntimeProxyType',
        delay: 'u32',
        index: 'u16',
      },
      kill_pure: {
        spawner: 'MultiAddress',
        proxyType: 'KitchensinkRuntimeProxyType',
        index: 'u16',
        height: 'Compact<u32>',
        extIndex: 'Compact<u32>',
      },
      announce: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      remove_announcement: {
        real: 'MultiAddress',
        callHash: 'H256',
      },
      reject_announcement: {
        delegate: 'MultiAddress',
        callHash: 'H256',
      },
      proxy_announced: {
        delegate: 'MultiAddress',
        real: 'MultiAddress',
        forceProxyType: 'Option<KitchensinkRuntimeProxyType>',
        call: 'Call',
      },
      poke_deposit: 'Null'
    }
  },
  /**
   * Lookup328: pallet_multisig::pallet::Call<T>
   **/
  PalletMultisigCall: {
    _enum: {
      as_multi_threshold_1: {
        otherSignatories: 'Vec<AccountId32>',
        call: 'Call',
      },
      as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        call: 'Call',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      approve_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        maybeTimepoint: 'Option<PalletMultisigTimepoint>',
        callHash: '[u8;32]',
        maxWeight: 'SpWeightsWeightV2Weight',
      },
      cancel_as_multi: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        timepoint: 'PalletMultisigTimepoint',
        callHash: '[u8;32]',
      },
      poke_deposit: {
        threshold: 'u16',
        otherSignatories: 'Vec<AccountId32>',
        callHash: '[u8;32]'
      }
    }
  },
  /**
   * Lookup330: pallet_bounties::pallet::Call<T, I>
   **/
  PalletBountiesCall: {
    _enum: {
      propose_bounty: {
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      approve_bounty: {
        bountyId: 'Compact<u32>',
      },
      propose_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      unassign_curator: {
        bountyId: 'Compact<u32>',
      },
      accept_curator: {
        bountyId: 'Compact<u32>',
      },
      award_bounty: {
        bountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_bounty: {
        bountyId: 'Compact<u32>',
      },
      close_bounty: {
        bountyId: 'Compact<u32>',
      },
      extend_bounty_expiry: {
        bountyId: 'Compact<u32>',
        remark: 'Bytes',
      },
      approve_bounty_with_curator: {
        bountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>'
      }
    }
  },
  /**
   * Lookup331: pallet_tips::pallet::Call<T, I>
   **/
  PalletTipsCall: {
    _enum: {
      report_awesome: {
        reason: 'Bytes',
        who: 'MultiAddress',
      },
      retract_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      tip_new: {
        reason: 'Bytes',
        who: 'MultiAddress',
        tipValue: 'Compact<u128>',
      },
      tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
        tipValue: 'Compact<u128>',
      },
      close_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256',
      },
      slash_tip: {
        _alias: {
          hash_: 'hash',
        },
        hash_: 'H256'
      }
    }
  },
  /**
   * Lookup332: pallet_assets::pallet::Call<T, I>
   **/
  PalletAssetsCall: {
    _enum: {
      create: {
        id: 'Compact<u32>',
        admin: 'MultiAddress',
        minBalance: 'u128',
      },
      force_create: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        isSufficient: 'bool',
        minBalance: 'Compact<u128>',
      },
      start_destroy: {
        id: 'Compact<u32>',
      },
      destroy_accounts: {
        id: 'Compact<u32>',
      },
      destroy_approvals: {
        id: 'Compact<u32>',
      },
      finish_destroy: {
        id: 'Compact<u32>',
      },
      mint: {
        id: 'Compact<u32>',
        beneficiary: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      burn: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      transfer_keep_alive: {
        id: 'Compact<u32>',
        target: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      force_transfer: {
        id: 'Compact<u32>',
        source: 'MultiAddress',
        dest: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      freeze: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      thaw: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      freeze_asset: {
        id: 'Compact<u32>',
      },
      thaw_asset: {
        id: 'Compact<u32>',
      },
      transfer_ownership: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
      },
      set_team: {
        id: 'Compact<u32>',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
      },
      clear_metadata: {
        id: 'Compact<u32>',
      },
      force_set_metadata: {
        id: 'Compact<u32>',
        name: 'Bytes',
        symbol: 'Bytes',
        decimals: 'u8',
        isFrozen: 'bool',
      },
      force_clear_metadata: {
        id: 'Compact<u32>',
      },
      force_asset_status: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        minBalance: 'Compact<u128>',
        isSufficient: 'bool',
        isFrozen: 'bool',
      },
      approve_transfer: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      cancel_approval: {
        id: 'Compact<u32>',
        delegate: 'MultiAddress',
      },
      force_cancel_approval: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        delegate: 'MultiAddress',
      },
      transfer_approved: {
        id: 'Compact<u32>',
        owner: 'MultiAddress',
        destination: 'MultiAddress',
        amount: 'Compact<u128>',
      },
      touch: {
        id: 'Compact<u32>',
      },
      refund: {
        id: 'Compact<u32>',
        allowBurn: 'bool',
      },
      set_min_balance: {
        id: 'Compact<u32>',
        minBalance: 'u128',
      },
      touch_other: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      refund_other: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      block: {
        id: 'Compact<u32>',
        who: 'MultiAddress',
      },
      transfer_all: {
        id: 'Compact<u32>',
        dest: 'MultiAddress',
        keepAlive: 'bool'
      }
    }
  },
  /**
   * Lookup334: pallet_beefy::pallet::Call<T>
   **/
  PalletBeefyCall: {
    _enum: {
      report_double_voting: {
        equivocationProof: 'SpConsensusBeefyDoubleVotingProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_double_voting_unsigned: {
        equivocationProof: 'SpConsensusBeefyDoubleVotingProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      set_new_genesis: {
        delayInBlocks: 'u32',
      },
      report_fork_voting: {
        equivocationProof: 'SpConsensusBeefyForkVotingProofAncestryProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_fork_voting_unsigned: {
        equivocationProof: 'SpConsensusBeefyForkVotingProofAncestryProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_future_block_voting: {
        equivocationProof: 'SpConsensusBeefyFutureBlockVotingProof',
        keyOwnerProof: 'SpSessionMembershipProof',
      },
      report_future_block_voting_unsigned: {
        equivocationProof: 'SpConsensusBeefyFutureBlockVotingProof',
        keyOwnerProof: 'SpSessionMembershipProof'
      }
    }
  },
  /**
   * Lookup335: sp_consensus_beefy::DoubleVotingProof<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  SpConsensusBeefyDoubleVotingProof: {
    first: 'SpConsensusBeefyVoteMessage',
    second: 'SpConsensusBeefyVoteMessage'
  },
  /**
   * Lookup336: sp_consensus_beefy::ecdsa_crypto::Signature
   **/
  SpConsensusBeefyEcdsaCryptoSignature: '[u8;65]',
  /**
   * Lookup337: sp_consensus_beefy::VoteMessage<Number, sp_consensus_beefy::ecdsa_crypto::Public, sp_consensus_beefy::ecdsa_crypto::Signature>
   **/
  SpConsensusBeefyVoteMessage: {
    commitment: 'SpConsensusBeefyCommitment',
    id: 'SpConsensusBeefyEcdsaCryptoPublic',
    signature: 'SpConsensusBeefyEcdsaCryptoSignature'
  },
  /**
   * Lookup338: sp_consensus_beefy::commitment::Commitment<TBlockNumber>
   **/
  SpConsensusBeefyCommitment: {
    payload: 'SpConsensusBeefyPayload',
    blockNumber: 'u32',
    validatorSetId: 'u64'
  },
  /**
   * Lookup339: sp_consensus_beefy::payload::Payload
   **/
  SpConsensusBeefyPayload: 'Vec<([u8;2],Bytes)>',
  /**
   * Lookup342: sp_consensus_beefy::ForkVotingProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_beefy::ecdsa_crypto::Public, sp_mmr_primitives::AncestryProof<primitive_types::H256>>
   **/
  SpConsensusBeefyForkVotingProofAncestryProof: {
    vote: 'SpConsensusBeefyVoteMessage',
    ancestryProof: 'SpMmrPrimitivesAncestryProof',
    header: 'SpRuntimeHeader'
  },
  /**
   * Lookup343: sp_mmr_primitives::AncestryProof<primitive_types::H256>
   **/
  SpMmrPrimitivesAncestryProof: {
    prevPeaks: 'Vec<H256>',
    prevLeafCount: 'u64',
    leafCount: 'u64',
    items: 'Vec<(u64,H256)>'
  },
  /**
   * Lookup346: sp_consensus_beefy::FutureBlockVotingProof<Number, sp_consensus_beefy::ecdsa_crypto::Public>
   **/
  SpConsensusBeefyFutureBlockVotingProof: {
    vote: 'SpConsensusBeefyVoteMessage'
  },
  /**
   * Lookup347: pallet_lottery::pallet::Call<T>
   **/
  PalletLotteryCall: {
    _enum: {
      buy_ticket: {
        call: 'Call',
      },
      set_calls: {
        calls: 'Vec<Call>',
      },
      start_lottery: {
        price: 'u128',
        length: 'u32',
        delay: 'u32',
        repeat: 'bool',
      },
      stop_repeat: 'Null'
    }
  },
  /**
   * Lookup348: pallet_nis::pallet::Call<T>
   **/
  PalletNisCall: {
    _enum: {
      place_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      retract_bid: {
        amount: 'Compact<u128>',
        duration: 'u32',
      },
      fund_deficit: 'Null',
      thaw_private: {
        index: 'Compact<u32>',
        maybeProportion: 'Option<Perquintill>',
      },
      thaw_communal: {
        index: 'Compact<u32>',
      },
      communify: {
        index: 'Compact<u32>',
      },
      privatize: {
        index: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup350: pallet_uniques::pallet::Call<T, I>
   **/
  PalletUniquesCall: {
    _enum: {
      create: {
        collection: 'u32',
        admin: 'MultiAddress',
      },
      force_create: {
        collection: 'u32',
        owner: 'MultiAddress',
        freeHolding: 'bool',
      },
      destroy: {
        collection: 'u32',
        witness: 'PalletUniquesDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        owner: 'MultiAddress',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
        checkOwner: 'Option<MultiAddress>',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'MultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      freeze: {
        collection: 'u32',
        item: 'u32',
      },
      thaw: {
        collection: 'u32',
        item: 'u32',
      },
      freeze_collection: {
        collection: 'u32',
      },
      thaw_collection: {
        collection: 'u32',
      },
      transfer_ownership: {
        collection: 'u32',
        newOwner: 'MultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        maybeCheckDelegate: 'Option<MultiAddress>',
      },
      force_item_status: {
        collection: 'u32',
        owner: 'MultiAddress',
        issuer: 'MultiAddress',
        admin: 'MultiAddress',
        freezer: 'MultiAddress',
        freeHolding: 'bool',
        isFrozen: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        key: 'Bytes',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
        isFrozen: 'bool',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      set_price: {
        collection: 'u32',
        item: 'u32',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<MultiAddress>',
      },
      buy_item: {
        collection: 'u32',
        item: 'u32',
        bidPrice: 'u128'
      }
    }
  },
  /**
   * Lookup351: pallet_uniques::types::DestroyWitness
   **/
  PalletUniquesDestroyWitness: {
    items: 'Compact<u32>',
    itemMetadatas: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup353: pallet_nfts::pallet::Call<T, I>
   **/
  PalletNftsCall: {
    _enum: {
      create: {
        admin: 'MultiAddress',
        config: 'PalletNftsCollectionConfig',
      },
      force_create: {
        owner: 'MultiAddress',
        config: 'PalletNftsCollectionConfig',
      },
      destroy: {
        collection: 'u32',
        witness: 'PalletNftsDestroyWitness',
      },
      mint: {
        collection: 'u32',
        item: 'u32',
        mintTo: 'MultiAddress',
        witnessData: 'Option<PalletNftsMintWitness>',
      },
      force_mint: {
        collection: 'u32',
        item: 'u32',
        mintTo: 'MultiAddress',
        itemConfig: 'PalletNftsItemConfig',
      },
      burn: {
        collection: 'u32',
        item: 'u32',
      },
      transfer: {
        collection: 'u32',
        item: 'u32',
        dest: 'MultiAddress',
      },
      redeposit: {
        collection: 'u32',
        items: 'Vec<u32>',
      },
      lock_item_transfer: {
        collection: 'u32',
        item: 'u32',
      },
      unlock_item_transfer: {
        collection: 'u32',
        item: 'u32',
      },
      lock_collection: {
        collection: 'u32',
        lockSettings: 'u64',
      },
      transfer_ownership: {
        collection: 'u32',
        newOwner: 'MultiAddress',
      },
      set_team: {
        collection: 'u32',
        issuer: 'Option<MultiAddress>',
        admin: 'Option<MultiAddress>',
        freezer: 'Option<MultiAddress>',
      },
      force_collection_owner: {
        collection: 'u32',
        owner: 'MultiAddress',
      },
      force_collection_config: {
        collection: 'u32',
        config: 'PalletNftsCollectionConfig',
      },
      approve_transfer: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
        maybeDeadline: 'Option<u32>',
      },
      cancel_approval: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      clear_all_transfer_approvals: {
        collection: 'u32',
        item: 'u32',
      },
      lock_item_properties: {
        collection: 'u32',
        item: 'u32',
        lockMetadata: 'bool',
        lockAttributes: 'bool',
      },
      set_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PalletNftsAttributeNamespace',
        key: 'Bytes',
        value: 'Bytes',
      },
      force_set_attribute: {
        setAs: 'Option<AccountId32>',
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PalletNftsAttributeNamespace',
        key: 'Bytes',
        value: 'Bytes',
      },
      clear_attribute: {
        collection: 'u32',
        maybeItem: 'Option<u32>',
        namespace: 'PalletNftsAttributeNamespace',
        key: 'Bytes',
      },
      approve_item_attributes: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
      },
      cancel_item_attributes_approval: {
        collection: 'u32',
        item: 'u32',
        delegate: 'MultiAddress',
        witness: 'PalletNftsCancelAttributesApprovalWitness',
      },
      set_metadata: {
        collection: 'u32',
        item: 'u32',
        data: 'Bytes',
      },
      clear_metadata: {
        collection: 'u32',
        item: 'u32',
      },
      set_collection_metadata: {
        collection: 'u32',
        data: 'Bytes',
      },
      clear_collection_metadata: {
        collection: 'u32',
      },
      set_accept_ownership: {
        maybeCollection: 'Option<u32>',
      },
      set_collection_max_supply: {
        collection: 'u32',
        maxSupply: 'u32',
      },
      update_mint_settings: {
        collection: 'u32',
        mintSettings: 'PalletNftsMintSettings',
      },
      set_price: {
        collection: 'u32',
        item: 'u32',
        price: 'Option<u128>',
        whitelistedBuyer: 'Option<MultiAddress>',
      },
      buy_item: {
        collection: 'u32',
        item: 'u32',
        bidPrice: 'u128',
      },
      pay_tips: {
        tips: 'Vec<PalletNftsItemTip>',
      },
      create_swap: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
        desiredCollection: 'u32',
        maybeDesiredItem: 'Option<u32>',
        maybePrice: 'Option<PalletNftsPriceWithDirection>',
        duration: 'u32',
      },
      cancel_swap: {
        offeredCollection: 'u32',
        offeredItem: 'u32',
      },
      claim_swap: {
        sendCollection: 'u32',
        sendItem: 'u32',
        receiveCollection: 'u32',
        receiveItem: 'u32',
        witnessPrice: 'Option<PalletNftsPriceWithDirection>',
      },
      mint_pre_signed: {
        mintData: 'PalletNftsPreSignedMint',
        signature: 'SpRuntimeMultiSignature',
        signer: 'AccountId32',
      },
      set_attributes_pre_signed: {
        data: 'PalletNftsPreSignedAttributes',
        signature: 'SpRuntimeMultiSignature',
        signer: 'AccountId32'
      }
    }
  },
  /**
   * Lookup354: pallet_nfts::types::CollectionConfig<Price, BlockNumber, CollectionId>
   **/
  PalletNftsCollectionConfig: {
    settings: 'u64',
    maxSupply: 'Option<u32>',
    mintSettings: 'PalletNftsMintSettings'
  },
  /**
   * Lookup356: pallet_nfts::types::CollectionSetting
   **/
  PalletNftsCollectionSetting: {
    _enum: ['__Unused0', 'TransferableItems', 'UnlockedMetadata', '__Unused3', 'UnlockedAttributes', '__Unused5', '__Unused6', '__Unused7', 'UnlockedMaxSupply', '__Unused9', '__Unused10', '__Unused11', '__Unused12', '__Unused13', '__Unused14', '__Unused15', 'DepositRequired']
  },
  /**
   * Lookup357: pallet_nfts::types::MintSettings<Price, BlockNumber, CollectionId>
   **/
  PalletNftsMintSettings: {
    mintType: 'PalletNftsMintType',
    price: 'Option<u128>',
    startBlock: 'Option<u32>',
    endBlock: 'Option<u32>',
    defaultItemSettings: 'u64'
  },
  /**
   * Lookup358: pallet_nfts::types::MintType<CollectionId>
   **/
  PalletNftsMintType: {
    _enum: {
      Issuer: 'Null',
      Public: 'Null',
      HolderOf: 'u32'
    }
  },
  /**
   * Lookup360: pallet_nfts::types::ItemSetting
   **/
  PalletNftsItemSetting: {
    _enum: ['__Unused0', 'Transferable', 'UnlockedMetadata', '__Unused3', 'UnlockedAttributes']
  },
  /**
   * Lookup361: pallet_nfts::types::DestroyWitness
   **/
  PalletNftsDestroyWitness: {
    itemMetadatas: 'Compact<u32>',
    itemConfigs: 'Compact<u32>',
    attributes: 'Compact<u32>'
  },
  /**
   * Lookup363: pallet_nfts::types::MintWitness<ItemId, Balance>
   **/
  PalletNftsMintWitness: {
    ownedItem: 'Option<u32>',
    mintPrice: 'Option<u128>'
  },
  /**
   * Lookup364: pallet_nfts::types::ItemConfig
   **/
  PalletNftsItemConfig: {
    settings: 'u64'
  },
  /**
   * Lookup365: pallet_nfts::types::CancelAttributesApprovalWitness
   **/
  PalletNftsCancelAttributesApprovalWitness: {
    accountAttributes: 'u32'
  },
  /**
   * Lookup367: pallet_nfts::types::ItemTip<CollectionId, ItemId, sp_core::crypto::AccountId32, Amount>
   **/
  PalletNftsItemTip: {
    collection: 'u32',
    item: 'u32',
    receiver: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup369: pallet_nfts::types::PreSignedMint<CollectionId, ItemId, sp_core::crypto::AccountId32, Deadline, Balance>
   **/
  PalletNftsPreSignedMint: {
    collection: 'u32',
    item: 'u32',
    attributes: 'Vec<(Bytes,Bytes)>',
    metadata: 'Bytes',
    onlyAccount: 'Option<AccountId32>',
    deadline: 'u32',
    mintPrice: 'Option<u128>'
  },
  /**
   * Lookup370: pallet_nfts::types::PreSignedAttributes<CollectionId, ItemId, sp_core::crypto::AccountId32, Deadline>
   **/
  PalletNftsPreSignedAttributes: {
    collection: 'u32',
    item: 'u32',
    attributes: 'Vec<(Bytes,Bytes)>',
    namespace: 'PalletNftsAttributeNamespace',
    deadline: 'u32'
  },
  /**
   * Lookup371: pallet_nft_fractionalization::pallet::Call<T>
   **/
  PalletNftFractionalizationCall: {
    _enum: {
      fractionalize: {
        nftCollectionId: 'u32',
        nftId: 'u32',
        assetId: 'u32',
        beneficiary: 'MultiAddress',
        fractions: 'u128',
      },
      unify: {
        nftCollectionId: 'u32',
        nftId: 'u32',
        assetId: 'u32',
        beneficiary: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup372: pallet_salary::pallet::Call<T, I>
   **/
  PalletSalaryCall: {
    _enum: {
      init: 'Null',
      bump: 'Null',
      induct: 'Null',
      register: 'Null',
      payout: 'Null',
      payout_other: {
        beneficiary: 'AccountId32',
      },
      check_payment: 'Null'
    }
  },
  /**
   * Lookup373: pallet_core_fellowship::pallet::Call<T, I>
   **/
  PalletCoreFellowshipCall: {
    _enum: {
      bump: {
        who: 'AccountId32',
      },
      set_params: {
        params: 'PalletCoreFellowshipParamsTypeU128',
      },
      set_active: {
        isActive: 'bool',
      },
      approve: {
        who: 'AccountId32',
        atRank: 'u16',
      },
      induct: {
        who: 'AccountId32',
      },
      promote: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      offboard: {
        who: 'AccountId32',
      },
      submit_evidence: {
        wish: 'PalletCoreFellowshipWish',
        evidence: 'Bytes',
      },
      import: 'Null',
      set_partial_params: {
        partialParams: 'PalletCoreFellowshipParamsTypeOption',
      },
      promote_fast: {
        who: 'AccountId32',
        toRank: 'u16',
      },
      import_member: {
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup374: pallet_core_fellowship::ParamsType<Option<T>, Option<T>, Ranks>
   **/
  PalletCoreFellowshipParamsTypeOption: {
    activeSalary: 'Vec<Option<u128>>',
    passiveSalary: 'Vec<Option<u128>>',
    demotionPeriod: 'Vec<Option<u32>>',
    minPromotionPeriod: 'Vec<Option<u32>>',
    offboardTimeout: 'Option<u32>'
  },
  /**
   * Lookup379: pallet_transaction_storage::pallet::Call<T>
   **/
  PalletTransactionStorageCall: {
    _enum: {
      store: {
        data: 'Bytes',
      },
      renew: {
        block: 'u32',
        index: 'u32',
      },
      check_proof: {
        proof: 'SpTransactionStorageProofTransactionStorageProof'
      }
    }
  },
  /**
   * Lookup380: sp_transaction_storage_proof::TransactionStorageProof
   **/
  SpTransactionStorageProofTransactionStorageProof: {
    chunk: 'Bytes',
    proof: 'Vec<Bytes>'
  },
  /**
   * Lookup381: pallet_bags_list::pallet::Call<T, I>
   **/
  PalletBagsListCall: {
    _enum: {
      rebag: {
        dislocated: 'MultiAddress',
      },
      put_in_front_of: {
        lighter: 'MultiAddress',
      },
      put_in_front_of_other: {
        heavier: 'MultiAddress',
        lighter: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup382: pallet_state_trie_migration::pallet::Call<T>
   **/
  PalletStateTrieMigrationCall: {
    _enum: {
      control_auto_migration: {
        maybeConfig: 'Option<PalletStateTrieMigrationMigrationLimits>',
      },
      continue_migrate: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
        realSizeUpper: 'u32',
        witnessTask: 'PalletStateTrieMigrationMigrationTask',
      },
      migrate_custom_top: {
        _alias: {
          keys_: 'keys',
        },
        keys_: 'Vec<Bytes>',
        witnessSize: 'u32',
      },
      migrate_custom_child: {
        root: 'Bytes',
        childKeys: 'Vec<Bytes>',
        totalSize: 'u32',
      },
      set_signed_max_limits: {
        limits: 'PalletStateTrieMigrationMigrationLimits',
      },
      force_set_progress: {
        progressTop: 'PalletStateTrieMigrationProgress',
        progressChild: 'PalletStateTrieMigrationProgress'
      }
    }
  },
  /**
   * Lookup384: pallet_state_trie_migration::pallet::MigrationLimits
   **/
  PalletStateTrieMigrationMigrationLimits: {
    _alias: {
      size_: 'size'
    },
    size_: 'u32',
    item: 'u32'
  },
  /**
   * Lookup385: pallet_state_trie_migration::pallet::MigrationTask<T>
   **/
  PalletStateTrieMigrationMigrationTask: {
    _alias: {
      size_: 'size'
    },
    progressTop: 'PalletStateTrieMigrationProgress',
    progressChild: 'PalletStateTrieMigrationProgress',
    size_: 'u32',
    topItems: 'u32',
    childItems: 'u32'
  },
  /**
   * Lookup386: pallet_state_trie_migration::pallet::Progress<MaxKeyLen>
   **/
  PalletStateTrieMigrationProgress: {
    _enum: {
      ToStart: 'Null',
      LastKey: 'Bytes',
      Complete: 'Null'
    }
  },
  /**
   * Lookup388: pallet_child_bounties::pallet::Call<T>
   **/
  PalletChildBountiesCall: {
    _enum: {
      add_child_bounty: {
        parentBountyId: 'Compact<u32>',
        value: 'Compact<u128>',
        description: 'Bytes',
      },
      propose_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        curator: 'MultiAddress',
        fee: 'Compact<u128>',
      },
      accept_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      unassign_curator: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      award_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
        beneficiary: 'MultiAddress',
      },
      claim_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>',
      },
      close_child_bounty: {
        parentBountyId: 'Compact<u32>',
        childBountyId: 'Compact<u32>'
      }
    }
  },
  /**
   * Lookup389: pallet_referenda::pallet::Call<T, I>
   **/
  PalletReferendaCall: {
    _enum: {
      submit: {
        proposalOrigin: 'KitchensinkRuntimeOriginCaller',
        proposal: 'FrameSupportPreimagesBounded',
        enactmentMoment: 'FrameSupportScheduleDispatchTime',
      },
      place_decision_deposit: {
        index: 'u32',
      },
      refund_decision_deposit: {
        index: 'u32',
      },
      cancel: {
        index: 'u32',
      },
      kill: {
        index: 'u32',
      },
      nudge_referendum: {
        index: 'u32',
      },
      one_fewer_deciding: {
        track: 'u16',
      },
      refund_submission_deposit: {
        index: 'u32',
      },
      set_metadata: {
        index: 'u32',
        maybeHash: 'Option<H256>'
      }
    }
  },
  /**
   * Lookup390: frame_support::traits::schedule::DispatchTime<BlockNumber>
   **/
  FrameSupportScheduleDispatchTime: {
    _enum: {
      At: 'u32',
      After: 'u32'
    }
  },
  /**
   * Lookup391: pallet_remark::pallet::Call<T>
   **/
  PalletRemarkCall: {
    _enum: {
      store: {
        remark: 'Bytes'
      }
    }
  },
  /**
   * Lookup392: pallet_root_testing::pallet::Call<T>
   **/
  PalletRootTestingCall: {
    _enum: {
      fill_block: {
        ratio: 'Perbill',
      },
      trigger_defensive: 'Null'
    }
  },
  /**
   * Lookup393: pallet_conviction_voting::pallet::Call<T, I>
   **/
  PalletConvictionVotingCall: {
    _enum: {
      vote: {
        pollIndex: 'Compact<u32>',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      delegate: {
        class: 'u16',
        to: 'MultiAddress',
        conviction: 'PalletConvictionVotingConviction',
        balance: 'u128',
      },
      undelegate: {
        class: 'u16',
      },
      unlock: {
        class: 'u16',
        target: 'MultiAddress',
      },
      remove_vote: {
        class: 'Option<u16>',
        index: 'u32',
      },
      remove_other_vote: {
        target: 'MultiAddress',
        class: 'u16',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup394: pallet_conviction_voting::vote::AccountVote<Balance>
   **/
  PalletConvictionVotingVoteAccountVote: {
    _enum: {
      Standard: {
        vote: 'Vote',
        balance: 'u128',
      },
      Split: {
        aye: 'u128',
        nay: 'u128',
      },
      SplitAbstain: {
        aye: 'u128',
        nay: 'u128',
        abstain: 'u128'
      }
    }
  },
  /**
   * Lookup396: pallet_conviction_voting::conviction::Conviction
   **/
  PalletConvictionVotingConviction: {
    _enum: ['None', 'Locked1x', 'Locked2x', 'Locked3x', 'Locked4x', 'Locked5x', 'Locked6x']
  },
  /**
   * Lookup397: pallet_whitelist::pallet::Call<T>
   **/
  PalletWhitelistCall: {
    _enum: {
      whitelist_call: {
        callHash: 'H256',
      },
      remove_whitelisted_call: {
        callHash: 'H256',
      },
      dispatch_whitelisted_call: {
        callHash: 'H256',
        callEncodedLen: 'u32',
        callWeightWitness: 'SpWeightsWeightV2Weight',
      },
      dispatch_whitelisted_call_with_preimage: {
        call: 'Call'
      }
    }
  },
  /**
   * Lookup399: pallet_alliance::pallet::Call<T, I>
   **/
  PalletAllianceCall: {
    _enum: {
      propose: {
        threshold: 'Compact<u32>',
        proposal: 'Call',
        lengthBound: 'Compact<u32>',
      },
      vote: {
        proposal: 'H256',
        index: 'Compact<u32>',
        approve: 'bool',
      },
      __Unused2: 'Null',
      init_members: {
        fellows: 'Vec<AccountId32>',
        allies: 'Vec<AccountId32>',
      },
      disband: {
        witness: 'PalletAllianceDisbandWitness',
      },
      set_rule: {
        rule: 'PalletAllianceCid',
      },
      announce: {
        announcement: 'PalletAllianceCid',
      },
      remove_announcement: {
        announcement: 'PalletAllianceCid',
      },
      join_alliance: 'Null',
      nominate_ally: {
        who: 'MultiAddress',
      },
      elevate_ally: {
        ally: 'MultiAddress',
      },
      give_retirement_notice: 'Null',
      retire: 'Null',
      kick_member: {
        who: 'MultiAddress',
      },
      add_unscrupulous_items: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      remove_unscrupulous_items: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      close: {
        proposalHash: 'H256',
        index: 'Compact<u32>',
        proposalWeightBound: 'SpWeightsWeightV2Weight',
        lengthBound: 'Compact<u32>',
      },
      abdicate_fellow_status: 'Null'
    }
  },
  /**
   * Lookup400: pallet_alliance::types::DisbandWitness
   **/
  PalletAllianceDisbandWitness: {
    fellowMembers: 'Compact<u32>',
    allyMembers: 'Compact<u32>'
  },
  /**
   * Lookup401: pallet_alliance::types::Cid
   **/
  PalletAllianceCid: {
    _alias: {
      hash_: 'hash'
    },
    version: 'PalletAllianceVersion',
    codec: 'u64',
    hash_: 'PalletAllianceMultihash'
  },
  /**
   * Lookup402: pallet_alliance::types::Version
   **/
  PalletAllianceVersion: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup403: pallet_alliance::types::Multihash
   **/
  PalletAllianceMultihash: {
    code: 'u64',
    digest: 'Bytes'
  },
  /**
   * Lookup406: pallet_alliance::UnscrupulousItem<sp_core::crypto::AccountId32, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAllianceUnscrupulousItem: {
    _enum: {
      AccountId: 'AccountId32',
      Website: 'Bytes'
    }
  },
  /**
   * Lookup408: pallet_nomination_pools::pallet::Call<T>
   **/
  PalletNominationPoolsCall: {
    _enum: {
      join: {
        amount: 'Compact<u128>',
        poolId: 'u32',
      },
      bond_extra: {
        extra: 'PalletNominationPoolsBondExtra',
      },
      claim_payout: 'Null',
      unbond: {
        memberAccount: 'MultiAddress',
        unbondingPoints: 'Compact<u128>',
      },
      pool_withdraw_unbonded: {
        poolId: 'u32',
        numSlashingSpans: 'u32',
      },
      withdraw_unbonded: {
        memberAccount: 'MultiAddress',
        numSlashingSpans: 'u32',
      },
      create: {
        amount: 'Compact<u128>',
        root: 'MultiAddress',
        nominator: 'MultiAddress',
        bouncer: 'MultiAddress',
      },
      create_with_pool_id: {
        amount: 'Compact<u128>',
        root: 'MultiAddress',
        nominator: 'MultiAddress',
        bouncer: 'MultiAddress',
        poolId: 'u32',
      },
      nominate: {
        poolId: 'u32',
        validators: 'Vec<AccountId32>',
      },
      set_state: {
        poolId: 'u32',
        state: 'PalletNominationPoolsPoolState',
      },
      set_metadata: {
        poolId: 'u32',
        metadata: 'Bytes',
      },
      set_configs: {
        minJoinBond: 'PalletNominationPoolsConfigOpU128',
        minCreateBond: 'PalletNominationPoolsConfigOpU128',
        maxPools: 'PalletNominationPoolsConfigOpU32',
        maxMembers: 'PalletNominationPoolsConfigOpU32',
        maxMembersPerPool: 'PalletNominationPoolsConfigOpU32',
        globalMaxCommission: 'PalletNominationPoolsConfigOpPerbill',
      },
      update_roles: {
        poolId: 'u32',
        newRoot: 'PalletNominationPoolsConfigOpAccountId32',
        newNominator: 'PalletNominationPoolsConfigOpAccountId32',
        newBouncer: 'PalletNominationPoolsConfigOpAccountId32',
      },
      chill: {
        poolId: 'u32',
      },
      bond_extra_other: {
        member: 'MultiAddress',
        extra: 'PalletNominationPoolsBondExtra',
      },
      set_claim_permission: {
        permission: 'PalletNominationPoolsClaimPermission',
      },
      claim_payout_other: {
        other: 'AccountId32',
      },
      set_commission: {
        poolId: 'u32',
        newCommission: 'Option<(Perbill,AccountId32)>',
      },
      set_commission_max: {
        poolId: 'u32',
        maxCommission: 'Perbill',
      },
      set_commission_change_rate: {
        poolId: 'u32',
        changeRate: 'PalletNominationPoolsCommissionChangeRate',
      },
      claim_commission: {
        poolId: 'u32',
      },
      adjust_pool_deposit: {
        poolId: 'u32',
      },
      set_commission_claim_permission: {
        poolId: 'u32',
        permission: 'Option<PalletNominationPoolsCommissionClaimPermission>',
      },
      apply_slash: {
        memberAccount: 'MultiAddress',
      },
      migrate_delegation: {
        memberAccount: 'MultiAddress',
      },
      migrate_pool_to_delegate_stake: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup409: pallet_nomination_pools::BondExtra<Balance>
   **/
  PalletNominationPoolsBondExtra: {
    _enum: {
      FreeBalance: 'u128',
      Rewards: 'Null'
    }
  },
  /**
   * Lookup410: pallet_nomination_pools::PoolState
   **/
  PalletNominationPoolsPoolState: {
    _enum: ['Open', 'Blocked', 'Destroying']
  },
  /**
   * Lookup411: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU128: {
    _enum: {
      Noop: 'Null',
      Set: 'u128',
      Remove: 'Null'
    }
  },
  /**
   * Lookup412: pallet_nomination_pools::ConfigOp<T>
   **/
  PalletNominationPoolsConfigOpU32: {
    _enum: {
      Noop: 'Null',
      Set: 'u32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup413: pallet_nomination_pools::ConfigOp<sp_arithmetic::per_things::Perbill>
   **/
  PalletNominationPoolsConfigOpPerbill: {
    _enum: {
      Noop: 'Null',
      Set: 'Perbill',
      Remove: 'Null'
    }
  },
  /**
   * Lookup414: pallet_nomination_pools::ConfigOp<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsConfigOpAccountId32: {
    _enum: {
      Noop: 'Null',
      Set: 'AccountId32',
      Remove: 'Null'
    }
  },
  /**
   * Lookup415: pallet_nomination_pools::ClaimPermission
   **/
  PalletNominationPoolsClaimPermission: {
    _enum: ['Permissioned', 'PermissionlessCompound', 'PermissionlessWithdraw', 'PermissionlessAll']
  },
  /**
   * Lookup418: pallet_nomination_pools::CommissionChangeRate<BlockNumber>
   **/
  PalletNominationPoolsCommissionChangeRate: {
    maxIncrease: 'Perbill',
    minDelay: 'u32'
  },
  /**
   * Lookup420: pallet_nomination_pools::CommissionClaimPermission<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsCommissionClaimPermission: {
    _enum: {
      Permissionless: 'Null',
      Account: 'AccountId32'
    }
  },
  /**
   * Lookup422: pallet_ranked_collective::pallet::Call<T, I>
   **/
  PalletRankedCollectiveCall: {
    _enum: {
      add_member: {
        who: 'MultiAddress',
      },
      promote_member: {
        who: 'MultiAddress',
      },
      demote_member: {
        who: 'MultiAddress',
      },
      remove_member: {
        who: 'MultiAddress',
        minRank: 'u16',
      },
      vote: {
        poll: 'u32',
        aye: 'bool',
      },
      cleanup_poll: {
        pollIndex: 'u32',
        max: 'u32',
      },
      exchange_member: {
        who: 'MultiAddress',
        newWho: 'MultiAddress'
      }
    }
  },
  /**
   * Lookup423: pallet_asset_conversion::pallet::Call<T>
   **/
  PalletAssetConversionCall: {
    _enum: {
      create_pool: {
        asset1: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
      },
      add_liquidity: {
        asset1: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        amount1Desired: 'u128',
        amount2Desired: 'u128',
        amount1Min: 'u128',
        amount2Min: 'u128',
        mintTo: 'AccountId32',
      },
      remove_liquidity: {
        asset1: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        lpTokenBurn: 'u128',
        amount1MinReceive: 'u128',
        amount2MinReceive: 'u128',
        withdrawTo: 'AccountId32',
      },
      swap_exact_tokens_for_tokens: {
        path: 'Vec<FrameSupportTokensFungibleUnionOfNativeOrWithId>',
        amountIn: 'u128',
        amountOutMin: 'u128',
        sendTo: 'AccountId32',
        keepAlive: 'bool',
      },
      swap_tokens_for_exact_tokens: {
        path: 'Vec<FrameSupportTokensFungibleUnionOfNativeOrWithId>',
        amountOut: 'u128',
        amountInMax: 'u128',
        sendTo: 'AccountId32',
        keepAlive: 'bool',
      },
      touch: {
        asset1: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'FrameSupportTokensFungibleUnionOfNativeOrWithId'
      }
    }
  },
  /**
   * Lookup425: pallet_fast_unstake::pallet::Call<T>
   **/
  PalletFastUnstakeCall: {
    _enum: {
      register_fast_unstake: 'Null',
      deregister: 'Null',
      control: {
        erasToCheck: 'u32'
      }
    }
  },
  /**
   * Lookup426: pallet_message_queue::pallet::Call<T>
   **/
  PalletMessageQueueCall: {
    _enum: {
      reap_page: {
        messageOrigin: 'u32',
        pageIndex: 'u32',
      },
      execute_overweight: {
        messageOrigin: 'u32',
        page: 'u32',
        index: 'u32',
        weightLimit: 'SpWeightsWeightV2Weight'
      }
    }
  },
  /**
   * Lookup427: frame_benchmarking_pallet_pov::pallet::Call<T>
   **/
  FrameBenchmarkingPalletPovCall: {
    _enum: ['emit_event', 'noop']
  },
  /**
   * Lookup428: pallet_tx_pause::pallet::Call<T>
   **/
  PalletTxPauseCall: {
    _enum: {
      pause: {
        fullName: '(Bytes,Bytes)',
      },
      unpause: {
        ident: '(Bytes,Bytes)'
      }
    }
  },
  /**
   * Lookup430: pallet_safe_mode::pallet::Call<T>
   **/
  PalletSafeModeCall: {
    _enum: {
      enter: 'Null',
      force_enter: 'Null',
      extend: 'Null',
      force_extend: 'Null',
      force_exit: 'Null',
      force_slash_deposit: {
        account: 'AccountId32',
        block: 'u32',
      },
      release_deposit: {
        account: 'AccountId32',
        block: 'u32',
      },
      force_release_deposit: {
        account: 'AccountId32',
        block: 'u32'
      }
    }
  },
  /**
   * Lookup431: pallet_migrations::pallet::Call<T>
   **/
  PalletMigrationsCall: {
    _enum: {
      force_set_cursor: {
        cursor: 'Option<PalletMigrationsMigrationCursor>',
      },
      force_set_active_cursor: {
        index: 'u32',
        innerCursor: 'Option<Bytes>',
        startedAt: 'Option<u32>',
      },
      force_onboard_mbms: 'Null',
      clear_historic: {
        selector: 'PalletMigrationsHistoricCleanupSelector'
      }
    }
  },
  /**
   * Lookup433: pallet_migrations::MigrationCursor<bounded_collections::bounded_vec::BoundedVec<T, S>, BlockNumber>
   **/
  PalletMigrationsMigrationCursor: {
    _enum: {
      Active: 'PalletMigrationsActiveCursor',
      Stuck: 'Null'
    }
  },
  /**
   * Lookup435: pallet_migrations::ActiveCursor<bounded_collections::bounded_vec::BoundedVec<T, S>, BlockNumber>
   **/
  PalletMigrationsActiveCursor: {
    index: 'u32',
    innerCursor: 'Option<Bytes>',
    startedAt: 'u32'
  },
  /**
   * Lookup437: pallet_migrations::HistoricCleanupSelector<bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletMigrationsHistoricCleanupSelector: {
    _enum: {
      Specific: 'Vec<Bytes>',
      Wildcard: {
        limit: 'Option<u32>',
        previousCursor: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup440: pallet_broker::pallet::Call<T>
   **/
  PalletBrokerCall: {
    _enum: {
      configure: {
        config: 'PalletBrokerConfigRecord',
      },
      reserve: {
        workload: 'Vec<PalletBrokerScheduleItem>',
      },
      unreserve: {
        itemIndex: 'u32',
      },
      set_lease: {
        task: 'u32',
        until: 'u32',
      },
      start_sales: {
        endPrice: 'u128',
        extraCores: 'u16',
      },
      purchase: {
        priceLimit: 'u128',
      },
      renew: {
        core: 'u16',
      },
      transfer: {
        regionId: 'PalletBrokerRegionId',
        newOwner: 'AccountId32',
      },
      partition: {
        regionId: 'PalletBrokerRegionId',
        pivot: 'u32',
      },
      interlace: {
        regionId: 'PalletBrokerRegionId',
        pivot: 'PalletBrokerCoreMask',
      },
      assign: {
        regionId: 'PalletBrokerRegionId',
        task: 'u32',
        finality: 'PalletBrokerFinality',
      },
      pool: {
        regionId: 'PalletBrokerRegionId',
        payee: 'AccountId32',
        finality: 'PalletBrokerFinality',
      },
      claim_revenue: {
        regionId: 'PalletBrokerRegionId',
        maxTimeslices: 'u32',
      },
      purchase_credit: {
        amount: 'u128',
        beneficiary: 'AccountId32',
      },
      drop_region: {
        regionId: 'PalletBrokerRegionId',
      },
      drop_contribution: {
        regionId: 'PalletBrokerRegionId',
      },
      drop_history: {
        when: 'u32',
      },
      drop_renewal: {
        core: 'u16',
        when: 'u32',
      },
      request_core_count: {
        coreCount: 'u16',
      },
      notify_core_count: {
        coreCount: 'u16',
      },
      notify_revenue: {
        revenue: 'PalletBrokerOnDemandRevenueRecord',
      },
      enable_auto_renew: {
        core: 'u16',
        task: 'u32',
        workloadEndHint: 'Option<u32>',
      },
      disable_auto_renew: {
        core: 'u16',
        task: 'u32',
      },
      force_reserve: {
        workload: 'Vec<PalletBrokerScheduleItem>',
        core: 'u16',
      },
      remove_lease: {
        task: 'u32',
      },
      __Unused25: 'Null',
      remove_assignment: {
        regionId: 'PalletBrokerRegionId',
      },
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      __Unused83: 'Null',
      __Unused84: 'Null',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      __Unused89: 'Null',
      __Unused90: 'Null',
      __Unused91: 'Null',
      __Unused92: 'Null',
      __Unused93: 'Null',
      __Unused94: 'Null',
      __Unused95: 'Null',
      __Unused96: 'Null',
      __Unused97: 'Null',
      __Unused98: 'Null',
      swap_leases: {
        id: 'u32',
        other: 'u32'
      }
    }
  },
  /**
   * Lookup441: pallet_broker::types::ConfigRecord<RelayBlockNumber>
   **/
  PalletBrokerConfigRecord: {
    advanceNotice: 'u32',
    interludeLength: 'u32',
    leadinLength: 'u32',
    regionLength: 'u32',
    idealBulkProportion: 'Perbill',
    limitCoresOffered: 'Option<u16>',
    renewalBump: 'Perbill',
    contributionTimeout: 'u32'
  },
  /**
   * Lookup443: pallet_broker::types::ScheduleItem
   **/
  PalletBrokerScheduleItem: {
    mask: 'PalletBrokerCoreMask',
    assignment: 'PalletBrokerCoretimeInterfaceCoreAssignment'
  },
  /**
   * Lookup444: pallet_broker::core_mask::CoreMask
   **/
  PalletBrokerCoreMask: '[u8;10]',
  /**
   * Lookup445: pallet_broker::coretime_interface::CoreAssignment
   **/
  PalletBrokerCoretimeInterfaceCoreAssignment: {
    _enum: {
      Idle: 'Null',
      Pool: 'Null',
      Task: 'u32'
    }
  },
  /**
   * Lookup447: pallet_broker::types::RegionId
   **/
  PalletBrokerRegionId: {
    begin: 'u32',
    core: 'u16',
    mask: 'PalletBrokerCoreMask'
  },
  /**
   * Lookup448: pallet_broker::types::Finality
   **/
  PalletBrokerFinality: {
    _enum: ['Provisional', 'Final']
  },
  /**
   * Lookup449: pallet_broker::types::OnDemandRevenueRecord<RelayBlockNumber, RelayBalance>
   **/
  PalletBrokerOnDemandRevenueRecord: {
    until: 'u32',
    amount: 'u128'
  },
  /**
   * Lookup450: pallet_mixnet::pallet::Call<T>
   **/
  PalletMixnetCall: {
    _enum: {
      register: {
        registration: 'PalletMixnetRegistration',
        signature: 'SpMixnetAppSignature'
      }
    }
  },
  /**
   * Lookup451: pallet_mixnet::Registration<BlockNumber, pallet_mixnet::BoundedMixnode<bounded_collections::bounded_vec::BoundedVec<bounded_collections::bounded_vec::BoundedVec<T, S>, S>>>
   **/
  PalletMixnetRegistration: {
    blockNumber: 'u32',
    sessionIndex: 'u32',
    authorityIndex: 'u32',
    mixnode: 'PalletMixnetBoundedMixnode'
  },
  /**
   * Lookup452: pallet_mixnet::BoundedMixnode<bounded_collections::bounded_vec::BoundedVec<bounded_collections::bounded_vec::BoundedVec<T, S>, S>>
   **/
  PalletMixnetBoundedMixnode: {
    kxPublic: '[u8;32]',
    peerId: '[u8;32]',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup455: sp_mixnet::types::app::Signature
   **/
  SpMixnetAppSignature: '[u8;64]',
  /**
   * Lookup456: pallet_parameters::pallet::Call<T>
   **/
  PalletParametersCall: {
    _enum: {
      set_parameter: {
        keyValue: 'KitchensinkRuntimeRuntimeParameters'
      }
    }
  },
  /**
   * Lookup457: kitchensink_runtime::RuntimeParameters
   **/
  KitchensinkRuntimeRuntimeParameters: {
    _enum: {
      Storage: 'KitchensinkRuntimeDynamicParamsStorageParameters',
      Referenda: 'KitchensinkRuntimeDynamicParamsReferendaParameters'
    }
  },
  /**
   * Lookup458: kitchensink_runtime::dynamic_params::storage::Parameters
   **/
  KitchensinkRuntimeDynamicParamsStorageParameters: {
    _enum: {
      BaseDeposit: '(KitchensinkRuntimeDynamicParamsStorageBaseDeposit,Option<u128>)',
      ByteDeposit: '(KitchensinkRuntimeDynamicParamsStorageByteDeposit,Option<u128>)'
    }
  },
  /**
   * Lookup459: kitchensink_runtime::dynamic_params::storage::BaseDeposit
   **/
  KitchensinkRuntimeDynamicParamsStorageBaseDeposit: 'Null',
  /**
   * Lookup460: kitchensink_runtime::dynamic_params::storage::ByteDeposit
   **/
  KitchensinkRuntimeDynamicParamsStorageByteDeposit: 'Null',
  /**
   * Lookup461: kitchensink_runtime::dynamic_params::referenda::Parameters
   **/
  KitchensinkRuntimeDynamicParamsReferendaParameters: {
    _enum: {
      Tracks: '(KitchensinkRuntimeDynamicParamsReferendaTracks,Option<Vec<PalletReferendaTrack>>)',
      Origins: '(KitchensinkRuntimeDynamicParamsReferendaOrigins,Option<Vec<(KitchensinkRuntimeOriginCaller,u16)>>)'
    }
  },
  /**
   * Lookup462: kitchensink_runtime::dynamic_params::referenda::Tracks
   **/
  KitchensinkRuntimeDynamicParamsReferendaTracks: 'Null',
  /**
   * Lookup465: pallet_referenda::types::Track<Id, Balance, Moment>
   **/
  PalletReferendaTrack: {
    id: 'u16',
    info: {
      name: '[u8;25]',
      maxDeciding: 'u32',
      decisionDeposit: 'u128',
      preparePeriod: 'u32',
      decisionPeriod: 'u32',
      confirmPeriod: 'u32',
      minEnactmentPeriod: 'u32',
      minApproval: 'PalletReferendaCurve',
      minSupport: 'PalletReferendaCurve'
    }
  },
  /**
   * Lookup467: pallet_referenda::types::Curve
   **/
  PalletReferendaCurve: {
    _enum: {
      LinearDecreasing: {
        length: 'Perbill',
        floor: 'Perbill',
        ceil: 'Perbill',
      },
      SteppedDecreasing: {
        begin: 'Perbill',
        end: 'Perbill',
        step: 'Perbill',
        period: 'Perbill',
      },
      Reciprocal: {
        factor: 'i64',
        xOffset: 'i64',
        yOffset: 'i64'
      }
    }
  },
  /**
   * Lookup471: kitchensink_runtime::dynamic_params::referenda::Origins
   **/
  KitchensinkRuntimeDynamicParamsReferendaOrigins: 'Null',
  /**
   * Lookup476: pallet_asset_conversion_ops::pallet::Call<T>
   **/
  PalletAssetConversionOpsCall: {
    _enum: {
      migrate_to_new_account: {
        asset1: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        asset2: 'FrameSupportTokensFungibleUnionOfNativeOrWithId'
      }
    }
  },
  /**
   * Lookup477: pallet_revive::pallet::Call<T>
   **/
  PalletReviveCall: {
    _enum: {
      eth_transact: {
        payload: 'Bytes',
      },
      call: {
        dest: 'H160',
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Compact<u128>',
        data: 'Bytes',
      },
      instantiate: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Compact<u128>',
        codeHash: 'H256',
        data: 'Bytes',
        salt: 'Option<[u8;32]>',
      },
      instantiate_with_code: {
        value: 'Compact<u128>',
        gasLimit: 'SpWeightsWeightV2Weight',
        storageDepositLimit: 'Compact<u128>',
        code: 'Bytes',
        data: 'Bytes',
        salt: 'Option<[u8;32]>',
      },
      upload_code: {
        code: 'Bytes',
        storageDepositLimit: 'Compact<u128>',
      },
      remove_code: {
        codeHash: 'H256',
      },
      set_code: {
        dest: 'H160',
        codeHash: 'H256',
      },
      map_account: 'Null',
      unmap_account: 'Null',
      dispatch_as_fallback_account: {
        call: 'Call'
      }
    }
  },
  /**
   * Lookup479: pallet_asset_rewards::pallet::Call<T>
   **/
  PalletAssetRewardsCall: {
    _enum: {
      create_pool: {
        stakedAssetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rewardAssetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rewardRatePerBlock: 'u128',
        expiry: 'FrameSupportScheduleDispatchTime',
        admin: 'Option<AccountId32>',
      },
      stake: {
        poolId: 'u32',
        amount: 'u128',
      },
      unstake: {
        poolId: 'u32',
        amount: 'u128',
        staker: 'Option<AccountId32>',
      },
      harvest_rewards: {
        poolId: 'u32',
        staker: 'Option<AccountId32>',
      },
      set_pool_reward_rate_per_block: {
        poolId: 'u32',
        newRewardRatePerBlock: 'u128',
      },
      set_pool_admin: {
        poolId: 'u32',
        newAdmin: 'AccountId32',
      },
      set_pool_expiry_block: {
        poolId: 'u32',
        newExpiry: 'FrameSupportScheduleDispatchTime',
      },
      deposit_reward_tokens: {
        poolId: 'u32',
        amount: 'u128',
      },
      cleanup_pool: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup480: pallet_meta_tx::pallet::Call<T>
   **/
  PalletMetaTxCall: {
    _enum: {
      dispatch: {
        metaTx: 'PalletMetaTxMetaTx'
      }
    }
  },
  /**
   * Lookup481: pallet_meta_tx::MetaTx<kitchensink_runtime::RuntimeCall, Extension>
   **/
  PalletMetaTxMetaTx: {
    call: 'Call',
    extensionVersion: 'u8',
    extension: '(PalletVerifySignatureExtensionVerifySignature,PalletMetaTxExtensionMetaTxMarker,FrameSystemExtensionsCheckNonZeroSender,FrameSystemExtensionsCheckSpecVersion,FrameSystemExtensionsCheckTxVersion,FrameSystemExtensionsCheckGenesis,Era,FrameSystemExtensionsCheckNonce,FrameMetadataHashExtensionCheckMetadataHash)'
  },
  /**
   * Lookup483: pallet_verify_signature::extension::VerifySignature<T>
   **/
  PalletVerifySignatureExtensionVerifySignature: {
    _enum: {
      Signed: {
        signature: 'SpRuntimeMultiSignature',
        account: 'AccountId32',
      },
      Disabled: 'Null'
    }
  },
  /**
   * Lookup484: pallet_meta_tx::extension::MetaTxMarker<T>
   **/
  PalletMetaTxExtensionMetaTxMarker: 'Null',
  /**
   * Lookup485: frame_system::extensions::check_non_zero_sender::CheckNonZeroSender<T>
   **/
  FrameSystemExtensionsCheckNonZeroSender: 'Null',
  /**
   * Lookup486: frame_system::extensions::check_spec_version::CheckSpecVersion<T>
   **/
  FrameSystemExtensionsCheckSpecVersion: 'Null',
  /**
   * Lookup487: frame_system::extensions::check_tx_version::CheckTxVersion<T>
   **/
  FrameSystemExtensionsCheckTxVersion: 'Null',
  /**
   * Lookup488: frame_system::extensions::check_genesis::CheckGenesis<T>
   **/
  FrameSystemExtensionsCheckGenesis: 'Null',
  /**
   * Lookup491: frame_system::extensions::check_nonce::CheckNonce<T>
   **/
  FrameSystemExtensionsCheckNonce: 'Compact<u32>',
  /**
   * Lookup492: frame_metadata_hash_extension::CheckMetadataHash<T>
   **/
  FrameMetadataHashExtensionCheckMetadataHash: {
    mode: 'FrameMetadataHashExtensionMode'
  },
  /**
   * Lookup493: frame_metadata_hash_extension::Mode
   **/
  FrameMetadataHashExtensionMode: {
    _enum: ['Disabled', 'Enabled']
  },
  /**
   * Lookup494: sp_runtime::traits::BlakeTwo256
   **/
  SpRuntimeBlakeTwo256: 'Null',
  /**
   * Lookup495: pallet_conviction_voting::types::Tally<Votes, Total>
   **/
  PalletConvictionVotingTally: {
    ayes: 'u128',
    nays: 'u128',
    support: 'u128'
  },
  /**
   * Lookup496: pallet_remark::pallet::Event<T>
   **/
  PalletRemarkEvent: {
    _enum: {
      Stored: {
        sender: 'AccountId32',
        contentHash: 'H256'
      }
    }
  },
  /**
   * Lookup497: pallet_root_testing::pallet::Event<T>
   **/
  PalletRootTestingEvent: {
    _enum: ['DefensiveTestCall']
  },
  /**
   * Lookup498: pallet_conviction_voting::pallet::Event<T, I>
   **/
  PalletConvictionVotingEvent: {
    _enum: {
      Delegated: '(AccountId32,AccountId32)',
      Undelegated: 'AccountId32',
      Voted: {
        who: 'AccountId32',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      VoteRemoved: {
        who: 'AccountId32',
        vote: 'PalletConvictionVotingVoteAccountVote',
      },
      VoteUnlocked: {
        who: 'AccountId32',
        class: 'u16'
      }
    }
  },
  /**
   * Lookup499: pallet_whitelist::pallet::Event<T>
   **/
  PalletWhitelistEvent: {
    _enum: {
      CallWhitelisted: {
        callHash: 'H256',
      },
      WhitelistedCallRemoved: {
        callHash: 'H256',
      },
      WhitelistedCallDispatched: {
        callHash: 'H256',
        result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup501: frame_support::dispatch::PostDispatchInfo
   **/
  FrameSupportDispatchPostDispatchInfo: {
    actualWeight: 'Option<SpWeightsWeightV2Weight>',
    paysFee: 'FrameSupportDispatchPays'
  },
  /**
   * Lookup503: sp_runtime::DispatchErrorWithPostInfo<frame_support::dispatch::PostDispatchInfo>
   **/
  SpRuntimeDispatchErrorWithPostInfo: {
    postInfo: 'FrameSupportDispatchPostDispatchInfo',
    error: 'SpRuntimeDispatchError'
  },
  /**
   * Lookup505: pallet_alliance::pallet::Event<T, I>
   **/
  PalletAllianceEvent: {
    _enum: {
      NewRuleSet: {
        rule: 'PalletAllianceCid',
      },
      Announced: {
        announcement: 'PalletAllianceCid',
      },
      AnnouncementRemoved: {
        announcement: 'PalletAllianceCid',
      },
      MembersInitialized: {
        fellows: 'Vec<AccountId32>',
        allies: 'Vec<AccountId32>',
      },
      NewAllyJoined: {
        ally: 'AccountId32',
        nominator: 'Option<AccountId32>',
        reserved: 'Option<u128>',
      },
      AllyElevated: {
        ally: 'AccountId32',
      },
      MemberRetirementPeriodStarted: {
        member: 'AccountId32',
      },
      MemberRetired: {
        member: 'AccountId32',
        unreserved: 'Option<u128>',
      },
      MemberKicked: {
        member: 'AccountId32',
        slashed: 'Option<u128>',
      },
      UnscrupulousItemAdded: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      UnscrupulousItemRemoved: {
        items: 'Vec<PalletAllianceUnscrupulousItem>',
      },
      AllianceDisbanded: {
        fellowMembers: 'u32',
        allyMembers: 'u32',
        unreserved: 'u32',
      },
      FellowAbdicated: {
        fellow: 'AccountId32'
      }
    }
  },
  /**
   * Lookup506: pallet_nomination_pools::pallet::Event<T>
   **/
  PalletNominationPoolsEvent: {
    _enum: {
      Created: {
        depositor: 'AccountId32',
        poolId: 'u32',
      },
      Bonded: {
        member: 'AccountId32',
        poolId: 'u32',
        bonded: 'u128',
        joined: 'bool',
      },
      PaidOut: {
        member: 'AccountId32',
        poolId: 'u32',
        payout: 'u128',
      },
      Unbonded: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
        era: 'u32',
      },
      Withdrawn: {
        member: 'AccountId32',
        poolId: 'u32',
        balance: 'u128',
        points: 'u128',
      },
      Destroyed: {
        poolId: 'u32',
      },
      StateChanged: {
        poolId: 'u32',
        newState: 'PalletNominationPoolsPoolState',
      },
      MemberRemoved: {
        poolId: 'u32',
        member: 'AccountId32',
        releasedBalance: 'u128',
      },
      RolesUpdated: {
        root: 'Option<AccountId32>',
        bouncer: 'Option<AccountId32>',
        nominator: 'Option<AccountId32>',
      },
      PoolSlashed: {
        poolId: 'u32',
        balance: 'u128',
      },
      UnbondingPoolSlashed: {
        poolId: 'u32',
        era: 'u32',
        balance: 'u128',
      },
      PoolCommissionUpdated: {
        poolId: 'u32',
        current: 'Option<(Perbill,AccountId32)>',
      },
      PoolMaxCommissionUpdated: {
        poolId: 'u32',
        maxCommission: 'Perbill',
      },
      PoolCommissionChangeRateUpdated: {
        poolId: 'u32',
        changeRate: 'PalletNominationPoolsCommissionChangeRate',
      },
      PoolCommissionClaimPermissionUpdated: {
        poolId: 'u32',
        permission: 'Option<PalletNominationPoolsCommissionClaimPermission>',
      },
      PoolCommissionClaimed: {
        poolId: 'u32',
        commission: 'u128',
      },
      MinBalanceDeficitAdjusted: {
        poolId: 'u32',
        amount: 'u128',
      },
      MinBalanceExcessAdjusted: {
        poolId: 'u32',
        amount: 'u128',
      },
      MemberClaimPermissionUpdated: {
        member: 'AccountId32',
        permission: 'PalletNominationPoolsClaimPermission',
      },
      MetadataUpdated: {
        poolId: 'u32',
        caller: 'AccountId32',
      },
      PoolNominationMade: {
        poolId: 'u32',
        caller: 'AccountId32',
      },
      PoolNominatorChilled: {
        poolId: 'u32',
        caller: 'AccountId32',
      },
      GlobalParamsUpdated: {
        minJoinBond: 'u128',
        minCreateBond: 'u128',
        maxPools: 'Option<u32>',
        maxMembers: 'Option<u32>',
        maxMembersPerPool: 'Option<u32>',
        globalMaxCommission: 'Option<Perbill>'
      }
    }
  },
  /**
   * Lookup509: pallet_ranked_collective::Tally<T, I, M>
   **/
  PalletRankedCollectiveTally: {
    bareAyes: 'u32',
    ayes: 'u32',
    nays: 'u32'
  },
  /**
   * Lookup510: pallet_ranked_collective::pallet::Event<T, I>
   **/
  PalletRankedCollectiveEvent: {
    _enum: {
      MemberAdded: {
        who: 'AccountId32',
      },
      RankChanged: {
        who: 'AccountId32',
        rank: 'u16',
      },
      MemberRemoved: {
        who: 'AccountId32',
        rank: 'u16',
      },
      Voted: {
        who: 'AccountId32',
        poll: 'u32',
        vote: 'PalletRankedCollectiveVoteRecord',
        tally: 'PalletRankedCollectiveTally',
      },
      MemberExchanged: {
        who: 'AccountId32',
        newWho: 'AccountId32'
      }
    }
  },
  /**
   * Lookup511: pallet_ranked_collective::VoteRecord
   **/
  PalletRankedCollectiveVoteRecord: {
    _enum: {
      Aye: 'u32',
      Nay: 'u32'
    }
  },
  /**
   * Lookup512: pallet_asset_conversion::pallet::Event<T>
   **/
  PalletAssetConversionEvent: {
    _enum: {
      PoolCreated: {
        creator: 'AccountId32',
        poolId: '(FrameSupportTokensFungibleUnionOfNativeOrWithId,FrameSupportTokensFungibleUnionOfNativeOrWithId)',
        poolAccount: 'AccountId32',
        lpToken: 'u32',
      },
      LiquidityAdded: {
        who: 'AccountId32',
        mintTo: 'AccountId32',
        poolId: '(FrameSupportTokensFungibleUnionOfNativeOrWithId,FrameSupportTokensFungibleUnionOfNativeOrWithId)',
        amount1Provided: 'u128',
        amount2Provided: 'u128',
        lpToken: 'u32',
        lpTokenMinted: 'u128',
      },
      LiquidityRemoved: {
        who: 'AccountId32',
        withdrawTo: 'AccountId32',
        poolId: '(FrameSupportTokensFungibleUnionOfNativeOrWithId,FrameSupportTokensFungibleUnionOfNativeOrWithId)',
        amount1: 'u128',
        amount2: 'u128',
        lpToken: 'u32',
        lpTokenBurned: 'u128',
        withdrawalFee: 'Permill',
      },
      SwapExecuted: {
        who: 'AccountId32',
        sendTo: 'AccountId32',
        amountIn: 'u128',
        amountOut: 'u128',
        path: 'Vec<(FrameSupportTokensFungibleUnionOfNativeOrWithId,u128)>',
      },
      SwapCreditExecuted: {
        amountIn: 'u128',
        amountOut: 'u128',
        path: 'Vec<(FrameSupportTokensFungibleUnionOfNativeOrWithId,u128)>',
      },
      Touched: {
        poolId: '(FrameSupportTokensFungibleUnionOfNativeOrWithId,FrameSupportTokensFungibleUnionOfNativeOrWithId)',
        who: 'AccountId32'
      }
    }
  },
  /**
   * Lookup517: pallet_fast_unstake::pallet::Event<T>
   **/
  PalletFastUnstakeEvent: {
    _enum: {
      Unstaked: {
        stash: 'AccountId32',
        result: 'Result<Null, SpRuntimeDispatchError>',
      },
      Slashed: {
        stash: 'AccountId32',
        amount: 'u128',
      },
      BatchChecked: {
        eras: 'Vec<u32>',
      },
      BatchFinished: {
        _alias: {
          size_: 'size',
        },
        size_: 'u32',
      },
      InternalError: 'Null'
    }
  },
  /**
   * Lookup518: pallet_message_queue::pallet::Event<T>
   **/
  PalletMessageQueueEvent: {
    _enum: {
      ProcessingFailed: {
        id: 'H256',
        origin: 'u32',
        error: 'FrameSupportMessagesProcessMessageError',
      },
      Processed: {
        id: 'H256',
        origin: 'u32',
        weightUsed: 'SpWeightsWeightV2Weight',
        success: 'bool',
      },
      OverweightEnqueued: {
        id: '[u8;32]',
        origin: 'u32',
        pageIndex: 'u32',
        messageIndex: 'u32',
      },
      PageReaped: {
        origin: 'u32',
        index: 'u32'
      }
    }
  },
  /**
   * Lookup519: frame_support::traits::messages::ProcessMessageError
   **/
  FrameSupportMessagesProcessMessageError: {
    _enum: {
      BadFormat: 'Null',
      Corrupt: 'Null',
      Unsupported: 'Null',
      Overweight: 'SpWeightsWeightV2Weight',
      Yield: 'Null',
      StackLimitReached: 'Null'
    }
  },
  /**
   * Lookup520: frame_benchmarking_pallet_pov::pallet::Event<T>
   **/
  FrameBenchmarkingPalletPovEvent: {
    _enum: ['TestEvent']
  },
  /**
   * Lookup521: pallet_tx_pause::pallet::Event<T>
   **/
  PalletTxPauseEvent: {
    _enum: {
      CallPaused: {
        fullName: '(Bytes,Bytes)',
      },
      CallUnpaused: {
        fullName: '(Bytes,Bytes)'
      }
    }
  },
  /**
   * Lookup522: pallet_safe_mode::pallet::Event<T>
   **/
  PalletSafeModeEvent: {
    _enum: {
      Entered: {
        until: 'u32',
      },
      Extended: {
        until: 'u32',
      },
      Exited: {
        reason: 'PalletSafeModeExitReason',
      },
      DepositPlaced: {
        account: 'AccountId32',
        amount: 'u128',
      },
      DepositReleased: {
        account: 'AccountId32',
        amount: 'u128',
      },
      DepositSlashed: {
        account: 'AccountId32',
        amount: 'u128',
      },
      CannotDeposit: 'Null',
      CannotRelease: 'Null'
    }
  },
  /**
   * Lookup523: pallet_safe_mode::pallet::ExitReason
   **/
  PalletSafeModeExitReason: {
    _enum: ['Timeout', 'Force']
  },
  /**
   * Lookup524: pallet_statement::pallet::Event<T>
   **/
  PalletStatementEvent: {
    _enum: {
      NewStatement: {
        account: 'AccountId32',
        statement: 'SpStatementStoreStatement'
      }
    }
  },
  /**
   * Lookup525: sp_statement_store::Statement
   **/
  SpStatementStoreStatement: {
    proof: 'Option<SpStatementStoreProof>',
    decryptionKey: 'Option<[u8;32]>',
    channel: 'Option<[u8;32]>',
    priority: 'Option<u32>',
    numTopics: 'u8',
    topics: '[[u8;32];4]',
    data: 'Option<Bytes>'
  },
  /**
   * Lookup527: sp_statement_store::Proof
   **/
  SpStatementStoreProof: {
    _enum: {
      Sr25519: {
        signature: '[u8;64]',
        signer: '[u8;32]',
      },
      Ed25519: {
        signature: '[u8;64]',
        signer: '[u8;32]',
      },
      Secp256k1Ecdsa: {
        signature: '[u8;65]',
        signer: '[u8;33]',
      },
      OnChain: {
        who: '[u8;32]',
        blockHash: '[u8;32]',
        eventIndex: 'u64'
      }
    }
  },
  /**
   * Lookup529: pallet_migrations::pallet::Event<T>
   **/
  PalletMigrationsEvent: {
    _enum: {
      UpgradeStarted: {
        migrations: 'u32',
      },
      UpgradeCompleted: 'Null',
      UpgradeFailed: 'Null',
      MigrationSkipped: {
        index: 'u32',
      },
      MigrationAdvanced: {
        index: 'u32',
        took: 'u32',
      },
      MigrationCompleted: {
        index: 'u32',
        took: 'u32',
      },
      MigrationFailed: {
        index: 'u32',
        took: 'u32',
      },
      HistoricCleared: {
        nextCursor: 'Option<Bytes>'
      }
    }
  },
  /**
   * Lookup530: pallet_broker::pallet::Event<T>
   **/
  PalletBrokerEvent: {
    _enum: {
      Purchased: {
        who: 'AccountId32',
        regionId: 'PalletBrokerRegionId',
        price: 'u128',
        duration: 'u32',
      },
      Renewable: {
        core: 'u16',
        price: 'u128',
        begin: 'u32',
        workload: 'Vec<PalletBrokerScheduleItem>',
      },
      Renewed: {
        who: 'AccountId32',
        price: 'u128',
        oldCore: 'u16',
        core: 'u16',
        begin: 'u32',
        duration: 'u32',
        workload: 'Vec<PalletBrokerScheduleItem>',
      },
      Transferred: {
        regionId: 'PalletBrokerRegionId',
        duration: 'u32',
        oldOwner: 'Option<AccountId32>',
        owner: 'Option<AccountId32>',
      },
      Partitioned: {
        oldRegionId: 'PalletBrokerRegionId',
        newRegionIds: '(PalletBrokerRegionId,PalletBrokerRegionId)',
      },
      Interlaced: {
        oldRegionId: 'PalletBrokerRegionId',
        newRegionIds: '(PalletBrokerRegionId,PalletBrokerRegionId)',
      },
      Assigned: {
        regionId: 'PalletBrokerRegionId',
        duration: 'u32',
        task: 'u32',
      },
      AssignmentRemoved: {
        regionId: 'PalletBrokerRegionId',
      },
      Pooled: {
        regionId: 'PalletBrokerRegionId',
        duration: 'u32',
      },
      CoreCountRequested: {
        coreCount: 'u16',
      },
      CoreCountChanged: {
        coreCount: 'u16',
      },
      ReservationMade: {
        index: 'u32',
        workload: 'Vec<PalletBrokerScheduleItem>',
      },
      ReservationCancelled: {
        index: 'u32',
        workload: 'Vec<PalletBrokerScheduleItem>',
      },
      SaleInitialized: {
        saleStart: 'u32',
        leadinLength: 'u32',
        startPrice: 'u128',
        endPrice: 'u128',
        regionBegin: 'u32',
        regionEnd: 'u32',
        idealCoresSold: 'u16',
        coresOffered: 'u16',
      },
      Leased: {
        task: 'u32',
        until: 'u32',
      },
      LeaseRemoved: {
        task: 'u32',
      },
      LeaseEnding: {
        task: 'u32',
        when: 'u32',
      },
      SalesStarted: {
        price: 'u128',
        coreCount: 'u16',
      },
      RevenueClaimBegun: {
        region: 'PalletBrokerRegionId',
        maxTimeslices: 'u32',
      },
      RevenueClaimItem: {
        when: 'u32',
        amount: 'u128',
      },
      RevenueClaimPaid: {
        who: 'AccountId32',
        amount: 'u128',
        next: 'Option<PalletBrokerRegionId>',
      },
      CreditPurchased: {
        who: 'AccountId32',
        beneficiary: 'AccountId32',
        amount: 'u128',
      },
      RegionDropped: {
        regionId: 'PalletBrokerRegionId',
        duration: 'u32',
      },
      ContributionDropped: {
        regionId: 'PalletBrokerRegionId',
      },
      HistoryInitialized: {
        when: 'u32',
        privatePoolSize: 'u32',
        systemPoolSize: 'u32',
      },
      HistoryDropped: {
        when: 'u32',
        revenue: 'u128',
      },
      HistoryIgnored: {
        when: 'u32',
        revenue: 'u128',
      },
      ClaimsReady: {
        when: 'u32',
        systemPayout: 'u128',
        privatePayout: 'u128',
      },
      CoreAssigned: {
        core: 'u16',
        when: 'u32',
        assignment: 'Vec<(PalletBrokerCoretimeInterfaceCoreAssignment,u16)>',
      },
      PotentialRenewalDropped: {
        when: 'u32',
        core: 'u16',
      },
      AutoRenewalEnabled: {
        core: 'u16',
        task: 'u32',
      },
      AutoRenewalDisabled: {
        core: 'u16',
        task: 'u32',
      },
      AutoRenewalFailed: {
        core: 'u16',
        payer: 'Option<AccountId32>',
      },
      AutoRenewalLimitReached: 'Null'
    }
  },
  /**
   * Lookup535: pallet_parameters::pallet::Event<T>
   **/
  PalletParametersEvent: {
    _enum: {
      Updated: {
        key: 'KitchensinkRuntimeRuntimeParametersKey',
        oldValue: 'Option<KitchensinkRuntimeRuntimeParametersValue>',
        newValue: 'Option<KitchensinkRuntimeRuntimeParametersValue>'
      }
    }
  },
  /**
   * Lookup536: kitchensink_runtime::RuntimeParametersKey
   **/
  KitchensinkRuntimeRuntimeParametersKey: {
    _enum: {
      Storage: 'KitchensinkRuntimeDynamicParamsStorageParametersKey',
      Referenda: 'KitchensinkRuntimeDynamicParamsReferendaParametersKey'
    }
  },
  /**
   * Lookup537: kitchensink_runtime::dynamic_params::storage::ParametersKey
   **/
  KitchensinkRuntimeDynamicParamsStorageParametersKey: {
    _enum: ['BaseDeposit', 'ByteDeposit']
  },
  /**
   * Lookup538: kitchensink_runtime::dynamic_params::referenda::ParametersKey
   **/
  KitchensinkRuntimeDynamicParamsReferendaParametersKey: {
    _enum: ['Tracks', 'Origins']
  },
  /**
   * Lookup540: kitchensink_runtime::RuntimeParametersValue
   **/
  KitchensinkRuntimeRuntimeParametersValue: {
    _enum: {
      Storage: 'KitchensinkRuntimeDynamicParamsStorageParametersValue',
      Referenda: 'KitchensinkRuntimeDynamicParamsReferendaParametersValue'
    }
  },
  /**
   * Lookup541: kitchensink_runtime::dynamic_params::storage::ParametersValue
   **/
  KitchensinkRuntimeDynamicParamsStorageParametersValue: {
    _enum: {
      BaseDeposit: 'u128',
      ByteDeposit: 'u128'
    }
  },
  /**
   * Lookup542: kitchensink_runtime::dynamic_params::referenda::ParametersValue
   **/
  KitchensinkRuntimeDynamicParamsReferendaParametersValue: {
    _enum: {
      Tracks: 'Vec<PalletReferendaTrack>',
      Origins: 'Vec<(KitchensinkRuntimeOriginCaller,u16)>'
    }
  },
  /**
   * Lookup543: pallet_skip_feeless_payment::pallet::Event<T>
   **/
  PalletSkipFeelessPaymentEvent: {
    _enum: {
      FeeSkipped: {
        origin: 'KitchensinkRuntimeOriginCaller'
      }
    }
  },
  /**
   * Lookup544: pallet_asset_conversion_ops::pallet::Event<T>
   **/
  PalletAssetConversionOpsEvent: {
    _enum: {
      MigratedToNewAccount: {
        poolId: '(FrameSupportTokensFungibleUnionOfNativeOrWithId,FrameSupportTokensFungibleUnionOfNativeOrWithId)',
        priorAccount: 'AccountId32',
        newAccount: 'AccountId32'
      }
    }
  },
  /**
   * Lookup545: pallet_revive::pallet::Event<T>
   **/
  PalletReviveEvent: {
    _enum: {
      ContractEmitted: {
        contract: 'H160',
        data: 'Bytes',
        topics: 'Vec<H256>'
      }
    }
  },
  /**
   * Lookup546: pallet_delegated_staking::pallet::Event<T>
   **/
  PalletDelegatedStakingEvent: {
    _enum: {
      Delegated: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128',
      },
      Released: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128',
      },
      Slashed: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128',
      },
      MigratedDelegation: {
        agent: 'AccountId32',
        delegator: 'AccountId32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup547: pallet_asset_rewards::pallet::Event<T>
   **/
  PalletAssetRewardsEvent: {
    _enum: {
      Staked: {
        staker: 'AccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      Unstaked: {
        caller: 'AccountId32',
        staker: 'AccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      RewardsHarvested: {
        caller: 'AccountId32',
        staker: 'AccountId32',
        poolId: 'u32',
        amount: 'u128',
      },
      PoolCreated: {
        creator: 'AccountId32',
        poolId: 'u32',
        stakedAssetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rewardAssetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
        rewardRatePerBlock: 'u128',
        expiryBlock: 'u32',
        admin: 'AccountId32',
      },
      PoolRewardRateModified: {
        poolId: 'u32',
        newRewardRatePerBlock: 'u128',
      },
      PoolAdminModified: {
        poolId: 'u32',
        newAdmin: 'AccountId32',
      },
      PoolExpiryBlockModified: {
        poolId: 'u32',
        newExpiryBlock: 'u32',
      },
      PoolCleanedUp: {
        poolId: 'u32'
      }
    }
  },
  /**
   * Lookup548: pallet_assets_freezer::pallet::Event<T, I>
   **/
  PalletAssetsFreezerEvent: {
    _enum: {
      Frozen: {
        who: 'AccountId32',
        assetId: 'u32',
        amount: 'u128',
      },
      Thawed: {
        who: 'AccountId32',
        assetId: 'u32',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup549: pallet_meta_tx::pallet::Event<T>
   **/
  PalletMetaTxEvent: {
    _enum: {
      Dispatched: {
        result: 'Result<FrameSupportDispatchPostDispatchInfo, SpRuntimeDispatchErrorWithPostInfo>'
      }
    }
  },
  /**
   * Lookup550: frame_system::Phase
   **/
  FrameSystemPhase: {
    _enum: {
      ApplyExtrinsic: 'u32',
      Finalization: 'Null',
      Initialization: 'Null'
    }
  },
  /**
   * Lookup552: frame_system::LastRuntimeUpgradeInfo
   **/
  FrameSystemLastRuntimeUpgradeInfo: {
    specVersion: 'Compact<u32>',
    specName: 'Text'
  },
  /**
   * Lookup555: frame_system::CodeUpgradeAuthorization<T>
   **/
  FrameSystemCodeUpgradeAuthorization: {
    codeHash: 'H256',
    checkVersion: 'bool'
  },
  /**
   * Lookup556: frame_system::limits::BlockWeights
   **/
  FrameSystemLimitsBlockWeights: {
    baseBlock: 'SpWeightsWeightV2Weight',
    maxBlock: 'SpWeightsWeightV2Weight',
    perClass: 'FrameSupportDispatchPerDispatchClassWeightsPerClass'
  },
  /**
   * Lookup557: frame_support::dispatch::PerDispatchClass<frame_system::limits::WeightsPerClass>
   **/
  FrameSupportDispatchPerDispatchClassWeightsPerClass: {
    normal: 'FrameSystemLimitsWeightsPerClass',
    operational: 'FrameSystemLimitsWeightsPerClass',
    mandatory: 'FrameSystemLimitsWeightsPerClass'
  },
  /**
   * Lookup558: frame_system::limits::WeightsPerClass
   **/
  FrameSystemLimitsWeightsPerClass: {
    baseExtrinsic: 'SpWeightsWeightV2Weight',
    maxExtrinsic: 'Option<SpWeightsWeightV2Weight>',
    maxTotal: 'Option<SpWeightsWeightV2Weight>',
    reserved: 'Option<SpWeightsWeightV2Weight>'
  },
  /**
   * Lookup559: frame_system::limits::BlockLength
   **/
  FrameSystemLimitsBlockLength: {
    max: 'FrameSupportDispatchPerDispatchClassU32'
  },
  /**
   * Lookup560: frame_support::dispatch::PerDispatchClass<T>
   **/
  FrameSupportDispatchPerDispatchClassU32: {
    normal: 'u32',
    operational: 'u32',
    mandatory: 'u32'
  },
  /**
   * Lookup561: sp_weights::RuntimeDbWeight
   **/
  SpWeightsRuntimeDbWeight: {
    read: 'u64',
    write: 'u64'
  },
  /**
   * Lookup562: sp_version::RuntimeVersion
   **/
  SpVersionRuntimeVersion: {
    specName: 'Text',
    implName: 'Text',
    authoringVersion: 'u32',
    specVersion: 'u32',
    implVersion: 'u32',
    apis: 'Vec<([u8;8],u32)>',
    transactionVersion: 'u32',
    systemVersion: 'u8'
  },
  /**
   * Lookup566: frame_system::pallet::Error<T>
   **/
  FrameSystemError: {
    _enum: ['InvalidSpecName', 'SpecVersionNeedsToIncrease', 'FailedToExtractRuntimeVersion', 'NonDefaultComposite', 'NonZeroRefCount', 'CallFiltered', 'MultiBlockMigrationsOngoing', 'NothingAuthorized', 'Unauthorized']
  },
  /**
   * Lookup567: pallet_utility::pallet::Error<T>
   **/
  PalletUtilityError: {
    _enum: ['TooManyCalls']
  },
  /**
   * Lookup574: sp_consensus_babe::digests::PreDigest
   **/
  SpConsensusBabeDigestsPreDigest: {
    _enum: {
      __Unused0: 'Null',
      Primary: 'SpConsensusBabeDigestsPrimaryPreDigest',
      SecondaryPlain: 'SpConsensusBabeDigestsSecondaryPlainPreDigest',
      SecondaryVRF: 'SpConsensusBabeDigestsSecondaryVRFPreDigest'
    }
  },
  /**
   * Lookup575: sp_consensus_babe::digests::PrimaryPreDigest
   **/
  SpConsensusBabeDigestsPrimaryPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup576: sp_core::sr25519::vrf::VrfSignature
   **/
  SpCoreSr25519VrfVrfSignature: {
    preOutput: '[u8;32]',
    proof: '[u8;64]'
  },
  /**
   * Lookup577: sp_consensus_babe::digests::SecondaryPlainPreDigest
   **/
  SpConsensusBabeDigestsSecondaryPlainPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64'
  },
  /**
   * Lookup578: sp_consensus_babe::digests::SecondaryVRFPreDigest
   **/
  SpConsensusBabeDigestsSecondaryVRFPreDigest: {
    authorityIndex: 'u32',
    slot: 'u64',
    vrfSignature: 'SpCoreSr25519VrfVrfSignature'
  },
  /**
   * Lookup579: sp_consensus_babe::BabeEpochConfiguration
   **/
  SpConsensusBabeBabeEpochConfiguration: {
    c: '(u64,u64)',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup583: pallet_babe::pallet::Error<T>
   **/
  PalletBabeError: {
    _enum: ['InvalidEquivocationProof', 'InvalidKeyOwnershipProof', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup585: pallet_indices::pallet::Error<T>
   **/
  PalletIndicesError: {
    _enum: ['NotAssigned', 'NotOwner', 'InUse', 'NotTransfer', 'Permanent']
  },
  /**
   * Lookup587: pallet_balances::types::BalanceLock<Balance>
   **/
  PalletBalancesBalanceLock: {
    id: '[u8;8]',
    amount: 'u128',
    reasons: 'PalletBalancesReasons'
  },
  /**
   * Lookup588: pallet_balances::types::Reasons
   **/
  PalletBalancesReasons: {
    _enum: ['Fee', 'Misc', 'All']
  },
  /**
   * Lookup591: pallet_balances::types::ReserveData<ReserveIdentifier, Balance>
   **/
  PalletBalancesReserveData: {
    id: '[u8;8]',
    amount: 'u128'
  },
  /**
   * Lookup594: frame_support::traits::tokens::misc::IdAmount<kitchensink_runtime::RuntimeHoldReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountRuntimeHoldReason: {
    id: 'KitchensinkRuntimeRuntimeHoldReason',
    amount: 'u128'
  },
  /**
   * Lookup595: kitchensink_runtime::RuntimeHoldReason
   **/
  KitchensinkRuntimeRuntimeHoldReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      Staking: 'PalletStakingPalletHoldReason',
      __Unused12: 'Null',
      __Unused13: 'Null',
      Council: 'PalletCollectiveHoldReason',
      TechnicalCommittee: 'PalletCollectiveHoldReason',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      Contracts: 'PalletContractsHoldReason',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      Preimage: 'PalletPreimageHoldReason',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      Nis: 'PalletNisHoldReason',
      __Unused46: 'Null',
      __Unused47: 'Null',
      NftFractionalization: 'PalletNftFractionalizationHoldReason',
      __Unused49: 'Null',
      __Unused50: 'Null',
      TransactionStorage: 'PalletTransactionStorageHoldReason',
      __Unused52: 'Null',
      StateTrieMigration: 'PalletStateTrieMigrationHoldReason',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      AllianceMotion: 'PalletCollectiveHoldReason',
      __Unused61: 'Null',
      __Unused62: 'Null',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      SafeMode: 'PalletSafeModeHoldReason',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      Revive: 'PalletReviveHoldReason',
      __Unused81: 'Null',
      DelegatedStaking: 'PalletDelegatedStakingHoldReason',
      AssetRewards: 'PalletAssetRewardsHoldReason'
    }
  },
  /**
   * Lookup596: pallet_staking::pallet::pallet::HoldReason
   **/
  PalletStakingPalletHoldReason: {
    _enum: ['Staking']
  },
  /**
   * Lookup597: pallet_collective::pallet::HoldReason<I>
   **/
  PalletCollectiveHoldReason: {
    _enum: ['ProposalSubmission']
  },
  /**
   * Lookup599: pallet_contracts::pallet::HoldReason
   **/
  PalletContractsHoldReason: {
    _enum: ['CodeUploadDepositReserve', 'StorageDepositReserve']
  },
  /**
   * Lookup600: pallet_preimage::pallet::HoldReason
   **/
  PalletPreimageHoldReason: {
    _enum: ['Preimage']
  },
  /**
   * Lookup601: pallet_nis::pallet::HoldReason
   **/
  PalletNisHoldReason: {
    _enum: ['NftReceipt']
  },
  /**
   * Lookup602: pallet_nft_fractionalization::pallet::HoldReason
   **/
  PalletNftFractionalizationHoldReason: {
    _enum: ['Fractionalized']
  },
  /**
   * Lookup603: pallet_transaction_storage::pallet::HoldReason
   **/
  PalletTransactionStorageHoldReason: {
    _enum: ['StorageFeeHold']
  },
  /**
   * Lookup604: pallet_state_trie_migration::pallet::HoldReason
   **/
  PalletStateTrieMigrationHoldReason: {
    _enum: ['SlashForMigrate']
  },
  /**
   * Lookup606: pallet_safe_mode::pallet::HoldReason
   **/
  PalletSafeModeHoldReason: {
    _enum: ['EnterOrExtend']
  },
  /**
   * Lookup607: pallet_revive::pallet::HoldReason
   **/
  PalletReviveHoldReason: {
    _enum: ['CodeUploadDepositReserve', 'StorageDepositReserve', 'AddressMapping']
  },
  /**
   * Lookup608: pallet_delegated_staking::pallet::HoldReason
   **/
  PalletDelegatedStakingHoldReason: {
    _enum: ['StakingDelegation']
  },
  /**
   * Lookup609: pallet_asset_rewards::pallet::HoldReason
   **/
  PalletAssetRewardsHoldReason: {
    _enum: ['PoolCreation']
  },
  /**
   * Lookup612: frame_support::traits::tokens::misc::IdAmount<kitchensink_runtime::RuntimeFreezeReason, Balance>
   **/
  FrameSupportTokensMiscIdAmountRuntimeFreezeReason: {
    id: 'KitchensinkRuntimeRuntimeFreezeReason',
    amount: 'u128'
  },
  /**
   * Lookup613: kitchensink_runtime::RuntimeFreezeReason
   **/
  KitchensinkRuntimeRuntimeFreezeReason: {
    _enum: {
      __Unused0: 'Null',
      __Unused1: 'Null',
      __Unused2: 'Null',
      __Unused3: 'Null',
      __Unused4: 'Null',
      __Unused5: 'Null',
      __Unused6: 'Null',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      __Unused10: 'Null',
      __Unused11: 'Null',
      __Unused12: 'Null',
      __Unused13: 'Null',
      __Unused14: 'Null',
      __Unused15: 'Null',
      __Unused16: 'Null',
      __Unused17: 'Null',
      __Unused18: 'Null',
      __Unused19: 'Null',
      __Unused20: 'Null',
      __Unused21: 'Null',
      __Unused22: 'Null',
      __Unused23: 'Null',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      __Unused28: 'Null',
      __Unused29: 'Null',
      __Unused30: 'Null',
      __Unused31: 'Null',
      __Unused32: 'Null',
      __Unused33: 'Null',
      __Unused34: 'Null',
      __Unused35: 'Null',
      __Unused36: 'Null',
      __Unused37: 'Null',
      __Unused38: 'Null',
      __Unused39: 'Null',
      __Unused40: 'Null',
      __Unused41: 'Null',
      __Unused42: 'Null',
      __Unused43: 'Null',
      __Unused44: 'Null',
      __Unused45: 'Null',
      __Unused46: 'Null',
      __Unused47: 'Null',
      __Unused48: 'Null',
      __Unused49: 'Null',
      __Unused50: 'Null',
      __Unused51: 'Null',
      __Unused52: 'Null',
      __Unused53: 'Null',
      __Unused54: 'Null',
      __Unused55: 'Null',
      __Unused56: 'Null',
      __Unused57: 'Null',
      __Unused58: 'Null',
      __Unused59: 'Null',
      __Unused60: 'Null',
      __Unused61: 'Null',
      NominationPools: 'PalletNominationPoolsFreezeReason',
      __Unused63: 'Null',
      __Unused64: 'Null',
      __Unused65: 'Null',
      __Unused66: 'Null',
      __Unused67: 'Null',
      __Unused68: 'Null',
      __Unused69: 'Null',
      __Unused70: 'Null',
      __Unused71: 'Null',
      __Unused72: 'Null',
      __Unused73: 'Null',
      __Unused74: 'Null',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      __Unused79: 'Null',
      __Unused80: 'Null',
      __Unused81: 'Null',
      __Unused82: 'Null',
      AssetRewards: 'PalletAssetRewardsFreezeReason'
    }
  },
  /**
   * Lookup614: pallet_nomination_pools::pallet::FreezeReason
   **/
  PalletNominationPoolsFreezeReason: {
    _enum: ['PoolMinBalance']
  },
  /**
   * Lookup615: pallet_asset_rewards::pallet::FreezeReason
   **/
  PalletAssetRewardsFreezeReason: {
    _enum: ['Staked']
  },
  /**
   * Lookup617: pallet_balances::pallet::Error<T, I>
   **/
  PalletBalancesError: {
    _enum: ['VestingBalance', 'LiquidityRestrictions', 'InsufficientBalance', 'ExistentialDeposit', 'Expendability', 'ExistingVestingSchedule', 'DeadAccount', 'TooManyReserves', 'TooManyHolds', 'TooManyFreezes', 'IssuanceDeactivated', 'DeltaZero']
  },
  /**
   * Lookup618: pallet_transaction_payment::Releases
   **/
  PalletTransactionPaymentReleases: {
    _enum: ['V1Ancient', 'V2']
  },
  /**
   * Lookup619: pallet_election_provider_multi_phase::ReadySolution<AccountId, MaxWinners>
   **/
  PalletElectionProviderMultiPhaseReadySolution: {
    supports: 'Vec<(AccountId32,SpNposElectionsSupport)>',
    score: 'SpNposElectionsElectionScore',
    compute: 'PalletElectionProviderMultiPhaseElectionCompute'
  },
  /**
   * Lookup621: pallet_election_provider_multi_phase::RoundSnapshot<sp_core::crypto::AccountId32, VoterType>
   **/
  PalletElectionProviderMultiPhaseRoundSnapshot: {
    voters: 'Vec<(AccountId32,u64,Vec<AccountId32>)>',
    targets: 'Vec<AccountId32>'
  },
  /**
   * Lookup628: pallet_election_provider_multi_phase::signed::SignedSubmission<sp_core::crypto::AccountId32, Balance, kitchensink_runtime::NposSolution16>
   **/
  PalletElectionProviderMultiPhaseSignedSignedSubmission: {
    who: 'AccountId32',
    deposit: 'u128',
    rawSolution: 'PalletElectionProviderMultiPhaseRawSolution',
    callFee: 'u128'
  },
  /**
   * Lookup629: pallet_election_provider_multi_phase::pallet::Error<T>
   **/
  PalletElectionProviderMultiPhaseError: {
    _enum: ['PreDispatchEarlySubmission', 'PreDispatchWrongWinnerCount', 'PreDispatchWeakSubmission', 'SignedQueueFull', 'SignedCannotPayDeposit', 'SignedInvalidWitness', 'SignedTooMuchWeight', 'OcwCallWrongEra', 'MissingSnapshotMetadata', 'InvalidSubmissionIndex', 'CallNotAllowed', 'FallbackFailed', 'BoundNotMet', 'TooManyWinners', 'PreDispatchDifferentRound']
  },
  /**
   * Lookup630: pallet_staking::StakingLedger<T>
   **/
  PalletStakingStakingLedger: {
    stash: 'AccountId32',
    total: 'Compact<u128>',
    active: 'Compact<u128>',
    unlocking: 'Vec<PalletStakingUnlockChunk>',
    legacyClaimedRewards: 'Vec<u32>'
  },
  /**
   * Lookup632: pallet_staking::Nominations<T>
   **/
  PalletStakingNominations: {
    targets: 'Vec<AccountId32>',
    submittedIn: 'u32',
    suppressed: 'bool'
  },
  /**
   * Lookup633: pallet_staking::ActiveEraInfo
   **/
  PalletStakingActiveEraInfo: {
    index: 'u32',
    start: 'Option<u64>'
  },
  /**
   * Lookup636: sp_staking::Exposure<sp_core::crypto::AccountId32, Balance>
   **/
  SpStakingExposure: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    others: 'Vec<SpStakingIndividualExposure>'
  },
  /**
   * Lookup638: sp_staking::IndividualExposure<sp_core::crypto::AccountId32, Balance>
   **/
  SpStakingIndividualExposure: {
    who: 'AccountId32',
    value: 'Compact<u128>'
  },
  /**
   * Lookup639: sp_staking::PagedExposureMetadata<Balance>
   **/
  SpStakingPagedExposureMetadata: {
    total: 'Compact<u128>',
    own: 'Compact<u128>',
    nominatorCount: 'u32',
    pageCount: 'u32'
  },
  /**
   * Lookup641: sp_staking::ExposurePage<sp_core::crypto::AccountId32, Balance>
   **/
  SpStakingExposurePage: {
    pageTotal: 'Compact<u128>',
    others: 'Vec<SpStakingIndividualExposure>'
  },
  /**
   * Lookup642: pallet_staking::EraRewardPoints<sp_core::crypto::AccountId32>
   **/
  PalletStakingEraRewardPoints: {
    total: 'u32',
    individual: 'BTreeMap<AccountId32, u32>'
  },
  /**
   * Lookup647: pallet_staking::UnappliedSlash<sp_core::crypto::AccountId32, Balance>
   **/
  PalletStakingUnappliedSlash: {
    validator: 'AccountId32',
    own: 'u128',
    others: 'Vec<(AccountId32,u128)>',
    reporters: 'Vec<AccountId32>',
    payout: 'u128'
  },
  /**
   * Lookup649: pallet_staking::slashing::SlashingSpans
   **/
  PalletStakingSlashingSlashingSpans: {
    spanIndex: 'u32',
    lastStart: 'u32',
    lastNonzeroSlash: 'u32',
    prior: 'Vec<u32>'
  },
  /**
   * Lookup650: pallet_staking::slashing::SpanRecord<Balance>
   **/
  PalletStakingSlashingSpanRecord: {
    slashed: 'u128',
    paidOut: 'u128'
  },
  /**
   * Lookup651: pallet_staking::pallet::pallet::Error<T>
   **/
  PalletStakingPalletError: {
    _enum: ['NotController', 'NotStash', 'AlreadyBonded', 'AlreadyPaired', 'EmptyTargets', 'DuplicateIndex', 'InvalidSlashIndex', 'InsufficientBond', 'NoMoreChunks', 'NoUnlockChunk', 'FundedTarget', 'InvalidEraToReward', 'InvalidNumberOfNominations', 'NotSortedAndUnique', 'AlreadyClaimed', 'InvalidPage', 'IncorrectHistoryDepth', 'IncorrectSlashingSpans', 'BadState', 'TooManyTargets', 'BadTarget', 'CannotChillOther', 'TooManyNominators', 'TooManyValidators', 'CommissionTooLow', 'BoundNotMet', 'ControllerDeprecated', 'CannotRestoreLedger', 'RewardDestinationRestricted', 'NotEnoughFunds', 'VirtualStakerNotAllowed', 'CannotReapStash', 'AlreadyMigrated', 'Restricted']
  },
  /**
   * Lookup658: sp_core::crypto::KeyTypeId
   **/
  SpCoreCryptoKeyTypeId: '[u8;4]',
  /**
   * Lookup659: pallet_session::pallet::Error<T>
   **/
  PalletSessionError: {
    _enum: ['InvalidProof', 'NoAssociatedValidatorId', 'DuplicatedKey', 'NoKeys', 'NoAccount']
  },
  /**
   * Lookup665: pallet_democracy::types::ReferendumInfo<BlockNumber, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumInfo: {
    _enum: {
      Ongoing: 'PalletDemocracyReferendumStatus',
      Finished: {
        approved: 'bool',
        end: 'u32'
      }
    }
  },
  /**
   * Lookup666: pallet_democracy::types::ReferendumStatus<BlockNumber, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance>
   **/
  PalletDemocracyReferendumStatus: {
    end: 'u32',
    proposal: 'FrameSupportPreimagesBounded',
    threshold: 'PalletDemocracyVoteThreshold',
    delay: 'u32',
    tally: 'PalletDemocracyTally'
  },
  /**
   * Lookup667: pallet_democracy::types::Tally<Balance>
   **/
  PalletDemocracyTally: {
    ayes: 'u128',
    nays: 'u128',
    turnout: 'u128'
  },
  /**
   * Lookup668: pallet_democracy::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, MaxVotes>
   **/
  PalletDemocracyVoteVoting: {
    _enum: {
      Direct: {
        votes: 'Vec<(u32,PalletDemocracyVoteAccountVote)>',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock',
      },
      Delegating: {
        balance: 'u128',
        target: 'AccountId32',
        conviction: 'PalletDemocracyConviction',
        delegations: 'PalletDemocracyDelegations',
        prior: 'PalletDemocracyVotePriorLock'
      }
    }
  },
  /**
   * Lookup672: pallet_democracy::types::Delegations<Balance>
   **/
  PalletDemocracyDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup673: pallet_democracy::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletDemocracyVotePriorLock: '(u32,u128)',
  /**
   * Lookup676: pallet_democracy::pallet::Error<T>
   **/
  PalletDemocracyError: {
    _enum: ['ValueLow', 'ProposalMissing', 'AlreadyCanceled', 'DuplicateProposal', 'ProposalBlacklisted', 'NotSimpleMajority', 'InvalidHash', 'NoProposal', 'AlreadyVetoed', 'ReferendumInvalid', 'NoneWaiting', 'NotVoter', 'NoPermission', 'AlreadyDelegating', 'InsufficientFunds', 'NotDelegating', 'VotesExist', 'InstantNotAllowed', 'Nonsense', 'WrongUpperBound', 'MaxVotesReached', 'TooMany', 'VotingPeriodLow', 'PreimageNotExist']
  },
  /**
   * Lookup680: pallet_collective::Votes<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletCollectiveVotes: {
    index: 'u32',
    threshold: 'u32',
    ayes: 'Vec<AccountId32>',
    nays: 'Vec<AccountId32>',
    end: 'u32'
  },
  /**
   * Lookup681: pallet_collective::pallet::Error<T, I>
   **/
  PalletCollectiveError: {
    _enum: ['NotMember', 'DuplicateProposal', 'ProposalMissing', 'WrongIndex', 'DuplicateVote', 'AlreadyInitialized', 'TooEarly', 'TooManyProposals', 'WrongProposalWeight', 'WrongProposalLength', 'PrimeAccountNotMember', 'ProposalActive']
  },
  /**
   * Lookup685: pallet_elections_phragmen::SeatHolder<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenSeatHolder: {
    who: 'AccountId32',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup686: pallet_elections_phragmen::Voter<sp_core::crypto::AccountId32, Balance>
   **/
  PalletElectionsPhragmenVoter: {
    votes: 'Vec<AccountId32>',
    stake: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup687: pallet_elections_phragmen::pallet::Error<T>
   **/
  PalletElectionsPhragmenError: {
    _enum: ['UnableToVote', 'NoVotes', 'TooManyVotes', 'MaximumVotesExceeded', 'LowBalance', 'UnableToPayBond', 'MustBeVoter', 'DuplicatedCandidate', 'TooManyCandidates', 'MemberSubmit', 'RunnerUpSubmit', 'InsufficientCandidateFunds', 'NotMember', 'InvalidWitnessData', 'InvalidVoteCount', 'InvalidRenouncing', 'InvalidReplacement']
  },
  /**
   * Lookup689: pallet_membership::pallet::Error<T, I>
   **/
  PalletMembershipError: {
    _enum: ['AlreadyMember', 'NotMember', 'TooManyMembers']
  },
  /**
   * Lookup690: pallet_grandpa::StoredState<N>
   **/
  PalletGrandpaStoredState: {
    _enum: {
      Live: 'Null',
      PendingPause: {
        scheduledAt: 'u32',
        delay: 'u32',
      },
      Paused: 'Null',
      PendingResume: {
        scheduledAt: 'u32',
        delay: 'u32'
      }
    }
  },
  /**
   * Lookup691: pallet_grandpa::StoredPendingChange<N, Limit>
   **/
  PalletGrandpaStoredPendingChange: {
    scheduledAt: 'u32',
    delay: 'u32',
    nextAuthorities: 'Vec<(SpConsensusGrandpaAppPublic,u64)>',
    forced: 'Option<u32>'
  },
  /**
   * Lookup693: pallet_grandpa::pallet::Error<T>
   **/
  PalletGrandpaError: {
    _enum: ['PauseFailed', 'ResumeFailed', 'ChangePending', 'TooSoon', 'InvalidKeyOwnershipProof', 'InvalidEquivocationProof', 'DuplicateOffenceReport']
  },
  /**
   * Lookup694: pallet_treasury::Proposal<sp_core::crypto::AccountId32, Balance>
   **/
  PalletTreasuryProposal: {
    proposer: 'AccountId32',
    value: 'u128',
    beneficiary: 'AccountId32',
    bond: 'u128'
  },
  /**
   * Lookup696: pallet_treasury::SpendStatus<frame_support::traits::tokens::fungible::union_of::NativeOrWithId<AssetId>, AssetBalance, sp_core::crypto::AccountId32, BlockNumber, PaymentId>
   **/
  PalletTreasurySpendStatus: {
    assetKind: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
    amount: 'u128',
    beneficiary: 'AccountId32',
    validFrom: 'u32',
    expireAt: 'u32',
    status: 'PalletTreasuryPaymentState'
  },
  /**
   * Lookup697: pallet_treasury::PaymentState<Id>
   **/
  PalletTreasuryPaymentState: {
    _enum: {
      Pending: 'Null',
      Attempted: {
        id: 'Null',
      },
      Failed: 'Null'
    }
  },
  /**
   * Lookup698: frame_support::PalletId
   **/
  FrameSupportPalletId: '[u8;8]',
  /**
   * Lookup699: pallet_treasury::pallet::Error<T, I>
   **/
  PalletTreasuryError: {
    _enum: ['InvalidIndex', 'TooManyApprovals', 'InsufficientPermission', 'ProposalNotApproved', 'FailedToConvertBalance', 'SpendExpired', 'EarlyPayout', 'AlreadyAttempted', 'PayoutError', 'NotAttempted', 'Inconclusive']
  },
  /**
   * Lookup700: pallet_asset_rate::pallet::Error<T>
   **/
  PalletAssetRateError: {
    _enum: ['UnknownAssetKind', 'AlreadyExists', 'Overflow']
  },
  /**
   * Lookup702: pallet_contracts::wasm::CodeInfo<T>
   **/
  PalletContractsWasmCodeInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    determinism: 'PalletContractsWasmDeterminism',
    codeLen: 'u32'
  },
  /**
   * Lookup703: pallet_contracts::storage::ContractInfo<T>
   **/
  PalletContractsStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128',
    delegateDependencies: 'BTreeMap<H256, u128>'
  },
  /**
   * Lookup708: pallet_contracts::storage::DeletionQueueManager<T>
   **/
  PalletContractsStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup710: pallet_contracts::schedule::Schedule<T>
   **/
  PalletContractsSchedule: {
    limits: 'PalletContractsScheduleLimits',
    instructionWeights: 'PalletContractsScheduleInstructionWeights'
  },
  /**
   * Lookup711: pallet_contracts::schedule::Limits
   **/
  PalletContractsScheduleLimits: {
    eventTopics: 'u32',
    memoryPages: 'u32',
    subjectLen: 'u32',
    payloadLen: 'u32',
    runtimeMemory: 'u32',
    validatorRuntimeMemory: 'u32',
    eventRefTime: 'u64'
  },
  /**
   * Lookup712: pallet_contracts::schedule::InstructionWeights<T>
   **/
  PalletContractsScheduleInstructionWeights: {
    base: 'u32'
  },
  /**
   * Lookup713: pallet_contracts::Environment<T>
   **/
  PalletContractsEnvironment: {
    _alias: {
      hash_: 'hash'
    },
    accountId: 'PalletContractsEnvironmentTypeAccountId32',
    balance: 'PalletContractsEnvironmentTypeU128',
    hash_: 'PalletContractsEnvironmentTypeH256',
    hasher: 'PalletContractsEnvironmentTypeBlakeTwo256',
    timestamp: 'PalletContractsEnvironmentTypeU64',
    blockNumber: 'PalletContractsEnvironmentTypeU32'
  },
  /**
   * Lookup714: pallet_contracts::EnvironmentType<sp_core::crypto::AccountId32>
   **/
  PalletContractsEnvironmentTypeAccountId32: 'Null',
  /**
   * Lookup715: pallet_contracts::EnvironmentType<T>
   **/
  PalletContractsEnvironmentTypeU128: 'Null',
  /**
   * Lookup716: pallet_contracts::EnvironmentType<primitive_types::H256>
   **/
  PalletContractsEnvironmentTypeH256: 'Null',
  /**
   * Lookup717: pallet_contracts::EnvironmentType<sp_runtime::traits::BlakeTwo256>
   **/
  PalletContractsEnvironmentTypeBlakeTwo256: 'Null',
  /**
   * Lookup718: pallet_contracts::EnvironmentType<T>
   **/
  PalletContractsEnvironmentTypeU64: 'Null',
  /**
   * Lookup719: pallet_contracts::EnvironmentType<T>
   **/
  PalletContractsEnvironmentTypeU32: 'Null',
  /**
   * Lookup721: pallet_contracts::pallet::Error<T>
   **/
  PalletContractsError: {
    _enum: ['InvalidSchedule', 'InvalidCallFlags', 'OutOfGas', 'OutputBufferTooSmall', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeTooLarge', 'CodeNotFound', 'CodeInfoNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'RandomSubjectTooLong', 'TooManyTopics', 'NoChainExtension', 'XCMDecodeFailed', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'StateChangeDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'Indeterministic', 'MigrationInProgress', 'NoMigrationPerformed', 'MaxDelegateDependenciesReached', 'DelegateDependencyNotFound', 'DelegateDependencyAlreadyExists', 'CannotAddSelfAsDelegateDependency', 'OutOfTransientStorage']
  },
  /**
   * Lookup722: pallet_sudo::pallet::Error<T>
   **/
  PalletSudoError: {
    _enum: ['RequireSudo']
  },
  /**
   * Lookup725: pallet_im_online::pallet::Error<T>
   **/
  PalletImOnlineError: {
    _enum: ['InvalidKey', 'DuplicatedHeartbeat']
  },
  /**
   * Lookup728: sp_staking::offence::OffenceDetails<sp_core::crypto::AccountId32, Offender>
   **/
  SpStakingOffenceOffenceDetails: {
    offender: '(AccountId32,Null)',
    reporters: 'Vec<AccountId32>'
  },
  /**
   * Lookup732: pallet_identity::types::Registration<Balance, MaxJudgements, pallet_identity::legacy::IdentityInfo<FieldLimit>>
   **/
  PalletIdentityRegistration: {
    judgements: 'Vec<(u32,PalletIdentityJudgement)>',
    deposit: 'u128',
    info: 'PalletIdentityLegacyIdentityInfo'
  },
  /**
   * Lookup740: pallet_identity::types::RegistrarInfo<Balance, sp_core::crypto::AccountId32, IdField>
   **/
  PalletIdentityRegistrarInfo: {
    account: 'AccountId32',
    fee: 'u128',
    fields: 'u64'
  },
  /**
   * Lookup743: pallet_identity::types::AuthorityProperties<sp_core::crypto::AccountId32>
   **/
  PalletIdentityAuthorityProperties: {
    accountId: 'AccountId32',
    allocation: 'u32'
  },
  /**
   * Lookup744: pallet_identity::types::UsernameInformation<sp_core::crypto::AccountId32, Balance>
   **/
  PalletIdentityUsernameInformation: {
    owner: 'AccountId32',
    provider: 'PalletIdentityProvider'
  },
  /**
   * Lookup745: pallet_identity::types::Provider<Balance>
   **/
  PalletIdentityProvider: {
    _enum: {
      Allocation: 'Null',
      AuthorityDeposit: 'u128',
      System: 'Null'
    }
  },
  /**
   * Lookup747: pallet_identity::pallet::Error<T>
   **/
  PalletIdentityError: {
    _enum: ['TooManySubAccounts', 'NotFound', 'NotNamed', 'EmptyIndex', 'FeeChanged', 'NoIdentity', 'StickyJudgement', 'JudgementGiven', 'InvalidJudgement', 'InvalidIndex', 'InvalidTarget', 'TooManyRegistrars', 'AlreadyClaimed', 'NotSub', 'NotOwned', 'JudgementForDifferentIdentity', 'JudgementPaymentFailed', 'InvalidSuffix', 'NotUsernameAuthority', 'NoAllocation', 'InvalidSignature', 'RequiresSignature', 'InvalidUsername', 'UsernameTaken', 'NoUsername', 'NotExpired', 'TooEarly', 'NotUnbinding', 'AlreadyUnbinding', 'InsufficientPrivileges']
  },
  /**
   * Lookup748: pallet_society::MemberRecord
   **/
  PalletSocietyMemberRecord: {
    rank: 'u32',
    strikes: 'u32',
    vouching: 'Option<PalletSocietyVouchingStatus>',
    index: 'u32'
  },
  /**
   * Lookup750: pallet_society::VouchingStatus
   **/
  PalletSocietyVouchingStatus: {
    _enum: ['Vouching', 'Banned']
  },
  /**
   * Lookup751: pallet_society::PayoutRecord<Balance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletSocietyPayoutRecord: {
    paid: 'u128',
    payouts: 'Vec<(u32,u128)>'
  },
  /**
   * Lookup756: pallet_society::Bid<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBid: {
    who: 'AccountId32',
    kind: 'PalletSocietyBidKind',
    value: 'u128'
  },
  /**
   * Lookup757: pallet_society::BidKind<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyBidKind: {
    _enum: {
      Deposit: 'u128',
      Vouch: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup759: pallet_society::Candidacy<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyCandidacy: {
    round: 'u32',
    kind: 'PalletSocietyBidKind',
    bid: 'u128',
    tally: 'PalletSocietyTally',
    skepticStruck: 'bool'
  },
  /**
   * Lookup760: pallet_society::Tally
   **/
  PalletSocietyTally: {
    approvals: 'u32',
    rejections: 'u32'
  },
  /**
   * Lookup762: pallet_society::Vote
   **/
  PalletSocietyVote: {
    approve: 'bool',
    weight: 'u32'
  },
  /**
   * Lookup764: pallet_society::IntakeRecord<sp_core::crypto::AccountId32, Balance>
   **/
  PalletSocietyIntakeRecord: {
    who: 'AccountId32',
    bid: 'u128',
    round: 'u32'
  },
  /**
   * Lookup766: pallet_society::pallet::Error<T, I>
   **/
  PalletSocietyError: {
    _enum: ['NotMember', 'AlreadyMember', 'Suspended', 'NotSuspended', 'NoPayout', 'AlreadyFounded', 'InsufficientPot', 'AlreadyVouching', 'NotVouchingOnBidder', 'Head', 'Founder', 'AlreadyBid', 'AlreadyCandidate', 'NotCandidate', 'MaxMembers', 'NotFounder', 'NotHead', 'NotApproved', 'NotRejected', 'Approved', 'Rejected', 'InProgress', 'TooEarly', 'Voted', 'Expired', 'NotBidder', 'NoDefender', 'NotGroup', 'AlreadyElevated', 'AlreadyPunished', 'InsufficientFunds', 'NoVotes']
  },
  /**
   * Lookup767: pallet_recovery::RecoveryConfig<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryRecoveryConfig: {
    delayPeriod: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>',
    threshold: 'u16'
  },
  /**
   * Lookup769: pallet_recovery::ActiveRecovery<BlockNumber, Balance, bounded_collections::bounded_vec::BoundedVec<sp_core::crypto::AccountId32, S>>
   **/
  PalletRecoveryActiveRecovery: {
    created: 'u32',
    deposit: 'u128',
    friends: 'Vec<AccountId32>'
  },
  /**
   * Lookup770: pallet_recovery::pallet::Error<T>
   **/
  PalletRecoveryError: {
    _enum: ['NotAllowed', 'ZeroThreshold', 'NotEnoughFriends', 'MaxFriends', 'NotSorted', 'NotRecoverable', 'AlreadyRecoverable', 'AlreadyStarted', 'NotStarted', 'NotFriend', 'DelayPeriod', 'AlreadyVouched', 'Threshold', 'StillActive', 'AlreadyProxy', 'BadState']
  },
  /**
   * Lookup773: pallet_vesting::Releases
   **/
  PalletVestingReleases: {
    _enum: ['V0', 'V1']
  },
  /**
   * Lookup774: pallet_vesting::pallet::Error<T>
   **/
  PalletVestingError: {
    _enum: ['NotVesting', 'AtMaxVestingSchedules', 'AmountLow', 'ScheduleIndexOutOfBounds', 'InvalidScheduleParams']
  },
  /**
   * Lookup777: pallet_scheduler::Scheduled<Name, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, BlockNumber, kitchensink_runtime::OriginCaller, sp_core::crypto::AccountId32>
   **/
  PalletSchedulerScheduled: {
    maybeId: 'Option<[u8;32]>',
    priority: 'u8',
    call: 'FrameSupportPreimagesBounded',
    maybePeriodic: 'Option<(u32,u32)>',
    origin: 'KitchensinkRuntimeOriginCaller'
  },
  /**
   * Lookup779: pallet_scheduler::RetryConfig<Period>
   **/
  PalletSchedulerRetryConfig: {
    totalRetries: 'u8',
    remaining: 'u8',
    period: 'u32'
  },
  /**
   * Lookup780: pallet_scheduler::pallet::Error<T>
   **/
  PalletSchedulerError: {
    _enum: ['FailedToSchedule', 'NotFound', 'TargetBlockNumberInPast', 'RescheduleNoChange', 'Named']
  },
  /**
   * Lookup781: pallet_glutton::pallet::Error<T>
   **/
  PalletGluttonError: {
    _enum: ['AlreadyInitialized', 'InsaneLimit']
  },
  /**
   * Lookup782: pallet_preimage::OldRequestStatus<sp_core::crypto::AccountId32, Balance>
   **/
  PalletPreimageOldRequestStatus: {
    _enum: {
      Unrequested: {
        deposit: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        deposit: 'Option<(AccountId32,u128)>',
        count: 'u32',
        len: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup784: pallet_preimage::RequestStatus<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::HoldConsideration<A, F, R, D, Fp>>
   **/
  PalletPreimageRequestStatus: {
    _enum: {
      Unrequested: {
        ticket: '(AccountId32,u128)',
        len: 'u32',
      },
      Requested: {
        maybeTicket: 'Option<(AccountId32,u128)>',
        count: 'u32',
        maybeLen: 'Option<u32>'
      }
    }
  },
  /**
   * Lookup789: pallet_preimage::pallet::Error<T>
   **/
  PalletPreimageError: {
    _enum: ['TooBig', 'AlreadyNoted', 'NotAuthorized', 'NotNoted', 'Requested', 'NotRequested', 'TooMany', 'TooFew']
  },
  /**
   * Lookup792: pallet_proxy::ProxyDefinition<sp_core::crypto::AccountId32, kitchensink_runtime::ProxyType, BlockNumber>
   **/
  PalletProxyProxyDefinition: {
    delegate: 'AccountId32',
    proxyType: 'KitchensinkRuntimeProxyType',
    delay: 'u32'
  },
  /**
   * Lookup796: pallet_proxy::Announcement<sp_core::crypto::AccountId32, primitive_types::H256, BlockNumber>
   **/
  PalletProxyAnnouncement: {
    real: 'AccountId32',
    callHash: 'H256',
    height: 'u32'
  },
  /**
   * Lookup798: pallet_proxy::pallet::Error<T>
   **/
  PalletProxyError: {
    _enum: ['TooMany', 'NotFound', 'NotProxy', 'Unproxyable', 'Duplicate', 'NoPermission', 'Unannounced', 'NoSelfProxy']
  },
  /**
   * Lookup800: pallet_multisig::Multisig<BlockNumber, Balance, sp_core::crypto::AccountId32, MaxApprovals>
   **/
  PalletMultisigMultisig: {
    when: 'PalletMultisigTimepoint',
    deposit: 'u128',
    depositor: 'AccountId32',
    approvals: 'Vec<AccountId32>'
  },
  /**
   * Lookup801: pallet_multisig::pallet::Error<T>
   **/
  PalletMultisigError: {
    _enum: ['MinimumThreshold', 'AlreadyApproved', 'NoApprovalsNeeded', 'TooFewSignatories', 'TooManySignatories', 'SignatoriesOutOfOrder', 'SenderInSignatories', 'NotFound', 'NotOwner', 'NoTimepoint', 'WrongTimepoint', 'UnexpectedTimepoint', 'MaxWeightTooLow', 'AlreadyStored']
  },
  /**
   * Lookup802: pallet_bounties::Bounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletBountiesBounty: {
    proposer: 'AccountId32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    bond: 'u128',
    status: 'PalletBountiesBountyStatus'
  },
  /**
   * Lookup803: pallet_bounties::BountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletBountiesBountyStatus: {
    _enum: {
      Proposed: 'Null',
      Approved: 'Null',
      Funded: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
        updateDue: 'u32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32',
      },
      ApprovedWithCurator: {
        curator: 'AccountId32'
      }
    }
  },
  /**
   * Lookup805: pallet_bounties::pallet::Error<T, I>
   **/
  PalletBountiesError: {
    _enum: ['InsufficientProposersBalance', 'InvalidIndex', 'ReasonTooBig', 'UnexpectedStatus', 'RequireCurator', 'InvalidValue', 'InvalidFee', 'PendingPayout', 'Premature', 'HasActiveChildBounty', 'TooManyQueued']
  },
  /**
   * Lookup806: pallet_tips::OpenTip<sp_core::crypto::AccountId32, Balance, BlockNumber, primitive_types::H256>
   **/
  PalletTipsOpenTip: {
    reason: 'H256',
    who: 'AccountId32',
    finder: 'AccountId32',
    deposit: 'u128',
    closes: 'Option<u32>',
    tips: 'Vec<(AccountId32,u128)>',
    findersFee: 'bool'
  },
  /**
   * Lookup807: pallet_tips::pallet::Error<T, I>
   **/
  PalletTipsError: {
    _enum: ['ReasonTooBig', 'AlreadyKnown', 'UnknownTip', 'MaxTipAmountExceeded', 'NotFinder', 'StillOpen', 'Premature']
  },
  /**
   * Lookup808: pallet_assets::types::AssetDetails<Balance, sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletAssetsAssetDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    supply: 'u128',
    deposit: 'u128',
    minBalance: 'u128',
    isSufficient: 'bool',
    accounts: 'u32',
    sufficients: 'u32',
    approvals: 'u32',
    status: 'PalletAssetsAssetStatus'
  },
  /**
   * Lookup809: pallet_assets::types::AssetStatus
   **/
  PalletAssetsAssetStatus: {
    _enum: ['Live', 'Frozen', 'Destroying']
  },
  /**
   * Lookup810: pallet_assets::types::AssetAccount<Balance, DepositBalance, Extra, sp_core::crypto::AccountId32>
   **/
  PalletAssetsAssetAccount: {
    balance: 'u128',
    status: 'PalletAssetsAccountStatus',
    reason: 'PalletAssetsExistenceReason',
    extra: 'Null'
  },
  /**
   * Lookup811: pallet_assets::types::AccountStatus
   **/
  PalletAssetsAccountStatus: {
    _enum: ['Liquid', 'Frozen', 'Blocked']
  },
  /**
   * Lookup812: pallet_assets::types::ExistenceReason<Balance, sp_core::crypto::AccountId32>
   **/
  PalletAssetsExistenceReason: {
    _enum: {
      Consumer: 'Null',
      Sufficient: 'Null',
      DepositHeld: 'u128',
      DepositRefunded: 'Null',
      DepositFrom: '(AccountId32,u128)'
    }
  },
  /**
   * Lookup814: pallet_assets::types::Approval<Balance, DepositBalance>
   **/
  PalletAssetsApproval: {
    amount: 'u128',
    deposit: 'u128'
  },
  /**
   * Lookup815: pallet_assets::types::AssetMetadata<DepositBalance, bounded_collections::bounded_vec::BoundedVec<T, S>>
   **/
  PalletAssetsAssetMetadata: {
    deposit: 'u128',
    name: 'Bytes',
    symbol: 'Bytes',
    decimals: 'u8',
    isFrozen: 'bool'
  },
  /**
   * Lookup817: pallet_assets::pallet::Error<T, I>
   **/
  PalletAssetsError: {
    _enum: ['BalanceLow', 'NoAccount', 'NoPermission', 'Unknown', 'Frozen', 'InUse', 'BadWitness', 'MinBalanceZero', 'UnavailableConsumer', 'BadMetadata', 'Unapproved', 'WouldDie', 'AlreadyExists', 'NoDeposit', 'WouldBurn', 'LiveAsset', 'AssetNotLive', 'IncorrectStatus', 'NotFrozen', 'CallbackFailed', 'BadAssetId', 'ContainsFreezes', 'ContainsHolds']
  },
  /**
   * Lookup821: pallet_beefy::pallet::Error<T>
   **/
  PalletBeefyError: {
    _enum: ['InvalidKeyOwnershipProof', 'InvalidDoubleVotingProof', 'InvalidForkVotingProof', 'InvalidFutureBlockVotingProof', 'InvalidEquivocationProofSession', 'DuplicateOffenceReport', 'InvalidConfiguration']
  },
  /**
   * Lookup822: sp_consensus_beefy::mmr::BeefyAuthoritySet<primitive_types::H256>
   **/
  SpConsensusBeefyMmrBeefyAuthoritySet: {
    id: 'u64',
    len: 'u32',
    keysetCommitment: 'H256'
  },
  /**
   * Lookup823: pallet_lottery::LotteryConfig<BlockNumber, Balance>
   **/
  PalletLotteryLotteryConfig: {
    price: 'u128',
    start: 'u32',
    length: 'u32',
    delay: 'u32',
    repeat: 'bool'
  },
  /**
   * Lookup827: pallet_lottery::pallet::Error<T>
   **/
  PalletLotteryError: {
    _enum: ['NotConfigured', 'InProgress', 'AlreadyEnded', 'InvalidCall', 'AlreadyParticipating', 'TooManyCalls', 'EncodingFailed']
  },
  /**
   * Lookup830: pallet_nis::pallet::Bid<Balance, sp_core::crypto::AccountId32>
   **/
  PalletNisBid: {
    amount: 'u128',
    who: 'AccountId32'
  },
  /**
   * Lookup832: pallet_nis::pallet::SummaryRecord<BlockNumber, Balance>
   **/
  PalletNisSummaryRecord: {
    proportionOwed: 'Perquintill',
    index: 'u32',
    thawed: 'Perquintill',
    lastPeriod: 'u32',
    receiptsOnHold: 'u128'
  },
  /**
   * Lookup833: pallet_nis::pallet::ReceiptRecord<sp_core::crypto::AccountId32, BlockNumber, Balance>
   **/
  PalletNisReceiptRecord: {
    proportion: 'Perquintill',
    owner: 'Option<(AccountId32,u128)>',
    expiry: 'u32'
  },
  /**
   * Lookup835: pallet_nis::pallet::Error<T>
   **/
  PalletNisError: {
    _enum: ['DurationTooSmall', 'DurationTooBig', 'AmountTooSmall', 'BidTooLow', 'UnknownReceipt', 'NotOwner', 'NotExpired', 'UnknownBid', 'PortionTooBig', 'Unfunded', 'AlreadyFunded', 'Throttled', 'MakesDust', 'AlreadyCommunal', 'AlreadyPrivate']
  },
  /**
   * Lookup836: pallet_uniques::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesCollectionDetails: {
    owner: 'AccountId32',
    issuer: 'AccountId32',
    admin: 'AccountId32',
    freezer: 'AccountId32',
    totalDeposit: 'u128',
    freeHolding: 'bool',
    items: 'u32',
    itemMetadatas: 'u32',
    attributes: 'u32',
    isFrozen: 'bool'
  },
  /**
   * Lookup838: pallet_uniques::types::ItemDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletUniquesItemDetails: {
    owner: 'AccountId32',
    approved: 'Option<AccountId32>',
    isFrozen: 'bool',
    deposit: 'u128'
  },
  /**
   * Lookup839: pallet_uniques::types::CollectionMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup840: pallet_uniques::types::ItemMetadata<DepositBalance, StringLimit>
   **/
  PalletUniquesItemMetadata: {
    deposit: 'u128',
    data: 'Bytes',
    isFrozen: 'bool'
  },
  /**
   * Lookup844: pallet_uniques::pallet::Error<T, I>
   **/
  PalletUniquesError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'WrongOwner', 'BadWitness', 'InUse', 'Frozen', 'WrongDelegate', 'NoDelegate', 'Unapproved', 'Unaccepted', 'Locked', 'MaxSupplyReached', 'MaxSupplyAlreadySet', 'MaxSupplyTooSmall', 'UnknownItem', 'NotForSale', 'BidTooLow']
  },
  /**
   * Lookup845: pallet_nfts::types::CollectionDetails<sp_core::crypto::AccountId32, DepositBalance>
   **/
  PalletNftsCollectionDetails: {
    owner: 'AccountId32',
    ownerDeposit: 'u128',
    items: 'u32',
    itemMetadatas: 'u32',
    itemConfigs: 'u32',
    attributes: 'u32'
  },
  /**
   * Lookup847: pallet_nfts::types::CollectionRole
   **/
  PalletNftsCollectionRole: {
    _enum: ['__Unused0', 'Issuer', 'Freezer', '__Unused3', 'Admin']
  },
  /**
   * Lookup848: pallet_nfts::types::ItemDetails<sp_core::crypto::AccountId32, pallet_nfts::types::ItemDeposit<DepositBalance, sp_core::crypto::AccountId32>, bounded_collections::bounded_btree_map::BoundedBTreeMap<sp_core::crypto::AccountId32, Option<T>, S>>
   **/
  PalletNftsItemDetails: {
    owner: 'AccountId32',
    approvals: 'BTreeMap<AccountId32, Option<u32>>',
    deposit: 'PalletNftsItemDeposit'
  },
  /**
   * Lookup849: pallet_nfts::types::ItemDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PalletNftsItemDeposit: {
    account: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup854: pallet_nfts::types::CollectionMetadata<Deposit, StringLimit>
   **/
  PalletNftsCollectionMetadata: {
    deposit: 'u128',
    data: 'Bytes'
  },
  /**
   * Lookup855: pallet_nfts::types::ItemMetadata<pallet_nfts::types::ItemMetadataDeposit<DepositBalance, sp_core::crypto::AccountId32>, StringLimit>
   **/
  PalletNftsItemMetadata: {
    deposit: 'PalletNftsItemMetadataDeposit',
    data: 'Bytes'
  },
  /**
   * Lookup856: pallet_nfts::types::ItemMetadataDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PalletNftsItemMetadataDeposit: {
    account: 'Option<AccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup859: pallet_nfts::types::AttributeDeposit<DepositBalance, sp_core::crypto::AccountId32>
   **/
  PalletNftsAttributeDeposit: {
    account: 'Option<AccountId32>',
    amount: 'u128'
  },
  /**
   * Lookup862: pallet_nfts::types::PendingSwap<CollectionId, ItemId, pallet_nfts::types::PriceWithDirection<Amount>, Deadline>
   **/
  PalletNftsPendingSwap: {
    desiredCollection: 'u32',
    desiredItem: 'Option<u32>',
    price: 'Option<PalletNftsPriceWithDirection>',
    deadline: 'u32'
  },
  /**
   * Lookup864: pallet_nfts::types::PalletFeature
   **/
  PalletNftsPalletFeature: {
    _enum: ['__Unused0', 'Trading', 'Attributes', '__Unused3', 'Approvals', '__Unused5', '__Unused6', '__Unused7', 'Swaps']
  },
  /**
   * Lookup865: pallet_nfts::pallet::Error<T, I>
   **/
  PalletNftsError: {
    _enum: ['NoPermission', 'UnknownCollection', 'AlreadyExists', 'ApprovalExpired', 'WrongOwner', 'BadWitness', 'CollectionIdInUse', 'ItemsNonTransferable', 'NotDelegate', 'WrongDelegate', 'Unapproved', 'Unaccepted', 'ItemLocked', 'LockedItemAttributes', 'LockedCollectionAttributes', 'LockedItemMetadata', 'LockedCollectionMetadata', 'MaxSupplyReached', 'MaxSupplyLocked', 'MaxSupplyTooSmall', 'UnknownItem', 'UnknownSwap', 'MetadataNotFound', 'AttributeNotFound', 'NotForSale', 'BidTooLow', 'ReachedApprovalLimit', 'DeadlineExpired', 'WrongDuration', 'MethodDisabled', 'WrongSetting', 'InconsistentItemConfig', 'NoConfig', 'RolesNotCleared', 'MintNotStarted', 'MintEnded', 'AlreadyClaimed', 'IncorrectData', 'WrongOrigin', 'WrongSignature', 'IncorrectMetadata', 'MaxAttributesLimitReached', 'WrongNamespace', 'CollectionNotEmpty', 'WitnessRequired']
  },
  /**
   * Lookup866: pallet_nft_fractionalization::types::Details<AssetId, Fractions, Deposit, sp_core::crypto::AccountId32>
   **/
  PalletNftFractionalizationDetails: {
    asset: 'u32',
    fractions: 'u128',
    deposit: 'u128',
    assetCreator: 'AccountId32'
  },
  /**
   * Lookup867: pallet_nft_fractionalization::pallet::Error<T>
   **/
  PalletNftFractionalizationError: {
    _enum: ['IncorrectAssetId', 'NoPermission', 'NftNotFound', 'NftNotFractionalized']
  },
  /**
   * Lookup868: pallet_salary::StatusType<CycleIndex, BlockNumber, Balance>
   **/
  PalletSalaryStatusType: {
    cycleIndex: 'u32',
    cycleStart: 'u32',
    budget: 'u128',
    totalRegistrations: 'u128',
    totalUnregisteredPaid: 'u128'
  },
  /**
   * Lookup869: pallet_salary::ClaimantStatus<CycleIndex, Balance, Id>
   **/
  PalletSalaryClaimantStatus: {
    lastActive: 'u32',
    status: 'PalletSalaryClaimState'
  },
  /**
   * Lookup870: pallet_salary::ClaimState<Balance, Id>
   **/
  PalletSalaryClaimState: {
    _enum: {
      Nothing: 'Null',
      Registered: 'u128',
      Attempted: {
        registered: 'Option<u128>',
        id: 'Null',
        amount: 'u128'
      }
    }
  },
  /**
   * Lookup871: pallet_salary::pallet::Error<T, I>
   **/
  PalletSalaryError: {
    _enum: ['AlreadyStarted', 'NotMember', 'AlreadyInducted', 'NotInducted', 'NoClaim', 'ClaimZero', 'TooLate', 'TooEarly', 'NotYet', 'NotStarted', 'Bankrupt', 'PayError', 'Inconclusive', 'NotCurrent']
  },
  /**
   * Lookup872: pallet_core_fellowship::MemberStatus<BlockNumber>
   **/
  PalletCoreFellowshipMemberStatus: {
    isActive: 'bool',
    lastPromotion: 'u32',
    lastProof: 'u32'
  },
  /**
   * Lookup874: pallet_core_fellowship::pallet::Error<T, I>
   **/
  PalletCoreFellowshipError: {
    _enum: ['Unranked', 'Ranked', 'UnexpectedRank', 'InvalidRank', 'NoPermission', 'NothingDoing', 'AlreadyInducted', 'NotTracked', 'TooSoon']
  },
  /**
   * Lookup876: pallet_transaction_storage::TransactionInfo
   **/
  PalletTransactionStorageTransactionInfo: {
    _alias: {
      size_: 'size'
    },
    chunkRoot: 'H256',
    contentHash: 'H256',
    size_: 'u32',
    blockChunks: 'u32'
  },
  /**
   * Lookup878: pallet_transaction_storage::pallet::Error<T>
   **/
  PalletTransactionStorageError: {
    _enum: ['NotConfigured', 'RenewedNotFound', 'EmptyTransaction', 'UnexpectedProof', 'InvalidProof', 'MissingProof', 'MissingStateData', 'DoubleCheck', 'ProofNotChecked', 'TransactionTooLarge', 'TooManyTransactions', 'BadContext']
  },
  /**
   * Lookup879: pallet_bags_list::list::Node<T, I>
   **/
  PalletBagsListListNode: {
    id: 'AccountId32',
    prev: 'Option<AccountId32>',
    next: 'Option<AccountId32>',
    bagUpper: 'u64',
    score: 'u64'
  },
  /**
   * Lookup880: pallet_bags_list::list::Bag<T, I>
   **/
  PalletBagsListListBag: {
    head: 'Option<AccountId32>',
    tail: 'Option<AccountId32>'
  },
  /**
   * Lookup882: pallet_bags_list::pallet::Error<T, I>
   **/
  PalletBagsListError: {
    _enum: {
      List: 'PalletBagsListListListError'
    }
  },
  /**
   * Lookup883: pallet_bags_list::list::ListError
   **/
  PalletBagsListListListError: {
    _enum: ['Duplicate', 'NotHeavier', 'NotInSameBag', 'NodeNotFound']
  },
  /**
   * Lookup884: pallet_child_bounties::ChildBounty<sp_core::crypto::AccountId32, Balance, BlockNumber>
   **/
  PalletChildBountiesChildBounty: {
    parentBounty: 'u32',
    value: 'u128',
    fee: 'u128',
    curatorDeposit: 'u128',
    status: 'PalletChildBountiesChildBountyStatus'
  },
  /**
   * Lookup885: pallet_child_bounties::ChildBountyStatus<sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletChildBountiesChildBountyStatus: {
    _enum: {
      Added: 'Null',
      CuratorProposed: {
        curator: 'AccountId32',
      },
      Active: {
        curator: 'AccountId32',
      },
      PendingPayout: {
        curator: 'AccountId32',
        beneficiary: 'AccountId32',
        unlockAt: 'u32'
      }
    }
  },
  /**
   * Lookup886: pallet_child_bounties::pallet::Error<T>
   **/
  PalletChildBountiesError: {
    _enum: ['ParentBountyNotActive', 'InsufficientBountyBalance', 'TooManyChildBounties']
  },
  /**
   * Lookup887: pallet_referenda::types::ReferendumInfo<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoConvictionVotingTally: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusConvictionVotingTally',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup888: pallet_referenda::types::ReferendumStatus<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_conviction_voting::types::Tally<Votes, Total>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusConvictionVotingTally: {
    track: 'u16',
    origin: 'KitchensinkRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletConvictionVotingTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup889: pallet_referenda::types::Deposit<sp_core::crypto::AccountId32, Balance>
   **/
  PalletReferendaDeposit: {
    who: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup892: pallet_referenda::types::DecidingStatus<BlockNumber>
   **/
  PalletReferendaDecidingStatus: {
    since: 'u32',
    confirming: 'Option<u32>'
  },
  /**
   * Lookup898: pallet_referenda::types::TrackDetails<Balance, Moment, Name>
   **/
  PalletReferendaTrackDetails: {
    name: 'Text',
    maxDeciding: 'u32',
    decisionDeposit: 'u128',
    preparePeriod: 'u32',
    decisionPeriod: 'u32',
    confirmPeriod: 'u32',
    minEnactmentPeriod: 'u32',
    minApproval: 'PalletReferendaCurve',
    minSupport: 'PalletReferendaCurve'
  },
  /**
   * Lookup899: pallet_referenda::pallet::Error<T, I>
   **/
  PalletReferendaError: {
    _enum: ['NotOngoing', 'HasDeposit', 'BadTrack', 'Full', 'QueueEmpty', 'BadReferendum', 'NothingToDo', 'NoTrack', 'Unfinished', 'NoPermission', 'NoDeposit', 'BadStatus', 'PreimageNotExist', 'PreimageStoredWithDifferentLength']
  },
  /**
   * Lookup900: pallet_remark::pallet::Error<T>
   **/
  PalletRemarkError: {
    _enum: ['Empty', 'BadContext']
  },
  /**
   * Lookup902: pallet_conviction_voting::vote::Voting<Balance, sp_core::crypto::AccountId32, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteVoting: {
    _enum: {
      Casting: 'PalletConvictionVotingVoteCasting',
      Delegating: 'PalletConvictionVotingVoteDelegating'
    }
  },
  /**
   * Lookup903: pallet_conviction_voting::vote::Casting<Balance, BlockNumber, PollIndex, MaxVotes>
   **/
  PalletConvictionVotingVoteCasting: {
    votes: 'Vec<(u32,PalletConvictionVotingVoteAccountVote)>',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup907: pallet_conviction_voting::types::Delegations<Balance>
   **/
  PalletConvictionVotingDelegations: {
    votes: 'u128',
    capital: 'u128'
  },
  /**
   * Lookup908: pallet_conviction_voting::vote::PriorLock<BlockNumber, Balance>
   **/
  PalletConvictionVotingVotePriorLock: '(u32,u128)',
  /**
   * Lookup909: pallet_conviction_voting::vote::Delegating<Balance, sp_core::crypto::AccountId32, BlockNumber>
   **/
  PalletConvictionVotingVoteDelegating: {
    balance: 'u128',
    target: 'AccountId32',
    conviction: 'PalletConvictionVotingConviction',
    delegations: 'PalletConvictionVotingDelegations',
    prior: 'PalletConvictionVotingVotePriorLock'
  },
  /**
   * Lookup913: pallet_conviction_voting::pallet::Error<T, I>
   **/
  PalletConvictionVotingError: {
    _enum: ['NotOngoing', 'NotVoter', 'NoPermission', 'NoPermissionYet', 'AlreadyDelegating', 'AlreadyVoting', 'InsufficientFunds', 'NotDelegating', 'Nonsense', 'MaxVotesReached', 'ClassNeeded', 'BadClass']
  },
  /**
   * Lookup914: pallet_whitelist::pallet::Error<T>
   **/
  PalletWhitelistError: {
    _enum: ['UnavailablePreImage', 'UndecodableCall', 'InvalidCallWeightWitness', 'CallIsNotWhitelisted', 'CallAlreadyWhitelisted']
  },
  /**
   * Lookup919: pallet_alliance::MemberRole
   **/
  PalletAllianceMemberRole: {
    _enum: ['Fellow', 'Ally', 'Retiring']
  },
  /**
   * Lookup923: pallet_alliance::pallet::Error<T, I>
   **/
  PalletAllianceError: {
    _enum: ['AllianceNotYetInitialized', 'AllianceAlreadyInitialized', 'AlreadyMember', 'NotMember', 'NotAlly', 'NoVotingRights', 'AlreadyElevated', 'AlreadyUnscrupulous', 'AccountNonGrata', 'NotListedAsUnscrupulous', 'TooManyUnscrupulousItems', 'TooLongWebsiteUrl', 'InsufficientFunds', 'WithoutRequiredIdentityFields', 'WithoutGoodIdentityJudgement', 'MissingProposalHash', 'MissingAnnouncement', 'TooManyMembers', 'TooManyAnnouncements', 'BadWitness', 'AlreadyRetiring', 'RetirementNoticeNotGiven', 'RetirementPeriodNotPassed', 'FellowsMissing']
  },
  /**
   * Lookup924: pallet_nomination_pools::PoolMember<T>
   **/
  PalletNominationPoolsPoolMember: {
    poolId: 'u32',
    points: 'u128',
    lastRecordedRewardCounter: 'u128',
    unbondingEras: 'BTreeMap<u32, u128>'
  },
  /**
   * Lookup927: pallet_nomination_pools::BondedPoolInner<T>
   **/
  PalletNominationPoolsBondedPoolInner: {
    commission: 'PalletNominationPoolsCommission',
    memberCounter: 'u32',
    points: 'u128',
    roles: 'PalletNominationPoolsPoolRoles',
    state: 'PalletNominationPoolsPoolState'
  },
  /**
   * Lookup928: pallet_nomination_pools::Commission<T>
   **/
  PalletNominationPoolsCommission: {
    current: 'Option<(Perbill,AccountId32)>',
    max: 'Option<Perbill>',
    changeRate: 'Option<PalletNominationPoolsCommissionChangeRate>',
    throttleFrom: 'Option<u32>',
    claimPermission: 'Option<PalletNominationPoolsCommissionClaimPermission>'
  },
  /**
   * Lookup930: pallet_nomination_pools::PoolRoles<sp_core::crypto::AccountId32>
   **/
  PalletNominationPoolsPoolRoles: {
    depositor: 'AccountId32',
    root: 'Option<AccountId32>',
    nominator: 'Option<AccountId32>',
    bouncer: 'Option<AccountId32>'
  },
  /**
   * Lookup931: pallet_nomination_pools::RewardPool<T>
   **/
  PalletNominationPoolsRewardPool: {
    lastRecordedRewardCounter: 'u128',
    lastRecordedTotalPayouts: 'u128',
    totalRewardsClaimed: 'u128',
    totalCommissionPending: 'u128',
    totalCommissionClaimed: 'u128'
  },
  /**
   * Lookup932: pallet_nomination_pools::SubPools<T>
   **/
  PalletNominationPoolsSubPools: {
    noEra: 'PalletNominationPoolsUnbondPool',
    withEra: 'BTreeMap<u32, PalletNominationPoolsUnbondPool>'
  },
  /**
   * Lookup933: pallet_nomination_pools::UnbondPool<T>
   **/
  PalletNominationPoolsUnbondPool: {
    points: 'u128',
    balance: 'u128'
  },
  /**
   * Lookup938: pallet_nomination_pools::pallet::Error<T>
   **/
  PalletNominationPoolsError: {
    _enum: {
      PoolNotFound: 'Null',
      PoolMemberNotFound: 'Null',
      RewardPoolNotFound: 'Null',
      SubPoolsNotFound: 'Null',
      AccountBelongsToOtherPool: 'Null',
      FullyUnbonding: 'Null',
      MaxUnbondingLimit: 'Null',
      CannotWithdrawAny: 'Null',
      MinimumBondNotMet: 'Null',
      OverflowRisk: 'Null',
      NotDestroying: 'Null',
      NotNominator: 'Null',
      NotKickerOrDestroying: 'Null',
      NotOpen: 'Null',
      MaxPools: 'Null',
      MaxPoolMembers: 'Null',
      CanNotChangeState: 'Null',
      DoesNotHavePermission: 'Null',
      MetadataExceedsMaxLen: 'Null',
      Defensive: 'PalletNominationPoolsDefensiveError',
      PartialUnbondNotAllowedPermissionlessly: 'Null',
      MaxCommissionRestricted: 'Null',
      CommissionExceedsMaximum: 'Null',
      CommissionExceedsGlobalMaximum: 'Null',
      CommissionChangeThrottled: 'Null',
      CommissionChangeRateNotAllowed: 'Null',
      NoPendingCommission: 'Null',
      NoCommissionCurrentSet: 'Null',
      PoolIdInUse: 'Null',
      InvalidPoolId: 'Null',
      BondExtraRestricted: 'Null',
      NothingToAdjust: 'Null',
      NothingToSlash: 'Null',
      SlashTooLow: 'Null',
      AlreadyMigrated: 'Null',
      NotMigrated: 'Null',
      NotSupported: 'Null',
      Restricted: 'Null'
    }
  },
  /**
   * Lookup939: pallet_nomination_pools::pallet::DefensiveError
   **/
  PalletNominationPoolsDefensiveError: {
    _enum: ['NotEnoughSpaceInUnbondPool', 'PoolNotFound', 'RewardPoolNotFound', 'SubPoolsNotFound', 'BondedStashKilledPrematurely', 'DelegationUnsupported', 'SlashNotApplied']
  },
  /**
   * Lookup940: pallet_referenda::types::ReferendumInfo<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumInfoRankedCollectiveTally: {
    _enum: {
      Ongoing: 'PalletReferendaReferendumStatusRankedCollectiveTally',
      Approved: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Rejected: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Cancelled: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      TimedOut: '(u32,Option<PalletReferendaDeposit>,Option<PalletReferendaDeposit>)',
      Killed: 'u32'
    }
  },
  /**
   * Lookup941: pallet_referenda::types::ReferendumStatus<TrackId, kitchensink_runtime::OriginCaller, Moment, frame_support::traits::preimages::Bounded<kitchensink_runtime::RuntimeCall, sp_runtime::traits::BlakeTwo256>, Balance, pallet_ranked_collective::Tally<T, I, M>, sp_core::crypto::AccountId32, ScheduleAddress>
   **/
  PalletReferendaReferendumStatusRankedCollectiveTally: {
    track: 'u16',
    origin: 'KitchensinkRuntimeOriginCaller',
    proposal: 'FrameSupportPreimagesBounded',
    enactment: 'FrameSupportScheduleDispatchTime',
    submitted: 'u32',
    submissionDeposit: 'PalletReferendaDeposit',
    decisionDeposit: 'Option<PalletReferendaDeposit>',
    deciding: 'Option<PalletReferendaDecidingStatus>',
    tally: 'PalletRankedCollectiveTally',
    inQueue: 'bool',
    alarm: 'Option<(u32,(u32,u32))>'
  },
  /**
   * Lookup944: pallet_ranked_collective::MemberRecord
   **/
  PalletRankedCollectiveMemberRecord: {
    rank: 'u16'
  },
  /**
   * Lookup948: pallet_ranked_collective::pallet::Error<T, I>
   **/
  PalletRankedCollectiveError: {
    _enum: ['AlreadyMember', 'NotMember', 'NotPolling', 'Ongoing', 'NoneRemaining', 'Corruption', 'RankTooLow', 'InvalidWitness', 'NoPermission', 'SameMember', 'TooManyMembers']
  },
  /**
   * Lookup949: pallet_asset_conversion::types::PoolInfo<PoolAssetId>
   **/
  PalletAssetConversionPoolInfo: {
    lpToken: 'u32'
  },
  /**
   * Lookup950: pallet_asset_conversion::pallet::Error<T>
   **/
  PalletAssetConversionError: {
    _enum: ['InvalidAssetPair', 'PoolExists', 'WrongDesiredAmount', 'AmountOneLessThanMinimal', 'AmountTwoLessThanMinimal', 'ReserveLeftLessThanMinimal', 'AmountOutTooHigh', 'PoolNotFound', 'Overflow', 'AssetOneDepositDidNotMeetMinimum', 'AssetTwoDepositDidNotMeetMinimum', 'AssetOneWithdrawalDidNotMeetMinimum', 'AssetTwoWithdrawalDidNotMeetMinimum', 'OptimalAmountLessThanDesired', 'InsufficientLiquidityMinted', 'ZeroLiquidity', 'ZeroAmount', 'ProvidedMinimumNotSufficientForSwap', 'ProvidedMaximumNotSufficientForSwap', 'InvalidPath', 'NonUniquePath', 'IncorrectPoolAssetId', 'BelowMinimum']
  },
  /**
   * Lookup951: pallet_fast_unstake::types::UnstakeRequest<T>
   **/
  PalletFastUnstakeUnstakeRequest: {
    stashes: 'Vec<(AccountId32,u128)>',
    checked: 'Vec<u32>'
  },
  /**
   * Lookup954: pallet_fast_unstake::pallet::Error<T>
   **/
  PalletFastUnstakeError: {
    _enum: ['NotController', 'AlreadyQueued', 'NotFullyBonded', 'NotQueued', 'AlreadyHead', 'CallNotAllowed']
  },
  /**
   * Lookup955: pallet_message_queue::BookState<MessageOrigin>
   **/
  PalletMessageQueueBookState: {
    _alias: {
      size_: 'size'
    },
    begin: 'u32',
    end: 'u32',
    count: 'u32',
    readyNeighbours: 'Option<PalletMessageQueueNeighbours>',
    messageCount: 'u64',
    size_: 'u64'
  },
  /**
   * Lookup957: pallet_message_queue::Neighbours<MessageOrigin>
   **/
  PalletMessageQueueNeighbours: {
    prev: 'u32',
    next: 'u32'
  },
  /**
   * Lookup958: pallet_message_queue::Page<Size, HeapSize>
   **/
  PalletMessageQueuePage: {
    remaining: 'u32',
    remainingSize: 'u32',
    firstIndex: 'u32',
    first: 'u32',
    last: 'u32',
    heap: 'Bytes'
  },
  /**
   * Lookup960: pallet_message_queue::pallet::Error<T>
   **/
  PalletMessageQueueError: {
    _enum: ['NotReapable', 'NoPage', 'NoMessage', 'AlreadyProcessed', 'Queued', 'InsufficientWeight', 'TemporarilyUnprocessable', 'QueuePaused', 'RecursiveDisallowed']
  },
  /**
   * Lookup961: pallet_tx_pause::pallet::Error<T>
   **/
  PalletTxPauseError: {
    _enum: ['IsPaused', 'IsUnpaused', 'Unpausable', 'NotFound']
  },
  /**
   * Lookup962: pallet_safe_mode::pallet::Error<T>
   **/
  PalletSafeModeError: {
    _enum: ['Entered', 'Exited', 'NotConfigured', 'NoDeposit', 'AlreadyDeposited', 'CannotReleaseYet', 'CurrencyError']
  },
  /**
   * Lookup963: pallet_migrations::pallet::Error<T>
   **/
  PalletMigrationsError: {
    _enum: ['Ongoing']
  },
  /**
   * Lookup967: pallet_broker::types::LeaseRecordItem
   **/
  PalletBrokerLeaseRecordItem: {
    until: 'u32',
    task: 'u32'
  },
  /**
   * Lookup969: pallet_broker::types::StatusRecord
   **/
  PalletBrokerStatusRecord: {
    coreCount: 'u16',
    privatePoolSize: 'u32',
    systemPoolSize: 'u32',
    lastCommittedTimeslice: 'u32',
    lastTimeslice: 'u32'
  },
  /**
   * Lookup970: pallet_broker::types::SaleInfoRecord<Balance, RelayBlockNumber>
   **/
  PalletBrokerSaleInfoRecord: {
    saleStart: 'u32',
    leadinLength: 'u32',
    endPrice: 'u128',
    regionBegin: 'u32',
    regionEnd: 'u32',
    idealCoresSold: 'u16',
    coresOffered: 'u16',
    firstCore: 'u16',
    selloutPrice: 'Option<u128>',
    coresSold: 'u16'
  },
  /**
   * Lookup971: pallet_broker::types::PotentialRenewalId
   **/
  PalletBrokerPotentialRenewalId: {
    core: 'u16',
    when: 'u32'
  },
  /**
   * Lookup972: pallet_broker::types::PotentialRenewalRecord<Balance>
   **/
  PalletBrokerPotentialRenewalRecord: {
    price: 'u128',
    completion: 'PalletBrokerCompletionStatus'
  },
  /**
   * Lookup973: pallet_broker::types::CompletionStatus
   **/
  PalletBrokerCompletionStatus: {
    _enum: {
      Partial: 'PalletBrokerCoreMask',
      Complete: 'Vec<PalletBrokerScheduleItem>'
    }
  },
  /**
   * Lookup974: pallet_broker::types::RegionRecord<sp_core::crypto::AccountId32, Balance>
   **/
  PalletBrokerRegionRecord: {
    end: 'u32',
    owner: 'Option<AccountId32>',
    paid: 'Option<u128>'
  },
  /**
   * Lookup976: pallet_broker::types::ContributionRecord<sp_core::crypto::AccountId32>
   **/
  PalletBrokerContributionRecord: {
    length: 'u32',
    payee: 'AccountId32'
  },
  /**
   * Lookup977: pallet_broker::types::PoolIoRecord
   **/
  PalletBrokerPoolIoRecord: {
    private: 'i32',
    system: 'i32'
  },
  /**
   * Lookup979: pallet_broker::types::InstaPoolHistoryRecord<Balance>
   **/
  PalletBrokerInstaPoolHistoryRecord: {
    privateContributions: 'u32',
    systemContributions: 'u32',
    maybePayout: 'Option<u128>'
  },
  /**
   * Lookup981: pallet_broker::types::AutoRenewalRecord
   **/
  PalletBrokerAutoRenewalRecord: {
    core: 'u16',
    task: 'u32',
    nextRenewal: 'u32'
  },
  /**
   * Lookup983: pallet_broker::pallet::Error<T>
   **/
  PalletBrokerError: {
    _enum: ['UnknownRegion', 'NotOwner', 'PivotTooLate', 'PivotTooEarly', 'ExteriorPivot', 'VoidPivot', 'CompletePivot', 'CorruptWorkplan', 'NoSales', 'Overpriced', 'Unavailable', 'SoldOut', 'WrongTime', 'NotAllowed', 'Uninitialized', 'TooEarly', 'NothingToDo', 'TooManyReservations', 'TooManyLeases', 'LeaseNotFound', 'UnknownRevenue', 'UnknownContribution', 'IncompleteAssignment', 'StillValid', 'NoHistory', 'UnknownReservation', 'UnknownRenewal', 'AlreadyExpired', 'InvalidConfig', 'NoClaimTimeslices', 'NoPermission', 'TooManyAutoRenewals', 'NonTaskAutoRenewal', 'SovereignAccountNotFound', 'AutoRenewalNotEnabled', 'AssignmentNotFound', 'CreditPurchaseTooSmall']
  },
  /**
   * Lookup984: pallet_example_tasks::pallet::Error<T>
   **/
  PalletExampleTasksError: {
    _enum: ['NotFound']
  },
  /**
   * Lookup985: pallet_asset_conversion_ops::pallet::Error<T>
   **/
  PalletAssetConversionOpsError: {
    _enum: ['InvalidAssetPair', 'PoolNotFound', 'ZeroBalance', 'PartialTransfer']
  },
  /**
   * Lookup987: pallet_revive::wasm::CodeInfo<T>
   **/
  PalletReviveWasmCodeInfo: {
    owner: 'AccountId32',
    deposit: 'Compact<u128>',
    refcount: 'Compact<u64>',
    codeLen: 'u32',
    behaviourVersion: 'u32'
  },
  /**
   * Lookup988: pallet_revive::storage::ContractInfo<T>
   **/
  PalletReviveStorageContractInfo: {
    trieId: 'Bytes',
    codeHash: 'H256',
    storageBytes: 'u32',
    storageItems: 'u32',
    storageByteDeposit: 'u128',
    storageItemDeposit: 'u128',
    storageBaseDeposit: 'u128',
    immutableDataLen: 'u32'
  },
  /**
   * Lookup990: pallet_revive::storage::DeletionQueueManager<T>
   **/
  PalletReviveStorageDeletionQueueManager: {
    insertCounter: 'u32',
    deleteCounter: 'u32'
  },
  /**
   * Lookup991: pallet_revive::pallet::Error<T>
   **/
  PalletReviveError: {
    _enum: ['InvalidSchedule', 'InvalidCallFlags', 'OutOfGas', 'TransferFailed', 'MaxCallDepthReached', 'ContractNotFound', 'CodeNotFound', 'CodeInfoNotFound', 'OutOfBounds', 'DecodingFailed', 'ContractTrapped', 'ValueTooLarge', 'TerminatedWhileReentrant', 'InputForwarded', 'TooManyTopics', 'NoChainExtension', 'XCMDecodeFailed', 'DuplicateContract', 'TerminatedInConstructor', 'ReentranceDenied', 'ReenteredPallet', 'StateChangeDenied', 'StorageDepositNotEnoughFunds', 'StorageDepositLimitExhausted', 'CodeInUse', 'ContractReverted', 'CodeRejected', 'BlobTooLarge', 'StaticMemoryTooLarge', 'BasicBlockTooLarge', 'InvalidInstruction', 'MaxDelegateDependenciesReached', 'DelegateDependencyNotFound', 'DelegateDependencyAlreadyExists', 'CannotAddSelfAsDelegateDependency', 'OutOfTransientStorage', 'InvalidSyscall', 'InvalidStorageFlags', 'ExecutionFailed', 'BalanceConversionFailed', 'DecimalPrecisionLoss', 'InvalidImmutableAccess', 'AccountUnmapped', 'AccountAlreadyMapped', 'InvalidGenericTransaction', 'RefcountOverOrUnderflow', 'UnsupportedPrecompileAddress', 'PrecompileFailure']
  },
  /**
   * Lookup992: pallet_delegated_staking::types::Delegation<T>
   **/
  PalletDelegatedStakingDelegation: {
    agent: 'AccountId32',
    amount: 'u128'
  },
  /**
   * Lookup993: pallet_delegated_staking::types::AgentLedger<T>
   **/
  PalletDelegatedStakingAgentLedger: {
    payee: 'AccountId32',
    totalDelegated: 'Compact<u128>',
    unclaimedWithdrawals: 'Compact<u128>',
    pendingSlash: 'Compact<u128>'
  },
  /**
   * Lookup994: pallet_delegated_staking::pallet::Error<T>
   **/
  PalletDelegatedStakingError: {
    _enum: ['NotAllowed', 'AlreadyStaking', 'InvalidRewardDestination', 'InvalidDelegation', 'NotEnoughFunds', 'NotAgent', 'NotDelegator', 'BadState', 'UnappliedSlash', 'NothingToSlash', 'WithdrawFailed', 'NotSupported']
  },
  /**
   * Lookup995: pallet_asset_rewards::PoolStakerInfo<Balance>
   **/
  PalletAssetRewardsPoolStakerInfo: {
    amount: 'u128',
    rewards: 'u128',
    rewardPerTokenPaid: 'u128'
  },
  /**
   * Lookup996: pallet_asset_rewards::PoolInfo<sp_core::crypto::AccountId32, frame_support::traits::tokens::fungible::union_of::NativeOrWithId<AssetId>, Balance, BlockNumber>
   **/
  PalletAssetRewardsPoolInfo: {
    stakedAssetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
    rewardAssetId: 'FrameSupportTokensFungibleUnionOfNativeOrWithId',
    rewardRatePerBlock: 'u128',
    expiryBlock: 'u32',
    admin: 'AccountId32',
    totalTokensStaked: 'u128',
    rewardPerTokenStored: 'u128',
    lastUpdateBlock: 'u32',
    account: 'AccountId32'
  },
  /**
   * Lookup999: pallet_asset_rewards::pallet::Error<T>
   **/
  PalletAssetRewardsError: {
    _enum: ['NotEnoughTokens', 'NonExistentPool', 'NonExistentStaker', 'NonExistentAsset', 'BlockNumberConversionError', 'ExpiryBlockMustBeInTheFuture', 'InsufficientFunds', 'ExpiryCut', 'RewardRateCut', 'NonEmptyPool']
  },
  /**
   * Lookup1000: pallet_assets_freezer::pallet::Error<T, I>
   **/
  PalletAssetsFreezerError: {
    _enum: ['TooManyFreezes']
  },
  /**
   * Lookup1001: pallet_meta_tx::pallet::Error<T>
   **/
  PalletMetaTxError: {
    _enum: ['BadProof', 'Future', 'Stale', 'AncientBirthBlock', 'UnknownOrigin', 'Invalid']
  },
  /**
   * Lookup1003: frame_system::extensions::check_weight::CheckWeight<T>
   **/
  FrameSystemExtensionsCheckWeight: 'Null',
  /**
   * Lookup1004: pallet_asset_conversion_tx_payment::ChargeAssetTxPayment<T>
   **/
  PalletAssetConversionTxPaymentChargeAssetTxPayment: {
    tip: 'Compact<u128>',
    assetId: 'Option<FrameSupportTokensFungibleUnionOfNativeOrWithId>'
  },
  /**
   * Lookup1006: frame_system::extensions::weight_reclaim::WeightReclaim<T>
   **/
  FrameSystemExtensionsWeightReclaim: 'Null',
  /**
   * Lookup1007: sp_runtime::generic::block::Block<sp_runtime::generic::header::Header<Number, Hash>, sp_runtime::generic::unchecked_extrinsic::UncheckedExtrinsic<sp_runtime::multiaddress::MultiAddress<sp_core::crypto::AccountId32, AccountIndex>, kitchensink_runtime::RuntimeCall, sp_runtime::MultiSignature, Extra>>
   **/
  SpRuntimeBlock: {
    header: 'SpRuntimeHeader',
    extrinsics: 'Vec<Bytes>'
  },
  /**
   * Lookup1010: sp_runtime::ExtrinsicInclusionMode
   **/
  SpRuntimeExtrinsicInclusionMode: {
    _enum: ['AllExtrinsics', 'OnlyInherents']
  },
  /**
   * Lookup1013: frame_support::view_functions::ViewFunctionId
   **/
  FrameSupportViewFunctionsViewFunctionId: {
    prefix: '[u8;16]',
    suffix: '[u8;16]'
  },
  /**
   * Lookup1015: frame_support::view_functions::ViewFunctionDispatchError
   **/
  FrameSupportViewFunctionsViewFunctionDispatchError: {
    _enum: {
      NotImplemented: 'Null',
      NotFound: 'FrameSupportViewFunctionsViewFunctionId',
      Codec: 'Null'
    }
  },
  /**
   * Lookup1017: sp_runtime::transaction_validity::TransactionValidityError
   **/
  SpRuntimeTransactionValidityTransactionValidityError: {
    _enum: {
      Invalid: 'SpRuntimeTransactionValidityInvalidTransaction',
      Unknown: 'SpRuntimeTransactionValidityUnknownTransaction'
    }
  },
  /**
   * Lookup1018: sp_runtime::transaction_validity::InvalidTransaction
   **/
  SpRuntimeTransactionValidityInvalidTransaction: {
    _enum: {
      Call: 'Null',
      Payment: 'Null',
      Future: 'Null',
      Stale: 'Null',
      BadProof: 'Null',
      AncientBirthBlock: 'Null',
      ExhaustsResources: 'Null',
      Custom: 'u8',
      BadMandatory: 'Null',
      MandatoryValidation: 'Null',
      BadSigner: 'Null',
      IndeterminateImplicit: 'Null',
      UnknownOrigin: 'Null'
    }
  },
  /**
   * Lookup1019: sp_runtime::transaction_validity::UnknownTransaction
   **/
  SpRuntimeTransactionValidityUnknownTransaction: {
    _enum: {
      CannotLookup: 'Null',
      NoUnsignedValidator: 'Null',
      Custom: 'u8'
    }
  },
  /**
   * Lookup1020: sp_inherents::InherentData
   **/
  SpInherentsInherentData: {
    data: 'BTreeMap<[u8;8], Bytes>'
  },
  /**
   * Lookup1024: sp_inherents::CheckInherentsResult
   **/
  SpInherentsCheckInherentsResult: {
    okay: 'bool',
    fatalError: 'bool',
    errors: 'SpInherentsInherentData'
  },
  /**
   * Lookup1025: sp_runtime::transaction_validity::TransactionSource
   **/
  SpRuntimeTransactionValidityTransactionSource: {
    _enum: ['InBlock', 'Local', 'External']
  },
  /**
   * Lookup1027: sp_runtime::transaction_validity::ValidTransaction
   **/
  SpRuntimeTransactionValidityValidTransaction: {
    priority: 'u64',
    requires: 'Vec<Bytes>',
    provides: 'Vec<Bytes>',
    longevity: 'u64',
    propagate: 'bool'
  },
  /**
   * Lookup1028: sp_statement_store::runtime_api::StatementSource
   **/
  SpStatementStoreRuntimeApiStatementSource: {
    _enum: ['Chain', 'Network', 'Local']
  },
  /**
   * Lookup1030: sp_statement_store::runtime_api::ValidStatement
   **/
  SpStatementStoreRuntimeApiValidStatement: {
    maxCount: 'u32',
    maxSize: 'u32'
  },
  /**
   * Lookup1031: sp_statement_store::runtime_api::InvalidStatement
   **/
  SpStatementStoreRuntimeApiInvalidStatement: {
    _enum: ['BadProof', 'NoProof', 'InternalError']
  },
  /**
   * Lookup1035: sp_consensus_babe::BabeConfiguration
   **/
  SpConsensusBabeBabeConfiguration: {
    slotDuration: 'u64',
    epochLength: 'u64',
    c: '(u64,u64)',
    authorities: 'Vec<(SpConsensusBabeAppPublic,u64)>',
    randomness: '[u8;32]',
    allowedSlots: 'SpConsensusBabeAllowedSlots'
  },
  /**
   * Lookup1036: sp_consensus_babe::Epoch
   **/
  SpConsensusBabeEpoch: {
    epochIndex: 'u64',
    startSlot: 'u64',
    duration: 'u64',
    authorities: 'Vec<(SpConsensusBabeAppPublic,u64)>',
    randomness: '[u8;32]',
    config: 'SpConsensusBabeBabeEpochConfiguration'
  },
  /**
   * Lookup1041: pallet_contracts::primitives::ExecReturnValue
   **/
  PalletContractsPrimitivesExecReturnValue: {
    flags: 'PalletContractsUapiFlagsReturnFlags',
    data: 'Bytes'
  },
  /**
   * Lookup1042: pallet_contracts_uapi::flags::ReturnFlags
   **/
  PalletContractsUapiFlagsReturnFlags: {
    bits: 'u32'
  },
  /**
   * Lookup1043: pallet_contracts::primitives::StorageDeposit<Balance>
   **/
  PalletContractsPrimitivesStorageDeposit: {
    _enum: {
      Refund: 'u128',
      Charge: 'u128'
    }
  },
  /**
   * Lookup1046: pallet_contracts::primitives::Code<primitive_types::H256>
   **/
  PalletContractsPrimitivesCode: {
    _enum: {
      Upload: 'Bytes',
      Existing: 'H256'
    }
  },
  /**
   * Lookup1047: pallet_contracts::primitives::ContractResult<Result<pallet_contracts::primitives::InstantiateReturnValue<sp_core::crypto::AccountId32>, sp_runtime::DispatchError>, Balance, frame_system::EventRecord<kitchensink_runtime::RuntimeEvent, primitive_types::H256>>
   **/
  PalletContractsPrimitivesContractResult: {
    gasConsumed: 'SpWeightsWeightV2Weight',
    gasRequired: 'SpWeightsWeightV2Weight',
    storageDeposit: 'PalletContractsPrimitivesStorageDeposit',
    debugMessage: 'Bytes',
    result: 'Result<PalletContractsPrimitivesInstantiateReturnValue, SpRuntimeDispatchError>',
    events: 'Option<Vec<FrameSystemEventRecord>>'
  },
  /**
   * Lookup1049: pallet_contracts::primitives::InstantiateReturnValue<sp_core::crypto::AccountId32>
   **/
  PalletContractsPrimitivesInstantiateReturnValue: {
    result: 'PalletContractsPrimitivesExecReturnValue',
    accountId: 'AccountId32'
  },
  /**
   * Lookup1051: pallet_contracts::primitives::CodeUploadReturnValue<primitive_types::H256, Balance>
   **/
  PalletContractsPrimitivesCodeUploadReturnValue: {
    codeHash: 'H256',
    deposit: 'u128'
  },
  /**
   * Lookup1053: pallet_contracts::primitives::ContractAccessError
   **/
  PalletContractsPrimitivesContractAccessError: {
    _enum: ['DoesntExist', 'KeyDecodingFailed', 'MigrationInProgress']
  },
  /**
   * Lookup1056: pallet_revive::primitives::ContractResult<pallet_revive::primitives::ExecReturnValue, Balance>
   **/
  PalletRevivePrimitivesContractResultExecReturnValue: {
    gasConsumed: 'SpWeightsWeightV2Weight',
    gasRequired: 'SpWeightsWeightV2Weight',
    storageDeposit: 'PalletRevivePrimitivesStorageDeposit',
    result: 'Result<PalletRevivePrimitivesExecReturnValue, SpRuntimeDispatchError>'
  },
  /**
   * Lookup1057: pallet_revive::primitives::ExecReturnValue
   **/
  PalletRevivePrimitivesExecReturnValue: {
    flags: 'PalletReviveUapiFlagsReturnFlags',
    data: 'Bytes'
  },
  /**
   * Lookup1058: pallet_revive_uapi::flags::ReturnFlags
   **/
  PalletReviveUapiFlagsReturnFlags: {
    bits: 'u32'
  },
  /**
   * Lookup1059: pallet_revive::primitives::StorageDeposit<Balance>
   **/
  PalletRevivePrimitivesStorageDeposit: {
    _enum: {
      Refund: 'u128',
      Charge: 'u128'
    }
  },
  /**
   * Lookup1061: pallet_revive::primitives::Code
   **/
  PalletRevivePrimitivesCode: {
    _enum: {
      Upload: 'Bytes',
      Existing: 'H256'
    }
  },
  /**
   * Lookup1062: pallet_revive::primitives::ContractResult<pallet_revive::primitives::InstantiateReturnValue, Balance>
   **/
  PalletRevivePrimitivesContractResultInstantiateReturnValue: {
    gasConsumed: 'SpWeightsWeightV2Weight',
    gasRequired: 'SpWeightsWeightV2Weight',
    storageDeposit: 'PalletRevivePrimitivesStorageDeposit',
    result: 'Result<PalletRevivePrimitivesInstantiateReturnValue, SpRuntimeDispatchError>'
  },
  /**
   * Lookup1063: pallet_revive::primitives::InstantiateReturnValue
   **/
  PalletRevivePrimitivesInstantiateReturnValue: {
    result: 'PalletRevivePrimitivesExecReturnValue',
    addr: 'H160'
  },
  /**
   * Lookup1065: pallet_revive::evm::api::rpc_types_gen::GenericTransaction
   **/
  PalletReviveEvmApiRpcTypesGenGenericTransaction: {
    _alias: {
      r_type: 'r#type'
    },
    accessList: 'Option<Vec<PalletReviveEvmApiRpcTypesGenAccessListEntry>>',
    blobVersionedHashes: 'Vec<H256>',
    blobs: 'Vec<Bytes>',
    chainId: 'Option<U256>',
    from: 'Option<H160>',
    gas: 'Option<U256>',
    gasPrice: 'Option<U256>',
    input: 'PalletReviveEvmApiRpcTypesGenInputOrData',
    maxFeePerBlobGas: 'Option<U256>',
    maxFeePerGas: 'Option<U256>',
    maxPriorityFeePerGas: 'Option<U256>',
    nonce: 'Option<U256>',
    to: 'Option<H160>',
    r_type: 'Option<u8>',
    value: 'Option<U256>'
  },
  /**
   * Lookup1068: pallet_revive::evm::api::rpc_types_gen::AccessListEntry
   **/
  PalletReviveEvmApiRpcTypesGenAccessListEntry: {
    address: 'H160',
    storageKeys: 'Vec<H256>'
  },
  /**
   * Lookup1073: pallet_revive::evm::api::rpc_types_gen::InputOrData
   **/
  PalletReviveEvmApiRpcTypesGenInputOrData: {
    input: 'Option<Bytes>',
    data: 'Option<Bytes>'
  },
  /**
   * Lookup1078: pallet_revive::primitives::EthTransactInfo<Balance>
   **/
  PalletRevivePrimitivesEthTransactInfo: {
    gasRequired: 'SpWeightsWeightV2Weight',
    storageDeposit: 'u128',
    ethGas: 'U256',
    data: 'Bytes'
  },
  /**
   * Lookup1079: pallet_revive::primitives::EthTransactError
   **/
  PalletRevivePrimitivesEthTransactError: {
    _enum: {
      Data: 'Bytes',
      Message: 'Text'
    }
  },
  /**
   * Lookup1081: pallet_revive::primitives::CodeUploadReturnValue<Balance>
   **/
  PalletRevivePrimitivesCodeUploadReturnValue: {
    codeHash: 'H256',
    deposit: 'u128'
  },
  /**
   * Lookup1083: pallet_revive::primitives::ContractAccessError
   **/
  PalletRevivePrimitivesContractAccessError: {
    _enum: ['DoesntExist', 'KeyDecodingFailed']
  },
  /**
   * Lookup1084: pallet_revive::evm::api::debug_rpc_types::TracerType
   **/
  PalletReviveEvmApiDebugRpcTypesTracerType: {
    _enum: {
      CallTracer: 'Option<PalletReviveEvmApiDebugRpcTypesCallTracerConfig>'
    }
  },
  /**
   * Lookup1086: pallet_revive::evm::api::debug_rpc_types::CallTracerConfig
   **/
  PalletReviveEvmApiDebugRpcTypesCallTracerConfig: {
    withLogs: 'bool',
    onlyTopCall: 'bool'
  },
  /**
   * Lookup1089: pallet_revive::evm::api::debug_rpc_types::Trace
   **/
  PalletReviveEvmApiDebugRpcTypesTrace: {
    _enum: {
      Call: 'PalletReviveEvmApiDebugRpcTypesCallTrace'
    }
  },
  /**
   * Lookup1090: pallet_revive::evm::api::debug_rpc_types::CallTrace<primitive_types::U256>
   **/
  PalletReviveEvmApiDebugRpcTypesCallTrace: {
    from: 'H160',
    gas: 'U256',
    gasUsed: 'U256',
    to: 'H160',
    input: 'Bytes',
    output: 'Bytes',
    error: 'Option<Text>',
    revertReason: 'Option<Text>',
    calls: 'Vec<PalletReviveEvmApiDebugRpcTypesCallTrace>',
    logs: 'Vec<PalletReviveEvmApiDebugRpcTypesCallLog>',
    value: 'Option<U256>',
    callType: 'PalletReviveEvmApiDebugRpcTypesCallType'
  },
  /**
   * Lookup1094: pallet_revive::evm::api::debug_rpc_types::CallLog
   **/
  PalletReviveEvmApiDebugRpcTypesCallLog: {
    address: 'H160',
    topics: 'Vec<H256>',
    data: 'Bytes',
    position: 'u32'
  },
  /**
   * Lookup1095: pallet_revive::evm::api::debug_rpc_types::CallType
   **/
  PalletReviveEvmApiDebugRpcTypesCallType: {
    _enum: ['Call', 'StaticCall', 'DelegateCall']
  },
  /**
   * Lookup1098: pallet_transaction_payment::types::RuntimeDispatchInfo<Balance, sp_weights::weight_v2::Weight>
   **/
  PalletTransactionPaymentRuntimeDispatchInfo: {
    weight: 'SpWeightsWeightV2Weight',
    class: 'FrameSupportDispatchDispatchClass',
    partialFee: 'u128'
  },
  /**
   * Lookup1099: pallet_transaction_payment::types::FeeDetails<Balance>
   **/
  PalletTransactionPaymentFeeDetails: {
    inclusionFee: 'Option<PalletTransactionPaymentInclusionFee>',
    tip: 'u128'
  },
  /**
   * Lookup1101: pallet_transaction_payment::types::InclusionFee<Balance>
   **/
  PalletTransactionPaymentInclusionFee: {
    baseFee: 'u128',
    lenFee: 'u128',
    adjustedWeightFee: 'u128'
  },
  /**
   * Lookup1105: sp_consensus_beefy::ValidatorSet<sp_consensus_beefy::ecdsa_crypto::Public>
   **/
  SpConsensusBeefyValidatorSet: {
    validators: 'Vec<SpConsensusBeefyEcdsaCryptoPublic>',
    id: 'u64'
  },
  /**
   * Lookup1106: sp_consensus_beefy::ForkVotingProof<sp_runtime::generic::header::Header<Number, Hash>, sp_consensus_beefy::ecdsa_crypto::Public, sp_runtime::OpaqueValue>
   **/
  SpConsensusBeefyForkVotingProofOpaqueValue: {
    vote: 'SpConsensusBeefyVoteMessage',
    ancestryProof: 'Bytes',
    header: 'SpRuntimeHeader'
  },
  /**
   * Lookup1108: sp_mmr_primitives::Error
   **/
  SpMmrPrimitivesError: {
    _enum: ['InvalidNumericOp', 'Push', 'GetRoot', 'Commit', 'GenerateProof', 'Verify', 'LeafNotFound', 'PalletNotIncluded', 'InvalidLeafIndex', 'InvalidBestKnownBlock']
  },
  /**
   * Lookup1114: sp_mmr_primitives::LeafProof<primitive_types::H256>
   **/
  SpMmrPrimitivesLeafProof: {
    leafIndices: 'Vec<u64>',
    leafCount: 'u64',
    items: 'Vec<H256>'
  },
  /**
   * Lookup1116: sp_mixnet::types::SessionStatus
   **/
  SpMixnetSessionStatus: {
    currentIndex: 'u32',
    phase: 'SpMixnetSessionPhase'
  },
  /**
   * Lookup1117: sp_mixnet::types::SessionPhase
   **/
  SpMixnetSessionPhase: {
    _enum: ['CoverToCurrent', 'RequestsToCurrent', 'CoverToPrev', 'DisconnectFromPrev']
  },
  /**
   * Lookup1120: sp_mixnet::types::Mixnode
   **/
  SpMixnetMixnode: {
    kxPublic: '[u8;32]',
    peerId: '[u8;32]',
    externalAddresses: 'Vec<Bytes>'
  },
  /**
   * Lookup1121: sp_mixnet::types::MixnodesErr
   **/
  SpMixnetMixnodesErr: {
    _enum: {
      InsufficientRegistrations: {
        num: 'u32',
        min: 'u32'
      }
    }
  },
  /**
   * Lookup1127: kitchensink_runtime::RuntimeError
   **/
  KitchensinkRuntimeRuntimeError: {
    _enum: {
      System: 'FrameSystemError',
      Utility: 'PalletUtilityError',
      Babe: 'PalletBabeError',
      __Unused3: 'Null',
      __Unused4: 'Null',
      Indices: 'PalletIndicesError',
      Balances: 'PalletBalancesError',
      __Unused7: 'Null',
      __Unused8: 'Null',
      __Unused9: 'Null',
      ElectionProviderMultiPhase: 'PalletElectionProviderMultiPhaseError',
      Staking: 'PalletStakingPalletError',
      Session: 'PalletSessionError',
      Democracy: 'PalletDemocracyError',
      Council: 'PalletCollectiveError',
      TechnicalCommittee: 'PalletCollectiveError',
      Elections: 'PalletElectionsPhragmenError',
      TechnicalMembership: 'PalletMembershipError',
      Grandpa: 'PalletGrandpaError',
      Treasury: 'PalletTreasuryError',
      AssetRate: 'PalletAssetRateError',
      Contracts: 'PalletContractsError',
      Sudo: 'PalletSudoError',
      ImOnline: 'PalletImOnlineError',
      __Unused24: 'Null',
      __Unused25: 'Null',
      __Unused26: 'Null',
      __Unused27: 'Null',
      Identity: 'PalletIdentityError',
      Society: 'PalletSocietyError',
      Recovery: 'PalletRecoveryError',
      Vesting: 'PalletVestingError',
      Scheduler: 'PalletSchedulerError',
      Glutton: 'PalletGluttonError',
      Preimage: 'PalletPreimageError',
      Proxy: 'PalletProxyError',
      Multisig: 'PalletMultisigError',
      Bounties: 'PalletBountiesError',
      Tips: 'PalletTipsError',
      Assets: 'PalletAssetsError',
      PoolAssets: 'PalletAssetsError',
      Beefy: 'PalletBeefyError',
      __Unused42: 'Null',
      __Unused43: 'Null',
      Lottery: 'PalletLotteryError',
      Nis: 'PalletNisError',
      Uniques: 'PalletUniquesError',
      Nfts: 'PalletNftsError',
      NftFractionalization: 'PalletNftFractionalizationError',
      Salary: 'PalletSalaryError',
      CoreFellowship: 'PalletCoreFellowshipError',
      TransactionStorage: 'PalletTransactionStorageError',
      VoterList: 'PalletBagsListError',
      StateTrieMigration: 'PalletStateTrieMigrationError',
      ChildBounties: 'PalletChildBountiesError',
      Referenda: 'PalletReferendaError',
      Remark: 'PalletRemarkError',
      __Unused57: 'Null',
      ConvictionVoting: 'PalletConvictionVotingError',
      Whitelist: 'PalletWhitelistError',
      AllianceMotion: 'PalletCollectiveError',
      Alliance: 'PalletAllianceError',
      NominationPools: 'PalletNominationPoolsError',
      RankedPolls: 'PalletReferendaError',
      RankedCollective: 'PalletRankedCollectiveError',
      AssetConversion: 'PalletAssetConversionError',
      FastUnstake: 'PalletFastUnstakeError',
      MessageQueue: 'PalletMessageQueueError',
      __Unused68: 'Null',
      TxPause: 'PalletTxPauseError',
      SafeMode: 'PalletSafeModeError',
      __Unused71: 'Null',
      MultiBlockMigrations: 'PalletMigrationsError',
      Broker: 'PalletBrokerError',
      TasksExample: 'PalletExampleTasksError',
      __Unused75: 'Null',
      __Unused76: 'Null',
      __Unused77: 'Null',
      __Unused78: 'Null',
      AssetConversionMigration: 'PalletAssetConversionOpsError',
      Revive: 'PalletReviveError',
      __Unused81: 'Null',
      DelegatedStaking: 'PalletDelegatedStakingError',
      AssetRewards: 'PalletAssetRewardsError',
      AssetsFreezer: 'PalletAssetsFreezerError',
      __Unused85: 'Null',
      __Unused86: 'Null',
      __Unused87: 'Null',
      __Unused88: 'Null',
      MetaTx: 'PalletMetaTxError'
    }
  }
};
