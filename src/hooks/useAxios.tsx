import { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// Generic type parameter to allow defining a type that can be specified later
interface UseAxiosResult<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  isSuccessful: boolean;
}

const useAxios = <T,>(
  axiosRequestConfig: AxiosRequestConfig,
): UseAxiosResult<T> => {
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
        const response: AxiosResponse<T> = await axios(axiosRequestConfig);
        console.log('Response Data: ', response.data);
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

export default useAxios;
