"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRaffleDrawn = void 0;
const AccountService_1 = require("../services/AccountService");
const RaffleService_1 = require("../services/RaffleService");
const TicketBatchService_1 = require("../services/TicketBatchService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleRaffleDrawn = async (log, txId, timestamp, chainId) => {
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()));
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }
    const winningTicket = parseInt(log.winningTicket.toString());
    const winningBatch = await TicketBatchService_1.getWinningBatch(raffle.raffleNonce, winningTicket);
    if (!winningBatch) {
        // shit
    }
    const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.RaffleDrawn, chainId, raffle.raffleNonce);
    await RaffleService_1.updateRaffle({
        id: raffle.id,
        state: types_1.RaffleState.DRAWN,
        winningTicket: winningTicket,
        raffleWinningBatchId: winningBatch.id,
        winningAccount: winningBatch.purchaser,
        raffleDrawnTxId: transaction.id
    });
    let account = await AccountService_1.getOrCreateAccount(winningBatch.purchaser);
    AccountService_1.updateAccount({
        id: account.id,
        rafflesWon: account.rafflesWon + 1
    });
};
//# sourceMappingURL=raffleDrawn.js.map