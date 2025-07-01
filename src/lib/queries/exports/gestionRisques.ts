'use server';

import { ArreteCatNat, IncendiesForet, RGAdb } from '@/lib/postgres/models';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const fetchGestionRisquesForExport = async (
  code: string,
  libelle: string,
  type: string
): Promise<{ feuxForet: IncendiesForet[]; arretesCatnat: ArreteCatNat[]; rga: RGAdb[] }> => {
  const column = ColumnCodeCheck(type);
  const whereCondition = { [column]: type === 'petr' || type === 'ept' ? libelle : code };

  try {
    // Fetch all data in parallel
    const [feuxForetRaw, arretesCatnatRaw, rgaRaw] = await Promise.all([
      prisma.feux_foret.findMany({ where: whereCondition }),
      prisma.arretes_catnat.findMany({ where: whereCondition }),
      prisma.rga.findMany({ where: whereCondition })
    ]);

    const feuxForet = feuxForetRaw.map(item => ({
      ...item
    }));
    const arretesCatnat = arretesCatnatRaw.map(item => ({
      ...item
    }));
    const rga = rgaRaw.map(item => ({
      ...item
    }));

    return {
      feuxForet,
      arretesCatnat,
      rga
    };
  } catch (error) {
    console.error('Error fetching gestion risques data:', error);
    return {
      feuxForet: [],
      arretesCatnat: [],
      rga: []
    };
  }
};

// code_geographique: item.code_geographique,
//       libelle_geographique: item.libelle_geographique,
//       code_epci: item.epci,
//       libelle_epci: item.libelle_epci,
//       departement: item.departement,
//       libelle_departement: item.libelle_departement,
//       region: item.region,
//       ept: item.ept,
//       code_pnr: item.code_pnr,
//       libelle_pnr: item.libelle_pnr,
//       libelle_petr: item.libelle_petr,
