"use client";
import { ClientOnly } from "@/components/utils/ClientOnly";
import { CarteCommunes, CLCTerritoires, InconfortThermique } from "@/lib/postgres/models";
import { useState } from "react";
import ExplorerConfortThermique from "./components/ConfortThermique";

const FiltreEtapes = ({
  carteCommunes,
  inconfortThermique,
  clc
}: {
  carteCommunes: CarteCommunes[];
  inconfortThermique: InconfortThermique[];
  clc: CLCTerritoires[] | undefined;
}) => {
  const [etape, setEtape] = useState<number>(1);
  return (
    <div>
      {
        etape === 1 && (
          <ClientOnly>
            <ExplorerConfortThermique
              carteCommunes={carteCommunes}
              inconfortThermique={inconfortThermique}
              clc={clc}
            />
          </ClientOnly>
        )
      }
      {
        etape === 2 && (
          "ETAPE 2 à AFFICHER"
        )
      }

    </div>
  );
};

export default FiltreEtapes;
