'use client';

import Notice from '@codegouvfr/react-dsfr/Notice';
import { useEffect } from 'react';
import { useStyles } from 'tss-react/dsfr';
import { DemarcheBloc } from './(home)/DemarcheBloc';
import { HeroBloc } from './(home)/HeroBloc';
import { HeroBlocMobile } from './(home)/HeroBlocMobile';
import styles from "./(home)/home.module.scss";
import { PatchEtRessourcesBloc } from './(home)/PatchEtRessourcesBloc';
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
          backgroundColor: '#FFD1B4',
          color: "#903700"
        })}
        isClosable={true}
        title={"Le service TACCT évolue !"}
        description={
          <>
            <br></br>Pour vous proposer une expérience simplifiée, les plateformes
            TACCT et Facili-TACCT sont désormais regroupées sous une seule
            adresse, tacct.ademe.fr, et un seul nom, TACCT.
          </>
        }
      />
      <div className={styles.heroBlocDesktopOnly}><HeroBloc /></div>
      <div className={styles.heroBlocMobileOnly}><HeroBlocMobile /></div>
      <TacctBloc />
      <DemarcheBloc />
      <PatchEtRessourcesBloc />
      <VerbatimBloc />
    </div>
  );
};

export default Home;
