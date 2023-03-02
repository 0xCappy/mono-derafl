import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerTicketRefund = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketRefund, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ethAmount?: number | null;
  readonly refundee?: string | null;
  readonly Raffle?: Raffle | null;
  readonly tx?: Transaction | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketRefundRaffleId?: string | null;
  readonly ticketRefundTxId?: string | null;
}

type LazyTicketRefund = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketRefund, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ethAmount?: number | null;
  readonly refundee?: string | null;
  readonly Raffle: AsyncItem<Raffle | undefined>;
  readonly tx: AsyncItem<Transaction | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ethPaid?: number | null;
  readonly ticketsBought?: number | null;
  readonly royaltiesPaid?: number | null;
  readonly chainId: string;
  readonly rafflesCreated?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Stat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly ethPaid?: number | null;
  readonly ticketsBought?: number | null;
  readonly royaltiesPaid?: number | null;
  readonly chainId: string;
  readonly rafflesCreated?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lastTicket: number;
  readonly Transaction: Transaction;
  readonly purchaser: string;
  readonly ticketsBought: number;
  readonly batchId: number;
  readonly firstTicket: number;
  readonly raffleID: string;
  readonly ticketBatchTransactionId: string;
}

type LazyTicketBatch = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TicketBatch, 'id'>;
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly lastTicket: number;
  readonly Transaction: AsyncItem<Transaction>;
  readonly purchaser: string;
  readonly ticketsBought: number;
  readonly batchId: number;
  readonly firstTicket: number;
  readonly raffleID: string;
  readonly ticketBatchTransactionId: string;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketsAvailable: number;
  readonly raffleId: number;
  readonly TicketBatches?: (TicketBatch | null)[] | null;
  readonly WinningBatch?: TicketBatch | null;
  readonly ReleaseTx?: Transaction | null;
  readonly progress: number;
  readonly OpenTx?: Transaction | null;
  readonly DrawnTx?: Transaction | null;
  readonly state: number;
  readonly tokenId: string;
  readonly expires: string;
  readonly nftAddress: string;
  readonly ticketsSold: number;
  readonly ticketBatches?: number | null;
  readonly winningTicket?: number | null;
  readonly CloseTx?: Transaction | null;
  readonly chainId: string;
  readonly winningAccount?: string | null;
  readonly owner: string;
  readonly contract: string;
  readonly NFT?: NFT | null;
  readonly RefundTx?: Transaction | null;
  readonly raffleWinningBatchId?: string | null;
  readonly raffleReleaseTxId?: string | null;
  readonly raffleOpenTxId?: string | null;
  readonly raffleDrawnTxId?: string | null;
  readonly raffleCloseTxId?: string | null;
  readonly raffleNFTId?: string | null;
  readonly raffleRefundTxId?: string | null;
}

type LazyRaffle = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Raffle, 'id'>;
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly ticketsAvailable: number;
  readonly raffleId: number;
  readonly TicketBatches: AsyncCollection<TicketBatch>;
  readonly WinningBatch: AsyncItem<TicketBatch | undefined>;
  readonly ReleaseTx: AsyncItem<Transaction | undefined>;
  readonly progress: number;
  readonly OpenTx: AsyncItem<Transaction | undefined>;
  readonly DrawnTx: AsyncItem<Transaction | undefined>;
  readonly state: number;
  readonly tokenId: string;
  readonly expires: string;
  readonly nftAddress: string;
  readonly ticketsSold: number;
  readonly ticketBatches?: number | null;
  readonly winningTicket?: number | null;
  readonly CloseTx: AsyncItem<Transaction | undefined>;
  readonly chainId: string;
  readonly winningAccount?: string | null;
  readonly owner: string;
  readonly contract: string;
  readonly NFT: AsyncItem<NFT | undefined>;
  readonly RefundTx: AsyncItem<Transaction | undefined>;
  readonly raffleWinningBatchId?: string | null;
  readonly raffleReleaseTxId?: string | null;
  readonly raffleOpenTxId?: string | null;
  readonly raffleDrawnTxId?: string | null;
  readonly raffleCloseTxId?: string | null;
  readonly raffleNFTId?: string | null;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly Collection?: Collection | null;
  readonly nFTCollectionId?: string | null;
}

type LazyNFT = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NFT, 'id'>;
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
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
  readonly Collection: AsyncItem<Collection | undefined>;
  readonly nFTCollectionId?: string | null;
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
  readonly contractAddress: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly symbol?: string | null;
  readonly rafflesCreated?: number | null;
  readonly contractDeployer?: string | null;
  readonly deployedBlockNumber?: number | null;
  readonly tokenType: string;
  readonly totalSupply?: string | null;
  readonly chainId: string;
}

type LazyCollection = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Collection, 'id'>;
  };
  readonly id: string;
  readonly contractAddress: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly symbol?: string | null;
  readonly rafflesCreated?: number | null;
  readonly contractDeployer?: string | null;
  readonly deployedBlockNumber?: number | null;
  readonly tokenType: string;
  readonly totalSupply?: string | null;
  readonly chainId: string;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly address: string;
  readonly rafflesCreated?: number | null;
  readonly rafflesWon?: number | null;
  readonly rafflesEntered?: number | null;
  readonly ticketsBought?: number | null;
}

type LazyAccount = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Account, 'id'>;
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly address: string;
  readonly rafflesCreated?: number | null;
  readonly rafflesWon?: number | null;
  readonly rafflesEntered?: number | null;
  readonly ticketsBought?: number | null;
}

export declare type Account = LazyLoading extends LazyLoadingDisabled ? EagerAccount : LazyAccount

export declare const Account: (new (init: ModelInit<Account>) => Account) & {
  copyOf(source: Account, mutator: (draft: MutableModel<Account>) => MutableModel<Account> | void): Account;
}