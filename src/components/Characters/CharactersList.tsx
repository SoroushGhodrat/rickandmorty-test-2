import Link from 'next/link';
import React from 'react';

interface CharactersListProps {
  data: any;
}

const CharactersList: React.FC<CharactersListProps> = ({ data }) => {
  return (
    <section className="rounded-md border border-blue-500 p-4">
      <header>
        <h2 className="mb-3 rounded-md border bg-blue-300 py-3 text-center font-bold capitalize text-white md:text-4xl">
          Characters List
        </h2>
      </header>
      <Link
        className="pb-3 capitalize text-blue-500 hover:text-blue-700"
        href="/"
        passHref
      >
        back to home
      </Link>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </section>
  );
};

export default CharactersList;
