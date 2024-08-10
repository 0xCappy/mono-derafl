"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransaction = exports.createTransactionRecord = void 0;
const mutations_1 = require("../graphql/mutations");
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
const queries_1 = require("../graphql/queries");
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
exports.createTransactionRecord = async (txHash, timestamp, eventType, chainId, raffleNonce) => {
    const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            date: new Date(parseInt(timestamp) * 1000),
            eventType: eventType,
            hash: txHash,
            chainId: chainId,
            type: 'Transaction',
            raffleNonce
        }
    };
    const body = { query: mutations_1.createTransaction, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    console.log("Create TX JSON: ", json);
    return json?.data?.createTransaction;
};
exports.getTransaction = async (hash, chainId) => {
    const body = { query: queries_1.listTransactions, variables: { filter: {
                chainId: { eq: chainId },
                hash: { eq: hash }
            } }
    };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listTransactions?.items?.[0];
};
//# sourceMappingURL=TransactionService.js.map