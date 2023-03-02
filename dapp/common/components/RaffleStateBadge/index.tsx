import { Badge, Box, Card, Center, Group, Title } from "@mantine/core"
import { IconActivity, IconTicketOff, IconTrophy } from "@tabler/icons"
import { useMemo } from "react"
import { RaffleState } from "../../../types"

interface RaffleStateCardProps {
    raffleState: RaffleState
    progress: number
}

const RaffleStateBadge = ({ raffleState, progress }: RaffleStateCardProps) => {
    const chip: React.ReactNode = useMemo(() => {
        if (raffleState === RaffleState.ACTIVE) {
            return (
                <Badge size="xl" radius="xl" color="green" leftSection={<Center><IconActivity /></Center>}>
                    Active
                </Badge>
            )
        }

        if (raffleState === RaffleState.REFUNDED) {
            return (
                <Badge size="xl" radius="xl" color="red" leftSection={<Center><IconTicketOff /></Center>}>
                    Refunded
                </Badge>
            )
        }

        return (
            <Badge size="xl" radius="xl" color="blue" leftSection={<Center><IconTrophy /></Center>}>
                {progress >=100 ? 'Sold Out' : 'Expired'}
            </Badge>
        )
    }, [raffleState])

    return chip
}

export default RaffleStateBadge