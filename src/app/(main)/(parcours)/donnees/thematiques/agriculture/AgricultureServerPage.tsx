import { SearchParams } from "@/app/(main)/types";
import { TableCommuneModel } from "@/lib/postgres/models";
import { GetSurfacesAgricoles } from "@/lib/queries/databases/agriculture";
import { GetAgricultureBio } from "@/lib/queries/databases/biodiversite";
import { GetCommunesContours, GetCommunesCoordinates } from "@/lib/queries/postgis/cartographie";
import { DonneesAgriculture } from "./DonneesAgriculture";

const AgricultureServerPage = async (props:
  {
    searchParams: SearchParams
    tableCommune: TableCommuneModel[]
  }) => {
  const { code, libelle, type } = await props.searchParams;
  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);
  const contoursCommunes = await GetCommunesContours(code, libelle, type);
  const dbSurfacesAgricoles = await GetSurfacesAgricoles(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(libelle, type, code);

  return (
    <DonneesAgriculture
      coordonneesCommunes={coordonneesCommunes}
      contoursCommunes={contoursCommunes}
      surfacesAgricoles={dbSurfacesAgricoles}
      agricultureBio={dbAgricultureBio}
      tableCommune={props.tableCommune}
    />
  );
};

export default AgricultureServerPage;
