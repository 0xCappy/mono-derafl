// import { EventType } from "../types";
// import Transaction from "../types/Transaction";

import { EventType } from "../types";
import { createTransaction } from "../graphql/mutations";
import { signRequest } from "../utils/signRequest";
import axios from "axios";
import { HttpRequest } from "@aws-sdk/protocol-http";
// import fetch from "node-fetch"
// import { Request } from 'node-fetch'
// import { default as fetch, Request } from 'node-fetch';
import fetch from 'node-fetch'
import { Request } from 'node-fetch'

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

    const requestToBeSigned = new HttpRequest({
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          host: endpoint.host
        },
        hostname: endpoint.host,
        body: JSON.stringify(body),
        path: endpoint.pathname
      });

    const signed = await signRequest(requestToBeSigned)
    console.log("SIGNED:", signed)
    console.log("URL: ", process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT)
    const request = new Request(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!, signed as any);
    let response = await fetch(request);

    // // let response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!, signed)
    // // const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT || '', signedBody, options)

    // // const request = new Request(endpoint, signed);
    // // const response = await fetch(request) as any;
    console.log("TX RES: ", JSON.stringify(response))
    // return response?.data?.data?.createTransaction
};

// export const mapTransaction = (tx: Parse.Object): Transaction => ({
//     hash: tx.attributes.hash,
//     date: tx.attributes.date,
//     eventType: tx.attributes.eventType,
//     chainId: tx.attributes.chainId
// })
