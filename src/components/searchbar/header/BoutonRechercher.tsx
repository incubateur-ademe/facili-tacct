"use client";

import LoupeIcon from '@/assets/icons/magnifying_glass_icon_white.svg';
import { HtmlTooltip } from "@/components/utils/Tooltips";
import { couleursPrincipales } from "@/design-system/couleurs";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { handleChangementTerritoireRedirection } from "../fonctions";

export const BoutonRechercherHeader = ({
  searchLibelle,
  setIsNewTypeChosen,
  setIsTerritoryChanging,
  setIsTypeChanging,
  searchCode,
  typeTerritoire,
}: {
  searchLibelle: string;
  setIsNewTypeChosen: (value: boolean) => void;
  setIsTerritoryChanging: (value: boolean) => void;
  setIsTypeChanging: (value: boolean) => void;
  searchCode: string;
  typeTerritoire: 'epci' | 'commune' | 'petr' | 'pnr' | 'departement';
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const thematique = params.get('thematique') || undefined;

  return (
    searchLibelle === '' ? (
      <HtmlTooltip title="Sélectionnez un territoire">
        <Image
          alt=""
          src={LoupeIcon}
          height={34}
          width={34}
          style={{
            backgroundColor: couleursPrincipales.vert,
            borderRadius: '30px',
            padding: '4px',
          }}
        />
      </HtmlTooltip>
    ) : (
      <Image
        alt=""
        src={LoupeIcon}
        height={34}
        width={34}
        style={{
          backgroundColor: couleursPrincipales.vert,
          borderRadius: '30px',
          padding: '4px',
          cursor: 'pointer'
        }}
        onClick={() => {
          if (searchLibelle === '') return;
          setIsNewTypeChosen(false);
          setIsTerritoryChanging(false);
          setIsTypeChanging(false);
          handleChangementTerritoireRedirection({
            searchCode,
            searchLibelle,
            typeTerritoire,
            router,
            page: pathname.split('/')[1] || '',
            thematique
          })
        }}
      />
    )
  )
}
