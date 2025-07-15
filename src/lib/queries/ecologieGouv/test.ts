export const GetPartSurfaceBio = async () => {
  const url = `https://api.indicateurs.ecologie.gouv.fr/cubejs-api/v1/load`;
  console.time('Query Execution Time CUBEJS');
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.TEST_ECOLAB_TOKEN}`
    },
    body: JSON.stringify({
      query: {
        measures: ['surface_bio_epci.id_23'],
        filters: [
          {
            member: 'surface_bio_epci.geocode_epci',
            operator: 'equals',
            values: ['200067106']
          }
        ],
        timezone: 'UTC',
        dimensions: ['surface_bio_epci.geocode_epci'],
        timeDimensions: [
          {
            dimension: 'surface_bio_epci.date_mesure',
            granularity: 'year',
            dateRange: ['2023-01-01', '2023-12-01']
          }
        ],
        order: { 'surface_bio_epci.geocode_epci': 'asc' }
      }
    })
  });

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const response: Response = await request.json();
  console.timeEnd('Query Execution Time CUBEJS');

  // console.log("response", response.data);

  return response;
};

export const GetSurfaceBio = async () => {
  const url = `https://api.indicateurs.ecologie.gouv.fr/cubejs-api/v1/load`;
  console.time('Query Execution Time CUBEJS');
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.TEST_ECOLAB_TOKEN}`
    },
    body: JSON.stringify({
      query: {
        measures: ['surface_bio_epci.id_606'],
        filters: [
          {
            member: 'surface_bio_epci.geocode_epci',
            operator: 'equals',
            values: ['200067106']
          }
        ],
        timezone: 'UTC',
        dimensions: ['surface_bio_epci.geocode_epci'],
        timeDimensions: [
          {
            dimension: 'surface_bio_epci.date_mesure',
            granularity: 'year',
            dateRange: ['2023-01-01', '2023-12-01']
          }
        ],
        order: { 'surface_bio_epci.geocode_epci': 'asc' }
      }
    })
  });

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const response: Response = await request.json();
  console.timeEnd('Query Execution Time CUBEJS');

  // console.log("response", response.data);

  return response;
};

export const GetNAF = async () => {
  const url = `https://api.indicateurs.ecologie.gouv.fr/cubejs-api/v1/load`;
  console.time('Query Execution Time CUBEJS');
  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.TEST_ECOLAB_TOKEN}`
    },
    body: JSON.stringify({
      query: {
        measures: ['conso_enaf.id_611'],
        filters: [
          {
            member: 'conso_enaf.geocode_epci',
            operator: 'equals',
            values: ['200010650']
            // values: [Array]
          },
          {
            member: 'conso_enaf.secteur',
            operator: 'equals',
            values: ['Route']
          }
        ],
        timezone: 'UTC',
        dimensions: ['conso_enaf.geocode_epci', 'conso_enaf.secteur'],
        timeDimensions: [
          {
            dimension: 'conso_enaf.date_mesure',
            granularity: 'year',
            // dateRange: ['2023-01-01', '2023-12-01']
          }
        ],

        order: { 'conso_enaf.geocode_epci': 'asc' }
      }
    })
  });

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const response: Response = await request.json();
  console.timeEnd('Query Execution Time CUBEJS');

  // console.log("response", response.data);

  return response;
};
