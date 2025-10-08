import { SearchParams } from "@/app/(main)/types";
import { GetConsommationNAF } from "@/lib/queries/databases/biodiversite";
import { GetNAF } from "@/lib/queries/ecologieGouv/test";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { DonneesAmenagement } from "./DonneesAmenagement";

const AmenagementServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbConsommationNAFEcolab = await GetNAF(code, libelle, type);

  // Si les données ne sont pas disponibles, on peut soit retourner notFound() soit un message d'erreur
  // if (!carteCommunes.length || !dbConsommationNAF) {
  //   notFound();
  // }

  return (
    <DonneesAmenagement
      carteCommunes={carteCommunes}
      consommationNAF={dbConsommationNAF}
      consommationNAFEcolab={dbConsommationNAFEcolab}
    />
  );
};

export default AmenagementServerPage;
