import Head from 'next/head';
import React from 'react';
import { Account } from '@/src/API';
import { Container } from '@mantine/core';
import AccountDetail from '@/features/Account';
import { listAccounts } from '@/src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';

// This gets called on every request
export const getServerSideProps = async (context: any) => {
  const address = context.query.address
  const accountData = await API.graphql(graphqlOperation(listAccounts, {
    filter: { address: { eq: address } }
  })) as any
  const account = accountData.data.listAccounts[0]
  console.log("ACOUNT: ", account)
  return {
    props: {
      account
    }
  }
}

interface AccountDetailPageProps {
  account: Account
}

export default function AccountDetailPage({ account }: AccountDetailPageProps) {
  return (
    <>
      <Head>
        <title>Accounts | DeRafl - Decentralized NFT Raffles</title>
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
        <Container size="xl">
          <AccountDetail account={account} />
        </Container>
      </main>
    </>
  )
}
