'use client';

import { useEffect } from 'react';
// import { useStyles } from 'tss-react/dsfr';
import { CommunauteBloc } from './(home)/CommunauteBloc';
import { DiagnosticBloc } from './(home)/DiagnosticBloc';
import { Patch4Bloc } from './(home)/Patch4Bloc';
import { PremierBloc } from './(home)/PremierBloc';
import { RessourcesBloc } from './(home)/RessourcesBloc';
import { TacctBloc } from './(home)/TacctBloc';
import { VerbatimBloc } from './(home)/VerbatimBloc';
// import Link from 'next/link';
// import Notice from '@codegouvfr/react-dsfr/Notice';

const Home = () => {
  // const { css } = useStyles();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.removeItem('dernierTerritoireRecherché');
    }
  }, []);

  return (
    <div>
      {/* <Notice
        className={css({
          backgroundColor: 'var(--gris-medium)',
          color: "#201F1E"
        })}
        isClosable={true}
        title={"Nouveau :"}
        description={
          <>
            une sélection de ressources regroupées par "collection" pour vous accompagner
            dans chaque situation : découvrez votre nouvel espace "
            <Link
              href="/ressources"
            >
              Boîte à outils
            </Link>
            " ! Vous y trouverez également les formations ADEME de la méthode TACCT ainsi
            qu’un{" "}
            <Link
              href="https://tally.so/r/w4l8pk"
              target="_blank"
              rel="noopener noreferrer"
            >
              quiz pour tester vos connaissances sur l’adaptation
            </Link>
            . Une remarque, une suggestion ?{' '}
            <a
              href="https://tally.so/r/mJGELz"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactez-nous
            </a>
            , on a hâte d’avoir vos retours !
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
