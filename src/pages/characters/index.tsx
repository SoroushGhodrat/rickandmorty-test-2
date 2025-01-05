import React, { useMemo } from 'react';
import useAxios from '@/hooks/useAxios';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import CharactersList from '@/components/Characters/CharactersList';

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

  return (
    <main className="p-4">
      <header className="text- py-10 text-center">
        <h1 className="pb-3 text-2xl font-bold capitalize md:text-4xl lg:text-6xl">
          locations
        </h1>
        <p>{`There are a total of ${'???'} characters in the Rick and Morty franchise.`}</p>
      </header>

      {isLoading && <Loading />}

      {isError && <Error />}

      {isSuccessful && data && <CharactersList data={data} />}
    </main>
  );
};

export default Characters;
