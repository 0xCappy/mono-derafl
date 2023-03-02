import { NFTMetadata, ParseObjectBase } from ".";
import Collection from "./Collection";
import NftSale from "./NftSale";
import RarityData from "./RarityData";

export default interface NFT extends ParseObjectBase {
  contractAddress: string
  tokenAddress: string
  metadata?: NFTMetadata
  symbol: string
  tokenId: string
  tokenUri: string
  ownerOf: string
  imageUri: string
  collection: Collection
  lastSale?: string
  rarityData?: RarityData
  openseaImage: string
  lastSales: NftSale[]
  collectionName?: string
  tokenName?: string
  chainId: string
}
