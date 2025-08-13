import { GetAgricultureBio, GetAOT40, GetConsommationNAF } from "@/lib/queries/databases-nouveau-parcours/biodiversite";
import { GetQualiteEauxBaignade } from "@/lib/queries/databases-nouveau-parcours/ressourcesEau";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { GetEtatCoursDeau } from "@/lib/queries/postgis/etatCoursDeau";
import { notFound } from "next/navigation";
import { DonneesBiodiversite } from "./DonneesBiodiversite";

const BiodiversiteServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(libelle, type, code);
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const dbAOT40 = await GetAOT40();
  const dbEtatCoursDeau = await GetEtatCoursDeau(code, libelle, type);
  const qualiteEauxBaignadeParDpmt = await GetQualiteEauxBaignade(code, libelle, type);

  // Si les données ne sont pas disponibles, on peut soit retourner notFound() soit un message d'erreur
  if (!carteCommunes.length || !dbAgricultureBio || !dbConsommationNAF || !dbAOT40 || !dbEtatCoursDeau || !qualiteEauxBaignadeParDpmt) {
    notFound();
  }

  return (
    <DonneesBiodiversite
      carteCommunes={carteCommunes}
      agricultureBio={dbAgricultureBio!}
      consommationNAF={dbConsommationNAF}
      aot40={dbAOT40}
      etatCoursDeau={dbEtatCoursDeau}
      qualiteEauxBaignade={qualiteEauxBaignadeParDpmt}
    />
  );
};

export default BiodiversiteServerPage;
