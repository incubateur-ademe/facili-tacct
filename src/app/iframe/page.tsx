'use client';

import Notice from '@codegouvfr/react-dsfr/Notice';
import { useStyles } from 'tss-react/dsfr';
import { CommunauteBloc } from '../(main)/(home)/CommunauteBloc';
import { DiagnosticBloc } from '../(main)/(home)/DiagnosticBloc';
import { TacctBloc } from '../(main)/(home)/TacctBloc';
import { VerbatimBloc } from '../(main)/(home)/VerbatimBloc';
import { Patch4Bloc } from './(home)/Patch4Bloc';
import { PremierBloc } from './(home)/PremierBloc';
import { RessourcesBloc } from './(home)/RessourcesBloc';

const Home = () => {
  const { css } = useStyles();

  return (
    <div>
      <Notice
        className={css({
          // backgroundColor: 'var(--principales-vert)',
        })}
        isClosable={true}
        title={"Facili-TACCT se refait une beauté, nouvelle charte, nouveau parcours !"}
        description={
          <>
            Découvrez notre toute nouvelle présentation des indicateurs dans un parcours repensé et transverse ainsi que des conseils
            pour vos enquêtes terrain (uniquement disponible sur la thématique Confort thermique pour le moment).
            Une remarque, une suggestion ?{' '}
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
