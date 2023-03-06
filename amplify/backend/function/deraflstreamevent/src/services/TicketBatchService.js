"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWinningBatch = exports.createTicketBatch = exports.getAccountParticipation = void 0;
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
const mutations_1 = require("../graphql/mutations");
const queries_1 = require("../graphql/queries");
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
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
exports.getAccountParticipation = async (address, raffleNonce) => {
    const body = { query: queries_1.listTicketBatches, variables: { filter: { purchaser: { eq: address }, raffleId: { eq: raffleNonce } } } };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listTicketBatches?.items?.[0];
};
exports.createTicketBatch = async (ticketBatchRaffleId, ticketsBought, firstTicket, lastTicket, batchId, purchaser, ticketBatchTransactionId, raffleNonce, chainId) => {
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
    };
    const body = { query: mutations_1.createTicketBatch, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.createTicketBatch;
};
exports.getWinningBatch = async (raffleNonce, winningTicket) => {
    const variables = {
        filter: {
            raffleNonce: { eq: raffleNonce },
            lastTicket: { ge: winningTicket },
            firstTicket: { le: winningTicket }
        }
    };
    const body = { query: queries_1.listTicketBatches, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listTicketBatches?.items?.[0];
};
//# sourceMappingURL=TicketBatchService.js.map