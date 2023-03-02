// import { TicketBatch } from "../types";
// import { mapRaffle, mapRaffleDetail } from "./RaffleService";
// import { mapTransaction } from "./TransactionService";

import axios from "axios";
import { createTicketBatch as createTicketBatchMutation } from "../graphql/mutations";
import { listTicketBatches } from "../graphql/queries";

// export const getTicketBatches = async (
//     asc: boolean,
//     sortKey: string,
//     skip: number,
//     limit: number,
//     raffleId?: string,
// ) => {
//     const ticketBatchQuery = new Parse.Query('TicketBatch');
//     ticketBatchQuery.include('tx')
//     if (asc) {
//         ticketBatchQuery.ascending(sortKey)
//     } else {
//         ticketBatchQuery.descending(sortKey)
//     }
//     ticketBatchQuery.skip(skip)
//     ticketBatchQuery.limit(limit)
//     if (raffleId) {
//         ticketBatchQuery.equalTo('raffle', Parse.Object.extend('Raffle').createWithoutData(raffleId))
//     }

//     const batches = await ticketBatchQuery.find()
//     const count = await ticketBatchQuery.count()
//     return {
//         ticketBatches: batches.map(batch => mapTicketBatch(batch, false)),
//         count
//     }      
// }

// export const getAccountBatches = async (
//     asc: boolean,
//     sortKey: string,
//     skip: number,
//     limit: number,
//     address?: string,
// ) => {
//     const query = new Parse.Query('TicketBatch')
//     if (asc) {
//         query.ascending(sortKey)
//     } else {
//         query.descending(sortKey)
//     }
//     query.skip(skip)
//     query.limit(limit)
//     query.include("tx");
//     query.include("raffle");
//     query.include("raffle.nft");
//     query.include("raffle.nft.collection");

//     if (address) {
//         query.equalTo('purchaser', address)
//     }
//     const batches = await query.find()
//     const count = await query.count()
//     return {
//         ticketBatches: batches.map(batch => mapTicketBatch(batch, true)),
//         count
//     }      
// }

// export const getWinningBatch = async (winningTicket: number, raffleId: string) => {
//     const rafflePointer = Parse.Object.extend('Raffle').createWithoutData(raffleId)
//     const query = new Parse.Query('TicketBatch')
//     query.equalTo('raffle', rafflePointer)
//     query.greaterThanOrEqualTo("lastTicket", winningTicket);
//     query.lessThanOrEqualTo("firstTicket", winningTicket);
//     const batch = await query.first()
//     if (!batch) {
//         return undefined
//     }
//     return mapTicketBatch(batch, false)

// }
// export const mapTicketBatch = (ticketBatch: Parse.Object, includeRaffle: boolean): TicketBatch => ({
//         purchaser: ticketBatch.attributes.purchaser,
//         batchId: ticketBatch.attributes.batchId,
//         createdAt: ticketBatch.attributes.createdAt,
//         updatedAt: ticketBatch.attributes.updatedAt,
//         firstTicket: ticketBatch.attributes.firstTicket,
//         lastTicket: ticketBatch.attributes.lastTicket,
//         ticketsBought: ticketBatch.attributes.ticketsBought,
//         id: ticketBatch.id,
//         tx: mapTransaction(ticketBatch.get('tx')),
//         raffle: includeRaffle ? mapRaffle(ticketBatch.get('raffle')) : undefined
// })

export const getAccountParticipation = async (address: string, raffleId: string) => {
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: listTicketBatches, variables: { input: { filter: { purchaser: { eq: address }, raffleId : { eq: raffleId }} } } }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    console.log("GET ACCOUNT PARTICIPATION: ", JSON.stringify(response.data))
    return response?.data?.data?.listTicketBatches?.items?.[0]
}

export const createTicketBatch = async (
    raffleId: number,
    ticketsBought: number,
    firstTicket: number,
    lastTicket: number,
    batchId: number,
    purchaser: string,
    ticketBatchTransactionId: string
) => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            raffleId,
            ticketsBought,
            firstTicket,
            lastTicket,
            batchId,
            purchaser,
            ticketBatchTransactionId,
            type: 'TicketBatch'
        }
    }
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };

    const body = { query: createTicketBatchMutation, variables }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    console.log("CREATE Ticket batch: ", JSON.stringify(response.data))

    return response?.data?.data?.createTicketBatch
}

export const getWinningBatch = async (raffleId: string, winningTicket: number) => {
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const variables = {
        input: {
            filter: {
                raffleId: { eq: raffleId },
                lastTicket: { gte: winningTicket },
                firstTicket: { lte: winningTicket }
            }
        }
    }
    const body = { query: listTicketBatches, variables }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    console.log("GET WINNING TICKET: ", JSON.stringify(response.data))
    return response?.data?.data?.listTicketBatches?.items?.[0]
}