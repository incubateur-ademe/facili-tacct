import patch4Formula from '@/assets/images/patch4_formula.svg';
import { Body, H1, H2 } from "@/design-system/base/Textes";
import { NewContainer } from "@/design-system/layout";
import { GetPatch4 } from "@/lib/queries/patch4";
import { Metadata } from "next";
import Image from "next/image";
import CircleVisualization from "./circleVisualization";
import CursorVisualization from "./cursorVisualization";
import IndicesDetail from "./indicesDetail";

export const metadata: Metadata = {
  title: 'Patch4°C',
  description: 'Patch4°C'
};

const Patch4C = async (props: { searchParams: SearchParams }) => {
  const { code, type, libelle } = await props.searchParams;
  const patch4 = (type === 'epci' || type === 'commune' || type === "ept")
    ? await GetPatch4(code, type, libelle)
    : null;

  return (
    <NewContainer>
      <H1 style={{ textAlign: 'center' }}>
        Patch 4°C : en un coup d’œil, découvrez le tendanciel d’aggravation
        des aléas majeurs sur votre territoire
      </H1>
      <Body style={{ textAlign: 'center' }}>
        Ce nouveau jeu de données (patch 4°) est calculé par Météo France.
        Il est basé sur la trajectoire de réchauffement de référence pour
        l’adaptation au changement climatique (TRACC).
      </Body>
      <CursorVisualization />
      {patch4 ? <CircleVisualization patch4={patch4} /> : null}
      <H2>En cas d’aggravation forte ou très forte, comment renforcer son plan d’adaptation ?</H2>
      <Body>
        Il est alors impératif de prendre en compte les conséquences de l’aléa,
        de manière spécifique à chaque territoire. Si le tableau ci-joint vous
        propose une liste (non exhaustive) de sujets à traiter, l’analyse reste
        à effectuer en fonction de vos dynamiques territoriales, des actions déjà
        entreprises et de vos capacités d’adaptation.
      </Body>
      <Body weight="bold" style={{ margin: '1rem 0' }}>
        SI l’un de ces indices est au niveau d’aggravation “fort” ou “très fort”.... alors traiter impérativement ces thématiques
      </Body>
      {patch4 ? <IndicesDetail patch4={patch4} /> : null}
      <H2>D’où vient cette donnée :</H2>
      <Body size="sm">
        Ces indices représentent chacun l’aggravation de l’évolution d’un phénomène
        climatique précis, en 2100 par rapport à 2050. <br />À partir des données de la TRACC,
        le calcul de l’indice d’aggravation est effectué sur la valeur médiane de certains
        indicateurs de Climadiag Commune, aux 3 échéances : 2030, 2050 et 2100. Le cas
        échéant, les indicateurs saisonniers ont été cumulés pour en faire des indicateurs
        annuels. Lorsque plusieurs indicateurs sont disponibles pour un même aléa, le
        niveau d’évolution considéré est la valeur maximale de l’indicateur.
      </Body>
      <Image src={patch4Formula} alt="" height={80} />
      <Body size="sm">
        Retrouvez vos indicateurs climatiques détaillés sur le portail{' '}
        <a
          href="https://meteofrance.com/climadiag-commune"
          target="_blank"
          rel="noopener noreferrer"
        >
          Climadiag Communes
        </a>
        {" "}de Météo France.
      </Body>
    </NewContainer>
  );
}

export default Patch4C;
