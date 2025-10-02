'use client';

import { useEffect } from 'react';

const Refetch = ({
  isFirstRender,
  setIsFirstRender,
  fetchFunctions,
  setData,
  setIsLoading,
  param
}: {
  isFirstRender: boolean;
  setIsFirstRender: (value: boolean) => void;
  fetchFunctions: (() => Promise<any>)[];
  setData: (data: { carteCommunes: any; inconfortThermique: any }) => void;
  setIsLoading: (value: boolean) => void;
  param: any;
}) => {
  useEffect(() => {
    const refetch = async () => {
      if (isFirstRender) {
        setIsFirstRender(false);
        return;
      }
      setIsLoading(true);
      try {
        const [newCarteCommunes, newInconfortThermique] = await Promise.all(fetchFunctions.map(fn => fn()));
        setData({ carteCommunes: newCarteCommunes, inconfortThermique: newInconfortThermique });
      } catch (error) {
        console.error('Error refetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    refetch();
  }, [param, isFirstRender, setIsFirstRender, fetchFunctions, setData, setIsLoading]);

  return null;
};

export default Refetch;
