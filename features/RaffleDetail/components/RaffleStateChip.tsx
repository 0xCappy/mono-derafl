import { Box, Card, Group, Title } from "@mantine/core"
import { useMemo } from "react"
import { RaffleState } from "../../../types"

interface RaffleStateCardProps {
    raffleState: RaffleState
    progress: number
}

const RaffleStateChip = ({ raffleState, progress }: RaffleStateCardProps) => {
    const title: string = useMemo(() => {
        console.log("PROG: ", progress)
        if (raffleState === RaffleState.ACTIVE) {
            return 'Active'
        }

        let stateString

        switch (raffleState) {
            case RaffleState.CLOSED:
                stateString = 'Closed'
            case RaffleState.REFUNDED:
                stateString = 'Refunded'
            case RaffleState.PENDING_DRAW:
                stateString = 'Pending Draw'
            case RaffleState.DRAWN:
                stateString = 'Drawn'
            case RaffleState.RELEASED:
                stateString = 'Complete'
            default:
                break;
        }

        return `${stateString} (${progress >= 100 ? 'sold out' : 'expired'})`
    }, [raffleState])

    return (
        <Box w="fit-content">
            {/* <Card withBorder shadow="sm" radius="md">
                <Card.Section p="1rem"> */}
                    <Group>
                        {title === 'Active' && <div className="live-blink"></div>}
                        <Title>{title}</Title>
                    </Group>
                {/* </Card.Section>
            </Card> */}

        </Box>
    )
}

export default RaffleStateChip