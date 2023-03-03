import { shortenAddress } from '@usedapp/core'
import TimeAgo from 'react-timeago'
import { ActionIcon, Anchor, Avatar, Box, Card, Group, Indicator, Pagination, Stack, Table, Text, Title } from '@mantine/core';
import { TicketBatch } from 'types';
import { IconBoxMultiple, IconCalendarEvent, IconExternalLink, IconHash, IconLink, IconRefresh, IconTicket } from '@tabler/icons';
import { AccountAnchor, RaffleStateBadge } from '@/common/components';
import ticketBatches from '@/pages/api/account/ticketBatches';
import { count } from 'console';
import { MRT_ColumnDef, MantineReactTable } from 'mantine-react-table';
import { useEffect, useMemo, useState } from 'react';
import makeBlockie from 'ethereum-blockies-base64';
import { buildTransactionUrl } from '@/common/utils';
import { API, graphqlOperation } from 'aws-amplify';
import { listTicketBatches, ticketBatchesByCreatedAt } from '@/src/graphql/queries';

const PAGE_LENGTH = 10

interface PurchasesCardProps {
    purchases: []
    unviewedPurchaseCount: number
    raffleId: string
    onPurchasesRefreshed: () => void
}

const PurchasesCard = ({ unviewedPurchaseCount, raffleId, onPurchasesRefreshed }: PurchasesCardProps) => {
    const [batches, setBatches] = useState<TicketBatch[]>([])
    const [batchCount, setBatchCount] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    const handlePageChange = (_page: number) => {
        setPage(_page)
        fetchTicketBatches(_page)
    }

    useEffect(() => {
        fetchTicketBatches(1)
    }, [])

    // const fetchTicketBatches = async (_page: number) => {
    //     setLoading(true)
    //     const data = await fetch("/api/ticketBatches", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             sortKey: 'createdAt',
    //             asc: false,
    //             skip: (_page - 1) * PAGE_LENGTH,
    //             limit: PAGE_LENGTH,
    //             raffleId
    //         }),
    //     });
    //     const response = await data.json()
    //     setBatches(response.ticketBatches)
    //     setBatchCount(response.count)
    //     setLoading(false)
    // }

    const fetchTicketBatches = async (_page: number) => {
        setLoading(true)

        const purchasesData = await API.graphql(graphqlOperation(ticketBatchesByCreatedAt, {
            // filter: { raffleId: { eq: raffleId } },
            type: 'TicketBatch',
            sortDirection: 'DESC'
        })) as any
        const purchases = purchasesData.data.ticketBatchesByCreatedAt.items
        setBatches(purchases)
        setBatchCount(100)
        setLoading(false)
    }

    const onRefresh = () => {
        setPage(1)
        fetchTicketBatches(1)
        onPurchasesRefreshed()
    }

    const columns = useMemo<MRT_ColumnDef<TicketBatch>[]>(
        () => [
            {
                header: 'Buyer',
                minSize: 170,
                accessorFn: (batch) => (
                    <Stack justify="center" h="100%">
                        <Group>
                            <Avatar size="sm" radius={100} src={makeBlockie(batch.purchaser)}></Avatar>
                            <Text><AccountAnchor address={batch.purchaser} /></Text>
                        </Group>
                    </Stack>
                )
            },
            {
                header: 'Bought',
                minSize: 50,
                accessorFn: (batch) => (
                    <Group spacing={4}>
                        <IconTicket /><Text>{batch.ticketsBought}</Text>
                    </Group>
                )
            },
            {
                header: 'Date',
                accessorFn: (batch) => (
                    <Group spacing={4}>
                        <IconCalendarEvent /><Text><TimeAgo date={new Date(batch.transaction.date) || ''} /></Text>
                    </Group>
                ),
            },
            {
                header: 'TX',
                minSize: 30,
                accessorFn: (batch) => (
                    <Group>
                        <Anchor target="_blank" href={buildTransactionUrl(batch.transaction.chainId, batch.transaction.hash)}><ActionIcon><IconExternalLink /></ActionIcon></Anchor>
                    </Group>
                )
            },
        ],
        [],
    );

    return (
        <Stack>
            <Group position="apart">
                <Title my="1rem" order={3}>Purchases</Title>
                <Indicator disabled={!unviewedPurchaseCount} label={unviewedPurchaseCount} overflowCount={10} inline size={22}>
                    <ActionIcon onClick={onRefresh} variant="outline" size="lg"><IconRefresh /></ActionIcon>
                </Indicator>
            </Group>
            <MantineReactTable
                enableColumnActions={false}
                enableRowSelection={false}
                enableColumnFilters={false}
                enablePagination={false}
                enableSorting={false}
                enableBottomToolbar={false}
                enableTopToolbar={false}
                columns={columns}
                data={batches}
                getRowId={(row) => row.id}
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
            />
            <Pagination page={page} mt="1rem" total={Math.ceil(batchCount / PAGE_LENGTH)} siblings={2} initialPage={page} onChange={handlePageChange} />
        </Stack>
    )
}

export default PurchasesCard