import { renderSortIcon } from "@/common/utils"
import { TicketBatch } from "@/src/API"
import { Group, Avatar, Stack, Pagination, Text, Image, Table, Anchor, ActionIcon, Box, MediaQuery } from "@mantine/core"
import { IconBoxMultiple, IconCalendarEvent, IconExternalLink, IconHash, IconTicket } from "@tabler/icons"
import { Column, HeaderCell, Cell, Table as OldTable, SortType } from "rsuite-table"
import TableHeader from "../TableHeader"
import TableLoader from "../TableLoader"
import { MantineReactTable, MRT_ColumnDef } from 'mantine-react-table';
import type {
    ColumnFiltersState,
    PaginationState,
    SortingState,
} from '@tanstack/react-table';
import { useMemo } from "react"
import RaffleStateBadge from "../RaffleStateBadge"
import makeBlockie from "ethereum-blockies-base64"
import account from "@/pages/api/account"
import AccountAnchor from "../AccountAnchor"
import accounts from "@/pages/accounts"
import { DesktopLayout, MobileLayout } from "./components"

interface TicketBatchTableProps {
    ticketBatches: TicketBatch[]
    pageSize: number
    count: number
    sort?: SortType
    sortKey?: string
    page?: number
    loading: boolean
    usePaging?: boolean
    includeAccount?: boolean
    onSort?: (sortKey: string, sortType?: SortType) => void
    onPageChange?: (page: number) => void
}

const TicketBatchTable = ({ ticketBatches, pageSize, sort, sortKey, count, loading, page, includeAccount = false, onSort, onPageChange, usePaging = true }: TicketBatchTableProps) => {

    return (
        <Stack>

            {/* <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Box>
                    <DesktopLayout loading={loading} ticketBatches={ticketBatches} includeAccount={includeAccount} />
                </Box>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Box> */}
                    <MobileLayout pageSize={pageSize} loading={loading} ticketBatches={ticketBatches} />
                {/* </Box>
            </MediaQuery> */}

            {usePaging &&
                <Pagination mt="2rem" total={Math.ceil(count / pageSize)} siblings={2} initialPage={page} onChange={onPageChange} />
            }
        </Stack>
    )
}

export default TicketBatchTable