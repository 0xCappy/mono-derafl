import { signRequest } from "../utils/signRequest";
import fetch from 'node-fetch'
import { listAccounts } from "../graphql/queries";
import { createAccount as createAccountMutation, updateAccount as updateAccountMutation } from "../graphql/mutations";

const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!)

export const getOrCreateAccount = async (address: string) => {
    let account = await getAccountByAddress(address)
    if (!account) {
        account = await createEmptyAccount(address)
    }
    return account
}

const getAccountByAddress = async (address: string) => {
    const body = { query: listAccounts, variables: { filter: { address: { eq: address } } } }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.listAccounts?.items?.[0]
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
    const body = { query: createAccountMutation, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.createAccount
}

export const updateAccount = async (input: any) => {
    const variables = { input }
    const body = { query: updateAccountMutation, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.updateAccount
}