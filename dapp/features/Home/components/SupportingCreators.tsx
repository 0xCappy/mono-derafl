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

const SupportingCreators = () => {
    const { classes } = useStyles();
    return (
        <Container size="sm" py={100} my={100}>
            <Title order={1} align="center" mt="sm">
                We Support Creators!
            </Title>

            <Text color="dimmed" className={classes.description} align="center" mt="md">
            {/* At Derafl, we are committed to supporting creators and honoring the royalties that are set by collection owners. That's why we have implemented a system that ensures creators are fairly compensated for their work. When you participate in a raffle featuring a collection that has set royalties, a portion of the ticket sales will go directly to the creator. This helps to ensure that artists and creators are fairly compensated for their contributions and can continue to create amazing NFTs for our community to enjoy. With Derafl, you can support the creators you love while also having the chance to win unique and valuable NFTs. */}
            At DeRafl, we support creators by honoring set royalties for collections, ensuring fair compensation for their work. Join a raffle featuring a collection with royalties and a portion of your ticket purchase will go directly to the creator. Support the artists you love and win rare NFTs on DeRafl
            </Text>
        </Container>
    );
}

export default SupportingCreators