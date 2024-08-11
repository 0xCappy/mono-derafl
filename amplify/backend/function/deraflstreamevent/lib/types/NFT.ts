import NFTMetadata from "./NFTMetadata";
import Collection from "./Collection";
import RarityData from "./RarityData";
import NftSale from "./NftSale";

export default interface NFT {
  contractAddress: string
  collectionName?: string
  tokenName?: string
  symbol?: string
  tokenId: string
  tokenUri?: string
  imageUri?: string
  collection: Collection
  ownerOf?: string
  lastSales: NftSale[]
  rarityData?: RarityData
  metadata?: NFTMetadata
  createdAt: Date
  updatedAt: Date
}
