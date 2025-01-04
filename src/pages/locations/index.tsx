import useAxios from "@/hooks/useAxios";
import Link from "next/link";
import React, { useCallback, useMemo, useState } from "react";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import dateNormalizer from "@/utils/helpers/dateNormalizer";
import Pagination from "@/components/common/Pagination";
interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string | null;
}
interface Results {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
interface ApiLocationResponse {
  info: Info;
  results: Results[];
}

const Locations = () => {
  const [page, setPage] = useState<number>(1);
  
  const axiosRequestConfig = useMemo(
    () => ({
      url: `https://rickandmortyapi.com/api/location?page=${page}`,
      method: "GET",
    }),
    [page]
  );

  const { data, isLoading, isError, isSuccessful } =
    useAxios<ApiLocationResponse>(axiosRequestConfig);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  console.log("data", data);
  return (
    <main className="p-4 md:p-8 lg:p-12">
      {isSuccessful && data && (
        <>
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">Locations</h1>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.results.map((result: Results) => (
              <li key={result.id} className="border p-4 rounded-md">
                <h2 className="text-xl font-bold">{result.name}</h2>
                <p>Type: {result.type}</p>
                <p>Dimension: {result.dimension}</p>
                <p>Residents: {result.residents.length}</p>
                <p>Created: {dateNormalizer(result.created)}</p>
                <a href={result.url}>URL</a>
              </li>
            ))}
          </ul>
          <Pagination
            currentPage={page}
            totalPage={data.info.pages}
            hasNextPage={!!data.info.next}
            hasPrevPage={!!data.info.prev}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </main>
  );
};

export default Locations;
