import { Account, Raffle, TicketBatch } from "@/types"
import { Group, Paper, SimpleGrid, Stack, Text, Center, Flex, Badge, Box, Title, Avatar, Skeleton, Accordion, Anchor, Divider } from "@mantine/core"
import { IconCaretDown, IconCaretRight, IconCircleDotted, IconClock, IconEye, IconHash, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons"
import AccountAnchor from "../../AccountAnchor"
import TimeAgo from 'react-timeago'
import makeBlockie from "ethereum-blockies-base64"
import { shortenAddress } from "@usedapp/core"
import { formatIpfsUrl } from "@/common/utils"
import RaffleStateBadge from "../../RaffleStateBadge"

interface MobileLayoutProps {
    loading: boolean
    raffles: Raffle[]
    pageSize: number
}
const MobileLayout = ({ loading, raffles, pageSize }: MobileLayoutProps) => {
    return (
        <SimpleGrid cols={1} breakpoints={[
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 4 }
        ]}>
            {loading ?
                <>
                    {[...Array(pageSize)].map(() => (
                        <Skeleton h="125px" radius={16} />
                    ))}
                </>
                :
                <>
                    {
                        raffles.map((raffle, index) => (
                            // <Anchor href={`/raffles/${batch.raffle!.raffleId}`} underline={false}>
                            <Paper withBorder p="xs" radius={16} h="fit-content">
                                <Accordion mt={0}>
                                    <Accordion.Item value="customization">
                                        <Accordion.Control pt={6}>
                                            <Flex gap="sm" justify="space-between">
                                                <Anchor href={`/raffles/${raffle!.raffleId}`}>
                                                    <Flex gap={8}>
                                                        <Center>
                                                            <Avatar size={50} src={raffle!.nft.imageUri ? formatIpfsUrl(raffle!.nft.imageUri) : undefined}></Avatar>
                                                        </Center>
                                                        <Stack style={{ flex: 2 }} spacing={0}>
                                                            <Text><strong>#{raffle!.nft.tokenId}</strong></Text>
                                                            <Text lineClamp={1} size="lg"><strong>{raffle!.nft.collectionName}</strong></Text>
                                                        </Stack>
                                                    </Flex>
                                                </Anchor>
                                            </Flex>

                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Divider mb="1rem" />
                                            <Stack>
                                                <Flex>
                                                    <IconCircleDotted />
                                                    <Text ml="4px"><strong>{`${raffle.progress.toFixed(1)}%`}</strong>
                                                    </Text>
                                                </Flex>

                                                {raffle.winningAccount && <Group spacing={6}><IconTrophy /><AccountAnchor address={raffle.winningAccount} /></Group>}

                                                {/* <AccountAnchor withBlockie address={batch.purchaser} />
                                                <Anchor target="_blank" href={`https://goerli.etherscan.io/tx/${batch.tx.hash}`}>View on explorer</Anchor> */}
                                            </Stack>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                                <Group position="apart" spacing={0} mt="1rem">
                                    <Group position="center" w="30%" spacing={6}><IconHash /><Text>{raffle.raffleId}</Text></Group>
                                    <Group position="center" w="70%" spacing={6} style={{ borderLeft: '1px solid grey' }}><RaffleStateBadge progress={raffle!.progress} raffleState={raffle!.state} /></Group>
                                </Group>
                            </Paper>
                            // </Anchor>
                        ))
                    }
                </>
            }

        </SimpleGrid>
    )
}

export default MobileLayout