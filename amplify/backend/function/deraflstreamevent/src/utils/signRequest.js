"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signRequest = void 0;
const credential_provider_node_1 = require("@aws-sdk/credential-provider-node");
const signature_v4_1 = require("@aws-sdk/signature-v4");
const protocol_http_1 = require("@aws-sdk/protocol-http");
const crypto = require("@aws-crypto/sha256-js");
const { Sha256 } = crypto;
const AWS_REGION = process.env.AWS_REGION || 'us-east-1';
const node_fetch_1 = require("node-fetch");
exports.signRequest = async (body, endpoint) => {
    const requestToBeSigned = new protocol_http_1.HttpRequest({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            host: endpoint.host
        },
        hostname: endpoint.host,
        body: JSON.stringify(body),
        path: endpoint.pathname
    });
    const signer = new signature_v4_1.SignatureV4({
        credentials: credential_provider_node_1.defaultProvider(),
        region: AWS_REGION,
        service: 'appsync',
        sha256: Sha256
    });
    const signed = await signer.sign(requestToBeSigned);
    const request = new node_fetch_1.Request(endpoint, signed);
    return request;
};
//# sourceMappingURL=signRequest.js.map