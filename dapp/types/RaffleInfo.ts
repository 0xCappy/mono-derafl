import { BigNumber } from "ethers"

interface RaffleInfo {
    raffleId: BigNumber
    raffleState: BigNumber
    ticketPrice: BigNumber
    raffleOwner: string
    nftAddress: string
    tokenId: string
    ticketsAvailable: BigNumber
    ticketsSold: BigNumber
    batchIndex: BigNumber
    expiryTimestamp: BigNumber
    chainlinkRequestId: BigNumber
    winningTicket: BigNumber
    winner: string
    royaltyPercentage: BigNumber
}

export default RaffleInfo