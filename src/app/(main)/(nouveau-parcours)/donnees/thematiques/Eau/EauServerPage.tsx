import { GetRessourceEau } from "@/lib/queries/databases/ressourcesEau";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { GetEtatCoursDeau } from "@/lib/queries/postgis/etatCoursDeau";
import { DonneesEau } from "./DonneesEau";

const EauServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const dbRessourcesEau = await GetRessourceEau(code, libelle, type);
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbEtatCoursDeau = await GetEtatCoursDeau(code, libelle, type);

  // Si les données ne sont pas disponibles, on peut soit retourner notFound() soit un message d'erreur
  // if (!carteCommunes.length || !dbRessourcesEau || !dbEtatCoursDeau) {
  //   notFound();
  // }

  return (
    <DonneesEau
      ressourcesEau={dbRessourcesEau}
      carteCommunes={carteCommunes}
      etatCoursDeau={dbEtatCoursDeau}
    />
  );
};

export default EauServerPage;
