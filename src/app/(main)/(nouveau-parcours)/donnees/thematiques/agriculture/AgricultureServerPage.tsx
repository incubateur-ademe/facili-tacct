import { SearchParams } from "@/app/(main)/types";
import { TableCommuneModel } from "@/lib/postgres/models";
import { GetSurfacesAgricoles } from "@/lib/queries/databases/agriculture";
import { GetAgricultureBio } from "@/lib/queries/databases/biodiversite";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { DonneesAgriculture } from "./DonneesAgriculture";

const AgricultureServerPage = async (props:
  {
    searchParams: SearchParams
    tableCommune: TableCommuneModel[]
  }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  // const dbAgriculture = await GetAgriculture(code, libelle, type);
  const dbSurfacesAgricoles = await GetSurfacesAgricoles(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(libelle, type, code);

  return (
    <DonneesAgriculture
      carteCommunes={carteCommunes}
      surfacesAgricoles={dbSurfacesAgricoles}
      agricultureBio={dbAgricultureBio!}
      tableCommune={props.tableCommune}
    />
  );
};

export default AgricultureServerPage;
