import { SearchParams } from "@/app/(main)/types";
import { GetPatch4 } from "@/lib/queries/patch4";
import { GetCommunesCoordinates } from "@/lib/queries/postgis/cartographie";
import { Metadata } from "next";
import CircleVisualization from "./circleVisualization";
import { BlocAleas } from "./components/blocAleas";
import { ConseilsAggravation } from './components/blocConseils';
import { BlocTitre } from './components/blocTitre';
import CursorVisualization from "./cursorVisualization";

export const metadata: Metadata = {
  title: 'Patch4°C',
  description: 'Patch4°C'
};

const Patch4C = async (props: { searchParams: SearchParams }) => {
  const { code, type, libelle } = await props.searchParams;
  const patch4 = await GetPatch4(code, type, libelle);
  const coordonneesCommunes = await GetCommunesCoordinates(code, libelle, type);

  return (
    <>
      <BlocTitre />
      {patch4.length && patch4.length === 1 ?
        <>
          <CircleVisualization patch4={patch4[0]} />
          <CursorVisualization isMap={false} />
          {/* <BlocAleas patch4={patch4} /> */}
        </>
        : null
      }
      <BlocAleas
        coordonneesCommunes={coordonneesCommunes}
        patch4={patch4}
      />
      <ConseilsAggravation />
    </>
  );
}

export default Patch4C;
