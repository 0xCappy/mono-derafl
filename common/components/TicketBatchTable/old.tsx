import { buildTransactionUrl, renderSortIcon } from "@/common/utils"
import { Raffle, TicketBatch } from "@/types"
import { Group, Avatar, Stack, Pagination, Text, Image, Anchor } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons"
import { Column, HeaderCell, Cell, Table, SortType } from "rsuite-table"
import TableLoader from "../TableLoader"

interface TicketBatchTableProps {
    ticketBatches: TicketBatch[]
    count: number
    sort?: SortType
    sortKey: string
    page: number
    loading: boolean
    onSort: (sortKey: string, sortType?: SortType) => void
    onPageChange: (page: number) => void
}

const PAGE_LENGTH = 10

const TicketBatchTable = ({ ticketBatches, sort, sortKey, count, loading, page, onSort, onPageChange }: TicketBatchTableProps) => {
    return (
        <Stack>
            <Table
                sortColumn={sortKey}
                sortType={sort}
                onSortColumn={onSort}
                data={ticketBatches}
                autoHeight
                bordered={false}
                cellBordered={false}
                hover={false}
                loading={loading}
                onRowClick={() => { }}

                renderLoading={() => <TableLoader />}
            >
                <Column minWidth={80} fullText sortable fixed>
                    <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Raffle</strong></HeaderCell>
                    <Cell dataKey="raffleId">
                        {(rowData, rowIndex) =>
                            <Anchor href={`/raffles/${ticketBatches[rowIndex!].raffle!.raffleId}`}><strong>#{ticketBatches[rowIndex!].raffle!.raffleId}</strong></Anchor>
                        }
                    </Cell>
                </Column>

                <Column minWidth={170} fullText sortable flexGrow={2}>
                    <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Bought</strong></HeaderCell>
                    <Cell dataKey="ticketsBought">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Text>{ticketBatches[rowIndex!].ticketsBought}</Text>
                            </Group>
                        }
                    </Cell>
                </Column>

                <Column minWidth={80} fullText>
                    <HeaderCell><strong>NFT</strong></HeaderCell>
                    <Cell dataKey="raffleId">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Avatar size="sm" src={ticketBatches[rowIndex!].raffle!.nft.openseaImage}></Avatar>
                            </Group>
                        }
                    </Cell>
                </Column>

                <Column minWidth={170} fullText sortable flexGrow={2}>
                    <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Collection</strong></HeaderCell>
                    <Cell dataKey="createdAt">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Text>{ticketBatches[rowIndex!].raffle!.nft.collectionName}</Text>
                            </Group>
                        }
                    </Cell>
                </Column>

                <Column width={100} fullText flexGrow={2}>
                    <HeaderCell><strong>Token ID</strong></HeaderCell>
                    <Cell dataKey="nft.tokenId">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Text>{'#' + ticketBatches[rowIndex!].raffle!.nft.tokenId}</Text>
                            </Group>
                        }
                    </Cell>
                </Column>

                <Column minWidth={170} fullText flexGrow={2} sortable>
                    <HeaderCell renderSortIcon={renderSortIcon}><strong>Raffle State</strong></HeaderCell>
                    <Cell dataKey="state">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Text>{ticketBatches[rowIndex!].raffle!.state}</Text>
                            </Group>
                        }
                    </Cell>
                </Column>

                <Column minWidth={100} fullText flexGrow={2} sortable>
                    <HeaderCell renderSortIcon={renderSortIcon}><strong>Date</strong></HeaderCell>
                    <Cell dataKey="tx.date">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Text>{new Date(ticketBatches[rowIndex!].transaction.date).toLocaleDateString()}</Text>
                            </Group>
                        }
                    </Cell>
                </Column>

                <Column minWidth={100} fullText flexGrow={2}>
                    <HeaderCell><strong>TX</strong></HeaderCell>
                    <Cell dataKey="expires">
                        {(rowData, rowIndex) =>
                            <Group>
                                <Anchor target="_blank"><IconExternalLink /></Anchor>
                            </Group>
                        }
                    </Cell>
                </Column>

            </Table>
            <Pagination mt="2rem" total={Math.ceil(count / PAGE_LENGTH)} siblings={2} initialPage={page} onChange={onPageChange} />
        </Stack>
    )
}

export default TicketBatchTable