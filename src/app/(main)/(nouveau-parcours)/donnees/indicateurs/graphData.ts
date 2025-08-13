import couleurs from '@/design-system/couleurs';
import { GrandAgeIsolementDto } from '@/lib/dto';
import { Sum } from '@/lib/utils/reusableFunctions/sum';
import { sumProperty } from './fonctions';

export const GrandAgeLineChartYData = (
  grandAgeIsolementTerritoire: GrandAgeIsolementDto[]
) => {
  return {
    over_80_1968_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1968')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1968') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1968'))
    ).toFixed(2),
    over_80_1975_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1975')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1975') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1975'))
    ).toFixed(2),
    over_80_1982_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1982')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1982') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1982'))
    ).toFixed(2),
    over_80_1990_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1990')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1990') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1990'))
    ).toFixed(2),
    over_80_1999_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_1999')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_1999') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_1999'))
    ).toFixed(2),
    over_80_2009_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_2009')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_2009') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_2009'))
    ).toFixed(2),
    over_80_2014_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_2014')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_2014') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_2014'))
    ).toFixed(2),
    over_80_2020_percent: (
      (100 * sumProperty(grandAgeIsolementTerritoire, 'over_80_sum_2020')) /
      (sumProperty(grandAgeIsolementTerritoire, 'to_80_sum_2020') +
        sumProperty(grandAgeIsolementTerritoire, 'under_4_sum_2020'))
    ).toFixed(2)
  };
};

export const EmploisEnExterieurPieChartData = (sums: {
  [key: string]: number;
}) => [
  {
    id: 'Agriculture, sylviculture et pêche',
    label: 'Agriculture',
    count: sums.sumAgriculture,
    value: Number(
      ((100 * sums.sumAgriculture) / Sum(Object.values(sums))).toFixed(1)
    )
  },
  {
    id: 'Industrie manufacturière, industries extractives et autres',
    label: 'Industries',
    count: sums.sumIndustries,
    value: Number(
      ((100 * sums.sumIndustries) / Sum(Object.values(sums))).toFixed(1)
    )
  },
  {
    id: 'Construction',
    label: 'Construction',
    count: sums.sumConstruction,
    value: Number(
      ((100 * sums.sumConstruction) / Sum(Object.values(sums))).toFixed(1)
    )
  },
  {
    id: 'Commerce, transports et services divers',
    label: 'Commerces et transports',
    count: sums.sumCommerce,
    value: Number(
      ((100 * sums.sumCommerce) / Sum(Object.values(sums))).toFixed(1)
    )
  },
  {
    id: 'Administration publique, enseignement, santé humaine et action sociale',
    label: 'Administrations',
    count: sums.sumAdministration,
    value: Number(
      ((100 * sums.sumAdministration) / Sum(Object.values(sums))).toFixed(1)
    )
  }
];

export const DateConstructionResidencesBarChartData = (averages: {
  [key: string]: number;
}) => [
  {
    periode: 'Avant 1919',
    'Votre collectivité': averages.averageAgeBatiPre19.toFixed(1),
    'Votre collectiviteColor': couleurs.graphiques.bleu[1],
    France: 20.5,
    FranceColor: couleurs.graphiques.rouge[3]
  },
  {
    periode: '1919-1945',
    'Votre collectivité': averages.averageAgeBati1945.toFixed(1),
    'Votre collectiviteColor': couleurs.graphiques.bleu[1],
    France: 9.2,
    FranceColor: couleurs.graphiques.rouge[3]
  },
  {
    periode: '1946-1990',
    'Votre collectivité': averages.averageAgeBati4690.toFixed(1),
    'Votre collectiviteColor': couleurs.graphiques.bleu[1],
    France: 43.4,
    FranceColor: couleurs.graphiques.rouge[3]
  },
  {
    periode: '1991-2005',
    'Votre collectivité': averages.averageAgeBati9105.toFixed(1),
    'Votre collectiviteColor': couleurs.graphiques.bleu[1],
    France: 15.5,
    FranceColor: couleurs.graphiques.rouge[3]
  },
  {
    periode: 'Après 2006',
    'Votre collectivité': averages.averageAgeBatiPost06.toFixed(1),
    'Votre collectiviteColor': couleurs.graphiques.bleu[1],
    France: 11.4,
    FranceColor: couleurs.graphiques.rouge[3]
  }
];
