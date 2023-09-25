import { Raffle } from "@/src/API";
import { Skeleton } from "@mantine/core";
import { useEffect, useState, useRef } from "react"; // <-- Add useRef here

interface NFTMediaProps {
    raffle: Raffle;
}

enum MediaType {
    Image,
    Video,
    Base64
}

const NFTMedia = ({ raffle }: NFTMediaProps) => {
    const [mediaType, setMediaType] = useState<MediaType | null>(null);
    const src = raffle.nft.animationUrl || raffle.nft.imageUri || '';
    const videoRef = useRef<HTMLVideoElement | null>(null); // <-- Define the ref here

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.load(); // <-- Call load on the video element
        }
    }, [mediaType]); // <-- Rerun effect whenever mediaType changes

    useEffect(() => {
        if (src.startsWith("data:")) {
            setMediaType(MediaType.Base64);
            return;
        }

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

        )

    }

    switch (mediaType) {
        case MediaType.Base64:
            return (
                <iframe
                    src={src}
                    style={{ width: '100%', height: 'auto', aspectRatio: '1/1', border: 'none' }}
                    frameBorder="0"
                    allowFullScreen
                />
            );
            case MediaType.Video:
                return (
                    <video
                        ref={videoRef} // <-- Attach the ref here
                        controls
                        style={{ overflow: 'hidden', aspectRatio: '1', transition: '0.6s', width: '100%', objectFit: 'contain' }}
                        playsInline
                        autoPlay
                        muted
                        loop
                    >
                        <source src={src.replace("ipfs://", "https://ipfs.io/ipfs/")} type="video/mp4"/>
                    </video>
                );
            case MediaType.Image:
            default:
                return (
                <img
                    src={src.replace("ipfs://", "https://ipfs.io/ipfs/")}
                    style={{ width: '100%', aspectRatio: '1', objectFit: 'cover' }}
                    alt="NFT Media"
                />
            );
    }
}

export default NFTMedia;
