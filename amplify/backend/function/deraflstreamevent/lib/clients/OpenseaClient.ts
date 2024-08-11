// import config from "../../config"
// import axios from 'axios';

// export const getContract = async (address: string) => {
//     const response = await axios.get(`${config.OPENSEA_URL}asset_contract/${address}`, {headers: {"X-API-KEY":""}})
//     return {
//         ...mapCollection(response.data.collection),
//         ...mapContractAsset(response.data)
//     }
// }

// export const getAsset = async (address: string, tokenId: string) => {
//     const response = await axios.get(`${config.OPENSEA_URL}asset/${address}/${tokenId}`, {headers: {"X-API-KEY":""}})
//     return mapAsset(response.data)
// }

// export const getAccountAssets = async (address: string, offset: string, pageSize: number) => {
//     const response = await axios.get(`${config.OPENSEA_URL}assets?order_direction=desc&offset=${offset}&limit=${pageSize}&include_orders=false&owner=${address}`, {headers: {"X-API-KEY":""}})
//     return response.data.assets.map((asset: any) => mapAsset(asset))
// }

// const mapAsset = (asset: any) => ({
//     contractAddress: asset.asset_contract.address,
//     tokenAddress: asset.asset_contract.address,
//     metadata: {attributes: asset.traits},
//     name: asset.asset_contract.name,
//     symbol: asset.asset_contract.symbol,
//     tokenId: asset.token_id,
//     tokenUri: asset.token_metadata,
//     ownerOf: asset.owner,
//     imageUri: asset.image_original_url,
//     openseaImage: asset.image_url,
//     lastSale: asset?.last_sale?.total_price,
//     rarityData: asset.rarity_data ? mapRarityData(asset.rarity_data) : undefined,
//     collection: {
//         ...mapCollection(asset.collection),
//         ...mapContractAsset(asset.asset_contract)
//     }
// })

// const mapContractAsset = (contractAsset: any) => ({
//     contractAddress: contractAsset.address,
//     name: contractAsset.name,
//     symbol: contractAsset.symbol,
//     schema: contractAsset.schema_name,
//     contractCreatedAt: new Date(contractAsset.created_date),
//     website: contractAsset.external_link,
//     description: contractAsset.description,
//     imageUrl: contractAsset.image_url,
// })

// const mapCollection = (collection: any) => ({
//     bannerImageUrl: collection.banner_image_url,
//     discordUrl: collection.discord_url,
//     openseaHidden: collection.hidden,
//     openseaSafelistStatus: collection.safelist_request_status,
//     openseaSubjectToWhitelist: collection.is_subject_to_whitelist,
//     mediumUsername: collection.medium_username,
//     shortDescription: collection.short_description,
//     openseaSlug: collection.slug,
//     telegramUrl: collection.telegram_url,
//     twitterUsername: collection.twitter_username,
//     instagramUsername: collection.instagram_username,
//     wikiUrl: collection.wiki_url,
//     nsfw: collection.is_nsfw,
//     floor: collection.stats?.floor_price
// })

// const mapRarityData = (rarityData: any) => ({
//     strategyId: rarityData.strategy_id,
//     strategyVersion: rarityData.strategy_version,
//     rank: rarityData.rank,
//     score: rarityData.score,
//     calculatedAt: rarityData.calculated_at,
//     maxRank: rarityData.max_rank,
//     tokensScored: rarityData.tokens_scored,
//     rankingFeatures: rarityData.ranking_features
// })

// // {
// //     "collection": {
// //       "banner_image_url": "https://i.seadn.io/gcs/files/73e2704199e073c0726b59d842325671.png?w=500&auto=format",
// //       "chat_url": null,
// //       "created_date": "2023-01-05T12:46:52.616847+00:00",
// //       "default_to_fiat": false,
// //       "description": "This is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.",
// //       "dev_buyer_fee_basis_points": "0",
// //       "dev_seller_fee_basis_points": "0",
// //       "discord_url": null,
// //       "display_data": {
// //         "card_display_style": "contain",
// //         "images": null
// //       },
// //       "external_url": "http://bayctestnet.com",
// //       "featured": false,
// //       "featured_image_url": "https://i.seadn.io/gcs/files/8e7dee38791ab0896562c85e0d2e4c2a.png?w=500&auto=format",
// //       "hidden": false,
// //       "safelist_request_status": "not_requested",
// //       "image_url": "https://i.seadn.io/gcs/files/1cbd158c5bb29d814361ee68ac03b54b.png?w=500&auto=format",
// //       "is_subject_to_whitelist": false,
// //       "large_image_url": "https://i.seadn.io/gcs/files/8e7dee38791ab0896562c85e0d2e4c2a.png?w=500&auto=format",
// //       "medium_username": "bayctestnet",
// //       "name": "Bored Ape Yacht Club - Test-net",
// //       "only_proxied_transfers": false,
// //       "opensea_buyer_fee_basis_points": "0",
// //       "opensea_seller_fee_basis_points": "250",
// //       "payout_address": null,
// //       "require_email": false,
// //       "short_description": null,
// //       "slug": "bored-ape-yacht-club-testnet",
// //       "telegram_url": "https://t.me/bayctestnet",
// //       "twitter_username": null,
// //       "instagram_username": null,
// //       "wiki_url": null,
// //       "is_nsfw": false,
// //       "fees": {
// //         "seller_fees": {},
// //         "opensea_fees": {
// //           "0x0000a26b00c1f0df003000390027140000faa719": 250
// //         }
// //       },
// //       "is_rarity_enabled": true,
// //       "is_creator_fees_enforced": false
// //     },
// //     "address": "0xc5e8465802314b32ee10125c29d63077914c3eb5",
// //     "asset_contract_type": "non-fungible",
// //     "created_date": "2023-01-05T12:46:49.133388",
// //     "name": "Bored Ape Yacht Club",
// //     "nft_version": null,
// //     "opensea_version": null,
// //     "owner": 12882407,
// //     "schema_name": "ERC721",
// //     "symbol": "BAYC",
// //     "total_supply": "0",
// //     "description": "This is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.\n\nThis is a collection of apes, together, these apes make a collection. If you are a collector of apes, then you will love this collection.",
// //     "external_link": "http://bayctestnet.com",
// //     "image_url": "https://i.seadn.io/gcs/files/1cbd158c5bb29d814361ee68ac03b54b.png?w=500&auto=format",
// //     "default_to_fiat": false,
// //     "dev_buyer_fee_basis_points": 0,
// //     "dev_seller_fee_basis_points": 0,
// //     "only_proxied_transfers": false,
// //     "opensea_buyer_fee_basis_points": 0,
// //     "opensea_seller_fee_basis_points": 250,
// //     "buyer_fee_basis_points": 0,
// //     "seller_fee_basis_points": 250,
// //     "payout_address": null
// //   }

export {}