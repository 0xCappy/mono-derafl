// import { EventType } from "../types";
// import Transaction from "../types/Transaction";

import { EventType } from "../types";
import { DataStore } from '@aws-amplify/datastore';
import { createTransaction } from "../graphql/mutations";
import axios from "axios";

export const createTransactionRecord = async (
    txHash: string,
    timestamp: string,
    eventType: EventType,
    chainId: string
): Promise<any> => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            date: new Date(parseInt(timestamp) * 1000),
            eventType: eventType,
            hash: txHash,
            chainId: chainId,
            type: 'Transaction'
        }
    }
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };

    const body = { query: createTransaction, variables }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    return response?.data?.data?.createTransaction
};

// export const mapTransaction = (tx: Parse.Object): Transaction => ({
//     hash: tx.attributes.hash,
//     date: tx.attributes.date,
//     eventType: tx.attributes.eventType,
//     chainId: tx.attributes.chainId
// })
