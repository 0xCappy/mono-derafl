import { NftSaleMarketplace } from "alchemy-sdk"

export default interface NftSale {
    marketPlace: NftSaleMarketplace
    quantity: string
    hash: string
    amount: number
    block: number
}