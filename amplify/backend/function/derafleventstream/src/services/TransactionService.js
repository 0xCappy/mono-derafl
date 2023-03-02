"use strict";
// import { EventType } from "../types";
// import Transaction from "../types/Transaction";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionRecord = void 0;
const mutations_1 = require("../graphql/mutations");
const axios_1 = require("axios");
exports.createTransactionRecord = async (txHash, timestamp, eventType, chainId) => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            date: new Date(parseInt(timestamp) * 1000),
            eventType: eventType,
            hash: txHash,
            chainId: chainId
        }
    };
    const options = {
        headers: {
            'x-api-key': process.env.API_MONODERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.createTransaction, variables };
    const response = await axios_1.default.post(process.env.API_MONODERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    return response?.data?.data?.createTransaction;
};
// export const mapTransaction = (tx: Parse.Object): Transaction => ({
//     hash: tx.attributes.hash,
//     date: tx.attributes.date,
//     eventType: tx.attributes.eventType,
//     chainId: tx.attributes.chainId
// })
//# sourceMappingURL=TransactionService.js.map