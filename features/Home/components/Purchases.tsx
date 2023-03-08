import { TicketBatchTable } from "@/common/components"
import { TicketBatch } from "@/src/API"
import { DataDisplayType } from "@/types"
import { Center, Box, Container, Stack, Anchor, Button, Title } from "@mantine/core"
import { IconCash, IconCompass } from "@tabler/icons"
import { useEffect, useState } from "react"

interface PurchasesProps {
    ticketBatches: TicketBatch[]
}

const Purchases = ({ticketBatches}: PurchasesProps) => {
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