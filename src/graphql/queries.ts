/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTicketRefund = /* GraphQL */ `query GetTicketRefund($id: ID!) {
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
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
      __typename
    }
    ticketRefundRaffleId
    ticketRefundTxId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTicketRefundQueryVariables,
  APITypes.GetTicketRefundQuery
>;
export const listTicketRefunds = /* GraphQL */ `query ListTicketRefunds(
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
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
        __typename
      }
      ticketRefundRaffleId
      ticketRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTicketRefundsQueryVariables,
  APITypes.ListTicketRefundsQuery
>;
export const getStat = /* GraphQL */ `query GetStat($id: ID!) {
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
    __typename
  }
}
` as GeneratedQuery<APITypes.GetStatQueryVariables, APITypes.GetStatQuery>;
export const listStats = /* GraphQL */ `query ListStats(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListStatsQueryVariables, APITypes.ListStatsQuery>;
export const getTicketBatch = /* GraphQL */ `query GetTicketBatch($id: ID!) {
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
      __typename
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    ticketBatchTransactionId
    ticketBatchRaffleId
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTicketBatchQueryVariables,
  APITypes.GetTicketBatchQuery
>;
export const listTicketBatches = /* GraphQL */ `query ListTicketBatches(
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
        __typename
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
      }
      ticketBatchTransactionId
      ticketBatchRaffleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTicketBatchesQueryVariables,
  APITypes.ListTicketBatchesQuery
>;
export const ticketBatchesByCreatedAt = /* GraphQL */ `query TicketBatchesByCreatedAt(
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
        __typename
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
      }
      ticketBatchTransactionId
      ticketBatchRaffleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TicketBatchesByCreatedAtQueryVariables,
  APITypes.TicketBatchesByCreatedAtQuery
>;
export const ticketBatchesByUpdatedAt = /* GraphQL */ `query TicketBatchesByUpdatedAt(
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
        __typename
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
      }
      ticketBatchTransactionId
      ticketBatchRaffleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TicketBatchesByUpdatedAtQueryVariables,
  APITypes.TicketBatchesByUpdatedAtQuery
>;
export const ticketBatchesByTicketsBought = /* GraphQL */ `query TicketBatchesByTicketsBought(
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
        __typename
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
      }
      ticketBatchTransactionId
      ticketBatchRaffleId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TicketBatchesByTicketsBoughtQueryVariables,
  APITypes.TicketBatchesByTicketsBoughtQuery
>;
export const searchTicketBatches = /* GraphQL */ `query SearchTicketBatches(
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
        __typename
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
      }
      ticketBatchTransactionId
      ticketBatchRaffleId
      __typename
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
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchTicketBatchesQueryVariables,
  APITypes.SearchTicketBatchesQuery
>;
export const getTransaction = /* GraphQL */ `query GetTransaction($id: ID!) {
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
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetTransactionQueryVariables,
  APITypes.GetTransactionQuery
>;
export const listTransactions = /* GraphQL */ `query ListTransactions(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListTransactionsQueryVariables,
  APITypes.ListTransactionsQuery
>;
export const getRaffle = /* GraphQL */ `query GetRaffle($id: ID!) {
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
        __typename
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
            __typename
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
            __typename
          }
          ticketBatchTransactionId
          ticketBatchRaffleId
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          __typename
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
          animationUrl
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
            __typename
          }
          nFTCollectionId
          __typename
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
          __typename
        }
        raffleWinningBatchId
        raffleReleaseTxId
        raffleOpenTxId
        raffleDrawnTxId
        raffleCloseTxId
        raffleNftId
        raffleRefundTxId
        __typename
      }
      ticketBatchTransactionId
      ticketBatchRaffleId
      __typename
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
      __typename
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
      __typename
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
      __typename
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
      __typename
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
      animationUrl
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
        __typename
      }
      nFTCollectionId
      __typename
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
      __typename
    }
    raffleWinningBatchId
    raffleReleaseTxId
    raffleOpenTxId
    raffleDrawnTxId
    raffleCloseTxId
    raffleNftId
    raffleRefundTxId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetRaffleQueryVariables, APITypes.GetRaffleQuery>;
export const listRaffles = /* GraphQL */ `query ListRaffles(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListRafflesQueryVariables,
  APITypes.ListRafflesQuery
>;
export const rafflesByCreatedAt = /* GraphQL */ `query RafflesByCreatedAt(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RafflesByCreatedAtQueryVariables,
  APITypes.RafflesByCreatedAtQuery
>;
export const rafflesByUpdatedAt = /* GraphQL */ `query RafflesByUpdatedAt(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RafflesByUpdatedAtQueryVariables,
  APITypes.RafflesByUpdatedAtQuery
>;
export const rafflesByProgress = /* GraphQL */ `query RafflesByProgress(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RafflesByProgressQueryVariables,
  APITypes.RafflesByProgressQuery
>;
export const rafflesByTicketsAvailable = /* GraphQL */ `query RafflesByTicketsAvailable(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RafflesByTicketsAvailableQueryVariables,
  APITypes.RafflesByTicketsAvailableQuery
>;
export const rafflesByExpires = /* GraphQL */ `query RafflesByExpires(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RafflesByExpiresQueryVariables,
  APITypes.RafflesByExpiresQuery
>;
export const rafflesByTicketsSold = /* GraphQL */ `query RafflesByTicketsSold(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.RafflesByTicketsSoldQueryVariables,
  APITypes.RafflesByTicketsSoldQuery
>;
export const searchRaffles = /* GraphQL */ `query SearchRaffles(
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
          __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            __typename
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
            animationUrl
            nFTCollectionId
            __typename
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
            __typename
          }
          raffleWinningBatchId
          raffleReleaseTxId
          raffleOpenTxId
          raffleDrawnTxId
          raffleCloseTxId
          raffleNftId
          raffleRefundTxId
          __typename
        }
        ticketBatchTransactionId
        ticketBatchRaffleId
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        __typename
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
        animationUrl
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
          __typename
        }
        nFTCollectionId
        __typename
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
        __typename
      }
      raffleWinningBatchId
      raffleReleaseTxId
      raffleOpenTxId
      raffleDrawnTxId
      raffleCloseTxId
      raffleNftId
      raffleRefundTxId
      __typename
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
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchRafflesQueryVariables,
  APITypes.SearchRafflesQuery
>;
export const getNFT = /* GraphQL */ `query GetNFT($id: ID!) {
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
    animationUrl
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
      __typename
    }
    nFTCollectionId
    __typename
  }
}
` as GeneratedQuery<APITypes.GetNFTQueryVariables, APITypes.GetNFTQuery>;
export const listNFTS = /* GraphQL */ `query ListNFTS($filter: ModelNFTFilterInput, $limit: Int, $nextToken: String) {
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
      animationUrl
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
        __typename
      }
      nFTCollectionId
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNFTSQueryVariables, APITypes.ListNFTSQuery>;
export const getCollection = /* GraphQL */ `query GetCollection($id: ID!) {
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
    name
    openseaSlug
    imageUrl
    externalUrl
    discordUrl
    twitterUsername
    description
    floorPrice
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCollectionQueryVariables,
  APITypes.GetCollectionQuery
>;
export const listCollections = /* GraphQL */ `query ListCollections(
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
      name
      openseaSlug
      imageUrl
      externalUrl
      discordUrl
      twitterUsername
      description
      floorPrice
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCollectionsQueryVariables,
  APITypes.ListCollectionsQuery
>;
export const getAccount = /* GraphQL */ `query GetAccount($id: ID!) {
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
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAccountQueryVariables,
  APITypes.GetAccountQuery
>;
export const listAccounts = /* GraphQL */ `query ListAccounts(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAccountsQueryVariables,
  APITypes.ListAccountsQuery
>;
export const accountsByTicketsBought = /* GraphQL */ `query AccountsByTicketsBought(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByTicketsBoughtQueryVariables,
  APITypes.AccountsByTicketsBoughtQuery
>;
export const accountsByRafflesEntered = /* GraphQL */ `query AccountsByRafflesEntered(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByRafflesEnteredQueryVariables,
  APITypes.AccountsByRafflesEnteredQuery
>;
export const accountsByRafflesWon = /* GraphQL */ `query AccountsByRafflesWon(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByRafflesWonQueryVariables,
  APITypes.AccountsByRafflesWonQuery
>;
export const accountsByRafflesCreated = /* GraphQL */ `query AccountsByRafflesCreated(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByRafflesCreatedQueryVariables,
  APITypes.AccountsByRafflesCreatedQuery
>;
export const accountsByUpdatedAt = /* GraphQL */ `query AccountsByUpdatedAt(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByUpdatedAtQueryVariables,
  APITypes.AccountsByUpdatedAtQuery
>;
export const accountsByCreatedAt = /* GraphQL */ `query AccountsByCreatedAt(
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
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.AccountsByCreatedAtQueryVariables,
  APITypes.AccountsByCreatedAtQuery
>;
export const searchAccounts = /* GraphQL */ `query SearchAccounts(
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
      __typename
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
            __typename
          }
        }
      }
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SearchAccountsQueryVariables,
  APITypes.SearchAccountsQuery
>;
