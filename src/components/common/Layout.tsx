import React from 'react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 w-full p-4 md:p-8 lg:p-12">{children}</div>
    </div>
  );
};

export default Layout;
