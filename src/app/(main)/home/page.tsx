'use client';

import { TacctBloc } from '../(home)/TacctBloc';
import { DemarcheBloc } from './DemarcheBloc';
import { HeroBloc } from './HeroBloc';
import { PatchEtRessourcesBloc } from './PatchEtRessourcesBloc';
import { VerbatimBloc } from './VerbatimBloc';

const HomeTacct = () => {
  return (
    <div>
      <HeroBloc />
      <TacctBloc />
      <DemarcheBloc />
      <PatchEtRessourcesBloc />
      <VerbatimBloc />
    </div>
  );
};

export default HomeTacct;
