import { AccountAnchor, OpenSeaBadge } from "@/common/components"
import { RaffleInfo, RaffleState } from "@/types"
import { Raffle } from '@/src/API'
import { Title, Divider, Flex, Center, SimpleGrid, Group, Avatar, Box, Stack, ActionIcon } from "@mantine/core"
import { IconHourglass, IconTicket, IconCurrencyEthereum, IconChartArrowsVertical, IconSearch, IconUser, IconShare } from "@tabler/icons"
import MarketPlaceLinks from "./MarketPlaceLinks"
import RaffleStateChip from "./RaffleStateChip"
import ShareRaffleButton from "./ShareRaffleButton"
import { useMemo } from "react"
import NftSale from "@/types/NftSale"
import RarityData from "@/types/RarityData"

interface RaffleInfoProps {
    raffle: Raffle
    raffleState: RaffleState
    progress: number
}

const RaffleInfoCard = ({ raffle, raffleState, progress }: RaffleInfoProps) => {
    const lastSales = useMemo(() => {
        if (raffle.nft.lastSales) {
            return JSON.parse(raffle.nft.lastSales) as NftSale[]
        }
        return []
    }, [raffle])

    const rarityData = useMemo(() => {
        if (raffle.nft.rarityData) {
            return JSON.parse(raffle.nft.rarityData) as RarityData
        }
    }, [raffle])

    return (
        <Stack spacing="md">
            <Box>
                <Title order={3} size={20}>{raffle.nft.collectionName}</Title>
                <Group position="apart">
                    <Title order={1} size={30}>{raffle.nft.tokenName}</Title>
                    <ShareRaffleButton raffle={raffle} />
                    {/* <a href="https://twitter.com/share?ref_src=twsrc%5Etfw" className="twitter-share-button" data-size="large" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js"></script> */}
                </Group>
            </Box>
            <MarketPlaceLinks contractAddress={raffle.nft.contractAddress} tokenId={raffle.nft.tokenId} />
            <Divider />
            <RaffleStateChip raffleState={raffleState} progress={progress} />
            <Flex gap="sm"><Center><IconHourglass /></Center><span>Raffle closes <strong>{`${new Date(raffle.expires).toLocaleString()}`}</strong> unless tickets sold out prior</span></Flex>
            <SimpleGrid cols={1} breakpoints={[
                { minWidth: 'md', cols: 2 },
            ]}>
                <Flex gap="sm"><Center><IconTicket /></Center>Raffle Number: <strong>{`#${raffle.raffleNonce}`}</strong></Flex>
                {/* <Group spacing={10}>
                    <Avatar size="sm" radius={100} src={makeBlockie(raffle.owner)}></Avatar>
                    <Box>Raffle Creator: <strong>{shortenAddress(raffle.owner)}</strong></Box>
                </Group> */}
                <Flex gap="sm"><Center><IconUser /></Center>Raffle Creator: <AccountAnchor address={raffle.owner} /></Flex>

                <Flex gap="sm"><Center><IconCurrencyEthereum /></Center>Last Sale: <strong>{`${lastSales.length > 0 ? 'Ξ' + lastSales[0].amount : 'Unknown'}`}</strong></Flex>
                <Flex gap="sm"><Center><IconChartArrowsVertical /></Center>Rarity Ranking: {!rarityData && <strong>Unknown</strong>} {rarityData && <span> <strong>{rarityData.rank}</strong> / {rarityData.maxRank} </span>}</Flex>
            </SimpleGrid>
        </Stack>
    )
}

export default RaffleInfoCard