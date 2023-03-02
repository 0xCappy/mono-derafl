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
    const log = decodedLogs[0];
    const eventHash = webhook.logs[0]?.topic0 || "";
    const eventType = EventHash[eventHash];
    const txId = webhook.logs[0].transactionHash;
    const contract = webhook.logs[0].address

    console.log("TYPE: ", eventType)
    switch (eventType) {
      case EventType.RaffleOpen:
        await handleRaffleOpen(
          log as RaffleOpenEvent,
          txId,
          webhook.block.timestamp,
          webhook.txs[0].fromAddress.toLowerCase(),
          webhook.chainId,
          contract
        );
        break;
      case EventType.RaffleClose:
        await handleRaffleClose(
          log as RaffleCloseEvent,
          txId,
          webhook.block.timestamp,
          webhook.chainId
        );
        break;
      case EventType.RaffleDrawn:
        await handleRaffleDrawn(
          log as RaffleDrawnEvent,
          txId,
          webhook.block.timestamp,
          webhook.chainId
        );
        break;
      case EventType.RaffleRelease:
        await handleRaffleRelease(
          log as RaffleReleaseEvent,
          txId,
          webhook.block.timestamp,
          webhook.chainId
        );
        break;
      case EventType.RaffleRefund:
        await handleRaffleRefund(
          log as RaffleRefundEvent,
          txId,
          webhook.block.timestamp,
          webhook.chainId
        );
        break;
      case EventType.TicketPurchase:
        await handleTicketPurchase(
          log as TicketPurchaseEvent,
          txId,
          webhook.block.timestamp,
          webhook.chainId
        );
        break;
      case EventType.TicketRefund:
        await handleTicketRefund(
          log as TicketRefundEvent,
          txId,
          webhook.block.timestamp,
          webhook.chainId
        );
        break;
      default:
        break;
    }
  }
};