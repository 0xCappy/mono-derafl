import { EventType } from "../types";
import { createTransaction } from "../graphql/mutations";
import { signRequest } from "../utils/signRequest";
import fetch from 'node-fetch'
import { listTransactions } from "../graphql/queries";
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!)

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

export const getTransaction = async (hash: string, chainId: string) => {
    const body = { query: listTransactions, variables: 
        { filter: { 
            chainId: { eq: chainId },
            hash: { eq: hash } 
        } } 
    }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.listTransactions?.items?.[0] 
}