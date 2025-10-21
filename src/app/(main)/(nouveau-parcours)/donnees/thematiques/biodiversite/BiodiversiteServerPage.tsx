import { SearchParams } from "@/app/(main)/types";
import { TableCommuneModel } from "@/lib/postgres/models";
import { GetSurfacesAgricoles } from "@/lib/queries/databases/agriculture";
import { GetAgricultureBio, GetAOT40, GetConsommationNAF } from "@/lib/queries/databases/biodiversite";
import { GetConfortThermique } from "@/lib/queries/databases/inconfortThermique";
import { GetQualiteEauxBaignade } from "@/lib/queries/databases/ressourcesEau";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { GetEtatCoursDeau } from "@/lib/queries/postgis/etatCoursDeau";
import { DonneesBiodiversite } from "./DonneesBiodiversite";

// Fonction utilitaire pour convertir les BigInt en Number (sérialisation JSON)
// Gère aussi les undefined et null pour éviter les erreurs de sérialisation
const serializeData = <T,>(data: T): T => {
  if (data === undefined || data === null) {
    return data;
  }
  return JSON.parse(
    JSON.stringify(data, (_, value) =>
      typeof value === 'bigint' ? Number(value) : value
    )
  );
};

const BiodiversiteServerPage = async (props: {
  searchParams: SearchParams
  tableCommune: TableCommuneModel[]
}) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(libelle, type, code);
  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const dbAOT40 = await GetAOT40();
  const dbEtatCoursDeau = await GetEtatCoursDeau(code, libelle, type);
  const qualiteEauxBaignadeParDpmt = await GetQualiteEauxBaignade(code, libelle, type);
  const dbInconfortThermique = await GetConfortThermique(code, libelle, type);
  const dbSurfacesAgricoles = await GetSurfacesAgricoles(code, libelle, type);

  return (
    <DonneesBiodiversite
      carteCommunes={serializeData(carteCommunes)}
      agricultureBio={serializeData(dbAgricultureBio)}
      consommationNAF={serializeData(dbConsommationNAF)}
      aot40={serializeData(dbAOT40)}
      etatCoursDeau={serializeData(dbEtatCoursDeau)}
      qualiteEauxBaignade={serializeData(qualiteEauxBaignadeParDpmt)}
      inconfortThermique={serializeData(dbInconfortThermique)}
      surfacesAgricoles={serializeData(dbSurfacesAgricoles)}
      tableCommune={props.tableCommune}
    />
  );
};

export default BiodiversiteServerPage;
