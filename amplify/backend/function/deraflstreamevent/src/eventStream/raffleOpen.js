"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleRaffleOpen = void 0;
const DiscordClient_1 = require("../clients/DiscordClient");
const AccountService_1 = require("../services/AccountService");
const NFTService_1 = require("../services/NFTService");
const RaffleService_1 = require("../services/RaffleService");
const StatService_1 = require("../services/StatService");
const TransactionService_1 = require("../services/TransactionService");
const types_1 = require("../types");
exports.handleRaffleOpen = async (log, txId, timestamp, createdBy, chainId, contract) => {
    console.log("IN OPEN");
    var raffle = await RaffleService_1.getRaffleByRaffleId(parseInt(log.raffleId.toString()));
    console.log("GOT RAFF: ", raffle);
    if (!raffle) {
        try {
            const transaction = await TransactionService_1.createTransactionRecord(txId, timestamp, types_1.EventType.RaffleOpen, chainId, parseInt(log.raffleId.toString()));
            console.log("TX: ", transaction);
            const nft = await NFTService_1.getOrCreateNft(log.nftAddress, log.tokenId.toString(), chainId);
            console.log("NFT: ", nft);
            const raffle = await RaffleService_1.createRaffle(parseInt(log.raffleId.toString()), chainId, nft.id, createdBy, contract, parseInt(log.tickets.toString()), log.tokenId.toString(), log.nftAddress, new Date(parseInt(log.expires.toString()) * 1000), transaction.id);
            const account = await AccountService_1.getOrCreateAccount(createdBy);
            console.log("GOT ACCOUNT: ", account);
            const updatedAccount = await AccountService_1.updateAccount({
                id: account.id,
                rafflesCreated: account.rafflesCreated + 1,
                updatedAt: new Date()
            });
            await StatService_1.incrementRaffles(1, chainId);
            try {
                console.log("NFT: ", JSON.parse(nft.lastSales));
                await DiscordClient_1.sendRaffleCreateWebhook(raffle, nft);
            }
            catch (error) {
                console.log("DISCORD ERROR: ", error);
            }
        }
        catch (error) {
            console.log("TX ERR: ", error);
        }
    }
    return true;
};
//# sourceMappingURL=raffleOpen.js.map