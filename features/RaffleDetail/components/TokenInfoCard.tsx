import { OpenSeaBadge } from "@/common/components"
import { buildAddressUrl } from "@/common/utils"
import { NFT } from "@/src/API"
import { Accordion, Card, Center, Divider, Flex, Group, SimpleGrid, Stack, Text, Title, Anchor } from "@mantine/core"
import { IconBoxMultiple, IconExternalLink, IconExternalLinkOff, IconHomeLink, IconLinkOff, IconTicket } from "@tabler/icons"
import { shortenAddress } from "@usedapp/core"
import { NFTMetadata } from "types"
import MarketPlaceLinks from "./MarketPlaceLinks"
import ReactMarkdown from 'react-markdown'

interface TokenInfoCardProps {
    nft: NFT
}

const TokenInfoCard = ({ nft }: TokenInfoCardProps) => {
    return (
        <Card withBorder shadow="sm" radius="md" p={0} style={{ overflow: 'initial' }}>
            <Accordion variant="separated" bg="transparent" style={{ border: 'none' }}>
                <Accordion.Item value="content" bg="transparent" style={{ border: 'none' }}>
                    <Accordion.Control style={{ border: 'none' }}><Group><Title order={4}>Token Info</Title></Group></Accordion.Control>
                    <Accordion.Panel style={{ border: 'none' }}>
                        <Stack spacing="xs">
                            {/* <Flex gap="xs" justify="start"><OpenSeaBadge /><Text>Sourced from <strong><Anchor href="https://opensea.io/" target="_blank">OpenSea</Anchor></strong></Text></Flex>
                            <Divider /> */}
                            <Flex justify="space-between"><Text>Collection</Text> <Text><strong>{nft.collection.name}</strong></Text></Flex>
                            <Flex justify="space-between"><Text>Token ID</Text> <Text><strong>{nft.tokenId}</strong></Text></Flex>
                            <Flex justify="space-between"><Text>Symbol</Text> <Text><strong>({nft.collection.symbol})</strong></Text></Flex>
                            <Flex justify="space-between"><Text>Total Supply</Text> <Text><strong>{!nft.collection.totalSupply ? 'unknown' : nft.collection.totalSupply.toLocaleString()}</strong></Text></Flex>
                            <Flex justify="space-between"><Text>Contract</Text>
                                <Anchor target="_blank" href={buildAddressUrl(nft.collection.chainId, nft.collection.contractAddress)}>
                                    <Group spacing={4}>
                                        <IconExternalLink size={20} /><strong><Text>{shortenAddress(nft.collection.contractAddress)}</Text></strong>
                                    </Group>
                                </Anchor>
                            </Flex>
                            <Flex justify="space-between"><Text>Marketplaces</Text> <MarketPlaceLinks contractAddress={nft.contractAddress} tokenId={nft.tokenId} /></Flex>
                            {nft.collection.externalUrl && <Flex justify="space-between"><Text>Website</Text> <Flex><Text><strong>{nft.collection.externalUrl}</strong></Text><Center><IconExternalLink size={20} /></Center></Flex></Flex>}
                            {nft.collection.twitterUsername && <Flex justify="space-between"><Text>Twitter</Text> <Flex><Text><strong>{nft.collection.twitterUsername}</strong></Text><Center><IconExternalLink size={20} /></Center></Flex></Flex>}
                            {nft.collection.discordUrl && <Flex justify="space-between"><Text>Discord</Text> <Flex><Text><strong>{nft.collection.discordUrl}</strong></Text><Center><IconExternalLink size={20} /></Center></Flex></Flex>}
                            {/* <Flex justify="space-between"><Text>Created</Text> <Text><strong>{new Date(nft.collection.createdAt).toLocaleDateString()}</strong></Text></Flex> */}
                            <Divider />
                            <Text>
                                <ReactMarkdown>
                                    {nft.collection.description || ''}
                                </ReactMarkdown>
                            </Text>
                        </Stack>
                        {/* {metadata.attributes.map((attribute, index) => (
                            <SimpleGrid key={index} cols={2} mt="6px">
                                <Title order={5}>{attribute.trait_type}</Title>
                                <Text>{attribute.value}</Text>
                            </SimpleGrid>
                        ))} */}
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Card>
    )
}

export default TokenInfoCard