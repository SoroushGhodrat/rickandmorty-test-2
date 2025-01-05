import React, { useMemo } from 'react';
import Link from 'next/link';
import useAxios from '@/hooks/useAxios';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';

const Characters: React.FC = () => {
  const config = useMemo(
    () => ({
      url: 'https://rickandmortyapi.com/api/character',
      method: 'GET',
    }),
    [],
  );

  const { data, isLoading, isError, isSuccessful } = useAxios<{
    results: any[];
  }>(config);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <main className="p-4 md:p-8 lg:p-12">
      {isSuccessful && (
        <>
          <header className="mb-4">
            <Link
              className="capitalize text-blue-500 hover:text-blue-700"
              href="/"
              passHref
            >
              back to home
            </Link>
            <h1 className="my-5 text-2xl font-bold md:text-4xl lg:text-6xl">
              Characters
            </h1>
          </header>
          <section>
            <h2 className="sr-only">Character Data</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
          </section>
        </>
      )}
    </main>
  );
};

export default Characters;
