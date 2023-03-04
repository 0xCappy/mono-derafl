"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementEth = exports.incrementRoyalties = exports.incrementRaffles = exports.incrementTickets = void 0;
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
exports.incrementTickets = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        ticketsBought: stat.ticketsBought + amount
    });
    return updatedStat;
};
exports.incrementRaffles = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        rafflesCreated: stat.rafflesCreated + amount
    });
    return updatedStat;
};
exports.incrementRoyalties = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        royaltiesPaid: stat.royaltiesPaid + amount
    });
    return updatedStat;
};
exports.incrementEth = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        ethPaid: stat.ethPaid + amount
    });
    return updatedStat;
};
// const getStats = async (chainId: string) => {
//     const statQuery = new Parse.Query('Stat')
//     statQuery.equalTo('chainId', chainId)
//     let stat = await statQuery.first()
//     if (!stat) {
//         const Stat = Parse.Object.extend('Stat')
//         stat = new Stat()
//         stat?.set('chainId', chainId)
//         await stat?.save()
//     }
//     return stat
// }
const getOrCreateStatsByChainId = async (chainId) => {
    let stats = await getStatsByChainId(chainId);
    if (!stats) {
        stats = createStats(chainId);
    }
    return stats;
};
const getStatsByChainId = async (chainId) => {
    const body = { query: queries_1.listStats, variables: { filter: { chainId: { eq: chainId } } } };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listStats?.items?.[0];
};
const createStats = async (chainId) => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            chainId,
            ethPaid: 0,
            ticketsBought: 0,
            royaltiesPaid: 0,
            rafflesCreated: 0,
            type: 'Stat'
        }
    };
    const body = { query: mutations_1.createStat, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.createStat;
};
const updateStats = async (input) => {
    const variables = {
        input: {
            ...input,
            updatedAt: new Date()
        }
    };
    const body = { query: mutations_1.updateStat, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.updateStat;
};
//# sourceMappingURL=StatService.js.map