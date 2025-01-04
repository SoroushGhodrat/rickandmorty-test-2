import useAxios from '@/hooks/useAxios';
import Link from 'next/link';
import React, { useMemo } from 'react';

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
  console.log('data', data);
  return (
    <main className="p-4 md:p-8 lg:p-12">
      {isSuccessful && (
        <>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
          <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
            Episodes
          </h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </main>
  );
};

export default Episodes;
