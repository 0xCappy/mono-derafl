"use strict";
/* Amplify Params - DO NOT EDIT
    ENV
    REGION
    API_DERAFL_GRAPHQLAPIIDOUTPUT
    API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT || ''
    API_DERAFL_GRAPHQLAPIKEYOUTPUT || ''
    MORALIS_API_KEY
    ALCHEMY_KEY
    TRAIT_SNIPER_KEY
    DISCORD_RAFFLE_CREATE_WEBHOOK_URL
    DISCORD_RAFFLE_CLOSED_WEBHOOK_URL
Amplify Params - DO NOT EDIT */
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const eventStream_1 = require("./eventStream");
exports.handler = async (event) => {
    try {
        await eventStream_1.handleWebhookStream(JSON.parse(event.body));
    }
    catch (error) {

    }
    const queries = JSON.stringify(event.queryStringParameters);
    return {
        statusCode: 200,
        body: `Queries: ${queries}`
    };
};
//# sourceMappingURL=index.js.map