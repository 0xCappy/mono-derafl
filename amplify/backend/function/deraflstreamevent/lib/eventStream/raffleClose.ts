import { getRaffleByRaffleId, updateRaffle } from "../services/RaffleService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, RaffleCloseEvent, RaffleState } from "../types";

export const handleRaffleClose = async (
    log: RaffleCloseEvent,
    txId: string,
    timestamp: string,
    chainId: string
) => {
    var raffle = await getRaffleByRaffleId(parseInt(log.raffleId.toString()), chainId);
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }

    const transaction = await createTransactionRecord(txId, timestamp, EventType.RaffleClose, chainId, raffle.raffleNonce)
    await updateRaffle({
        id: raffle.id,
        state: RaffleState.PENDING_DRAW,
        raffleCloseTxId: transaction.id
    })
};
