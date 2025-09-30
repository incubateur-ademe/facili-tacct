import { ConsommationNAFEcolabApi } from '@/lib/postgres/EcolabApi';
import { prisma } from '../redis';

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

  return response;
};

export const GetNAF = async (
  code: string,
  libelle: string,
  type: string
): Promise<ConsommationNAFEcolabApi[]> => {
  const url = `https://api.indicateurs.ecologie.gouv.fr/cubejs-api/v1/load`;
  let listeTerritoires = [];
  console.time(`Query Execution Time CUBEJS NAF GetCommunes ${type}`);

  if (type !== 'epci' && type !== 'departement') {
    const listeCommunes = await prisma.collectivites_searchbar.findMany({
      where: {
        [type === 'petr'
          ? 'libelle_petr'
          : type === 'ept'
            ? 'ept'
            : type === 'pnr'
              ? 'code_pnr'
              : type === 'commune'
                ? 'code_geographique'
                : '']: type === 'petr' || type === 'ept' ? libelle : code
      }
    });
    listeTerritoires = listeCommunes
      .map((el) => el.code_geographique)
      .filter((code) => code !== null);
  } else {
    listeTerritoires = [code];
  }
  console.timeEnd(`Query Execution Time CUBEJS NAF GetCommunes ${type}`);
  console.time('Query Execution Time CUBEJS NAF');

  const request = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${process.env.TEST_ECOLAB_TOKEN}`
    },
    body: JSON.stringify({
      query: {
        measures: ['conso_enaf_com.id_611'],
        filters: [
          {
            member:
              type === 'commune' ||
              type === 'petr' ||
              type === 'ept' ||
              type === 'pnr'
                ? 'conso_enaf_com.geocode_commune'
                : type === 'epci'
                  ? 'conso_enaf_com.geocode_epci'
                  : 'conso_enaf_com.geocode_departement',
            operator: 'equals',
            values: listeTerritoires
          }
          // {
          //   member: 'conso_enaf_com.secteur',
          //   operator: 'equals',
          //   values: ['Route']
          // }
        ],
        timezone: 'UTC',
        dimensions: [
          'conso_enaf_com.secteur',
          type === 'commune' ||
          type === 'petr' ||
          type === 'ept' ||
          type === 'pnr'
            ? 'conso_enaf_com.geocode_commune'
            : type === 'epci'
              ? 'conso_enaf_com.geocode_epci'
              : 'conso_enaf_com.geocode_departement'
        ],
        timeDimensions: [
          {
            dimension: 'conso_enaf_com.date_mesure',
            granularity: 'year'
            // dateRange: ['2023-01-01', '2023-12-01']
          }
        ],
        limit: 50000
        // order: { 'conso_enaf_com.geocode_commune': 'asc' }
      }
    })
  });

  if (!request.ok) {
    throw new Error('Failed to fetch data');
  }

  const response = await request.json();
  console.timeEnd('Query Execution Time CUBEJS NAF');

  return response.data;
};
