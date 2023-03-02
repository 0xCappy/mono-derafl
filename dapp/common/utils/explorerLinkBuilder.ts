const baseUrl = (chainId: string): string => {
    switch (chainId) {
        case '0x1':
            return 'https://etherscan.io/'
        case '0x5':
            return 'https://goerli.etherscan.io/'
    }
    return ''
}

export const buildAddressUrl = (chainId: string, address: string): string => {
    return `${baseUrl(chainId)}address/${address}`
}

export const buildTransactionUrl = (chainId: string, hash: string): string => {
    return `${baseUrl(chainId)}tx/${hash}`
}
