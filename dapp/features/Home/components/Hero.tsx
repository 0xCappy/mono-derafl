import {
    createStyles,
    Image,
    Container,
    Title,
    Button,
    Group,
    Text,
    List,
    ThemeIcon,
    Box,
    SimpleGrid,
    Center,
    Anchor,
    Stack
} from '@mantine/core';
import { IconBook, IconCheck, IconCompass } from '@tabler/icons';
import { useRouter } from 'next/router';
//   import image from './image.svg';

const useStyles = createStyles((theme) => ({
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: theme.spacing.xl * 4,
        paddingBottom: theme.spacing.xl * 4,
        height: '100%'
    },

    content: {
        maxWidth: 480,
        marginRight: theme.spacing.xl * 3,

        [theme.fn.smallerThan('md')]: {
            maxWidth: '100%',
            marginRight: 0,
        },
    },

    title: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontSize: 44,
        lineHeight: 1.2,
        fontWeight: 900,

        [theme.fn.smallerThan('xs')]: {
            fontSize: 28,
        },
    },

    control: {
        [theme.fn.smallerThan('xs')]: {
            flex: 1,
        },
    },

    image: {
        flex: 1,

        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    highlight: {
        position: 'relative',
        backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
        borderRadius: theme.radius.sm,
        padding: '4px 12px',
    },
}));

const Hero = () => {
    const { classes } = useStyles();
    const router = useRouter()

    return (
        <div>
            <Container size="xl" h="85vh">
                <div className={classes.inner}>
                    <SimpleGrid cols={1} spacing={150} breakpoints={[
                        { minWidth: 'sm', cols: 2 },
                    ]}>
                        <Center>
                            <div className={classes.content}>
                                <Title className={classes.title}>
                                    A decentralized NFT raffle protocol powered by Ethereum
                                </Title>
                                <Text color="dimmed" mt="md">
                                    DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol
                                </Text>

                                {/* <List
                                    mt={30}
                                    spacing="sm"
                                    size="sm"
                                    icon={
                                        <ThemeIcon size={20} radius="xl">
                                            <IconCheck size={12} stroke={1.5} />
                                        </ThemeIcon>
                                    }
                                >
                                    <List.Item>
                                        <b>TypeScript based</b> – build type safe applications, all components and hooks
                                        export types
                                    </List.Item>
                                    <List.Item>
                                        <b>Free and open source</b> – all packages have MIT license, you can use Mantine in
                                        any project
                                    </List.Item>
                                    <List.Item>
                                        <b>No annoying focus ring</b> – focus ring will appear only when user navigates with
                                        keyboard
                                    </List.Item>
                                </List> */}

                                <Group mt={30}>
                                    <Anchor href="/raffles" underline={false}>
                                        <Button onClick={() => router.push('/raffles')} leftIcon={<IconCompass />} radius="xl" size="md" className={classes.control}>
                                            Explore
                                        </Button>
                                    </Anchor>
                                    <Anchor href="https://docs.derafl.com" target="_blank">
                                        <Button leftIcon={<IconBook />} variant="default" radius="xl" size="md" className={classes.control}>
                                            Learn more
                                        </Button>
                                    </Anchor>
                                </Group>
                            </div>
                        </Center>
                        <Box maw="100%" display={{ base: 'none', sm: 'inherit' }}>
                            <Stack justify="center">
                                <Box className="oc-banner-img" pos="relative">
                                    <div className="oc-banner-img-1">
                                        <img style={{ borderRadius: '13px', maxWidth: '300px' }} data-depth=".5" src="assets/img/nft/moonbird.png" alt="img not found" />
                                    </div>
                                    <div className="oc-banner-img-2">
                                        <img style={{ borderRadius: '13px', maxWidth: '160px' }} data-depth=".6" src="assets/img/nft/mfer.png" alt="img not found" />
                                    </div>

                                    <div className="oc-banner-img-3">
                                        <img style={{ borderRadius: '13px', maxWidth: '650px' }} data-depth=".3" src="assets/img/nft/noun.png" alt="img not found" />
                                    </div>

                                    <div className="oc-banner-img-4">
                                        <img style={{ borderRadius: '13px', maxWidth: '270px' }} data-depth=".5" src="assets/img/nft/toad.png" alt="img not found" />
                                    </div>
                                </Box>
                            </Stack>
                        </Box>
                    </SimpleGrid>

                </div>
            </Container>
        </div>
    );
}

export default Hero

// .oc-banner-img {
// 	height: 540px;
// 	max-width: 520px;

// 	@media #{$md,$sm} {
// 		max-width: 520px;
// 	}

// 	@media #{$xs} {
// 		max-width: 350px;
// 		margin: 0 auto;
// 		height: 440px;
// 	}

// 	.oc-banner-img-1 {
// 		position: absolute;
// 		border-radius: 13px;
// 		top: 0px;
// 		right: 91px;
// 		z-index: 1;

// 		@media #{$xs} {
// 			img {
// 				height: 150px;
// 			}
// 		}

// 		img {
// 			border-radius: 13px;
// 		}
// 	}

// 	.oc-banner-img-2 {
// 		position: absolute;
// 		border-radius: 13px;
// 		top: 160px;
// 		left: 0px;

// 		@media #{$xs} {
// 			top: 80px;

// 			img {
// 				height: 120px;
// 			}
// 		}

// 		img {
// 			border-radius: 13px;
// 		}
// 	}

// 	.oc-banner-img-3 {
// 		position: absolute;
// 		border-radius: 13px;
// 		top: 80px;
// 		right: -200px;

// 		@media #{$xs} {
// 			right: 0px;

// 			img {
// 				height: 200px;
// 			}
// 		}

// 		img {
// 			border-radius: 13px;
// 		}
// 	}

// 	.oc-banner-img-4 {
// 		position: absolute;
// 		border-radius: 13px;
// 		bottom: 0px;
// 		left: 61px;

// 		@media #{$xs} {
// 			left: 10px;

// 			img {
// 				height: 180px;
// 			}
// 		}

// 		img {
// 			border-radius: 13px;
// 		}
// 	}

// 	.oc-banner-client-wrapper {
// 		position: absolute;
// 		left: -30px;
// 		bottom: 0px;

// 		z-index: 2;

// 		@media #{$xs} {
// 			left: -0px;
// 		}
// 	}

// 	.oc-banner-client {
// 		padding: 30px;
// 		border-radius: 10px;

// 		max-width: 300px;
// 		height: 185px;
// 		background: transparent;
// 		border: 1px solid rgba(162, 175, 200, 0.31);
// 		/* Note: currently only Safari supports backdrop-filter */
// 		backdrop-filter: blur(12px);
// 		--webkit-backdrop-filter: blur(12px);
// 		background-color: rgba(255, 255, 255, 0.05);
// 		/* (plus shape's fill blended on top as a separate layer with 10% opacity) */

// 		img {
// 			position: static;
// 			height: 100%;
// 			width: 100%;
// 		}

// 		a {
// 			height: 40px;
// 			width: 40px;
// 			border: 2px solid var(--clr-common-white);
// 			border-radius: 50%;
// 			object-fit: cover;
// 			display: inline-block;
// 			overflow: hidden;

// 			&:not(:first-child) {
// 				margin-left: -15px;
// 			}
// 		}

// 		.q-meta-viewed-members {
// 			display: inline-flex;
// 		}

// 		.q-meta-views {
// 			font-size: 14px;
// 			color: var(--clr-common-heading);
// 			display: block;
// 		}

// 		.q-meta-type {
// 			font-size: 16px;
// 			color: var(--clr-common-heading);
// 			font-weight: 700;
// 		}

// 		.q-meta-item {
// 			gap: 10px;
// 			margin-bottom: 13px;
// 		}

// 		p {
// 			font-size: 14px;
// 			line-height: 24px;
// 			color: var(--clr-common-heading);
// 		}
// 	}
// }