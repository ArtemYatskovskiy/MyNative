import axios from 'axios';

axios.defaults.baseURL = 'https://russianwarship.rip/api/v1';

export const axiosRequest = async ({
  metod = 'GET',
  url,
  params = {},
  responseType = 'json',
  data = undefined,
  headers = {
    'Content-Type': 'application/json',
  },
}) => {
  const response = await axios({
    metod,
    url,
    baseURL: axios.defaults.baseURL,
    params,
    responseType,
    data,
    headers,
  });
};
