"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNftTraitsWithPrice = exports.getNftRank = void 0;
const axios_1 = require("axios");
const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        "x-ts-api-key": process.env.TRAIT_SNIPER_KEY || '',
    },
};
exports.getNftRank = async (address, tokenId) => {
    try {
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
exports.getNftTraitsWithPrice = async (address) => {
    let hasMore = true;
    let traits = [];
    while (hasMore) {
        const response = await axios_1.default.get(`https://api.traitsniper.com/v1/collections/${address}/traits?include_prices=true&trait_count=true`, options);
        traits = [...traits, ...response.data.traits.map((trait) => ({
                name: trait.name,
                value: trait.value,
                pool: trait.pool,
                score: trait.score,
                floorPrice: trait.floor_price,
                count: trait.count
            }))];
        if (response.data.traits.length < 100) {
            hasMore = false;
        }
    }
    return traits;
};
//# sourceMappingURL=TraitSniperClient.js.map