"use strict";
// import { EventType } from "../types";
// import Transaction from "../types/Transaction";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionRecord = void 0;
const mutations_1 = require("../graphql/mutations");
const signRequest_1 = require("../utils/signRequest");
const protocol_http_1 = require("@aws-sdk/protocol-http");
// import fetch from "node-fetch"
// import { Request } from 'node-fetch'
// import { default as fetch, Request } from 'node-fetch';
const node_fetch_1 = require("node-fetch");
const node_fetch_2 = require("node-fetch");
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
    const requestToBeSigned = new protocol_http_1.HttpRequest({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            host: endpoint.host
        },
        hostname: endpoint.host,
        body: JSON.stringify(body),
        path: endpoint.pathname
    });
    const signed = await signRequest_1.signRequest(requestToBeSigned);
    console.log("SIGNED:", signed);
    console.log("URL: ", process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
    const request = new node_fetch_2.Request(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, signed);
    let response = await node_fetch_1.default(request);
    // // let response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!, signed)
    // // const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT || '', signedBody, options)
    // // const request = new Request(endpoint, signed);
    // // const response = await fetch(request) as any;
    console.log("TX RES: ", JSON.stringify(response));
    // return response?.data?.data?.createTransaction
};
// export const mapTransaction = (tx: Parse.Object): Transaction => ({
//     hash: tx.attributes.hash,
//     date: tx.attributes.date,
//     eventType: tx.attributes.eventType,
//     chainId: tx.attributes.chainId
// })
//# sourceMappingURL=TransactionService.js.map