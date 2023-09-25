import { TicketBatchTable } from "@/common/components"
import { TicketBatch } from "@/src/API"
import { ticketBatchesByCreatedAt } from "@/src/graphql/queries"
import { DataDisplayType } from "@/types"
import { Center, Box, Container, Stack, Anchor, Button, Title } from "@mantine/core"
import { IconCash, IconCompass } from "@tabler/icons"
import { API, graphqlOperation } from "aws-amplify"
import { useEffect, useState } from "react"

const Purchases = () => {
    const [loading, setLoading] = useState(true)
    const [purchases, setPurchases] = useState([])

    useEffect(() => {
        getPurchases()
    }, [])

    const getPurchases = async () => {
        const purchasesData = await API.graphql(graphqlOperation(ticketBatchesByCreatedAt, {
            type: 'TicketBatch',
            sortDirection: 'DESC',
            limit: 10
        })) as any
        setPurchases(purchasesData.data.ticketBatchesByCreatedAt.items)
        setLoading(false)
    }

    return (
        <Container size="xl" py="4rem">
            <Stack>
                <Title>Recent Purchases</Title>
                <TicketBatchTable
                    ticketBatches={purchases}
                    loading={loading}
                    includeAccount
                    pageSize={8}
                    count={purchases.length}
                    usePaging={false}
                    displayType="table"
                />
            </Stack>
            <Center mt="2rem">
                <Box w="300px">
                    <Anchor href="/purchases" underline={false}>
                        <Button size="md" leftIcon={<IconCash />} fullWidth>More Purchases</Button>
                    </Anchor>
                </Box>
            </Center>
        </Container>
    )
}

export default Purchases