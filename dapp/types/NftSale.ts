export declare enum NftSaleMarketplace {
    SEAPORT = "seaport",
    LOOKSRARE = "looksrare",
    X2Y2 = "x2y2",
    UNKNOWN = "unknown"
}

export default interface NftSale {
    marketPlace: NftSaleMarketplace
    quantity: string
    hash: string
    amount: number
    block: number
}