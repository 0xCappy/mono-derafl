const formatIpfsUrl = (uri: string) => {
    return uri.replace("ipfs://", "https://ipfs.io/ipfs/").replace("ipfs/ipfs", "ipfs")
}

export default formatIpfsUrl