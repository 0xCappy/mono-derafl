import { AccountsTable, TicketBatchTable } from "@/common/components"
import { Account } from "@/src/API"
import { accountsByUpdatedAt } from "@/src/graphql/queries"
import { Center, Box, Container, Stack, Anchor, Button, Title } from "@mantine/core"
import { IconCompass, IconUser } from "@tabler/icons"
import { API, graphqlOperation } from "aws-amplify"
import { useEffect, useState } from "react"

const Accounts = () => {
    const [loading, setLoading] = useState(true)
    const [accounts, setAccounts] = useState<Account[]>([])

    useEffect(() => {
        getPurchases()
    }, [])

    const getPurchases = async () => {
        const accountData = await API.graphql(graphqlOperation(accountsByUpdatedAt, {
            type: 'Account',
            limit: 10,
            sortDirection: 'DESC'
        })) as any
        setAccounts(accountData.data.accountsByUpdatedAt.items)
        setLoading(false)
    }

    return (
        <Container size="xl" pt="4rem">
            <Stack>
                <Title>Active Accounts</Title>

                <AccountsTable displayType="table" pageLength={1} accounts={accounts} loading={loading} />
            </Stack>
            <Center mt="2rem">
                <Box w="300px">
                    <Anchor href="/accounts" underline={false}>
                        <Button size="md" leftIcon={<IconUser />} fullWidth>More Accounts</Button>
                    </Anchor>
                </Box>
            </Center>
        </Container>
    )
}

export default Accounts