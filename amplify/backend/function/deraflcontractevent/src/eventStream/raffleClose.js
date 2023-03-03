"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRaffleClose = void 0;
const RaffleService_1 = require("../services/RaffleService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleRaffleClose = async (log, txId, timestamp, chainId) => {
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()));
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }
    const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.RaffleClose, chainId);
    await RaffleService_1.updateRaffle({
        state: types_1.RaffleState.PENDING_DRAW,
        raffleCloseTxId: transaction.id,
        _version: raffle._version
    });
};
//# sourceMappingURL=raffleClose.js.map