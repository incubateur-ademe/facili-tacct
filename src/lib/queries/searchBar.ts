'use server';

import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../generated/client';
import { CollectivitesSearchbar } from '../postgres/models';
import { Commune, EPCI, PETR, PNR } from './territoiresQueries';

const PrismaPostgres = new PostgresClient();

export const GetCollectivite = async (
  typeTerritoire: string | undefined,
  collectivite: string
): Promise<CollectivitesSearchbar[]> => {
  console.log('typeTerritoire', typeTerritoire);
  try {
    console.time(`Query Execution Time ${typeTerritoire} ${collectivite}`);

    if (typeTerritoire === 'pnr') {
      const variableCollectivite = '%' + collectivite + '%';
      const value = await PNR(variableCollectivite);
      console.timeEnd(`Query Execution Time ${typeTerritoire} ${collectivite}`);
      return value;
    } else if (typeTerritoire === 'petr') {
      const variableCollectivite = '%' + collectivite + '%';
      const value = await PETR(variableCollectivite);
      console.timeEnd(`Query Execution Time ${typeTerritoire} ${collectivite}`);
      return value;
    } else if (typeTerritoire === 'epci') {
      const variableCollectivite = '%' + collectivite + '%';
      const value = await EPCI(variableCollectivite);
      console.timeEnd(`Query Execution Time ${typeTerritoire} ${collectivite}`);
      return value;
    } else if (typeTerritoire === 'commune') {
      const variableCollectivite = '%' + collectivite + '%';
      const value = await Commune(variableCollectivite);
      console.timeEnd(`Query Execution Time ${typeTerritoire} ${collectivite}`);
      return value;
    } else {
      return [
        {
          code_geographique: '',
          search_code: '',
          search_libelle: '',
          epci: '',
          libelle_geographique: '',
          libelle_epci: '',
          departement: '',
          region: '',
          ept: '',
          libelle_petr: '',
          libelle_pnr: '',
          code_pnr: ''
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
