import { sendRaffleCreateWebhook } from "../clients/DiscordClient";
import { getOrCreateAccount, updateAccount } from "../services/AccountService";
import { getOrCreateNft } from "../services/NFTService";
import { createRaffle, getRaffleByRaffleId } from "../services/RaffleService";
import { incrementRaffles } from "../services/StatService";
import { createTransactionRecord } from "../services/TransactionService";
import { EventType, RaffleOpenEvent } from "../types";

export const handleRaffleOpen = async (
  log: RaffleOpenEvent,
  txId: string,
  timestamp: string,
  createdBy: string,
  chainId: string,
  contract: string
) => {
  console.log("IN OPEN")
  var raffle = await getRaffleByRaffleId(parseInt(log.raffleId.toString()))
  console.log("GOT RAFF: ", raffle)

  if (!raffle) {
  try {
    const transaction = await createTransactionRecord(txId, timestamp, EventType.RaffleOpen, chainId)
    console.log("TX: ", transaction)
    const nft = await getOrCreateNft(log.nftAddress, log.tokenId.toString(), chainId)
    console.log("NFT: ", nft)
    const raffle = await createRaffle(
      parseInt(log.raffleId.toString()),
      chainId,
      nft.id,
      createdBy,
      contract,
      parseInt(log.tickets.toString()),
      log.tokenId.toString(),
      log.nftAddress,
      new Date(parseInt(log.expires.toString()) * 1000),
      transaction.id
    )

    const account = await getOrCreateAccount(createdBy)
    console.log("GOT ACCOUNT: ", account)
    const updatedAccount = await updateAccount({
      id: account.id,
      rafflesCreated: account.rafflesCreated + 1,
      updatedAt: new Date(),
      _version: account._version
    })

    await incrementRaffles(1, chainId)

    try {
      console.log("NFT: ", JSON.parse(nft.lastSales))
      await sendRaffleCreateWebhook(raffle, nft)
    } catch (error) {
      console.log("DISCORD ERROR: ", error)
    }

  } catch (error) {
    console.log("TX ERR: ", error)
  }
  }
  return true;
};