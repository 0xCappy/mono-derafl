import { BigNumber } from "ethers";
import raflAbi from "../abi/rafl.json";
import { useContractRead } from 'wagmi'

function useTicketsOwned(
  raffleId: string | undefined,
  ticketOwner: string | undefined,
  chainId: number,
  deraflAddress: string
): BigNumber | undefined {

  const { data, isError, isLoading } = useContractRead({
    address: deraflAddress,
    abi: raflAbi,
    functionName: 'getUserInfo',
    args: [raffleId, ticketOwner],
    watch: true,
    chainId
  } ?? [])

  if (isError) {
    return undefined;
  }
  return data as BigNumber
}

export default useTicketsOwned;