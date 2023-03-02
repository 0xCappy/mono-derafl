import { getOrCreateAccount, updateAccount } from "../services/AccountService";
import { getRaffle, updateRaffle } from "../services/RaffleService";
import { getWinningBatch } from "../services/TicketBatchService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, RaffleDrawnEvent, RaffleState } from "../types";

export const handleRaffleDrawn = async (
  log: RaffleDrawnEvent,
  txId: string,
  timestamp: string,
  chainId: string
) => {
  var raffle = await getRaffle(parseInt(log.raffleId.toString()));
  if (!raffle) {
    throw new Error("Invalid raffle Id");
  }

  const winningTicket = parseInt(log.winningTicket.toString());
  const winningBatch = await getWinningBatch(raffle.raffleId, winningTicket)

  if (!winningBatch) {
    // shit
  }

  const transaction = await createTransactionRecord(txId, timestamp, EventType.RaffleDrawn, chainId);

  await updateRaffle({
    id: raffle.id,
    state: RaffleState.DRAWN,
    winningTicket: winningTicket,
    raffleWinningBatchId: winningBatch.id,
    winningAccount: winningBatch.purchaser,
    raffleDrawnTxId: transaction.id,
    _version: raffle._version
  })

  let account = await getOrCreateAccount(winningBatch.purchaser)
  updateAccount({
    id: account.id,
    rafflesWon: account.rafflesWon + 1,
    _version: account._version
  })
};