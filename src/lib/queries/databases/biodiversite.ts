'use server';
import {
  AgricultureBio,
  AOT40,
  Biodiversite,
  ConsommationNAF,
  SurfacesProtegeesByCol
} from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import * as Sentry from '@sentry/nextjs';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GetBiodiversite = async (
  code: string | undefined,
  libelle: string,
  type: string
): Promise<Biodiversite[]> => {
  try {
    console.time('Query Execution Time BIODIVERSITE');
    const colonneTerritoire =
      type === 'epci'
        ? 'epci'
        : type === 'commune'
          ? 'code_geographique'
          : type === 'pnr'
            ? 'code_pnr'
            : 'libelle_petr';
    const value = await PrismaPostgres.biodiversite.findMany({
      where: {
        AND: [
          { [colonneTerritoire]: code ?? libelle },
          {
            type_touristique: {
              not: null
            }
          }
        ]
      }
    });
    console.timeEnd('Query Execution Time BIODIVERSITE');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};

export const GetAgricultureBio = async (
  libelle: string,
  type: string
): Promise<AgricultureBio[]> => {
  const column =
    type === 'petr'
      ? 'libelle_petr'
      : type === 'ept' && eptRegex.test(libelle)
        ? 'ept'
        : type === 'epci' && !eptRegex.test(libelle)
          ? 'libelle_epci'
          : type === 'departement'
            ? 'libelle_departement'
            : 'libelle_geographique';
  try {
    if (type === 'pnr') {
      return [];
    } else {
      console.time('Query Execution Time AGRICULTURE BIO');
      const territoire = await PrismaPostgres.collectivites_searchbar.findMany({
        select: {
          epci: true
        },
        where: {
          AND: [
            {
              epci: { not: null }
            },
            {
              [column]: libelle
            }
          ]
        },
        distinct: ['epci']
      });
      const value = await PrismaPostgres.agriculture_bio.findMany({
        where: {
          epci: {
            in: territoire.map((t) => t.epci) as string[]
          }
        }
      });
      console.timeEnd('Query Execution Time AGRICULTURE BIO');
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};

export const GetSurfacesProtegees = async (
  code: string
): Promise<SurfacesProtegeesByCol[]> => {
  try {
    console.time('Query Execution Time SURFACES PROTEGEES');
    const value = await PrismaPostgres.surfaces_protegees.findMany({
      where: {
        epci: code
      }
    });
    console.timeEnd('Query Execution Time SURFACES PROTEGEES');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};

export const GetConsommationNAF = async (
  code: string,
  libelle: string,
  type: string
): Promise<ConsommationNAF[]> => {
  try {
    console.time('Query Execution Time CONSOMMATION NAF');
    if (type === 'petr' || eptRegex.test(libelle)) {
      const value = await PrismaPostgres.consommation_espaces_naf.findMany({
        where: {
          [type === 'petr' ? 'libelle_petr' : 'ept']: libelle
        }
      });
      console.timeEnd('Query Execution Time CONSOMMATION NAF');
      return value;
    } else if (type === 'commune') {
      const commune = await PrismaPostgres.collectivites_searchbar.findFirst({
        where: {
          code_geographique: code
        }
      });
      const value = await PrismaPostgres.consommation_espaces_naf.findMany({
        where: {
          epci: commune?.epci ?? ''
        }
      });
      console.timeEnd('Query Execution Time CONSOMMATION NAF');
      return value;
    } else {
      const value = await PrismaPostgres.consommation_espaces_naf.findMany({
        where: {
          [type === 'epci'
            ? 'epci'
            : type === 'pnr'
              ? 'code_pnr'
              : type === 'departement'
                ? 'departement'
                : '']: code
        }
      });
      console.timeEnd('Query Execution Time CONSOMMATION NAF');
      return value;
    }
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};

export const GetAOT40 = async (): Promise<AOT40[]> => {
  try {
    console.time('Query Execution Time AOT40');
    const value = await PrismaPostgres.aot_40.findMany();
    console.timeEnd('Query Execution Time AOT40');
    return value;
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    throw new Error('Internal Server Error');
  }
};
