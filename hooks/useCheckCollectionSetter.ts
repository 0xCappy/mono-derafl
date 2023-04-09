import setterAbi from "../abi/royaltyFeeSetter.json";
import { useContractRead } from 'wagmi'
import { BigNumber } from "ethers";

export const enum CollectionSetterStatus {
  SETTER_IS_SET,
  ERC2981,
  OWNER,
  ADMIN,
  NONE
}

function useCheckCollectionSetter(
  collection: string | undefined,
  chainId: number
): {setter: string, setterStatus: CollectionSetterStatus} | undefined {
  const contractRead = useContractRead({
    address: process.env.NEXT_PUBLIC_ROYALTY_SETTER_ADDRESS as `0x${string}`,
    abi: setterAbi,
    functionName: 'checkForCollectionSetter',
    args: [collection],
    chainId,
  })
  if (contractRead.isError) {
    return undefined;
  }
  if (!contractRead.data) {
    return undefined
  }
  const setterInfo = contractRead.data as [string, BigNumber]
  return {setter: setterInfo[0], setterStatus: parseInt(setterInfo[1].toString()) as CollectionSetterStatus}
}

export default useCheckCollectionSetter;