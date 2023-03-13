export enum ChainId {
    ETH = '0x1',
    GOERLI = '0x5',
    POLYGON = '0x89'
}


export type ChainShortName = 'eth' | 'goerli' | 'polygon'

export interface Chain {
    name: string
    shortName: ChainShortName
    chainId: ChainId
    currencyNameLong: string
    currencyNameShort: string
    ticketPrice: number
    chainLinkFee: number
    ticketDisplayPrice: string
}

const EthChain: Chain = {
    name: 'Ethereum',
    shortName: 'eth',
    chainId: ChainId.ETH,
    currencyNameLong: 'Ether',
    currencyNameShort: 'ETH',
    chainLinkFee: 0.005,
    ticketPrice: 0.001,
    ticketDisplayPrice: '0.001'
}

const GoerliChain: Chain = {
    name: 'Goerli',
    shortName: 'goerli',
    chainId: ChainId.GOERLI,
    currencyNameLong: 'Ether',
    currencyNameShort: 'Eth',
    chainLinkFee: 0.005,
    ticketPrice: 0.001,
    ticketDisplayPrice: '0.001'
}

const PolygonChain: Chain = {
    name: 'Polygon',
    shortName: 'polygon',
    chainId: ChainId.POLYGON,
    currencyNameLong: 'Matic',
    currencyNameShort: 'MATIC',
    ticketPrice: 0.5,
    chainLinkFee: 2.5,
    ticketDisplayPrice: '0.5'
}

export const chainsByChainId: { [key in ChainId]: Chain } = {
    [ChainId.ETH]: EthChain,
    [ChainId.GOERLI]: GoerliChain,
    [ChainId.POLYGON]: PolygonChain
}

export const chainsByShortName: { [key in ChainShortName]: Chain } = {
    'eth': EthChain,
    'goerli': GoerliChain,
    'polygon': PolygonChain
}

export const chainsByStage = (stage: string): Chain[] => {
    switch (stage) {
        case 'testnet':
            return [GoerliChain]
        case 'mainnet':
            return [EthChain, PolygonChain]
        default:
            return []
    }
}