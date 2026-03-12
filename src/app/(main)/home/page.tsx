'use client';

import Notice from '@codegouvfr/react-dsfr/Notice';
import { useStyles } from 'tss-react/dsfr';
import { TacctBloc } from '../(home)/TacctBloc';
import { DemarcheBloc } from './DemarcheBloc';
import { HeroBloc } from './HeroBloc';
import { HeroBlocMobile } from './HeroBlocMobile';
import { PatchEtRessourcesBloc } from './PatchEtRessourcesBloc';
import { VerbatimBloc } from './VerbatimBloc';
import styles from './home.module.scss';

const HomeTacct = () => {
  const { css } = useStyles();
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

export default HomeTacct;
