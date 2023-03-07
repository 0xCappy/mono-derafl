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
        const promises = [];
        decodedLogs.map(log => {
            promises.push(handleLog(log));
        });
        await Promise.all(promises);
    }
    ;
    const handleLog = async (log) => {
        const eventHash = log.topic0 || "";
        const eventType = types_1.EventHash[eventHash];
        const txId = log.transactionHash;
        const contract = log.address;
        console.log("TYPE: ", eventType);
        switch (eventType) {
            case types_1.EventType.RaffleOpen:
                await raffleOpen_1.handleRaffleOpen(log, txId, webhook.block.timestamp, webhook.txs[0].fromAddress.toLowerCase(), webhook.chainId, contract);
                break;
            case types_1.EventType.RaffleClose:
                await raffleClose_1.handleRaffleClose(log, txId, webhook.block.timestamp, webhook.chainId);
                break;
            case types_1.EventType.RaffleDrawn:
                await raffleDrawn_1.handleRaffleDrawn(log, txId, webhook.block.timestamp, webhook.chainId);
                break;
            case types_1.EventType.RaffleRelease:
                await raffleRelease_1.handleRaffleRelease(log, txId, webhook.block.timestamp, webhook.chainId);
                break;
            case types_1.EventType.RaffleRefund:
                await raffleRefund_1.handleRaffleRefund(log, txId, webhook.block.timestamp, webhook.chainId);
                break;
            case types_1.EventType.TicketPurchase:
                await ticketPurchase_1.handleTicketPurchase(log, txId, webhook.block.timestamp, webhook.chainId);
                break;
            case types_1.EventType.TicketRefund:
                await ticketRefund_1.handleTicketRefund(log, txId, webhook.block.timestamp, webhook.chainId);
                break;
            default:
                break;
        }
    };
};
//# sourceMappingURL=index.js.map