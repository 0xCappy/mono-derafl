import { Card, Group, Stack, Title, Text, Button, Anchor } from '@mantine/core';
import { IconTicket, IconUser } from '@tabler/icons';
import { RaffleInfo, TicketBatch } from 'types';
import { AccountAnchor } from '@/common/components';

interface RaffleDrawnCardProps {
    raffleInfo: RaffleInfo
    winningBatch: TicketBatch
}

const RaffleCompleteCard = ({ raffleInfo, winningBatch }: RaffleDrawnCardProps) => {
    return (
        <Card withBorder shadow="sm" radius="md" h="100%">
            <Stack h="100%">
                <Title order={3}>Raffle Complete</Title>
                <Stack my="1rem" spacing={8} ml="2rem">
                    <Group><IconTicket /><Text>Winning Ticket: #{raffleInfo.winningTicket.toString()} | Batch #{winningBatch.batchId}</Text></Group>
                    <Group><IconUser /><Text>Winner:</Text><Group><AccountAnchor address={winningBatch.purchaser} /></Group></Group>
                </Stack>
                <Anchor href="/create" underline={false} w="100%">
                    <Button fullWidth>Create Raffle</Button>
                </Anchor>
            </Stack>
        </Card>
    )
}

export default RaffleCompleteCard