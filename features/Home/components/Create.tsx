import { createStyles, Text, Title, TextInput, Button, Image, Container, Card, useMantineColorScheme, Anchor } from '@mantine/core';
import BlackLogo from '@/public/icon/Black.svg'
import WhiteLogo from '@/public/icon/White.svg'
import { IconRocket, IconSquarePlus } from '@tabler/icons';

const useStyles = createStyles((theme) => ({
    wrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing.xl * 2,
        borderRadius: theme.radius.md,
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
        border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
            }`,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            flexDirection: 'column-reverse',
            padding: theme.spacing.xl,
        },
    },

    image: {
        maxWidth: '30%',

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            maxWidth: '50%',
        },
    },

    body: {
        paddingRight: theme.spacing.xl * 4,

        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingRight: 0,
            marginTop: theme.spacing.xl,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        lineHeight: 1,
        marginBottom: theme.spacing.md,
    },

    controls: {
        display: 'flex',
        marginTop: theme.spacing.xl,
    },

    inputWrapper: {
        width: '100%',
        flex: '1',
    },

    input: {
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0,
        borderRight: 0,
    },

    control: {
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    },
}));

const Create = () => {
    const { classes } = useStyles();
    const { colorScheme } = useMantineColorScheme();

    return (
        <Container>
            {/* <Card> */}
            <div className={classes.wrapper}>
                <div className={classes.body}>
                    <Title className={classes.title}>Create your own raffle!</Title>
                    <Text weight={500} size="lg" mb={5}>
                        Get more for your assets!
                    </Text>
                    <Text size="sm" color="dimmed">
                        Unlock the potential of your NFTs with DeRafl. Our platform makes it easy for anyone to create their own NFT raffle. Get started now get more for your NFT in just a few minutes.
                    </Text>

                    <div className={classes.controls}>
                        <Anchor href="/create" w="100%" underline={false}>
                            <Button leftIcon={<IconRocket />} fullWidth>Let's Go</Button>
                        </Anchor>
                    </div>
                </div>
                <Image src={colorScheme === 'dark' ? WhiteLogo.src : BlackLogo.src} className={classes.image} />
            </div>
            {/* </Card> */}
        </Container>
    );
}

export default Create