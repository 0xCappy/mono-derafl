import { Base } from ".";
import Raffle from "./Raffle";
import Transaction from "./Transaction";

interface TicketBatch extends Base {
  batchId: number;
  firstTicket: number;
  lastTicket: number;
  purchaser: string;
  ticketsBought: number;
  tx: Transaction
  raffle?: any
}

export default TicketBatch;
