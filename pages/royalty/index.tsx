import Head from 'next/head';
import React from 'react';

import { RoyaltySetter } from '../../features'
import { Container, Title } from '@mantine/core';

export default function RoyaltyPage() {
    return (
        <>
            <Head>
                <title>Royalties | DeRafl - Decentralized NFT Raffles</title>
                <meta name="description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Royalties | DeRafl - Decentralized NFT Raffles" />
                <meta property="og:description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://derafl.com/meta.png"></meta>
                <meta name="twitter:site" content="@derafl_"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="robots" content="index,follow"></meta>
            </Head>
            <main>
                <Container size="xs" mt="8rem" pb="2rem">
                    <Title mb="2rem">Royalty Setter</Title>
                    <RoyaltySetter />
                </Container>
            </main>
        </>
    )
}