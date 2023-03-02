import { Text, Header, Group, Burger, Title, MediaQuery, Flex, ActionIcon, Tabs, Box, Container, Stack, Transition, MantineTransition, Anchor } from '@mantine/core';
import { IconCompass, IconTicket, IconWallet } from '@tabler/icons';
import { useEffect, useState } from 'react';
import { MobileNav, WalletDrawer } from '.';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { ColorSchemeToggle } from '@/common/components';
import { Logo } from '@/common/components'
import { useWallet } from '@/context/WalletContext';
import NavItems from './NavItems';

interface AppHeaderProps {
    onNavOpenChange: () => void
    open: boolean
    links: { link: string; label: string }[];
}

const walletTransition: MantineTransition = {
    in: { transform: 'slide-left'},
    out: { transform: 'slide-right' },
    transitionProperty: 'transform',
  };
  
const AppHeader = ({ onNavOpenChange, links, open }: AppHeaderProps) => {
    const [navOpen, setNavOpen] = useState(false)
    const { walletOpen, toggleWalletOpen, address } = useWallet()
    const router = useRouter();

    return (
        <Header height="5rem" mb={120}>
            <Container size="xl" h="100%">
                <Stack w="100%" justify="center" h="100%">
                    <Flex justify="space-between">
                        <Group>
                            <Group>
                                <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                                    <Burger opened={open} onClick={() => setNavOpen(!navOpen)} size="sm" />
                                </MediaQuery>
                            </Group>
                            <Anchor href="/"><Box style={{ cursor: 'pointer' }} w="120px"><Logo /></Box></Anchor>
                            <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
                                <Group>
                                    <NavItems isMobile={false} />
                                </Group>
                            </MediaQuery>
                        </Group>

                        <Group>
                            <ColorSchemeToggle />
                            <ActionIcon size="lg" onClick={toggleWalletOpen}><IconWallet size="32px" /></ActionIcon>
                        </Group>
                    </Flex>
                </Stack>

                <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />

                <WalletDrawer address={address} open={walletOpen} onClose={toggleWalletOpen} />

            </Container>
        </Header>
    );
}

export default AppHeader