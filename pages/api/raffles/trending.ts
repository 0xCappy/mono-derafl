import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await axios.post(`${process.env.API_URL}/trending`)
    res.status(200).json(response.data)
  }
  