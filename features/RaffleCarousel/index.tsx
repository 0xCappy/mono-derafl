import React, { useEffect, useState } from "react";
import { Box, Flex, Title, Stack, Container, ActionIcon, Center, Button } from "@mantine/core";
import { IconArrowBigLeft, IconArrowBigRight, IconCompass, IconTicket } from '@tabler/icons'
import { Raffle } from "@/src/API";
import { NFTCardSkeleton, RaffleCard } from "common/components";
import { Anchor } from "react-bootstrap";
import { Carousel } from '@mantine/carousel';

interface RaffleCarouselProps {
    raffles: Raffle[]
}

const RaffleCarousel = ({ raffles }: RaffleCarouselProps) => {
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
                    {raffles.length > 0 &&
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
                                    <Anchor href={`/raffles/${raffle.raffleNonce}`}>
                                        <RaffleCard raffle={raffle} />
                                    </Anchor>
                                </Carousel.Slide>
                            ))}
                        </Carousel>
                    }
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