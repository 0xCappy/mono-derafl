"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RaffleState;
(function (RaffleState) {
    RaffleState[RaffleState["NONE"] = 0] = "NONE";
    RaffleState[RaffleState["ACTIVE"] = 1] = "ACTIVE";
    RaffleState[RaffleState["CLOSED"] = 2] = "CLOSED";
    RaffleState[RaffleState["REFUNDED"] = 3] = "REFUNDED";
    RaffleState[RaffleState["PENDING_DRAW"] = 4] = "PENDING_DRAW";
    RaffleState[RaffleState["DRAWN"] = 5] = "DRAWN";
    RaffleState[RaffleState["RELEASED"] = 6] = "RELEASED";
})(RaffleState || (RaffleState = {}));
exports.default = RaffleState;
//# sourceMappingURL=RaffleState.js.map