'use client';

import { DemarcheBloc } from "../(main)/(home)/DemarcheBloc";
import { HeroBloc } from "../(main)/(home)/HeroBloc";
import { HeroBlocMobile } from "../(main)/(home)/HeroBlocMobile";
import { PatchEtRessourcesBloc } from "../(main)/(home)/PatchEtRessourcesBloc";
import { TacctBloc } from "../(main)/(home)/TacctBloc";
import { VerbatimBloc } from "../(main)/(home)/VerbatimBloc";
import styles from "../(main)/(home)/home.module.scss";

const Home = () => {
  return (
    <div>
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
