import { Text, Button, Stack, Box, Flex, Center, TextInput, Divider } from "@mantine/core"
import { IconCrown, IconDice4, IconExclamationCircle, IconInfoCircle, IconPercentage, IconReceipt, IconUpload, IconUser } from "@tabler/icons";
import { useWallet } from "@/context/WalletContext";
import { useEffect, useMemo, useState } from "react";
import { shortenAddress } from "@usedapp/core";
import useRoyalties from "@/hooks/useRoyalties";
import OwnedNft from "@/types/OwnedNft";
import useCheckCollectionSetter, { CollectionSetterStatus } from "@/hooks/useCheckCollectionSetter";
import { useForm } from "@mantine/form";
import ContractActionButton from "../ContractActionButton";
import setterAbi from "abi/royaltyFeeSetter.json";
import Abi from "@/types/Abi";

const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID!
const DERAFL_ADDRESS = process.env.NEXT_PUBLIC_DERAFL_ADDRESS!

interface RoyaltySetterForm {
    setter: string
    recipient: string
    fee: number
}

export const RoyaltySetter = () => {
    const { setWalletOpen, address } = useWallet()
    const [searchAddress, setSearchAddress] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const [nft, setNft] = useState<OwnedNft | undefined>()
    const royalties = useRoyalties(nft?.contractAddress, '1', parseInt(CHAIN_ID), DERAFL_ADDRESS)
    const setterInfo = useCheckCollectionSetter(nft?.contractAddress, parseInt(CHAIN_ID))
    const form = useForm<RoyaltySetterForm>({
        initialValues: {
            setter: '',
            recipient: '',
            fee: 0
        },
        // validate: {
        //     ethAmount: (value) => validateEthAmount(value),
        //     expiryDate: (value) => validateExpiryDate(value)
        // },
        validateInputOnBlur: true
    });

    const canSet = useMemo(() => {
        return setterInfo && address && setterInfo.setter.toLowerCase() === address.toLowerCase()
    }, [setterInfo, address])

    const functionName = useMemo(() => {
        if (setterInfo?.setterStatus === CollectionSetterStatus.SETTER_IS_SET) {
            return 'updateRoyaltyInfoForCollectionIfSetter'
        }
        if (setterInfo?.setterStatus === CollectionSetterStatus.OWNER) {
            return 'updateRoyaltyInfoForCollectionIfOwner'
        }
        if (setterInfo?.setterStatus === CollectionSetterStatus.ADMIN) {
            return 'updateRoyaltyInfoForCollectionIfAdmin'
        }
        return ''
    }, [setterInfo?.setterStatus])

    useEffect(() => {
        form.setValues({
            ...form,
            fee: royalties.fee ? royalties.fee / 100 : 0,
            recipient: royalties.recipient || ''
        })
    }, [royalties.fee, royalties.recipient])

    useEffect(() => {
        if (setterInfo) {
            form.setFieldValue('setter', setterInfo.setter)
        } else {
            form.setFieldValue('setter', '')
        }
    }, [setterInfo?.setter])

    const findNFT = async () => {
        try {
            setNft(undefined)
            const response = await fetch("/api/nft", {
                method: "POST",
                body: JSON.stringify({ tokenId: '1', contractAddress: searchAddress, chainId: '0x5' }),
            });

            if (!response) {
                setError('Invalid contract or token ID')
            } else {
                const nft: OwnedNft = await response.json() as OwnedNft
                setNft(nft)
            }
        } catch (err: any) {
            // setForm(emptyForm)
            // setSearching(false)
            setError(err.message)
        }
    }

    const onCancel = () => {
        setNft(undefined)
    }

    return (
        <Box pb="8rem">
            <Stack justify="space-between">

                {!address &&
                    <>
                        <Center>
                            <Stack>
                                <Text>Connect your wallet to get started</Text>
                                <Button onClick={() => setWalletOpen(true)}>Connect Wallet</Button>
                            </Stack>
                        </Center>
                    </>
                }

                {address &&
                    <Stack>
                        {!nft &&
                            <>
                                <Flex gap="sm"><Center><IconInfoCircle /></Center><Text>Enter the contract address for your collection to update the royalty fee</Text></Flex>
                                <Flex w="100%" mt="12px">
                                    <TextInput
                                        label="Contract Address"
                                        placeholder="Contract Address"
                                        style={{ flex: 2 }}
                                        value={searchAddress}
                                        onChange={(event) => setSearchAddress(event.target.value)}
                                    />
                                    <Stack justify="end" ml="1rem">
                                        <Button onClick={() => findNFT()}>Go</Button>
                                    </Stack>
                                </Flex>
                            </>

                        }

                        <Divider />

                        {nft &&
                            <>
                                <Flex gap="sm"><Center><IconDice4 /></Center><Text><strong>Collection: </strong> Bored Ape Yacht Club</Text></Flex>
                                <Flex gap="sm"><Center><IconReceipt /></Center><Text><strong>Current fee: </strong> {royalties.fee ? royalties.fee / 100 : 0}%</Text></Flex>
                                <Flex gap="sm"><Center><IconCrown /></Center><Text><strong>Recipient: </strong> {royalties.recipient ? shortenAddress(royalties.recipient) : ''}</Text></Flex>
                                <Flex gap="sm"><Center><IconUser /></Center><Text><strong>Setter: </strong> {setterInfo?.setter ? shortenAddress(setterInfo?.setter) : ''}</Text></Flex>

                                <Divider />

                                {canSet &&
                                    <>
                                        <Flex gap="sm"><Center><IconPercentage /></Center><Text>As the setter for this contract, you can update the royalty fee using the form below</Text></Flex>

                                        <TextInput
                                            label="New Royalty Fee"
                                            placeholder="0.00%"
                                            type="number"
                                            icon={<IconReceipt />}
                                            {...form.getInputProps('fee')}
                                        />
                                        <TextInput
                                            label="Recipient"
                                            placeholder="0x..."
                                            icon={<IconCrown />}
                                            {...form.getInputProps('recipient')}
                                        />
                                        <TextInput
                                            label="Setter"
                                            placeholder="0x..."
                                            icon={<IconUser />}
                                            {...form.getInputProps('setter')}
                                        />

                                        <ContractActionButton
                                            buttonTitle="Update"
                                            chainId={CHAIN_ID}
                                            contractAddress={process.env.NEXT_PUBLIC_ROYALTY_SETTER_ADDRESS!}
                                            abi={Abi.ROYALTY_FEE_SETTER}
                                            functionName={functionName}
                                            args={[nft.contractAddress, form.values.setter, form.values.recipient, (form.values.fee * 100).toString()]}
                                            disabled={false}
                                        />
                                    </>
                                }

                                {!canSet &&
                                    <>
                                        <Flex gap="sm"><Center><IconExclamationCircle /></Center><Text>You do not have permission to update royalty information for this collection</Text></Flex>
                                    </>
                                }
                                <Button variant="outline" onClick={onCancel}>Cancel</Button>

                            </>
                        }

                    </Stack>
                }

            </Stack>
        </Box>
    )
}

export default RoyaltySetter