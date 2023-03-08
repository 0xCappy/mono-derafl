"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrCreateNft = void 0;
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
const AlchemyClient_1 = require("../clients/AlchemyClient");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
const mapHexToAlchemyChain_1 = require("../utils/mapHexToAlchemyChain");
const TraitSniperClient_1 = require("../clients/TraitSniperClient");
const AttributeSummaryService_1 = require("./AttributeSummaryService");
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
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
        collection = await createCollection(alchemyNft, chainId);
    }
    if (!nft) {
        let attributes = alchemyNft.rawMetadata.attributes;
        if (attributes && attributes.length) {
            attributes = await AttributeSummaryService_1.mergeAttributeRarity(alchemyNft.contract.address, chainId, attributes);
        }
        nft = await createNft({
            type: 'NFT',
            contractAddress: alchemyNft.contract.address,
            createdAt: new Date(),
            updatedAt: new Date(),
            metadata: alchemyNft?.rawMetadata ? JSON.stringify({
                image: alchemyNft.rawMetadata.image,
                attributes: alchemyNft.rawMetadata.attributes
            }) : JSON.stringify({}),
            tokenUri: alchemyNft.tokenUri?.raw,
            tokenId: alchemyNft.tokenId,
            symbol: alchemyNft.contract.symbol,
            imageUri: alchemyNft.media[0]?.raw || alchemyNft.rawMetadata?.image,
            tokenName: alchemyNft.rawMetadata?.name || `${alchemyNft.contract.symbol || alchemyNft.contract.name} #${alchemyNft.tokenId}`,
            collectionName: alchemyNft.contract.name,
            lastSales: JSON.stringify(lastSale),
            nFTCollectionId: collection.id,
            chainId,
            rarityData: JSON.stringify(rank)
        });
    }
    return nft;
};
const getNftByContractAddress = async (address, tokenId) => {
    const body = { query: queries_1.listNFTS, variables: { filter: { contractAddress: { eq: address }, tokenId: { eq: tokenId } } } };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listNFTS?.items?.[0];
};
const getCollectionByContractAddress = async (address) => {
    const body = { query: queries_1.listCollections, variables: { filter: { contractAddress: { eq: address } } } };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listCollections?.items?.[0];
};
const createCollection = async (alchemyNft, chainId) => {
    const input = {
        type: 'Collection',
        contractAddress: alchemyNft.contract.address,
        createdAt: new Date(),
        updatedAt: new Date(),
        symbol: alchemyNft.contract.symbol,
        rafflesCreated: 1,
        contractDeployer: alchemyNft.contract.contractDeployer,
        deployedBlockNumber: alchemyNft.contract.deployedBlockNumber,
        tokenType: alchemyNft.contract.tokenType,
        totalSupply: alchemyNft.contract.totalSupply,
        chainId,
        name: alchemyNft.contract.name || alchemyNft.contract.openSea?.collectionName,
        openseaSlug: alchemyNft.contract.openSea?.collectionName,
        imageUrl: alchemyNft.contract.openSea?.imageUrl,
        externalUrl: alchemyNft.contract.openSea?.externalUrl,
        discordUrl: alchemyNft.contract.openSea?.discordUrl,
        twitterUsername: alchemyNft.contract.openSea?.twitterUsername,
        description: alchemyNft.contract.openSea?.description,
        floorPrice: alchemyNft.contract.openSea?.floorPrice,
    };
    const variables = { input };
    const body = { query: mutations_1.createCollection, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.createCollection;
};
const updateNft = (input) => {
};
const createNft = async (input) => {
    const variables = { input };
    const body = { query: mutations_1.createNFT, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.createNFT;
};
//# sourceMappingURL=NFTService.js.map