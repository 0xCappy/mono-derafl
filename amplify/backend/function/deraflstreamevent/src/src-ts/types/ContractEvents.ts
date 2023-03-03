import { BigNumber } from "alchemy-sdk";

export interface RaffleOpenEvent {
    raffleId: BigNumber;
    nftAddress: string;
    tokenId: BigNumber;
    tickets: BigNumber;
    expires: BigNumber;
}

export interface RaffleCloseEvent {
    raffleId: BigNumber;
}

export interface RaffleDrawnEvent {
    raffleId: BigNumber;
    winningTicket: BigNumber;
}

export interface RaffleReleaseEvent {
    raffleId: BigNumber;
    winner: string;
    royaltiesPaid: BigNumber,
    ethPaid: BigNumber
}

export interface RaffleRefundEvent {
    raffleId: BigNumber;
}

export interface TicketPurchaseEvent {
    raffleId: BigNumber;
    batchId: BigNumber;
    purchaser: string;
    ticketFrom: BigNumber;
    ticketAmount: BigNumber;
}

export interface TicketRefundEvent {
    raffleId: BigNumber;
    refundee: string;
    ethAmount: BigNumber;
}