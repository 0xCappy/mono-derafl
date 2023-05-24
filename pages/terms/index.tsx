import Head from 'next/head';
import React from 'react';

import { Accounts, FAQ } from '../../features'
import { Container, Stack, Title } from '@mantine/core';

export default function Terms() {
    return (
        <>
            <Head>
                <title>Terms of service | DeRafl - Decentralized NFT Raffles</title>
                <meta name="description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Accounts | DeRafl - Decentralized NFT Raffles" />
                <meta property="og:description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://derafl.com/meta.png"></meta>
                <meta name="twitter:site" content="@derafl_"></meta>
                <meta name="twitter:card" content="summary_large_image"></meta>
                <meta name="robots" content="index,follow"></meta>
            </Head>

            <main>
                <Container size="xl" py="4rem">
                    <Stack justify="space-between">
                        <Title>Terms of service</Title>
                        <strong>1. Introduction</strong>
                        <p>Welcome to DeRafl, a decentralized platform that allows NFT holders to monetize and win rare digital assets through on-chain raffles. By using our platform and services, you agree to be bound by these Terms of Service ("Terms") and our Privacy Policy.</p>
                        <strong>2. Eligibility</strong>
                        <p>By using DeRafl, you represent and warrant that you are at least 18 years old and have the legal capacity to enter into these Terms. You also agree to comply with all applicable laws, rules, and regulations in your jurisdiction.</p>
                        <strong>5. Raffles and Participation</strong>
                        <p>DeRafl does not create or manage raffles; they are created by members of the community. Users are responsible for understanding the rules and conditions of each raffle before participating. DeRafl is not responsible for the outcome of any raffle or any disputes that may arise between participants and raffle creators.</p>
                        <strong>6. Intellectual Property</strong>
                        <p>All content, including but not limited to images, logos, text, and software, is the property of DeRafl or its licensors and protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our express written permission.</p>
                        <strong>7. Royalties and Fees</strong>
                        <p>DeRafl pays up to 5% creator royalties to creators of NFTs raffled on the platform. Additionally, users may be subject to fees for participating in raffles, as determined by DeRafl or raffle creators.</p>
                        <strong>8. Disclaimer of Warranties and Limitation of Liability</strong>
                        <p>DeRafl is provided on an "as is" and "as available" basis, without any warranties of any kind, either express or implied. We do not warrant that our platform will be uninterrupted, secure, or error-free, or that any results obtained through the use of our services will be accurate or reliable.
                        In no event shall DeRafl, its affiliates, or their respective directors, officers, employees, or agents be liable for any indirect, consequential, or incidental damages arising out of or in connection with your use of or inability to use our platform or services, even if we have been advised of the possibility of such damages.</p>
                        <strong>9. Indemnification</strong>
                        <p>You agree to indemnify, defend, and hold harmless DeRafl, its affiliates, and their respective directors, officers, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your use of our platform or services.</p>
                        <strong>10. Governing Law and Dispute Resolution</strong>
                        <p>These Terms shall be governed by and construed in accordance with the laws applicable to the jurisdiction of DeRafl's choice. Any disputes arising out of or in connection with these Terms or your use of our platform or services shall be resolved through good faith negotiations, and if such negotiations fail, by binding arbitration in a location determined by DeRafl.</p>
                        <strong>11. Changes to the Terms</strong>
                        <p>We reserve the right to modify these Terms at any time. You are responsible for reviewing and becoming familiar with any modifications. Your continued use of our platform constitutes your acceptance of the updated Terms.</p>
                        <strong>12. Contact</strong>
                        <p>If you have any questions or concerns about these Terms or our platform, please contact us at support@derafl.com.
                        By using DeRafl, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.</p>
                    </Stack>
                </Container>
            </main>
        </>
    )
}
