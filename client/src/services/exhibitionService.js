import axios from 'axios';
import { BASE_URL, API_KEY } from '@env';

export async function getExhibitions() {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        apikey: API_KEY,
        status: 'current',
        page: 1,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
