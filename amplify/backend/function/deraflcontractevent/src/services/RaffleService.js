"use strict";
// import { mergeAttributes } from "../../utils/mergeAttributes";
// import { Raffle } from "../types";
// import Collection from "../types/Collection";
// import RaffleState from "../types/RaffleState";
// import { mapCollection } from "./CollectionService";
// import { mapNft } from "./NFTService";
// import { mapTicketBatch } from "./TicketBatchService";
// import { mapTransaction } from "./TransactionService";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRaffle = exports.createRaffle = exports.getRaffleByRaffleId = void 0;
const axios_1 = require("axios");
const queries_1 = require("../graphql/queries");
const mutations_1 = require("../graphql/mutations");
const types_1 = require("../types");
// import { Raffle } from '../../models';
// export const getAccountRaffles = async (
//     address: string,
//     asc: boolean,
//     sortKey: string,
//     filterKey: string,
//     skip: number,
//     limit: number  
// ) => {
//     const query = new Parse.Query('Raffle')
//     if (asc) {
//         query.ascending(sortKey)
//     } else {
//         query.descending(sortKey)
//     }
//     query.skip(skip)
//     query.limit(limit)
//     query.include("nft");
//     if (filterKey === 'winningAccount' || filterKey === 'owner') {
//         query.equalTo(filterKey, address)
//         const raffles = await query.find()
//         const count = await query.count()
//         return {
//             raffles: mapRaffles(raffles),
//             count
//         }      
//     }
// }
// export const getRaffleDetail = async (raffleId: number) => {
//   const query = new Parse.Query(Parse.Object.extend("Raffle"));
//   query.equalTo("raffleId", raffleId);
//   query.include("nft");
//   query.include("nft.collection");
//   query.include("nft.collection.attributeSummary");
//   query.include("openTx");
//   query.include("closeTx");
//   query.include("drawnTx");
//   query.include("releaseTx");
//   query.include("refundTx");
//   query.include("winningBatch");
//   const raffle = await query.first();
//   if (!raffle) {
//     throw new Error("");
//   }
//   const nft = raffle.get("nft");
//   const collection = nft.get("collection");
//   return mapRaffleDetail(raffle, collection);
// };
// export const getTrending = async () => {
//   const query = new Parse.Query("Raffle");
//   query.equalTo("state", RaffleState.ACTIVE);
//   query.greaterThan("expires", new Date());
//   query.include(["nft"]);
//   query.include(["nft.collection"]);
//   const data = await query.find();
//   return mapRaffles(data);
// };
// export const getRaffles = async (
//   asc: boolean,
//   sortKey: string,
//   filter: string,
//   skip: number,
//   limit: number
// ) => {
//   const query = new Parse.Query("Raffle");
//   if (filter === "active") {
//     if (asc) {
//       query.ascending(sortKey);
//     } else {
//       query.descending(sortKey);
//     }
//     query.equalTo("state", RaffleState.ACTIVE);
//     query.greaterThan("expires", new Date());
//     const count = await query.count();
//     query.include(["nft"]);
//     query.include(["nft.collection"]);
//     query.limit(limit);
//     query.skip(skip);
//     const results = await query.find();
//     return {
//       raffles: mapRaffles(results),
//       count,
//     };
//   }
//   query.greaterThan("state", RaffleState.ACTIVE);
//   const dateQuery = new Parse.Query("Raffle");
//   dateQuery.lessThan("expires", new Date());
//   const orQuery = Parse.Query.or(query, dateQuery);
//   const count = await orQuery.count();
//   orQuery.include(["nft"]);
//   orQuery.limit(limit);
//   orQuery.skip(skip);
//   if (asc) {
//     orQuery.ascending(sortKey);
//   } else {
//     orQuery.descending(sortKey);
//   }
//   const data = await orQuery.find();
//   return {
//     raffles: mapRaffles(data),
//     count,
//   };
// };
// const mapRaffles = (raffles: Parse.Object[]) => {
//   return raffles.map((raffle) => mapRaffle(raffle));
// };
// export const mapRaffle = (raffle: Parse.Object) => ({
//     raffleId: raffle.attributes.raffleId,
//     expires: raffle.attributes.expires,
//     progress: raffle.attributes.progress,
//     ticketsAvailable: raffle.attributes.ticketsAvailable,
//     winningAccount: raffle.attributes.winningAccount,
//     state: raffle.attributes.state === RaffleState.ACTIVE && raffle.attributes.state.expires > new Date() ? RaffleState.CLOSED : raffle.attributes.state,
//     createdAt: raffle.attributes.createdAt,
//     nft: mapNft(raffle.get('nft'))
// })
// export const mapRaffleDetail = (raffle: Parse.Object, collection: Parse.Object): Raffle => {
//   return {
//     ...raffle.attributes as Raffle,
//     id: raffle.id,
//     state:
//       raffle.attributes.state === RaffleState.ACTIVE && new Date() > raffle.attributes.expires
//         ? RaffleState.CLOSED
//         : raffle.attributes.state,
//     // expires: JSON.parse(JSON.stringify(raffle.attributes.expires)),
//     // createdAt: JSON.parse(JSON.stringify(raffle.attributes.createdAt)),
//     // updatedAt: JSON.parse(JSON.stringify(raffle.attributes.updatedAt)),
//     openTx: mapTransaction(raffle.attributes.openTx),
//     closeTx: !raffle.attributes.closeTx
//       ? undefined
//       : mapTransaction(raffle.attributes.closeTx),
//     drawnTx: !raffle.attributes.drawnTx
//       ? undefined
//       : mapTransaction(raffle.attributes.drawnTx),
//     releaseTx: !raffle.attributes.releaseTx
//       ? undefined
//       : mapTransaction(raffle.attributes.releaseTx),
//     refundTx: !raffle.attributes.refundTx
//       ? undefined
//       : mapTransaction(raffle.attributes.refundTx),
//     winningBatch: !raffle.attributes.winningBatch
//       ? undefined
//       : mapTicketBatch(raffle.attributes.winningBatch, false),
//     nft: {
//       ...mapNft(raffle.get('nft')),
//       metadata: {
//         ...raffle.attributes.nft.attributes.metadata,
//         attributes: collection.get('attributeSummary')?.get('summary') ? mergeAttributes(raffle.attributes.nft.attributes.metadata.attributes, collection.get('attributeSummary')?.get('summary')) : raffle.attributes.nft.attributes.metadata.attributes
//       },
//       collection: mapCollection(collection)
//     },
//   };
// };
exports.getRaffleByRaffleId = async (raffleNonce) => {
    console.log("RAFF ID: ", raffleNonce);
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: queries_1.listRaffles, variables: { filter: { raffleNonce: { eq: raffleNonce } } } };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    return response?.data?.data?.listRaffles?.items?.[0];
};
exports.createRaffle = async (raffleNonce, chainId, nftID, owner, contract, ticketsAvailable, tokenId, nftAddress, expires, openTxId) => {
    const variables = {
        input: {
            createdAt: new Date(),
            updatedAt: new Date(),
            ticketsAvailable,
            raffleNonce,
            progress: 0,
            state: types_1.RaffleState.ACTIVE,
            tokenId,
            expires,
            nftAddress,
            ticketsSold: 0,
            ticketBatches: 0,
            chainId,
            owner,
            contract,
            raffleNftId: nftID,
            raffleOpenTxId: openTxId,
            type: 'Raffle'
        }
    };
    console.log("Create VAR: ", variables);
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.createRaffle, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    console.log("RAFFLE CREATE: ", JSON.stringify(response.data));
    return response?.data?.data?.createRaffle;
};
exports.updateRaffle = async (input) => {
    const variables = { input };
    const options = {
        headers: {
            'x-api-key': process.env.API_DERAFL_GRAPHQLAPIKEYOUTPUT
        }
    };
    const body = { query: mutations_1.updateRaffle, variables };
    const response = await axios_1.default.post(process.env.API_DERAFL_GRAPHQLAPIENDPOINTOUTPUT, body, options);
    return response?.data?.data?.updateRaffle;
};
//# sourceMappingURL=RaffleService.js.map