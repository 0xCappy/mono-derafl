import Base from "./Base";
import Raffle from "./Raffle";
import Transaction from "./Transaction";

interface TicketBatch extends Base {
  batchId: number;
  firstTicket: number;
  lastTicket: number;
  purchaser: string;
  ticketsBought: number;
  transaction: Transaction
  raffle?: Raffle
}

export default TicketBatch;
