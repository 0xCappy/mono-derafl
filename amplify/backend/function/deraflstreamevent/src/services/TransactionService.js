"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionRecord = void 0;
const mutations_1 = require("../graphql/mutations");
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
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
    return json?.data?.createTransaction;
};
//# sourceMappingURL=TransactionService.js.map