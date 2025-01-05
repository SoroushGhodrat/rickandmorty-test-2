import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import React, { useMemo } from 'react';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import EpisodesList from '@/components/Episodes/EpisodesList';
import Head from 'next/head';

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

  return (
    <>
      <Head>
        <title>Episodes - Rick and Morty</title>
        <meta
          name="description"
          content="Explore the various episodes in the Rick and Morty universe."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
    </>
  );
};

export default Episodes;
