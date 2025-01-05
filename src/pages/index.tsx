import React from 'react';
import Link from 'next/link';
import { BiLinkExternal } from 'react-icons/bi';

interface ApiEndpoint {
  href: string;
  label: string;
  description: string;
}

const apiEndpoints: ApiEndpoint[] = [
  {
    href: 'https://rickandmortyapi.com/api/character',
    label: '/api/character',
    description: 'Characters endpoint',
  },
  {
    href: 'https://rickandmortyapi.com/api/location',
    label: '/api/location',
    description: 'Locations endpoint',
  },
  {
    href: 'https://rickandmortyapi.com/api/episode',
    label: '/api/episode',
    description: 'Episodes endpoint',
  },
];

const HomePage: React.FC = () => {
  return (
    <main className="p-4 md:p-8 lg:p-12">
      <header className="py-10 text-center">
        <h1 className="pb-2 text-2xl font-bold md:text-4xl lg:text-6xl">
          Rick and Morty Test
        </h1>
        <p>
          This is a test project to demonstrate the use of the Rick and Morty
          API.
        </p>
      </header>
      <section className="mt-8">
        <h2 className="text-xl font-bold">API Endpoints</h2>
        <p>The following endpoints are used in this project:</p>
        <ul>
          {apiEndpoints.map((endpoint: ApiEndpoint) => (
            <li key={endpoint.href} className="rounded-md hover:bg-blue-500">
              <Link
                href={endpoint.href}
                passHref
                className="my-3 flex items-center rounded-md border p-2 py-2 no-underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <code className="rounded bg-gray-200 p-1">
                  {endpoint.label}
                </code>
                - {endpoint.description} <BiLinkExternal className="ml-1" />
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default HomePage;
