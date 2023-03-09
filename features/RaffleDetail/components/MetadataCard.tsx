import { OpenSeaBadge } from "@/common/components"
import { getAttributeValue } from "@/common/utils"
import { NFT } from "@/src/API"
import { Accordion, Anchor, Box, Card, Center, Divider, Flex, Group, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import { IconCurrencyEthereum } from "@tabler/icons"
import { useMemo } from "react"
import { NFTMetadata } from "types"

interface MetadataCardProps {
    nft: NFT
}

const MetadataCard = ({ nft }: MetadataCardProps) => {
    const metadata = useMemo(() => {
        if (nft.metadata) {
            return JSON.parse(nft.metadata) as NFTMetadata
        }
        return undefined
    }, [nft])

    return (
        <Card withBorder shadow="sm" radius="md" p={0} style={{ overflow: 'initial' }}>
            <Accordion variant="separated" bg="transparent" style={{ border: 'none' }}>
                <Accordion.Item value="content" bg="transparent" style={{ border: 'none' }}>
                    <Accordion.Control style={{ border: 'none' }}><Group><Title order={4}>Metadata</Title></Group></Accordion.Control>
                    <Accordion.Panel style={{ border: 'none' }}>
                        <SimpleGrid cols={2} spacing="xs">
                            {metadata?.attributes.map((attribute, index) => (
                                <Paper withBorder radius={16} p="1rem" shadow="sm">
                                    <SimpleGrid cols={1}>
                                        <Stack spacing={0}>
                                            <Text align="center" size="xs"><strong>{attribute.trait_type.toUpperCase()}</strong></Text>
                                            <Text align="center" size="xs">{getAttributeValue(attribute)}</Text>
                                        </Stack>

                                        {attribute.count &&
                                            <Box>
                                                <Divider mb="1rem" />
                                                <Group position="center">
                                                    <Text size="sm">{attribute.count.toLocaleString()}</Text>
                                                    <Text size="sm"><strong>{(attribute.count / parseInt(nft.collection.totalSupply || '0') * 100).toFixed(2)}%</strong></Text>
                                                </Group>
                                            </Box>
                                        }

                                        {attribute.floor &&
                                            <Center>
                                                <Group mt="0.5rem" spacing={0}><IconCurrencyEthereum size={24} />{attribute.floor}</Group>
                                            </Center>
                                        }
                                    </SimpleGrid>
                                </Paper>
                            ))}

                        </SimpleGrid>

                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Card>
    )
}

export default MetadataCard