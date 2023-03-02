import { AppShell as ManitineAppShell, Box } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { Footer, Header } from './components';

interface ShellProps {
  children: React.ReactNode
}

const links = [
  { link: '/create', label: 'Create' },
  { link: '/explore', label: 'Explore' },
]

const AppShell = ({ children }: ShellProps) => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <ManitineAppShell
      padding={0}
      header={<Header open={navOpen} links={links} onNavOpenChange={() => setNavOpen(!navOpen)} />}
      footer={<Footer data={[]} />}
      styles={(theme) => ({
        main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
      })}
    >
      <Box mt="5rem">
        {children}
      </Box>
    </ManitineAppShell>
  );
}

export default AppShell