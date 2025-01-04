import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('https://rickandmortyapi.com/api')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Head>
        <title>Rick and Morty Test</title>
      </Head>
      <main className="ml-64 p-4 md:p-8 lg:p-12">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          Rick and Morty Test
        </h1>
        {data && (
          <ul className="mt-4 space-y-2">
            {Object.keys(data).map((key) => (
              <li key={key} className="text-lg md:text-xl lg:text-2xl">
                <Link
                  href={`/${key}`}
                  className="text-blue-500 hover:text-blue-700"
                >
                  {key}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
