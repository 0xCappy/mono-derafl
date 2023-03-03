import { getOrCreateAccount, updateAccount } from "../services/AccountService";
import { getRaffleByRaffleId, updateRaffle } from "../services/RaffleService";
import { incrementTickets } from "../services/StatService";
import { createTicketBatch, getAccountParticipation } from "../services/TicketBatchService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, RaffleState, TicketPurchaseEvent } from "../types";

export const handleTicketPurchase = async (
  log: TicketPurchaseEvent,
  txId: string,
  timestamp: string,
  chainId: string
) => {
  var raffle = await getRaffleByRaffleId(parseInt(log.raffleId.toString()));
  if (!raffle) {
    throw new Error("Invalid raffle Id");
  }

  const ticketsBought = parseInt(log.ticketAmount.toString());
  const firstTicket = parseInt(log.ticketFrom.toString());
  const lastTicket = firstTicket + ticketsBought - 1;
  const totalTicketsBought = ticketsBought + raffle.ticketsSold;

  const ticketsAvailable: number = raffle.ticketsAvailable;
  const progress = (totalTicketsBought * 100) / ticketsAvailable;

  await updateRaffle({
    ticketBatches: raffle.ticketBatches + 1,
    progress,
    ticketsSold: raffle.ticketsSold + ticketsBought,
    state: totalTicketsBought === ticketsAvailable ? RaffleState.CLOSED : RaffleState.ACTIVE
  })

  const transaction = await createTransactionRecord(txId, timestamp, EventType.TicketPurchase, chainId, raffle.raffleNonce);
  const ticketBatch = await createTicketBatch(
    raffle.id,
    ticketsBought,
    firstTicket,
    lastTicket,
    parseInt(log.batchId.toString()),
    log.purchaser.toLowerCase(),
    transaction.id,
    raffle.raffleNonce,
    chainId
  )

  // increment tickets bought on account

  const hasParticipated = await getAccountParticipation(log.purchaser.toLowerCase(), raffle.raffleNonce)

  let account = await getOrCreateAccount(log.purchaser.toLowerCase())
  await updateAccount({
    id: account.id,
    ticketsBought: account.ticketsBought + ticketsBought,
    _version: account._version,
    rafflesEntered: hasParticipated ? account.rafflesEntered : account.rafflesEntered + 1
  })
  await incrementTickets(ticketsBought, chainId)
};