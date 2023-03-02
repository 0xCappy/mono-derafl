import account from "@/pages/api/account"
import { Center, Flex, Anchor, Avatar } from "@mantine/core"
import { IconExternalLink, IconEye, IconUser } from "@tabler/icons"
import { shortenAddress } from "@usedapp/core"
import makeBlockie from "ethereum-blockies-base64"

interface AccountAnchorProps {
    address: string
    withBlockie?: boolean
}

const AccountAnchor = ({address, withBlockie = false}: AccountAnchorProps) => {
    return (
        <Flex gap="sm">
            {withBlockie && <Avatar size="sm" radius={100} src={makeBlockie(address)}></Avatar>}
            <Anchor color="black" href={`/accounts/${address}`}>
                <Center>
                    <strong>{shortenAddress(address)}</strong>
                    <IconEye style={{ marginLeft: '6px' }} stroke="2.5px" size={20} />
                </Center>
            </Anchor>
        </Flex>
    )
}

export default AccountAnchor