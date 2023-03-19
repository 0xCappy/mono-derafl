"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRaffleRefund = void 0;
const RaffleService_1 = require("../services/RaffleService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleRaffleRefund = async (log, txId, timestamp, chainId) => {
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()), chainId);
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }
    const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.RaffleRefund, chainId, raffle.raffleNonce);
    await RaffleService_1.updateRaffle({
        id: raffle.id,
        state: types_1.RaffleState.REFUNDED,
        raffleRefundTxId: transaction.id
    });
};
//# sourceMappingURL=raffleRefund.js.map