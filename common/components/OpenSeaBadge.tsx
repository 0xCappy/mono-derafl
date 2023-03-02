import OpenseaWhite from '@/public/logo/opensea-white.png'
import OpenseaBlue from '@/public/logo/opensea-blue.png'
import { HoverCard, Anchor, Text, Image, useMantineColorScheme } from '@mantine/core'

const OpenSeaBadge = () => {
    const { colorScheme } = useMantineColorScheme();
    return (
        <HoverCard shadow="md" position="top-start">
            <HoverCard.Target>
                <Image style={{ width: '25px' }} src={colorScheme === 'dark' ? OpenseaWhite.src : OpenseaBlue.src} />
            </HoverCard.Target>
            <HoverCard.Dropdown>
                <Text size="sm">
                    Sourced from <Anchor href="https://opensea.io/" target="_blank"><strong>OpenSea</strong></Anchor>
                </Text>
            </HoverCard.Dropdown>
        </HoverCard>
    )
}

export default OpenSeaBadge