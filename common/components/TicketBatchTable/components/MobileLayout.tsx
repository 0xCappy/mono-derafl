import { TicketBatch } from "@/src/API"
import { Group, Paper, SimpleGrid, Stack, Text, Center, Flex, Badge, Box, Title, Avatar, Skeleton, Accordion, Anchor, Divider } from "@mantine/core"
import { IconCaretDown, IconCaretRight, IconClock, IconEye, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons"
import AccountAnchor from "../../AccountAnchor"
import TimeAgo from 'react-timeago'
import makeBlockie from "ethereum-blockies-base64"
import { shortenAddress } from "@usedapp/core"
import { buildTransactionUrl, formatIpfsUrl } from "@/common/utils"

interface MobileLayoutProps {
    loading: boolean
    ticketBatches: TicketBatch[]
    pageSize: number
}
const MobileLayout = ({ loading, ticketBatches, pageSize }: MobileLayoutProps) => {
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
                        ticketBatches.map((batch, index) => (
                            // <Anchor href={`/raffles/${batch.raffle!.raffleId}`} underline={false}>
                            <Paper withBorder p="xs" radius={16} h="fit-content">
                                <Accordion mt={0}>
                                    <Accordion.Item value="customization">
                                        <Accordion.Control pt={6}>
                                            <Flex gap="sm" justify="space-between">
                                                <Anchor href={`/raffles/${batch.raffle?.raffleNonce}`}>
                                                    <Flex gap={8}>
                                                        <Center>
                                                            <Avatar size={50} src={batch.raffle!.nft.imageUri ? formatIpfsUrl(batch.raffle!.nft.imageUri) : undefined}></Avatar>
                                                        </Center>
                                                        <Stack style={{ flex: 2 }} spacing={0}>
                                                            <Text><strong>#{batch.raffle!.nft.tokenId}</strong></Text>
                                                            <Text lineClamp={1} size="lg"><strong>{batch.raffle!.nft.collectionName}</strong></Text>
                                                        </Stack>
                                                    </Flex>
                                                </Anchor>
                                            </Flex>

                                        </Accordion.Control>
                                        <Accordion.Panel>
                                            <Divider mb="1rem" />
                                            <Stack>
                                            <AccountAnchor withBlockie address={batch.purchaser} />
                                            <Anchor target="_blank" href={buildTransactionUrl(batch.transaction.chainId, batch.transaction.hash)}>View on explorer</Anchor>
                                            </Stack>
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                </Accordion>
                                <Group position="apart" spacing={0} mt="1rem">
                                    <Group position="center" w="40%" spacing={6}><IconTicket /><Text>{batch.ticketsBought}</Text></Group>
                                    <Group position="center" w="60%" spacing={6} style={{ borderLeft: '1px solid grey' }}><IconClock /><Text><TimeAgo date={new Date(batch.transaction.date)} /></Text></Group>
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