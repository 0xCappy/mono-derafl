"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNftRank = void 0;
const axios_1 = require("axios");
exports.getNftRank = async (address, tokenId) => {
    try {
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                "x-ts-api-key": process.env.TRAIT_SNIPER_KEY || '',
            },
        };
        const response = await axios_1.default.get(`https://api.traitsniper.com/v1/collections/${address}/ranks?page=1&limit=50&trait_count=true&include_traits=true&token_ids=${tokenId}`, options);
        const rankResponse = response.data;
        return {
            maxRank: rankResponse.collection.supply,
            rank: rankResponse.ranks[0].rarity_rank
        };
    }
    catch (err) {
        return undefined;
    }
};
// export const getNftTraitsWithPrice = async (address: string): Promise<TraitWithPrice[]> => {
//     const response = await axios.get(`https://api.traitsniper.com/v1/collections/${address}/traits?include_prices=true&trait_count=true`, options);
//     return response.data.traits
// }
//# sourceMappingURL=TraitSniperClient.js.map