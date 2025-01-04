import React, { useMemo } from "react";
import Link from "next/link";
import useAxios from "@/hooks/useAxios";

const Characters = () => {
  const config = useMemo(
    () => ({
      url: "https://rickandmortyapi.com/api/character",
      method: "GET",
    }),
    []
  );

  const { data, isLoading, isError, isSuccessful } = useAxios<{ results: any[] }>(config);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error occurred</div>;
  console.log("data", data);

  return (
    <main className="p-4 md:p-8 lg:p-12">
      {isSuccessful && (
        <>
          <Link href="/" className="text-blue-500 hover:text-blue-700">
            Home
          </Link>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Characters</h1>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      )}
    </main>
  );
};

export default Characters;
