'use server';

import * as Sentry from '@sentry/nextjs';
import { CollectivitesSearchbar } from '../postgres/models';
import { Commune, Departement, EPCI, PETR, PNR } from './territoiresQueries';

export const GetCollectivite = async (
  typeTerritoire: string | undefined,
  collectivite: string
): Promise<CollectivitesSearchbar[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 1000)
  );
  const dbQuery = (async () => {
    try {
      if (typeTerritoire === 'pnr') {
        const variableCollectivite = '%' + collectivite + '%';
        const value = await PNR(variableCollectivite);
        return value;
      } else if (typeTerritoire === 'petr') {
        const variableCollectivite = '%' + collectivite + '%';
        const value = await PETR(variableCollectivite);
        return value;
      } else if (typeTerritoire === 'epci') {
        const variableCollectivite = '%' + collectivite + '%';
        const value = await EPCI(variableCollectivite);
        return value;
      } else if (typeTerritoire === 'commune') {
        const variableCollectivite = collectivite + '%';
        const value = await Commune(variableCollectivite);
        return value;
      } else if (typeTerritoire === 'departement') {
        const variableCollectivite = collectivite + '%';
        const value = await Departement(variableCollectivite);
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
            libelle_departement: '',
            ept: '',
            code_pnr: '',
            libelle_pnr: '',
            libelle_petr: '',
            coordinates: ''
          }
        ];
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      // PrismaPostgres.$disconnect();
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
