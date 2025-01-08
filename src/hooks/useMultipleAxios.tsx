import { useState, useEffect } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

interface UseMultipleAxiosResult<T> {
  data: T[];
  isLoading: boolean;
  isError: boolean;
}

const useMultipleAxios = <T,>(urls: string[]): UseMultipleAxiosResult<T> => {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);

      try {
        const responses: AxiosResponse<T>[] = await Promise.all(
          urls.map((url) => axios.get<T>(url)),
        );
        const responseData = responses.map((response) => response.data);
        setData(responseData);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    if (urls.length > 0) {
      fetchData();
    }
  }, [urls]);

  return { data, isLoading, isError };
};

export default useMultipleAxios;
