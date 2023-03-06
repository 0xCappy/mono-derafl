import { accountsByUpdatedAt, listAccounts, listTicketBatches, rafflesByCreatedAt, rafflesByUpdatedAt, searchRaffles, ticketBatchesByCreatedAt } from '@/src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'
import { Account, Raffle, TicketBatch } from '@/src/API';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import { Home } from '../features'

export const getServerSideProps = async (context: any) => {
  const accountData = await API.graphql(graphqlOperation(accountsByUpdatedAt, {
    type: 'Account',
    limit: 10,
    sortDirection: 'DESC'
  })) as any
  const accounts = accountData.data.accountsByUpdatedAt.items

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

  const purchasesData = await API.graphql(graphqlOperation(ticketBatchesByCreatedAt, {
    type: 'TicketBatch',
    sortDirection: 'DESC'
  })) as any
  const purchases = purchasesData.data.ticketBatchesByCreatedAt.items

  return {
    props: {
      raffles: items,
      purchases,
      accounts
    }
  }
}

interface HomePageProps {
  raffles: Raffle[]
  purchases: TicketBatch[]
  accounts: Account[]
}

export default function HomePage({ raffles, purchases, accounts }: HomePageProps) {
  return (
    <>
      <Head>
        <title>DeRafl - Decentralized NFT Raffles</title>
        <meta name="description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="DeRafl - Decentralized NFT Raffles" />
        <meta property="og:description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://derafl.com/meta.png"></meta>
        <meta name="twitter:site" content="@derafl_"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index,follow"></meta>
      </Head>
      <Home raffles={raffles} purchases={purchases} accounts={accounts} />
    </>
  )
}
