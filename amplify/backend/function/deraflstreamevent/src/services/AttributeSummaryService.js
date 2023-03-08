"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAttributesSummary = exports.createAttributesSummary = void 0;
const AlchemyClient_1 = require("../clients/AlchemyClient");
const TraitSniperClient_1 = require("../clients/TraitSniperClient");
const mapHexToAlchemyChain_1 = require("../utils/mapHexToAlchemyChain");
exports.createAttributesSummary = async (address, chainId) => {
    const merged = await createMergedAttributes(address, chainId);
    /// map merged and insert a new trait for each
};
exports.updateAttributesSummary = async (address, chain) => {
    // let query = new Parse.Query('AttributeSummary')
    // query.equalTo('contractAddress', address)
    // const attributeSummary = await query.first()
    // let summary = await createMergedAttributes(address, chain)
    // attributeSummary?.set('summary', summary)
    // await attributeSummary?.save()
    // return attributeSummary
};
const createMergedAttributes = async (address, chainId) => {
    let summary = await AlchemyClient_1.getAttributeSummary(address, mapHexToAlchemyChain_1.mapHexToAlchemyChain(chainId));
    let traitsWithPrice = await TraitSniperClient_1.getNftTraitsWithPrice(address);
    traitsWithPrice = mergeSummaryAndPrice(summary, traitsWithPrice);
    return traitsWithPrice;
};
const mergeSummaryAndPrice = (summary, traitsWithPrice) => {
    traitsWithPrice.map(trait => {
        const summaryRecord = summary[trait.name];
        if (summaryRecord && summaryRecord[trait.value]) {
            trait.count = summaryRecord[trait.value];
        }
    });
    return traitsWithPrice;
};
//# sourceMappingURL=AttributeSummaryService.js.map