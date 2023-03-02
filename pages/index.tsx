import { listRaffles } from '@/src/graphql/queries';
import { API, graphqlOperation } from 'aws-amplify'
import { Account, Raffle, TicketBatch } from '@/types';
import axios from 'axios';
import Head from 'next/head';
import React from 'react';
import { Home } from '../features'

// This gets called on every request
export const getServerSideProps = async (context: any) => {
  const h = listRaffles
  const raffles_ = await API.graphql(graphqlOperation(listRaffles)) as any
  const todos = raffles_.data.listRaffles.items
  console.log("RAFFLES: ", todos)
  const response = await axios.post(`${process.env.API_URL}/initHomepage`)
  const raffles = await response.data.raffles as Raffle
  const purchases = await response.data.purchases.ticketBatches as TicketBatch[]
  const accounts = await response.data.accounts.accounts as Account[]

  return {
    props: {
      raffles,
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
