import accounts from "@/pages/accounts"
import { Account } from "@/types"
import { Avatar, Box, Group, Paper, Stack, Text, Title } from "@mantine/core"
import { shortenAddress } from "@usedapp/core"
import makeBlockie from "ethereum-blockies-base64"
import AccountStats from "./AccountStats"

interface AccountHeaderProps {
    account: Account
}

const AccountHeader = ({ account }: AccountHeaderProps) => {
    return (
        <Box>
            <Stack justify="center" h="100%">
                <Group>
                    <Paper radius={100} shadow="lg" p={5} withBorder>
                        <Avatar size="xl" radius={100} src={makeBlockie(account.address)}></Avatar>
                    </Paper>
                    <Stack h="100%" spacing={0} justify="space-between">
                        <Title order={5}>{shortenAddress(account.address)}</Title>
                        <Group><Text><strong>First seen: </strong>{new Date(account.createdAt).toLocaleDateString()}</Text></Group>
                        <Group><Text><strong>Last seen: </strong>{new Date(account.updatedAt).toLocaleDateString()}</Text></Group>
                    </Stack>
                </Group>

                {/* <AccountStats account={account} /> */}
            </Stack>
        </Box>
    )
}

export default AccountHeader