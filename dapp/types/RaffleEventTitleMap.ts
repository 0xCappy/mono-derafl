import { EventType } from ".";

const RaffleEventTitleMap = {
    [EventType.RaffleOpen]: 'Raffle Opened',
    [EventType.RaffleClose]: 'Raffle Closed',
    [EventType.RaffleDrawn]: 'Raffle Drawn',
    [EventType.RaffleRelease]: 'Raffle Released',
    [EventType.RaffleRefund]: 'Raffle Refunded',
    [EventType.TicketPurchase]: 'Ticket Purchased',
    [EventType.TicketRefund]: 'Ticket Refunded'
  
};

export default RaffleEventTitleMap