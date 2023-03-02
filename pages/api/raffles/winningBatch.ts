import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { winningTicket, raffleId } = JSON.parse(req.body)
    const response = await axios.post(`${process.env.API_URL}/raffle/winningBatch`, {winningTicket, raffleId})
    res.status(200).json(response.data)
  }
  