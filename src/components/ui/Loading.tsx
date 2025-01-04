import React from 'react'

const Loading = () => {
  return (
    <div className="flex flex-col  justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900" />
      <p className='pt-5'>Loaing</p>
    </div>
  );
}

export default Loading