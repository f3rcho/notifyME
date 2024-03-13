import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

async function http<T = unknown>(
  requestConfig: AxiosRequestConfig<T>,
): Promise<AxiosResponse<T>> {
  try {
    return await axios.request(requestConfig);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
}

export default http;
