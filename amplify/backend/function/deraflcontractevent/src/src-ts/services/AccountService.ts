// export const getAccount = async (address: string) => {
//     const query = new Parse.Query('Account')
//     query.equalTo('address', address.toLowerCase())
//     return await query.first()
// }

import axios from "axios";
import { listAccounts } from "../graphql/queries";
import { createAccount as createAccountMutation, updateAccount as updateAccountMutation } from "../graphql/mutations";

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

export const getOrCreateAccount = async (address: string) => {
    let account = await getAccountByAddress(address)
    if (!account) {
        account = await createEmptyAccount(address)
    }
    return account
}

const getAccountByAddress = async (address: string) => {
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: listAccounts, variables: { filter: { address: { eq: address } } } }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    console.log("GET ACCOUNT: ", JSON.stringify(response.data))
    return response?.data?.data?.listAccounts?.items?.[0]
}

const createEmptyAccount = async (address: string) => {
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
    }
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };

    const body = { query: createAccountMutation, variables }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    console.log("CREATE ACCOUNT: ", JSON.stringify(response.data))

    return response?.data?.data?.createAccount
}

export const updateAccount = async (input: any) => {
    const variables = { input }
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };

    const body = { query: updateAccountMutation, variables }
    const response = await axios.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options)
    return response?.data?.data?.updateAccount
}