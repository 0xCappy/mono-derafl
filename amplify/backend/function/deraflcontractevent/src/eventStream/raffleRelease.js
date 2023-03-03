"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRaffleRelease = void 0;
const ethers_1 = require("ethers");
const DiscordClient_1 = require("../clients/DiscordClient");
const RaffleService_1 = require("../services/RaffleService");
const StatService_1 = require("../services/StatService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleRaffleRelease = async (log, txId, timestamp, chainId) => {
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()));
    if (!raffle) {
        throw new Error("Invalid raffle Id");
    }
    const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.RaffleRelease, chainId);
    await RaffleService_1.updateRaffle({
        id: raffle.id,
        state: types_1.RaffleState.RELEASED,
        raffleReleaseTxId: transaction.id,
        _version: raffle._version
    });
    await StatService_1.incrementRoyalties(parseFloat(ethers_1.formatEther(log.royaltiesPaid.toString())), chainId);
    await StatService_1.incrementEth(parseFloat(ethers_1.formatEther(log.ethPaid.toString())), chainId);
    try {
        await DiscordClient_1.sendRaffleCompleteWebhook(raffle, raffle.nft);
    }
    catch (error) {
        console.error("Discord Err: ", error);
    }
};
//# sourceMappingURL=raffleRelease.js.map