"use strict";
// export const getAccount = async (address: string) => {
//     const query = new Parse.Query('Account')
//     query.equalTo('address', address.toLowerCase())
//     return await query.first()
// }
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAccount = exports.getOrCreateAccount = void 0;
const axios_1 = require("axios");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
// export const createEmptyAccount = (address: string) => {
//     const account = new Parse.Object('Account')
//     account.set('address', address.toLowerCase())
//     return account
// }
// export const getAccountDetail = async (address: string) => {
//     const account = await getAccount(address)
//     if (!account) {
//         return emptyAccount
//     }
//     return mapAccount(account)
// }
// export const getAccounts = async (asc: boolean, sortKey: string, skip: number, limit: number) => {
//     const query = new Parse.Query('Account')
//     if (asc) {
//         query.ascending(sortKey)
//     } else {
//         query.descending(sortKey)
//     }
//     query.skip(skip)
//     query.limit(limit)
//     const count = await query.count()
//     const accounts = await query.find()
//     return {
//         accounts: accounts.map(account => mapAccount(account)),
//         count
//     }
// }
// const mapAccount = (account: Parse.Object) => ({
//     rafflesCreated: account.attributes.rafflesCreated | 0,
//     rafflesWon: account.attributes.rafflesWon | 0,
//     rafflesEntered: account.attributes.rafflesEntered | 0,
//     ticketsBought: account.attributes.ticketsBought | 0,
//     address: account.attributes.address,
//     createdAt: account.attributes.createdAt,
//     updatedAt: account.attributes.updatedAt
// })
// const emptyAccount = {
//     rafflesCreated: 0,
//     rafflesWon: 0,
//     rafflesEntered: 0,
//     ticketsBought: 0
// }
exports.getOrCreateAccount = async (address) => {
    let account = await getAccountByAddress(address);
    if (!account) {
        account = await createEmptyAccount(address);
    }
    return account;
};
const getAccountByAddress = async (address) => {
    const options = {
        headers: {
            'x-api-key': process.env.API_MONODERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: queries_1.listAccounts, variables: { input: { filter: { address: { eq: address } } } } };
    const response = await axios_1.default.post(process.env.API_MONODERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("GET ACCOUNT: ", JSON.stringify(response.data));
    return response?.data?.data?.listAccounts?.items?.[0];
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
            ticketsBought: 0
        }
    };
    const options = {
        headers: {
            'x-api-key': process.env.API_MONODERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.createAccount, variables };
    const response = await axios_1.default.post(process.env.API_MONODERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("CREATE ACCOUNT: ", JSON.stringify(response.data));
    return response?.data?.data?.createAccount;
};
exports.updateAccount = async (input) => {
    const variables = { input };
    const options = {
        headers: {
            'x-api-key': process.env.API_MONODERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.updateAccount, variables };
    const response = await axios_1.default.post(process.env.API_MONODERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    return response?.data?.data?.updateAccount;
};
//# sourceMappingURL=AccountService.js.map