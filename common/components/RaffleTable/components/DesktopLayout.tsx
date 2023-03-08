import { Account, Raffle, TicketBatch } from "@/src/API"
import { ActionIcon, Anchor, Avatar, Center, Flex, Group, Paper, SimpleGrid, Stack, Text } from "@mantine/core"
import { IconBoxMultiple, IconCalendar, IconCalendarEvent, IconCalendarPlus, IconCalendarTime, IconCircleDotted, IconDice5, IconExternalLink, IconEye, IconHash, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons"
import AccountAnchor from "../../AccountAnchor"
import TimeAgo from 'react-timeago'
import makeBlockie from "ethereum-blockies-base64"
import { MRT_ColumnDef, MantineReactTable } from "mantine-react-table"
import { useMemo } from "react"
import RaffleStateBadge from "../../RaffleStateBadge"
import { formatIpfsUrl } from "@/common/utils"
import { ChainId, chainsByChainId } from "@/types"

interface DesktopLayoutProps {
    loading: boolean
    raffles: Raffle[]
}

const DesktopLayout = ({ loading, raffles }: DesktopLayoutProps) => {
    const columns = useMemo<MRT_ColumnDef<Raffle>[]>(
        () => [
            {
                header: 'Raffle',
                size: 70,
                accessorFn: (raffle) => <Anchor href={`/raffles/${raffle.raffleNonce}`}><strong>#{raffle.raffleNonce}</strong></Anchor>
            },
            {
                header: 'NFT',
                size: 200,
                accessorFn: (raffle) => (
                    <Anchor size="md" href={`/raffles/${chainsByChainId[raffle.chainId as ChainId].shortName}/${raffle.raffleNonce}`}>
                        <Flex gap={8}>
                            <Center>
                                <Avatar size="md" src={formatIpfsUrl(raffle.nft.imageUri || '')}></Avatar>
                            </Center>
                            <Stack style={{ flex: 2 }} spacing={0}>
                                <Text><strong>#{raffle.nft.tokenId}</strong></Text>
                                <Text lineClamp={1} size="md">{raffle.nft.collectionName}</Text>
                            </Stack>
                        </Flex>
                    </Anchor>
                )
            },
            {
                header: 'Raffle State',
                accessorFn: (raffle) => <RaffleStateBadge progress={raffle!.progress} raffleState={raffle!.state} />
            },
            {
                header: 'Max Tickets',
                size: 120,
                accessorFn: (raffle) => (
                    <Group spacing={4}>
                        <IconTicket /><Text>{raffle.ticketsAvailable}</Text>
                    </Group>
                )
            },
            {
                header: 'Progress',
                size: 120,
                accessorFn: (raffle) => (
                    <Group spacing={4}>
                        <IconCircleDotted /><Text>{raffle.progress.toFixed(2)}%</Text>
                    </Group>
                )
            },
            {
                header: 'Open',
                accessorFn: (raffle) => (
                    <Group spacing={4}>
                        <IconCalendarPlus /><Text>{new Date(raffle.createdAt).toLocaleDateString()}</Text>
                    </Group>
                ),
            },
            {
                header: 'Close',
                accessorFn: (raffle) => (
                    <Group spacing={4}>
                        <IconCalendarPlus /><Text>{new Date(raffle.expires).toLocaleDateString()}</Text>
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
        data={raffles}
        getRowId={(raffle) => raffle.id}
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