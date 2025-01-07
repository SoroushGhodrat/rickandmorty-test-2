import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface FetchDataResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  isSuccessful: boolean;
}

export const fetchData = async <T>(
  axiosRequestConfig: AxiosRequestConfig,
): Promise<FetchDataResult<T>> => {
  let data: T | null = null;
  let isLoading = true;
  let isError = false;
  let isSuccessful = false;

  try {
    const response: AxiosResponse<T> = await axios(axiosRequestConfig);
    data = response.data;
    isSuccessful = true;
  } catch (error) {
    isError = true;
  } finally {
    isLoading = false;
  }

  return { data, isLoading, isError, isSuccessful };
};
