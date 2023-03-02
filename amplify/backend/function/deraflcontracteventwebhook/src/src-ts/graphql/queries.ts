/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTicketRefund = /* GraphQL */ `
  query GetTicketRefund($id: ID!) {
    getTicketRefund(id: $id) {
      id
      ethAmount
      refundee
      Raffle {
        id
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        TicketBatches {
          items {
            id
            createdAt
            updatedAt
            lastTicket
            purchaser
            ticketsBought
            batchId
            firstTicket
            raffleID
            _version
            _deleted
            _lastChangedAt
            ticketBatchTransactionId
          }
          nextToken
          startedAt
        }
        WinningBatch {
          id
          createdAt
          updatedAt
          lastTicket
          Transaction {
            id
            createdAt
            updatedAt
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
          raffleID
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
        }
        ReleaseTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        OpenTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        DrawnTx {
          id
          createdAt
          updatedAt
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
        CloseTx {
          id
          createdAt
          updatedAt
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
        NFT {
          id
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
          Collection {
            id
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
        RefundTx {
          id
          createdAt
          updatedAt
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
        raffleNFTId
        raffleRefundTxId
      }
      tx {
        id
        createdAt
        updatedAt
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
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
        ethAmount
        refundee
        Raffle {
          id
          createdAt
          updatedAt
          ticketsAvailable
          raffleId
          TicketBatches {
            nextToken
            startedAt
          }
          WinningBatch {
            id
            createdAt
            updatedAt
            lastTicket
            purchaser
            ticketsBought
            batchId
            firstTicket
            raffleID
            _version
            _deleted
            _lastChangedAt
            ticketBatchTransactionId
          }
          ReleaseTx {
            id
            createdAt
            updatedAt
            date
            eventType
            hash
            chainId
            _version
            _deleted
            _lastChangedAt
          }
          progress
          OpenTx {
            id
            createdAt
            updatedAt
            date
            eventType
            hash
            chainId
            _version
            _deleted
            _lastChangedAt
          }
          DrawnTx {
            id
            createdAt
            updatedAt
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
          CloseTx {
            id
            createdAt
            updatedAt
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
          NFT {
            id
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
          RefundTx {
            id
            createdAt
            updatedAt
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
          raffleNFTId
          raffleRefundTxId
        }
        tx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
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
        ethAmount
        refundee
        Raffle {
          id
          createdAt
          updatedAt
          ticketsAvailable
          raffleId
          TicketBatches {
            nextToken
            startedAt
          }
          WinningBatch {
            id
            createdAt
            updatedAt
            lastTicket
            purchaser
            ticketsBought
            batchId
            firstTicket
            raffleID
            _version
            _deleted
            _lastChangedAt
            ticketBatchTransactionId
          }
          ReleaseTx {
            id
            createdAt
            updatedAt
            date
            eventType
            hash
            chainId
            _version
            _deleted
            _lastChangedAt
          }
          progress
          OpenTx {
            id
            createdAt
            updatedAt
            date
            eventType
            hash
            chainId
            _version
            _deleted
            _lastChangedAt
          }
          DrawnTx {
            id
            createdAt
            updatedAt
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
          CloseTx {
            id
            createdAt
            updatedAt
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
          NFT {
            id
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
          RefundTx {
            id
            createdAt
            updatedAt
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
          raffleNFTId
          raffleRefundTxId
        }
        tx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
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
      ethPaid
      ticketsBought
      royaltiesPaid
      chainId
      rafflesCreated
      createdAt
      updatedAt
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
        ethPaid
        ticketsBought
        royaltiesPaid
        chainId
        rafflesCreated
        createdAt
        updatedAt
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
        ethPaid
        ticketsBought
        royaltiesPaid
        chainId
        rafflesCreated
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      lastTicket
      Transaction {
        id
        createdAt
        updatedAt
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
      raffleID
      _version
      _deleted
      _lastChangedAt
      ticketBatchTransactionId
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
        createdAt
        updatedAt
        lastTicket
        Transaction {
          id
          createdAt
          updatedAt
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
        raffleID
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
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
        createdAt
        updatedAt
        lastTicket
        Transaction {
          id
          createdAt
          updatedAt
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
        raffleID
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
      }
      nextToken
      startedAt
    }
  }
`;
export const ticketBatchesByRaffleID = /* GraphQL */ `
  query TicketBatchesByRaffleID(
    $raffleID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTicketBatchFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ticketBatchesByRaffleID(
      raffleID: $raffleID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        updatedAt
        lastTicket
        Transaction {
          id
          createdAt
          updatedAt
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
        raffleID
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTransaction = /* GraphQL */ `
  query GetTransaction($id: ID!) {
    getTransaction(id: $id) {
      id
      createdAt
      updatedAt
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
        createdAt
        updatedAt
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
        createdAt
        updatedAt
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
      createdAt
      updatedAt
      ticketsAvailable
      raffleId
      TicketBatches {
        items {
          id
          createdAt
          updatedAt
          lastTicket
          Transaction {
            id
            createdAt
            updatedAt
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
          raffleID
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
        }
        nextToken
        startedAt
      }
      WinningBatch {
        id
        createdAt
        updatedAt
        lastTicket
        Transaction {
          id
          createdAt
          updatedAt
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
        raffleID
        _version
        _deleted
        _lastChangedAt
        ticketBatchTransactionId
      }
      ReleaseTx {
        id
        createdAt
        updatedAt
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      progress
      OpenTx {
        id
        createdAt
        updatedAt
        date
        eventType
        hash
        chainId
        _version
        _deleted
        _lastChangedAt
      }
      DrawnTx {
        id
        createdAt
        updatedAt
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
      CloseTx {
        id
        createdAt
        updatedAt
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
      NFT {
        id
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
        Collection {
          id
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
      RefundTx {
        id
        createdAt
        updatedAt
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
      raffleNFTId
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
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        TicketBatches {
          items {
            id
            createdAt
            updatedAt
            lastTicket
            purchaser
            ticketsBought
            batchId
            firstTicket
            raffleID
            _version
            _deleted
            _lastChangedAt
            ticketBatchTransactionId
          }
          nextToken
          startedAt
        }
        WinningBatch {
          id
          createdAt
          updatedAt
          lastTicket
          Transaction {
            id
            createdAt
            updatedAt
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
          raffleID
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
        }
        ReleaseTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        OpenTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        DrawnTx {
          id
          createdAt
          updatedAt
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
        CloseTx {
          id
          createdAt
          updatedAt
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
        NFT {
          id
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
          Collection {
            id
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
        RefundTx {
          id
          createdAt
          updatedAt
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
        raffleNFTId
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
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        TicketBatches {
          items {
            id
            createdAt
            updatedAt
            lastTicket
            purchaser
            ticketsBought
            batchId
            firstTicket
            raffleID
            _version
            _deleted
            _lastChangedAt
            ticketBatchTransactionId
          }
          nextToken
          startedAt
        }
        WinningBatch {
          id
          createdAt
          updatedAt
          lastTicket
          Transaction {
            id
            createdAt
            updatedAt
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
          raffleID
          _version
          _deleted
          _lastChangedAt
          ticketBatchTransactionId
        }
        ReleaseTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        progress
        OpenTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
          _version
          _deleted
          _lastChangedAt
        }
        DrawnTx {
          id
          createdAt
          updatedAt
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
        CloseTx {
          id
          createdAt
          updatedAt
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
        NFT {
          id
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
          Collection {
            id
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
        RefundTx {
          id
          createdAt
          updatedAt
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
        raffleNFTId
        raffleRefundTxId
      }
      nextToken
      startedAt
    }
  }
`;
export const getNFT = /* GraphQL */ `
  query GetNFT($id: ID!) {
    getNFT(id: $id) {
      id
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
      Collection {
        id
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
        Collection {
          id
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
        Collection {
          id
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
