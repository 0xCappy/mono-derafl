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
          nextToken
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
        }
        DrawnTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
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
        }
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
      }
      createdAt
      updatedAt
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
        }
        createdAt
        updatedAt
        ticketRefundRaffleId
        ticketRefundTxId
      }
      nextToken
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
      }
      nextToken
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
      }
      purchaser
      ticketsBought
      batchId
      firstTicket
      raffleID
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
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        raffleID
        ticketBatchTransactionId
      }
      nextToken
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
      }
      nextToken
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
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleID
          ticketBatchTransactionId
        }
        nextToken
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
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        raffleID
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
      }
      DrawnTx {
        id
        createdAt
        updatedAt
        date
        eventType
        hash
        chainId
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
        }
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
      }
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
          nextToken
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
        }
        DrawnTx {
          id
          createdAt
          updatedAt
          date
          eventType
          hash
          chainId
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
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNFTId
        raffleRefundTxId
      }
      nextToken
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
      }
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
        }
        nFTCollectionId
      }
      nextToken
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
      }
      nextToken
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
      }
      nextToken
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
        }
        purchaser
        ticketsBought
        batchId
        firstTicket
        raffleID
        ticketBatchTransactionId
      }
      nextToken
    }
  }
`;
