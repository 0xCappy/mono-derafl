"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.incrementEth = exports.incrementRoyalties = exports.incrementRaffles = exports.incrementTickets = void 0;
const axios_1 = require("axios");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
exports.incrementTickets = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        ticketsBought: stat.ticketsBought + amount,
        _version: stat._version
    });
    return updatedStat;
};
exports.incrementRaffles = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        rafflesCreated: stat.rafflesCreated + amount,
        _version: stat._version
    });
    return updatedStat;
};
exports.incrementRoyalties = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        royaltiesPaid: stat.royaltiesPaid + amount,
        _version: stat._version
    });
    return updatedStat;
};
exports.incrementEth = async (amount, chainId) => {
    const stat = await getOrCreateStatsByChainId(chainId);
    const updatedStat = await updateStats({
        id: stat.id,
        ethPaid: stat.ethPaid + amount,
        _version: stat._version
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
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: queries_1.listStats, variables: { input: { filter: { chainId: { eq: chainId } } } } };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    return response?.data?.data?.listStats?.items?.[0];
};
const createStats = async (chainId) => {
    const variables = {
        input: {
            chainId,
            ethPaid: 0,
            ticketsBought: 0,
            royaltiesPaid: 0,
            rafflesCreated: 0
        }
    };
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.createStat, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("CREATE STAT: ", JSON.stringify(response.data));
    return response?.data?.data?.createStat;
};
const updateStats = async (input) => {
    console.log("UDPATEING: ", input);
    const variables = { input };
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.updateStat, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("UPDATE STAT: ", JSON.stringify(response.data));
    return response?.data?.data?.updateStat;
};
//# sourceMappingURL=StatService.js.map