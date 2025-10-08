"use client";
import { BarreDeRecherche } from "@/components/searchbar/BarreDeRecherche";
import { handleRechercheRedirection } from "@/components/searchbar/fonctions";
import { patch4ActiveRadioOptions, patch4DisabledRadioOptions } from "@/components/searchbar/radioButtons";
import { H1 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { useRouter } from "next/navigation";
import { useState } from "react";

const RechercherSonTerritoire = () => {
  const router = useRouter();
  const [searchCode, setSearchCode] = useState<string>('');
  const [searchLibelle, setSearchLibelle] = useState<string>('');
  const [typeTerritoire, setTypeTerritoire] = useState<
    'epci' | 'commune' | 'petr' | 'pnr' | 'departement'
  >('epci');
  const handleRechercher = () => handleRechercheRedirection({
    searchCode,
    searchLibelle,
    typeTerritoire,
    router,
    page: "patch4c"
  });
  const handleRadioChange = (territoire: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement') => {
    setTypeTerritoire(territoire);
    setSearchLibelle('');
  };
  const radioButtonsOptions = [patch4ActiveRadioOptions(typeTerritoire, handleRadioChange), patch4DisabledRadioOptions(typeTerritoire)];

  return (
    <NewContainer size="md">
      <div style={{ margin: '5rem 0' }}>
        <H1
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: "2rem",
            lineHeight: '40px',
          }}>
          Commençons par localiser votre territoire pour personnaliser vos données
        </H1>
        <BarreDeRecherche
          setSearchCode={setSearchCode}
          setSearchLibelle={setSearchLibelle}
          RechercherRedirection={handleRechercher}
          typeTerritoire={typeTerritoire}
          searchCode={searchCode}
          searchLibelle={searchLibelle}
          radioOptions={radioButtonsOptions}
        />
      </div>
    </NewContainer>
  );
}

export default RechercherSonTerritoire;
