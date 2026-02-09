'use client';

import { Patch4 } from "@/lib/postgres/models";
import { useEffect, useRef, useState } from "react";
import CircleVisualization from "./circleVisualization";
import { BlocAleas } from "./components/blocAleas";
import CursorVisualization from "./cursorVisualization";

export const Patch4Content = ({
  patch4,
  coordonneesCommunes
}: {
  patch4: Patch4[];
  coordonneesCommunes: {
    codes: string[];
    bbox: { minLng: number; minLat: number; maxLng: number; maxLat: number };
  } | null;
}) => {
  const [selectedAleaKey, setSelectedAleaKey] = useState<string | undefined>(undefined);
  const shouldScrollRef = useRef(false);

  const handleSelectAlea = (key: string, shouldScroll: boolean = false) => {
    shouldScrollRef.current = shouldScroll;
    setSelectedAleaKey(key);
  };

  useEffect(() => {
    if (selectedAleaKey && shouldScrollRef.current) {
      setTimeout(() => {
        const element = document.getElementById(selectedAleaKey);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        shouldScrollRef.current = false;
      }, 100);
    }
  }, [selectedAleaKey]);

  return (
    <>
      {patch4.length && patch4.length === 1 ?
        <>
          <CircleVisualization 
            patch4={patch4[0]} 
            selectedAleaKey={selectedAleaKey}
            onSelectAlea={handleSelectAlea}
          />
          <CursorVisualization isMap={false} />
        </>
        : null
      }
      <BlocAleas
        coordonneesCommunes={coordonneesCommunes}
        patch4={patch4}
        selectedAleaKey={selectedAleaKey}
        onSelectAlea={handleSelectAlea}
      />
    </>
  );
};
