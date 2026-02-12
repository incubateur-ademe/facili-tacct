'use client';

import Notice from '@codegouvfr/react-dsfr/Notice';
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
        title={"Nouveauté sur le site :"}
        description={
          <>
            le Patch 4°C est désormais disponible pour les PNR, les PETR 
            et les départements ! Une remarque, une suggestion ?{' '}
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
