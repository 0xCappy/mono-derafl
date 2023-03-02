import { Account } from "@/types"
import { Center, Paper, Avatar, Title, SimpleGrid, Group, Stack, Button, Badge, Anchor } from "@mantine/core"
import { IconCurrencyEthereum, IconGasStation } from "@tabler/icons"
import { shortenAddress } from "@usedapp/core"
import makeBlockie from "ethereum-blockies-base64"
import { useAccount } from "wagmi"
import { disconnect } from '@wagmi/core'


interface AccountDetailProps {
    account: Account,
    address: string,
    gasPrice: string,
    ethBalance: string
}

const AccountDetail = ({ account, address, gasPrice, ethBalance }: AccountDetailProps) => {
    return (
            <Stack>
                <Center>
                    <Paper radius={100} shadow="lg" p={5} withBorder>
                        <Avatar
                            size="xl"
                            src={makeBlockie(address!)}
                            radius={100}
                        />
                    </Paper>
                </Center>
                <Center>
                    <Title order={5}>{shortenAddress(address)}</Title>
                </Center>
                <SimpleGrid cols={2}>
                    <Paper p="xs" shadow="lg" withBorder>
                        <Center>
                            <Group><IconCurrencyEthereum /> <Title order={5}>{ethBalance}</Title></Group>
                        </Center>

                    </Paper>
                    <Paper p="xs" shadow="lg" withBorder>
                        <Center>
                            <Group><IconGasStation /> <Title order={5}>{gasPrice}</Title></Group>
                        </Center>

                    </Paper>
                </SimpleGrid>


                <Paper p="sm" shadow="lg" withBorder>
                    <Group position="apart">
                        <Title order={5}>Raffles Created</Title>
                        <Badge size="lg">{account.rafflesCreated}</Badge>
                    </Group>
                </Paper>

                <Paper p="sm" shadow="lg" withBorder>
                    <Group position="apart">
                        <Title order={5}>Raffles Entered</Title>
                        <Badge size="lg">{account.rafflesEntered}</Badge>
                    </Group>
                </Paper>

                <Paper p="sm" shadow="lg" withBorder>
                    <Group position="apart">
                        <Title order={5}>Raffles Won</Title>
                        <Badge size="lg">{account.rafflesWon}</Badge>
                    </Group>
                </Paper>

                <Paper p="sm" shadow="lg" withBorder>
                    <Group position="apart">
                        <Title order={5}>Tickets Bought</Title>
                        <Badge size="lg">{account.ticketsBought}</Badge>
                    </Group>
                </Paper>

                <Anchor href={`/accounts/${address}`} underline={false}><Button w="100%">View More</Button></Anchor>

                <Button variant="outline" color="red" w="100%" onClick={() => disconnect()}>Disconnect</Button>
            </Stack>
    )
}

export default AccountDetail