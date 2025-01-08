import React from 'react';
import Link from 'next/link';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsPinMap, BsListCheck, BsPersonBoundingBox } from 'react-icons/bs';

import { usePathname } from 'next/navigation';
interface Page {
  href: string;
  name: string;
  icon: JSX.Element;
}

export const pages: Page[] = [
  {
    href: '/characters',
    name: 'Characters',
    icon: <BsPersonBoundingBox className="mr-2" />,
  },
  {
    href: '/episodes',
    name: 'Episodes',
    icon: <BsListCheck className="mr-2" />,
  },
  {
    href: '/locations',
    name: 'Locations',
    icon: <BsPinMap className="mr-2" />,
  },
];

const Sidebar: React.FC = () => {
  // Use pathname hook to get the current path
  const pathname = usePathname();

  return (
    <nav
      className="fixed left-0 top-0 h-full w-64 bg-gray-800 p-4"
      aria-label="Sidebar"
      data-testid="sidebar"
    >
      <div className="flex flex-col space-y-4">
        <header className="mb-4 flex items-center text-lg font-bold text-blue-500 hover:text-blue-700 md:text-xl lg:text-2xl">
          <BiHomeAlt2 className="mr-2" />
          <Link href="/" className="no-underline">
            Rick and Morty
          </Link>
        </header>

        {pages.map((page: Page) => (
          <Link
            key={page.name}
            href={page.href}
            // Conditionally apply styles to highlight the current page
            className={` ${
              pathname === page.href
                ? 'flex items-center text-2xl text-blue-500'
                : 'flex items-center text-sm text-gray-300 hover:text-blue-700 md:text-base lg:text-lg'
            } `}
          >
            {page.icon} {page.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
