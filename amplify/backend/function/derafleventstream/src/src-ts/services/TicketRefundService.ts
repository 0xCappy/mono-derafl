import axios from "axios";
import { createTicketRefund as createTicketRefundMutation } from "../graphql/mutations";

export const createTicketRefund = async (raffleId: string, transactionId: string, ethAmount: number, refundee: string) => {
    const variables = {
        input: {

        }
    }
    const options = {
        headers: {
            'x-api-key': process.env.API_MONODERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };

    const body = { query: createTicketRefund, variables }
    const response = await axios.post(process.env.API_MONODERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    console.log("CREATE REFUND: ", JSON.stringify(response.data))

    return response?.data?.data?.createTicketRefund

}