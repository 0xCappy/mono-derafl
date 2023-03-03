import axios from "axios";
import { Raffle } from "../types"
import { getUtcDateString } from "../utils/date"
import { formatIpfsUrl } from "../utils/image";

export const sendRaffleCreateWebhook = async (raffle: any, nft: any) => {
    const content = generateCreateTemplate(raffle, nft)
    console.log("CONTENT: ", JSON.stringify(content))
    const result = await axios.post(process.env.DISCORD_RAFFLE_CREATE_WEBHOOK_URL || '', JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

export const sendRaffleCompleteWebhook = async (raffle: any, nft: any) => {
    const content = generateCompleteTemplate(raffle, nft)
    console.log("CONTENT: ", JSON.stringify(content))
    const result = await axios.post(process.env.DISCORD_RAFFLE_CLOSED_WEBHOOK_URL || '', JSON.stringify(content), {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}

const generateCreateTemplate = (raffle: any, nft: any) => {
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
                        "value": getUtcDateString(new Date(raffle.expires))
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
                    "url": formatIpfsUrl(nft.imageUri || '')
                }
            }
        ]
    }
}

const generateCompleteTemplate = (raffle: any, nft: any) => {
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
                    "url": formatIpfsUrl(nft.imageUri || '')
                }
            }
        ]
    }
}