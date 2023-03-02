import Head from 'next/head';
import React from 'react';

import { RaffleDetail } from '../../features'
import { EncodedParseQuery, encodeParseQuery } from '@parse/react-ssr';
import { Raffle, TicketBatch } from 'types';
import { Box } from '@mantine/core';
import axios from 'axios';

// This gets called on every request
export const getServerSideProps = async (context: any) => {
  const raffleId = context.query.raffleId

  const response = await axios.post(`${process.env.API_URL}/raffles/detail`, {raffleId: parseInt(raffleId)})
  const raffle = await response.data.raffle as Raffle
  const ticketBatches = await response.data.ticketBatches as TicketBatch[]
  const trending = await response.data.trending as Raffle[]

  return {
    props: {
      raffle,
      ticketBatches,
      trending
    }
  }
}

interface RaffleDetailPageProps {
  raffle: Raffle,
  ticketBatches: TicketBatch[],
  trending: Raffle[]
}

export default function RaffleDetailPage({ raffle, ticketBatches, trending }: RaffleDetailPageProps) {
  return (
    <>
      <Head>
        <title>{raffle.nft.tokenName} | DeRafl</title>
        <meta name="description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${raffle.nft.tokenName} | DeRafl`}/>
        <meta property="og:description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol"/>
        <meta property="og:type" content="website"/>
        <meta property="og:image" content={raffle.nft.imageUri}></meta>
        <meta name="twitter:site" content="@derafl_"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index,follow"></meta>
      </Head>

      <main>
        <Box mt="8rem">
          <RaffleDetail ticketBatches={ticketBatches} raffle={raffle} trending={trending} />
        </Box>
      </main>
    </>
  )
}
