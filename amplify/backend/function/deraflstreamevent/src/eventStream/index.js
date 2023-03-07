"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleWebhookStream = void 0;
const moralis_1 = require("moralis");
const raffleOpen_1 = require("./raffleOpen");
const types_1 = require("../types");
const raffleClose_1 = require("./raffleClose");
const raffleDrawn_1 = require("./raffleDrawn");
const ticketPurchase_1 = require("./ticketPurchase");
const raffleRelease_1 = require("./raffleRelease");
const raffleRefund_1 = require("./raffleRefund");
const ticketRefund_1 = require("./ticketRefund");
exports.handleWebhookStream = async (webhook) => {
    if (!webhook.confirmed) {
        const decodedLogs = moralis_1.default.Streams.parsedLogs(webhook);
        const blockTimestamp = webhook.block.timestamp;
        const chainId = webhook.chainId;
        const promises = [];
        decodedLogs.map((log, index) => {
            const eventHash = webhook.logs[index]?.topic0 || "";
            const eventType = types_1.EventHash[eventHash];
            const fromAddress = webhook.txs[index].fromAddress;
            const txId = webhook.logs[0].transactionHash;
            console.log("Event Type: ", eventType);
            console.log(`Handling Log ${index}:`, JSON.stringify(log));
            promises.push(handleLog(log, eventType, chainId, fromAddress, blockTimestamp, txId));
        });
        await Promise.all(promises);
    }
    ;
};
const handleLog = async (log, eventType, chainId, fromAddress, blockTimestamp, txId) => {
    const contract = log.address;
    switch (eventType) {
        case types_1.EventType.RaffleOpen:
            await raffleOpen_1.handleRaffleOpen(log, txId, blockTimestamp, fromAddress, chainId, contract);
            break;
        case types_1.EventType.RaffleClose:
            await raffleClose_1.handleRaffleClose(log, txId, blockTimestamp, chainId);
            break;
        case types_1.EventType.RaffleDrawn:
            await raffleDrawn_1.handleRaffleDrawn(log, txId, blockTimestamp, chainId);
            break;
        case types_1.EventType.RaffleRelease:
            await raffleRelease_1.handleRaffleRelease(log, txId, blockTimestamp, chainId);
            break;
        case types_1.EventType.RaffleRefund:
            await raffleRefund_1.handleRaffleRefund(log, txId, blockTimestamp, chainId);
            break;
        case types_1.EventType.TicketPurchase:
            await ticketPurchase_1.handleTicketPurchase(log, txId, blockTimestamp, chainId);
            break;
        case types_1.EventType.TicketRefund:
            await ticketRefund_1.handleTicketRefund(log, txId, blockTimestamp, chainId);
            break;
        default:
            break;
    }
};
//# sourceMappingURL=index.js.map