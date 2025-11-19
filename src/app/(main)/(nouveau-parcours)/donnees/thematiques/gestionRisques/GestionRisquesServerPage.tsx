import { SearchParams } from "@/app/(main)/types";
import { GetArretesCatnat, GetIncendiesForet, GetSecheresses } from "@/lib/queries/databases/gestionRisques";
import { GetCommunes, GetCommunesContours, GetCommunesCoordinates, GetErosionCotiere } from "@/lib/queries/postgis/cartographie";
import { DonneesGestionRisques } from "./DonneesGestionRisques";

const GestionRisquesServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const dbGestionRisques = await GetArretesCatnat(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);
  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);
  const erosionCotiere = await GetErosionCotiere(code, libelle, type);
  const dbIncendiesForet = await GetIncendiesForet(code, libelle, type);
  const dbSecheresses = await GetSecheresses(code, libelle, type);
  const contoursCommunes = await GetCommunesContours(code, libelle, type);

  return (
    <DonneesGestionRisques
      gestionRisques={dbGestionRisques}
      carteCommunes={carteCommunes}
      coordonneesCommunes={coordonneesCommunes}
      erosionCotiere={erosionCotiere}
      incendiesForet={dbIncendiesForet}
      secheresses={dbSecheresses}
      contoursCommunes={contoursCommunes}
    />
  );
};

export default GestionRisquesServerPage;
