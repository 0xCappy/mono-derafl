import nftAbi from "../abi/erc721.json";
import { useContractRead } from 'wagmi'

function useNFTOwner(
  tokenAddress: string | undefined,
  tokenId: string | undefined,
  chainId: number
): string | undefined {

  const { data, isError, isLoading } = useContractRead({
    address: tokenAddress,
    abi: nftAbi,
    functionName: 'ownerOf',
    args: [tokenId],
    watch: true,
    chainId
  } ?? [])

  if (isError) {
    return undefined;
  }
  return data as string
}

export default useNFTOwner;