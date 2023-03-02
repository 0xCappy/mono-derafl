interface Rank {
    token_id: string
    rarity_rank: number
    rarity_score: number
}

interface Collection {
    supply: number
    revealed_count: number
}

export default interface NftRankResponse {
    ranks: Rank[]
    collection: Collection
    total_page: number
    limit: number
    page: number
}
