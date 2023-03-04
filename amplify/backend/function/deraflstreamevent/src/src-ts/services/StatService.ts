import { signRequest } from "../utils/signRequest";
import fetch from 'node-fetch'
import { listStats } from "../graphql/queries"
import { createStat as createStatMutation, updateStat as updateStatMutation } from "../graphql/mutations"
const endpoint = new URL(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT!)

export const incrementTickets = async (amount: number, chainId: string) => {
    const stat = await getOrCreateStatsByChainId(chainId)
    const updatedStat = await updateStats({
        id: stat.id,
        ticketsBought: stat.ticketsBought + amount
    })
    return updatedStat
}

export const incrementRaffles = async (amount: number, chainId: string) => {
    const stat = await getOrCreateStatsByChainId(chainId)
    const updatedStat = await updateStats({
        id: stat.id,
        rafflesCreated: stat.rafflesCreated + amount
    })
    return updatedStat
}

export const incrementRoyalties = async (amount: number, chainId: string) => {
    const stat = await getOrCreateStatsByChainId(chainId)
    const updatedStat = await updateStats({
        id: stat.id,
        royaltiesPaid: stat.royaltiesPaid + amount
    })
    return updatedStat
}

export const incrementEth = async (amount: number, chainId: string) => {
    const stat = await getOrCreateStatsByChainId(chainId)
    const updatedStat = await updateStats({
        id: stat.id,
        ethPaid: stat.ethPaid + amount
    })
    return updatedStat
}

// const getStats = async (chainId: string) => {
//     const statQuery = new Parse.Query('Stat')
//     statQuery.equalTo('chainId', chainId)
//     let stat = await statQuery.first()
//     if (!stat) {
//         const Stat = Parse.Object.extend('Stat')
//         stat = new Stat()
//         stat?.set('chainId', chainId)
//         await stat?.save()
//     }
//     return stat
// }

const getOrCreateStatsByChainId = async (chainId: string) => {
    let stats = await getStatsByChainId(chainId)
    if (!stats) {
        stats = createStats(chainId)
    }
    return stats
}

const getStatsByChainId = async (chainId: string) => {
    const body = { query: listStats, variables: { filter: { chainId: { eq: chainId } } } }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.listStats?.items?.[0]
}

const createStats = async (chainId: string) => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            chainId,
            ethPaid: 0,
            ticketsBought: 0,
            royaltiesPaid: 0,
            rafflesCreated: 0,
            type: 'Stat'
        }
    }
    const body = { query: createStatMutation, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.createStat
}

const updateStats = async (input: any) => {
    const variables = {
        input: {
            ...input,
            updatedAt: new Date()
        }
    }
    const body = { query: updateStatMutation, variables }
    const request = await signRequest(body, endpoint)
    let response = await fetch(request);
    const json = await response.json()
    return json?.data?.updateStat
}

