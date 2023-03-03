import { AccountAnchor, AccountsTable, RaffleStateBadge, TicketBatchTable } from "@/common/components";
import { searchTicketBatches } from "@/src/graphql/queries";
import { Account, TicketBatch } from "@/src/API";
import { Title, Stack, Box, Avatar, Group, Center, Text, Card, Pagination, ActionIcon, Anchor } from "@mantine/core"
import { IconArrowDown, IconArrowsSort, IconArrowUp, IconBoxMultiple, IconCalendar, IconCalendarEvent, IconCalendarTime, IconDice5, IconExternalLink, IconHash, IconPlus, IconSortAscending, IconSortDescending, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons";
import { shortenAddress } from "@usedapp/core";
import { API, graphqlOperation } from "aws-amplify";
import makeBlockie from "ethereum-blockies-base64";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useEffect, useMemo, useState } from "react";
import { Table, Column, HeaderCell, Cell, SortType } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'

const PAGE_LENGTH = 20

interface Filter {
    page: number
    sortKey: string
    asc: boolean
}

export const Purchases = () => {
    const [purchases, setPurchases] = useState<TicketBatch[]>([])
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
            sort:{
                field: nextFilter.sortKey,
                direction: nextFilter.asc ? 'asc' : 'desc'
            },
            filter: {
                _deleted: { eq: false }
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
                <Title>Explore Purchases</Title>
                {/* <Card withBorder shadow="sm" radius="md"> */}
                <TicketBatchTable 
                    pageSize={PAGE_LENGTH}
                    ticketBatches={purchases}
                    count={count}
                    onPageChange={handlePageChange}
                    onSort={handleSort}
                    loading={loading}
                />
            </Stack>
        </Box>
    )
}

export default Purchases