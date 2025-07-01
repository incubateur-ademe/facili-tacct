'use server';

import { ColumnCodeCheck } from '../columns';
import { GetEtatCoursDeau } from '../postgis/etatCoursDeau';
import { prisma } from '../redis';
import {
  EtatCoursDeauExport,
  RessourcesEauExport
} from './types';

export const fetchRessourcesEauForExport = async (
  code: string,
  libelle: string,
  type: string
): Promise<{
  prelevementEau: RessourcesEauExport[];
  qualiteCoursEau: EtatCoursDeauExport[];
}> => {
  const column = ColumnCodeCheck(type);
  const whereCondition = {
    [column]: type === 'petr' || type === 'ept' ? libelle : code
  };

  try {
    // Fetch all data in parallel
    const [prelevementEauRaw, qualiteCoursEauRaw] = await Promise.all([
      prisma.ressources_eau.findMany({ where: whereCondition }),
      GetEtatCoursDeau(code, libelle, type)
    ]);

    const prelevementEau = prelevementEauRaw.map(item => ({
      code_geographique: item.code_geographique,
      libelle_geographique: item.libelle_geographique,
      code_epci: item.epci,
      libelle_epci: item.libelle_epci,
      departement: item.departement,
      libelle_departement: item.libelle_departement,
      region: item.region,
      ept: item.ept,
      code_pnr: item.code_pnr,
      libelle_pnr: item.libelle_pnr,
      libelle_petr: item.libelle_petr,
      sous_champ: item.SOUS_CHAMP,
      libelle_sous_champ: item.LIBELLE_SOUS_CHAMP,
      prelevement_2008: item.A2008,
      prelevement_2009: item.A2009,
      prelevement_2010: item.A2010,
      prelevement_2011: item.A2011,
      prelevement_2012: item.A2012,
      prelevement_2013: item.A2013,
      prelevement_2014: item.A2014,
      prelevement_2015: item.A2015,
      prelevement_2016: item.A2016,
      prelevement_2017: item.A2017,
      prelevement_2018: item.A2018,
      prelevement_2019: item.A2019,
      prelevement_2020: item.A2020

    }));
    const qualiteCoursEau = qualiteCoursEauRaw.map(item => ({
      nom_cours_d_eau: item.name,
      etat_cours_d_eau: item.etateco
      }));

    return {
      prelevementEau,
      qualiteCoursEau
    };
  } catch (error) {
    console.error('Error fetching ressources eau data:', error);
    return {
      prelevementEau: [],
      qualiteCoursEau: []
    };
  }
};
