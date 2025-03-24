import { PrismaClient as PostgresClient } from '../../generated/client';
import { CollectivitesSearchbar } from '../postgres/models';

const PrismaPostgres = new PostgresClient();

export const PNR = async (variableCollectivite: string) => {
  const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
    SELECT 
    search_code,
    search_libelle,
    epci, 
    libelle_epci,
    libelle_geographique,
    code_geographique,
    departement,
    libelle_departement,
    region,
    ept,
    libelle_petr,
    libelle_pnr,
    code_pnr
    FROM databases."collectivites_searchbar" WHERE (code_geographique IS NULL AND libelle_pnr IS NOT NULL) AND 
      (
        unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) 
        OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', '))
        OR unaccent('unaccent', search_code) ILIKE unaccent('unaccent', ${variableCollectivite})
      )
      LIMIT 20;
    `;
  return value;
};

export const PETR = async (variableCollectivite: string) => {
  const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
    SELECT 
    search_code,
    search_libelle,
    epci, 
    libelle_epci,
    libelle_geographique,
    code_geographique,
    departement,
    libelle_departement,
    region,
    ept,
    libelle_petr,
    libelle_pnr,
    code_pnr
    FROM databases."collectivites_searchbar" WHERE (code_geographique IS NULL AND libelle_petr IS NOT NULL) AND 
      (
        unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) 
        OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', '))
      )
      LIMIT 20;
    `;
  return value;
};

export const EPCI = async (variableCollectivite: string) => {
  const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
    SELECT 
    search_code,
    search_libelle,
    epci, 
    libelle_epci,
    libelle_geographique,
    code_geographique,
    departement,
    libelle_departement,
    region,
    ept,
    libelle_petr,
    libelle_pnr,
    code_pnr
    FROM databases."collectivites_searchbar" WHERE 
      (
        code_geographique IS NULL 
        AND (libelle_epci IS NOT NULL OR ept IS NOT NULL)
      ) 
      AND 
      (
        unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) 
        OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', '))
        OR unaccent('unaccent', search_code) ILIKE unaccent('unaccent', ${variableCollectivite})
      )
      LIMIT 20;
    `;
  return value;
};

export const Commune = async (variableCollectivite: string) => {
  const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
    SELECT 
    search_code,
    search_libelle,
    epci, 
    libelle_epci,
    libelle_geographique,
    code_geographique,
    departement,
    libelle_departement,
    region,
    ept,
    libelle_petr,
    libelle_pnr,
    code_pnr
    FROM databases."collectivites_searchbar" WHERE (code_geographique IS NOT NULL) AND 
      (
        unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) 
        OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', '))
        OR unaccent('unaccent', search_code) ILIKE unaccent('unaccent', ${variableCollectivite})
      )
      LIMIT 20;
    `;
  return value;
};

export const Departement = async (variableCollectivite: string) => {
  const value = await PrismaPostgres.$queryRaw<CollectivitesSearchbar[]>`
    SELECT 
    search_code,
    search_libelle,
    epci, 
    libelle_epci,
    libelle_geographique,
    code_geographique,
    departement,
    libelle_departement,
    region,
    ept,
    libelle_petr,
    libelle_pnr,
    code_pnr
    FROM databases."collectivites_searchbar" WHERE (departement IS NOT NULL AND code_geographique IS NULL) AND 
      (
        unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', '-')) 
        OR unaccent('unaccent', search_libelle) ILIKE unaccent('unaccent', replace(${variableCollectivite}, ' ', ', '))
        OR unaccent('unaccent', search_code) ILIKE unaccent('unaccent', ${variableCollectivite})
      )
      LIMIT 20;
    `;
  return value;
};
