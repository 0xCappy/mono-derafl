import { AccountAnchor, OpenSeaBadge } from "@/common/components"
import { Raffle, RaffleInfo, RaffleState } from "@/types"
import { Title, Divider, Flex, Center, SimpleGrid, Group, Avatar, Box, Stack, ActionIcon } from "@mantine/core"
import { IconHourglass, IconTicket, IconCurrencyEthereum, IconChartArrowsVertical, IconSearch, IconUser, IconShare } from "@tabler/icons"
import MarketPlaceLinks from "./MarketPlaceLinks"
import RaffleStateChip from "./RaffleStateChip"
import ShareRaffleButton from "./ShareRaffleButton"

interface RaffleInfoProps {
    raffle: Raffle
    raffleState: RaffleState
    progress: number
}

const RaffleInfoCard = ({ raffle, raffleState, progress }: RaffleInfoProps) => {
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
                <Flex gap="sm"><Center><IconTicket /></Center>Raffle Number: <strong>{`#${raffle.raffleId}`}</strong></Flex>
                {/* <Group spacing={10}>
                    <Avatar size="sm" radius={100} src={makeBlockie(raffle.owner)}></Avatar>
                    <Box>Raffle Creator: <strong>{shortenAddress(raffle.owner)}</strong></Box>
                </Group> */}
                <Flex gap="sm"><Center><IconUser /></Center>Raffle Creator: <AccountAnchor address={raffle.owner} /></Flex>

                <Flex gap="sm"><Center><IconCurrencyEthereum /></Center>Last Sale: <strong>{`${raffle.nft.lastSales.length > 0 ? 'Ξ' + raffle.nft.lastSales[0].amount : 'Unknown'}`}</strong></Flex>
                <Flex gap="sm"><Center><IconChartArrowsVertical /></Center>Rarity Ranking: {!raffle.nft.rarityData && <strong>Unknown</strong>} {raffle.nft.rarityData && <span> <strong>{raffle.nft.rarityData.rank}</strong> / {raffle.nft.rarityData.maxRank} </span>}</Flex>
            </SimpleGrid>
        </Stack>
    )
}

export default RaffleInfoCard