import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { sortKey, asc, skip, limit, address, filterKey } = JSON.parse(req.body)
    const response = await axios.post(`${process.env.API_URL}/account/ticketBatches`, {
        address: address?.toLowerCase(),
        sortKey,
        asc,
        skip,
        limit,
        filterKey
    })
    res.status(200).json(response.data)
}