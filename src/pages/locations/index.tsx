import React, { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import useAxios from "@/hooks/useAxios";
import dateNormalizer from "@/utils/helpers/dateNormalizer";
import Loading from "@/components/ui/Loading";
import Error from "@/components/ui/Error";
import Pagination from "@/components/common/Pagination";
import { BsArrowsFullscreen } from "react-icons/bs";

interface Location {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

interface ApiLocationResponse {
  info: Info;
  results: Location[];
}

const Locations = () => {
  const [page, setPage] = useState(1);

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

  const handleResidebtsList = useCallback((residents: string[]) => {
    console.log(residents);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <main className="p-4 md:p-8 lg:p-12 ">
      <header className="text-center text- py-10">
        <h1 className="text-2xl capitalize md:text-4xl lg:text-6xl font-bold">locations</h1>
        <p>{`There are a total of ${data?.info.count} locations in the Rick and Morty franchise.`}</p>
      </header>

      {isSuccessful && data && (
        <section>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.results.map((location) => (
              <li
                key={location.id}
                className="border p-4 rounded-md capitalize hover:border-blue-500 hover:shadow-md"
              >
                <div className="text-xl font-bold text-center p-10">
                  <h2>{`Location ${location.id}`}</h2>
                  <h2 className="text-xl font-bold">{location.name}</h2>
                </div>
                <p>Type: {location.type}</p>
                <p>Dimension: {location.dimension}</p>
                <div className="flex items-baseline">
                  <p className="mr-2">Number of residents: {location.residents.length}</p>
                  <BsArrowsFullscreen
                    fontSize={13}
                    className="hover:text-blue-700 cursor-pointer"
                    aria-label="Expand"
                    role="button"
                    onClick={() => handleResidebtsList(location.residents)}
                  />
                </div>
                <p>Created: {dateNormalizer(location.created)}</p>
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
        </section>
      )}
    </main>
  );
};

export default Locations;
