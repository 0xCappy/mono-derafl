export const formatIpfsUrl = (uri: string) => {
    return uri.replace("ipfs://", "https://ipfs.io/ipfs/")
}
