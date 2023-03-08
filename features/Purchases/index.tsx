import { TicketBatchTable } from "@/common/components";
import { searchTicketBatches } from "@/src/graphql/queries";
import { TicketBatch } from "@/src/API";
import { Title, Stack, Box, Group, Center, SegmentedControl } from "@mantine/core"
import { IconArrowsSort, IconLayoutGrid, IconLayoutRows, IconSortAscending, IconSortDescending } from "@tabler/icons";
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { SortType } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { DataDisplayType } from "@/types";

const PAGE_LENGTH = 24

interface Filter {
    page: number
    sortKey: string
    asc: boolean
}

export const Purchases = () => {
    const [purchases, setPurchases] = useState<TicketBatch[]>([])
    const [displayType, setDisplayType] = useState<DataDisplayType>('table')
    const [loading, setLoading] = useState(false)
    const [count, setCount] = useState(0)
    const [filter, setFilter] = useState<Filter>({
        page: 0,
        sortKey: 'createdAt',
        asc: false
    })

    useEffect(() => {
        fetchPurchases(filter)
    }, [])

    const fetchPurchases = async (nextFilter: Filter) => {
        setLoading(true)
        const ticketBatchData = await API.graphql(graphqlOperation(searchTicketBatches, {
            sort: {
                field: nextFilter.sortKey,
                direction: nextFilter.asc ? 'asc' : 'desc'
            },
            limit: PAGE_LENGTH,
            from: nextFilter.page * PAGE_LENGTH
        })) as any
        const { items, total } = ticketBatchData.data.searchTicketBatches
        setPurchases(items)
        setCount(total)
        setLoading(false)
    }

    const handleFilterChange = (nextFilter: Filter) => {
        setFilter(nextFilter)
        fetchPurchases(nextFilter)
    }

    const handlePageChange = (page: number) => {
        window.scrollTo(0, 0)
        handleFilterChange({
            ...filter,
            page: page - 1
        })
    }

    const handleSort = (key: string, type?: SortType) => {
        handleFilterChange({
            ...filter,
            sortKey: key,
            asc: type === 'asc'
        })
    }

    const renderSortIcon = (type?: SortType) => {
        if (type === 'asc') {
            return <IconSortAscending size={18} style={{ marginBottom: '3px', marginLeft: '8px' }} />
        } else if (type === 'desc') {
            return <IconSortDescending size={18} style={{ marginBottom: '3px', marginLeft: '8px' }} />
        }
        return <IconArrowsSort size={18} style={{ marginBottom: '3px', marginLeft: '8px' }} />
    }

    return (
        <Box mt="8rem" pb="8rem">
            <Stack justify="space-between">
                <Group position="apart">
                    <Title>Purchases</Title>
                    <SegmentedControl
                        onChange={(type: DataDisplayType) => setDisplayType(type)}
                        data={[
                            {
                                value: 'table',
                                label: (
                                    <Center>
                                        <IconLayoutRows />
                                    </Center>
                                ),
                            },
                            {
                                value: 'grid',
                                label: (
                                    <Center>
                                        <IconLayoutGrid />
                                    </Center>
                                ),
                            }
                        ]}
                    />
                </Group>
                {/* <Card withBorder shadow="sm" radius="md"> */}
                <TicketBatchTable
                    pageSize={PAGE_LENGTH}
                    ticketBatches={purchases}
                    count={count}
                    onPageChange={handlePageChange}
                    onSort={handleSort}
                    loading={loading}
                    displayType={displayType}
                />
            </Stack>
        </Box>
    )
}

export default Purchases