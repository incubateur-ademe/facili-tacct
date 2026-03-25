'use client';

import Notice from '@codegouvfr/react-dsfr/Notice';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { CommunauteBloc } from './(home)/CommunauteBloc';
import { DiagnosticBloc } from './(home)/DiagnosticBloc';
import { Patch4Bloc } from './(home)/Patch4Bloc';
import { PremierBloc } from './(home)/PremierBloc';
import { RessourcesBloc } from './(home)/RessourcesBloc';
import { TacctBloc } from './(home)/TacctBloc';
import { VerbatimBloc } from './(home)/VerbatimBloc';

const NOTICE_KEY = 'notice-tacct-evolution-fermee';
const NOTICE_START = new Date('2026-03-25');
const NOTICE_END = new Date('2026-04-07T23:59:59');

const Home = () => {
  const { css } = useStyles();
  const [noticeClosed, setNoticeClosed] = useState(true);
  const isWithinNoticePeriod = Date.now() >= NOTICE_START.getTime() && Date.now() <= NOTICE_END.getTime();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('dernierTerritoireRecherché');
      setNoticeClosed(localStorage.getItem(NOTICE_KEY) === 'true');
    }
  }, []);

  const handleCloseNotice = () => {
    // localStorage.setItem(NOTICE_KEY, 'true');
    setNoticeClosed(true);
  };

  return (
    <div>
      {isWithinNoticePeriod && !noticeClosed && (
        <Notice
          className={css({
            backgroundColor: 'var(--gris-medium)',
            color: "#201F1E"
          })}
          isClosable={true}
          onClose={handleCloseNotice}
          title={"Votre expérience Facili-TACCT en 2 minutes chrono ⏱️"}
          description={
            <>
              <br></br>Êtes-vous satisfaits de notre service ? Vous pouvez nous aider à l’améliorer !{" "}
              <Link href="https://tally.so/r/aQ0Ylv" target="_blank">
                Répondre au questionnaire de satisfaction
              </Link>{' '}
            </>
          }
        />
      )}
      {/* <Notice
        className={css({
          backgroundColor: 'var(--gris-medium)',
          color: "#201F1E"
        })}
        isClosable={true}
        title={"Nouveau :"}
        description={
          <>
            Ouverture de la{' '}
            <Link href="/recherche-territoire" target="_blank">
              thématique Santé
            </Link>{' '}
            avec l’indicateur Pollution à l’ozone ! Découvrez aussi l’historique des 
            sécheresses passées (Gestion des risques) et le nombre d’appellations contrôlées 
            de votre territoire (Agriculture). Votre boîte à outils s’enrichit quant à elle de{' '}
              <Link href="/ressources" target="_blank">
                3 nouveaux retours d’expériences
              </Link>{' '}et des enseignements de Montpellier Métropole sur{' '}
              <Link href="/ressources/batir-strategie-adaptation/strategie-trajectoire-adaptation" target="_blank">
                la construction d'une stratégie d’adaptation
              </Link> !
          </>
        }
      /> */}
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








