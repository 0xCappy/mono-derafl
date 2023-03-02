import { NextApiRequest, NextApiResponse } from "next";
import {
    Alchemy,
    Network,
    OwnedNft as AlchemyOwnedNft,
    Nft,
} from "alchemy-sdk";
import OwnedNft from '@/types/OwnedNft';
import { mapHexToAlchemyChain } from '@/common/utils/mapHexToAlchemyChain';

const ALCHEMY_KEY = process.env.ALCHEMY_API_KEY!

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { tokenId, contractAddress, chainId } = JSON.parse(req.body)
    const response = await getNft(contractAddress, tokenId, mapHexToAlchemyChain(chainId)) // await axios.post(`${process.env.API_URL}/fetchNFT`, { tokenId, contractAddress, chainId })
    res.status(200).json(response)
}

export const getNft = async (
    address: string,
    tokenId: string,
    alchemyNetwork: Network,
): Promise<OwnedNft> => {
    const alchemyConfig = {
        apiKey: ALCHEMY_KEY,
        network: alchemyNetwork
    };

    const alchemy = new Alchemy(alchemyConfig);

    const nft = await alchemy.nft.getNftMetadata(address, tokenId, {});
    return mapOwnedNftResponse(nft);
};

const mapOwnedNftResponse = (nft: AlchemyOwnedNft | Nft): OwnedNft => ({
    contractAddress: nft.contract.address,
    name: nft.contract.name,
    symbol: nft.contract.symbol,
    tokenId: nft.tokenId,
    imageUri: nft.rawMetadata?.image,
    tokenType: nft.tokenType
});
