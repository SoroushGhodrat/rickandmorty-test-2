import React from 'react';

const Error: React.FC = () => {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center rounded-md border border-red-400 bg-red-100 p-4 text-red-700"
    >
      <h1 className="mb-2 text-2xl font-bold">Error</h1>
      <p className="mb-1">An error occurred while fetching data.</p>
      <p>Please try again later.</p>
    </div>
  );
};

export default Error;
