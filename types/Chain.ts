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
}

const EthChain: Chain = {
    name: 'Ethereum',
    shortName: 'eth',
    chainId: ChainId.ETH,
    currencyNameLong: 'Ether',
    currencyNameShort: 'ETH'
}

const GoerliChain: Chain = {
    name: 'Goerli',
    shortName: 'goerli',
    chainId: ChainId.GOERLI,
    currencyNameLong: 'Ether',
    currencyNameShort: 'Eth'
}

const PolygonChain: Chain = {
    name: 'Polygon',
    shortName: 'polygon',
    chainId: ChainId.POLYGON,
    currencyNameLong: 'Matic',
    currencyNameShort: 'MATIC'
}

export const chainsByChainId: {[key in ChainId]: Chain} = {
    [ChainId.ETH]: EthChain,
    [ChainId.GOERLI]: GoerliChain,
    [ChainId.POLYGON]: PolygonChain
}

export const chainsByShortName: {[key in ChainShortName]: Chain} = {
    'eth': EthChain,
    'goerli': GoerliChain,
    'polygon': PolygonChain
}
