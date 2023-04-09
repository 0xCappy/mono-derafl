import { Card, Text, Title } from '@mantine/core';
import { Raffle } from '@/src/API';
import { ContractActionButton } from '@/features';
import Abi from '@/types/Abi';
import { useMemo } from 'react';

interface RefundRaffleCardProps {
    raffle: Raffle
    address?: string
}

const RefundRaffleCard = ({ raffle, address }: RefundRaffleCardProps) => {
    const refundDate = useMemo(() => {
        const expiry = new Date(raffle.expires)
        return expiry.setDate(expiry.getDate() + 2)
    }, [raffle.expires])

    return (
        <Card withBorder shadow="sm" radius="md">
            <Title order={3}>Refund Raffle</Title>
            <Text my="1rem">This raffle will be eligible to be refunded after {`${new Date(refundDate).toLocaleString()}`}. <br />You can use the refund raffle button below to change the raffle to a refunded state once this date his passed</Text>

            <ContractActionButton
                chainId={raffle.chainId}
                contractAddress={raffle.contract}
                buttonTitle="Refund Raffle"
                abi={Abi.DERAFL}
                functionName="refundRaffle"
                args={[raffle.raffleNonce]}
                disabled={new Date() < new Date(refundDate)}
            />
        </Card>
    )
}

export default RefundRaffleCard