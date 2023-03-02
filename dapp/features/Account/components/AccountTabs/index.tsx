import { RaffleTable, TicketBatchTable } from "@/common/components";
import { Account, Raffle, TicketBatch } from "@/types"
import { Tabs, Card, Title, Divider, TabsValue, Transition, Button } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings, IconTicket, IconTrophy, IconSquarePlus } from '@tabler/icons';
import { useEffect, useState } from "react";
import { SortType } from "rsuite-table";
import Parse from 'parse'

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
        const data = await fetch("/api/account/raffles", {
            method: "POST",
            body: JSON.stringify({
                sortKey: rafflesCreatedProps.sortKey,
                asc: rafflesCreatedProps.sort === 'asc',
                skip: (rafflesCreatedProps.page - 1) * PAGE_LENGTH,
                limit: PAGE_LENGTH,
                filterKey: rafflesCreatedProps.type,
                address: account.address
            }),
        });
        const response = await data.json()
        setRafflesCreatedProps({
            ...rafflesCreatedProps,
            raffles: response.raffles,
            raffleCount: response.count,
            loading: false
        })
    }

    const fetchRafflesWon = async () => {
        setRafflesWonProps({ ...rafflesWonProps, loading: true })
        const data = await fetch("/api/account/raffles", {
            method: "POST",
            body: JSON.stringify({
                sortKey: rafflesWonProps.sortKey,
                asc: rafflesWonProps.sort === 'asc',
                skip: (rafflesWonProps.page - 1) * PAGE_LENGTH,
                limit: PAGE_LENGTH,
                filterKey: rafflesWonProps.type,
                address: account.address
            }),
        });
        const response = await data.json()
        setRafflesWonProps({
            ...rafflesWonProps,
            raffles: response.raffles,
            raffleCount: response.count,
            loading: false
        })
    }

    const fetchTicketBatches = async () => {
        setTicketBatchesProps({ ...ticketBatchesProps, loading: true })
        const data = await fetch("/api/account/ticketBatches", {
            method: "POST",
            body: JSON.stringify({
                sortKey: ticketBatchesProps.sortKey,
                asc: ticketBatchesProps.sort === 'asc',
                skip: (ticketBatchesProps.page - 1) * PAGE_LENGTH,
                limit: PAGE_LENGTH,
                filterKey: ticketBatchesProps.type,
                address: account.address
            }),
        });
        const response = await data.json()
        setTimeout(() => {
            setTicketBatchesProps({
                ...ticketBatchesProps,
                ticketBatches: response.ticketBatches,
                count: response.count,
                loading: false
            })

        }, 2000);
        // setTicketBatchesProps({
        //     ...ticketBatchesProps,
        //     ticketBatches: response.ticketBatches,
        //     count: response.count,
        //     loading: false
        // })
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
                    <Tabs.Tab icon={<IconTicket />} style={{ flex: 2 }} value="bought"><strong>Tickets Bought</strong></Tabs.Tab>
                    {/* <Tabs.Tab style={{ flex: 2 }} value="entered"><strong>Raffles Entered</strong></Tabs.Tab> */}
                    <Tabs.Tab icon={<IconTrophy />} style={{ flex: 2 }} value="winningAccount"><strong>Raffles Won</strong></Tabs.Tab>
                    <Tabs.Tab icon={<IconSquarePlus />} style={{ flex: 2 }} value="owner"><strong>Raffles Created</strong></Tabs.Tab>
                </Tabs.List>

                {/* <Divider my="1rem" /> */}

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