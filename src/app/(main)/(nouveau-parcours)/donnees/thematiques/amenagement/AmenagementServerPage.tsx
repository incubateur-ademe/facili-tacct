import { SearchParams } from "@/app/(main)/types";
import { GetConsommationNAF } from "@/lib/queries/databases/biodiversite";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { DonneesAmenagement } from "./DonneesAmenagement";

const AmenagementServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);

  return (
    <DonneesAmenagement
      carteCommunes={carteCommunes}
      consommationNAF={dbConsommationNAF}
    />
  );
};

export default AmenagementServerPage;
