import { Card, Group, Stack, Text, Image, Tooltip, HoverCard } from "@mantine/core"
import { IconClock, IconCrown, IconCurrencyEthereum, IconTicket } from "@tabler/icons"
import { BigNumber } from "ethers"
import { CreateForm } from ".."
import LooksLogo from '@/public/logo/looks.png'
import { Anchor } from "react-bootstrap"
import { IconPolygon, LooksRareBadge } from "@/common/components"
import { Chain } from "@/types"

interface OverviewProps {
    ethAmount: string
    royalties?: BigNumber
    expiryTimestamp: Date
    chain: Chain
}

const Overview = ({ ethAmount, royalties, expiryTimestamp, chain }: OverviewProps) => {
    return (
        <Card shadow="sm" withBorder h="fit-content">
            <Stack>
                <Group><IconCurrencyEthereum /><Text>Ξ{!ethAmount ? '...' : parseFloat(ethAmount).toLocaleString()} {chain.currencyNameShort} cap ({!ethAmount ? '...' : parseInt(parseFloat((parseFloat(ethAmount) / chain.ticketPrice).toString()).toString()).toLocaleString()} tickets)</Text></Group>
                <Group><IconClock /><Text>{`${expiryTimestamp.toLocaleString()} (local time)`}</Text></Group>
                <Group>
                    <IconCrown />
                    <Text>{!royalties ? '0' : (parseFloat(royalties.toString()) / 100).toFixed(2)}% creator royalties</Text>
                    <LooksRareBadge />
                </Group>
                <Group><IconTicket /><Text>5% + {chain.chainLinkFee} Eth DeRafl fees</Text></Group>
            </Stack>
        </Card>
    )
}

export default Overview
