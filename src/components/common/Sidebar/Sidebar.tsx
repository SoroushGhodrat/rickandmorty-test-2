import React from 'react';
import Link from 'next/link';
import { BiHomeAlt2 } from 'react-icons/bi';

const Sidebar = () => {
  return (
    <nav
      className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-4"
      aria-label="Sidebar"
    >
      <div className="flex flex-col space-y-4">
        <header className="mb-4 flex items-center text-lg font-bold text-blue-500 hover:text-blue-700 md:text-xl lg:text-2xl">
          <BiHomeAlt2 className="mr-2" />
          <Link href="/" className="no-underline">
            Rick and Morty
          </Link>
        </header>
        <Link
          href="/characters"
          className="text-sm text-gray-300 hover:text-blue-700 md:text-base lg:text-lg"
        >
          Characters
        </Link>
        <Link
          href="/episodes"
          className="text-sm text-gray-300 hover:text-blue-700 md:text-base lg:text-lg"
        >
          Episodes
        </Link>
        <Link
          href="/locations"
          className="text-sm text-gray-300 hover:text-blue-700 md:text-base lg:text-lg"
        >
          Locations
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
