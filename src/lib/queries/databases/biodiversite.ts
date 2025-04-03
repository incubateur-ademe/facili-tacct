'use server';
import {
  AgricultureBio,
  AOT40,
  Biodiversite,
  ConsommationNAF,
  SurfacesProtegeesByCol
} from '@/lib/postgres/models';
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
    process.exit(1);
  }
};

export const GetAgricultureBio = async (
  code: string,
  libelle: string,
  type: string
): Promise<AgricultureBio[]> => {
  try {
    console.time('Query Execution Time AGRICULTURE BIO');
    const re = new RegExp('T([1-9]|1[0-2])\\b'); //check if T + nombre entre 1 et 12
    if (type === 'ept' && re.test(libelle)) {
      //pour les ept
      const value = await PrismaPostgres.agriculture_bio.findMany({
        where: {
          epci: '200054781'
        }
      });
      console.timeEnd('Query Execution Time AGRICULTURE BIO');
      return value;
    } else if (type === 'commune') {
      const commune = await PrismaPostgres.collectivites_searchbar.findFirst({
        where: {
          code_geographique: code
        }
      });
      const value = await PrismaPostgres.agriculture_bio.findMany({
        where: {
          epci: commune?.epci ?? ''
        }
      });
      console.timeEnd('Query Execution Time AGRICULTURE BIO');
      return value;
    } else if (type === 'epci' && !re.test(libelle)) {
      const value = await PrismaPostgres.agriculture_bio.findMany({
        where: {
          epci: code
        }
      });
      console.timeEnd('Query Execution Time AGRICULTURE BIO');
      return value;
    } else return [];
  } catch (error) {
    console.error(error);
    Sentry.captureException(error);
    await PrismaPostgres.$disconnect();
    process.exit(1);
  } finally {
    await PrismaPostgres.$disconnect();
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
    process.exit(1);
  }
};

export const GetConsommationNAF = async (
  code: string,
  libelle: string,
  type: string
): Promise<ConsommationNAF[]> => {
  try {
    const re = new RegExp('T([1-9]|1[0-2])\\b');
    console.time('Query Execution Time CONSOMMATION NAF');
    if (type === 'petr' || re.test(libelle)) {
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
    process.exit(1);
  } finally {
    await PrismaPostgres.$disconnect();
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
    process.exit(1);
  } finally {
    await PrismaPostgres.$disconnect();
  }
};
