import { LooksRareBadge } from "@/common/components"
import { countdownRenderer } from "@/common/utils"
import { RaffleInfo } from "@/types"
import { Text, SimpleGrid, Group, Progress, Tooltip, Box, Button, HoverCard, Title } from "@mantine/core"
import Countdown from "react-countdown"
import StatCard from "./StatCard"

interface RaffleStatsProps {
    raffleInfo: RaffleInfo
    ticketsHeld: number
    progress: number
}

const RaffleStats = ({ raffleInfo, ticketsHeld, progress }: RaffleStatsProps) => {
    return (
        <SimpleGrid cols={2} breakpoints={[
            { minWidth: 'md', cols: 3 },
        ]}>
            <StatCard title="Tickets Available" content={<Text size="lg">{parseInt(raffleInfo.ticketsAvailable.toString()).toLocaleString()}</Text>} />
            <StatCard title="Tickets Remaining" content={<Text size="lg">{parseInt(raffleInfo.ticketsAvailable.toString()) - parseInt(raffleInfo.ticketsSold.toString())}</Text>} />
            <StatCard
                title="Progress"
                content={
                    <HoverCard width={280} shadow="md">
                        <HoverCard.Target>
                            <Progress size="lg" w="80%" radius="xl" value={progress} style={{ cursor: 'pointer' }}/>
                        </HoverCard.Target>
                        <HoverCard.Dropdown>
                            <Title align="center" size="lg">{progress.toFixed(2)}%</Title>
                        </HoverCard.Dropdown>
                    </HoverCard>

                    // <Tooltip label={`${progress.toFixed(2)}%`}><Box w="100%"></Box>
                    // </Tooltip>
                }
            />
            <StatCard title="Closes" content={<Text size="lg"><Countdown renderer={countdownRenderer} date={new Date(parseInt(raffleInfo.expiryTimestamp.toString()) * 1000)} /></Text>} />
            <StatCard title="Participants" content={<Text size="lg">{raffleInfo.batchIndex.toString()}</Text>} />
            <StatCard title="Royalties" content={<Group spacing={8}><Text size="lg">{`${(parseFloat(raffleInfo.royaltyPercentage.toString()) / 100).toFixed(2)}%`} </Text><LooksRareBadge /></Group>} />
        </SimpleGrid>
    )
}

export default RaffleStats