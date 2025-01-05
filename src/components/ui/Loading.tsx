import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="h-32 w-32 animate-spin rounded-full border-b-2 border-t-2 border-blue-900" />
      <p className="pt-5">Loaing</p>
    </div>
  );
};

export default Loading;
