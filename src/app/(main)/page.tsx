'use client';

import Notice from '@codegouvfr/react-dsfr/Notice';
import Link from 'next/link';
import { useEffect } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { CommunauteBloc } from './(home)/CommunauteBloc';
import { DiagnosticBloc } from './(home)/DiagnosticBloc';
import { Patch4Bloc } from './(home)/Patch4Bloc';
import { PremierBloc } from './(home)/PremierBloc';
import { RessourcesBloc } from './(home)/RessourcesBloc';
import { TacctBloc } from './(home)/TacctBloc';
import { VerbatimBloc } from './(home)/VerbatimBloc';

const Home = () => {
  const { css } = useStyles();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('dernierTerritoireRecherché');
    }
  }, []);

  return (
    <div>
      <Notice
        className={css({
          backgroundColor: 'var(--gris-medium)',
          color: "#201F1E"
        })}
        isClosable={true}
        title={"Nouveau :"}
        description={
          <>
            Ouverture de la{' '}
            <Link href="https://facili-tacct.beta.gouv.fr/recherche-territoire" target="_blank">
              thématique Santé
            </Link>{' '}
            avec l’indicateur Pollution à l’ozone ! Découvrez aussi l’historique des 
            sécheresses passées (Gestion des risques) et le nombre d’appellations contrôlées 
            de votre territoire (Agriculture). Votre boîte à outils s’enrichit quant à elle de{' '}
              <Link href="https://facili-tacct.beta.gouv.fr/ressources" target="_blank">
                3 nouveaux retours d’expériences
              </Link>{' '}et des enseignements de Montpellier Métropole sur{' '}
              <Link href="https://facili-tacct.beta.gouv.fr/ressources/batir-strategie-adaptation/strategie-trajectoire-adaptation" target="_blank">
                la construction d'une stratégie d’adaptation
              </Link> !
          </>
        }
      />
      <PremierBloc />
      <Patch4Bloc />
      <TacctBloc />
      <CommunauteBloc />
      <DiagnosticBloc />
      <RessourcesBloc />
      <VerbatimBloc />
    </div>
  );
};

export default Home;
