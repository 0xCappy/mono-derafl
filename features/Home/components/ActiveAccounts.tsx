import { AccountsTable, TicketBatchTable } from "@/common/components"
import { Account } from "@/src/API"
import { Center, Box, Container, Stack, Anchor, Button, Title } from "@mantine/core"
import { IconCompass, IconUser } from "@tabler/icons"
import { useEffect, useState } from "react"

interface AccountsProps {
    accounts: Account[]
}

const Accounts = ({accounts}: AccountsProps) => {    
    return (
        <Container size="xl" pt="4rem">
            <Stack>
                <Title>Active Accounts</Title>

                <AccountsTable displayType="table" pageLength={1} accounts={accounts} loading={false} />
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