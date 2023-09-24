import { NFT } from "@/src/API";
import OwnedNft from "@/types/OwnedNft";
import { Skeleton } from "@mantine/core";
import { useEffect, useState } from "react";

interface NFTCardMediaProps {
    nft: NFT | OwnedNft
    hovered: boolean
}

enum MediaType {
    Image,
    Video
}

const NFTCardMedia = ({ nft, hovered }: NFTCardMediaProps) => {
    const [mediaType, setMediaType] = useState<MediaType | null>(null);
    const src = nft.imageUri || '';

    useEffect(() => {
        const image = new Image();
        image.src = src.replace("ipfs://", "https://ipfs.io/ipfs/");
        image.onload = () => setMediaType(MediaType.Image);
        image.onerror = () => setMediaType(MediaType.Video);
    }, [src]);

    if (mediaType === null) {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ paddingTop: '100%', position: 'relative' }}>
                    <Skeleton
                        width="100%"
                        height="100%"
                        style={{ position: 'absolute', top: 0, left: 0 }}
                    />
                </div>
            </div>
        );
    }

    switch (mediaType) {
        case MediaType.Video:
            return (
                <video
                    src={src.replace("ipfs://", "https://ipfs.io/ipfs/")}
                    controls
                    style={{ overflow: 'hidden', aspectRatio: '1', transition: '0.6s', width: '100%', transform: hovered ? 'scale(1.1)' : 'inherit'  }}
                />
            );
        case MediaType.Image:
        default:
            return (
                <img
                    src={src.replace("ipfs://", "https://ipfs.io/ipfs/")}
                    style={{ width: '100%', aspectRatio: '1', transition: '0.6s', transform: hovered ? 'scale(1.1)' : 'inherit'  }}
                    alt="NFT Media"
                />
            );
    }
}

export default NFTCardMedia;
