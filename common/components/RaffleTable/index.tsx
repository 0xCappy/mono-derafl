import { formatIpfsUrl, renderSortIcon } from "@/common/utils"
import { Raffle, TicketBatch } from "@/src/API"
import { Group, Avatar, Stack, Pagination, Text, Image, Anchor, ActionIcon } from "@mantine/core"
import { IconTicket, IconBoxMultiple, IconHash, IconCalendarEvent, IconExternalLink, IconCalendarPlus, IconCircleDotted } from "@tabler/icons"
import { MRT_ColumnDef, MantineReactTable } from "mantine-react-table"
import { useMemo } from "react"
import { Column, HeaderCell, Cell, Table, SortType } from "rsuite-table"
import RaffleStateBadge from "../RaffleStateBadge"
import TableLoader from "../TableLoader"
import { MobileLayout } from "./components"

interface RaffleTableProps {
    raffles: Raffle[]
    raffleCount: number
    sort?: SortType
    sortKey: string
    page: number
    loading: boolean
    onSort: (sortKey: string, sortType?: SortType) => void
    onPageChange: (page: number) => void
}

const PAGE_LENGTH = 10

const RaffleTable = ({ raffles, sort, sortKey, raffleCount, loading, page, onSort, onPageChange }: RaffleTableProps) => {
    const columns = useMemo<MRT_ColumnDef<Raffle>[]>(
        () => [
            {
                header: 'Raffle',
                size: 70,
                accessorFn: (raffle) => <Anchor href={`/raffles/${raffle.raffleNonce}`}><strong>#{raffle.raffleNonce}</strong></Anchor>
            },
            {
                header: 'NFT',
                size: 80,
                accessorFn: (raffle) => (
                    <Group>
                        <Avatar size="sm" src={formatIpfsUrl(raffle.nft.imageUri || '')}></Avatar>
                    </Group>
                )
            },
            {
                header: 'Collection',
                accessorFn: (raffle) => (
                    <Group spacing={4}>
                        <IconBoxMultiple /><Text>{raffle.nft.collectionName}</Text>
                    </Group>
                )
            },
            {
                header: 'Token ID',
                accessorFn: (raffle) => (
                    <Group spacing={4}>
                        <IconHash /><Text>{raffle.nft.tokenId}</Text>
                    </Group>
                ),
                size: 100,
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
        <Stack>

            {/* <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                    <Box>
                        <DesktopLayout loading={loading} ticketBatches={ticketBatches} includeAccount={includeAccount} />
                    </Box>
                </MediaQuery>
    
                <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                    <Box> */}
            <MobileLayout pageSize={PAGE_LENGTH} loading={loading} raffles={raffles} />
            {/* </Box>
                </MediaQuery> */}

            <Pagination mt="2rem" total={Math.ceil(raffleCount / PAGE_LENGTH)} siblings={2} initialPage={page} onChange={onPageChange} />
        </Stack>
    )
}

export default RaffleTable