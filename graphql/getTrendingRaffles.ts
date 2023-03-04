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
        createdAt
        updatedAt
        ticketsAvailable
        raffleId
        progress
        state
        expires
        ticketsSold
        chainId
        winningAccount
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
      }
    }
  }
`;