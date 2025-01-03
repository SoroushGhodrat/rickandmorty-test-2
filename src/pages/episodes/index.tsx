import Link from "next/link";
import React from "react";

const Episodes = () => {
  return (
    <main className="p-4 md:p-8 lg:p-12">
      <Link href="/" className="text-blue-500 hover:text-blue-700">Home</Link>
      <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Episodes</h1>
    </main>
  );
};

export default Episodes;