interface GrandAge {
    "": number,
    "Code géographique": number,
    "Libellé géographique": string,
    "EPCI - Métropole": number,
    "Libellé de l'EPCI / Métropole": string,
    "Département": number,
    "Région": number,
    "Libellé de commune": string,
    "under_4_sum_1968": number,
    "4_to_75_sum_1968": number,
    "over_75_sum_1968": number,
    "under_4_sum_1975": number
    "4_to_75_sum_1975": number,
    "over_75_sum_1975": number,
    "under_4_sum_1982": number
    "4_to_75_sum_1982": number,
    "over_75_sum_1982": number,
    "under_4_sum_1990": number,
    "4_to_75_sum_1990": number,
    "over_75_sum_1990": number,
    "under_4_sum_1999": number
    "4_to_75_sum_1999": number,
    "over_75_sum_1999": number,
    "under_4_sum_2009": number
    "4_to_75_sum_2009": number,
    "over_75_sum_2009": number,
    "under_4_sum_2014": number,
    "4_to_75_sum_2014": number,
    "over_75_sum_2014": number,
    "under_4_sum_2020": number,
    "4_to_75_sum_2020": number,
    "over_75_sum_2020": number
  }

function sumProperty (items: GrandAge[], prop: any) {
  return items.reduce(function(a, b) {
      return a + b[prop];
  }, 0);
};


const columns_1968 = [
    'under_4_sum_1968',
    '4_to_75_sum_1968',
    'over_75_sum_1968',
];

const columns_1975 = [
    'under_4_sum_1975',
    '4_to_75_sum_1975',
    'over_75_sum_1975',
];

const columns_1982 = [
    'under_4_sum_1982',
    '4_to_75_sum_1982',
    'over_75_sum_1982',
];

const columns_1990 = [
    'under_4_sum_1990',
    '4_to_75_sum_1990',
    'over_75_sum_1990',
];

const columns_2009 = [
    'under_4_sum_2009',
    '4_to_75_sum_2009',
    'over_75_sum_2009',
];

const columns_2014 = [
    'under_4_sum_2014',
    '4_to_75_sum_2014',
    'over_75_sum_2014',
];

const columns_2020 = [
    'under_4_sum_2020',
    '4_to_75_sum_2020',
    'over_75_sum_2020',
];

export const GrandAgeAlgo = (data: GrandAge[]) => {
    const values_2020 = data.map(row => [...columns_2020].reduce((acc, v) => ({ ...acc, [v]: row[v] }), {}));
    console.log('values_2020', values_2020)
    const sum_2020 = Object.values(values_2020[0]).reduce((partialSum: number, a: number) => partialSum + a, 0)
    // const sum_2020 = sumProperty(Object.values(values_2020), 'NA5FZ_sum');

    console.log('sum2020', sum_2020)
    return values_2020;
}
