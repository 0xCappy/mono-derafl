"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRaffleCompleteWebhook = exports.sendRaffleCreateWebhook = void 0;
const axios_1 = require("axios");
const date_1 = require("../utils/date");
const image_1 = require("../utils/image");
exports.sendRaffleCreateWebhook = async (raffle, nft) => {
    const content = generateCreateTemplate(raffle, nft);
    console.log("CONTENT: ", JSON.stringify(content));
    const result = await axios_1.default.post(process.env.DISCORD_RAFFLE_CREATE_WEBHOOK_URL, JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
exports.sendRaffleCompleteWebhook = async (raffle, nft) => {
    const content = generateCompleteTemplate(raffle, nft);
    console.log("CONTENT: ", JSON.stringify(content));
    const result = await axios_1.default.post(process.env.DISCORD_RAFFLE_CLOSED_WEBHOOK_URL, JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
};
const generateCreateTemplate = (raffle, nft) => {
    return {
        "username": "DeRafl",
        "avatar_url": "https://derafl.com/favicon.png",
        "embeds": [
            {
                "title": `Raffle Created #${raffle.raffleId}`,
                "url": `https://derafl.com/raffles/${raffle.raffleId}`,
                "description": `${nft.collectionName} #${nft.tokenId}`,
                "fields": [
                    {
                        "name": "Ticket Allocation",
                        "value": raffle.ticketsAvailable.toString()
                    },
                    {
                        "name": "Expires",
                        "value": date_1.getUtcDateString(new Date(raffle.expires))
                    },
                    {
                        "name": "Rarity",
                        "value": JSON.parse(nft.rarityData) ? `${JSON.parse(nft.rarityData).rank}/${JSON.parse(nft.rarityData).maxRank}` : 'unknown'
                    },
                    {
                        "name": "Last Sale",
                        "value": JSON.parse(nft.lastSales)[0] ? JSON.parse(nft.lastSales)[0].amount.toString() : 'unknown'
                    }
                ],
                "image": {
                    "url": image_1.formatIpfsUrl(nft.imageUri || '')
                }
            }
        ]
    };
};
const generateCompleteTemplate = (raffle, nft) => {
    return {
        "username": "DeRafl",
        "avatar_url": "https://derafl.com/favicon.png",
        "embeds": [
            {
                "title": `Raffle Complete #${raffle.raffleId}`,
                "url": `https://derafl.com/raffles/${raffle.raffleId}`,
                "description": `${nft.collectionName} #${nft.tokenId}`,
                "fields": [
                    {
                        "name": "Tickets Sold",
                        "value": `${raffle.ticketsSold.toString()} / ${raffle.ticketsAvailable.toString()}`
                    },
                    {
                        "name": "Winner",
                        "value": raffle.winningAccount
                    },
                ],
                "image": {
                    "url": image_1.formatIpfsUrl(nft.imageUri || '')
                }
            }
        ]
    };
};
//# sourceMappingURL=DiscordClient.js.map