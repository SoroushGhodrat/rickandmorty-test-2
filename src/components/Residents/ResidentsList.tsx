import React, { useState } from 'react';
import useMultipleAxios from '@/hooks/useMultipleAxios';
import Image from 'next/image';
import Button from '../ui/Button';
import { useResidents } from '@/context/ResidentsContext';
import { BsArrowsExpand, BsArrowsCollapse } from 'react-icons/bs';
import { Character } from '@/types/types';

const ResidentsList: React.FC = () => {
  // Call residentsDetailes and setResidentsDetailes from ResidentsContext
  const { residentsDetailes, setResidentsDetailes } = useResidents();

  // Desctructure show and list from residentsDetailes
  const { show, list } = residentsDetailes;

  const [expandedResidents, setExpandedResidents] = useState<{
    [key: number]: boolean;
  }>({});

  const {
    data: residents,
    isLoading,
    isError,
  } = useMultipleAxios<Character>(list);

  if (!show) return null;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading residents list</div>;

  // update show state of ResidentsList in context
  const handleClose = () => {
    setResidentsDetailes((prevState) => ({
      ...prevState,
      show: false,
    }));
  };

  const handleToggleDetails = (id: number) => {
    setExpandedResidents((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-75 p-5">
      <div className="flex h-[500px] w-[600px] flex-col items-center justify-center rounded-lg bg-white p-4 shadow-lg">
        <h2 className="text-xl font-bold">Residents</h2>
        <ul className="my-4 w-full list-none overflow-y-scroll">
          {residents.map((resident) => (
            <li
              key={resident.id}
              className="mb-3 mr-3 rounded-lg border border-indigo-500 p-2"
            >
              <div className="flex items-center">
                <Image
                  src={resident.image}
                  alt={resident.name}
                  width={50}
                  height={50}
                  quality={100}
                  className="mr-4 h-10 w-10 rounded-full"
                />
                <div>
                  <p className="font-bold">{resident.name}</p>
                </div>
              </div>
              <section className="ml-14">
                <button
                  onClick={() => handleToggleDetails(resident.id)}
                  className="flex items-center text-blue-500 hover:text-blue-700"
                >
                  {expandedResidents[resident.id] ? (
                    <>
                      Show less <BsArrowsCollapse className="ml-2" />
                    </>
                  ) : (
                    <>
                      Show more <BsArrowsExpand className="ml-2" />
                    </>
                  )}
                </button>
                {expandedResidents[resident.id] && (
                  <div className="mt-2 transition-all duration-500 ease-in-out">
                    <p>Status: {resident.status}</p>
                    <p>Name: {resident.name}</p>
                    <p>Species: {resident.species}</p>
                    <p>
                      Type:{' '}
                      {resident.type.length === 0 ? 'No data!' : resident.type}
                    </p>
                    <p>Gender: {resident.gender}</p>
                    <p>Appears in {resident.episode.length} episode(s)</p>
                  </div>
                )}
              </section>
            </li>
          ))}
        </ul>
        <Button title="Close" onClick={handleClose} />
      </div>
    </div>
  );
};

export default ResidentsList;
