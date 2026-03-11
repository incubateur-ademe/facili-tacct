'use client';

import { Patch4Bloc } from '../(home)/Patch4Bloc';
import { TacctBloc } from '../(home)/TacctBloc';
import { BoiteOutilsBloc } from './BoiteOutilsBloc';
import { DemarcheBloc } from './DemarcheBloc';
import { HeroBloc } from './HeroBloc';
import { VerbatimBloc } from './VerbatimBloc';

const HomeTacct = () => {
  return (
    <div>
      <HeroBloc />
      <TacctBloc />
      <DemarcheBloc />
      <BoiteOutilsBloc />
      <Patch4Bloc />
      <VerbatimBloc />
    </div>
  );
};

export default HomeTacct;
