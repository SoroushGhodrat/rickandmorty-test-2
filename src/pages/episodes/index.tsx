import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import React, { useMemo } from 'react';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import EpisodesList from '@/components/Episodes/EpisodesList';

const Episodes = () => {
  const config = useMemo(
    () => ({
      url: 'https://rickandmortyapi.com/api/episode',
      method: 'GET',
    }),
    [],
  );

  const { data, isLoading, isError, isSuccessful } = useAxios<{
    results: any[];
  }>(config);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;

  return (
    <main className="p-4">
      <header className="text- py-10 text-center">
        <h1 className="pb-3 text-2xl font-bold capitalize md:text-4xl lg:text-6xl">
          Episodes
        </h1>
        <p>{`There are a total of ${'???'} episodes in the Rick and Morty franchise.`}</p>
      </header>

      {isLoading && <Loading />}

      {isError && <Error />}

      {isSuccessful && data && <EpisodesList data={data} />}
    </main>
  );
};

export default Episodes;
