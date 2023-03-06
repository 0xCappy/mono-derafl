import { ContractActionButton } from "@/features"
import { ContractActionState } from "@/features/ContractActionButton"
import { NFT } from "@/types"
import Abi from "@/types/Abi"
import OwnedNft from "@/types/OwnedNft"
import { List, Modal, ThemeIcon } from "@mantine/core"
import { IconCircleCheck, IconCircleDashed, IconInfoCircle } from "@tabler/icons"
import { BigNumber } from "ethers"
import { parseEther } from "ethers/lib/utils.js"
import router from "next/router"
import { useEffect, useState } from "react"
import { useContractEvent } from "wagmi"
import raflAbi from '../../../abi/rafl.json'
import useSWR from 'swr'
import { getRaffle, listRaffles } from "@/src/graphql/queries"
import { API, graphqlOperation } from "aws-amplify"
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID!
const DERAFL_ADDRESS = process.env.NEXT_PUBLIC_DERAFL_ADDRESS!
const fetcher = async (raffleNonce: string) => await API.graphql(graphqlOperation(listRaffles, {
    filter: { raffleNonce: { eq: parseInt(raffleNonce) } }
})) as any

interface ConfirmDetailsModalProps {
    isOpen: boolean
    expiryTimestamp: Date
    ethAmount: string
    nftToken: OwnedNft
    royalties?: BigNumber
    onClose: () => void
}

const ConfirmDetailsModal = ({ isOpen, expiryTimestamp, ethAmount, nftToken, royalties, onClose }: ConfirmDetailsModalProps) => {
    const [contractActionState, setContractActionState] = useState(ContractActionState.NONE)
    const [raffleId, setRaffleId] = useState<string>()
    const { data, error } = useSWR(raffleId ? raffleId : null, fetcher, { refreshInterval: 5 })

    useEffect(() => {
        console.log("DATA: ", data)
        if (data?.data?.listRaffles?.items?.[0] && !data.error) {
            router.push(`/raffles/${raffleId!}`)
        }
    }, [data])

    useEffect(() => {
        console.log("error: ", error)
    }, [error])

    useContractEvent({
        address: DERAFL_ADDRESS,
        abi: raflAbi,
        eventName: 'RaffleOpened',
        listener(raffleId: BigNumber, nftAddress: string, tokenId: BigNumber, tickets: BigNumber, expires: BigNumber) {
            if (nftAddress.toString().toLowerCase() === nftToken?.contractAddress.toLowerCase() && tokenId.toString().toLowerCase() === nftToken?.tokenId) {
                setRaffleId(raffleId.toString())
            }
        },
    })

    return (
        <Modal
            opened={isOpen}
            onClose={onClose}
            title="Confirmation Required"
            closeOnClickOutside={contractActionState === ContractActionState.NONE || contractActionState === ContractActionState.ERROR}
            closeOnEscape={contractActionState === ContractActionState.NONE || contractActionState === ContractActionState.ERROR}
            withCloseButton={contractActionState === ContractActionState.NONE || contractActionState === ContractActionState.ERROR}
        >
            <>
                <List
                    spacing="xs"
                    size="sm"
                    center
                    mb="2rem"
                    icon={
                        <ThemeIcon size={24} radius="xl">
                            <IconInfoCircle size={16} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>You are about to raffle token <strong>#{nftToken.tokenId}</strong> from <strong>{nftToken.contractName}</strong></List.Item>
                    <List.Item><strong>{parseInt(parseFloat((parseFloat(ethAmount) / 0.001).toString()).toString()).toLocaleString()}</strong> tickets will be allocated to this raffle</List.Item>
                    <List.Item>Each ticket has a price of 0.001 Ether</List.Item>
                    <List.Item>The maximum amount of Ether that can be raised is {parseFloat(ethAmount).toLocaleString()}</List.Item>
                    <List.Item>The raffle will expire at {expiryTimestamp.toLocaleString()} local time / {new Date(expiryTimestamp.getTime() + expiryTimestamp.getTimezoneOffset() * 60000).toLocaleString()} UTC</List.Item>
                    <List.Item>The raffle will be closed at this time even if tickets are not sold out</List.Item>
                    <List.Item>{!royalties ? '0' : (parseFloat(royalties.toString()) / 100).toFixed(2)}% of the Ether raised will be sent to the collection owner as royalties</List.Item>
                    <List.Item>5% of the Ether raised + 0.005 ether will be sent to DeRafl as a protocol fee</List.Item>
                </List>

                {contractActionState !== ContractActionState.COMPLETE &&
                    <ContractActionButton
                        chainId={CHAIN_ID}
                        contractAddress={DERAFL_ADDRESS}
                        buttonTitle="Create Raffle"
                        abi={Abi.DERAFL}
                        functionName="createRaffle"
                        args={[nftToken?.contractAddress, nftToken.tokenId, expiryTimestamp?.getTime() / 1000, parseEther(ethAmount || '0'), nftToken?.tokenType === 'ERC721' ? '0' : '1']}
                        disabled={false}
                        onContractActionStateChange={(contractActionState) => setContractActionState(contractActionState)}
                    />
                }
            </>
        </Modal>
    )
}

export default ConfirmDetailsModal