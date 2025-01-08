import React, { ReactNode } from 'react';
import { ResidentsProvider } from './ResidentsContext';

interface AppProvidersProps {
  children: ReactNode;
}

const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <ResidentsProvider>{children}</ResidentsProvider>;
};

export default AppProviders;
