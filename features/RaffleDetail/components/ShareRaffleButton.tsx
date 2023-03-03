import { Raffle } from "@/src/API"
import { ActionIcon, Menu, Anchor } from "@mantine/core"
import { IconArrowsLeftRight, IconBrandTwitter, IconCopy, IconMessageCircle, IconPhoto, IconSearch, IconSettings, IconShare, IconTrash } from "@tabler/icons"
import { useMemo } from "react"

interface ShareRaffleButtonProps {
    raffle: Raffle
}

const ShareRaffleButton = ({ raffle }: ShareRaffleButtonProps) => {
    const onCopyClick = () => {
        navigator.clipboard.writeText(window.location.href);
    }

    const tweetUrl = useMemo(() => {
        if (typeof window !== "undefined") {
            const text = `Check out this raffle on derafl.com ${raffle.nft.collection.name} \n @derafl_`
            const hashtags = 'DeRafl,NFT,raffle'
            const url = `https://twitter.com/share?text=${text}&url=${window.location.href}&hashtags=${hashtags}`
            return url
        } else {
            return ''
        }

    }, [raffle])

    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <ActionIcon radius="xl" variant="filled" size="xl"><IconShare /></ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label>Share</Menu.Label>
                <Menu.Item icon={<IconBrandTwitter size={14} />}>
                    <Anchor underline={false} href={tweetUrl} target="_blank">
                        Tweet
                    </Anchor>
                </Menu.Item>
                <Menu.Item onClick={onCopyClick} icon={<IconCopy size={14} />}>Copy Link</Menu.Item>
            </Menu.Dropdown>
        </Menu>
    )
}

export default ShareRaffleButton