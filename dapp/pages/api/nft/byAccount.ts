import { NextApiRequest, NextApiResponse } from 'next';
import {
  Alchemy,
  Network,
  OwnedNft as AlchemyOwnedNft,
  Nft,
} from "alchemy-sdk";
import OwnedNftsResponse from '@/types/OwnedNftsResponse';
import OwnedNft from '@/types/OwnedNft';
import { mapHexToAlchemyChain } from '@/common/utils/mapHexToAlchemyChain';

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY!

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { address, offset, pageSize, pageKey, chainId } = JSON.parse(req.body)
  const response = await getNftsForOwner(address, pageSize, mapHexToAlchemyChain(chainId), pageKey)
  // const response = await axios.post(`${process.env.API_URL}/fetchAddressNFT`, { address, offset, pageSize, pageKey, chainId })
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
    });

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
  name: nft.contract.name,
  symbol: nft.contract.symbol,
  tokenId: nft.tokenId,
  imageUri: nft.rawMetadata?.image,
  tokenType: nft.tokenType
});
