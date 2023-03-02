export default interface Collection {
  contractAddress: string
  createdAt: Date
  updatedAt: Date
  symbol: string
  rafflesCreated: number
  contractDeployer: string
  deployedBlockNumber: number
  tokenType: string
  totalSupply: string
  chainId: string
}
