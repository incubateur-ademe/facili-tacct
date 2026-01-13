'use server';

import { RGAdb } from '../postgres/models';
import { prisma as PrismaPostgres } from './db';

// quand un epci est à cheval entre plusieurs départements, on retourne les départements de l'epci
export const CheckMultipleDepartementsInEpci = async (
  code: string,
  type: 'epci'
): Promise<RGAdb[] | unknown> => {
  try {
    if (type !== 'epci') {
      throw new Error("Invalid type, expected 'epci'");
    }
    // Get all unique departements for the given epci code
    const departements =
      await PrismaPostgres.databases_v2_table_territoires.findMany({
        where: { epci: code },
        select: { libelle_departement: true },
        distinct: ['libelle_departement']
      });
    // Return the list of unique departements (as strings)
    const departementList = departements.map((d) => d.libelle_departement);
    return departementList;
  } catch (error) {
    console.error('Error in CheckMultipleDepartementsInEpci:', error);
    return error;
  }
};
