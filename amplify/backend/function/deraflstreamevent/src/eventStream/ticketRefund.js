"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTicketRefund = void 0;
const RaffleService_1 = require("../services/RaffleService");
const TicketRefundService_1 = require("../services/TicketRefundService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleTicketRefund = async (log, txId, timestamp, chainId) => {
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()), chainId);
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }
    const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.TicketRefund, chainId, raffle.raffleNonce);
    await TicketRefundService_1.createTicketRefund(raffle.id, transaction.id, parseFloat(log.ethAmount.toString()), log.refundee);
};
//# sourceMappingURL=ticketRefund.js.map