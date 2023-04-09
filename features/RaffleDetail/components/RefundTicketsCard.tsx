import { Card, Text, Title } from '@mantine/core';
import { Raffle } from '@/src/API';
import { ContractActionButton } from '@/features';
import Abi from '@/types/Abi';
import { useMemo } from 'react';
import useTicketsOwned from '@/hooks/useTicketsOwned';

interface RefundRaffleCardProps {
    raffle: Raffle
    address?: string

}

const RefundTicketsCard = ({ raffle, address }: RefundRaffleCardProps) => {
    const { ticketsOwned, isRefunded } = useTicketsOwned(raffle.raffleNonce.toString(), address, parseInt(raffle.chainId), raffle.contract)

    return (
        <Card withBorder shadow="sm" radius="md">
            <Title order={3}>Refund Tickets</Title>
            <Text my="1rem">This raffle is in a refunded state</Text>

            {
                ticketsOwned === 0 &&
                <Text>You are not eligible for a refund for this raffle as you did not purchase any tickets</Text>
            }

            {
                isRefunded &&
                <Text>Your refund for {ticketsOwned} tickets has already been processed</Text>
            }

            {
                !isRefunded && ticketsOwned > 0 &&
                <>
                    <Text mb="1rem">You are eligible for a refund of {ticketsOwned} tickets, use the button below to process your refund</Text>
                    <ContractActionButton
                        chainId={raffle.chainId}
                        contractAddress={raffle.contract}
                        buttonTitle="Refund Tickets"
                        abi={Abi.DERAFL}
                        functionName="refundTickets"
                        args={[raffle.raffleNonce]}
                        disabled={false}
                    />
                </>
            }
        </Card>
    )
}

export default RefundTicketsCard