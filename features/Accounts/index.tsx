import { AccountAnchor, AccountsTable, RaffleStateBadge } from "@/common/components";
import { Account } from "@/src/API";
import { searchAccounts } from "@/src/graphql/queries";
import { DataDisplayType } from "@/types";
import { Title, Stack, Box, Avatar, Group, Center, Text, Card, Pagination, ActionIcon, Anchor, SegmentedControl, SegmentedControlItem } from "@mantine/core"
import { IconArrowDown, IconArrowsSort, IconArrowUp, IconBoxMultiple, IconCalendar, IconCalendarEvent, IconCalendarTime, IconDice5, IconExternalLink, IconGridPattern, IconHash, IconLayoutGrid, IconLayoutRows, IconPlus, IconSortAscending, IconSortDescending, IconSquarePlus, IconTable, IconTicket, IconTrophy } from "@tabler/icons";
import { shortenAddress } from "@usedapp/core";
import { API, graphqlOperation } from "aws-amplify";
import makeBlockie from "ethereum-blockies-base64";
import { MantineReactTable, MRT_ColumnDef } from "mantine-react-table";
import { useEffect, useMemo, useState } from "react";
import { Table, Column, HeaderCell, Cell, SortType } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'

const PAGE_LENGTH = 24

interface AccountFilter {
    page: number
    sortKey: string
    asc: boolean
}

export const Accounts = () => {
    const [accounts, setAccounts] = useState<Account[]>([])
    const [displayType, setDisplayType] = useState<DataDisplayType>('table')
    const [loading, setLoading] = useState(false)
    const [accountCount, setAccountCount] = useState(0)
    const [accountFilter, setAccountFilter] = useState<AccountFilter>({
        page: 0,
        sortKey: 'updatedAt',
        asc: false
    })
    useEffect(() => {
        fetchAccounts(accountFilter)
    }, [])

    const fetchAccounts = async (nextFilter: AccountFilter) => {
        setLoading(true)
        const accountData = await API.graphql(graphqlOperation(searchAccounts, {
            sort: { field: nextFilter.sortKey, direction: nextFilter.asc ? 'asc' : 'desc' },
            limit: PAGE_LENGTH,
            from: nextFilter.page * PAGE_LENGTH
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
                <Group position="apart">
                    <Title>Accounts</Title>
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

                <AccountsTable displayType={displayType} pageLength={PAGE_LENGTH} showPagination={true} accounts={accounts} count={accountCount} loading={loading} handlePageChange={handlePageChange} />
            </Stack>
        </Box>
    )
}

export default Accounts