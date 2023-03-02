import { Box, Drawer } from "@mantine/core"
import NavItems from "./NavItems"
import { Logo } from '@/common/components'

interface MobileNavProps {
    open: boolean
    onClose: () => void
}

const MobileNav = ({ open, onClose }: MobileNavProps) => {
    return (
        <Drawer
            opened={open}
            onClose={onClose}
            padding="xl"
        >
            <Box maw="60%" mb="2rem">
                <Logo />
            </Box>
            <NavItems isMobile={true} onClose={onClose} />
        </Drawer>
    )
}

export default MobileNav