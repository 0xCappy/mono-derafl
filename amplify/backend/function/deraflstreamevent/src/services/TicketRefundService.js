"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTicketRefund = void 0;
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
exports.createTicketRefund = async (raffleId, transactionId, ethAmount, refundee) => {
    const variables = {
        input: {
            type: 'TicketRefund',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    };
    const body = { query: exports.createTicketRefund, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.createTicketRefund;
};
//# sourceMappingURL=TicketRefundService.js.map