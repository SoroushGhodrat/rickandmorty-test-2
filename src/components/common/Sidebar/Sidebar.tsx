import React from 'react';
import Link from 'next/link';

const Sidebar = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-4">
      <div className="flex flex-col space-y-4">
        <div className="mb-4 text-lg font-bold text-white md:text-xl lg:text-2xl">
          <Link href="/">Rick and Morty</Link>
        </div>
        <Link
          href="/characters"
          className="text-sm text-gray-300 hover:text-white md:text-base lg:text-lg"
        >
          Characters
        </Link>
        <Link
          href="/episodes"
          className="text-sm text-gray-300 hover:text-white md:text-base lg:text-lg"
        >
          Episodes
        </Link>
        <Link
          href="/locations"
          className="text-sm text-gray-300 hover:text-white md:text-base lg:text-lg"
        >
          Locations
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
