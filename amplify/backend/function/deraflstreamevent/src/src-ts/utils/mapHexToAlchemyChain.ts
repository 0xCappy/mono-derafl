import { Network } from "alchemy-sdk"

export const mapHexToAlchemyChain = (chainId: string): Network => {
    switch (chainId) {
        case '0x1':
            return Network.ETH_MAINNET
        case '0x5':
            return Network.ETH_GOERLI
    }
    return Network.ETH_MAINNET
}