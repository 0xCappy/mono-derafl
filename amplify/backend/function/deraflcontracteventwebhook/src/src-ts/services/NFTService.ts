// // import { getAsset, getContract } from "../clients/OpenseaClient";
// import { mapHexToAlchemyChain } from "../../utils/mapChain";
// import { getNft, getNftLastSalePrice } from "../clients/AlchemyClient";
// import { getNftRank } from "../clients/TraitSniperClient";
// import NFT from "../types/NFT";
// import { createOrUpdateCollection } from "./CollectionService";

import axios from "axios";
import { getNft, getNftLastSalePrice } from "../clients/AlchemyClient";
import { listCollections, listNFTS } from "../graphql/queries";
import { createCollection as createCollectionMutation, createNFT as createNftMutation } from "../graphql/mutations";
import { mapHexToAlchemyChain } from "../utils/mapHexToAlchemyChain";
import Collection from "../types/Collection";
import { getNftRank } from "../clients/TraitSniperClient";
import { NFT, NFTAttribute } from "../types";

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


export const getOrCreateNft = async (address: string, tokenId: string, chainId: string) => {
  let nft = await getNftByContractAddress(address, tokenId)
  let collection = await getCollectionByContractAddress(address)

  const alchemyNft = await getNft(address, tokenId, mapHexToAlchemyChain(chainId))
  const rank = await getNftRank(address, tokenId);
  const lastSale = await getNftLastSalePrice(address, tokenId, mapHexToAlchemyChain(chainId));

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
    })
  }

  if (!nft) {
    nft = await createNft({
      contractAddress: alchemyNft.contract.address,
      createdAt: new Date(),
      updatedAt: new Date(),
      metadata: JSON.stringify({
        image: alchemyNft.rawMetadata.image,
        attributes: alchemyNft.rawMetadata.attributes as NFTAttribute[]
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
    })
  }
  // console.log("NFT: ", JSON.stringify(nft.data))
  // console.log("NFTID: ", nftId)
  // console.log("COLL: ", JSON.stringify(collection.data))
  // console.log("COLLID: ", collectionId)
  // console.log("NFTDATA: ", alchemyNft)
  return nft
}

const getNftByContractAddress = async (address: string, tokenId: string) => {
  const options = {
    headers: {
      'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
    }
  };
  const body = { query: listNFTS, variables: { input: { filter: { contractAddress: { eq: address } }, tokenId: { eq: tokenId } } } }
  const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
  return response?.data?.data?.listNFTS?.items?.[0]
}

const getCollectionByContractAddress = async (address: string) => {
  const options = {
    headers: {
      'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
    }
  };
  const body = { query: listCollections, variables: { input: { filter: { contractAddress: { eq: address } } } } }
  const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
  console.log("GET COLL: ", JSON.stringify(response.data))
  return response?.data?.data?.listCollections?.items?.[0]
}

const updateCollection = (input: Collection) => {

}

const createCollection = async (input: Collection) => {
  const variables = { input }
  const options = {
    headers: {
      'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
    }
  };

  const body = { query: createCollectionMutation, variables }
  const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
  console.log("CREATE COLL: ", JSON.stringify(response.data))
  return response?.data?.data?.createCollection
}

const updateNft = (input: Collection) => {

}

const createNft = async (input: any) => {
  console.log("CREATING NFT: ", input)
  const variables = { input }
  const options = {
    headers: {
      'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
    }
  };

  const body = { query: createNftMutation, variables }
  const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
  return response?.data?.data?.createNft
}
