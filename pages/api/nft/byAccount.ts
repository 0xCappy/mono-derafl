import { NextApiRequest, NextApiResponse } from 'next';
import {
  Alchemy,
  Network,
  OwnedNft as AlchemyOwnedNft,
  Nft,
  NftFilters,
} from "alchemy-sdk";
import OwnedNftsResponse from '@/types/OwnedNftsResponse';
import OwnedNft from '@/types/OwnedNft';
import { mapHexToAlchemyChain } from '@/common/utils/mapHexToAlchemyChain';

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address, pageSize, pageKey, chainId } = JSON.parse(req.body)
  const response = await getNftsForOwner(address, pageSize, mapHexToAlchemyChain(chainId), pageKey)
  res.status(200).json(response)
}

const getNftsForOwner = async (
  address: string,
  pageSize: number,
  alchemyNetwork: Network,
  pageKey?: string,
): Promise<OwnedNftsResponse> => {
  const alchemyConfig = {
    apiKey: ALCHEMY_KEY,
    network: alchemyNetwork
  };

  const alchemy = new Alchemy(alchemyConfig);
  try {
    const alchemyResponse = await alchemy.nft.getNftsForOwner(address, {
      pageSize: pageSize,
      pageKey,
      // excludeFilters: [NftFilters.AIRDROPS, NftFilters.SPAM]
    });
    console.log("NFTSL: ", alchemyResponse.ownedNfts[0].media)
    return {
      nfts: alchemyResponse.ownedNfts.map((nft) => mapOwnedNftResponse(nft)),
      pageKey: alchemyResponse.pageKey,
    };
  } catch (error) {
    throw new Error("error");
  }
};

const mapOwnedNftResponse = (nft: AlchemyOwnedNft | Nft): OwnedNft => ({
  contractAddress: nft.contract.address,
  contractName: nft.contract.name || nft.contract.openSea?.collectionName || 'Unknown contract',
  tokenName: nft.title || nft.rawMetadata?.name || `${nft.contract.symbol || ''} #${nft.tokenId}` || 'Unknown token',
  symbol: nft.contract.symbol,
  tokenId: nft.tokenId,
  imageUri: nft.media?.[0]?.gateway || nft.rawMetadata?.image,
  thumbnailUri: nft.media?.[0]?.thumbnail,
  tokenType: nft.tokenType
});
