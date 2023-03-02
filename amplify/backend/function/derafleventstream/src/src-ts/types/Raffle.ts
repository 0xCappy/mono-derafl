import { NFT, RaffleState, TicketBatch, Transaction, Base } from "./";

export default interface Raffle extends Base {
    expires: Date
    nft: NFT
    progress: number
    raffleId: number
    state: RaffleState
    ticketBatches: number
    ticketsAvailable: number
    ticketsSold: number
    openTx: Transaction
    totalSupply: string
    closeTx?: Transaction
    drawnTx?: Transaction
    releaseTx?: Transaction
    refundTx?: Transaction
    winningBatch?: TicketBatch
    winningAccount?: string
    owner: string
    chainId: string
    contract: string
}