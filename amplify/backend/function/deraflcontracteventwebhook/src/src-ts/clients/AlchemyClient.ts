import {
  NftFilters,
  Alchemy,
  Network,
  OwnedNft as AlchemyOwnedNft,
  GetNftSalesResponse,
  Nft as AlchemyNft,
} from "alchemy-sdk";
import axios from "axios";
import NftSale from "../types/NftSale";
import OwnedNft from "../types/OwnedNft";

export const getNft = async (
  address: string,
  tokenId: string,
  alchemyNetwork: Network,
): Promise<AlchemyNft> => {
  const alchemyConfig = {
    apiKey: process.env.ALCHEMY_KEY,
    network: alchemyNetwork
  };
  const alchemy = new Alchemy(alchemyConfig);

  const nft = await alchemy.nft.getNftMetadata(address, tokenId, {});
  return nft;
};

const mapAlchemyNftToNFt = (alchemyNft: AlchemyNft, chainId: string): any => {
  return {
    contractAddress: alchemyNft.contract.address,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: JSON.stringify(alchemyNft.rawMetadata),
    tokenUri: alchemyNft.tokenUri?.raw,
    tokenId: alchemyNft.tokenId,
    symbol: alchemyNft.contract.symbol,
    imageUri: alchemyNft.media[0]?.raw || alchemyNft.rawMetadata?.image,
    tokenName: alchemyNft.rawMetadata?.name || `${alchemyNft.contract.symbol || alchemyNft.contract.name} #${alchemyNft.tokenId}`,
    collectionName: alchemyNft.contract.name
  }
}

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

// export const getOwnedNft = async (
//   address: string,
//   tokenId: string,
//   alchemyNetwork: Network,
// ): Promise<OwnedNft> => {
//   const nft = await getNft(address, tokenId, alchemyNetwork);
//   return mapOwnedNftResponse(nft);
// };

// export const getFloorPrice = async (address: string, alchemyNetwork: Network) => {
//   const alchemyConfig = {
//     apiKey: config.ALCHEMY_KEY,
//     network: alchemyNetwork
//   };
//   const alchemy = new Alchemy(alchemyConfig);
//   const floorPrice = await alchemy.nft.getFloorPrice(address);
//   return floorPrice;
// };

export const getNftLastSalePrice = async (
  address: string,
  tokenId: string,
  alchemyNetwork: Network,
): Promise<NftSale[] | []> => {
  try {
    const response = await axios.get<GetNftSalesResponse>(
      `https://${alchemyNetwork}.g.alchemy.com/nft/v2/${process.env.ALCHEMY_KEY}/getNFTSales?fromBlock=0&toBlock=latest&order=desc&contractAddress=${address}&tokenId=${tokenId}&limit=3`
    );
    const salesResponse = response.data;
    return salesResponse.nftSales.map((nft) => ({
      marketPlace: nft.marketplace,
      quantity: nft.quantity,
      hash: nft.transactionHash,
      block: nft.blockNumber,
      amount: nftSalePrice(
        parseInt(nft.sellerFee.amount),
        parseInt(nft.protocolFee?.amount || "0"),
        parseInt(nft.royaltyFee?.amount || "0")
      ),
    }));
  } catch (error) {
    return [];
  }
};

// export const getAttributeSummary = async (address: string, alchemyNetwork: Network) => {
//   const alchemyConfig = {
//     apiKey: config.ALCHEMY_KEY,
//     network: alchemyNetwork
//   };
//   const alchemy = new Alchemy(alchemyConfig);
//   const attributes = await alchemy.nft.summarizeNftAttributes(address);
//   return attributes.summary;
// };
// // fetch('https://eth-mainnet.g.alchemy.com/nft/v2/docs-demo/getNFTSales?fromBlock=0&toBlock=latest&order=asc&contractAddress=0xe785E82358879F061BC3dcAC6f0444462D4b5330&tokenId=44', options)

// const mapOwnedNftResponse = (nft: AlchemyOwnedNft | Nft): OwnedNft => ({
//   contractAddress: nft.contract.address,
//   name: nft.contract.name,
//   symbol: nft.contract.symbol,
//   tokenId: nft.tokenId,
//   imageUri: nft.rawMetadata?.image,
//   tokenType: nft.tokenType
// });

const nftSalePrice = (x: number, y: number, z: number) =>
  (x + y + z) * 10 ** -18;
