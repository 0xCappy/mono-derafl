export interface NFTAttribute {
    trait_type: string
    value: string
    floor?: number
    count?: number
}

export default interface NFTMetadata {
    image?: string
    attributes: NFTAttribute[]
}
