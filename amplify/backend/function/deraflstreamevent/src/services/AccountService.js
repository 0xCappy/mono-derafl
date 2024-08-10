"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccount = exports.getOrCreateAccount = void 0;
const signRequest_1 = require("../utils/signRequest");
const node_fetch_1 = require("node-fetch");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT);
exports.getOrCreateAccount = async (address) => {
    let account = await getAccountByAddress(address);
    if (!account) {
        account = await createEmptyAccount(address);
    }
    return account;
};
const getAccountByAddress = async (address) => {
    const body = { query: queries_1.listAccounts, variables: { filter: { address: { eq: address } } } };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.listAccounts?.items?.[0];
};
const createEmptyAccount = async (address) => {
    const variables = {
        input: {
            address,
            createdAt: new Date(),
            updatedAt: new Date(),
            rafflesCreated: 0,
            rafflesWon: 0,
            rafflesEntered: 0,
            ticketsBought: 0,
            type: 'Account'
        }
    };
    const body = { query: mutations_1.createAccount, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.createAccount;
};
exports.updateAccount = async (input) => {
    const variables = { input };
    const body = { query: mutations_1.updateAccount, variables };
    const request = await signRequest_1.signRequest(body, endpoint);
    let response = await node_fetch_1.default(request);
    const json = await response.json();
    return json?.data?.updateAccount;
};
//# sourceMappingURL=AccountService.js.map