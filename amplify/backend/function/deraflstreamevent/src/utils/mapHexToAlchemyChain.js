"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapHexToAlchemyChain = void 0;
const alchemy_sdk_1 = require("alchemy-sdk");
exports.mapHexToAlchemyChain = (chainId) => {
    switch (chainId) {
        case '0x1':
            return alchemy_sdk_1.Network.ETH_MAINNET;
        case '0x5':
            return alchemy_sdk_1.Network.ETH_GOERLI;
    }
    return alchemy_sdk_1.Network.ETH_MAINNET;
};
//# sourceMappingURL=mapHexToAlchemyChain.js.map