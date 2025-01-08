import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { ApiLocationResponse } from '@/types/types';
import { CHARACTER_URL } from '@/constants/urls';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { page } = req.query;

  try {
    const response = await axios.get<ApiLocationResponse>(
      `${CHARACTER_URL}?page=${page}`,
    );
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching characters data:', error);
    res.status(500).json({ error: 'Failed to fetch characters data' });
  }
}
