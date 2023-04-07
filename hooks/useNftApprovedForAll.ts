import nftAbi from "../abi/erc721.json";
import { useContractRead } from 'wagmi'

function useNftApprovedForAll(
  tokenAddress: string | undefined,
  ownerAddress: string | undefined,
  spenderAddress: string
) {
  const { data, isError, isLoading, error } = useContractRead({
    address: tokenAddress as `0x${string}`,
    abi: nftAbi,
    functionName: 'isApprovedForAll',
    args: [ownerAddress, spenderAddress],
    watch: true
  } ?? [])
  
  if (isError) {
    return undefined;
  }
  return data
}

export default useNftApprovedForAll;


