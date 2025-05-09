// Auto-generated via `yarn polkadot-types-from-defs`, do not edit
/* eslint-disable */

// import type lookup before we augment - in some environments
// this is required to allow for ambient/previous definitions
import '@polkadot/types/types/registry';

import type { BinaryHeapEnqueuedOrder, BinaryHeapReverseQueueIndex, BitvecOrderLsb0, FrameSupportDispatchDispatchInfo, PalletReferendaReferendumInfo, PalletReferendaReferendumStatus, PalletReferendaTrackInfo, PalletTransactionPaymentChargeTransactionPayment, PalletXcmCall, PalletXcmError, PalletXcmEvent, PalletXcmOrigin, PalletXcmQueryStatus, PalletXcmRemoteLockedFungibleRecord, PalletXcmVersionMigrationStage, PolkadotCorePrimitivesInboundDownwardMessage, PolkadotCorePrimitivesInboundHrmpMessage, PolkadotCorePrimitivesOutboundHrmpMessage, PolkadotParachainPrimitivesPrimitivesHrmpChannelId, PolkadotPrimitivesV8ApprovalVotingParams, PolkadotPrimitivesV8AssignmentAppPublic, PolkadotPrimitivesV8AsyncBackingAsyncBackingParams, PolkadotPrimitivesV8AsyncBackingBackingState, PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability, PolkadotPrimitivesV8AsyncBackingConstraints, PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations, PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations, PolkadotPrimitivesV8BackedCandidate, PolkadotPrimitivesV8CandidateCommitments, PolkadotPrimitivesV8CandidateDescriptor, PolkadotPrimitivesV8CandidateEvent, PolkadotPrimitivesV8CandidateReceipt, PolkadotPrimitivesV8CollatorAppPublic, PolkadotPrimitivesV8CollatorAppSignature, PolkadotPrimitivesV8CommittedCandidateReceipt, PolkadotPrimitivesV8CoreState, PolkadotPrimitivesV8DisputeState, PolkadotPrimitivesV8DisputeStatement, PolkadotPrimitivesV8DisputeStatementSet, PolkadotPrimitivesV8ExecutorParams, PolkadotPrimitivesV8ExecutorParamsExecutorParam, PolkadotPrimitivesV8GroupRotationInfo, PolkadotPrimitivesV8IndexedVecGroupIndex, PolkadotPrimitivesV8IndexedVecValidatorIndex, PolkadotPrimitivesV8InherentData, PolkadotPrimitivesV8InvalidDisputeStatementKind, PolkadotPrimitivesV8OccupiedCore, PolkadotPrimitivesV8OccupiedCoreAssumption, PolkadotPrimitivesV8PersistedValidationData, PolkadotPrimitivesV8PvfCheckStatement, PolkadotPrimitivesV8PvfExecKind, PolkadotPrimitivesV8PvfPrepKind, PolkadotPrimitivesV8ScheduledCore, PolkadotPrimitivesV8SchedulerParams, PolkadotPrimitivesV8ScrapedOnChainVotes, PolkadotPrimitivesV8SessionInfo, PolkadotPrimitivesV8SignedUncheckedSigned, PolkadotPrimitivesV8SlashingDisputeProof, PolkadotPrimitivesV8SlashingDisputesTimeSlot, PolkadotPrimitivesV8SlashingPendingSlashes, PolkadotPrimitivesV8SlashingSlashingOffenceKind, PolkadotPrimitivesV8UpgradeGoAhead, PolkadotPrimitivesV8UpgradeRestriction, PolkadotPrimitivesV8ValidDisputeStatementKind, PolkadotPrimitivesV8ValidatorAppPublic, PolkadotPrimitivesV8ValidatorAppSignature, PolkadotPrimitivesV8ValidityAttestation, PolkadotRuntimeCommonAuctionsPalletCall, PolkadotRuntimeCommonAuctionsPalletError, PolkadotRuntimeCommonAuctionsPalletEvent, PolkadotRuntimeCommonClaimsEcdsaSignature, PolkadotRuntimeCommonClaimsPalletCall, PolkadotRuntimeCommonClaimsPalletError, PolkadotRuntimeCommonClaimsPalletEvent, PolkadotRuntimeCommonClaimsPrevalidateAttests, PolkadotRuntimeCommonClaimsStatementKind, PolkadotRuntimeCommonCrowdloanFundInfo, PolkadotRuntimeCommonCrowdloanLastContribution, PolkadotRuntimeCommonCrowdloanPalletCall, PolkadotRuntimeCommonCrowdloanPalletError, PolkadotRuntimeCommonCrowdloanPalletEvent, PolkadotRuntimeCommonImplsVersionedLocatableAsset, PolkadotRuntimeCommonParasRegistrarPalletCall, PolkadotRuntimeCommonParasRegistrarPalletError, PolkadotRuntimeCommonParasRegistrarPalletEvent, PolkadotRuntimeCommonParasRegistrarParaInfo, PolkadotRuntimeCommonSlotsPalletCall, PolkadotRuntimeCommonSlotsPalletError, PolkadotRuntimeCommonSlotsPalletEvent, PolkadotRuntimeGovernanceOriginsPalletCustomOriginsOrigin, PolkadotRuntimeNposCompactSolution16, PolkadotRuntimeOriginCaller, PolkadotRuntimeParachainsAssignerCoretimeAssignmentState, PolkadotRuntimeParachainsAssignerCoretimeCoreDescriptor, PolkadotRuntimeParachainsAssignerCoretimePalletError, PolkadotRuntimeParachainsAssignerCoretimeQueueDescriptor, PolkadotRuntimeParachainsAssignerCoretimeSchedule, PolkadotRuntimeParachainsAssignerCoretimeWorkState, PolkadotRuntimeParachainsConfigurationHostConfiguration, PolkadotRuntimeParachainsConfigurationPalletCall, PolkadotRuntimeParachainsConfigurationPalletError, PolkadotRuntimeParachainsCoretimePalletCall, PolkadotRuntimeParachainsCoretimePalletError, PolkadotRuntimeParachainsCoretimePalletEvent, PolkadotRuntimeParachainsDisputesDisputeLocation, PolkadotRuntimeParachainsDisputesDisputeResult, PolkadotRuntimeParachainsDisputesPalletCall, PolkadotRuntimeParachainsDisputesPalletError, PolkadotRuntimeParachainsDisputesPalletEvent, PolkadotRuntimeParachainsDisputesSlashingPalletCall, PolkadotRuntimeParachainsDisputesSlashingPalletError, PolkadotRuntimeParachainsHrmpHrmpChannel, PolkadotRuntimeParachainsHrmpHrmpOpenChannelRequest, PolkadotRuntimeParachainsHrmpPalletCall, PolkadotRuntimeParachainsHrmpPalletError, PolkadotRuntimeParachainsHrmpPalletEvent, PolkadotRuntimeParachainsInclusionAggregateMessageOrigin, PolkadotRuntimeParachainsInclusionCandidatePendingAvailability, PolkadotRuntimeParachainsInclusionPalletCall, PolkadotRuntimeParachainsInclusionPalletError, PolkadotRuntimeParachainsInclusionPalletEvent, PolkadotRuntimeParachainsInclusionUmpQueueId, PolkadotRuntimeParachainsInitializerBufferedSessionChange, PolkadotRuntimeParachainsInitializerPalletCall, PolkadotRuntimeParachainsOnDemandPalletCall, PolkadotRuntimeParachainsOnDemandPalletError, PolkadotRuntimeParachainsOnDemandPalletEvent, PolkadotRuntimeParachainsOnDemandTypesCoreAffinityCount, PolkadotRuntimeParachainsOnDemandTypesEnqueuedOrder, PolkadotRuntimeParachainsOnDemandTypesQueueStatusType, PolkadotRuntimeParachainsOriginPalletOrigin, PolkadotRuntimeParachainsParasInherentPalletCall, PolkadotRuntimeParachainsParasInherentPalletError, PolkadotRuntimeParachainsParasPalletCall, PolkadotRuntimeParachainsParasPalletError, PolkadotRuntimeParachainsParasPalletEvent, PolkadotRuntimeParachainsParasParaGenesisArgs, PolkadotRuntimeParachainsParasParaLifecycle, PolkadotRuntimeParachainsParasParaPastCodeMeta, PolkadotRuntimeParachainsParasPvfCheckActiveVoteState, PolkadotRuntimeParachainsParasPvfCheckCause, PolkadotRuntimeParachainsParasReplacementTimes, PolkadotRuntimeParachainsParasUpgradeStrategy, PolkadotRuntimeParachainsSchedulerCommonAssignment, PolkadotRuntimeParachainsSchedulerPalletCoreOccupied, PolkadotRuntimeParachainsSchedulerPalletParasEntry, PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker, PolkadotRuntimeParachainsSharedPalletCall, PolkadotRuntimeProxyType, PolkadotRuntimeRuntime, PolkadotRuntimeRuntimeError, PolkadotRuntimeRuntimeFreezeReason, PolkadotRuntimeRuntimeHoldReason, PolkadotRuntimeSessionKeys, RelayCommonApisInflationInfo, SpCoreVoid, SpRuntimeMultiSigner, StagingXcmExecutorAssetTransferTransferType, StagingXcmV3MultiLocation, StagingXcmV4Asset, StagingXcmV4AssetAssetFilter, StagingXcmV4AssetAssetId, StagingXcmV4AssetAssetInstance, StagingXcmV4AssetAssets, StagingXcmV4AssetFungibility, StagingXcmV4AssetWildAsset, StagingXcmV4AssetWildFungibility, StagingXcmV4Instruction, StagingXcmV4Junction, StagingXcmV4JunctionNetworkId, StagingXcmV4Junctions, StagingXcmV4Location, StagingXcmV4PalletInfo, StagingXcmV4QueryResponseInfo, StagingXcmV4Response, StagingXcmV4TraitsOutcome, StagingXcmV4Xcm, XcmDoubleEncoded, XcmRuntimeApisConversionsError, XcmRuntimeApisDryRunCallDryRunEffects, XcmRuntimeApisDryRunError, XcmRuntimeApisDryRunXcmDryRunEffects, XcmRuntimeApisFeesError, XcmV2BodyId, XcmV2BodyPart, XcmV2Instruction, XcmV2Junction, XcmV2MultiAsset, XcmV2MultiLocation, XcmV2MultiassetAssetId, XcmV2MultiassetAssetInstance, XcmV2MultiassetFungibility, XcmV2MultiassetMultiAssetFilter, XcmV2MultiassetMultiAssets, XcmV2MultiassetWildFungibility, XcmV2MultiassetWildMultiAsset, XcmV2MultilocationJunctions, XcmV2NetworkId, XcmV2OriginKind, XcmV2Response, XcmV2TraitsError, XcmV2WeightLimit, XcmV2Xcm, XcmV3Instruction, XcmV3Junction, XcmV3JunctionBodyId, XcmV3JunctionBodyPart, XcmV3JunctionNetworkId, XcmV3Junctions, XcmV3MaybeErrorCode, XcmV3MultiAsset, XcmV3MultiassetAssetId, XcmV3MultiassetAssetInstance, XcmV3MultiassetFungibility, XcmV3MultiassetMultiAssetFilter, XcmV3MultiassetMultiAssets, XcmV3MultiassetWildFungibility, XcmV3MultiassetWildMultiAsset, XcmV3OriginKind, XcmV3PalletInfo, XcmV3QueryResponseInfo, XcmV3Response, XcmV3TraitsError, XcmV3WeightLimit, XcmV3Xcm, XcmVersionedAssetId, XcmVersionedAssets, XcmVersionedLocation, XcmVersionedResponse, XcmVersionedXcm } from '@polkadot/types/lookup';

declare module '@polkadot/types/types/registry' {
  interface InterfaceTypes {
    BinaryHeapEnqueuedOrder: BinaryHeapEnqueuedOrder;
    BinaryHeapReverseQueueIndex: BinaryHeapReverseQueueIndex;
    BitvecOrderLsb0: BitvecOrderLsb0;
    FrameSupportDispatchDispatchInfo: FrameSupportDispatchDispatchInfo;
    PalletReferendaReferendumInfo: PalletReferendaReferendumInfo;
    PalletReferendaReferendumStatus: PalletReferendaReferendumStatus;
    PalletReferendaTrackInfo: PalletReferendaTrackInfo;
    PalletTransactionPaymentChargeTransactionPayment: PalletTransactionPaymentChargeTransactionPayment;
    PalletXcmCall: PalletXcmCall;
    PalletXcmError: PalletXcmError;
    PalletXcmEvent: PalletXcmEvent;
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
    PolkadotPrimitivesV8AsyncBackingBackingState: PolkadotPrimitivesV8AsyncBackingBackingState;
    PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability: PolkadotPrimitivesV8AsyncBackingCandidatePendingAvailability;
    PolkadotPrimitivesV8AsyncBackingConstraints: PolkadotPrimitivesV8AsyncBackingConstraints;
    PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations: PolkadotPrimitivesV8AsyncBackingInboundHrmpLimitations;
    PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations: PolkadotPrimitivesV8AsyncBackingOutboundHrmpChannelLimitations;
    PolkadotPrimitivesV8BackedCandidate: PolkadotPrimitivesV8BackedCandidate;
    PolkadotPrimitivesV8CandidateCommitments: PolkadotPrimitivesV8CandidateCommitments;
    PolkadotPrimitivesV8CandidateDescriptor: PolkadotPrimitivesV8CandidateDescriptor;
    PolkadotPrimitivesV8CandidateEvent: PolkadotPrimitivesV8CandidateEvent;
    PolkadotPrimitivesV8CandidateReceipt: PolkadotPrimitivesV8CandidateReceipt;
    PolkadotPrimitivesV8CollatorAppPublic: PolkadotPrimitivesV8CollatorAppPublic;
    PolkadotPrimitivesV8CollatorAppSignature: PolkadotPrimitivesV8CollatorAppSignature;
    PolkadotPrimitivesV8CommittedCandidateReceipt: PolkadotPrimitivesV8CommittedCandidateReceipt;
    PolkadotPrimitivesV8CoreState: PolkadotPrimitivesV8CoreState;
    PolkadotPrimitivesV8DisputeState: PolkadotPrimitivesV8DisputeState;
    PolkadotPrimitivesV8DisputeStatement: PolkadotPrimitivesV8DisputeStatement;
    PolkadotPrimitivesV8DisputeStatementSet: PolkadotPrimitivesV8DisputeStatementSet;
    PolkadotPrimitivesV8ExecutorParams: PolkadotPrimitivesV8ExecutorParams;
    PolkadotPrimitivesV8ExecutorParamsExecutorParam: PolkadotPrimitivesV8ExecutorParamsExecutorParam;
    PolkadotPrimitivesV8GroupRotationInfo: PolkadotPrimitivesV8GroupRotationInfo;
    PolkadotPrimitivesV8IndexedVecGroupIndex: PolkadotPrimitivesV8IndexedVecGroupIndex;
    PolkadotPrimitivesV8IndexedVecValidatorIndex: PolkadotPrimitivesV8IndexedVecValidatorIndex;
    PolkadotPrimitivesV8InherentData: PolkadotPrimitivesV8InherentData;
    PolkadotPrimitivesV8InvalidDisputeStatementKind: PolkadotPrimitivesV8InvalidDisputeStatementKind;
    PolkadotPrimitivesV8OccupiedCore: PolkadotPrimitivesV8OccupiedCore;
    PolkadotPrimitivesV8OccupiedCoreAssumption: PolkadotPrimitivesV8OccupiedCoreAssumption;
    PolkadotPrimitivesV8PersistedValidationData: PolkadotPrimitivesV8PersistedValidationData;
    PolkadotPrimitivesV8PvfCheckStatement: PolkadotPrimitivesV8PvfCheckStatement;
    PolkadotPrimitivesV8PvfExecKind: PolkadotPrimitivesV8PvfExecKind;
    PolkadotPrimitivesV8PvfPrepKind: PolkadotPrimitivesV8PvfPrepKind;
    PolkadotPrimitivesV8ScheduledCore: PolkadotPrimitivesV8ScheduledCore;
    PolkadotPrimitivesV8SchedulerParams: PolkadotPrimitivesV8SchedulerParams;
    PolkadotPrimitivesV8ScrapedOnChainVotes: PolkadotPrimitivesV8ScrapedOnChainVotes;
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
    PolkadotRuntimeParachainsSchedulerPalletCoreOccupied: PolkadotRuntimeParachainsSchedulerPalletCoreOccupied;
    PolkadotRuntimeParachainsSchedulerPalletParasEntry: PolkadotRuntimeParachainsSchedulerPalletParasEntry;
    PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker: PolkadotRuntimeParachainsSharedAllowedRelayParentsTracker;
    PolkadotRuntimeParachainsSharedPalletCall: PolkadotRuntimeParachainsSharedPalletCall;
    PolkadotRuntimeProxyType: PolkadotRuntimeProxyType;
    PolkadotRuntimeRuntime: PolkadotRuntimeRuntime;
    PolkadotRuntimeRuntimeError: PolkadotRuntimeRuntimeError;
    PolkadotRuntimeRuntimeFreezeReason: PolkadotRuntimeRuntimeFreezeReason;
    PolkadotRuntimeRuntimeHoldReason: PolkadotRuntimeRuntimeHoldReason;
    PolkadotRuntimeSessionKeys: PolkadotRuntimeSessionKeys;
    RelayCommonApisInflationInfo: RelayCommonApisInflationInfo;
    SpCoreVoid: SpCoreVoid;
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
    StagingXcmV4TraitsOutcome: StagingXcmV4TraitsOutcome;
    StagingXcmV4Xcm: StagingXcmV4Xcm;
    XcmDoubleEncoded: XcmDoubleEncoded;
    XcmRuntimeApisConversionsError: XcmRuntimeApisConversionsError;
    XcmRuntimeApisDryRunCallDryRunEffects: XcmRuntimeApisDryRunCallDryRunEffects;
    XcmRuntimeApisDryRunError: XcmRuntimeApisDryRunError;
    XcmRuntimeApisDryRunXcmDryRunEffects: XcmRuntimeApisDryRunXcmDryRunEffects;
    XcmRuntimeApisFeesError: XcmRuntimeApisFeesError;
    XcmV2BodyId: XcmV2BodyId;
    XcmV2BodyPart: XcmV2BodyPart;
    XcmV2Instruction: XcmV2Instruction;
    XcmV2Junction: XcmV2Junction;
    XcmV2MultiAsset: XcmV2MultiAsset;
    XcmV2MultiLocation: XcmV2MultiLocation;
    XcmV2MultiassetAssetId: XcmV2MultiassetAssetId;
    XcmV2MultiassetAssetInstance: XcmV2MultiassetAssetInstance;
    XcmV2MultiassetFungibility: XcmV2MultiassetFungibility;
    XcmV2MultiassetMultiAssetFilter: XcmV2MultiassetMultiAssetFilter;
    XcmV2MultiassetMultiAssets: XcmV2MultiassetMultiAssets;
    XcmV2MultiassetWildFungibility: XcmV2MultiassetWildFungibility;
    XcmV2MultiassetWildMultiAsset: XcmV2MultiassetWildMultiAsset;
    XcmV2MultilocationJunctions: XcmV2MultilocationJunctions;
    XcmV2NetworkId: XcmV2NetworkId;
    XcmV2OriginKind: XcmV2OriginKind;
    XcmV2Response: XcmV2Response;
    XcmV2TraitsError: XcmV2TraitsError;
    XcmV2WeightLimit: XcmV2WeightLimit;
    XcmV2Xcm: XcmV2Xcm;
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
    XcmV3WeightLimit: XcmV3WeightLimit;
    XcmV3Xcm: XcmV3Xcm;
    XcmVersionedAssetId: XcmVersionedAssetId;
    XcmVersionedAssets: XcmVersionedAssets;
    XcmVersionedLocation: XcmVersionedLocation;
    XcmVersionedResponse: XcmVersionedResponse;
    XcmVersionedXcm: XcmVersionedXcm;
  } // InterfaceTypes
} // declare module
