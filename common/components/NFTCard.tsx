import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { NFT } from 'types';
import { Box, Title, Flex, Card, Stack, Badge, Image, AspectRatio } from '@mantine/core';
import { IconHash } from '@tabler/icons';
import ImagePlaceholder from './ImagePlaceholder';
import { useHover } from '@mantine/hooks';
import OwnedNft from '@/types/OwnedNft';
import { formatIpfsUrl } from '../utils';

interface NFTCardProps {
    nft: OwnedNft
}

const NFTCard = ({ nft }: NFTCardProps) => {
    const { hovered, ref } = useHover();
    const [isVideo, setIsVideo] = useState(false);

    const handleImageError = (error: any) => {
        console.log("Image ror: ", error)
        setIsVideo(true);
    };

    return (
        <Card w="100%" className='img-zoom' shadow="sm" h="100%" ref={ref}>
            <Stack w="100%">
                <Box w="100%" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <AspectRatio w="100%" ratio={1}>
                        {!isVideo ? (
                            <Image
                                src={nft.imageUri ? formatIpfsUrl(nft?.imageUri) : undefined}
                                withPlaceholder
                                placeholder={<ImagePlaceholder iconSize={50} />}
                                fit="cover"
                                w="100%"
                                h="100%"
                                style={{ transition: '0.6s', transform: hovered ? 'scale(1.1)' : 'inherit' }}
                                onError={handleImageError}
                            />

                        ) : (
                            <video
                                src={nft.imageUri?.replace("ipfs://", "https://ipfs.io/ipfs/")}
                                controls
                                style={{ overflow: 'hidden', aspectRatio: '1', transition: '0.6s', width: '100%', transform: hovered ? 'scale(1.1)' : 'inherit' }}
                            />
                        )}

                    </AspectRatio>
                </Box>
                <Badge left="#" py="10px" bg="white" size="lg" style={{ border: '2px solid #25262b', color: '#25262b', fontWeight: 'bold', fontSize: '12px', position: 'absolute', left: '24px', top: '24px' }}>{'#' + nft.tokenId}</Badge>
                <Box>
                    <Title style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} order={5}>{nft.contractName}</Title>
                    <Title style={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }} order={6}>{nft.tokenName}</Title>
                </Box>
            </Stack>
        </Card>
    );
};

export default NFTCard;