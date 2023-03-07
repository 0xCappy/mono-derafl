import { EventType } from "../types";
import { createTransaction } from "../graphql/mutations";
import { signRequest } from "../utils/signRequest";
import fetch from 'node-fetch'

export const createTransactionRecord = async (
    txHash: string,
    timestamp: string,
    eventType: EventType,
    chainId: string,
    raffleNonce: number
): Promise<any> => {
    const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!)
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
    }
    const body = { query: createTransaction, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    console.log("Create TX JSON: ", json)
    return json?.data?.createTransaction
};
