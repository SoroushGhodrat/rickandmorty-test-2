import React, { useState, useMemo, useCallback } from 'react';
import useAxios from '@/hooks/useAxios';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Pagination from '@/components/common/Pagination';
import { ApiLocationResponse } from '@/types/types';
import LocationLists from '@/components/Locations/LocationLists';

const Locations: React.FC = () => {
  const [page, setPage] = useState(1);

  const axiosRequestConfig = useMemo(
    () => ({
      url: `https://rickandmortyapi.com/api/location?page=${page}`,
      method: 'GET',
    }),
    [page],
  );

  const { data, isLoading, isError, isSuccessful } =
    useAxios<ApiLocationResponse>(axiosRequestConfig);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <main className="p-4">
      <header className="text- py-10 text-center">
        <h1 className="pb-3 text-2xl font-bold capitalize md:text-4xl lg:text-6xl">
          locations
        </h1>
        <p>{`There are a total of ${data?.info.count} locations in the Rick and Morty franchise.`}</p>
      </header>

      {isLoading && <Loading />}

      {isError && <Error />}

      {isSuccessful && data && (
        <>
          <LocationLists data={data} />

          <Pagination
            currentPage={page}
            totalPage={data.info.pages || 1}
            hasNextPage={!!data.info.next}
            hasPrevPage={!!data.info.prev}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
};

export default Locations;
