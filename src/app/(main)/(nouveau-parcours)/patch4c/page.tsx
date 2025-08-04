import { Body, H1 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { GetPatch4 } from "@/lib/queries/patch4";
import { Metadata } from "next";
import { Patch4Accordion } from "../../thematiques/patch4/patch4Accordion";
import CircleVisualization from "./circleVisualization";
import CursorVisualization from "./cursorVisualization";

export const metadata: Metadata = {
  title: 'Patch4°C',
  description: 'Patch4°C'
};

const Patch4C = async (props: { searchParams: SearchParams }) => {
  const { code, type, libelle } = await props.searchParams;
  const patch4 =
    (type === 'epci' || type === 'commune' || type === "ept") ? await GetPatch4(code, type, libelle) : null;

  // useEffect(() => {
  //   if (patch4) {
  //     const precipitation = AlgoPatch4(patch4, 'fortes_precipitations');
  //     const secheresse = AlgoPatch4(patch4, 'secheresse_sols');
  //     const niveauxMarins = AlgoPatch4(patch4, 'niveaux_marins');
  //     const feuxForet = AlgoPatch4(patch4, 'feux_foret');
  //     const fortesChaleurs = AlgoPatch4(patch4, 'fortes_chaleurs');
  //   }
  // }, [patch4]);

  return (
    <NewContainer>
      <H1 style={{ textAlign: 'center' }}>
        Patch 4°C : en un coup d’œil, découvrez le tendanciel d’aggravation
        de {patch4?.niveaux_marins === null ? 4 : 5} aléas majeurs sur votre territoire
      </H1>
      <Body style={{ textAlign: 'center' }}>
        Ce nouveau jeu de données (patch 4°) est calculé par Météo France.
        Il est basé sur la trajectoire de réchauffement de référence pour
        l’adaptation au changement climatique (TRACC).
      </Body>
      <CursorVisualization />
      {patch4 ? <CircleVisualization patch4={patch4} /> : null}
      {patch4 ? <Patch4Accordion patch4={patch4} /> : null}
    </NewContainer>
  );
}

export default Patch4C;
