import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ChainId, chainsByChainId, NFT } from 'types';
import { ConfirmDetailsModal, NFTChip, NFTSelector, Overview } from './components';
import raflAbi from '../../abi/rafl.json'
import Steps from 'rc-steps';
import { useRouter } from 'next/router';
import { Button, Card, Center, Select, SimpleGrid, Stack, TextInput, Text, Box, Grid } from '@mantine/core';
import { useForm } from '@mantine/form';
import { parseEther } from 'ethers/lib/utils';
import { useContractEvent } from 'wagmi'
import useNftApprovedForAll from '@/hooks/useNftApprovedForAll';
import { BigNumber } from 'ethers';
import useRoyalties from '@/hooks/useRoyalties';
import { useWallet } from '@/context/WalletContext';
import { useIntersection } from '@mantine/hooks';
import OwnedNft from '@/types/OwnedNft';
import OwnedNftsResponse from '@/types/OwnedNftsResponse';
import ContractActionButton from '../ContractActionButton';
import Abi from '@/types/Abi';
import dayjs from 'dayjs';
import { DatePicker, TimeInput } from '@mantine/dates';

const PAGE_SIZE = 40
const CHAIN_ID = process.env.NEXT_PUBLIC_CHAIN_ID!
const DERAFL_ADDRESS = process.env.NEXT_PUBLIC_DERAFL_ADDRESS!

export interface CreateForm {
    ethAmount: string
    expiryDate: Date | undefined
    expiryTime: Date
}

interface NftSearchState {
    nfts: OwnedNft[],
    loading: boolean,
    pageKey?: string,
    hasMore: boolean
}

const validateEthAmount = (value: string) => {
    if (!value) {
        return 'required'
    }
    if (value === '.') {
        return 'required'
    }
    if (parseEther(value).mod(parseEther('0.001')).toString() !== '0') {
        return 'Must be divisible by .001'
    }
    if (parseEther(value).lt(parseEther('0.01'))) {
        return 'Minimum 0.01 Ether'
    }
    return
}

const validateExpiryDate = (value?: Date) => {
    if (!value) {
        return 'Required'
    }
    const dayjsValue = dayjs(value)
    if (dayjsValue.isBefore(dayjs(new Date()))) {
        return 'Cannot be in the past'
    } else if (dayjsValue.isAfter(dayjs(new Date()).add(30, 'days'))) {
        return 'Max 30 days'
    }
    return
}

const ContactFormSection = () => {
    const chain = chainsByChainId[CHAIN_ID as ChainId]
    const [confirmModalOpen, setConfirmModalOpen] = useState(false)
    const scrolledRef = useRef();
    const { setWalletOpen, address } = useWallet()
    const [nftSearchState, setNftSearchState] = useState<NftSearchState>({
        nfts: [],
        loading: false,
        hasMore: false
    })
    const [selectedNFT, setSelectedNFT] = useState<OwnedNft>()

    const approved = useNftApprovedForAll(selectedNFT?.contractAddress, address, DERAFL_ADDRESS)
    // const approved = useNftApproved(selectedNFT?.contractAddress, selectedNFT?.tokenId, DERAFL_ADDRESS, parseInt(CHAIN_ID))
    const [hasConfirmed, setHasConfirmed] = useState(false)
    const router = useRouter()
    const royalties = useRoyalties(selectedNFT?.contractAddress, selectedNFT?.tokenId, parseInt(CHAIN_ID), DERAFL_ADDRESS)

    const form = useForm<CreateForm>({
        initialValues: {
            ethAmount: '',
            expiryDate: undefined,
            expiryTime: new Date()
        },
        validate: {
            ethAmount: (value) => validateEthAmount(value),
            expiryDate: (value) => validateExpiryDate(value)
        },
        validateInputOnBlur: true
    });

    const expiryTimestamp = useMemo(() => {
        if (form.values.expiryDate && form.values.expiryTime) {
            return new Date(
                form.values.expiryDate.getFullYear(),
                form.values.expiryDate.getMonth(),
                form.values.expiryDate.getDate(),
                form.values.expiryTime.getHours(),
                form.values.expiryTime.getMinutes()
            )
        }
        return new Date()
    }, [form.values])

    useEffect(() => {
        console.log("FORM VAL: ", form.values)
    }, [form.values])

    useEffect(() => {
        console.log("ADDRESS: ", address)
        if (address) {
            setNftSearchState({
                hasMore: true,
                nfts: [],
                loading: false
            })
            // fetchNFTS()
        } else {
            onCancel()
        }
    }, [address])

    useEffect(() => {
        if (nftSearchState.hasMore === true && nftSearchState.nfts.length === 0 && !nftSearchState.loading) {
            fetchNFTS()
        }
    }, [nftSearchState])

    const stepValue: number = useMemo(() => {
        if (!selectedNFT) {
            return 0
        } else if (selectedNFT && !hasConfirmed) {
            return 1
        }
        return 2
    }, [selectedNFT, form, hasConfirmed])

    const fetchNFTS = async () => {
        if (!nftSearchState.loading && nftSearchState.hasMore) {
            setNftSearchState({
                ...nftSearchState,
                loading: true
            })
            try {
                const data = await fetch("/api/nft/byAccount", {
                    method: "POST",
                    body: JSON.stringify({ chainId: CHAIN_ID, address, pageKey: nftSearchState.pageKey, pageSize: PAGE_SIZE }),
                });
                const response = await data.json() as OwnedNftsResponse
                const received = response.nfts
                setNftSearchState({
                    nfts: [...nftSearchState.nfts, ...received],
                    pageKey: response.pageKey,
                    hasMore: received.length === PAGE_SIZE,
                    loading: false
                })
            } catch (err) {
                setNftSearchState({
                    ...nftSearchState,
                    loading: false,
                    hasMore: false
                })
            }
        }
    }

    const { ref, entry } = useIntersection({
        root: scrolledRef.current,
        threshold: 1,
    });

    useEffect(() => {
        if (entry && entry.isIntersecting) {
            fetchNFTS()
        }
    }, [ref, entry])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [selectedNFT])

    const onCancel = () => {
        form.setValues({ ethAmount: '', expiryDate: undefined, expiryTime: new Date() })
        setSelectedNFT(undefined)
        setHasConfirmed(false)
    }

    return (
        // <Card mb="8rem">
        <>
            <Stack m={{ sm: 0, md: '2rem' }}>
                <Steps current={stepValue} labelPlacement="vertical">
                    <Steps.Step title={<p>Select an NFT</p>} />
                    <Steps.Step title={<p>Approve & Create</p>} />
                </Steps>

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

                {stepValue === 0 && address &&
                    <>
                        <NFTSelector hasMore={nftSearchState.hasMore} account={address!} loading={nftSearchState.loading} nfts={nftSearchState.nfts} onSelectNFT={(nft) => { setSelectedNFT(nft) }} />
                        <Box ref={ref}></Box>
                    </>
                }

                {stepValue === 1 && address &&
                    <SimpleGrid cols={1} breakpoints={[
                        { minWidth: 'sm', cols: 2 },
                    ]}>
                        <Stack>
                            {selectedNFT && address &&
                                <NFTChip chainId={CHAIN_ID} nft={selectedNFT} onRemove={onCancel} />
                            }
                            <TextInput
                                label="How much Eth would you like to raise?"
                                placeholder="Eth amount"
                                withAsterisk
                                {...form.getInputProps('ethAmount')}
                            />

                            <Grid>
                                <Grid.Col span={8}>
                                    <DatePicker
                                        placeholder="Pick a date"
                                        label="Expiry Date (Max 30 days)"
                                        withAsterisk
                                        {...form.getInputProps('expiryDate')}
                                        minDate={new Date()}
                                        maxDate={dayjs(new Date()).add(30, 'days').toDate()}
                                    />
                                </Grid.Col>
                                <Grid.Col span={4}>
                                    <TimeInput
                                        placeholder="Expiry Time"
                                        label="Expiry Time"
                                        withAsterisk
                                        error={false}
                                        {...form.getInputProps('expiryTime')}
                                    />
                                </Grid.Col>
                            </Grid>
                        </Stack>

                        <Stack justify="space-between">
                            <Overview chain={chain} royalties={royalties} ethAmount={form.values.ethAmount} expiryTimestamp={expiryTimestamp} />

                            {!approved && selectedNFT && !Object.keys(form.errors).length ?
                                (<ContractActionButton
                                    chainId={CHAIN_ID}
                                    contractAddress={selectedNFT!.contractAddress}
                                    buttonTitle="Approve DeRafl"
                                    abi={Abi.ERC721}
                                    functionName="setApprovalForAll"
                                    args={[DERAFL_ADDRESS, true]}
                                    disabled={false}
                                />)
                                :
                                <>
                                    {form.isValid() &&
                                        <Button onClick={() => setConfirmModalOpen(true)}>Create Raffle</Button>
                                    }
                                </>
                            }
                        </Stack>
                    </SimpleGrid>
                }
            </Stack>

            {confirmModalOpen &&
                <ConfirmDetailsModal
                    isOpen={confirmModalOpen}
                    onClose={() => setConfirmModalOpen(false)}
                    nftToken={selectedNFT!}
                    ethAmount={form.values.ethAmount}
                    expiryTimestamp={expiryTimestamp}
                    royalties={royalties}
                />
            }
        </>
        // </Card>
    );
};

export default ContactFormSection;