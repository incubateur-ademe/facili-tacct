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
          },
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
          },
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
        measures: ['surfaces_agricoles.id_611'],
        filters: [
          {
            member: 'surfaces_agricoles.geocode_epci',
            operator: 'equals',
            values: ['200040350']
          },
        ],
        timezone: 'UTC',
        dimensions: ['surfaces_agricoles.geocode_epci'],
        timeDimensions: [
          {
            dimension: 'surfaces_agricoles.date_mesure',
            granularity: 'year',
            // dateRange: ['2023-01-01', '2023-12-01']
          }
        ],
        order: { 'surfaces_agricoles.geocode_epci': 'asc' }
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
