import { Card, Stack, Text, Title, Group } from '@mantine/core';
import { IconTicket, IconUser } from '@tabler/icons';
import { RaffleInfo, TicketBatch } from 'types';
import { AccountAnchor } from '@/common/components';
import Abi from '@/types/Abi';
import { ContractActionButton } from '@/features';

interface RaffleDrawnCardProps {
    raffleInfo: RaffleInfo
    winningBatch: TicketBatch
    address?: string
    chainId: string
    contract: string
}

const RaffleDrawnCard = ({ raffleInfo, winningBatch, address, chainId, contract }: RaffleDrawnCardProps) => {
    return (
        <Card withBorder shadow="sm" radius="md" h="100%">
            <Stack h="100%" justify="space-between">
            <Title order={3}>Raffle Drawn</Title>
            {/* <Text my="1rem">You can finalize the raffle by selecting the "Finalize Raffle" button</Text> */}
            <Stack my="1rem" spacing={8} ml="2rem">
                <Group><IconTicket /><Text>Winning Ticket: #{raffleInfo.winningTicket.toString()} | Batch #{winningBatch.batchId}</Text></Group>
                <Group><IconUser /><Text>Winner:</Text><Group><AccountAnchor address={winningBatch.purchaser} /></Group></Group>
            </Stack>

            <ContractActionButton
                chainId={chainId}
                contractAddress={contract}
                buttonTitle="Finalize Raffle"
                abi={Abi.DERAFL}
                functionName="release"
                args={[raffleInfo.raffleId, winningBatch.batchId]}
                disabled={false}
            />
            </Stack>
        </Card>
    )
}

export default RaffleDrawnCard