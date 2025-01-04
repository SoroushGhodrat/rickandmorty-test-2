import React, { FC } from 'react';
import Sidebar from '../Sidebar/Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-4 md:p-8 lg:p-12">{children}</div>
    </div>
  );
};

export default Layout;
