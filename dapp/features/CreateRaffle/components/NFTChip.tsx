import { ImagePlaceholder } from "@/common/components"
import { buildAddressUrl, formatIpfsUrl } from "@/common/utils"
import OwnedNft from "@/types/OwnedNft"
import { Card, Flex, Image, Stack, Text, Title, CloseButton } from "@mantine/core"
import { IconExternalLink } from "@tabler/icons"
import { NFT } from "types"

interface NFTChipProps {
    nft: OwnedNft
    chainId: string
    onRemove: () => void
}
const NFTChip = ({ nft, onRemove, chainId }: NFTChipProps) => {
    return (
        <Card shadow="sm" withBorder>
            <Flex justify="space-between">
                <Flex>
                    <Image
                        radius="sm"
                        style={{ height: '60px', width: '60px' }}
                        src={nft.imageUri ? formatIpfsUrl(nft?.imageUri) : undefined}
                        withPlaceholder
                        fit="cover"
                        placeholder={<ImagePlaceholder iconSize={30} />}
                    />
                    <Stack justify="space-evenly" spacing={0} ml="1rem">
                        <Title order={5}>{`${nft.name} #${nft.tokenId}`}</Title>
                        <Text><a rel="noreferrer" target="_blank" href={buildAddressUrl(chainId, nft.contractAddress)}><IconExternalLink />View on etherscan</a></Text>
                    </Stack>
                </Flex>
                <CloseButton size="lg" variant="light" ml="1rem" onClick={onRemove} />
            </Flex>
        </Card>
    )
}

export default NFTChip