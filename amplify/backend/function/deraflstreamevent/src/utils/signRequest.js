"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequest = void 0;
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const signature_v4_1 = require("@aws-sdk/signature-v4");
const crypto = require("@aws-crypto/sha256-js");
const { Sha256 } = crypto;
const GRAPHQL_ENDPOINT = process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
exports.signRequest = async (request) => {
    const endpoint = new URL(GRAPHQL_ENDPOINT);
    console.log("END: ", endpoint);
    const signer = new signature_v4_1.SignatureV4({
        credentials: credential_provider_node_1.defaultProvider(),
        region: AWS_REGION,
        service: 'appsync',
        sha256: Sha256
    });
    const signed = await signer.sign(request);
    console.log("signed: ", signed);
    return signed;
};
//# sourceMappingURL=signRequest.js.map