import { Account, TicketBatch } from "@/src/API"
import { ActionIcon, Anchor, Avatar, Center, Flex, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { IconBoxMultiple, IconCalendar, IconCalendarEvent, IconCalendarTime, IconDice5, IconExternalLink, IconEye, IconHash, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons"
import AccountAnchor from "../../AccountAnchor"
import TimeAgo from 'react-timeago'
import makeBlockie from "ethereum-blockies-base64"
import { MRT_ColumnDef, MantineReactTable } from "mantine-react-table"
import { useMemo } from "react"
import RaffleStateBadge from "../../RaffleStateBadge"
import { buildTransactionUrl, formatIpfsUrl } from "@/common/utils"
import { chainsByChainId, ChainId } from "@/types"

interface DesktopLayoutProps {
    loading: boolean
    includeAccount: boolean
    ticketBatches: TicketBatch[]
}

const DesktopLayout = ({ loading, ticketBatches, includeAccount }: DesktopLayoutProps) => {
    const columns = useMemo<MRT_ColumnDef<TicketBatch>[]>(() => {
        let cols: MRT_ColumnDef<TicketBatch>[] = [
            {
                header: 'Bought',
                size: 80,
                accessorFn: (batch) => (
                    <Group spacing={4}>
                        <IconTicket /><Text size="md">{batch.ticketsBought}</Text>
                    </Group>
                )
            },
            {
                header: 'Raffle',
                size: 70,
                accessorFn: (batch) => <Anchor size="md" href={`/raffles/${chainsByChainId[batch.raffle!.chainId as ChainId].shortName}/${batch.raffle!.raffleNonce}`}><strong>#{batch.raffle!.raffleNonce}</strong></Anchor>
            },
            {
                header: 'NFT',
                size: 200,
                accessorFn: (batch) => (
                    <Anchor size="md" href={`/raffles/${chainsByChainId[batch.raffle!.chainId as ChainId].shortName}/${batch.raffle!.raffleNonce}`}>
                        <Flex gap={8}>
                            <Center>
                                <Avatar size="md" src={formatIpfsUrl(batch.raffle?.nft?.imageUri || '')}></Avatar>
                            </Center>
                            <Stack style={{ flex: 2 }} spacing={0}>
                                <Text><strong>#{batch.raffle!.nft.tokenId}</strong></Text>
                                <Text lineClamp={1} size="md">{batch.raffle!.nft.collectionName}</Text>
                            </Stack>
                        </Flex>
                    </Anchor>
                )
            },
            {
                header: 'Raffle State',
                accessorFn: (batch) => <RaffleStateBadge progress={batch.raffle!.progress} raffleState={batch.raffle!.state} />
            },
            {
                header: 'Created',
                accessorFn: (batch) => (
                    <Group spacing={4}>
                        <IconCalendarEvent /><Text><TimeAgo date={new Date(batch.transaction.date)} /></Text>
                    </Group>
                ),
            },
            {
                header: 'TX',
                size: 100,
                accessorFn: (batch) => (
                    <Group>
                        <Anchor target="_blank" href={buildTransactionUrl(batch.transaction.chainId, batch.transaction.hash)}><ActionIcon><IconExternalLink /></ActionIcon></Anchor>
                    </Group>
                )
            },
        ]

        if (includeAccount) {
            const accountColumn: MRT_ColumnDef<TicketBatch> = {
                header: 'Account',
                accessorFn: (batch) => (
                    <Group>
                        <Avatar size="sm" radius={100} src={makeBlockie(batch.purchaser)}></Avatar>
                        <AccountAnchor address={batch.purchaser} />
                    </Group>)
            }
            cols = [accountColumn, ...cols]
        }
        return cols
    }, [])

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
            data={ticketBatches}
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
    )
}

export default DesktopLayout