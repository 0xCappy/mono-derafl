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

const Intro = () => {
    const { classes } = useStyles();
    return (
        <Container size="sm" py={100} className={classes.container} my={100}>
            <Title order={1} align="center" mt="sm">
                Introducing DeRafl
            </Title>

            <Text color="dimmed" className={classes.description} align="center" mt="md">
                Derafl is revolutionizing the age-old concept of raffles by bringing them onto the blockchain. Our decentralized NFT raffle protocol provides a fair and transparent way for users to participate in, or create their own raffles without having to rely on any centralised entities.
            </Text>
        </Container>
    );
}

export default Intro