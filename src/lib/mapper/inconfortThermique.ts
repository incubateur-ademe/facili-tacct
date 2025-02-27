import {
  AgeBatiDto,
  GrandAgeIsolementDto,
  travailExtDto,
  type VegetalisationDto
} from '../dto';
import { type InconfortThermique } from '../postgres/models';

export const vegetalisationMapper = (
  vegetalisation: InconfortThermique
): VegetalisationDto => ({
  code_commune: vegetalisation.code_geographique,
  libelle_geographique: vegetalisation.libelle_geographique,
  epci: vegetalisation.epci,
  libelle_epci: vegetalisation.libelle_epci,
  clc_1_artificialise: Number(vegetalisation.clc_1_artificialise),
  clc_2_agricole: Number(vegetalisation.clc_2_agricole),
  clc_3_foret_semiNaturel: Number(vegetalisation.clc_3_foret_semiNaturel),
  clc_4_humide: Number(vegetalisation.clc_4_humide),
  clc_5_eau: Number(vegetalisation.clc_5_eau),
  superf_choro: Number(vegetalisation.superf_choro)
});

export const ageBatiMapper = (ageBati: InconfortThermique): AgeBatiDto => ({
  code_commune: ageBati.code_geographique,
  libelle_geographique: ageBati.libelle_geographique,
  epci: ageBati.epci,
  libelle_epci: ageBati.libelle_epci,
  age_bati_pre_19: Number(ageBati.age_bati_pre_19),
  age_bati_19_45: Number(ageBati.age_bati_19_45),
  age_bati_46_90: Number(ageBati.age_bati_46_90),
  age_bati_91_05: Number(ageBati.age_bati_91_05),
  age_bati_post06: Number(ageBati.age_bati_post06)
});

export const travailExtMapper = (
  travailExt: InconfortThermique
): travailExtDto => ({
  code_commune: travailExt.code_geographique,
  libelle_geographique: travailExt.libelle_geographique,
  epci: travailExt.epci,
  libelle_epci: travailExt.libelle_epci,
  NA5AZ_sum: Number(travailExt.NA5AZ_sum),
  NA5BE_sum: Number(travailExt.NA5BE_sum),
  NA5FZ_sum: Number(travailExt.NA5FZ_sum),
  NA5GU_sum: Number(travailExt.NA5GU_sum),
  NA5OQ_sum: Number(travailExt.NA5OQ_sum)
});

export const grandAgeIsolementMapper = (
  grandAgeIsolement: InconfortThermique
): GrandAgeIsolementDto => ({
  code_commune: grandAgeIsolement.code_geographique,
  libelle_geographique: grandAgeIsolement.libelle_geographique,
  epci: grandAgeIsolement.epci,
  libelle_epci: grandAgeIsolement.libelle_epci,
  P20_POP80P: Number(grandAgeIsolement['P20_POP80P']),
  P20_POP80P_PSEUL: Number(grandAgeIsolement['P20_POP80P_PSEUL']),
  under_4_sum_1968: Number(grandAgeIsolement.under_4_sum_1968),
  to_80_sum_1968: Number(grandAgeIsolement.to_80_sum_1968),
  over_80_sum_1968: Number(grandAgeIsolement.over_80_sum_1968),
  under_4_sum_1975: Number(grandAgeIsolement.under_4_sum_1975),
  to_80_sum_1975: Number(grandAgeIsolement.to_80_sum_1975),
  over_80_sum_1975: Number(grandAgeIsolement.over_80_sum_1975),
  under_4_sum_1982: Number(grandAgeIsolement.under_4_sum_1982),
  to_80_sum_1982: Number(grandAgeIsolement.to_80_sum_1982),
  over_80_sum_1982: Number(grandAgeIsolement.over_80_sum_1982),
  under_4_sum_1990: Number(grandAgeIsolement.under_4_sum_1990),
  to_80_sum_1990: Number(grandAgeIsolement.to_80_sum_1990),
  over_80_sum_1990: Number(grandAgeIsolement.over_80_sum_1990),
  under_4_sum_1999: Number(grandAgeIsolement.under_4_sum_1999),
  to_80_sum_1999: Number(grandAgeIsolement.to_80_sum_1999),
  over_80_sum_1999: Number(grandAgeIsolement.over_80_sum_1999),
  under_4_sum_2009: Number(grandAgeIsolement.under_4_sum_2009),
  to_80_sum_2009: Number(grandAgeIsolement.to_80_sum_2009),
  over_80_sum_2009: Number(grandAgeIsolement.over_80_sum_2009),
  under_4_sum_2014: Number(grandAgeIsolement.under_4_sum_2014),
  to_80_sum_2014: Number(grandAgeIsolement.to_80_sum_2014),
  over_80_sum_2014: Number(grandAgeIsolement.over_80_sum_2014),
  under_4_sum_2020: Number(grandAgeIsolement.under_4_sum_2020),
  to_80_sum_2020: Number(grandAgeIsolement.to_80_sum_2020),
  over_80_sum_2020: Number(grandAgeIsolement.over_80_sum_2020)
});
