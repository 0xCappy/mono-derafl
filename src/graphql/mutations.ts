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
            }
            raffleWinningBatchId
            raffleReleaseTxId
            raffleOpenTxId
            raffleDrawnTxId
            raffleCloseTxId
            raffleNftId
            raffleRefundTxId
          }
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
            name
            openseaSlug
            imageUrl
            externalUrl
            discordUrl
            twitterUsername
            description
            floorPrice
            traits {
              nextToken
            }
          }
          traits {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
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
        }
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
      }
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
            }
            raffleWinningBatchId
            raffleReleaseTxId
            raffleOpenTxId
            raffleDrawnTxId
            raffleCloseTxId
            raffleNftId
            raffleRefundTxId
          }
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
            name
            openseaSlug
            imageUrl
            externalUrl
            discordUrl
            twitterUsername
            description
            floorPrice
            traits {
              nextToken
            }
          }
          traits {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
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
        }
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
      }
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
            }
            raffleWinningBatchId
            raffleReleaseTxId
            raffleOpenTxId
            raffleDrawnTxId
            raffleCloseTxId
            raffleNftId
            raffleRefundTxId
          }
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
            name
            openseaSlug
            imageUrl
            externalUrl
            discordUrl
            twitterUsername
            description
            floorPrice
            traits {
              nextToken
            }
          }
          traits {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
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
        }
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
      }
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
      createdAt
      updatedAt
      ethPaid
      ticketsBought
      royaltiesPaid
      chainId
      rafflesCreated
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
      createdAt
      updatedAt
      ethPaid
      ticketsBought
      royaltiesPaid
      chainId
      rafflesCreated
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
      createdAt
      updatedAt
      ethPaid
      ticketsBought
      royaltiesPaid
      chainId
      rafflesCreated
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
            }
            raffleWinningBatchId
            raffleReleaseTxId
            raffleOpenTxId
            raffleDrawnTxId
            raffleCloseTxId
            raffleNftId
            raffleRefundTxId
          }
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
            name
            openseaSlug
            imageUrl
            externalUrl
            discordUrl
            twitterUsername
            description
            floorPrice
            traits {
              nextToken
            }
          }
          traits {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
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
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
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
            }
            raffleWinningBatchId
            raffleReleaseTxId
            raffleOpenTxId
            raffleDrawnTxId
            raffleCloseTxId
            raffleNftId
            raffleRefundTxId
          }
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
            name
            openseaSlug
            imageUrl
            externalUrl
            discordUrl
            twitterUsername
            description
            floorPrice
            traits {
              nextToken
            }
          }
          traits {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
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
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
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
            }
            raffleWinningBatchId
            raffleReleaseTxId
            raffleOpenTxId
            raffleDrawnTxId
            raffleCloseTxId
            raffleNftId
            raffleRefundTxId
          }
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
            name
            openseaSlug
            imageUrl
            externalUrl
            discordUrl
            twitterUsername
            description
            floorPrice
            traits {
              nextToken
            }
          }
          traits {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
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
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
      }
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
      raffleNonce
      date
      eventType
      hash
      chainId
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
      raffleNonce
      date
      eventType
      hash
      chainId
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
      raffleNonce
      date
      eventType
      hash
      chainId
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
              raffleWinningBatchId
              raffleReleaseTxId
              raffleOpenTxId
              raffleDrawnTxId
              raffleCloseTxId
              raffleNftId
              raffleRefundTxId
            }
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
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
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
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
          name
          openseaSlug
          imageUrl
          externalUrl
          discordUrl
          twitterUsername
          description
          floorPrice
          traits {
            items {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            nextToken
          }
        }
        traits {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
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
      }
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
              raffleWinningBatchId
              raffleReleaseTxId
              raffleOpenTxId
              raffleDrawnTxId
              raffleCloseTxId
              raffleNftId
              raffleRefundTxId
            }
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
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
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
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
          name
          openseaSlug
          imageUrl
          externalUrl
          discordUrl
          twitterUsername
          description
          floorPrice
          traits {
            items {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            nextToken
          }
        }
        traits {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
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
      }
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
              raffleWinningBatchId
              raffleReleaseTxId
              raffleOpenTxId
              raffleDrawnTxId
              raffleCloseTxId
              raffleNftId
              raffleRefundTxId
            }
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
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
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
        }
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
          name
          openseaSlug
          imageUrl
          externalUrl
          discordUrl
          twitterUsername
          description
          floorPrice
          traits {
            items {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            nextToken
          }
        }
        traits {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
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
      }
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
        name
        openseaSlug
        imageUrl
        externalUrl
        discordUrl
        twitterUsername
        description
        floorPrice
        traits {
          items {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          nextToken
        }
      }
      traits {
        items {
          id
          nFTId
          traitId
          nFT {
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
            nFTCollectionId
          }
          trait {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
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
        name
        openseaSlug
        imageUrl
        externalUrl
        discordUrl
        twitterUsername
        description
        floorPrice
        traits {
          items {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          nextToken
        }
      }
      traits {
        items {
          id
          nFTId
          traitId
          nFT {
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
            nFTCollectionId
          }
          trait {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
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
        name
        openseaSlug
        imageUrl
        externalUrl
        discordUrl
        twitterUsername
        description
        floorPrice
        traits {
          items {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          nextToken
        }
      }
      traits {
        items {
          id
          nFTId
          traitId
          nFT {
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
            nFTCollectionId
          }
          trait {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
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
      name
      openseaSlug
      imageUrl
      externalUrl
      discordUrl
      twitterUsername
      description
      floorPrice
      traits {
        items {
          id
          name
          value
          pool
          score
          floorPrice
          count
          nfts {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          collectionTraitsId
        }
        nextToken
      }
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
      name
      openseaSlug
      imageUrl
      externalUrl
      discordUrl
      twitterUsername
      description
      floorPrice
      traits {
        items {
          id
          name
          value
          pool
          score
          floorPrice
          count
          nfts {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          collectionTraitsId
        }
        nextToken
      }
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
      name
      openseaSlug
      imageUrl
      externalUrl
      discordUrl
      twitterUsername
      description
      floorPrice
      traits {
        items {
          id
          name
          value
          pool
          score
          floorPrice
          count
          nfts {
            items {
              id
              nFTId
              traitId
              createdAt
              updatedAt
            }
            nextToken
          }
          createdAt
          updatedAt
          collectionTraitsId
        }
        nextToken
      }
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
    }
  }
`;
export const createTrait = /* GraphQL */ `
  mutation CreateTrait(
    $input: CreateTraitInput!
    $condition: ModelTraitConditionInput
  ) {
    createTrait(input: $input, condition: $condition) {
      id
      name
      value
      pool
      score
      floorPrice
      count
      nfts {
        items {
          id
          nFTId
          traitId
          nFT {
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
            nFTCollectionId
          }
          trait {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionTraitsId
    }
  }
`;
export const updateTrait = /* GraphQL */ `
  mutation UpdateTrait(
    $input: UpdateTraitInput!
    $condition: ModelTraitConditionInput
  ) {
    updateTrait(input: $input, condition: $condition) {
      id
      name
      value
      pool
      score
      floorPrice
      count
      nfts {
        items {
          id
          nFTId
          traitId
          nFT {
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
            nFTCollectionId
          }
          trait {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionTraitsId
    }
  }
`;
export const deleteTrait = /* GraphQL */ `
  mutation DeleteTrait(
    $input: DeleteTraitInput!
    $condition: ModelTraitConditionInput
  ) {
    deleteTrait(input: $input, condition: $condition) {
      id
      name
      value
      pool
      score
      floorPrice
      count
      nfts {
        items {
          id
          nFTId
          traitId
          nFT {
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
              name
              openseaSlug
              imageUrl
              externalUrl
              discordUrl
              twitterUsername
              description
              floorPrice
            }
            traits {
              nextToken
            }
            nFTCollectionId
          }
          trait {
            id
            name
            value
            pool
            score
            floorPrice
            count
            nfts {
              nextToken
            }
            createdAt
            updatedAt
            collectionTraitsId
          }
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      collectionTraitsId
    }
  }
`;
export const createNftTraits = /* GraphQL */ `
  mutation CreateNftTraits(
    $input: CreateNftTraitsInput!
    $condition: ModelNftTraitsConditionInput
  ) {
    createNftTraits(input: $input, condition: $condition) {
      id
      nFTId
      traitId
      nFT {
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
          name
          openseaSlug
          imageUrl
          externalUrl
          discordUrl
          twitterUsername
          description
          floorPrice
          traits {
            items {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            nextToken
          }
        }
        traits {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        nFTCollectionId
      }
      trait {
        id
        name
        value
        pool
        score
        floorPrice
        count
        nfts {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        collectionTraitsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateNftTraits = /* GraphQL */ `
  mutation UpdateNftTraits(
    $input: UpdateNftTraitsInput!
    $condition: ModelNftTraitsConditionInput
  ) {
    updateNftTraits(input: $input, condition: $condition) {
      id
      nFTId
      traitId
      nFT {
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
          name
          openseaSlug
          imageUrl
          externalUrl
          discordUrl
          twitterUsername
          description
          floorPrice
          traits {
            items {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            nextToken
          }
        }
        traits {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        nFTCollectionId
      }
      trait {
        id
        name
        value
        pool
        score
        floorPrice
        count
        nfts {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        collectionTraitsId
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteNftTraits = /* GraphQL */ `
  mutation DeleteNftTraits(
    $input: DeleteNftTraitsInput!
    $condition: ModelNftTraitsConditionInput
  ) {
    deleteNftTraits(input: $input, condition: $condition) {
      id
      nFTId
      traitId
      nFT {
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
          name
          openseaSlug
          imageUrl
          externalUrl
          discordUrl
          twitterUsername
          description
          floorPrice
          traits {
            items {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            nextToken
          }
        }
        traits {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        nFTCollectionId
      }
      trait {
        id
        name
        value
        pool
        score
        floorPrice
        count
        nfts {
          items {
            id
            nFTId
            traitId
            nFT {
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
              nFTCollectionId
            }
            trait {
              id
              name
              value
              pool
              score
              floorPrice
              count
              createdAt
              updatedAt
              collectionTraitsId
            }
            createdAt
            updatedAt
          }
          nextToken
        }
        createdAt
        updatedAt
        collectionTraitsId
      }
      createdAt
      updatedAt
    }
  }
`;
