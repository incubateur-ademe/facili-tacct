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

// const sumProperty = (items: GrandAge[], prop: any) => {
//   return items.reduce(function(a, b) {
//       return a + b[prop];
//   }, 0);
// };

type Element = {
    [key: string]: number,
}
type Percent = {
    "id": string;
    "value": number;
}

const average = (array: number[]) => array.reduce((a: number, b: number) => a + b) / array.length;

export const GrandAgeAlgo = (data: GrandAge[]) => {
    const percent_75_allRows: Percent[] = [];
    const final_percents = [];
    const years = ['1968', '1975', '1982', '1990', '1999', '2009', '2014', '2020'];
    let i = 0;

    while (i < years.length) {
        const year = years[i];
        const columns = [
            'under_4_sum_' + year.toString(),
            '4_to_75_sum_' + year.toString(),
            'over_75_sum_' + year.toString(),
        ];
        const values = data.map((row: GrandAge | any) => [...columns].reduce((acc, v) => ({ ...acc, [v]: row[v] }), {})); //REPLACE
        values.forEach((el: Element) => {
            let sum_1 = Object.values(el).reduce((partialSum, a) => Number(partialSum) + Number(a), 0);
            let textColumn: string = 'over_75_sum_' + year.toString();
            let percent_75_more = 100 * el[textColumn] / Number(sum_1);
            percent_75_allRows.push({ "id": year.toString(), "value": percent_75_more});
        });
        i++;
    }

    const groupBy = Object.groupBy(percent_75_allRows, ({ id }) => id);
    for (let step = 0; step < Object.values(groupBy).length; step++) {
        const final = Object.values(groupBy)[step]!.map(e => e.value);
        let mean_of_percents = average(final);
        final_percents.push(mean_of_percents)
      }

    return final_percents;
}
