import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import { MantineProvider, ColorScheme, ColorSchemeProvider, Box, Anchor } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { Layout } from '../features';
import { initializeParse } from "@parse/react-ssr";
import { WagmiConfig, createClient, configureChains, goerli, mainnet } from 'wagmi'
import { alchemyProvider } from 'wagmi/providers/alchemy'
// import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet'
// import { InjectedConnector } from 'wagmi/connectors/injected'
// import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import defaultTheme from '@/theme/theme'
import WalletContextProvider from '@/context/WalletContext';
import { ConnectKitProvider, ConnectKitButton, getDefaultClient } from "connectkit";
import './empty.css'
import '@/styles/globals.css'
import { Amplify } from 'aws-amplify'
import awsExports from "../src/aws-exports";

Amplify.configure({
  ...awsExports,
  aws_appsync_authenticationType: "API_KEY",
  aws_appsync_graphqlEndpoint: process.env.NEXT_PUBLIC_API_URL
});

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, mainnet],
  [alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY! })],
)

if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

const client = createClient(
  getDefaultClient({
    appName: "DeRafl",
    alchemyId: process.env.NEXT_PUBLIC_ALCHEMY_API_KEY,
    chains,
    webSocketProvider,
    provider
  }),

  // {
  // autoConnect: true,
  // connectors: [
  //   new MetaMaskConnector({ chains }),
  //   new CoinbaseWalletConnector({
  //     chains,
  //     options: {
  //       appName: 'wagmi',
  //     },
  //   }),
  //   new WalletConnectConnector({
  //     chains,
  //     options: {
  //       qrcode: true,
  //     },
  //   }),
  //   new InjectedConnector({
  //     chains,
  //     options: {
  //       name: 'Injected',
  //       shimDisconnect: true,
  //     },
  //   }),
  // ],
  // provider,
  // webSocketProvider,
  // }
)

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  return (
    <>
      <Head>
        <title>DeRafl - decentralised raffles powered by Ethereum</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
        <script type="text/javascript" async src="//platform.twitter.com/widgets.js"></script>
        <meta property="og:title" content="DeRafl - Decentralized NFT Raffles" />
        <meta property="og:description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://derafl.com/meta.png"></meta>
        <meta name="twitter:site" content="@derafl_"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index,follow"></meta>
      </Head>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={{ ...defaultTheme, colorScheme }} withGlobalStyles withNormalizeCSS>
          <NotificationsProvider>
            <WagmiConfig client={client}>
              <ConnectKitProvider
                options={{
                  overlayBlur: 3,
                  disclaimer: (
                    <>
                      By connecting your wallet you agree to the{" "}
                      <Anchor weight="bold" underline={true} color="primary" target="_blank" href="/terms">Terms of service</Anchor>
                    </>
                  ),        
                }}
                theme={colorScheme === 'dark' ? 'midnight' : 'soft'}
                customTheme={{
                  "--ck-overlay-background": "black",
                }}
              >
                <WalletContextProvider>
                  <Box sx={(theme) => ({
                    strong: {
                      color: theme.colorScheme === 'dark' ? 'white' : 'black'
                    }
                  })}>
                    <Layout>
                      <Box mt="5rem">
                        <Component {...pageProps} />
                      </Box>
                    </Layout>
                  </Box>
                </WalletContextProvider>
              </ConnectKitProvider>
            </WagmiConfig>
          </NotificationsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
  };
};