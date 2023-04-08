import raflAbi from "../abi/rafl.json";
import { useContractRead } from 'wagmi'
import { BigNumber } from "ethers";

function useRoyalties(
  tokenAddress: string | undefined,
  tokenId: string | undefined,
  chainId: number,
  deraflAddress: string
): { fee: number, recipient: string} {
  console.log("ROY< ROY")
  const contractRead = useContractRead({
    address: deraflAddress as `0x${string}`,
    abi: raflAbi,
    functionName: 'getRoyaltyInfo',
    args: [tokenAddress, tokenId],
    chainId
  })
  console.log("CRL: ")
    if (contractRead.isError) {
    return {
      fee: 0,
      recipient: ''
    };
  }
  if (!contractRead.data) {
    return {
      fee: 0,
      recipient: ''
    };
  }
  const [recipient, fee] = contractRead.data as [string, BigNumber]
  return {recipient, fee: parseFloat(fee.toString())}
}

export default useRoyalties;