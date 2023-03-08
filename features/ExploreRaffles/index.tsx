import { NFTCardSkeleton, RaffleCard } from 'common/components';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Raffle } from '@/src/API';
import { RafflesTopBar } from './components'
import { Anchor, Box, SimpleGrid } from '@mantine/core';
import { RaffleFilter, raffleFilterOptions, raffleSortOptions } from './types';
import { Pagination } from '@mantine/core';
import { searchRaffles } from '@/src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { chainsByChainId, ChainId } from "@/types"

const PAGE_LENGTH = 24

const Raffles = () => {
    const [raffles, setRaffles] = useState<Raffle[]>([])
    const [loading, setLoading] = useState(false)
    const [filter, setFilter] = useState<RaffleFilter>({ filter: raffleFilterOptions[0], sort: raffleSortOptions[0], page: 0 })
    const [raffleCount, setRaffleCount] = useState(0)

    useEffect(() => {
        fetchRaffles(filter)
    }, [])

    const fetchRaffles = async (nextFilter: RaffleFilter) => {
        setLoading(true)
        const raffleData = await API.graphql(graphqlOperation(searchRaffles, {
            sort: {
                field: nextFilter.sort.key,
                direction: nextFilter.sort.asc ? 'asc' : 'desc'
            },
            filter: nextFilter.filter.value === 'active' ?
                {
                    and: [
                        { state: { eq: 1 }},
                        { expires: { gt: Date.now() } }
                    ]
                }
                :
                {
                    or: [
                        { state: { gt: 1 } },
                        { and: [
                            { state: { eq: 1 }},
                            { expires: { lt: Date.now() } }
                        ]}
                    ]
                },
            limit: PAGE_LENGTH,
            from: nextFilter.page * PAGE_LENGTH
        })) as any
        const { items, total } = raffleData.data.searchRaffles
        setRaffles(items)
        setRaffleCount(total)
        setLoading(false)
    }

    const handleFilterChange = (nextFilter: RaffleFilter) => {
        setFilter(nextFilter)
        fetchRaffles(nextFilter)
    }

    const handlePageChange = (page: number) => {
        window.scrollTo(0, 0)
        handleFilterChange({
            ...filter,
            page: page - 1
        })
    }

    return (
        <div>
            <Box mt="8rem" pb="8rem">
                <RafflesTopBar onFilterChange={handleFilterChange} filter={filter} />

                <SimpleGrid cols={1} breakpoints={[{ minWidth: 'sm', cols: 2 }, { minWidth: 'md', cols: 4 }]} mt="4rem">
                    {loading ?
                        <>
                            {[...Array(4)].map((value, index) => (
                                <NFTCardSkeleton key={index} />
                            ))}
                        </>
                        :
                        <>
                            {raffles.map((raffle: Raffle, index) => (
                                <Anchor transform='none' underline={false} key={index} href={`/raffles/${chainsByChainId[raffle.chainId as ChainId].shortName}/${raffle.raffleNonce}`}>
                                    <RaffleCard raffle={raffle} />
                                </Anchor>
                            ))}
                        </>
                    }
                </SimpleGrid>

                <Pagination mt="2rem" total={Math.ceil(raffleCount / PAGE_LENGTH)} siblings={2} initialPage={1} onChange={handlePageChange} />
            </Box>
        </div>
    );
};

export default Raffles;