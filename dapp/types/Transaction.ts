import Base from "./Base"
import EventType from "./EventType"

interface Transaction extends Base {
    hash: string
    date: Date
    eventType: EventType
    chainId: string
}

export default Transaction
