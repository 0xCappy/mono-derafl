import axios from "axios";
import { NftRankResponse, TraitWithPrice } from "../types";
import RarityData from "../types/RarityData";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "x-ts-api-key": process.env.TRAIT_SNIPER_KEY  || '',
    },
};

export const getNftRank = async (address: string, tokenId: string): Promise<RarityData | undefined> => {
    try {
        const response = await axios.get<NftRankResponse>(`https://api.traitsniper.com/v1/collections/${address}/ranks?page=1&limit=50&trait_count=true&include_traits=true&token_ids=${tokenId}`, options);
        const rankResponse = response.data
        return {
            maxRank: rankResponse.collection.supply,
            rank: rankResponse.ranks[0].rarity_rank
        }
    } catch (err) {
        return undefined
    }
};

export const getNftTraitsWithPrice = async (address: string): Promise<TraitWithPrice[]> => {
    let hasMore = true
    let traits: TraitWithPrice[] = []

    while (hasMore) {
        const response = await axios.get(`https://api.traitsniper.com/v1/collections/${address}/traits?include_prices=true&trait_count=true`, options);
        traits = [...traits, ...response.data.traits.map((trait: any) => ({
            name: trait.name,
            value: trait.value,
            pool: trait.pool,
            score: trait.score,
            floorPrice: trait.floor_price,
            count: trait.count
        }))]
        if (response.data.traits.length < 100) {
            hasMore = false
        }  
    }
    return traits
}

