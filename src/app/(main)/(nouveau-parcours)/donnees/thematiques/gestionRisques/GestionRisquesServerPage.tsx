import { SearchParams } from "@/app/(main)/types";
import { GetArretesCatnat, GetIncendiesForet, GetSecheresses } from "@/lib/queries/databases/gestionRisques";
import { GetCommunes, GetErosionCotiere } from "@/lib/queries/postgis/cartographie";
import { DonneesGestionRisques } from "./DonneesGestionRisques";

const GestionRisquesServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const dbGestionRisques = await GetArretesCatnat(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);
  const erosionCotiere = await GetErosionCotiere(code, libelle, type);
  const dbIncendiesForet = await GetIncendiesForet(code, libelle, type);
  // const dbDebroussaillement = await GetDebroussaillement(code, libelle, type);
  const dbSecheresses = await GetSecheresses(code, libelle, type);

  // Si les données ne sont pas disponibles, on peut soit retourner notFound() soit un message d'erreur
  // if (!carteCommunes.length || !dbGestionRisques || !dbIncendiesForet) {
  //   notFound();
  // }

  return (
    <DonneesGestionRisques
      gestionRisques={dbGestionRisques}
      carteCommunes={carteCommunes}
      erosionCotiere={erosionCotiere}
      incendiesForet={dbIncendiesForet}
      // debroussaillement={dbDebroussaillement}
      secheresses={dbSecheresses}
    />
  );
};

export default GestionRisquesServerPage;
