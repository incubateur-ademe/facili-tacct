import { SearchParams } from "@/app/(main)/types";
import { TableCommuneModel } from "@/lib/postgres/models";
import { GetSurfacesAgricoles } from "@/lib/queries/databases/agriculture";
import { GetAgricultureBio, GetAOT40, GetConsommationNAF } from "@/lib/queries/databases/biodiversite";
import { GetConfortThermiqueBiodiversite } from "@/lib/queries/databases/inconfortThermique";
import { GetQualiteEauxBaignade } from "@/lib/queries/databases/ressourcesEau";
import { GetCommunesContours, GetCommunesCoordinates } from "@/lib/queries/postgis/cartographie";
import { GetEtatCoursDeau } from "@/lib/queries/postgis/etatCoursDeau";
import { DonneesBiodiversite } from "./DonneesBiodiversite";

const BiodiversiteServerPage = async (props: {
  searchParams: SearchParams
  tableCommune: TableCommuneModel[]
}) => {
  const { code, libelle, type } = await props.searchParams;

  console.log(`\n=== BiodiversiteServerPage - ${type} ${libelle || code} ===`);

  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);
  const sizecoordonneesCommunes = Buffer.byteLength(JSON.stringify(coordonneesCommunes));
  console.log(`coordonneesCommunes: ${(sizecoordonneesCommunes / 1024 / 1024).toFixed(2)} MB`);

  const contoursCommunes = await GetCommunesContours(code, libelle, type);
  const sizeContoursCommunes = Buffer.byteLength(JSON.stringify(contoursCommunes));
  console.log(`contoursCommunes: ${(sizeContoursCommunes / 1024).toFixed(2)} KB`);

  const dbAgricultureBio = await GetAgricultureBio(libelle, type, code);
  const sizeAgricultureBio = Buffer.byteLength(JSON.stringify(dbAgricultureBio));
  console.log(`agricultureBio: ${(sizeAgricultureBio / 1024 / 1024).toFixed(2)} MB`);

  const dbConsommationNAF = await GetConsommationNAF(code, libelle, type);
  const sizeConsommationNAF = Buffer.byteLength(JSON.stringify(dbConsommationNAF));
  console.log(`consommationNAF: ${(sizeConsommationNAF / 1024 / 1024).toFixed(2)} MB`);

  const dbAOT40 = await GetAOT40();
  const sizeAOT40 = Buffer.byteLength(JSON.stringify(dbAOT40));
  console.log(`aot40: ${(sizeAOT40 / 1024 / 1024).toFixed(2)} MB`);

  const dbEtatCoursDeau = await GetEtatCoursDeau(code, libelle, type);
  const sizeEtatCoursDeau = Buffer.byteLength(JSON.stringify(dbEtatCoursDeau));
  console.log(`etatCoursDeau: ${(sizeEtatCoursDeau / 1024 / 1024).toFixed(2)} MB`);

  const qualiteEauxBaignadeParDpmt = await GetQualiteEauxBaignade(code, libelle, type);
  const sizeQualiteEaux = Buffer.byteLength(JSON.stringify(qualiteEauxBaignadeParDpmt));
  console.log(`qualiteEauxBaignade: ${(sizeQualiteEaux / 1024 / 1024).toFixed(2)} MB`);

  const dbConfortThermique = await GetConfortThermiqueBiodiversite(code, libelle, type);
  const sizeConfortThermique = Buffer.byteLength(JSON.stringify(dbConfortThermique));
  console.log(`confortThermique: ${(sizeConfortThermique / 1024 / 1024).toFixed(2)} MB`);

  const dbSurfacesAgricoles = await GetSurfacesAgricoles(code, libelle, type);
  const sizeSurfacesAgricoles = Buffer.byteLength(JSON.stringify(dbSurfacesAgricoles));
  console.log(`surfacesAgricoles: ${(sizeSurfacesAgricoles / 1024 / 1024).toFixed(2)} MB`);


  const totalSize = sizeAgricultureBio + sizeConsommationNAF +
    sizeAOT40 + sizeEtatCoursDeau + sizeQualiteEaux +
    sizeConfortThermique + sizeSurfacesAgricoles + sizecoordonneesCommunes + sizeContoursCommunes;
  console.log(`\n📊 TOTAL: ${(totalSize / 1024 / 1024).toFixed(2)} MB\n`);

  return (
    <DonneesBiodiversite
      coordonneesCommunes={coordonneesCommunes}
      contoursCommunes={contoursCommunes}
      agricultureBio={dbAgricultureBio}
      consommationNAF={dbConsommationNAF}
      aot40={dbAOT40}
      etatCoursDeau={dbEtatCoursDeau}
      qualiteEauxBaignade={qualiteEauxBaignadeParDpmt}
      confortThermique={dbConfortThermique}
      surfacesAgricoles={dbSurfacesAgricoles}
      tableCommune={props.tableCommune}
    />
  );
};

export default BiodiversiteServerPage;
