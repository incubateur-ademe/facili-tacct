'use client';

import { createContext, useContext, useState, type PropsWithChildren } from 'react';

interface ExplorerContextType {
  showEtape: number;
  setShowEtape: (show: number) => void;
}

const ExplorerContext = createContext<ExplorerContextType | undefined>(undefined);

export const ExplorerProvider = ({ children }: PropsWithChildren) => {
  const [showEtape, setShowEtape] = useState<number>(1);

  return (
    <ExplorerContext.Provider value={{
      showEtape,
      setShowEtape
    }}>
      {children}
    </ExplorerContext.Provider>
  );
};

export const useExplorer = () => {
  const context = useContext(ExplorerContext);
  if (context === undefined) {
    throw new Error('useExplorer must be used within an ExplorerProvider');
  }
  return context;
};
