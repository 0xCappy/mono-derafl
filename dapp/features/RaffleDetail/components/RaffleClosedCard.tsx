import { Card, Text, Title } from '@mantine/core';
import { Raffle } from 'types';
import { ContractActionButton } from '@/features';
import Abi from '@/types/Abi';

interface BuyTicketsCardProps {
    raffle: Raffle
    address?: string
}

const RaffleClosedCard = ({ raffle, address }: BuyTicketsCardProps) => {
    return (
        <Card withBorder shadow="sm" radius="md">
            <Title order={3}>Raffle Closed</Title>
            <Text my="1rem">The raffle is closed and ready to be drawn. <br />You can start the drawing process by using the "Draw Raffle" button below</Text>

            <ContractActionButton
                chainId={raffle.chainId}
                contractAddress={raffle.contract}
                buttonTitle="Draw Raffle"
                abi={Abi.DERAFL}
                functionName="drawRaffle"
                args={[raffle.raffleId]}
                disabled={false}
            />
        </Card>
    )
}

export default RaffleClosedCard