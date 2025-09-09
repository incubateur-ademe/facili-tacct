import { GetAgriculture, GetSurfacesAgricoles } from "@/lib/queries/databases/agriculture";
import { GetAgricultureBio } from "@/lib/queries/databases/biodiversite";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import { DonneesAgricultureEtPeche } from "./DonneesAgricultureEtPeche";

const AgricultureEtPecheServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbAgriculture = await GetAgriculture(code, libelle, type);
  const dbSurfacesAgricoles = await GetSurfacesAgricoles(code, libelle, type);
  const dbAgricultureBio = await GetAgricultureBio(libelle, type, code);

  // const carteCommunes = [];
  // const dbAgriculture = mockDb.databases.agriculture;
  // const dbSurfacesAgricoles = mockDb.databases.surfaces_agricoles;
  // console.log("dbSurfacesAgricoles", dbSurfacesAgricoles)
  // const dbAgricultureBio = mockDb.databases.agriculture_bio;

  return (
    <DonneesAgricultureEtPeche
      carteCommunes={carteCommunes}
      agriculture={dbAgriculture}
      surfacesAgricoles={dbSurfacesAgricoles}
      agricultureBio={dbAgricultureBio!}
    />
  );
};

export default AgricultureEtPecheServerPage;
