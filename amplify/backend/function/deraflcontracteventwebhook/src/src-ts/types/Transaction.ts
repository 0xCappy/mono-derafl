import EventType from "./EventType"

interface Transaction {
    hash: string
    date: Date
    eventType: EventType
    chainId: string
}

export default Transaction
