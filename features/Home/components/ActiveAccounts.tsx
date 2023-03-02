import { AccountsTable, TicketBatchTable } from "@/common/components"
import { Account, TicketBatch } from "@/types"
import { Center, Box, Container, Stack, Anchor, Button, Title } from "@mantine/core"
import { IconCompass, IconUser } from "@tabler/icons"
import { useEffect, useState } from "react"

interface AccountsProps {
    accounts: Account[]
}

const Accounts = ({accounts}: AccountsProps) => {
    // const [accounts, setAccounts] = useState<Account[]>([])
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     fetchAccounts()
    // }, [])

    // const fetchAccounts = async () => {
    //     setLoading(true)
    //     const data = await fetch("/api/accounts", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             sortKey: 'updatedAt',
    //             asc: false,
    //             skip: 0,
    //             limit: 8
    //         }),
    //     });
    //     const response = await data.json()
    //     setAccounts(response.accounts)
    //     setLoading(false)
    // }

    
    return (
        <Container size="xl" pt="4rem">
            <Stack>
                <Title>Active Accounts</Title>

                <AccountsTable pageLength={1} accounts={accounts} loading={false} />
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