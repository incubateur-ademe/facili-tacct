import { GetInconfortThermique } from "@/lib/queries/databases/inconfortThermique";
import { GetClcTerritoires, GetCommunes } from "@/lib/queries/postgis/cartographie";
import { notFound } from "next/navigation";
import DonneesConfortThermique from "./DonneesConfortThermique";

const ConfortThermiqueServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbInconfortThermique = await GetInconfortThermique(code, libelle, type);
  const clc = await GetClcTerritoires(libelle, type, code);

  // Si les données ne sont pas disponibles, on peut soit retourner notFound() soit un message d'erreur
  if (!clc || !clc.length || !dbInconfortThermique.length || !carteCommunes.length) {
    notFound();
  }

  return (
    <DonneesConfortThermique
      carteCommunes={carteCommunes}
      inconfortThermique={dbInconfortThermique}
      clc={clc}
    />
  );
};

export default ConfortThermiqueServerPage;
