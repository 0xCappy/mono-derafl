"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTicketRefund = void 0;
const axios_1 = require("axios");
exports.createTicketRefund = async (raffleId, transactionId, ethAmount, refundee) => {
    const variables = {
        input: {
            type: 'TicketRefund',
            createdAt: new Date(),
            updatedAt: new Date(),
        }
    };
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT || ''
        }
    };
    const body = { query: exports.createTicketRefund, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT || '', body, options);
    console.log("CREATE REFUND: ", JSON.stringify(response.data));
    return response?.data?.data?.createTicketRefund;
};
//# sourceMappingURL=TicketRefundService.js.map