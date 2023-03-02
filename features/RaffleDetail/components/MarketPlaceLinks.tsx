import blur from '@/public/marketplace/blur.jpeg'
import looks from '@/public/marketplace/looks.png'
import opensea from '@/public/marketplace/opensea.png'
import x2y2 from '@/public/marketplace/x2y2.png'
import { ActionIcon, Anchor, Group, Image } from '@mantine/core'

interface MarketPlaceLinksProps {
    contractAddress: string
    tokenId: string
}

const MarketPlaceLinks = ({ contractAddress, tokenId }: MarketPlaceLinksProps) => {
    const links = () => [
        {
            image: blur.src,
            link: `https://blur.io/asset/${contractAddress}/${tokenId}`,
            name: 'Blur'
        },
        {
            image: x2y2.src,
            link: `https://x2y2.io/eth/${contractAddress}/${tokenId}`,
            name: 'X2Y2'
        },
        {
            image: opensea.src,
            link: `https://blur.io/collection/${contractAddress}/${tokenId}`,
            name: 'Blur'
        },
        {
            image: looks.src,
            link: `https://looksrare.org/collections/${contractAddress}/${tokenId}`,
            name: 'LooksRare'
        }
    ]

    return (
        <>
            <Group>
                {links().map(link =>
                    <ActionIcon variant="transparent" radius="xl" size="md">
                        <Anchor href={link.link} target="_blank">
                            <Image radius="xl" src={link.image} />
                        </Anchor>
                    </ActionIcon>
                )}
            </Group>
        </>
    )
}

export default MarketPlaceLinks