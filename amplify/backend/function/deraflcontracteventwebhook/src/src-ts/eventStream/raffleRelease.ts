import { formatEther } from "ethers";
import { sendRaffleCompleteWebhook } from "../clients/DiscordClient";
import { getRaffle, updateRaffle } from "../services/RaffleService";
import { incrementEth, incrementRoyalties } from "../services/StatService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, RaffleReleaseEvent, RaffleState } from "../types";

export const handleRaffleRelease = async (
  log: RaffleReleaseEvent,
  txId: string,
  timestamp: string,
  chainId: string
) => {
  var raffle = await getRaffle(parseInt(log.raffleId.toString()));
  if (!raffle) {
    throw new Error("Invalid raffle Id");
  }

  const transaction = await createTransactionRecord(txId, timestamp, EventType.RaffleRelease, chainId);

  await updateRaffle({
    id: raffle.id,
    state: RaffleState.RELEASED,
    raffleReleaseTxId: transaction.id,
    _version: raffle._version    
  })

  await incrementRoyalties(parseFloat(formatEther(log.royaltiesPaid.toString())), chainId)
  await incrementEth(parseFloat(formatEther(log.ethPaid.toString())), chainId)

  try {
    await sendRaffleCompleteWebhook(raffle, raffle.nft)
  } catch (error) {
    console.error("Discord Err: ", error)
  }
};
