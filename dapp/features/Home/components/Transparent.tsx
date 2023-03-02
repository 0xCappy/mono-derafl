import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
} from '@mantine/core';
import { IconGauge, IconUser, IconCookie } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
            }`,
    },
    container: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : 'white'
    },
    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
        },
    },
}));

const Transparent = () => {
    const { classes } = useStyles();
    return (
        <Container size="sm" pt={100} mt={100}>
            <Title order={1} align="center" mt="sm">
                Open & Transparent
            </Title>

            <Text color="dimmed" className={classes.description} align="center" mt="md">
            At DeRafl, we strive to bring unparalleled transparency to our users. Our decentralized protocol, powered by smart contracts, enables effortless traceability and visibility of every transaction through our user-friendly dApp.
            </Text>
        </Container>
    );
}

export default Transparent