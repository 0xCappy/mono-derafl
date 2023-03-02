import { Card, Group, Stack, Text, Image, Tooltip, HoverCard } from "@mantine/core"
import { IconClock, IconCrown, IconCurrencyEthereum, IconTicket } from "@tabler/icons"
import { BigNumber } from "ethers"
import { CreateForm } from ".."
import LooksLogo from '@/public/logo/looks.png'
import { Anchor } from "react-bootstrap"
import { LooksRareBadge } from "@/common/components"

interface OverviewProps {
    ethAmount: string
    royalties?: BigNumber
    expiryTimestamp: Date
}

const Overview = ({ ethAmount, royalties, expiryTimestamp }: OverviewProps) => {
    return (
        <Card shadow="sm" withBorder h="fit-content">
            <Stack>
                <Group><IconCurrencyEthereum /><Text>Ξ{!ethAmount ? '...' : parseFloat(ethAmount).toLocaleString()} Eth cap ({!ethAmount ? '...' : parseInt(parseFloat((parseFloat(ethAmount) / 0.001).toString()).toString()).toLocaleString()} tickets)</Text></Group>
                <Group><IconClock /><Text>{`${expiryTimestamp.toLocaleString()} (local time)`}</Text></Group>
                <Group>
                    <IconCrown />
                    <Text>{!royalties ? '0' : (parseFloat(royalties.toString()) / 100).toFixed(2)}% creator royalties</Text>
                    <LooksRareBadge />
                </Group>
                <Group><IconTicket /><Text>2.5% + Ξ0.005 Eth DeRafl fees</Text></Group>
            </Stack>
        </Card>
    )
}

export default Overview
