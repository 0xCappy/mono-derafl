/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicketRefund = /* GraphQL */ `
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
export const listTicketRefunds = /* GraphQL */ `
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
export const syncTicketRefunds = /* GraphQL */ `
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
export const getStat = /* GraphQL */ `
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
export const listStats = /* GraphQL */ `
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
export const syncStats = /* GraphQL */ `
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
export const getTicketBatch = /* GraphQL */ `
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
export const listTicketBatches = /* GraphQL */ `
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
export const syncTicketBatches = /* GraphQL */ `
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
export const ticketBatchesByCreatedAt = /* GraphQL */ `
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
export const ticketBatchesByUpdatedAt = /* GraphQL */ `
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
export const ticketBatchesByTicketsBought = /* GraphQL */ `
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
export const searchTicketBatches = /* GraphQL */ `
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
export const getTransaction = /* GraphQL */ `
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
export const listTransactions = /* GraphQL */ `
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
export const syncTransactions = /* GraphQL */ `
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
export const getRaffle = /* GraphQL */ `
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
export const listRaffles = /* GraphQL */ `
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
export const syncRaffles = /* GraphQL */ `
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
export const rafflesByCreatedAt = /* GraphQL */ `
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
export const rafflesByUpdatedAt = /* GraphQL */ `
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
export const rafflesByProgress = /* GraphQL */ `
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
export const rafflesByTicketsAvailable = /* GraphQL */ `
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
export const rafflesByExpires = /* GraphQL */ `
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
export const rafflesByTicketsSold = /* GraphQL */ `
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
export const searchRaffles = /* GraphQL */ `
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
export const getNFT = /* GraphQL */ `
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
export const listNFTS = /* GraphQL */ `
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
export const syncNFTS = /* GraphQL */ `
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
export const getCollection = /* GraphQL */ `
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
export const listCollections = /* GraphQL */ `
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
export const syncCollections = /* GraphQL */ `
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
export const getAccount = /* GraphQL */ `
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
export const listAccounts = /* GraphQL */ `
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
export const syncAccounts = /* GraphQL */ `
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
export const accountsByTicketsBought = /* GraphQL */ `
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
export const accountsByRafflesEntered = /* GraphQL */ `
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
export const accountsByRafflesWon = /* GraphQL */ `
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
export const accountsByRafflesCreated = /* GraphQL */ `
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
export const accountsByUpdatedAt = /* GraphQL */ `
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
export const accountsByCreatedAt = /* GraphQL */ `
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
export const searchAccounts = /* GraphQL */ `
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
