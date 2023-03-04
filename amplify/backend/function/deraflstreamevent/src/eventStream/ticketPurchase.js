"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleTicketPurchase = void 0;
const AccountService_1 = require("../services/AccountService");
const RaffleService_1 = require("../services/RaffleService");
const StatService_1 = require("../services/StatService");
const TicketBatchService_1 = require("../services/TicketBatchService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleTicketPurchase = async (log, txId, timestamp, chainId) => {
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()));
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }
    const ticketsBought = parseInt(log.ticketAmount.toString());
    const firstTicket = parseInt(log.ticketFrom.toString());
    const lastTicket = firstTicket + ticketsBought - 1;
    const totalTicketsBought = ticketsBought + raffle.ticketsSold;
    const ticketsAvailable = raffle.ticketsAvailable;
    const progress = (totalTicketsBought * 100) / ticketsAvailable;
    await RaffleService_1.updateRaffle({
        ticketBatches: raffle.ticketBatches + 1,
        progress,
        ticketsSold: raffle.ticketsSold + ticketsBought,
        state: totalTicketsBought === ticketsAvailable ? types_1.RaffleState.CLOSED : types_1.RaffleState.ACTIVE
    });
    const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.TicketPurchase, chainId, raffle.raffleNonce);
    const ticketBatch = await TicketBatchService_1.createTicketBatch(raffle.id, ticketsBought, firstTicket, lastTicket, parseInt(log.batchId.toString()), log.purchaser.toLowerCase(), transaction.id, raffle.raffleNonce, chainId);
    // increment tickets bought on account
    const hasParticipated = await TicketBatchService_1.getAccountParticipation(log.purchaser.toLowerCase(), raffle.raffleNonce);
    let account = await AccountService_1.getOrCreateAccount(log.purchaser.toLowerCase());
    await AccountService_1.updateAccount({
        id: account.id,
        ticketsBought: account.ticketsBought + ticketsBought,
        rafflesEntered: hasParticipated ? account.rafflesEntered : account.rafflesEntered + 1
    });
    await StatService_1.incrementTickets(ticketsBought, chainId);
};
//# sourceMappingURL=ticketPurchase.js.map