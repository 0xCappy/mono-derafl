"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAccounts = exports.accountsByCreatedAt = exports.accountsByUpdatedAt = exports.accountsByRafflesCreated = exports.accountsByRafflesWon = exports.accountsByRafflesEntered = exports.accountsByTicketsBought = exports.syncAccounts = exports.listAccounts = exports.getAccount = exports.syncCollections = exports.listCollections = exports.getCollection = exports.syncNFTS = exports.listNFTS = exports.getNFT = exports.searchRaffles = exports.rafflesByTicketsSold = exports.rafflesByExpires = exports.rafflesByTicketsAvailable = exports.rafflesByProgress = exports.rafflesByUpdatedAt = exports.rafflesByCreatedAt = exports.syncRaffles = exports.listRaffles = exports.getRaffle = exports.syncTransactions = exports.listTransactions = exports.getTransaction = exports.searchTicketBatches = exports.ticketBatchesByTicketsBought = exports.ticketBatchesByUpdatedAt = exports.ticketBatchesByCreatedAt = exports.syncTicketBatches = exports.listTicketBatches = exports.getTicketBatch = exports.syncStats = exports.listStats = exports.getStat = exports.syncTicketRefunds = exports.listTicketRefunds = exports.getTicketRefund = void 0;
exports.getTicketRefund = `
  query GetTicketRefund($id: ID!) {
    getTicketRefund(id: $id) {
      id
      type
      createdAt
      updatedAt
      raffleNonce
      ethAmount
      refundee
      chainId
      raffle {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      tx {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      ticketRefundRaffleId
      ticketRefundTxId
    }
  }
`;
exports.listTicketRefunds = `
  query ListTicketRefunds(
    $filter: ModelTicketRefundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTicketRefunds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ethAmount
        refundee
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        tx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        ticketRefundRaffleId
        ticketRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncTicketRefunds = `
  query SyncTicketRefunds(
    $filter: ModelTicketRefundFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTicketRefunds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ethAmount
        refundee
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        tx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        ticketRefundRaffleId
        ticketRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.getStat = `
  query GetStat($id: ID!) {
    getStat(id: $id) {
      id
      type
      createdAt
      updatedAt
      ethPaid
      ticketsBought
      royaltiesPaid
      chainId
      rafflesCreated
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.listStats = `
  query ListStats(
    $filter: ModelStatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        ethPaid
        ticketsBought
        royaltiesPaid
        chainId
        rafflesCreated
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncStats = `
  query SyncStats(
    $filter: ModelStatFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        ethPaid
        ticketsBought
        royaltiesPaid
        chainId
        rafflesCreated
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.getTicketBatch = `
  query GetTicketBatch($id: ID!) {
    getTicketBatch(id: $id) {
      id
      type
      createdAt
      updatedAt
      raffleNonce
      lastTicket
      transaction {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      purchaser
      ticketsBought
      batchId
      firstTicket
      chainId
      raffle {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      _version
      _deleted
      _lastChangedAt
      ticketBatchTransactionId
      ticketBatchRaffleId
    }
  }
`;
exports.listTicketBatches = `
  query ListTicketBatches(
    $filter: ModelTicketBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTicketBatches(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncTicketBatches = `
  query SyncTicketBatches(
    $filter: ModelTicketBatchFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTicketBatches(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      nextToken
      startedAt
    }
  }
`;
exports.ticketBatchesByCreatedAt = `
  query TicketBatchesByCreatedAt(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTicketBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketBatchesByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      nextToken
      startedAt
    }
  }
`;
exports.ticketBatchesByUpdatedAt = `
  query TicketBatchesByUpdatedAt(
    $type: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTicketBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketBatchesByUpdatedAt(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      nextToken
      startedAt
    }
  }
`;
exports.ticketBatchesByTicketsBought = `
  query TicketBatchesByTicketsBought(
    $type: String!
    $ticketsBought: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelTicketBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketBatchesByTicketsBought(
      type: $type
      ticketsBought: $ticketsBought
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      nextToken
      startedAt
    }
  }
`;
exports.searchTicketBatches = `
  query SearchTicketBatches(
    $filter: SearchableTicketBatchFilterInput
    $sort: [SearchableTicketBatchSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableTicketBatchAggregationInput]
  ) {
    searchTicketBatches(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
exports.getTransaction = `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      type
      createdAt
      updatedAt
      raffleNonce
      date
      eventType
      hash
      chainId
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.listTransactions = `
  query ListTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTransactions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncTransactions = `
  query SyncTransactions(
    $filter: ModelTransactionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTransactions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.getRaffle = `
  query GetRaffle($id: ID!) {
    getRaffle(id: $id) {
      id
      type
      createdAt
      updatedAt
      raffleNonce
      ticketsAvailable
      winningBatch {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        lastTicket
        transaction {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        chainId
        raffle {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          ticketsAvailable
          progress
          state
          tokenId
          expires
          nftAddress
          ticketsSold
          ticketBatches
          winningTicket
          chainId
          winningAccount
          owner
          contract
          _version
          _deleted
          _lastChangedAt
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
        ticketBatchRaffleId
      }
      releaseTx {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      progress
      openTx {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      drawnTx {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      state
      tokenId
      expires
      nftAddress
      ticketsSold
      ticketBatches
      winningTicket
      closeTx {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      chainId
      winningAccount
      owner
      contract
      nft {
        id
        type
        createdAt
        updatedAt
        contractAddress
        metadata
        tokenUri
        tokenId
        symbol
        imageUri
        tokenName
        collectionName
        lastSales
        chainId
        rarityData
        collection {
          id
          type
          contractAddress
          createdAt
          updatedAt
          symbol
          rafflesCreated
          contractDeployer
          deployedBlockNumber
          tokenType
          totalSupply
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        nFTCollectionId
      }
      refundTx {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
    }
  }
`;
exports.listRaffles = `
  query ListRaffles(
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRaffles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncRaffles = `
  query SyncRaffles(
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRaffles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.rafflesByCreatedAt = `
  query RafflesByCreatedAt(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rafflesByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.rafflesByUpdatedAt = `
  query RafflesByUpdatedAt(
    $type: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rafflesByUpdatedAt(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.rafflesByProgress = `
  query RafflesByProgress(
    $type: String!
    $progress: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rafflesByProgress(
      type: $type
      progress: $progress
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.rafflesByTicketsAvailable = `
  query RafflesByTicketsAvailable(
    $type: String!
    $ticketsAvailable: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rafflesByTicketsAvailable(
      type: $type
      ticketsAvailable: $ticketsAvailable
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.rafflesByExpires = `
  query RafflesByExpires(
    $type: String!
    $expires: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rafflesByExpires(
      type: $type
      expires: $expires
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.rafflesByTicketsSold = `
  query RafflesByTicketsSold(
    $type: String!
    $ticketsSold: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRaffleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    rafflesByTicketsSold(
      type: $type
      ticketsSold: $ticketsSold
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
exports.searchRaffles = `
  query SearchRaffles(
    $filter: SearchableRaffleFilterInput
    $sort: [SearchableRaffleSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableRaffleAggregationInput]
  ) {
    searchRaffles(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        raffleNonce
        ticketsAvailable
        winningBatch {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          chainId
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
          ticketBatchRaffleId
        }
        releaseTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        openTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        drawnTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        state
        tokenId
        expires
        nftAddress
        ticketsSold
        ticketBatches
        winningTicket
        closeTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        chainId
        winningAccount
        owner
        contract
        nft {
          id
          type
          createdAt
          updatedAt
          contractAddress
          metadata
          tokenUri
          tokenId
          symbol
          imageUri
          tokenName
          collectionName
          lastSales
          chainId
          rarityData
          _version
          _deleted
          _lastChangedAt
          nFTCollectionId
        }
        refundTx {
          id
          type
          createdAt
          updatedAt
          raffleNonce
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
exports.getNFT = `
  query GetNFT($id: ID!) {
    getNFT(id: $id) {
      id
      type
      createdAt
      updatedAt
      contractAddress
      metadata
      tokenUri
      tokenId
      symbol
      imageUri
      tokenName
      collectionName
      lastSales
      chainId
      rarityData
      collection {
        id
        type
        contractAddress
        createdAt
        updatedAt
        symbol
        rafflesCreated
        contractDeployer
        deployedBlockNumber
        tokenType
        totalSupply
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      _version
      _deleted
      _lastChangedAt
      nFTCollectionId
    }
  }
`;
exports.listNFTS = `
  query ListNFTS(
    $filter: ModelNFTFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNFTS(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        contractAddress
        metadata
        tokenUri
        tokenId
        symbol
        imageUri
        tokenName
        collectionName
        lastSales
        chainId
        rarityData
        collection {
          id
          type
          contractAddress
          createdAt
          updatedAt
          symbol
          rafflesCreated
          contractDeployer
          deployedBlockNumber
          tokenType
          totalSupply
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        nFTCollectionId
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncNFTS = `
  query SyncNFTS(
    $filter: ModelNFTFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNFTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        contractAddress
        metadata
        tokenUri
        tokenId
        symbol
        imageUri
        tokenName
        collectionName
        lastSales
        chainId
        rarityData
        collection {
          id
          type
          contractAddress
          createdAt
          updatedAt
          symbol
          rafflesCreated
          contractDeployer
          deployedBlockNumber
          tokenType
          totalSupply
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        _version
        _deleted
        _lastChangedAt
        nFTCollectionId
      }
      nextToken
      startedAt
    }
  }
`;
exports.getCollection = `
  query GetCollection($id: ID!) {
    getCollection(id: $id) {
      id
      type
      contractAddress
      createdAt
      updatedAt
      symbol
      rafflesCreated
      contractDeployer
      deployedBlockNumber
      tokenType
      totalSupply
      chainId
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.listCollections = `
  query ListCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCollections(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        contractAddress
        createdAt
        updatedAt
        symbol
        rafflesCreated
        contractDeployer
        deployedBlockNumber
        tokenType
        totalSupply
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncCollections = `
  query SyncCollections(
    $filter: ModelCollectionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCollections(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        contractAddress
        createdAt
        updatedAt
        symbol
        rafflesCreated
        contractDeployer
        deployedBlockNumber
        tokenType
        totalSupply
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.getAccount = `
  query GetAccount($id: ID!) {
    getAccount(id: $id) {
      id
      type
      createdAt
      updatedAt
      address
      rafflesCreated
      rafflesWon
      rafflesEntered
      ticketsBought
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
exports.listAccounts = `
  query ListAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAccounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.syncAccounts = `
  query SyncAccounts(
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAccounts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.accountsByTicketsBought = `
  query AccountsByTicketsBought(
    $type: String!
    $ticketsBought: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByTicketsBought(
      type: $type
      ticketsBought: $ticketsBought
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.accountsByRafflesEntered = `
  query AccountsByRafflesEntered(
    $type: String!
    $rafflesEntered: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByRafflesEntered(
      type: $type
      rafflesEntered: $rafflesEntered
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.accountsByRafflesWon = `
  query AccountsByRafflesWon(
    $type: String!
    $rafflesWon: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByRafflesWon(
      type: $type
      rafflesWon: $rafflesWon
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.accountsByRafflesCreated = `
  query AccountsByRafflesCreated(
    $type: String!
    $rafflesCreated: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByRafflesCreated(
      type: $type
      rafflesCreated: $rafflesCreated
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.accountsByUpdatedAt = `
  query AccountsByUpdatedAt(
    $type: String!
    $updatedAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByUpdatedAt(
      type: $type
      updatedAt: $updatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.accountsByCreatedAt = `
  query AccountsByCreatedAt(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelAccountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    accountsByCreatedAt(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
exports.searchAccounts = `
  query SearchAccounts(
    $filter: SearchableAccountFilterInput
    $sort: [SearchableAccountSortInput]
    $limit: Int
    $nextToken: String
    $from: Int
    $aggregates: [SearchableAccountAggregationInput]
  ) {
    searchAccounts(
      filter: $filter
      sort: $sort
      limit: $limit
      nextToken: $nextToken
      from: $from
      aggregates: $aggregates
    ) {
      items {
        id
        type
        createdAt
        updatedAt
        address
        rafflesCreated
        rafflesWon
        rafflesEntered
        ticketsBought
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      total
      aggregateItems {
        name
        result {
          ... on SearchableAggregateScalarResult {
            value
          }
          ... on SearchableAggregateBucketResult {
            buckets {
              key
              doc_count
            }
          }
        }
      }
    }
  }
`;
//# sourceMappingURL=queries.js.map