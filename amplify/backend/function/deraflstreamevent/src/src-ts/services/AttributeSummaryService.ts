import { getAttributeSummary } from "../clients/AlchemyClient"
import { getNftTraitsWithPrice } from "../clients/TraitSniperClient"
import { TraitWithPrice } from "../types"
import { mapHexToAlchemyChain } from "../utils/mapHexToAlchemyChain"

export const createAttributesSummary = async (address: string, chainId: string) => {
    const merged = await createMergedAttributes(address, chainId)
    /// map merged and insert a new trait for each
    
    
}

export const updateAttributesSummary = async (address: string, chain: string) => {
    // let query = new Parse.Query('AttributeSummary')
    // query.equalTo('contractAddress', address)
    // const attributeSummary = await query.first()
    // let summary = await createMergedAttributes(address, chain)
    // attributeSummary?.set('summary', summary)
    // await attributeSummary?.save()
    // return attributeSummary
}

const createMergedAttributes = async (address: string, chainId: string) => {
    let summary = await getAttributeSummary(address, mapHexToAlchemyChain(chainId))
    let traitsWithPrice = await getNftTraitsWithPrice(address)
    traitsWithPrice = mergeSummaryAndPrice(summary, traitsWithPrice)
    return traitsWithPrice
}

const mergeSummaryAndPrice = (summary: Record<string, Record<string, number>>, traitsWithPrice: TraitWithPrice[]) => {
     traitsWithPrice.map(trait => {
        const summaryRecord = summary[trait.name]
        if (summaryRecord && summaryRecord[trait.value]) {
            trait.count = summaryRecord[trait.value]
        }
    })
    return traitsWithPrice
}