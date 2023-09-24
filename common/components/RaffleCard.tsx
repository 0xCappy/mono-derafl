import dynamic from 'next/dynamic';
import React, { useEffect, useState } from 'react';
import { RaffleState } from 'types';
import { Raffle } from '@/src/API';
import { Line } from 'rc-progress';
import { countdownRenderer } from '../utils';
import Countdown from 'react-countdown';
import { Avatar, Badge, Box, Card, Flex, Group, Image, Stack, Text, Title } from '@mantine/core';
import { IconActivityHeartbeat, IconCircleDotted, IconClock, IconHash, IconHourglass, IconStar, IconTicket, IconTicketOff, IconTrophy, IconUserPlus } from '@tabler/icons';
import ImagePlaceholder from './ImagePlaceholder';
import { shortenAddress } from '@usedapp/core';
import { useHover } from '@mantine/hooks';

interface RaffleCardProps {
    raffle: Raffle
}

const RaffleCard = ({ raffle }: RaffleCardProps) => {
    const [ready, setReady] = useState(false)
    const { hovered, ref } = useHover();

    useEffect(() => {
        setReady(true)
    })

    const [isVideo, setIsVideo] = useState(false);

    const handleImageError = (error: any) => {
        console.log("Image ror: ", error)
        setIsVideo(true);
    };

    const StateChip = () => {
        if (raffle.state === RaffleState.ACTIVE && new Date(raffle.expires) > new Date()) {
            return (
                <Avatar variant='filled' color="green" radius="xl" w="100%">
                    <Group spacing="sm"><IconActivityHeartbeat size={24} />Active</Group>
                </Avatar>
            )
        } else if (raffle.state === RaffleState.REFUNDED) {
            return (
                <Avatar variant='filled' color="orange" radius="xl" w="100%">
                    <Group spacing="sm"><IconTicketOff size={24} />Refunded</Group>
                </Avatar>
            )
        } else if (raffle.winningAccount) {
            return (
                <Avatar variant='filled' color="blue" radius="xl" w="100%">
                    <Group spacing="sm"><IconTrophy size={24} />{shortenAddress(raffle.winningAccount)}</Group>
                </Avatar>)
        } else {
            return (
                <Avatar variant='filled' color="blue" radius="xl" w="100%">
                    <Group spacing="sm"><IconClock size={24} />Pending Draw</Group>
                </Avatar>)
        }
    }

    return (
        <Card w="100%" className='img-zoom' ref={ref}>
            <Stack>
                <Box style={{ borderRadius: '16px', overflow: 'hidden' }}>
                    {!isVideo ? (
                        <Image
                            style={{ overflow: 'hidden', aspectRatio: '1', transition: '0.6s', transform: hovered ? 'scale(1.1)' : 'inherit' }}
                            src={raffle.nft.imageUri?.replace("ipfs://", "https://ipfs.io/ipfs/")}
                            withPlaceholder
                            placeholder={<ImagePlaceholder iconSize={100} />}
                            w="100%"
                            onError={handleImageError}
                        />
                    ) : (
                        <video
                            src={raffle.nft.imageUri?.replace("ipfs://", "https://ipfs.io/ipfs/")}
                            controls
                            style={{ overflow: 'hidden', aspectRatio: '1', transition: '0.6s', width: '100%', transform: hovered ? 'scale(1.1)' : 'inherit'  }}
                        />
                    )}
                </Box>

                <StateChip />

                <Badge left="#" py="14px" bg="white" size="lg" style={{ border: '2px solid #25262b', color: '#25262b', fontWeight: 'bold', fontSize: '16px', position: 'absolute', left: '24px', top: '24px' }}>{'#' + raffle.nft.tokenId}</Badge>
                <Title order={3}>{raffle.nft.collectionName}</Title>
                <Flex justify="space-between">
                    <Stack spacing={8}>
                        <Flex>
                            <IconCircleDotted />
                            <Text ml="4px">
                                {`${raffle.progress.toFixed(1)}% Sold`}
                            </Text>
                        </Flex>
                        <Line percent={raffle.progress} trailWidth={15} strokeWidth={15} strokeColor="#2b81ff" />
                    </Stack>
                    <Stack spacing={5}>
                        <Flex>
                            <IconHourglass />
                            {raffle.progress >= 100 ?
                                <span>{(new Date(raffle.expires)).toLocaleDateString()}</span>
                                :
                                <>
                                    {ready &&
                                        <Countdown renderer={countdownRenderer} date={raffle.expires} />
                                    }
                                </>
                            }
                        </Flex>
                        <Flex>
                            <IconTicket />
                            <Text ml="4px">{raffle.ticketsAvailable.toLocaleString()}</Text>
                        </Flex>
                    </Stack>
                </Flex>
            </Stack>
        </Card>
    );
};

export default RaffleCard;