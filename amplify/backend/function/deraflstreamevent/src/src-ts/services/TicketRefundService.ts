import { signRequest } from "../utils/signRequest";
import fetch from 'node-fetch'
import { createTicketRefund as createTicketRefundMutation } from "../graphql/mutations";
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!)

export const createTicketRefund = async (raffleId: string, transactionId: string, ethAmount: number, refundee: string) => {
    const variables = {
        input: {
            type: 'TicketRefund',
            createdAt: new Date(),
            updatedAt: new Date(),      
        }
    }
    const body = { query: createTicketRefund, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.createTicketRefund
}