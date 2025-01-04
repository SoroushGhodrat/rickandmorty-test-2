import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface residentsDetailes {
  show: boolean;
  list: string[];
}
interface ResidentsContextProps {
  residentsDetailes: residentsDetailes;
  setResidentsDetailes: React.Dispatch<React.SetStateAction<residentsDetailes>>;
}

const ResidentsContext = createContext<ResidentsContextProps | undefined>(
  undefined,
);

export const ResidentsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [residentsDetailes, setResidentsDetailes] = useState<residentsDetailes>(
    {
      show: false,
      list: [],
    },
  );
// Debugging the context value in the console to see the changes    
  console.log('Updated residentsDetailes context:', residentsDetailes);

  return (
    <ResidentsContext.Provider
      value={{ residentsDetailes, setResidentsDetailes }}
    >
      {children}
    </ResidentsContext.Provider>
  );
};

export const useResidents = (): ResidentsContextProps => {
  const context = useContext(ResidentsContext);
  if (!context) {
    throw new Error('useResidents must be used within a ResidentsProvider');
  }
  return context;
};
