"use strict";
// // import { getAsset, getContract } from "../clients/OpenseaClient";
// import { mapHexToAlchemyChain } from "../../utils/mapChain";
// import { getNft, getNftLastSalePrice } from "../clients/AlchemyClient";
// import { getNftRank } from "../clients/TraitSniperClient";
// import NFT from "../types/NFT";
// import { createOrUpdateCollection } from "./CollectionService";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateNft = void 0;
const axios_1 = require("axios");
const AlchemyClient_1 = require("../clients/AlchemyClient");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
const mapHexToAlchemyChain_1 = require("../utils/mapHexToAlchemyChain");
const TraitSniperClient_1 = require("../clients/TraitSniperClient");
// // called when raffle is created
// // if no NFT exists, create one
// // if NFT exists, update
// // update collection
// export const createOrUpdateNft = async (address: string, tokenId: string, chainId: string) => {
//   const NFT = Parse.Object.extend("NFT");
//   const nftQuery = new Parse.Query(NFT);
//   nftQuery.equalTo("tokenAddress", address);
//   nftQuery.equalTo("tokenId", tokenId);
//   let nft = await nftQuery.first();
//   if (!nft) {
//     nft = new NFT();
//   }
//   const nftData = await getNft(address, tokenId, mapHexToAlchemyChain(chainId));
//   const rank = await getNftRank(address, tokenId);
//   const lastSale = await getNftLastSalePrice(address, tokenId, mapHexToAlchemyChain(chainId));
//   const collectionData = nftData.contract;
//   const collection = await createOrUpdateCollection(collectionData, chainId);
//   if (nftData) {
//     nft?.set("contractAddress", nftData.contract.address);
//     nft?.set("tokenId", nftData.tokenId);
//     nft?.set("tokenName", nftData.rawMetadata?.name || `${nftData.contract.symbol || nftData.contract.name} #${nftData.tokenId}`);
//     nft?.set("collectionName", nftData.contract.name);
//     nft?.set("symbol", nftData.contract.symbol);
//     nft?.set("tokenUri", nftData.tokenUri?.raw);
//     nft?.set("imageUri", nftData.media[0]?.raw || nftData.rawMetadata?.image);
//     nft?.set("metadata", nftData.rawMetadata);
//     nft?.set("lastSales", lastSale);
//     nft?.set("rarityData", rank);
//     nft?.set("collection", collection);
//     nft?.set("chainId", chainId)
//   }
//   await nft?.save();
//   return nft;
// };
// export const updateSalesData = (address: string, tokenId: string) => { };
// export const mapNft = (nft: Parse.Object): NFT => ({
//   contractAddress: nft.get("contractAddress"),
//   tokenAddress: nft.get("tokenAddress"),
//   collectionName: nft.get("collectionName"),
//   tokenName: nft.get("tokenName"),
//   symbol: nft.get("symbol"),
//   tokenId: nft.get("tokenId"),
//   tokenUri: nft.get("tokenUri"),
//   imageUri: nft.get("imageUri"),
//   collection: nft.get("collection"),
//   ownerOf: nft.get("ownerOf"),
//   lastSales: nft.get("lastSales"),
//   rarityData: nft.get("rarityData"),
//   metadata: nft.get("metadata"),
// });
exports.getOrCreateNft = async (address, tokenId, chainId) => {
    let nft = await getNftByContractAddress(address, tokenId);
    let collection = await getCollectionByContractAddress(address);
    const alchemyNft = await AlchemyClient_1.getNft(address, tokenId, mapHexToAlchemyChain_1.mapHexToAlchemyChain(chainId));
    const rank = await TraitSniperClient_1.getNftRank(address, tokenId);
    const lastSale = await AlchemyClient_1.getNftLastSalePrice(address, tokenId, mapHexToAlchemyChain_1.mapHexToAlchemyChain(chainId));
    if (!collection) {
        collection = await createCollection({
            contractAddress: alchemyNft.contract.address,
            createdAt: new Date(),
            updatedAt: new Date(),
            symbol: alchemyNft.contract.symbol,
            rafflesCreated: 1,
            contractDeployer: alchemyNft.contract.contractDeployer,
            deployedBlockNumber: alchemyNft.contract.deployedBlockNumber,
            tokenType: alchemyNft.contract.tokenType,
            totalSupply: alchemyNft.contract.totalSupply,
            chainId
        });
    }
    if (!nft) {
        nft = await createNft({
            contractAddress: alchemyNft.contract.address,
            createdAt: new Date(),
            updatedAt: new Date(),
            metadata: JSON.stringify({
                image: alchemyNft.rawMetadata.image,
                attributes: alchemyNft.rawMetadata.attributes
            }),
            tokenUri: alchemyNft.tokenUri?.raw,
            tokenId: alchemyNft.tokenId,
            symbol: alchemyNft.contract.symbol,
            imageUri: alchemyNft.media[0]?.raw || alchemyNft.rawMetadata?.image,
            tokenName: alchemyNft.rawMetadata?.name || `${alchemyNft.contract.symbol || alchemyNft.contract.name} #${alchemyNft.tokenId}`,
            collectionName: alchemyNft.contract.name,
            lastSales: JSON.stringify(lastSale),
            nFTCollectionId: collection.id,
            chainId,
            rarityData: rank
        });
    }
    // console.log("NFT: ", JSON.stringify(nft.data))
    // console.log("NFTID: ", nftId)
    // console.log("COLL: ", JSON.stringify(collection.data))
    // console.log("COLLID: ", collectionId)
    // console.log("NFTDATA: ", alchemyNft)
    return nft;
};
const getNftByContractAddress = async (address, tokenId) => {
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: queries_1.listNFTS, variables: { input: { filter: { contractAddress: { eq: address } }, tokenId: { eq: tokenId } } } };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    return response?.data?.data?.listNFTS?.items?.[0];
};
const getCollectionByContractAddress = async (address) => {
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: queries_1.listCollections, variables: { input: { filter: { contractAddress: { eq: address } } } } };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("GET COLL: ", JSON.stringify(response.data));
    return response?.data?.data?.listCollections?.items?.[0];
};
const updateCollection = (input) => {
};
const createCollection = async (input) => {
    const variables = { input };
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.createCollection, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("CREATE COLL: ", JSON.stringify(response.data));
    return response?.data?.data?.createCollection;
};
const updateNft = (input) => {
};
const createNft = async (input) => {
    console.log("CREATING NFT: ", input);
    const variables = { input };
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.createNFT, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("CREATE NFT: ", JSON.stringify(response.data));
    return response?.data?.data?.createNFT;
};
//# sourceMappingURL=NFTService.js.map