import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerTicketRefund = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketRefund, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly ethAmount?: number | null;
  readonly refundee?: string | null;
  readonly chainId: string;
  readonly raffle?: Raffle | null;
  readonly tx?: Transaction | null;
  readonly ticketRefundRaffleId?: string | null;
  readonly ticketRefundTxId?: string | null;
}

type LazyTicketRefund = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketRefund, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly ethAmount?: number | null;
  readonly refundee?: string | null;
  readonly chainId: string;
  readonly raffle: AsyncItem<Raffle | undefined>;
  readonly tx: AsyncItem<Transaction | undefined>;
  readonly ticketRefundRaffleId?: string | null;
  readonly ticketRefundTxId?: string | null;
}

export declare type TicketRefund = LazyLoading extends LazyLoadingDisabled ? EagerTicketRefund : LazyTicketRefund

export declare const TicketRefund: (new (init: ModelInit<TicketRefund>) => TicketRefund) & {
  copyOf(source: TicketRefund, mutator: (draft: MutableModel<TicketRefund>) => MutableModel<TicketRefund> | void): TicketRefund;
}

type EagerStat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stat, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly ethPaid?: number | null;
  readonly ticketsBought?: number | null;
  readonly royaltiesPaid?: number | null;
  readonly chainId: string;
  readonly rafflesCreated?: number | null;
}

type LazyStat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stat, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly ethPaid?: number | null;
  readonly ticketsBought?: number | null;
  readonly royaltiesPaid?: number | null;
  readonly chainId: string;
  readonly rafflesCreated?: number | null;
}

export declare type Stat = LazyLoading extends LazyLoadingDisabled ? EagerStat : LazyStat

export declare const Stat: (new (init: ModelInit<Stat>) => Stat) & {
  copyOf(source: Stat, mutator: (draft: MutableModel<Stat>) => MutableModel<Stat> | void): Stat;
}

type EagerTicketBatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketBatch, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly lastTicket: number;
  readonly transaction: Transaction;
  readonly purchaser: string;
  readonly ticketsBought: number;
  readonly batchId: number;
  readonly firstTicket: number;
  readonly chainId: string;
  readonly raffle?: Raffle | null;
  readonly ticketBatchTransactionId: string;
  readonly ticketBatchRaffleId?: string | null;
}

type LazyTicketBatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketBatch, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly lastTicket: number;
  readonly transaction: AsyncItem<Transaction>;
  readonly purchaser: string;
  readonly ticketsBought: number;
  readonly batchId: number;
  readonly firstTicket: number;
  readonly chainId: string;
  readonly raffle: AsyncItem<Raffle | undefined>;
  readonly ticketBatchTransactionId: string;
  readonly ticketBatchRaffleId?: string | null;
}

export declare type TicketBatch = LazyLoading extends LazyLoadingDisabled ? EagerTicketBatch : LazyTicketBatch

export declare const TicketBatch: (new (init: ModelInit<TicketBatch>) => TicketBatch) & {
  copyOf(source: TicketBatch, mutator: (draft: MutableModel<TicketBatch>) => MutableModel<TicketBatch> | void): TicketBatch;
}

type EagerTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly date: string;
  readonly eventType: number;
  readonly hash: string;
  readonly chainId: string;
}

type LazyTransaction = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Transaction, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly date: string;
  readonly eventType: number;
  readonly hash: string;
  readonly chainId: string;
}

export declare type Transaction = LazyLoading extends LazyLoadingDisabled ? EagerTransaction : LazyTransaction

export declare const Transaction: (new (init: ModelInit<Transaction>) => Transaction) & {
  copyOf(source: Transaction, mutator: (draft: MutableModel<Transaction>) => MutableModel<Transaction> | void): Transaction;
}

type EagerRaffle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Raffle, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly ticketsAvailable: number;
  readonly winningBatch?: TicketBatch | null;
  readonly releaseTx?: Transaction | null;
  readonly progress: number;
  readonly openTx?: Transaction | null;
  readonly drawnTx?: Transaction | null;
  readonly state: number;
  readonly tokenId: string;
  readonly expires: string;
  readonly nftAddress: string;
  readonly ticketsSold: number;
  readonly ticketBatches?: number | null;
  readonly winningTicket?: number | null;
  readonly closeTx?: Transaction | null;
  readonly chainId: string;
  readonly winningAccount?: string | null;
  readonly owner: string;
  readonly contract: string;
  readonly nft: NFT;
  readonly refundTx?: Transaction | null;
  readonly raffleWinningBatchId?: string | null;
  readonly raffleReleaseTxId?: string | null;
  readonly raffleOpenTxId?: string | null;
  readonly raffleDrawnTxId?: string | null;
  readonly raffleCloseTxId?: string | null;
  readonly raffleNftId: string;
  readonly raffleRefundTxId?: string | null;
}

type LazyRaffle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Raffle, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly raffleNonce: number;
  readonly ticketsAvailable: number;
  readonly winningBatch: AsyncItem<TicketBatch | undefined>;
  readonly releaseTx: AsyncItem<Transaction | undefined>;
  readonly progress: number;
  readonly openTx: AsyncItem<Transaction | undefined>;
  readonly drawnTx: AsyncItem<Transaction | undefined>;
  readonly state: number;
  readonly tokenId: string;
  readonly expires: string;
  readonly nftAddress: string;
  readonly ticketsSold: number;
  readonly ticketBatches?: number | null;
  readonly winningTicket?: number | null;
  readonly closeTx: AsyncItem<Transaction | undefined>;
  readonly chainId: string;
  readonly winningAccount?: string | null;
  readonly owner: string;
  readonly contract: string;
  readonly nft: AsyncItem<NFT>;
  readonly refundTx: AsyncItem<Transaction | undefined>;
  readonly raffleWinningBatchId?: string | null;
  readonly raffleReleaseTxId?: string | null;
  readonly raffleOpenTxId?: string | null;
  readonly raffleDrawnTxId?: string | null;
  readonly raffleCloseTxId?: string | null;
  readonly raffleNftId: string;
  readonly raffleRefundTxId?: string | null;
}

export declare type Raffle = LazyLoading extends LazyLoadingDisabled ? EagerRaffle : LazyRaffle

export declare const Raffle: (new (init: ModelInit<Raffle>) => Raffle) & {
  copyOf(source: Raffle, mutator: (draft: MutableModel<Raffle>) => MutableModel<Raffle> | void): Raffle;
}

type EagerNFT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NFT, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly contractAddress: string;
  readonly metadata: string;
  readonly tokenUri?: string | null;
  readonly tokenId: string;
  readonly symbol?: string | null;
  readonly imageUri?: string | null;
  readonly tokenName: string;
  readonly collectionName: string;
  readonly lastSales?: string | null;
  readonly chainId: string;
  readonly rarityData?: string | null;
  readonly collection: Collection;
  readonly nFTCollectionId: string;
}

type LazyNFT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NFT, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly contractAddress: string;
  readonly metadata: string;
  readonly tokenUri?: string | null;
  readonly tokenId: string;
  readonly symbol?: string | null;
  readonly imageUri?: string | null;
  readonly tokenName: string;
  readonly collectionName: string;
  readonly lastSales?: string | null;
  readonly chainId: string;
  readonly rarityData?: string | null;
  readonly collection: AsyncItem<Collection>;
  readonly nFTCollectionId: string;
}

export declare type NFT = LazyLoading extends LazyLoadingDisabled ? EagerNFT : LazyNFT

export declare const NFT: (new (init: ModelInit<NFT>) => NFT) & {
  copyOf(source: NFT, mutator: (draft: MutableModel<NFT>) => MutableModel<NFT> | void): NFT;
}

type EagerCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly contractAddress: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly symbol?: string | null;
  readonly rafflesCreated?: number | null;
  readonly contractDeployer?: string | null;
  readonly deployedBlockNumber?: number | null;
  readonly tokenType: string;
  readonly totalSupply?: string | null;
  readonly chainId: string;
  readonly name: string;
  readonly openseaSlug?: string | null;
  readonly imageUrl?: string | null;
  readonly externalUrl?: string | null;
  readonly discordUrl?: string | null;
  readonly twitterUsername?: string | null;
  readonly description?: string | null;
  readonly floorPrice?: number | null;
}

type LazyCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly contractAddress: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly symbol?: string | null;
  readonly rafflesCreated?: number | null;
  readonly contractDeployer?: string | null;
  readonly deployedBlockNumber?: number | null;
  readonly tokenType: string;
  readonly totalSupply?: string | null;
  readonly chainId: string;
  readonly name: string;
  readonly openseaSlug?: string | null;
  readonly imageUrl?: string | null;
  readonly externalUrl?: string | null;
  readonly discordUrl?: string | null;
  readonly twitterUsername?: string | null;
  readonly description?: string | null;
  readonly floorPrice?: number | null;
}

export declare type Collection = LazyLoading extends LazyLoadingDisabled ? EagerCollection : LazyCollection

export declare const Collection: (new (init: ModelInit<Collection>) => Collection) & {
  copyOf(source: Collection, mutator: (draft: MutableModel<Collection>) => MutableModel<Collection> | void): Collection;
}

type EagerAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly address: string;
  readonly rafflesCreated: number;
  readonly rafflesWon: number;
  readonly rafflesEntered: number;
  readonly ticketsBought: number;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
  };
  readonly id: string;
  readonly type: string;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly address: string;
  readonly rafflesCreated: number;
  readonly rafflesWon: number;
  readonly rafflesEntered: number;
  readonly ticketsBought: number;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}