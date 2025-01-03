import React, { FC } from "react";
import Sidebar from "../Sidebar/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="ml-64 p-4 md:p-8 lg:p-12 w-full">{children}</div>
    </div>
  );
};

export default Layout;
