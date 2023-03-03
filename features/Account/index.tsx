import { Account } from "@/src/API";
import { searchAccounts } from "@/src/graphql/queries";
import { Title, Stack, Box, Avatar, Group, Center, Text, Card, Pagination } from "@mantine/core"
import { IconArrowDown, IconArrowsSort, IconArrowUp, IconSortAscending, IconSortDescending } from "@tabler/icons";
import { shortenAddress } from "@usedapp/core";
import { API, graphqlOperation } from "aws-amplify";
import makeBlockie from "ethereum-blockies-base64";
import { useEffect, useState } from "react";
import { Table, Column, HeaderCell, Cell, SortType } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css'
import { AccountHeader, AccountTabs } from "./components";
import AccountStats from "./components/AccountHeader/AccountStats";

const PAGE_LENGTH = 1

interface AccountFilter {
    page: number
    sortKey: string
    asc: boolean
}

interface AccountDetailProps {
    account: Account
}

export const AccountDetail = ({account}: AccountDetailProps) => {
    return (
        <Box mt="8rem" pb="8rem">
            <Stack justify="space-between">
                <Title>Account</Title>
                {/* <Card withBorder shadow="sm" radius="md"> */}
                    <AccountHeader account={account} />
                    
                    {/* <Table sortColumn={accountFilter.sortKey} sortType={accountFilter.asc ? 'asc' : 'desc'} onSortColumn={(key, type) => handleSort(key, type)} data={accounts} autoHeight bordered={false} cellBordered={false} hover={false}>
                        <Column minWidth={170} fullText flexGrow={2}>
                            <HeaderCell><Title order={5}>Account</Title></HeaderCell>
                            <Cell>
                                {(rowData, rowIndex) =>
                                    <Stack justify="center" h="100%">
                                        <Group>
                                            <Avatar size="sm" radius={100} src={makeBlockie(accounts[rowIndex!].address)}></Avatar>
                                            <Text>{shortenAddress(accounts[rowIndex!].address)}</Text>
                                        </Group>
                                    </Stack>
                                }
                            </Cell>
                        </Column>

                        <Column minWidth={170} fullText sortable flexGrow={2}>
                            <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Raffles Created</strong></HeaderCell>
                            <Cell dataKey="rafflesCreated" />
                        </Column>

                        <Column minWidth={150} fullText sortable flexGrow={2}>
                            <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Raffles Won</strong></HeaderCell>
                            <Cell dataKey="rafflesWon" />
                        </Column>

                        <Column minWidth={170} fullText sortable flexGrow={2}>
                            <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Raffles Entered</strong></HeaderCell>
                            <Cell dataKey="rafflesEntered" />
                        </Column>

                        <Column minWidth={160} fullText sortable flexGrow={2}>
                            <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Tickets Bought</strong></HeaderCell>
                            <Cell dataKey="ticketsBought" />
                        </Column>

                        <Column minWidth={130} fullText sortable flexGrow={2}>
                            <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>First Seen</strong></HeaderCell>
                            <Cell dataKey="createdAt">
                                {(rowData, rowIndex) =>
                                    <Group>
                                        <Text>{new Date(accounts[rowIndex!].createdAt).toLocaleDateString()}</Text>
                                    </Group>
                                }
                            </Cell>
                        </Column>

                        <Column minWidth={120} fullText sortable flexGrow={2}>
                            <HeaderCell renderSortIcon={renderSortIcon} sortable><strong>Last Seen</strong></HeaderCell>
                            <Cell dataKey="updatedAt">
                                {(rowData, rowIndex) =>
                                    <Group>
                                        <Text>{new Date(accounts[rowIndex!].updatedAt).toLocaleDateString()}</Text>
                                    </Group>
                                }
                            </Cell>
                        </Column>

                    </Table>
                    <Pagination mt="2rem" total={Math.ceil(accountCount / PAGE_LENGTH)} siblings={2} initialPage={1} onChange={handlePageChange} /> */}

                {/* </Card> */}

                <AccountStats account={account} />

                <AccountTabs account={account} />
            </Stack>
        </Box>
    )
}

export default AccountDetail