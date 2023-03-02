import raflAbi from "../abi/rafl.json";
import { useContractRead } from 'wagmi'
import { BigNumber } from "ethers";

function useRoyalties(
  tokenAddress: string | undefined,
  tokenId: string | undefined,
  chainId: number,
  deraflAddress: string
): BigNumber | undefined {
  const contractRead = useContractRead({
    address: deraflAddress,
    abi: raflAbi,
    functionName: 'getRoyaltyInfo',
    args: [tokenAddress, tokenId],
    watch: true,
    chainId
  })
    if (contractRead.isError) {
    return undefined;
  }
  if (!contractRead.data) {
    return undefined
  }
  const royaltyInfo = contractRead.data as [string, BigNumber]
  return royaltyInfo[1]
}

export default useRoyalties;