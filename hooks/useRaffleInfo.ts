import raflAbi from "../abi/rafl.json";
import { RaffleInfo } from "../types";
import { useContractRead } from 'wagmi'

function useRaffleInfo(
  raffleId: string | undefined,
  chainId: number,
  deraflAddress: string
  ): RaffleInfo | undefined {
  const { data, isError, isLoading } = useContractRead({
    address: deraflAddress,
    abi: raflAbi,
    functionName: 'getRaffle',
    args: [raffleId],
    watch: true,
    chainId
  } ?? [])

  if (isError) {
    return undefined;
  }
  return data as RaffleInfo
}

export default useRaffleInfo;