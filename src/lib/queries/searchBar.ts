'use server';

import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../generated/client';
import { CollectivitesSearchbar } from '../postgres/models';

const PrismaPostgres = new PostgresClient();

export const GetCollectivite = async (
  collectivite: string
): Promise<CollectivitesSearchbar[]> => {
  try {
    console.time(`Query Execution Time COLLECTIVITE ${collectivite}`);
    const variableCollectivite = '%' + collectivite + '%';
    const variableCollectiviteNumber = collectivite + '%';
    if (isNaN(parseInt(collectivite))) {
      const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
      SELECT 
      search_code,
      coordinates,
      search_libelle,
      code_epci, 
      libelle_epci,
      libelle_commune,
      code_commune,
      departement,
      region
      FROM databases."collectivites_searchbar" WHERE 
        unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) 
        OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', ')) 
        LIMIT 20;`; // OR libelle_epci ILIKE ${variableEpci}
      console.timeEnd(`Query Execution Time COLLECTIVITE ${collectivite}`);
      // console.log(value);
      if (value.length > 0) {
        return value;
      } else {
        const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
        SELECT 
        search_code,
        coordinates,
        search_libelle,
        code_epci, 
        libelle_epci,
        libelle_commune,
        code_commune,
        departement,
        region
        FROM databases."collectivites_searchbar" WHERE 
          unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', ${variableCollectivite}) 
          OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', ')) 
          LIMIT 20;`;
        return value;
      }
    } else if (typeof parseInt(collectivite) === 'number') {
      const value = await PrismaPostgres.collectivites_searchbar.findMany({
        take: 20,
        where: {
          search_code: {
            startsWith: variableCollectiviteNumber
          }
        }
      });
      console.timeEnd(`Query Execution Time COLLECTIVITE ${collectivite}`);
      return value as CollectivitesSearchbar[];
    } else {
      Sentry.captureMessage(`Collectivite ${collectivite} not found`);
      return [
        {
          code_commune: '',
          coordinates: '',
          search_code: '',
          search_libelle: '',
          code_epci: '',
          libelle_commune: '',
          libelle_epci: '',
          departement: '',
          region: ''
        }
      ];
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  }
};
