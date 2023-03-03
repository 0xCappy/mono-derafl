import Head from 'next/head';
import React from 'react';

import { RaffleDetail } from '../../features'
import { EncodedParseQuery, encodeParseQuery } from '@parse/react-ssr';
import { Raffle, TicketBatch } from 'types';
import { Box } from '@mantine/core';
import axios from 'axios';
import { API, graphqlOperation } from 'aws-amplify';
import { getRaffle, listRaffles, listTicketBatches } from '@/src/graphql/queries';

// This gets called on every request
export const getServerSideProps = async (context: any) => {
  const raffleId = context.query.raffleId
  const listRaffleData = await API.graphql(graphqlOperation(listRaffles, {
    filter: { raffleId: { eq: raffleId } }
  })) as any
  const raffleBasic = listRaffleData.data.listRaffles.items[0]
  const raffleData = await API.graphql(graphqlOperation(getRaffle, { id: raffleBasic.id })) as any
  const raffle = raffleData.data.getRaffle

  return {
    props: {
      raffle: {
        ...raffle,
        nft: {
          ...raffle.nft,
          metadata: raffle.nft.metadata ? JSON.parse(raffle.nft.metadata) : undefined
        }
      },
      trending: []
    }
  }
}

interface RaffleDetailPageProps {
  raffle: Raffle,
  trending: Raffle[]
}

export default function RaffleDetailPage({ raffle, trending }: RaffleDetailPageProps) {
  return (
    <>
      <Head>
        <title>{raffle.nft.tokenName} | DeRafl</title>
        <meta name="description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${raffle.nft.tokenName} | DeRafl`} />
        <meta property="og:description" content="DeRafl brings you the opportunity to win unique digital assets with our revolutionary decentrailized raffle protocol" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={raffle.nft.imageUri}></meta>
        <meta name="twitter:site" content="@derafl_"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="robots" content="index,follow"></meta>
      </Head>

      <main>
        <Box mt="8rem">
          <RaffleDetail raffle={raffle} trending={trending} />
        </Box>
      </main>
    </>
  )
}
