import { RaffleTable, TicketBatchTable } from "@/common/components";
import { Account, Raffle, TicketBatch } from "@/src/API"
import { Tabs, Card, Title, Divider, TabsValue, Transition, Button } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconTicket, IconTrophy, IconSquarePlus } from '@tabler/icons';
import { useEffect, useState } from "react";
import { SortType } from "rsuite-table";
import Parse from 'parse'
import { searchRaffles, searchTicketBatches } from "@/src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const PAGE_LENGTH = 10

type AccountTableType = 'entered' | 'winningAccount' | 'owner' | 'bought'

interface AccountTabsProps {
    account: Account
}

interface RaffleTableProps {
    type: AccountTableType
    raffles: Raffle[]
    raffleCount: number
    sortKey: string
    sort?: SortType
    page: number
    loading: boolean
}

interface TicketBatchTableProps {
    type: AccountTableType
    ticketBatches: TicketBatch[]
    count: number
    sortKey: string
    sort?: SortType
    page: number
    loading: boolean
}

const initialRaffleProps = {
    raffles: [],
    raffleCount: 0,
    sortKey: 'createdAt',
    sort: 'desc' as SortType,
    loading: false,
    page: 1
}

const initialTicketBatchProps = {
    ticketBatches: [],
    count: 0,
    sortKey: 'createdAt',
    sort: 'desc' as SortType,
    loading: false,
    page: 1
}

const AccountTabs = ({ account }: AccountTabsProps) => {
    const [rafflesCreatedProps, setRafflesCreatedProps] = useState<RaffleTableProps>({ ...initialRaffleProps, type: 'owner' })
    const [rafflesEnteredProps, setRafflesEnteredProps] = useState<RaffleTableProps>({ ...initialRaffleProps, type: 'entered' })
    const [rafflesWonProps, setRafflesWonProps] = useState<RaffleTableProps>({ ...initialRaffleProps, type: 'winningAccount' })
    const [ticketBatchesProps, setTicketBatchesProps] = useState<TicketBatchTableProps>({ ...initialTicketBatchProps, type: 'bought' })

    const [selectedTab, setSelectedTab] = useState<string>('bought')
    useEffect(() => {
        fetchTicketBatches()
    }, [])

    useEffect(() => {
        fetchRafflesCreated()
    }, [rafflesCreatedProps.page, rafflesCreatedProps.sortKey, rafflesCreatedProps.sort])

    useEffect(() => {
        fetchRafflesWon()
    }, [rafflesWonProps.page, rafflesWonProps.sortKey, rafflesWonProps.sort])

    useEffect(() => {
        fetchTicketBatches()
    }, [ticketBatchesProps.page, ticketBatchesProps.sortKey, ticketBatchesProps.sort])

    const handlePage = (page: number, tableType: AccountTableType) => {
        switch (tableType) {
            case 'owner':
                setRafflesCreatedProps({ ...rafflesCreatedProps, page })
                break;
            case 'winningAccount':
                setRafflesWonProps({ ...rafflesWonProps, page })
                break;
            case 'bought':
                setTicketBatchesProps({ ...ticketBatchesProps, page })
                break;

            default:
                break;
        }
    }

    const handleSort = (sortKey: string, tableType: AccountTableType, sort?: SortType) => {
        switch (tableType) {
            case 'owner':
                setRafflesCreatedProps({ ...rafflesCreatedProps, sort, sortKey })
                break;
            case 'winningAccount':
                setRafflesWonProps({ ...rafflesWonProps, sort, sortKey })
                break;
            case 'bought':
                setTicketBatchesProps({ ...ticketBatchesProps, sort, sortKey })
                break;

            default:
                break;
        }
    }

    const fetchRafflesCreated = async () => {
        setRafflesCreatedProps({ ...rafflesCreatedProps, loading: true })
        const rafflesData = await API.graphql(graphqlOperation(searchRaffles, {
            sort:{
                field: rafflesCreatedProps.sortKey,
                direction: rafflesCreatedProps.sort
            },
            filter: {
                owner: { eq: account.address }
            },
            limit: PAGE_LENGTH,
            from: (rafflesCreatedProps.page - 1) * PAGE_LENGTH
        })) as any
        const { items, total } = rafflesData.data.searchRaffles
        setRafflesCreatedProps({
            ...rafflesCreatedProps,
            raffles: items,
            raffleCount: total,
            loading: false
        })
    }

    const fetchRafflesWon = async () => {
        setRafflesWonProps({ ...rafflesWonProps, loading: true })
        const rafflesData = await API.graphql(graphqlOperation(searchRaffles, {
            sort:{
                field: rafflesWonProps.sortKey,
                direction: rafflesWonProps.sort
            },
            filter: {
                winningAccount: { eq: account.address }
            },
            limit: PAGE_LENGTH,
            from: (rafflesWonProps.page - 1) * PAGE_LENGTH
        })) as any
        const { items, total } = rafflesData.data.searchRaffles
        setRafflesWonProps({
            ...rafflesWonProps,
            raffles: items,
            raffleCount: total,
            loading: false
        })
    }

    const fetchTicketBatches = async () => {
        setTicketBatchesProps({ ...ticketBatchesProps, loading: true })
        const ticketBatchData = await API.graphql(graphqlOperation(searchTicketBatches, {
            sort:{
                field: ticketBatchesProps.sortKey,
                direction: ticketBatchesProps.sort
            },
            filter: {
                purchaser: { eq: account.address }
            },
            limit: PAGE_LENGTH,
            from: (ticketBatchesProps.page - 1) * PAGE_LENGTH
        })) as any
        const { items, total } = ticketBatchData.data.searchTicketBatches
        setTicketBatchesProps({
            ...ticketBatchesProps,
            ticketBatches: items,
            count: total,
            loading: false
        })
    }

    const onTabChange = (tabIndex: TabsValue) => {
        setSelectedTab(tabIndex as string)
        switch (tabIndex) {
            case 'entered':
                if (rafflesEnteredProps.raffleCount === 0) {
                    // fetchRafflesEntered()
                }
                return;
            case 'winningAccount':
                if (rafflesWonProps.raffleCount === 0) {
                    fetchRafflesWon()
                }
                return;
            case 'owner':
                if (rafflesCreatedProps.raffleCount === 0) {
                    fetchRafflesCreated()
                }
                return;
            default:
                break;
        }
    }

    return (
        <Card withBorder shadow="sm" radius="md">
            <Tabs defaultValue="bought" variant="pills" onTabChange={onTabChange} style={{ width: '100%' }}>
                <Tabs.List style={{ width: '100%' }}>
                    <Tabs.Tab icon={<IconTicket />} style={{ flex: 2 }} value="bought"><strong style={{ color: selectedTab === 'bought' ? 'white' : 'inherit' }}>Tickets Bought</strong></Tabs.Tab>
                    {/* <Tabs.Tab style={{ flex: 2 }} value="entered"><strong>Raffles Entered</strong></Tabs.Tab> */}
                    <Tabs.Tab icon={<IconTrophy />} style={{ flex: 2 }} value="winningAccount"><strong style={{ color: selectedTab === 'winningAccount' ? 'white' : 'inherit' }}>Raffles Won</strong></Tabs.Tab>
                    <Tabs.Tab icon={<IconSquarePlus />} style={{ flex: 2 }} value="owner"><strong style={{ color: selectedTab === 'owner' ? 'white' : 'inherit' }}>Raffles Created</strong></Tabs.Tab>
                </Tabs.List>


                <Tabs.Panel value="bought" pt="xs">
                    <Transition mounted={selectedTab === 'bought'} transition="fade" duration={800} timingFunction="ease">
                        {(styles) =>
                            <div style={styles}>
                                <TicketBatchTable
                                    pageSize={PAGE_LENGTH}
                                    onSort={(sortKey: string, sortType?: SortType) => handleSort(sortKey, 'bought', sortType)}
                                    onPageChange={(page: number) => handlePage(page, 'bought')}
                                    {...ticketBatchesProps}
                                />
                            </div>
                        }
                    </Transition>
                </Tabs.Panel>

                <Tabs.Panel value="winningAccount" pt="xs">
                    <Transition mounted={selectedTab === 'winningAccount'} transition="fade" duration={800} timingFunction="ease">
                        {(styles) =>
                            <div style={styles}>
                                <RaffleTable
                                    onSort={(sortKey: string, sortType?: SortType) => handleSort(sortKey, 'winningAccount', sortType)}
                                    onPageChange={(page: number) => handlePage(page, 'winningAccount')}
                                    {...rafflesWonProps}
                                />
                            </div>
                        }
                    </Transition>
                </Tabs.Panel>
                <Tabs.Panel value="owner" pt="xs">
                    <Transition mounted={selectedTab === 'owner'} transition="fade" duration={800} timingFunction="ease">
                        {(styles) =>
                            <div style={styles}>
                                <RaffleTable
                                    onSort={(sortKey: string, sortType?: SortType) => handleSort(sortKey, 'owner', sortType)}
                                    onPageChange={(page: number) => handlePage(page, 'owner')}
                                    {...rafflesCreatedProps}
                                />
                            </div>
                        }
                    </Transition>
                </Tabs.Panel>
            </Tabs>

        </Card>
    )
}

export default AccountTabs