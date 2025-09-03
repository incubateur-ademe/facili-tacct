'use server';

import { ArreteCatNat, IncendiesForet, RGAdb } from '@/lib/postgres/models';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';
import { ArreteCatNatExport, FeuxForetExport, RGAdbExport } from './types';

export const fetchGestionRisquesForExport = async (
  code: string,
  libelle: string,
  type: string
): Promise<{
  feuxForet: FeuxForetExport[];
  arretesCatnat: ArreteCatNatExport[];
  rga: RGAdbExport[];
}> => {
  const column = ColumnCodeCheck(type);
  const whereCondition = {
    [column]: type === 'petr' || type === 'ept' ? libelle : code
  };

  try {
    // Fetch all data in parallel
    const [feuxForetRaw, arretesCatnatRaw, rgaRaw] = await Promise.all([
      prisma.feux_foret.findMany({ where: whereCondition }),
      prisma.arretes_catnat.findMany({ where: whereCondition }),
      prisma.rga.findMany({ where: whereCondition })
    ]);

    const feuxForet = feuxForetRaw.map((item: IncendiesForet) => ({
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
      nature: item.nature,
      annee: item.annee,
      surface_parcourue_km2: item.surface_parcourue,
      surface_foret_km2: item.surface_foret,
      surface_maquis_garrigues_km2: item.surface_maquis_garrigues,
      autres_surfaces_naturelles_hors_foret_km2:
        item.autres_surfaces_naturelles_hors_foret,
      surfaces_agricoles_km2: item.surfaces_agricoles,
      surfaces_non_boisees_km2: item.surfaces_non_boisees,
      surfaces_non_boisees_artificialisees_km2:
        item.surfaces_non_boisees_artificialisees,
      surfaces_non_boisees_naturelles_km2: item.surfaces_non_boisees_naturelles,
      surface_autres_terres_boisees_km2: item.surface_autres_terres_boisees,
      autres_surfaces_km2: item.autres_surfaces
    }));
    const arretesCatnat = arretesCatnatRaw.map((item: ArreteCatNat) => ({
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
      date_debut_catastrophe: item.dat_deb,
      date_fin_catastrophe: item.dat_fin,
      date_publication_arrete: item.dat_pub_arrete,
      libelle_risque: item.lib_risque_jo
    }));
    const rga = rgaRaw.map((item: RGAdb) => ({
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
      nb_logement: item.nb_logement,
      nb_logement_alea_moyen_fort: item.nb_logement_alea_moyen_fort,
      nb_logement_alea_faible: item.nb_logement_alea_faible,
      nb_logement_sans_alea: item.nb_logement_sans_alea,
      nb_logement_alea_moyen_fort_avant_1920:
        item.nb_logement_alea_moyen_fort_avant_1920,
      nb_logement_alea_moyen_fort_1920_1945:
        item.nb_logement_alea_moyen_fort_1920_1945,
      nb_logement_alea_moyen_fort_1945_1975:
        item.nb_logement_alea_moyen_fort_1945_1975,
      nb_logement_alea_moyen_fort_apres_1975:
        item.nb_logement_alea_moyen_fort_apres_1975,
      nb_logement_alea_faible_avant_1920:
        item.nb_logement_alea_faible_avant_1920,
      nb_logement_alea_faible_1920_1945: item.nb_logement_alea_faible_1920_1945,
      nb_logement_alea_faible_1945_1975: item.nb_logement_alea_faible_1945_1975,
      nb_logement_alea_faible_apres_1975:
        item.nb_logement_alea_faible_apres_1975,
      surface_commune: item.surface_commune,
      surface_alea_faible_commune: item.surface_commune,
      surface_alea_moyen_fort_commune: item.surface_commune,
      part_logement_alea_moyen_fort_avant_1920:
        item.part_logement_alea_moyen_fort_avant_1920,
      part_logement_alea_moyen_fort_1920_1945:
        item.part_logement_alea_moyen_fort_1920_1945,
      part_logement_alea_moyen_fort_1945_1975:
        item.part_logement_alea_moyen_fort_1945_1975,
      part_logement_alea_moyen_fort_apres_1975:
        item.part_logement_alea_moyen_fort_apres_1975,
      part_logement_alea_faible_avant_1920:
        item.part_logement_alea_faible_avant_1920,
      part_logement_alea_faible_1920_1945:
        item.part_logement_alea_faible_1920_1945,
      part_logement_alea_faible_1945_1975:
        item.part_logement_alea_faible_1945_1975,
      part_logement_alea_faible_apres_1975:
        item.part_logement_alea_faible_apres_1975,
      part_alea_faible_commune: item.part_alea_faible_commune,
      part_alea_moyen_fort_commune: item.part_alea_moyen_fort_commune
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
