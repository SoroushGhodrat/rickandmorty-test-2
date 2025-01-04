import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import useAxios from '@/hooks/useAxios';
import dateNormalizer from '@/utils/helpers/dateNormalizer';
import Loading from '@/components/ui/Loading';
import Error from '@/components/ui/Error';
import Pagination from '@/components/common/Pagination';
import { BsArrowsFullscreen } from 'react-icons/bs';
import ResidentsList from '@/components/Residents/ResidentsList';
import { useResidents } from '@/context/ResidentsContext';
import { ApiLocationResponse } from '@/types/types';

const Locations = () => {
  const [page, setPage] = useState(1);
  const { residentsDetailes, setResidentsDetailes } = useResidents();

  const axiosRequestConfig = useMemo(
    () => ({
      url: `https://rickandmortyapi.com/api/location?page=${page}`,
      method: 'GET',
    }),
    [page],
  );

  const { data, isLoading, isError, isSuccessful } =
    useAxios<ApiLocationResponse>(axiosRequestConfig);

  const handlePageChange = useCallback((newPage: number) => {
    setPage(newPage);
  }, []);

  // Update ResidentsList state in context
  const handleResidentsListContext = useCallback(
    (residentsList: string[]) => {
      setResidentsDetailes({
        show: !residentsDetailes.show,
        list: residentsList,
      });
    },
    [residentsDetailes, setResidentsDetailes],
  );

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <main className="p-4">
      <header className="text- py-10 text-center">
        <h1 className="text-2xl font-bold capitalize md:text-4xl lg:text-6xl">
          locations
        </h1>
        <p>{`There are a total of ${data?.info.count} locations in the Rick and Morty franchise.`}</p>
      </header>

      {isSuccessful && data && (
        <section>
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.results.map((location) => (
              <>
                <li
                  key={location.id}
                  className="transform rounded-md border p-4 capitalize transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-xl"
                >
                  <div className="p-10 text-center text-xl font-bold">
                    <h2>{`Location ${location.id}`}</h2>
                    <h2 className="text-xl font-bold">{location.name}</h2>
                  </div>
                  <p>Type: {location.type}</p>
                  <p>Dimension: {location.dimension}</p>
                  <div className="flex items-baseline">
                    <p className="mr-2">
                      Number of residents: {location.residents.length}
                    </p>
                    {location.residents.length > 0 && (
                      <BsArrowsFullscreen
                        fontSize={13}
                        className="cursor-pointer hover:text-blue-700"
                        aria-label="Expand"
                        role="button"
                        onClick={() =>
                          handleResidentsListContext(location.residents)
                        }
                      />
                    )}
                  </div>
                  <p>Created: {dateNormalizer(location.created)}</p>
                </li>
              </>
            ))}
          </ul>

          {residentsDetailes.show && <ResidentsList />}

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
