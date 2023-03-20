import { Drawer, Stack, Button, Divider, Title, Avatar, Center, Chip, Box, Badge, SimpleGrid, Paper, Group } from "@mantine/core"
import { useEffect, useMemo, useState } from "react"
import { ProgressBar } from "react-loader-spinner"
import { useBalance, useBlockNumber, useConnect, useDisconnect, useFeeData } from 'wagmi'
import makeBlockie from 'ethereum-blockies-base64';
import { shortenAddress, useChainState } from "@usedapp/core";
import { IconCurrencyEthereum, IconExternalLink, IconGasStation, IconLinkOff, IconWallet } from "@tabler/icons";
import { formatEther, formatUnits } from "ethers/lib/utils.js";
import { Account } from "@/types";
import AccountDetail from "./AccountDetail";
import WalletLoader from "./WalletLoader";
import { listAccounts } from "@/src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

interface WalletDrawerProps {
    open: boolean
    onClose: () => void
    address: `0x${string}` | undefined
}

const WalletDrawer = ({ open, onClose, address }: WalletDrawerProps) => {
    const [loading, setLoading] = useState(false)
    const [account, setAccount] = useState<Account | undefined>()
    const { connect, connectors, error, isLoading, pendingConnector } = useConnect()
    const { disconnect } = useDisconnect()

    useEffect(() => {
        if (address) {
            setLoading(true)
        }
    }, [])

    useEffect(() => {
        if (address) {
            getAccount()
        }
    }, [address])

    const getAccount = async () => {
        setLoading(true)
        const accountData = await API.graphql(graphqlOperation(listAccounts, {
            filter: { address: { eq: address?.toLocaleLowerCase() } }
        })) as any
        const account = accountData?.data?.listAccounts?.items?.[0]
        if (!account) {
            setAccount({
                address: address?.toString() || '',
                rafflesCreated: 0,
                rafflesEntered: 0,
                rafflesWon: 0,
                ticketsBought: 0,
                createdAt: new Date(),
                updatedAt: new Date(),
            })
        } else {
            setAccount(account)
        }
        setLoading(false)
    }

    return (
        <Drawer
            opened={open}
            onClose={onClose}
            title={<Group spacing={5}><IconWallet size="32px" /><Title order={2}>Wallet</Title></Group>}
            padding="xl"
            position="right"
            transitionDuration={250}
            transitionTimingFunction="ease"

        >
            <Divider mb="2rem" />
            {open &&
                <Box style={{ maxHeight: '100vh', overflowY: 'scroll' }}>
                    {loading ?
                        <WalletLoader />
                        :
                        <>
                            {address && account ?
                                <AccountDetail account={account} address={address} />
                                :
                                <Stack>
                                    {connectors.filter((connector) => connector.ready).map((connector) => (
                                        <Button
                                            disabled={!connector.ready}
                                            key={connector.id}
                                            onClick={() => connect({ connector })}
                                        >
                                            {isLoading && connector.id === pendingConnector?.id ?
                                                <ProgressBar
                                                    height="50"
                                                    width="50"
                                                    ariaLabel="progress-bar-loading"
                                                    wrapperClass="progress-bar-wrapper"
                                                    borderColor='white'
                                                    barColor='white'
                                                />
                                                :
                                                <>{connector.name}</>
                                            }
                                        </Button>
                                    ))}
                                </Stack>
                            }
                        </>
                    }
                </Box>
            }
        </Drawer>
    )
}

export default WalletDrawer