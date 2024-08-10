"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EventType;
(function (EventType) {
    EventType[EventType["RaffleOpen"] = 0] = "RaffleOpen";
    EventType[EventType["RaffleClose"] = 1] = "RaffleClose";
    EventType[EventType["RaffleDrawn"] = 2] = "RaffleDrawn";
    EventType[EventType["RaffleRelease"] = 3] = "RaffleRelease";
    EventType[EventType["RaffleRefund"] = 4] = "RaffleRefund";
    EventType[EventType["TicketPurchase"] = 5] = "TicketPurchase";
    EventType[EventType["TicketRefund"] = 6] = "TicketRefund";
})(EventType || (EventType = {}));
exports.default = EventType;
//# sourceMappingURL=EventType.js.map