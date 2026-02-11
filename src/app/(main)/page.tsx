'use client';

import { useEffect } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { CommunauteBloc } from './(home)/CommunauteBloc';
import { DiagnosticBloc } from './(home)/DiagnosticBloc';
import { Patch4Bloc } from './(home)/Patch4Bloc';
import { PremierBloc } from './(home)/PremierBloc';
import { RessourcesBloc } from './(home)/RessourcesBloc';
import { TacctBloc } from './(home)/TacctBloc';
import { VerbatimBloc } from './(home)/VerbatimBloc';
import Link from 'next/link';
import Notice from '@codegouvfr/react-dsfr/Notice';

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
        title={"Nouveautés sur le site :"}
        description={
          <>
            votre territoire est-il concerné par une obligation légale de débroussaillement ? Découvrez-le 
            dans la thématique Gestion des risques. Retrouvez également un tout nouveau retour 
            d’expérience sur la réalisation du diagnostic de vulnérabilité, {" "}
            <Link
              href="/ressources/demarrer-diagnostic-vulnerabilite/realiser-diagnostic-vulnerabilite"
            >
              celui de Rennes Métropole
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
