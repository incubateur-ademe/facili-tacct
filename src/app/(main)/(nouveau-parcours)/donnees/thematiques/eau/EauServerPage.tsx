import { SearchParams } from "@/app/(main)/types";
import { GetPrelevementsEau } from "@/lib/queries/databases/ressourcesEau";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { GetEtatCoursDeau } from "@/lib/queries/postgis/etatCoursDeau";
import { DonneesEau } from "./DonneesEau";

const EauServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbEtatCoursDeau = await GetEtatCoursDeau(code, libelle, type);
  const dbPrelevementsEau = await GetPrelevementsEau(code, libelle, type);

  return (
    <DonneesEau
      carteCommunes={carteCommunes}
      etatCoursDeau={dbEtatCoursDeau}
      prelevementsEau={dbPrelevementsEau}
    />
  );
};

export default EauServerPage;
