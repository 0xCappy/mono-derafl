import { getRaffleByRaffleId, updateRaffle } from "../services/RaffleService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, RaffleRefundEvent, RaffleState } from "../types";

export const handleRaffleRefund = async (
  log: RaffleRefundEvent,
  txId: string,
  timestamp: string,
  chainId: string
) => {
  var raffle = await getRaffleByRaffleId(parseInt(log.raffleId.toString()));
  if (!raffle) {
    throw new Error("Invalid raffle Id");
  }
  const transaction = await createTransactionRecord(txId, timestamp, EventType.RaffleRefund, chainId, raffle.raffleNonce);

  await updateRaffle({
    id: raffle.id,
    state: RaffleState.REFUNDED,
    raffleRefundTxId: transaction.id,
    _version: raffle._version
  })
};
