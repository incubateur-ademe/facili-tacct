'use server';

import * as Sentry from '@sentry/nextjs';
import { CollectivitesSearchbar } from '../postgres/models';
import { Commune, Departement, EPCI, PETR, PNR } from './territoiresQueries';

export const GetCollectivite = async (
  typeTerritoire: string | undefined,
  collectivite: string
): Promise<CollectivitesSearchbar[]> => {
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
      const variableCollectivite = collectivite + '%';
      const value = await Commune(variableCollectivite);
      console.timeEnd(`Query Execution Time ${typeTerritoire} ${collectivite}`);
      return value;
    } else if (typeTerritoire === 'departement') {
      const variableCollectivite = collectivite + '%';
      const value = await Departement(variableCollectivite);
      console.timeEnd(`Query Execution Time ${typeTerritoire} ${collectivite}`);
      return value;
    } else {
      return [
        {
          code_commune: '',
          search_code: '',
          search_libelle: '',
          code_epci: '',
          libelle_commune: '',
          libelle_epci: '',
          departement: '',
          region: '',
        }
      ];
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    return [];
  }
};
