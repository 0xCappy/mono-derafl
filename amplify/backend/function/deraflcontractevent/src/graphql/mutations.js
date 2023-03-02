"use strict";
/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAccount = exports.updateAccount = exports.createAccount = exports.deleteCollection = exports.updateCollection = exports.createCollection = exports.deleteNFT = exports.updateNFT = exports.createNFT = exports.deleteRaffle = exports.updateRaffle = exports.createRaffle = exports.deleteTransaction = exports.updateTransaction = exports.createTransaction = exports.deleteTicketBatch = exports.updateTicketBatch = exports.createTicketBatch = exports.deleteStat = exports.updateStat = exports.createStat = exports.deleteTicketRefund = exports.updateTicketRefund = exports.createTicketRefund = void 0;
exports.createTicketRefund = `
  mutation CreateTicketRefund(
    $input: CreateTicketRefundInput!
    $condition: ModelTicketRefundConditionInput
  ) {
    createTicketRefund(input: $input, condition: $condition) {
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
exports.updateTicketRefund = `
  mutation UpdateTicketRefund(
    $input: UpdateTicketRefundInput!
    $condition: ModelTicketRefundConditionInput
  ) {
    updateTicketRefund(input: $input, condition: $condition) {
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
exports.deleteTicketRefund = `
  mutation DeleteTicketRefund(
    $input: DeleteTicketRefundInput!
    $condition: ModelTicketRefundConditionInput
  ) {
    deleteTicketRefund(input: $input, condition: $condition) {
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
exports.createStat = `
  mutation CreateStat(
    $input: CreateStatInput!
    $condition: ModelStatConditionInput
  ) {
    createStat(input: $input, condition: $condition) {
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
exports.updateStat = `
  mutation UpdateStat(
    $input: UpdateStatInput!
    $condition: ModelStatConditionInput
  ) {
    updateStat(input: $input, condition: $condition) {
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
exports.deleteStat = `
  mutation DeleteStat(
    $input: DeleteStatInput!
    $condition: ModelStatConditionInput
  ) {
    deleteStat(input: $input, condition: $condition) {
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
exports.createTicketBatch = `
  mutation CreateTicketBatch(
    $input: CreateTicketBatchInput!
    $condition: ModelTicketBatchConditionInput
  ) {
    createTicketBatch(input: $input, condition: $condition) {
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
exports.updateTicketBatch = `
  mutation UpdateTicketBatch(
    $input: UpdateTicketBatchInput!
    $condition: ModelTicketBatchConditionInput
  ) {
    updateTicketBatch(input: $input, condition: $condition) {
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
exports.deleteTicketBatch = `
  mutation DeleteTicketBatch(
    $input: DeleteTicketBatchInput!
    $condition: ModelTicketBatchConditionInput
  ) {
    deleteTicketBatch(input: $input, condition: $condition) {
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
exports.createTransaction = `
  mutation CreateTransaction(
    $input: CreateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    createTransaction(input: $input, condition: $condition) {
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
exports.updateTransaction = `
  mutation UpdateTransaction(
    $input: UpdateTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    updateTransaction(input: $input, condition: $condition) {
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
exports.deleteTransaction = `
  mutation DeleteTransaction(
    $input: DeleteTransactionInput!
    $condition: ModelTransactionConditionInput
  ) {
    deleteTransaction(input: $input, condition: $condition) {
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
exports.createRaffle = `
  mutation CreateRaffle(
    $input: CreateRaffleInput!
    $condition: ModelRaffleConditionInput
  ) {
    createRaffle(input: $input, condition: $condition) {
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
exports.updateRaffle = `
  mutation UpdateRaffle(
    $input: UpdateRaffleInput!
    $condition: ModelRaffleConditionInput
  ) {
    updateRaffle(input: $input, condition: $condition) {
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
exports.deleteRaffle = `
  mutation DeleteRaffle(
    $input: DeleteRaffleInput!
    $condition: ModelRaffleConditionInput
  ) {
    deleteRaffle(input: $input, condition: $condition) {
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
exports.createNFT = `
  mutation CreateNFT(
    $input: CreateNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    createNFT(input: $input, condition: $condition) {
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
exports.updateNFT = `
  mutation UpdateNFT(
    $input: UpdateNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    updateNFT(input: $input, condition: $condition) {
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
exports.deleteNFT = `
  mutation DeleteNFT(
    $input: DeleteNFTInput!
    $condition: ModelNFTConditionInput
  ) {
    deleteNFT(input: $input, condition: $condition) {
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
exports.createCollection = `
  mutation CreateCollection(
    $input: CreateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    createCollection(input: $input, condition: $condition) {
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
exports.updateCollection = `
  mutation UpdateCollection(
    $input: UpdateCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    updateCollection(input: $input, condition: $condition) {
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
exports.deleteCollection = `
  mutation DeleteCollection(
    $input: DeleteCollectionInput!
    $condition: ModelCollectionConditionInput
  ) {
    deleteCollection(input: $input, condition: $condition) {
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
exports.createAccount = `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
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
exports.updateAccount = `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
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
exports.deleteAccount = `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
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
//# sourceMappingURL=mutations.js.map