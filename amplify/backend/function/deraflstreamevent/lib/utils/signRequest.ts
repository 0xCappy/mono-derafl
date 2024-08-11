import { defaultProvider } from '@aws-sdk/credential-provider-node';
import { SignatureV4 } from '@aws-sdk/signature-v4';
import { HttpRequest } from '@aws-sdk/protocol-http';
import * as crypto from "@aws-crypto/sha256-js";
const { Sha256 } = crypto;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
import { Request } from 'node-fetch'

export const signRequest = async (body: any, endpoint: URL): Promise<Request> => {
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

  const signer = new SignatureV4({
    credentials: defaultProvider(),
    region: AWS_REGION,
    service: 'appsync',
    sha256: Sha256
  });
  const signed = await signer.sign(requestToBeSigned);
  const request = new Request(endpoint, signed as any);
  return request
}