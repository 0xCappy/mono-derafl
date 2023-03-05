import { signRequest } from "../utils/signRequest";
import fetch from 'node-fetch'
import { createTicketBatch as createTicketBatchMutation } from "../graphql/mutations";
import { listTicketBatches } from "../graphql/queries";
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!)

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

export const getAccountParticipation = async (address: string, raffleNonce: number) => {
    const body = { query: listTicketBatches, variables: { filter: { purchaser: { eq: address }, raffleId: { eq: raffleNonce } } } }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.listTicketBatches?.items?.[0]
}

export const createTicketBatch = async (
    ticketBatchRaffleId: string,
    ticketsBought: number,
    firstTicket: number,
    lastTicket: number,
    batchId: number,
    purchaser: string,
    ticketBatchTransactionId: string,
    raffleNonce: number,
    chainId: string
) => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            ticketBatchRaffleId,
            ticketsBought,
            firstTicket,
            lastTicket,
            batchId,
            purchaser,
            ticketBatchTransactionId,
            type: 'TicketBatch',
            raffleNonce,
            chainId
        }
    }
    const body = { query: createTicketBatchMutation, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.createTicketBatch
}

export const getWinningBatch = async (raffleNonce: number, winningTicket: number) => {
    const variables = {
        filter: {
            raffleNonce: { eq: raffleNonce },
            lastTicket: { gte: winningTicket },
            firstTicket: { lte: winningTicket }
        }
    }
    const body = { query: listTicketBatches, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.listTicketBatches?.items?.[0]
}