import { AccountAnchor, AccountsTable, RaffleStateBadge } from "@/common/components";
import ticketBatches from "@/pages/api/account/ticketBatches";
import { Account } from "@/types";
import { Title, Stack, Box, Avatar, Group, Center, Text, Card, Pagination, ActionIcon, Anchor } from "@mantine/core"
import { IconArrowDown, IconArrowsSort, IconArrowUp, IconBoxMultiple, IconCalendar, IconCalendarEvent, IconCalendarTime, IconDice5, IconExternalLink, IconHash, IconPlus, IconSortAscending, IconSortDescending, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons";
import { shortenAddress } from "@usedapp/core";
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
        const data = await fetch("/api/accounts", {
            method: "POST",
            body: JSON.stringify({
                sortKey: nextFilter.sortKey,
                asc: nextFilter.asc,
                skip: nextFilter.page * PAGE_LENGTH,
                limit: PAGE_LENGTH
            }),
        });
        const response = await data.json()
        setAccounts(response.accounts)
        setAccountCount(response.count)
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