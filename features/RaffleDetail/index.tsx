import { NFT, Raffle, TicketBatch, Transaction } from '@/src/API';
import { RaffleInfo, RaffleState } from '@/types'
import { countdownRenderer } from 'common/utils';
import useRaffleInfo from '../../hooks/useRaffleInfo';
import Link from 'next/link';
import { Line } from 'rc-progress';
import React, { useEffect, useMemo, useState } from 'react';
import Countdown from 'react-countdown';
import { ButTicketsCard, LoadingSkeleton, MetadataCard, PendingDrawCard, PositionCard, PurchasesCard, RaffleClosedCard, RaffleCompleteCard, RaffleDrawnCard, RaffleInfoCard, RaffleStats, RefundRaffleCard, RefundTicketsCard, TokenInfoCard, TransactionsCard } from './components';
import { Container, Image, Stack, Title, Divider, Flex, Box, Avatar, Group, MediaQuery, Grid } from '@mantine/core';
import { RaffleCarousel } from '..';
import { useWallet } from '@/context/WalletContext';
import useTicketsOwned from '@/hooks/useTicketsOwned';
import { getRaffle, listTicketBatches } from '@/src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'
import NFTMedia from './components/NFTMedia';

interface RaffleDetailProps {
    raffle: Raffle
}

const RaffleDetail = ({ raffle }: RaffleDetailProps) => {
    const { address } = useWallet()
    const [viewedBatch, setViewedBatch] = useState(0)
    const [hasSetViewed, setHasSetViewed] = useState(false)
    const _raffleInfo = useRaffleInfo(raffle.raffleNonce.toString(), parseInt(raffle.chainId), raffle.contract)
    const { ticketsOwned, isRefunded } = useTicketsOwned(raffle.raffleNonce.toString(), address, parseInt(raffle.chainId), raffle.contract)
    const [raffleInfo, setRaffleInfo] = useState<RaffleInfo | undefined>()
    const [winningBatch, setWinningBatch] = useState<TicketBatch>()
    const [updatedRaffle, setUpdatedRaffle] = useState<Raffle>(raffle)


    useEffect(() => {
        setRaffleInfo(_raffleInfo)
    }, [_raffleInfo])

    useEffect(() => {
        if (raffleInfo && !hasSetViewed) {
            setHasSetViewed(true)
            setViewedBatch(parseInt(raffleInfo?.batchIndex.toString() || '0'))
        }
    }, [raffleInfo?.batchIndex])

    useEffect(() => {
        if (updatedRaffle.winningBatch) {
            setWinningBatch(updatedRaffle.winningBatch)
        }
    }, [])

    useEffect(() => {
        if (parseInt(raffleInfo?.winningTicket?.toString() || '0') > 0 && !winningBatch) {
            getWinningBatch()
        }
    }, [raffleInfo?.winningTicket])

    useEffect(() => {
        const newState = parseInt(raffleInfo?.raffleState.toString() || '0')
        if (newState > 0 && newState !== updatedRaffle.state) {
            refreshRaffle()
        }
    }, [raffleInfo?.raffleState])

    const getWinningBatch = async () => {
        const winningTicket = parseInt(raffleInfo?.winningTicket?.toString() || '0')
        const variables = {
            filter: {
                raffleNonce: { eq: raffle.raffleNonce },
                lastTicket: { ge: winningTicket },
                firstTicket: { le: winningTicket }
            }
        }

        const ticketData = await API.graphql(graphqlOperation(listTicketBatches, variables)) as any
        const winningBatch = ticketData.data.listTicketBatches?.items?.[0]
        setWinningBatch(winningBatch)
    }

    const refreshRaffle = async () => {
        const raffleData = await API.graphql(graphqlOperation(getRaffle, { id: raffle.id })) as any
        const _raffle = raffleData.data.getRaffle
        setUpdatedRaffle(_raffle)
    }

    const raffleState: RaffleState | undefined = useMemo(() => {
        if (raffleInfo) {
            if (raffleInfo.raffleState.toString() === '1' && new Date > new Date(parseInt(raffleInfo.expiryTimestamp.toString()) * 1000)) {
                return RaffleState.CLOSED
            }
            return parseInt(raffleInfo.raffleState.toString())
        }
    }, [raffleInfo])

    const progress: number = useMemo(() => {
        if (_raffleInfo) {
            const sold = _raffleInfo.ticketsSold.toNumber()
            const available = _raffleInfo.ticketsAvailable.toNumber()
            return (sold * 100) / available
        }
        return 0
    }, [_raffleInfo])

    const renderRaffleAction = () => (
        <>
            {raffleInfo &&
                <Box >
                    <Grid columns={12}>
                        <Grid.Col span={12} sm={4}>
                            <PositionCard raffle={raffleInfo} chainId={raffle.chainId} contract={raffle.contract} />
                        </Grid.Col>
                        <Grid.Col span={12} sm={8}>
                            {raffleState === RaffleState.ACTIVE &&
                                <ButTicketsCard ticketsRemaining={parseInt(raffleInfo.ticketsAvailable.toString()) - parseInt(raffleInfo.ticketsSold.toString())} raffle={updatedRaffle} />
                            }
                            {raffleState === RaffleState.CLOSED && <RaffleClosedCard address={address} raffle={updatedRaffle} />}
                            {raffleState === RaffleState.REFUNDED && <RefundTicketsCard address={address} raffle={updatedRaffle} />}
                            {raffleState === RaffleState.PENDING_DRAW && <PendingDrawCard />}
                            {winningBatch && raffleState === RaffleState.DRAWN && <RaffleDrawnCard chainId={raffle.chainId} contract={raffle.contract} address={address} raffleInfo={raffleInfo} winningBatch={winningBatch} />}
                            {winningBatch && raffleState === RaffleState.RELEASED && <RaffleCompleteCard raffleInfo={raffleInfo} winningBatch={winningBatch} />}
                        </Grid.Col>
                    </Grid>
                    {
                        raffleState !== RaffleState.ACTIVE
                        && raffleState !== RaffleState.RELEASED
                        && raffleState !== RaffleState.REFUNDED &&
                        <Box mt="2rem">
                            <RefundRaffleCard address={address} raffle={updatedRaffle} />
                        </Box>
                    }
                </Box>
            }
        </>
    )

    return (
        <Container size="xl">
            <Stack spacing="xl">

                {/* Md+ layout */}
                <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                    <Flex direction={{ base: 'column', sm: 'row' }} gap="xl">
                        <Stack style={{ flex: 2 }} spacing="xl">
                            <NFTMedia raffle={updatedRaffle} />
                            {updatedRaffle.nft.metadata && <MetadataCard nft={raffle.nft} />}
                            <TokenInfoCard nft={updatedRaffle.nft} />
                            {/* <CollectionInfoCard collection={raffle.nft.collection} /> */}
                        </Stack>

                        <Stack style={{ flex: 3 }} spacing="xl">
                            <RaffleInfoCard raffle={updatedRaffle} progress={progress} raffleState={parseInt(_raffleInfo?.raffleState.toString() || '0')} />
                            {raffleInfo ?
                                <>
                                    <RaffleStats ticketsHeld={ticketsOwned} raffleInfo={raffleInfo} progress={progress} />
                                    {renderRaffleAction()}
                                </>
                                :
                                <LoadingSkeleton />
                            }
                        </Stack>
                    </Flex>
                </MediaQuery>

                {/* Mobile Layout */}
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                    <Stack spacing="xl">
                        <NFTMedia raffle={updatedRaffle} />
                        <RaffleInfoCard progress={progress} raffle={updatedRaffle} raffleState={parseInt(_raffleInfo?.raffleState.toString() || '0')} />
                        {raffleInfo &&
                            <>
                                <RaffleStats ticketsHeld={ticketsOwned} raffleInfo={raffleInfo} progress={progress} />
                                {renderRaffleAction()}
                            </>
                        }
                        {updatedRaffle.nft.metadata && <MetadataCard nft={raffle.nft} />}
                        <TokenInfoCard nft={updatedRaffle.nft} />
                        {/* <CollectionInfoCard collection={raffle.nft.collection} /> */}
                    </Stack>
                </MediaQuery>

                <Box>
                    <PurchasesCard onPurchasesRefreshed={() => setViewedBatch(parseInt(raffleInfo?.batchIndex.toString() || '0'))} raffleNonce={raffle.raffleNonce} unviewedPurchaseCount={parseInt(raffleInfo?.batchIndex.toString() || '0') - viewedBatch} />
                </Box>

                <Box>
                    <TransactionsCard raffle={updatedRaffle} />
                </Box>

                {/* <SimpleGrid spacing={32} breakpoints={[
                    { minWidth: 'sm', cols: 1 },
                    { minWidth: 'md', cols: 2 },
                ]}>
                    <Stack>
                        <Image style={{ maxWidth: '100%', aspectRatio: '1/1' }} src={raffle.nft.imageUri?.replace("ipfs://", "https://ipfs.io/ipfs/")} />
                        {raffle.nft.metadata && <MetadataCard metadata={raffle.nft.metadata} />}
                    </Stack>


                </SimpleGrid> */}

                <Box mt="4rem">
                    <RaffleCarousel />
                </Box>
            </Stack>
        </Container>
    );
};

export default RaffleDetail;