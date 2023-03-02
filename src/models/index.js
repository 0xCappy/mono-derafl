// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { TicketRefund, Stat, TicketBatch, Transaction, Raffle, NFT, Collection, Account } = initSchema(schema);

export {
  TicketRefund,
  Stat,
  TicketBatch,
  Transaction,
  Raffle,
  NFT,
  Collection,
  Account
};