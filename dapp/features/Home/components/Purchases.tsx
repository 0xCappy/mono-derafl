import { TicketBatchTable } from "@/common/components"
import { TicketBatch } from "@/types"
import { Center, Box, Container, Stack, Anchor, Button, Title } from "@mantine/core"
import { IconCash, IconCompass } from "@tabler/icons"
import { useEffect, useState } from "react"

interface PurchasesProps {
    ticketBatches: TicketBatch[]
}

const Purchases = ({ticketBatches}: PurchasesProps) => {
    // const [ticketBatches, setTicketBatches] = useState<TicketBatch[]>([])
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     fetchTicketBatches()
    // }, [])

    // const fetchTicketBatches = async () => {
    //     setLoading(true)
    //     const data = await fetch("/api/account/ticketBatches", {
    //         method: "POST",
    //         body: JSON.stringify({
    //             sortKey: 'createdAt',
    //             asc: false,
    //             skip: 0,
    //             limit: 8,
    //         }),
    //     });
    //     const response = await data.json()
    //     setTimeout(() => {
    //         setTicketBatches(response.ticketBatches)
    //         setLoading(false)
    //     }, 2000);
    // }
    
    return (
        <Container size="xl" py="4rem">
            <Stack>
                <Title>Recent Purchases</Title>
                <TicketBatchTable
                    ticketBatches={ticketBatches}
                    loading={false}
                    includeAccount
                    pageSize={8}
                    count={ticketBatches.length}
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