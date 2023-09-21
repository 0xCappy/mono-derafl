import { createStyles, Text, Container, Stack, Group, Title, Box, Anchor, SimpleGrid } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons';
import { Logo } from '@/common/components'
import footerLinks from '../data/footerLinks';

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : 'white',
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
      }`,
  },

  logo: {
    maxWidth: 200,

    // [theme.fn.smallerThan('sm')]: {
    //   display: 'flex',
    //   flexDirection: 'column',
    //   alignItems: 'center',
    // },
  },

  description: {
    marginTop: 5,

    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
      textAlign: 'center',
    },
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },

  groups: {
    display: 'flex',
    // flexWrap: 'wrap',
    marginTop: "2rem",

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'space-between',
      textAlign: 'center',

    },
  },

  wrapper: {
    width: 160,
  },

  link: {
    display: 'block',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    '&:hover': {
      textDecoration: 'underline',
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  afterFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
      }`,

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  social: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xs,
    },
  },
}));

export interface FooterLinksProps {
  data: {
    title: string;
    links: { label: string; link: string, newTab?: boolean }[];
  }[];
}

const FooterLinks = ({ data }: FooterLinksProps) => {
  const { classes } = useStyles();

  const groups = footerLinks.data.map((group) => {
    const links = group.links.map((link, index) => (
      <Anchor href={link.link} target={link.newTab ? '_blank' : '_self'}>
        <Text
          key={index}
          className={classes.link}
        >
          {link.label}
        </Text>
      </Anchor>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container size="xl" className={classes.inner}>
      <Stack justify="end">
        <div className={classes.logo}>
          <Group>
            <Logo />
          </Group>
          <Text size="xs" color="dimmed" className={classes.description}>
            Decentralized raffles powered by Ethereum
          </Text>
        </div>
        </Stack>
        <div className={classes.groups}>
          <SimpleGrid cols={2} breakpoints={[
            { minWidth: 'sm', cols: 2 },
            { minWidth: 'md', cols: 4 }
        ]}>
            {groups}
          </SimpleGrid>
        </div>
      </Container>
      <Container size="xl" className={classes.afterFooter}>
        {/* <Text color="dimmed" size="sm">
          Made with ❤️ by <Anchor href="https://twitter.com/0xcappy" target="_blank">0xCappy</Anchor>
        </Text> */}

        {/* <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg">
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group> */}
      </Container>
    </footer>
  );
}

export default FooterLinks