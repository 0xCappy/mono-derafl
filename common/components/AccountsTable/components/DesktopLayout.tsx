import { Account } from "@/types"
import { Avatar, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { IconCalendar, IconCalendarTime, IconDice5, IconEye, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons"
import AccountAnchor from "../../AccountAnchor"
import TimeAgo from 'react-timeago'
import makeBlockie from "ethereum-blockies-base64"
import { MRT_ColumnDef, MantineReactTable } from "mantine-react-table"
import { useMemo } from "react"

interface DesktopLayoutProps {
    loading: boolean
    accounts: Account[]
}

const DesktopLayout = ({ loading, accounts }: DesktopLayoutProps) => {
    const columns = useMemo<MRT_ColumnDef<Account>[]>(
        () => [
            {
                header: 'Account',
                size: 170,
                accessorFn: (account) => (
                    <Stack justify="center" h="100%">
                        <Group>
                            <Avatar size="sm" radius={100} src={makeBlockie(account.address)}></Avatar>
                            <Text><AccountAnchor address={account.address} /></Text>
                        </Group>
                    </Stack>

                ),
            },
            {
                header: 'Raffles Created',
                size: 120,
                accessorFn: (account) => (
                    <Group spacing={4}>
                        <IconSquarePlus /><Text>{account.rafflesCreated}</Text>
                    </Group>
                )
            },
            {
                header: 'Raffles Won',
                size: 120,
                accessorFn: (account) => (
                    <Group>
                        <IconTrophy /><Text>{account.rafflesWon}</Text>
                    </Group>
                )
            },
            {
                header: 'Raffles Entered',
                size: 120,
                accessorFn: (account) => (
                    <Group spacing={4}>
                        <IconDice5 /><Text>{account.rafflesEntered}</Text>
                    </Group>
                )
            },
            {
                header: 'Tickets Bought',
                accessorFn: (account) => (
                    <Group spacing={4}>
                        <IconTicket /><Text>{account.ticketsBought}</Text>
                    </Group>
                ),
                size: 120,
            },
            {
                header: 'First Seen',
                size: 120,
                accessorFn: (account) => (
                    <Group spacing={4}>
                        <IconCalendar /><Text>{new Date(account.createdAt).toLocaleDateString()}</Text>
                    </Group>
                ),
            },
            {
                header: 'Last Seen',
                size: 120,
                accessorFn: (account) => (
                    <Group spacing={4}>
                        <IconCalendarTime /><Text>{new Date(account.updatedAt).toLocaleDateString()}</Text>
                    </Group>
                ),
            },
        ],
        [],
    );
    return (
        <MantineReactTable
            enableColumnActions={false}
            enableRowSelection={false}
            enableColumnFilters={false}
            enablePagination={false}
            enableSorting={false}
            enableBottomToolbar={false}
            enableTopToolbar={false}
            columns={columns}
            data={accounts}
            getRowId={(row) => row.address}
            manualSorting
            rowCount={1}
            state={{
                isLoading: loading,
            }}
            mantineTableProps={{
                sx: {
                    tableLayout: 'fixed',
                },
            }}

        />)
}

export default DesktopLayout