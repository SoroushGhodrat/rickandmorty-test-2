import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <nav className="bg-gray-800 h-full fixed top-0 left-0 w-64 p-4">
      <div className="flex flex-col space-y-4">
        <div className="text-white text-lg md:text-xl lg:text-2xl font-bold mb-4">
          <Link href="/">Rick and Morty</Link>
        </div>
        <Link
          href="/characters"
          className="text-gray-300 hover:text-white text-sm md:text-base lg:text-lg"
        >
          Characters
        </Link>
        <Link
          href="/episodes"
          className="text-gray-300 hover:text-white text-sm md:text-base lg:text-lg"
        >
          Episodes
        </Link>
        <Link
          href="/locations"
          className="text-gray-300 hover:text-white text-sm md:text-base lg:text-lg"
        >
          Locations
        </Link>
      </div>
    </nav>
  );
};

export default Sidebar;
