/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	API_DERAFL_GRAPHQLAPIIDOUTPUT
	API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT as string
	API_DERAFL_GRAPHQLAPIKEYOUTPUT as string
	MORALIS_API_KEY
	ALCHEMY_KEY
	TRAIT_SNIPER_KEY
	DISCORD_RAFFLE_CREATE_WEBHOOK_URL
	DISCORD_RAFFLE_CLOSED_WEBHOOK_URL
Amplify Params - DO NOT EDIT */

import { 
  APIGatewayProxyEvent, 
  APIGatewayProxyResult 
} from "aws-lambda";
import { handleWebhookStream } from "./eventStream";
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {

  try {
    console.log("EVENT: ", event)
    await handleWebhookStream(JSON.parse(event.body))
  } catch (error) {
    console.log("STREAM ERROR: ", error)
  }
  const queries = JSON.stringify(event.queryStringParameters);
  return {
    statusCode: 200,
    body: `Queries: ${queries}`
  }
}
