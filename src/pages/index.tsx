import React from "react";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://rickandmortyapi.com/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Head>
        <title>Rick and Morty Test</title>
      </Head>
      <main>
        <h1>Rick and Morty Test</h1>
        {data && (
          <ul>
            {Object.keys(data).map((key) => (
              <li key={key}>
                <Link href={`/${key}`}>{key}</Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  );
}
