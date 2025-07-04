// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BinaryHeapEnqueuedOrder, BinaryHeapReverseQueueIndex, BitvecOrderLsb0, FrameSupportStorageDisabled, PalletReferendaReferendumInfo, PalletReferendaReferendumStatus, PalletTransactionPaymentChargeTransactionPayment, PalletXcmAuthorizedAliasesEntry, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmHoldReason, PalletXcmMaxAuthorizedAliases, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesPrimitivesHrmpChannelId, PolkadotPrimitivesV8ApprovalVotingParams, PolkadotPrimitivesV8AssignmentAppPublic, PolkadotPrimitivesV8AsyncBackingAsyncBackingParams, PolkadotPrimitivesV8AsyncBackingConstraints, PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations, PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations, PolkadotPrimitivesV8CandidateCommitments, PolkadotPrimitivesV8CollatorAppPublic, PolkadotPrimitivesV8DisputeState, PolkadotPrimitivesV8DisputeStatement, PolkadotPrimitivesV8DisputeStatementSet, PolkadotPrimitivesV8ExecutorParams, PolkadotPrimitivesV8ExecutorParamsExecutorParam, PolkadotPrimitivesV8GroupRotationInfo, PolkadotPrimitivesV8IndexedVecGroupIndex, PolkadotPrimitivesV8IndexedVecValidatorIndex, PolkadotPrimitivesV8InvalidDisputeStatementKind, PolkadotPrimitivesV8OccupiedCoreAssumption, PolkadotPrimitivesV8PersistedValidationData, PolkadotPrimitivesV8PvfCheckStatement, PolkadotPrimitivesV8PvfExecKind, PolkadotPrimitivesV8PvfPrepKind, PolkadotPrimitivesV8ScheduledCore, PolkadotPrimitivesV8SchedulerParams, PolkadotPrimitivesV8SessionInfo, PolkadotPrimitivesV8SignedUncheckedSigned, PolkadotPrimitivesV8SlashingDisputeProof, PolkadotPrimitivesV8SlashingDisputesTimeSlot, PolkadotPrimitivesV8SlashingPendingSlashes, PolkadotPrimitivesV8SlashingSlashingOffenceKind, PolkadotPrimitivesV8UpgradeGoAhead, PolkadotPrimitivesV8UpgradeRestriction, PolkadotPrimitivesV8ValidDisputeStatementKind, PolkadotPrimitivesV8ValidatorAppPublic, PolkadotPrimitivesV8ValidatorAppSignature, PolkadotPrimitivesV8ValidityAttestation, PolkadotPrimitivesVstagingAsyncBackingBackingState, PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability, PolkadotPrimitivesVstagingAsyncBackingConstraints, PolkadotPrimitivesVstagingBackedCandidate, PolkadotPrimitivesVstagingCandidateDescriptorV2, PolkadotPrimitivesVstagingCandidateEvent, PolkadotPrimitivesVstagingCandidateReceiptV2, PolkadotPrimitivesVstagingCommittedCandidateReceiptV2, PolkadotPrimitivesVstagingCoreState, PolkadotPrimitivesVstagingInherentData, PolkadotPrimitivesVstagingOccupiedCore, PolkadotPrimitivesVstagingScrapedOnChainVotes, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonImplsVersionedLocatableAsset, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeConstantsProxyProxyType, PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState, PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor, PolkadotRuntimeParachainsAssignerCoretimePalletError, PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor, PolkadotRuntimeParachainsAssignerCoretimeSchedule, PolkadotRuntimeParachainsAssignerCoretimeWorkState, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsCoretimePalletCall, PolkadotRuntimeParachainsCoretimePalletError, PolkadotRuntimeParachainsCoretimePalletEvent, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDisputesSlashingPalletCall, PolkadotRuntimeParachainsDisputesSlashingPalletError, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInclusionUmpQueueId, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOnDemandPalletCall, PolkadotRuntimeParachainsOnDemandPalletError, PolkadotRuntimeParachainsOnDemandPalletEvent, PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount, PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder, PolkadotRuntimeParachainsOnDemandTypesQueueStatusType, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsParasUpgradeStrategy, PolkadotRuntimeParachainsSchedulerCommonAssignment, PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeParachainsSharedRelayParentInfo, PolkadotRuntimeRuntime, PolkadotRuntimeRuntimeError, PolkadotRuntimeRuntimeFreezeReason, PolkadotRuntimeRuntimeHoldReason, PolkadotRuntimeSessionKeys, RelayCommonApisInflationInfo, SpRuntimeMultiSigner, StagingXcmExecutorAssetTransferTransferType, StagingXcmV3MultiLocation, StagingXcmV4Asset, StagingXcmV4AssetAssetFilter, StagingXcmV4AssetAssetId, StagingXcmV4AssetAssetInstance, StagingXcmV4AssetAssets, StagingXcmV4AssetFungibility, StagingXcmV4AssetWildAsset, StagingXcmV4AssetWildFungibility, StagingXcmV4Instruction, StagingXcmV4Junction, StagingXcmV4JunctionNetworkId, StagingXcmV4Junctions, StagingXcmV4Location, StagingXcmV4PalletInfo, StagingXcmV4QueryResponseInfo, StagingXcmV4Response, StagingXcmV4Xcm, StagingXcmV5Asset, StagingXcmV5AssetAssetFilter, StagingXcmV5AssetAssetId, StagingXcmV5AssetAssetInstance, StagingXcmV5AssetAssetTransferFilter, StagingXcmV5AssetAssets, StagingXcmV5AssetFungibility, StagingXcmV5AssetWildAsset, StagingXcmV5AssetWildFungibility, StagingXcmV5Hint, StagingXcmV5Instruction, StagingXcmV5Junction, StagingXcmV5JunctionNetworkId, StagingXcmV5Junctions, StagingXcmV5Location, StagingXcmV5PalletInfo, StagingXcmV5QueryResponseInfo, StagingXcmV5Response, StagingXcmV5TraitsOutcome, StagingXcmV5Xcm, XcmDoubleEncoded, XcmRuntimeApisAuthorizedAliasesOriginAliaser, XcmRuntimeApisConversionsError, XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError, XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisFeesError, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3OriginKind, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3TraitsSendError, XcmV3WeightLimit, XcmV3Xcm, XcmV5TraitsError, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BinaryHeapEnqueuedOrder: BinaryHeapEnqueuedOrder;
    BinaryHeapReverseQueueIndex: BinaryHeapReverseQueueIndex;
    BitvecOrderLsb0: BitvecOrderLsb0;
    FrameSupportStorageDisabled: FrameSupportStorageDisabled;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletXcmAuthorizedAliasesEntry: PalletXcmAuthorizedAliasesEntry;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
    PalletXcmHoldReason: PalletXcmHoldReason;
    PalletXcmMaxAuthorizedAliases: PalletXcmMaxAuthorizedAliases;
    PalletXcmOrigin: PalletXcmOrigin;
    PalletXcmQueryStatus: PalletXcmQueryStatus;
    PalletXcmRemoteLockedFungibleRecord: PalletXcmRemoteLockedFungibleRecord;
    PalletXcmVersionMigrationStage: PalletXcmVersionMigrationStage;
    PolkadotCorePrimitivesInboundDownwardMessage: PolkadotCorePrimitivesInboundDownwardMessage;
    PolkadotCorePrimitivesInboundHrmpMessage: PolkadotCorePrimitivesInboundHrmpMessage;
    PolkadotCorePrimitivesOutboundHrmpMessage: PolkadotCorePrimitivesOutboundHrmpMessage;
    PolkadotParachainPrimitivesPrimitivesHrmpChannelId: PolkadotParachainPrimitivesPrimitivesHrmpChannelId;
    PolkadotPrimitivesV8ApprovalVotingParams: PolkadotPrimitivesV8ApprovalVotingParams;
    PolkadotPrimitivesV8AssignmentAppPublic: PolkadotPrimitivesV8AssignmentAppPublic;
    PolkadotPrimitivesV8AsyncBackingAsyncBackingParams: PolkadotPrimitivesV8AsyncBackingAsyncBackingParams;
    PolkadotPrimitivesV8AsyncBackingConstraints: PolkadotPrimitivesV8AsyncBackingConstraints;
    PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations: PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations;
    PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations: PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations;
    PolkadotPrimitivesV8CandidateCommitments: PolkadotPrimitivesV8CandidateCommitments;
    PolkadotPrimitivesV8CollatorAppPublic: PolkadotPrimitivesV8CollatorAppPublic;
    PolkadotPrimitivesV8DisputeState: PolkadotPrimitivesV8DisputeState;
    PolkadotPrimitivesV8DisputeStatement: PolkadotPrimitivesV8DisputeStatement;
    PolkadotPrimitivesV8DisputeStatementSet: PolkadotPrimitivesV8DisputeStatementSet;
    PolkadotPrimitivesV8ExecutorParams: PolkadotPrimitivesV8ExecutorParams;
    PolkadotPrimitivesV8ExecutorParamsExecutorParam: PolkadotPrimitivesV8ExecutorParamsExecutorParam;
    PolkadotPrimitivesV8GroupRotationInfo: PolkadotPrimitivesV8GroupRotationInfo;
    PolkadotPrimitivesV8IndexedVecGroupIndex: PolkadotPrimitivesV8IndexedVecGroupIndex;
    PolkadotPrimitivesV8IndexedVecValidatorIndex: PolkadotPrimitivesV8IndexedVecValidatorIndex;
    PolkadotPrimitivesV8InvalidDisputeStatementKind: PolkadotPrimitivesV8InvalidDisputeStatementKind;
    PolkadotPrimitivesV8OccupiedCoreAssumption: PolkadotPrimitivesV8OccupiedCoreAssumption;
    PolkadotPrimitivesV8PersistedValidationData: PolkadotPrimitivesV8PersistedValidationData;
    PolkadotPrimitivesV8PvfCheckStatement: PolkadotPrimitivesV8PvfCheckStatement;
    PolkadotPrimitivesV8PvfExecKind: PolkadotPrimitivesV8PvfExecKind;
    PolkadotPrimitivesV8PvfPrepKind: PolkadotPrimitivesV8PvfPrepKind;
    PolkadotPrimitivesV8ScheduledCore: PolkadotPrimitivesV8ScheduledCore;
    PolkadotPrimitivesV8SchedulerParams: PolkadotPrimitivesV8SchedulerParams;
    PolkadotPrimitivesV8SessionInfo: PolkadotPrimitivesV8SessionInfo;
    PolkadotPrimitivesV8SignedUncheckedSigned: PolkadotPrimitivesV8SignedUncheckedSigned;
    PolkadotPrimitivesV8SlashingDisputeProof: PolkadotPrimitivesV8SlashingDisputeProof;
    PolkadotPrimitivesV8SlashingDisputesTimeSlot: PolkadotPrimitivesV8SlashingDisputesTimeSlot;
    PolkadotPrimitivesV8SlashingPendingSlashes: PolkadotPrimitivesV8SlashingPendingSlashes;
    PolkadotPrimitivesV8SlashingSlashingOffenceKind: PolkadotPrimitivesV8SlashingSlashingOffenceKind;
    PolkadotPrimitivesV8UpgradeGoAhead: PolkadotPrimitivesV8UpgradeGoAhead;
    PolkadotPrimitivesV8UpgradeRestriction: PolkadotPrimitivesV8UpgradeRestriction;
    PolkadotPrimitivesV8ValidDisputeStatementKind: PolkadotPrimitivesV8ValidDisputeStatementKind;
    PolkadotPrimitivesV8ValidatorAppPublic: PolkadotPrimitivesV8ValidatorAppPublic;
    PolkadotPrimitivesV8ValidatorAppSignature: PolkadotPrimitivesV8ValidatorAppSignature;
    PolkadotPrimitivesV8ValidityAttestation: PolkadotPrimitivesV8ValidityAttestation;
    PolkadotPrimitivesVstagingAsyncBackingBackingState: PolkadotPrimitivesVstagingAsyncBackingBackingState;
    PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability: PolkadotPrimitivesVstagingAsyncBackingCandidatePendingAvailability;
    PolkadotPrimitivesVstagingAsyncBackingConstraints: PolkadotPrimitivesVstagingAsyncBackingConstraints;
    PolkadotPrimitivesVstagingBackedCandidate: PolkadotPrimitivesVstagingBackedCandidate;
    PolkadotPrimitivesVstagingCandidateDescriptorV2: PolkadotPrimitivesVstagingCandidateDescriptorV2;
    PolkadotPrimitivesVstagingCandidateEvent: PolkadotPrimitivesVstagingCandidateEvent;
    PolkadotPrimitivesVstagingCandidateReceiptV2: PolkadotPrimitivesVstagingCandidateReceiptV2;
    PolkadotPrimitivesVstagingCommittedCandidateReceiptV2: PolkadotPrimitivesVstagingCommittedCandidateReceiptV2;
    PolkadotPrimitivesVstagingCoreState: PolkadotPrimitivesVstagingCoreState;
    PolkadotPrimitivesVstagingInherentData: PolkadotPrimitivesVstagingInherentData;
    PolkadotPrimitivesVstagingOccupiedCore: PolkadotPrimitivesVstagingOccupiedCore;
    PolkadotPrimitivesVstagingScrapedOnChainVotes: PolkadotPrimitivesVstagingScrapedOnChainVotes;
    PolkadotRuntimeCommonAuctionsPalletCall: PolkadotRuntimeCommonAuctionsPalletCall;
    PolkadotRuntimeCommonAuctionsPalletError: PolkadotRuntimeCommonAuctionsPalletError;
    PolkadotRuntimeCommonAuctionsPalletEvent: PolkadotRuntimeCommonAuctionsPalletEvent;
    PolkadotRuntimeCommonClaimsEcdsaSignature: PolkadotRuntimeCommonClaimsEcdsaSignature;
    PolkadotRuntimeCommonClaimsPalletCall: PolkadotRuntimeCommonClaimsPalletCall;
    PolkadotRuntimeCommonClaimsPalletError: PolkadotRuntimeCommonClaimsPalletError;
    PolkadotRuntimeCommonClaimsPalletEvent: PolkadotRuntimeCommonClaimsPalletEvent;
    PolkadotRuntimeCommonClaimsPrevalidateAttests: PolkadotRuntimeCommonClaimsPrevalidateAttests;
    PolkadotRuntimeCommonClaimsStatementKind: PolkadotRuntimeCommonClaimsStatementKind;
    PolkadotRuntimeCommonCrowdloanFundInfo: PolkadotRuntimeCommonCrowdloanFundInfo;
    PolkadotRuntimeCommonCrowdloanLastContribution: PolkadotRuntimeCommonCrowdloanLastContribution;
    PolkadotRuntimeCommonCrowdloanPalletCall: PolkadotRuntimeCommonCrowdloanPalletCall;
    PolkadotRuntimeCommonCrowdloanPalletError: PolkadotRuntimeCommonCrowdloanPalletError;
    PolkadotRuntimeCommonCrowdloanPalletEvent: PolkadotRuntimeCommonCrowdloanPalletEvent;
    PolkadotRuntimeCommonImplsVersionedLocatableAsset: PolkadotRuntimeCommonImplsVersionedLocatableAsset;
    PolkadotRuntimeCommonParasRegistrarPalletCall: PolkadotRuntimeCommonParasRegistrarPalletCall;
    PolkadotRuntimeCommonParasRegistrarPalletError: PolkadotRuntimeCommonParasRegistrarPalletError;
    PolkadotRuntimeCommonParasRegistrarPalletEvent: PolkadotRuntimeCommonParasRegistrarPalletEvent;
    PolkadotRuntimeCommonParasRegistrarParaInfo: PolkadotRuntimeCommonParasRegistrarParaInfo;
    PolkadotRuntimeCommonSlotsPalletCall: PolkadotRuntimeCommonSlotsPalletCall;
    PolkadotRuntimeCommonSlotsPalletError: PolkadotRuntimeCommonSlotsPalletError;
    PolkadotRuntimeCommonSlotsPalletEvent: PolkadotRuntimeCommonSlotsPalletEvent;
    PolkadotRuntimeConstantsProxyProxyType: PolkadotRuntimeConstantsProxyProxyType;
    PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin: PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin;
    PolkadotRuntimeNposCompactSolution16: PolkadotRuntimeNposCompactSolution16;
    PolkadotRuntimeOriginCaller: PolkadotRuntimeOriginCaller;
    PolkadotRuntimeParachainsAssignerCoretimeAssignmentState: PolkadotRuntimeParachainsAssignerCoretimeAssignmentState;
    PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor: PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor;
    PolkadotRuntimeParachainsAssignerCoretimePalletError: PolkadotRuntimeParachainsAssignerCoretimePalletError;
    PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor: PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor;
    PolkadotRuntimeParachainsAssignerCoretimeSchedule: PolkadotRuntimeParachainsAssignerCoretimeSchedule;
    PolkadotRuntimeParachainsAssignerCoretimeWorkState: PolkadotRuntimeParachainsAssignerCoretimeWorkState;
    PolkadotRuntimeParachainsConfigurationHostConfiguration: PolkadotRuntimeParachainsConfigurationHostConfiguration;
    PolkadotRuntimeParachainsConfigurationPalletCall: PolkadotRuntimeParachainsConfigurationPalletCall;
    PolkadotRuntimeParachainsConfigurationPalletError: PolkadotRuntimeParachainsConfigurationPalletError;
    PolkadotRuntimeParachainsCoretimePalletCall: PolkadotRuntimeParachainsCoretimePalletCall;
    PolkadotRuntimeParachainsCoretimePalletError: PolkadotRuntimeParachainsCoretimePalletError;
    PolkadotRuntimeParachainsCoretimePalletEvent: PolkadotRuntimeParachainsCoretimePalletEvent;
    PolkadotRuntimeParachainsDisputesDisputeLocation: PolkadotRuntimeParachainsDisputesDisputeLocation;
    PolkadotRuntimeParachainsDisputesDisputeResult: PolkadotRuntimeParachainsDisputesDisputeResult;
    PolkadotRuntimeParachainsDisputesPalletCall: PolkadotRuntimeParachainsDisputesPalletCall;
    PolkadotRuntimeParachainsDisputesPalletError: PolkadotRuntimeParachainsDisputesPalletError;
    PolkadotRuntimeParachainsDisputesPalletEvent: PolkadotRuntimeParachainsDisputesPalletEvent;
    PolkadotRuntimeParachainsDisputesSlashingPalletCall: PolkadotRuntimeParachainsDisputesSlashingPalletCall;
    PolkadotRuntimeParachainsDisputesSlashingPalletError: PolkadotRuntimeParachainsDisputesSlashingPalletError;
    PolkadotRuntimeParachainsHrmpHrmpChannel: PolkadotRuntimeParachainsHrmpHrmpChannel;
    PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest: PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest;
    PolkadotRuntimeParachainsHrmpPalletCall: PolkadotRuntimeParachainsHrmpPalletCall;
    PolkadotRuntimeParachainsHrmpPalletError: PolkadotRuntimeParachainsHrmpPalletError;
    PolkadotRuntimeParachainsHrmpPalletEvent: PolkadotRuntimeParachainsHrmpPalletEvent;
    PolkadotRuntimeParachainsInclusionAggregateMessageOrigin: PolkadotRuntimeParachainsInclusionAggregateMessageOrigin;
    PolkadotRuntimeParachainsInclusionCandidatePendingAvailability: PolkadotRuntimeParachainsInclusionCandidatePendingAvailability;
    PolkadotRuntimeParachainsInclusionPalletCall: PolkadotRuntimeParachainsInclusionPalletCall;
    PolkadotRuntimeParachainsInclusionPalletError: PolkadotRuntimeParachainsInclusionPalletError;
    PolkadotRuntimeParachainsInclusionPalletEvent: PolkadotRuntimeParachainsInclusionPalletEvent;
    PolkadotRuntimeParachainsInclusionUmpQueueId: PolkadotRuntimeParachainsInclusionUmpQueueId;
    PolkadotRuntimeParachainsInitializerBufferedSessionChange: PolkadotRuntimeParachainsInitializerBufferedSessionChange;
    PolkadotRuntimeParachainsInitializerPalletCall: PolkadotRuntimeParachainsInitializerPalletCall;
    PolkadotRuntimeParachainsOnDemandPalletCall: PolkadotRuntimeParachainsOnDemandPalletCall;
    PolkadotRuntimeParachainsOnDemandPalletError: PolkadotRuntimeParachainsOnDemandPalletError;
    PolkadotRuntimeParachainsOnDemandPalletEvent: PolkadotRuntimeParachainsOnDemandPalletEvent;
    PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount: PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount;
    PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder: PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder;
    PolkadotRuntimeParachainsOnDemandTypesQueueStatusType: PolkadotRuntimeParachainsOnDemandTypesQueueStatusType;
    PolkadotRuntimeParachainsOriginPalletOrigin: PolkadotRuntimeParachainsOriginPalletOrigin;
    PolkadotRuntimeParachainsParasInherentPalletCall: PolkadotRuntimeParachainsParasInherentPalletCall;
    PolkadotRuntimeParachainsParasInherentPalletError: PolkadotRuntimeParachainsParasInherentPalletError;
    PolkadotRuntimeParachainsParasPalletCall: PolkadotRuntimeParachainsParasPalletCall;
    PolkadotRuntimeParachainsParasPalletError: PolkadotRuntimeParachainsParasPalletError;
    PolkadotRuntimeParachainsParasPalletEvent: PolkadotRuntimeParachainsParasPalletEvent;
    PolkadotRuntimeParachainsParasParaGenesisArgs: PolkadotRuntimeParachainsParasParaGenesisArgs;
    PolkadotRuntimeParachainsParasParaLifecycle: PolkadotRuntimeParachainsParasParaLifecycle;
    PolkadotRuntimeParachainsParasParaPastCodeMeta: PolkadotRuntimeParachainsParasParaPastCodeMeta;
    PolkadotRuntimeParachainsParasPvfCheckActiveVoteState: PolkadotRuntimeParachainsParasPvfCheckActiveVoteState;
    PolkadotRuntimeParachainsParasPvfCheckCause: PolkadotRuntimeParachainsParasPvfCheckCause;
    PolkadotRuntimeParachainsParasReplacementTimes: PolkadotRuntimeParachainsParasReplacementTimes;
    PolkadotRuntimeParachainsParasUpgradeStrategy: PolkadotRuntimeParachainsParasUpgradeStrategy;
    PolkadotRuntimeParachainsSchedulerCommonAssignment: PolkadotRuntimeParachainsSchedulerCommonAssignment;
    PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeParachainsSharedRelayParentInfo: PolkadotRuntimeParachainsSharedRelayParentInfo;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
    PolkadotRuntimeRuntimeError: PolkadotRuntimeRuntimeError;
    PolkadotRuntimeRuntimeFreezeReason: PolkadotRuntimeRuntimeFreezeReason;
    PolkadotRuntimeRuntimeHoldReason: PolkadotRuntimeRuntimeHoldReason;
    PolkadotRuntimeSessionKeys: PolkadotRuntimeSessionKeys;
    RelayCommonApisInflationInfo: RelayCommonApisInflationInfo;
    SpRuntimeMultiSigner: SpRuntimeMultiSigner;
    StagingXcmExecutorAssetTransferTransferType: StagingXcmExecutorAssetTransferTransferType;
    StagingXcmV3MultiLocation: StagingXcmV3MultiLocation;
    StagingXcmV4Asset: StagingXcmV4Asset;
    StagingXcmV4AssetAssetFilter: StagingXcmV4AssetAssetFilter;
    StagingXcmV4AssetAssetId: StagingXcmV4AssetAssetId;
    StagingXcmV4AssetAssetInstance: StagingXcmV4AssetAssetInstance;
    StagingXcmV4AssetAssets: StagingXcmV4AssetAssets;
    StagingXcmV4AssetFungibility: StagingXcmV4AssetFungibility;
    StagingXcmV4AssetWildAsset: StagingXcmV4AssetWildAsset;
    StagingXcmV4AssetWildFungibility: StagingXcmV4AssetWildFungibility;
    StagingXcmV4Instruction: StagingXcmV4Instruction;
    StagingXcmV4Junction: StagingXcmV4Junction;
    StagingXcmV4JunctionNetworkId: StagingXcmV4JunctionNetworkId;
    StagingXcmV4Junctions: StagingXcmV4Junctions;
    StagingXcmV4Location: StagingXcmV4Location;
    StagingXcmV4PalletInfo: StagingXcmV4PalletInfo;
    StagingXcmV4QueryResponseInfo: StagingXcmV4QueryResponseInfo;
    StagingXcmV4Response: StagingXcmV4Response;
    StagingXcmV4Xcm: StagingXcmV4Xcm;
    StagingXcmV5Asset: StagingXcmV5Asset;
    StagingXcmV5AssetAssetFilter: StagingXcmV5AssetAssetFilter;
    StagingXcmV5AssetAssetId: StagingXcmV5AssetAssetId;
    StagingXcmV5AssetAssetInstance: StagingXcmV5AssetAssetInstance;
    StagingXcmV5AssetAssetTransferFilter: StagingXcmV5AssetAssetTransferFilter;
    StagingXcmV5AssetAssets: StagingXcmV5AssetAssets;
    StagingXcmV5AssetFungibility: StagingXcmV5AssetFungibility;
    StagingXcmV5AssetWildAsset: StagingXcmV5AssetWildAsset;
    StagingXcmV5AssetWildFungibility: StagingXcmV5AssetWildFungibility;
    StagingXcmV5Hint: StagingXcmV5Hint;
    StagingXcmV5Instruction: StagingXcmV5Instruction;
    StagingXcmV5Junction: StagingXcmV5Junction;
    StagingXcmV5JunctionNetworkId: StagingXcmV5JunctionNetworkId;
    StagingXcmV5Junctions: StagingXcmV5Junctions;
    StagingXcmV5Location: StagingXcmV5Location;
    StagingXcmV5PalletInfo: StagingXcmV5PalletInfo;
    StagingXcmV5QueryResponseInfo: StagingXcmV5QueryResponseInfo;
    StagingXcmV5Response: StagingXcmV5Response;
    StagingXcmV5TraitsOutcome: StagingXcmV5TraitsOutcome;
    StagingXcmV5Xcm: StagingXcmV5Xcm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmRuntimeApisAuthorizedAliasesOriginAliaser: XcmRuntimeApisAuthorizedAliasesOriginAliaser;
    XcmRuntimeApisConversionsError: XcmRuntimeApisConversionsError;
    XcmRuntimeApisDryRunCallDryRunEffects: XcmRuntimeApisDryRunCallDryRunEffects;
    XcmRuntimeApisDryRunError: XcmRuntimeApisDryRunError;
    XcmRuntimeApisDryRunXcmDryRunEffects: XcmRuntimeApisDryRunXcmDryRunEffects;
    XcmRuntimeApisFeesError: XcmRuntimeApisFeesError;
    XcmV3Instruction: XcmV3Instruction;
    XcmV3Junction: XcmV3Junction;
    XcmV3JunctionBodyId: XcmV3JunctionBodyId;
    XcmV3JunctionBodyPart: XcmV3JunctionBodyPart;
    XcmV3JunctionNetworkId: XcmV3JunctionNetworkId;
    XcmV3Junctions: XcmV3Junctions;
    XcmV3MaybeErrorCode: XcmV3MaybeErrorCode;
    XcmV3MultiAsset: XcmV3MultiAsset;
    XcmV3MultiassetAssetId: XcmV3MultiassetAssetId;
    XcmV3MultiassetAssetInstance: XcmV3MultiassetAssetInstance;
    XcmV3MultiassetFungibility: XcmV3MultiassetFungibility;
    XcmV3MultiassetMultiAssetFilter: XcmV3MultiassetMultiAssetFilter;
    XcmV3MultiassetMultiAssets: XcmV3MultiassetMultiAssets;
    XcmV3MultiassetWildFungibility: XcmV3MultiassetWildFungibility;
    XcmV3MultiassetWildMultiAsset: XcmV3MultiassetWildMultiAsset;
    XcmV3OriginKind: XcmV3OriginKind;
    XcmV3PalletInfo: XcmV3PalletInfo;
    XcmV3QueryResponseInfo: XcmV3QueryResponseInfo;
    XcmV3Response: XcmV3Response;
    XcmV3TraitsError: XcmV3TraitsError;
    XcmV3TraitsSendError: XcmV3TraitsSendError;
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmV5TraitsError: XcmV5TraitsError;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedAssets: XcmVersionedAssets;
    XcmVersionedLocation: XcmVersionedLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
