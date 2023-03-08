import { TicketBatch } from "@/src/API"
import { Stack, Pagination, Box } from "@mantine/core"
import { SortType } from "rsuite-table"
import { DesktopLayout, MobileLayout } from "./components"
import { DataDisplayType } from "@/types"

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
    displayType: DataDisplayType
}

const TicketBatchTable = ({ ticketBatches, pageSize, sort, sortKey, count, loading, page, includeAccount = false, onSort, onPageChange, usePaging = true, displayType }: TicketBatchTableProps) => {
    return (
        <Stack>
            <Box>
                {displayType === 'grid' ?
                    <MobileLayout pageSize={pageSize} loading={loading} ticketBatches={ticketBatches} />
                    :
                    <DesktopLayout loading={loading} ticketBatches={ticketBatches} includeAccount={includeAccount} />
                }
            </Box>
            {/* <MediaQuery smallerThan="md" styles={{ display: 'none' }}>
                <Box>
                    <DesktopLayout loading={loading} ticketBatches={ticketBatches} includeAccount={includeAccount} />
                </Box>
            </MediaQuery>

            <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Box>
                    <MobileLayout pageSize={pageSize} loading={loading} ticketBatches={ticketBatches} />
                </Box>
            </MediaQuery> */}

            {usePaging &&
                <Pagination mt="2rem" total={Math.ceil(count / pageSize)} siblings={2} initialPage={page} onChange={onPageChange} />
            }
        </Stack>
    )
}

export default TicketBatchTable