import { IWebhook } from "@moralisweb3/streams-typings";
import Moralis from "moralis";
import { handleRaffleOpen } from "./raffleOpen";
import { EventHash, EventType, RaffleCloseEvent, RaffleDrawnEvent, RaffleOpenEvent, RaffleRefundEvent, RaffleReleaseEvent, TicketPurchaseEvent, TicketRefundEvent } from "../types";
import { handleRaffleClose } from "./raffleClose";
import { handleRaffleDrawn } from "./raffleDrawn";
import { handleTicketPurchase } from "./ticketPurchase";
import { handleRaffleRelease } from "./raffleRelease";
import { handleRaffleRefund } from "./raffleRefund";
import { handleTicketRefund } from "./ticketRefund";

export const handleWebhookStream = async (webhook: IWebhook): Promise<void> => {
  if (!webhook.confirmed) {
    const decodedLogs = Moralis.Streams.parsedLogs(webhook);
    const blockTimestamp = webhook.block.timestamp
    const chainId = webhook.chainId

    const promises: Promise<any>[] = []
    decodedLogs.map((log, index) => {
      const eventHash = webhook.logs[index]?.topic0 || ""
      const eventType = EventHash[eventHash]
      const fromAddress = webhook.txs[index].fromAddress
      const txId = webhook.logs[0].transactionHash
      console.log("Event Type: ", eventType)
      console.log(`Handling Log ${index}:`, JSON.stringify(log))
      promises.push(handleLog(log, eventType, chainId, fromAddress, blockTimestamp, txId))
    })
    await Promise.all(promises)
  };
}

const handleLog = async (
  log: any,
  eventType: EventType,
  chainId: string,
  fromAddress: string,
  blockTimestamp: string,
  txId: string
) => {
  const contract = log.address

  switch (eventType) {
    case EventType.RaffleOpen:
      await handleRaffleOpen(
        log as RaffleOpenEvent,
        txId,
        blockTimestamp,
        fromAddress,
        chainId,
        contract
      );
      break;
    case EventType.RaffleClose:
      await handleRaffleClose(
        log as RaffleCloseEvent,
        txId,
        blockTimestamp,
        chainId
      );
      break;
    case EventType.RaffleDrawn:
      await handleRaffleDrawn(
        log as RaffleDrawnEvent,
        txId,
        blockTimestamp,
        chainId
      );
      break;
    case EventType.RaffleRelease:
      await handleRaffleRelease(
        log as RaffleReleaseEvent,
        txId,
        blockTimestamp,
        chainId
      );
      break;
    case EventType.RaffleRefund:
      await handleRaffleRefund(
        log as RaffleRefundEvent,
        txId,
        blockTimestamp,
        chainId
      );
      break;
    case EventType.TicketPurchase:
      await handleTicketPurchase(
        log as TicketPurchaseEvent,
        txId,
        blockTimestamp,
        chainId
      );
      break;
    case EventType.TicketRefund:
      await handleTicketRefund(
        log as TicketRefundEvent,
        txId,
        blockTimestamp,
        chainId
      );
      break;
    default:
      break;
  }
}
