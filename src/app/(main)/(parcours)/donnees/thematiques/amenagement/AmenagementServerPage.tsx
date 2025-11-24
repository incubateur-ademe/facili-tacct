import { SearchParams } from "@/app/(main)/types";
import { GetConsommationNAF } from "@/lib/queries/databases/biodiversite";
import { GetCommunesCoordinates } from "@/lib/queries/postgis/cartographie";
import { DonneesAmenagement } from "./DonneesAmenagement";

const AmenagementServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);


  return (
    <DonneesAmenagement
      coordonneesCommunes={coordonneesCommunes}
      consommationNAF={dbConsommationNAF}
    />
  );
};

export default AmenagementServerPage;
