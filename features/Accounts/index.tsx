import { AccountAnchor, AccountsTable, RaffleStateBadge } from "@/common/components";
import { Account } from "@/src/API";
import { searchAccounts } from "@/src/graphql/queries";
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

interface AccountFilter {
    page: number
    sortKey: string
    asc: boolean
}

export const Accounts = () => {
    const [accounts, setAccounts] = useState<Account[]>([])
    const [loading, setLoading] = useState(false)
    const [accountCount, setAccountCount] = useState(0)
    const [accountFilter, setAccountFilter] = useState<AccountFilter>({
        page: 0,
        sortKey: 'createdAt',
        asc: true
    })
    useEffect(() => {
        fetchAccounts(accountFilter)
    }, [])

    const fetchAccounts = async (nextFilter: AccountFilter) => {
        setLoading(true)
        const accountData = await API.graphql(graphqlOperation(searchAccounts, {
            sort:{field: nextFilter.sortKey, direction: nextFilter.asc ? 'asc' : 'desc'},
            limit: PAGE_LENGTH,
            from: nextFilter.page * PAGE_LENGTH,
            filter: { _deleted: { eq: false } }
        })) as any
        const { items, total } = accountData.data.searchAccounts
        setAccounts(items)
        setAccountCount(total)
        setLoading(false)
    }

    const handleFilterChange = (nextFilter: AccountFilter) => {
        setAccountFilter(nextFilter)
        fetchAccounts(nextFilter)
    }

    const handlePageChange = (page: number) => {
        window.scrollTo(0, 0)
        handleFilterChange({
            ...accountFilter,
            page: page - 1
        })
    }

    const handleSort = (key: string, type?: SortType) => {
        handleFilterChange({
            ...accountFilter,
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
                <Title>Explore Accounts</Title>
                {/* <Card withBorder shadow="sm" radius="md"> */}

                <AccountsTable pageLength={PAGE_LENGTH} showPagination={true} accounts={accounts} count={accountCount} loading={loading} handlePageChange={handlePageChange} />
            </Stack>
        </Box>
    )
}

export default Accounts