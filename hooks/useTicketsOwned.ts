import { BigNumber } from "ethers";
import raflAbi from "../abi/rafl.json";
import { useContractRead } from 'wagmi'

function useTicketsOwned(
  raffleId: string | undefined,
  ticketOwner: string | undefined,
  chainId: number,
  deraflAddress: string
): { ticketsOwned: number, isRefunded: boolean} {

  const { data, isError, isLoading } = useContractRead({
    address: deraflAddress as `0x${string}`,
    abi: raflAbi,
    functionName: 'getUserInfo',
    args: [raffleId, ticketOwner],
    watch: true,
    chainId
  } ?? [])

  const _data = data as [BigNumber, boolean]
  console.log("TICKETS: ", data)
  return {
    ticketsOwned: parseInt(_data?.[0]?.toString() || '0'),
    isRefunded: _data?.[1] || false,
  }
}

export default useTicketsOwned;