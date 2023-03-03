import { shortenAddress } from '@usedapp/core'
import TimeAgo from 'react-timeago'
import { ActionIcon, Anchor, Avatar, Box, Card, Group, Text, Table, Title } from '@mantine/core';
import { RaffleEventTitleMap } from 'types';
import { Raffle, Transaction } from '@/src/API'
import { useMemo } from 'react';
import { IconCalendarEvent, IconExternalLink, IconInfoCircle, IconLink, IconTicket } from '@tabler/icons';
import { AccountAnchor } from '@/common/components';
import makeBlockie from 'ethereum-blockies-base64';
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';
import { buildTransactionUrl } from '@/common/utils';

interface TransactionsCardProps {
    raffle: Raffle
}

const TransactionsCard = ({ raffle }: TransactionsCardProps) => {
    const changes = useMemo(() => {
        let stateChanges: Transaction[] = []
        if (raffle.openTx) {
            stateChanges.push(raffle.openTx)
        }
        if (raffle.closeTx) {
            stateChanges.push(raffle.closeTx)
        }
        if (raffle.drawnTx) {
            stateChanges.push(raffle.drawnTx)
        }
        if (raffle.releaseTx) {
            stateChanges.push(raffle.releaseTx)
        }
        if (raffle.refundTx) {
            stateChanges.push(raffle.refundTx)
        }
        return stateChanges
    }, [raffle])

    const columns = useMemo<MRT_ColumnDef<Transaction>[]>(
        () => [
            {
                header: 'TX Type',
                accessorFn: (tx: Transaction) => (
                    <Group spacing={4}>
                        <IconInfoCircle /><Text>{RaffleEventTitleMap[tx.eventType]}</Text>
                    </Group>
                )
            },
            {
                header: 'Date',
                accessorFn: (tx) => (
                    <Group spacing={4}>
                        <IconCalendarEvent /><Text><TimeAgo date={new Date(tx.date) || ''} /></Text>
                    </Group>
                ),
            },
            {
                header: 'TX',
                accessorFn: (tx) => (
                    <Group>
                        <Anchor target="_blank" href={buildTransactionUrl(tx.chainId, tx.hash)}><ActionIcon><IconExternalLink /></ActionIcon></Anchor>
                    </Group>
                )
            },
        ],
        [],
    );

    return (
        <Box>
            <Title my="1rem" order={3}>Raffle Transactions</Title>
            <MantineReactTable
                enableColumnActions={false}
                enableRowSelection={false}
                enableColumnFilters={false}
                enablePagination={false}
                enableSorting={false}
                enableBottomToolbar={false}
                enableTopToolbar={false}
                columns={columns}
                data={changes}
                getRowId={(row) => row.id}
                manualSorting
                rowCount={1}
                mantineTableProps={{
                    sx: {
                        tableLayout: 'fixed',
                    },
                }}
            />
        </Box>
    )
}

export default TransactionsCard