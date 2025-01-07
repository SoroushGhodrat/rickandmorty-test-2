import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig } from 'axios';

interface UseFetchResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  isSuccessful: boolean;
}

const useFetch = <T,>(
  axiosRequestConfig: AxiosRequestConfig,
): UseFetchResult<T> => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccessful, setIsSuccessful] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      setIsSuccessful(false);

      try {
        const response = await axios(axiosRequestConfig);

        setData(response.data);
        setIsSuccessful(true);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [axiosRequestConfig]);

  return { data, isLoading, isError, isSuccessful };
};

export default useFetch;
