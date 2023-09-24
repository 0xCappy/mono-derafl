import React, { useEffect, useState } from "react";
import { Box, Flex, Title, Stack, Container, ActionIcon, Center, Button } from "@mantine/core";
import { IconArrowBigLeft, IconArrowBigRight, IconCompass, IconTicket } from '@tabler/icons'
import { Raffle } from "@/src/API";
import { NFTCardSkeleton, RaffleCard } from "common/components";
import { Anchor } from "react-bootstrap";
import { Carousel } from '@mantine/carousel';
import { chainsByChainId, ChainId } from "@/types"
import { searchRaffles } from "@/src/graphql/queries";
import { API, graphqlOperation } from "aws-amplify";

const RaffleCarousel = () => {
    const [loading, setLoading] = useState(true)
    const [raffles, setRaffles] = useState<Raffle[]>([])

    useEffect(() => {
        getPurchases()
    }, [])

    const getPurchases = async () => {
        const raffleData = await API.graphql(graphqlOperation(searchRaffles, {
            sort: {
                field: 'updatedAt',
                direction: 'desc'
            },
            filter: {
                and: [
                    { state: { eq: 1 } },
                    { expires: { gt: Date.now() } }
                ]
            },
            limit: 10
        })) as any
        const { items } = raffleData.data.searchRaffles
        setRaffles(items)
        setLoading(false)
    }

    return (
        <Container size="xl" py="4rem">
            <Stack>
                <Flex p="1rem" w="100%" justify="space-between">
                    <Flex>
                        <Stack justify="center" mr="0.5rem">
                            <Box m={0} className="live-blink"></Box>
                        </Stack>
                        <Title>Trending</Title>
                    </Flex>
                </Flex>
                <Box>
                    {loading ? (
                        // Display 4 skeleton cards while loading
                        <Flex justify="space-between" gap={32}>
                            <NFTCardSkeleton />
                            <NFTCardSkeleton />
                            <NFTCardSkeleton />
                            <NFTCardSkeleton />
                        </Flex>
                    ) : (
                        raffles.length > 0 && (
                            <Carousel
                                slideSize="25%"
                                slideGap="md"
                                loop
                                slidesToScroll={1}
                                align="start"
                                controlsOffset={0}
                                controlSize={40}
                                breakpoints={[
                                    { maxWidth: 'sm', slideSize: '100%' },
                                    { maxWidth: 'md', slideSize: '33%' },
                                    { maxWidth: 'lg', slideSize: '25%' },
                                ]}
                            >
                                {raffles.map(raffle => (
                                    <Carousel.Slide>
                                        <Anchor href={`/raffles/${chainsByChainId[raffle.chainId as ChainId].shortName}/${raffle.raffleNonce}`}>
                                            <RaffleCard raffle={raffle} />
                                        </Anchor>
                                    </Carousel.Slide>
                                ))}
                            </Carousel>
                        )
                    )}
                </Box>
            </Stack>
            <Center mt="2rem">
                <Box w="300px">
                    <Anchor href="/raffles">
                        <Button size="md" leftIcon={<IconTicket />} fullWidth>More Raffles</Button>
                    </Anchor>
                </Box>
            </Center>
        </Container>
    );
};

export default RaffleCarousel;