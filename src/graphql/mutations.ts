/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTicketRefund = /* GraphQL */ `
  mutation CreateTicketRefund(
    $input: CreateTicketRefundInput!
    $condition: ModelTicketRefundConditionInput
  ) {
    createTicketRefund(input: $input, condition: $condition) {
      id
      type
      ethAmount
      refundee
      raffle {
        id
        type
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        winningBatch {
          id
          type
          createdAt
          updatedAt
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleId
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
export const updateTicketRefund = /* GraphQL */ `
  mutation UpdateTicketRefund(
    $input: UpdateTicketRefundInput!
    $condition: ModelTicketRefundConditionInput
  ) {
    updateTicketRefund(input: $input, condition: $condition) {
      id
      type
      ethAmount
      refundee
      raffle {
        id
        type
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        winningBatch {
          id
          type
          createdAt
          updatedAt
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleId
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
export const deleteTicketRefund = /* GraphQL */ `
  mutation DeleteTicketRefund(
    $input: DeleteTicketRefundInput!
    $condition: ModelTicketRefundConditionInput
  ) {
    deleteTicketRefund(input: $input, condition: $condition) {
      id
      type
      ethAmount
      refundee
      raffle {
        id
        type
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        winningBatch {
          id
          type
          createdAt
          updatedAt
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleId
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
export const createStat = /* GraphQL */ `
  mutation CreateStat(
    $input: CreateStatInput!
    $condition: ModelStatConditionInput
  ) {
    createStat(input: $input, condition: $condition) {
      id
      type
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
export const updateStat = /* GraphQL */ `
  mutation UpdateStat(
    $input: UpdateStatInput!
    $condition: ModelStatConditionInput
  ) {
    updateStat(input: $input, condition: $condition) {
      id
      type
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
export const deleteStat = /* GraphQL */ `
  mutation DeleteStat(
    $input: DeleteStatInput!
    $condition: ModelStatConditionInput
  ) {
    deleteStat(input: $input, condition: $condition) {
      id
      type
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
export const createTicketBatch = /* GraphQL */ `
  mutation CreateTicketBatch(
    $input: CreateTicketBatchInput!
    $condition: ModelTicketBatchConditionInput
  ) {
    createTicketBatch(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      lastTicket
      transaction {
        id
        type
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
      raffleId
      raffle {
        id
        type
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        winningBatch {
          id
          type
          createdAt
          updatedAt
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleId
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
export const updateTicketBatch = /* GraphQL */ `
  mutation UpdateTicketBatch(
    $input: UpdateTicketBatchInput!
    $condition: ModelTicketBatchConditionInput
  ) {
    updateTicketBatch(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      lastTicket
      transaction {
        id
        type
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
      raffleId
      raffle {
        id
        type
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        winningBatch {
          id
          type
          createdAt
          updatedAt
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleId
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
export const deleteTicketBatch = /* GraphQL */ `
  mutation DeleteTicketBatch(
    $input: DeleteTicketBatchInput!
    $condition: ModelTicketBatchConditionInput
  ) {
    deleteTicketBatch(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      lastTicket
      transaction {
        id
        type
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
      raffleId
      raffle {
        id
        type
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        winningBatch {
          id
          type
          createdAt
          updatedAt
          lastTicket
          purchaser
          ticketsBought
          batchId
          firstTicket
          raffleId
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
export const createTransaction = /* GraphQL */ `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
      id
      type
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
export const updateTransaction = /* GraphQL */ `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
      id
      type
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
export const deleteTransaction = /* GraphQL */ `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
      id
      type
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
export const createRaffle = /* GraphQL */ `
  mutation CreateRaffle(
    $input: CreateRaffleInput!
    $condition: ModelRaffleConditionInput
  ) {
    createRaffle(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      ticketsAvailable
      raffleId
      winningBatch {
        id
        type
        createdAt
        updatedAt
        lastTicket
        transaction {
          id
          type
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
        raffleId
        raffle {
          id
          type
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
export const updateRaffle = /* GraphQL */ `
  mutation UpdateRaffle(
    $input: UpdateRaffleInput!
    $condition: ModelRaffleConditionInput
  ) {
    updateRaffle(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      ticketsAvailable
      raffleId
      winningBatch {
        id
        type
        createdAt
        updatedAt
        lastTicket
        transaction {
          id
          type
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
        raffleId
        raffle {
          id
          type
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
export const deleteRaffle = /* GraphQL */ `
  mutation DeleteRaffle(
    $input: DeleteRaffleInput!
    $condition: ModelRaffleConditionInput
  ) {
    deleteRaffle(input: $input, condition: $condition) {
      id
      type
      createdAt
      updatedAt
      ticketsAvailable
      raffleId
      winningBatch {
        id
        type
        createdAt
        updatedAt
        lastTicket
        transaction {
          id
          type
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
        raffleId
        raffle {
          id
          type
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
export const createNFT = /* GraphQL */ `
  mutation CreateNFT(
    $input: CreateNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    createNFT(input: $input, condition: $condition) {
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
export const updateNFT = /* GraphQL */ `
  mutation UpdateNFT(
    $input: UpdateNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    updateNFT(input: $input, condition: $condition) {
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
export const deleteNFT = /* GraphQL */ `
  mutation DeleteNFT(
    $input: DeleteNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    deleteNFT(input: $input, condition: $condition) {
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
export const createCollection = /* GraphQL */ `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
export const updateCollection = /* GraphQL */ `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
export const deleteCollection = /* GraphQL */ `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
