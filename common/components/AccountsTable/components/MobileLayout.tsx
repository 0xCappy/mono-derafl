import { Account } from "@/types"
import { Group, Paper, SimpleGrid, Stack, Text, Center, Flex, Badge, Box, Title, Avatar, Skeleton, Anchor } from "@mantine/core"
import { IconCaretDown, IconCaretRight, IconEye, IconSquarePlus, IconTicket, IconTrophy } from "@tabler/icons"
import AccountAnchor from "../../AccountAnchor"
import TimeAgo from 'react-timeago'
import makeBlockie from "ethereum-blockies-base64"
import { shortenAddress } from "@usedapp/core"

interface MobileLayoutProps {
    loading: boolean
    accounts: Account[]
    pageSize: number
}
const MobileLayout = ({ loading, accounts, pageSize }: MobileLayoutProps) => {
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
                        accounts.map((account, index) => (
                            <Anchor href={`/accounts/${account.address}`} underline={false}>
                                <Paper withBorder p="1rem" radius={16}>
                                    <Flex gap="sm" justify="space-between">
                                        <Stack justify="center">
                                            <Paper radius={100} shadow="lg" p={6} withBorder>
                                                <Avatar size="md" radius={100} src={makeBlockie(account.address)}></Avatar>
                                            </Paper>
                                        </Stack>

                                        <Stack style={{ flex: 2 }} spacing={0} justify="center">
                                            <Text><strong>{shortenAddress(account.address)}</strong></Text>
                                            <Group spacing="sm">
                                                <Text>Active:</Text>
                                                <Text>
                                                    <strong><TimeAgo date={new Date(account.updatedAt)} /></strong>
                                                </Text>
                                            </Group>
                                        </Stack>
                                    </Flex>
                                    <Group position="apart" spacing={0} mt="1rem">
                                        <Group position="center" w="33%" spacing={6}><IconTicket /><Text>{account.ticketsBought}</Text></Group>
                                        <Group position="center" w="33%" spacing={6} style={{ borderLeft: '1px solid grey' }}><IconTrophy /><Text>{account.rafflesWon}</Text></Group>
                                        <Group position="center" w="33%" spacing={6} style={{ borderLeft: '1px solid grey' }}><IconSquarePlus /><Text>{account.rafflesCreated}</Text></Group>
                                    </Group>
                                </Paper>
                            </Anchor>
                        ))
                    }
                </>
            }

        </SimpleGrid>
    )
}

export default MobileLayout