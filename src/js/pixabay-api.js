import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const APY_KEY = '58321598-67404884f8deeffb5d54b2073';

export const getImagesByQuery = async (query, page) => {
  const response = await axios.get(BASE_URL, {
    params: {
      key: APY_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 15,
    },
  });
  return response.data;
};
