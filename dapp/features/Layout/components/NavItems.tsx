import { Title, Tabs, ChevronIcon, Menu, NavLink, Flex } from "@mantine/core"
import { IconBook, IconBulb, IconChevronDown, IconCompass, IconHomeQuestion, IconInfoCircle, IconQuestionMark, IconTicket } from "@tabler/icons"
import router, { useRouter } from "next/router"
import { NavItem } from "../types/NavItem"

const items: NavItem[] = [
    { value: 'raffles', title: 'Explore', icon: <IconCompass /> },
    { value: 'create', title: 'Create', icon: <IconTicket /> },
    { value: 'docs', title: 'Docs', icon: <IconBook /> },
    // { value: 'faq', title: 'FAQ', icon: <IconBulb />},
]

interface NavItemsProps {
    isMobile: boolean
    onClose?: () => void
}

const NavItems = ({ isMobile, onClose }: NavItemsProps) => {
    const router = useRouter();

    const onNavClick = (value: string) => {
        if (isMobile && onClose) {
            onClose()
        }
        if (value === 'docs') {
            window.open('https://docs.derafl.com', '_blank');
            return
        }
        router.push(`/${value}`)
    }
    return (
        // <Flex gap="md" direction={isMobile ? 'column' : 'row'}>
        //     {items.map((navItem) => (
        //         <NavLink
        //             icon={navItem.icon}
        //             active={router.pathname.split('/')[1].includes(navItem.value)}
        //             style={{ border: '10', borderRadius: '100px' }}
        //             label={<Title order={4}>{navItem.title}</Title>}
        //             pos="relative"
        //         >
        //             {navItem.navItems &&
        //                 <>
        //                     {navItem.navItems.map((innerNavItem) => (
        //                         <NavLink
        //                             icon={innerNavItem.icon}
        //                             active={router.pathname.split('/')[2].includes(innerNavItem.value)}
        //                             style={{ border: '10', borderRadius: '100px' }}
        //                             label={<Title order={4}>{innerNavItem.title}</Title>}
        //                         />
        //                     ))}
        //                 </>
        //             }
        //         </NavLink>
        //     ))}
        // </Flex>
        <Tabs
            radius={100}
            variant="pills"
            value={router.pathname.split('/')[1]}
            onTabChange={onNavClick}
        >
            <Tabs.List>
                {items.map((navItem) => (
                    <Tabs.Tab
                        key={navItem.value}
                        w={isMobile ? '80%' : 'inherit'}
                        style={{ justifyContent: isMobile ? 'left' : 'inherit' }}
                        icon={navItem.icon}
                        value={navItem.value}>
                        <Title color={router.pathname.split('/')[1] === navItem.value ? 'white !important' : 'inherit'} order={4}>{navItem.title}</Title></Tabs.Tab>
                ))}
            </Tabs.List>
        </Tabs>

    )
}

export default NavItems