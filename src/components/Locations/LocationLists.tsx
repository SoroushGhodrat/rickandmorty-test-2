import React, { useCallback } from 'react';
import { Location } from '@/types/types';
import { useResidents } from '@/context/ResidentsContext';
import { FcTodoList } from 'react-icons/fc';
import dateNormalizer from '@/utils/helpers/dateNormalizer';
import ResidentsList from './ResidentsList';
import { ApiLocationResponse } from '@/types/types';
import dynamic from 'next/dynamic';

interface LocationListsProps {
  data: ApiLocationResponse;
}
// Dynamically import the ResidentsList component to optimize performance
const DynamicResidentsList = dynamic(() => import('./ResidentsList'));

const LocationLists: React.FC<LocationListsProps> = ({ data }) => {
  const { residentsDetailes, setResidentsDetailes } = useResidents();

  // Update ResidentsList state in context
  const handleResidentsListContext = useCallback(
    (residentsList: string[]) => {
      setResidentsDetailes({
        show: !residentsDetailes.show,
        residentsList: residentsList,
      });
    },
    [residentsDetailes, setResidentsDetailes],
  );

  return (
    <section className="rounded-md border border-blue-500 p-4">
      <header>
        <h2 className="mb-3 rounded-md border bg-blue-300 py-3 text-center font-bold capitalize text-white md:text-4xl">
          locations list
        </h2>
      </header>

      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {data.results.map((location: Location) => (
          <li
            key={location.id}
            className="transform rounded-md border p-4 capitalize transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:shadow-xl"
          >
            <div className="py-8 text-center text-xl font-bold">
              <h2>{`Location ${location.id}`}</h2>
              <h2 className="text-xl font-bold">{location.name}</h2>
            </div>
            <p className="my-1">Type: {location.type}</p>
            <p className="my-1">Dimension: {location.dimension}</p>
            <p className="my-1">
              Number of residents: {location.residents.length}
            </p>
            {data.results.length > 0 && (
              <div className="my-1 flex">
                <button
                  onClick={() => handleResidentsListContext(location.residents)}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                  aria-label={`View residents of ${location.name}`}
                >
                  <FcTodoList fontSize={20} />
                  <span className="ml-2">View Residents</span>
                </button>
              </div>
            )}

            <p className="my-1">Created: {dateNormalizer(location.created)}</p>
          </li>
        ))}
      </ul>

      {residentsDetailes.show && <DynamicResidentsList />}
    </section>
  );
};

export default LocationLists;
