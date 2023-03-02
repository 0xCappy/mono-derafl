import { Alert, Anchor, Avatar, Box, Button, Center, Divider, Flex, Group, SimpleGrid, Stack, Text, TextInput, Title, Transition } from "@mantine/core"
import { NFT } from "types"
import axios from "axios"
import { useState } from "react"
import { NFTCard, NFTCardSkeleton, OpenSeaBadge } from "../../../common/components"
import { useForm } from '@mantine/form';
import { IconAlertCircle, IconCurrencyEthereum, IconInfoCircle, IconSearch } from "@tabler/icons"
import OpenseaLogo from '@/public/logo/opensea-white.png'
import OwnedNft from "@/types/OwnedNft"
interface NFTSelectorProps {
    nfts: OwnedNft[]
    onSelectNFT: (nft: OwnedNft) => void
    loading: boolean
    account: string
    hasMore: boolean
}

interface NFTForm {
    tokenId: string
    contractAddress: string
}

const emptyForm = { tokenId: '', contractAddress: '' }

const NFTSelector = ({ nfts, onSelectNFT, loading, account, hasMore }: NFTSelectorProps) => {
    const [searching, setSearching] = useState(false)
    const [error, setError] = useState<string>()

    const form = useForm<NFTForm>({
        initialValues: {
            contractAddress: '',
            tokenId: '',
        },
        validate: {
            contractAddress: (value) => (/^0x[a-fA-F0-9]{40}$/g.test(value) ? null : 'Invalid Address'),
            tokenId: (value) => (/^[-+]?\d*$/.test(value) ? null : 'Invalid Token ID'),
        },
    });

    const findNFT = async (value: NFTForm) => {
        try {
            setSearching(true)
            setError(undefined)

            const response = await fetch("/api/nft", {
                method: "POST",
                body: JSON.stringify(value),
            });
            form.setValues({
                contractAddress: '',
                tokenId: ''
            })
            setSearching(false)

            if (!response) {
                setError('Invalid contract or token ID')
            } else {
                const nft: OwnedNft = await response.json() as OwnedNft
                // setForm(emptyForm)
                // if (!nft.ownerOf || account.toLowerCase() !== nft.ownerOf.toLowerCase()) {
                //     setError('You are not the owner of this NFT')
                // } else {
                onSelectNFT(nft)
                // }
            }
        } catch (err: any) {
            // setForm(emptyForm)
            setSearching(false)
            setError(err.message)
        }
    }

    return (
        <Stack p="1rem">
            {/* <Anchor style={{ textDecoration: 'none'}}>
                <Avatar variant="gradient" color="#2081E2" radius="xl" w="fit-content" h="fit-content">
                    <Group spacing="xs" m="6px" mr="12px"><Avatar size="sm" mx={0} src={OpenseaLogo.src}></Avatar>Powered by OpenSea API</Group>
                </Avatar>
            </Anchor> */}

            {/* <Flex gap="sm"><Center><OpenSeaBadge /></Center><Text>The NFT search feature is powered by the <Anchor href="https://opensea.io/" target="_blank"><strong>OpenSea</strong></Anchor> API</Text></Flex>

            <Divider /> */}

            <Flex gap="sm"><Center><IconSearch /></Center><Text>Search for an NFT or use the grid below to browse NFTs held in your wallet</Text></Flex>
            <Flex gap="sm"><Center><IconCurrencyEthereum /></Center><Text>Searching {process.env.NEXT_PUBLIC_CHAIN_ID === '0x5' ? 'Goerli Testnet' : 'Ethereum Mainnet'}</Text></Flex>
            <Divider />
            <form onSubmit={form.onSubmit((values) => findNFT(values))}>
                <TextInput
                    label="Contract Address"
                    placeholder="0x..."
                    {...form.getInputProps('contractAddress')}
                />

                <Flex w="100%" mt="12px">
                    <TextInput
                        label="Token ID"
                        placeholder="ID"
                        {...form.getInputProps('tokenId')}
                        style={{ flex: 2 }}
                    />
                    <Stack justify="end" mb={form.errors.tokenId ? '18px' : 'inherit'} ml="1rem">
                        <Button type="submit">Search</Button>
                    </Stack>

                </Flex>
            </form>

            {error &&
                <Alert icon={<IconAlertCircle size={16} />} title="Error!" color="red">
                    {error}
                </Alert>
            }
            <Divider />

            <Box w="100%">
                <SimpleGrid breakpoints={[
                    { minWidth: 'sm', cols: 2 },
                    { minWidth: 'md', cols: 4 },
                ]}>
                    {nfts.map((nft, index) => (
                        <Box key={index} style={{ cursor: 'pointer' }} onClick={() => onSelectNFT(nft)}>
                            <NFTCard nft={nft} />
                        </Box>
                    ))}
                    {hasMore &&
                        <>
                            {/* <Transition mounted={loading} transition="fade" duration={400} timingFunction="ease">
                                {(styles) => (
                                    <> */}
                                        {[...Array(4)].map((value, index) => (
                                            <NFTCardSkeleton key={index} />
                                        ))}
                                    {/* </>
                                )}
                            </Transition> */}
                        </>

                    }
                </SimpleGrid>
            </Box>

        </Stack>
    )
}

export default NFTSelector