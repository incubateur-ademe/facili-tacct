'use server';

import { ColumnCodeCheck, ColumnLibelleCheck } from '../columns';
import { prisma } from '../redis';
import { AgricultureBioExport, AOT40Export, ConsommationNAFExport, QualiteSitesBaignadeExport } from './types';

export const fetchBiodiversiteForExport = async (
  code: string,
  libelle: string,
  type: string
): Promise<{
  espacesNaf: ConsommationNAFExport[];
  agricultureBio: AgricultureBioExport[];
  aot40: AOT40Export[];
  qualiteSitesBaignade: QualiteSitesBaignadeExport[];
}> => {
  const column = ColumnCodeCheck(type);
  const columnLibelle = ColumnLibelleCheck(type);

  const whereCondition = {
    [column]: type === 'petr' || type === 'ept' ? libelle : code
  };

  try {
    const departement = await prisma.collectivites_searchbar.findMany({
      where: {
        AND: [
          {
            departement: { not: null }
          },
          {
            [columnLibelle]: libelle
          }
        ]
      },
      distinct: ['departement']
    });
    // Fetch all data in parallel
    const [
      espacesNafRaw,
      agricultureBioRaw,
      aot40Raw,
      qualiteSitesBaignadeRaw
    ] = await Promise.all([
      prisma.consommation_espaces_naf.findMany({ where: whereCondition }),
      type === 'epci'
        ? prisma.agriculture_bio.findMany({ where: { epci: code } })
        : Promise.resolve([]),
      prisma.aot_40.findMany(),
      prisma.qualite_sites_baignade.findMany({
        where: {
          DEP_NUM: {
            in: departement
              .map((d) => d.departement)
              .filter((d): d is string => d !== null)
          }
        }
      })
    ]);

    const espacesNaf = espacesNafRaw.map(({ index, ...rest }) => ({
      ...rest
    }));
    const agricultureBio = agricultureBioRaw.map(({ index, ...rest }) => ({
      ...rest
    }));
    const aot40 = aot40Raw.map(({ index, ...rest }) => ({
      ...rest
    }));
    const qualiteSitesBaignade = qualiteSitesBaignadeRaw.map(item => ({
      libelle_geographique: item.COMMUNE,
      libelle_departement: item.DEP_NOM,
      departement: item.DEP_NUM,
      latitude: item.LAT,
      longitude: item.LONG,
      point_d_eau: item.POINT,
      qualite_eau_2013: item.QEB_2013,
      qualite_eau_2014: item.QEB_2014,
      qualite_eau_2015: item.QEB_2015,
      qualite_eau_2016: item.QEB_2016,
      qualite_eau_2017: item.QEB_2017,
      qualite_eau_2018: item.QEB_2018,
      qualite_eau_2019: item.QEB_2019,
      qualite_eau_2020: item.QEB_2020,
      type_d_eau: item.TYPE
    })
    );
    return {
      espacesNaf,
      agricultureBio,
      aot40,
      qualiteSitesBaignade
    };
  } catch (error) {
    console.error('Error fetching biodiversite data:', error);
    return {
      espacesNaf: [],
      agricultureBio: [],
      aot40: [],
      qualiteSitesBaignade: []
    };
  }
};
