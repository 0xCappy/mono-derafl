import LooksLogo from '@/public/logo/looks.png'
import { HoverCard, Anchor, Text, Image } from '@mantine/core'

const LooksRareBadge = () => {
    return (
        <HoverCard width={280} shadow="md" position="top-start">
            <HoverCard.Target>
                <Image style={{ width: '25px' }} src={LooksLogo.src} />
            </HoverCard.Target>
            <HoverCard.Dropdown>
                <Text size="sm">
                    On-chain royalties sourced from <Anchor href="https://looksrare.org/" target="_blank"><strong>LooksRare</strong></Anchor><br />
                    Find out how to set royalties <Anchor href="https://docs.derafl.com/how-does-it-work/nft-royalties/" target="_blank"><strong>here</strong></Anchor>
                </Text>
            </HoverCard.Dropdown>
        </HoverCard>
    )
}

export default LooksRareBadge