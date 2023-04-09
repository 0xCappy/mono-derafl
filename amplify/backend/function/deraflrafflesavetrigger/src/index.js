/* Amplify Params - DO NOT EDIT
	API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT
	API_DERAFL_GRAPHQLAPIIDOUTPUT
	API_DERAFL_GRAPHQLAPIKEYOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

exports.handler = async event => {
  const promises = []
  for (const record of event.Records) {
    if (record.eventName === 'INSERT') {
      // promises.push(handleWalletCreate(record.dynamodb.NewImage))
    }
  }
  // await Promise.all(promises)
  return Promise.resolve('Successfully processed Wallets');
};
