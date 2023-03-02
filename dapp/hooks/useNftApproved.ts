import nftAbi from "../abi/erc721.json";
import { useContractRead } from 'wagmi'

function useNftApproved(
  tokenAddress: string | undefined,
  tokenId: string | undefined,
  spenderAddress: string,
  chainId: number
) {
  const { data, isError, isLoading } = useContractRead({
    address: tokenAddress,
    abi: nftAbi,
    functionName: 'getApproved',
    args: [tokenId],
    watch: true,
    chainId
  } ?? [])
  
  if (isError) {
    console.error(isError);
    return undefined;
  }
  return data && (data as string).toLowerCase() === spenderAddress.toLowerCase()
}

export default useNftApproved;


