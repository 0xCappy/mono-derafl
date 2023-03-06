import Head from 'next/head';
import React from 'react';

import { RaffleDetail } from '../../features'
import { EncodedParseQuery, encodeParseQuery } from '@parse/react-ssr';
import { Raffle, TicketBatch } from '@/src/API';
import { Box } from '@mantine/core';
import axios from 'axios';
import { API, graphqlOperation } from 'aws-amplify';
import { getRaffle, listRaffles, listTicketBatches, searchRaffles } from '@/src/graphql/queries';
import { formatIpfsUrl } from '@/common/utils';

// This gets called on every request
export const getServerSideProps = async (context: any) => {
  const raffleId = context.query.raffleId
  const listRaffleData = await API.graphql(graphqlOperation(listRaffles, {
    filter: { raffleNonce: { eq: raffleId } }
  })) as any
  const raffleBasic = listRaffleData.data.listRaffles.items[0]
  const raffleData = await API.graphql(graphqlOperation(getRaffle, { id: raffleBasic.id })) as any
  const raffle = raffleData.data.getRaffle

  const trendingData = await API.graphql(graphqlOperation(searchRaffles, {
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
  const { items } = trendingData.data.searchRaffles

  return {
    props: {
      raffle,
      trending: items
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
        <meta property="og:image" content={formatIpfsUrl(raffle.nft.imageUri || '')}></meta>
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
