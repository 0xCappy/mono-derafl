/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_DERAFL_GRAPHQLAPIIDOUTPUT
	API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT
	API_DERAFL_GRAPHQLAPIKEYOUTPUT
	MORALIS_API_KEY
	ALCHEMY_KEY
	TRAIT_SNIPER_KEY
	DISCORD_RAFFLE_CREATE_WEBHOOK_URL
	DISCORD_RAFFLE_CLOSED_WEBHOOK_URL
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  }, 
        body: JSON.stringify('Hello from Lambda!'),
    };
};
