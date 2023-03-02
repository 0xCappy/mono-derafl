export enum AttributeDisplayType {
    DATE = "date",
}

export interface NFTAttribute {
    trait_type: string
    display_type?: AttributeDisplayType
    value: string | number
    floor?: number
    count?: number
}

export default interface NFTMetadata {
    image?: string
    name?: string
    description?: string
    attributes: NFTAttribute[]
}
