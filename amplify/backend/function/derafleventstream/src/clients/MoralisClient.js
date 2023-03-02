// import Moralis from "moralis";
// import { EvmChain } from "@moralisweb3/evm-utils";
// export const getNftFromMoralis = async (address: string, tokenId: string) => {
//     try {
//         await Moralis.start({
//             apiKey: "aNnsQjMwzZZYLDzbXKaTRPpb1l88ipYyTF3xjNV6BbhDk5vp4Fsbd6WRHoTvguWo",
//         });
//         const nftData = await Moralis.EvmApi.nft.getNFTMetadata({
//             address,
//             chain: EvmChain.GOERLI,
//             tokenId,
//         });
//         return await nftData?.toJSON();
//     } catch (err) {
//         throw err
//     }
// };
// export const getAddressNftFromMoralis = async (address: string) => {
//     console.log("LLLL : ", address)
//     try {
//         await Moralis.start({
//             apiKey: "aNnsQjMwzZZYLDzbXKaTRPpb1l88ipYyTF3xjNV6BbhDk5vp4Fsbd6WRHoTvguWo",
//         });
//         const nftData = await Moralis.EvmApi.nft.getWalletNFTs({
//             address,
//             chain: EvmChain.GOERLI,
//         });
//         return await nftData?.toJSON();
//     } catch (err) {
//         throw err
//     }
// };
//# sourceMappingURL=MoralisClient.js.map