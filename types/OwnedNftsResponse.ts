import OwnedNft from "./OwnedNft";

export default interface OwnedNftsResponse {
    nfts: OwnedNft[],
    pageKey?: string
}