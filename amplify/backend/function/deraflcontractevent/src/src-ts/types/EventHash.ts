import EventType from "./EventType";

const EventHash: { [key: string]: EventType } = {
    "0x49cd12b29786b74e74e2f8b2fc7e21a1a4733a0be1bb2e2d000e73c08041f034":
        EventType.RaffleOpen,
    "0xf63d958bc22d2fafba85dd91845b9e2d00c9a7503636db049c7ac7ecf6f8c23a":
        EventType.RaffleClose,
    "0xc488dd9b90c5fb6aa5a0dd2f15e98ab1708b658cd42dea79fe51ccfb27296ab6":
        EventType.RaffleDrawn,
    "0x41335d6a655c336ab39e2eff51c8238e491c4ae0918e3d57581727bcd08b8d65":
        EventType.RaffleRelease,
    "0xa0e8f430887ead2a284324c31adab1d135041758acc651376f6712b9a02de810":
        EventType.RaffleRefund,
    "0x0066a0f8400b13e0bd5cd3781fba3524a2e978cd6dd6232e6a5a39863ff570a7":
        EventType.TicketPurchase,
    "0x1d1d41f5faaf0403947ae6c7b3861fca9c7d4de9a3cd1b8c5cb61a3b9bc06141":
        EventType.TicketRefund,
};

export default EventHash