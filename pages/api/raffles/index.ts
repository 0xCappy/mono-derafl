import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { filter, sortKey, asc, skip, limit } = JSON.parse(req.body)

    const response = await axios.post(`${process.env.API_URL}/raffles`, {filter, sortKey, asc, skip, limit})
    res.status(200).json(response.data)
}
