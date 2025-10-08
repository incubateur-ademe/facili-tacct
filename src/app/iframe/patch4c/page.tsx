import { SearchParams } from '@/app/(main)/types';
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
        des aléas majeurs de votre territoire
      </H1>
      <Body style={{ textAlign: 'center' }}>
        Ce nouveau jeu de données (patch 4°C) est calculé par Météo France.<br />
        Il est basé sur la trajectoire de réchauffement de référence pour
        l’adaptation au changement climatique (TRACC).
      </Body>
      <CursorVisualization />
      {patch4 ? <CircleVisualization patch4={patch4} /> : null}
      <H2>Que faire en cas de niveau d’aggravation "fort" ou "très fort" ?</H2>
      <Body>
        Si l'un des indices de votre territoire est au niveau d'aggravation "fort" ou "très fort",
        il est impératif de renforcer votre plan d'adaptation. Prenez en compte dès maintenant les
        conséquences possibles de l'aléa.
      </Body>
      <Body style={{ marginTop: '1rem', padding: "0.75rem 0" }}>
        <b>Si le niveau d'aggravation de l'aléa est très fort :</b>
        <ul>
          <li className='ml-4'>
            <Body>Dans votre diagnostic de vulnérabilité aux impacts du changement climatique, le niveau d’exposition à l’aléa climatique doit être considéré comme maximal.</Body>
          </li>
          <li className='ml-4'>
            <Body>À défaut de disposer de capacités d’adaptation démontrant le contraire, considérez comme maximal votre niveau de sensibilité face à cette exposition, pour les habitants, les infrastructures, les ressources naturelles et les activités économiques.</Body>
          </li>
          <li className='ml-4'>
            <Body>Vérifier que votre plan d’action comporte des actions visant à réduire vos différents facteurs de sensibilité face à cette exposition. Si ce n’est pas le cas, il convient d’en ajouter.</Body>
          </li>
        </ul>
      </Body>
      <Body>
        <b>Si le niveau d'aggravation de l'aléa est fort :</b>
        <ul className='pb-4'>
          <li className='ml-4'>
            <Body>Vérifier que votre diagnostic identifie bien l’aléa climatique suivi par cet indice, sinon l’ajouter.</Body>
          </li>
          <li className='ml-4'>
            <Body>Vérifier que votre diagnostic évalue la sensibilité face à cette exposition, pour les habitants, les infrastructures, les ressources naturelles et les activités économiques.</Body>
          </li>
          <li className='ml-4'>
            <Body>Éventuellement, compléter votre plan d’action.</Body>
          </li>
        </ul>
      </Body>
      <Body weight='bold'>
        Le tableau ci-dessous propose une liste de thématiques à
        aborder, mais l'analyse reste à effectuer en fonction de vos dynamiques territoriales, des
        actions déjà entreprises et de vos capacités d’adaptation.
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
