import React from "react";

const Error: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-red-100 border border-red-400 text-red-700 rounded-md">
      <h1 className="text-2xl font-bold mb-2">Error</h1>
      <p className="mb-1">An error occurred while fetching data.</p>
      <p>Please try again later.</p>
    </div>
  );
};

export default Error;
