import { OpenSeaBadge } from "@/common/components"
import Collection from "@/types/Collection"
import { Accordion, Card, Group, SimpleGrid, Text, Title } from "@mantine/core"
import { NFTMetadata } from "types"

interface CollectionInfoCardProps {
    collection: Collection
}

const CollectionInfoCard = ({ collection }: CollectionInfoCardProps) => {
    return (
        <Card withBorder shadow="sm" radius="md" p={0} style={{ overflow: 'initial' }}>
            <Accordion variant="separated" bg="transparent" style={{ border: 'none' }}>
                <Accordion.Item value="content" bg="transparent" style={{ border: 'none' }}>
                    <Accordion.Control style={{ border: 'none' }}><Group><Title order={4}>Collection Info</Title><OpenSeaBadge /></Group></Accordion.Control>
                    <Accordion.Panel style={{ border: 'none' }}>
                        
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

export default CollectionInfoCard