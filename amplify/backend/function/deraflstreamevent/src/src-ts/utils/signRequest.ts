import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import * as crypto from "@aws-crypto/sha256-js";
const { Sha256 } = crypto;
const GRAPHQL_ENDPOINT = process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';

export const signRequest = async (request: any) => {
    const endpoint = new URL(GRAPHQL_ENDPOINT!);
    console.log("END: ", endpoint)
    const signer = new SignatureV4({
      credentials: defaultProvider(),
      region: AWS_REGION,
      service: 'appsync',
      sha256: Sha256
    });
    const signed = await signer.sign(request);
    console.log("signed: ", signed)

    return signed
}