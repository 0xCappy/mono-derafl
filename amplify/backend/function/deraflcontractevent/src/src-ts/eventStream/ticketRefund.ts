import { getRaffleByRaffleId } from "../services/RaffleService";
import { createTicketRefund } from "../services/TicketRefundService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, TicketRefundEvent } from "../types";

export const handleTicketRefund = async (
  log: TicketRefundEvent,
  txId: string,
  timestamp: string,
  chainId: string
) => {
  var raffle = await getRaffleByRaffleId(parseInt(log.raffleId.toString()));
  if (!raffle) {
    throw new Error("Invalid raffle Id");
  }
  const transaction = await createTransactionRecord(txId, timestamp, EventType.TicketRefund, chainId);
  await createTicketRefund(raffle.id, transaction.id, parseFloat(log.ethAmount.toString()), log.refundee)
};
