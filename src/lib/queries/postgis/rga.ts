'use server';

import { RGACarte } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import { prisma } from '../redis';

export const GetRGACarte = async (
  code: string,
  libelle: string,
  type: string
): Promise<RGACarte[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      console.log(
        'GetRGACarte: Timeout reached (5 seconds), returning empty array.'
      );
      resolve([]);
    }, 5000)
  );
  const dbQuery = (async () => {
    try {
      if (type === 'commune') {
        const commune = await prisma.$queryRaw<RGACarte[]>`
          SELECT
          code_geographique,
          alea,
          ST_AsGeoJSON(geometry) geometry
          FROM postgis."rga" 
          WHERE code_geographique=${code} LIMIT 1;`;
        return commune;
      } else if (type === 'epci' && !eptRegex.test(libelle)) {
        const communes = await prisma.collectivites_searchbar.findMany({
          where: {
            epci: code
          }
        });
        const epci = await prisma.$queryRaw<RGACarte[]>`
          SELECT
          code_geographique,
          alea,
          ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."rga" 
          WHERE code_geographique = ANY(${communes.map(c => c.code_geographique)})
          GROUP BY code_geographique, alea;`;
        return epci;

      } else return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
