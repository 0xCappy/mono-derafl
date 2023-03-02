/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTicketRefund = /* GraphQL */ `
  subscription OnCreateTicketRefund(
    $filter: ModelSubscriptionTicketRefundFilterInput
  ) {
    onCreateTicketRefund(filter: $filter) {
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
export const onUpdateTicketRefund = /* GraphQL */ `
  subscription OnUpdateTicketRefund(
    $filter: ModelSubscriptionTicketRefundFilterInput
  ) {
    onUpdateTicketRefund(filter: $filter) {
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
export const onDeleteTicketRefund = /* GraphQL */ `
  subscription OnDeleteTicketRefund(
    $filter: ModelSubscriptionTicketRefundFilterInput
  ) {
    onDeleteTicketRefund(filter: $filter) {
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
export const onCreateStat = /* GraphQL */ `
  subscription OnCreateStat($filter: ModelSubscriptionStatFilterInput) {
    onCreateStat(filter: $filter) {
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
export const onUpdateStat = /* GraphQL */ `
  subscription OnUpdateStat($filter: ModelSubscriptionStatFilterInput) {
    onUpdateStat(filter: $filter) {
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
export const onDeleteStat = /* GraphQL */ `
  subscription OnDeleteStat($filter: ModelSubscriptionStatFilterInput) {
    onDeleteStat(filter: $filter) {
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
export const onCreateTicketBatch = /* GraphQL */ `
  subscription OnCreateTicketBatch(
    $filter: ModelSubscriptionTicketBatchFilterInput
  ) {
    onCreateTicketBatch(filter: $filter) {
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
export const onUpdateTicketBatch = /* GraphQL */ `
  subscription OnUpdateTicketBatch(
    $filter: ModelSubscriptionTicketBatchFilterInput
  ) {
    onUpdateTicketBatch(filter: $filter) {
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
export const onDeleteTicketBatch = /* GraphQL */ `
  subscription OnDeleteTicketBatch(
    $filter: ModelSubscriptionTicketBatchFilterInput
  ) {
    onDeleteTicketBatch(filter: $filter) {
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
export const onCreateTransaction = /* GraphQL */ `
  subscription OnCreateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onCreateTransaction(filter: $filter) {
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
export const onUpdateTransaction = /* GraphQL */ `
  subscription OnUpdateTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onUpdateTransaction(filter: $filter) {
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
export const onDeleteTransaction = /* GraphQL */ `
  subscription OnDeleteTransaction(
    $filter: ModelSubscriptionTransactionFilterInput
  ) {
    onDeleteTransaction(filter: $filter) {
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
export const onCreateRaffle = /* GraphQL */ `
  subscription OnCreateRaffle($filter: ModelSubscriptionRaffleFilterInput) {
    onCreateRaffle(filter: $filter) {
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
export const onUpdateRaffle = /* GraphQL */ `
  subscription OnUpdateRaffle($filter: ModelSubscriptionRaffleFilterInput) {
    onUpdateRaffle(filter: $filter) {
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
export const onDeleteRaffle = /* GraphQL */ `
  subscription OnDeleteRaffle($filter: ModelSubscriptionRaffleFilterInput) {
    onDeleteRaffle(filter: $filter) {
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
export const onCreateNFT = /* GraphQL */ `
  subscription OnCreateNFT($filter: ModelSubscriptionNFTFilterInput) {
    onCreateNFT(filter: $filter) {
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
export const onUpdateNFT = /* GraphQL */ `
  subscription OnUpdateNFT($filter: ModelSubscriptionNFTFilterInput) {
    onUpdateNFT(filter: $filter) {
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
export const onDeleteNFT = /* GraphQL */ `
  subscription OnDeleteNFT($filter: ModelSubscriptionNFTFilterInput) {
    onDeleteNFT(filter: $filter) {
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
export const onCreateCollection = /* GraphQL */ `
  subscription OnCreateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onCreateCollection(filter: $filter) {
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
export const onUpdateCollection = /* GraphQL */ `
  subscription OnUpdateCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onUpdateCollection(filter: $filter) {
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
export const onDeleteCollection = /* GraphQL */ `
  subscription OnDeleteCollection(
    $filter: ModelSubscriptionCollectionFilterInput
  ) {
    onDeleteCollection(filter: $filter) {
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
export const onCreateAccount = /* GraphQL */ `
  subscription OnCreateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onCreateAccount(filter: $filter) {
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
export const onUpdateAccount = /* GraphQL */ `
  subscription OnUpdateAccount($filter: ModelSubscriptionAccountFilterInput) {
    onUpdateAccount(filter: $filter) {
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
export const onDeleteAccount = /* GraphQL */ `
  subscription OnDeleteAccount($filter: ModelSubscriptionAccountFilterInput) {
    onDeleteAccount(filter: $filter) {
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
