"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chainsByShortName = exports.chainsByChainId = exports.ChainId = void 0;
var ChainId;
(function (ChainId) {
    ChainId["ETH"] = "0x1";
    ChainId["GOERLI"] = "0x5";
    ChainId["POLYGON"] = "0x89";
})(ChainId = exports.ChainId || (exports.ChainId = {}));
const EthChain = {
    name: 'Ethereum',
    shortName: 'eth',
    chainId: ChainId.ETH,
    currencyNameLong: 'Ether',
    currencyNameShort: 'ETH'
};
const GoerliChain = {
    name: 'Goerli',
    shortName: 'goerli',
    chainId: ChainId.GOERLI,
    currencyNameLong: 'Ether',
    currencyNameShort: 'Eth'
};
const PolygonChain = {
    name: 'Polygon',
    shortName: 'polygon',
    chainId: ChainId.POLYGON,
    currencyNameLong: 'Matic',
    currencyNameShort: 'MATIC'
};
exports.chainsByChainId = {
    [ChainId.ETH]: EthChain,
    [ChainId.GOERLI]: GoerliChain,
    [ChainId.POLYGON]: PolygonChain
};
exports.chainsByShortName = {
    'eth': EthChain,
    'goerli': GoerliChain,
    'polygon': PolygonChain
};
//# sourceMappingURL=Chain.js.map