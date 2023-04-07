import { useWallet } from '@/context/WalletContext';
import useTicketsOwned from '@/hooks/useTicketsOwned';
import { Raffle, RaffleInfo } from '@/types';
import { Card, Group, Stack, Title, Text, Button, Divider } from '@mantine/core';
import { IconDice5, IconTicket } from '@tabler/icons';
import { useMemo } from 'react';

interface PositionCardProps {
    raffle: RaffleInfo
    chainId: string
    contract: string
}

const PositionCard = ({ raffle, chainId, contract }: PositionCardProps) => {
    const { address, setWalletOpen } = useWallet()
    const ticketsOwned = useTicketsOwned(raffle.raffleId.toString(), address, parseInt(chainId), contract)

    const odds = useMemo(() => {
        const ticketsOwnedInt = parseInt(ticketsOwned?.toString() || '0')
        if (ticketsOwnedInt === 0) {
            return '0%'
        }
        return `${(ticketsOwnedInt / parseInt(raffle.ticketsSold.toString()) * 100).toFixed(2)}%` 
    }, [ticketsOwned, raffle.ticketsSold])

    return (
        <Card withBorder shadow="sm" radius="md" style={{ overflow: 'initial' }} h="100%">
                <Title order={3} mb="0.5rem">Position</Title>
            {address ?
                <Stack justify="center" spacing={5}>
                    <Group spacing="xs"><IconTicket size={24} /><Text>Owned: <strong>{parseInt(ticketsOwned?.toString() || '0').toLocaleString()}</strong></Text></Group>
                    <Group spacing="xs"><IconDice5 size={24} /><Text>Chance: <strong>{odds}</strong></Text></Group>
                    <Text size="xs">
                        ** Note that your chance of winning will go down as more tickets are sold to other participants
                    </Text>
                </Stack>
                :
                <Stack justify="end" align="center">
                    <Text align="center">Connect your wallet for more information about your position in this raffle</Text>
                    <Button fullWidth onClick={() => setWalletOpen(true)}>Connect Wallet</Button>
                </Stack>
            }
        </Card>
    )
}

export default PositionCard