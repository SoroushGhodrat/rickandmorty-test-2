import React, { useState, useMemo, useCallback } from 'react';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Pagination from '@/components/common/Pagination';
import { ApiLocationResponse } from '@/types/types';
import LocationLists from '@/components/Locations/LocationLists';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import SkeletonTextLoading from '@/components/ui/SkeletonTextLoading';
import useFetch from '@/hooks/useFetch';

const DynamicError = dynamic(() => import('@/components/ui/Error'));
const DynamicSkeletonTextLoading = dynamic(
  () => import('@/components/ui/SkeletonTextLoading'),
);

const Locations: React.FC = () => {
  const [page, setPage] = useState(1);

  const axiosRequestConfig = useMemo(
    () => ({
      url: `/api/v1/locations/all-locations?page=${page}`,
      method: 'GET',
    }),
    [page],
  );

  const { data, isLoading, isError, isSuccessful } =
    useFetch<ApiLocationResponse>(axiosRequestConfig);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  return (
    <>
      <Head>
        <title>Locations - Rick and Morty</title>
        <meta
          name="description"
          content="Explore the various locations in the Rick and Morty universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="p-4">
        <header className="text- py-10 text-center">
          <h1 className="pb-3 text-2xl font-bold capitalize md:text-4xl lg:text-6xl">
            locations
          </h1>
          <p>{`There are a total of ${data?.info.count} locations in the Rick and Morty franchise.`}</p>
        </header>

        {isLoading && <DynamicSkeletonTextLoading />}

        {isError && <DynamicError />}

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
    </>
  );
};

export default Locations;
