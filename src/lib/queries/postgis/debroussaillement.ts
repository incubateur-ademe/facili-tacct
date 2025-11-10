'use server';

import { CarteCommunes, DebroussaillementModel } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import { prisma } from '../redis';

export const GetDebroussaillement = async (
  code: string,
  libelle: string,
  type: string
): Promise<DebroussaillementModel[]> => {
  const timeoutPromise = new Promise<DebroussaillementModel[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 20000)
  );
  const dbQuery: Promise<DebroussaillementModel[]> = (async () => {
    try {
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      if (type === 'commune') {
        const commune = await prisma.$queryRaw<CarteCommunes[]>`
          SELECT
          code_geographique,
          ST_AsText(geometry) geometry
          FROM postgis."debroussaillement" 
          WHERE code_geographique=${code} LIMIT 1;`;
        if (commune.length !== 0) {
          const debroussaillement = await prisma.$queryRaw<
            DebroussaillementModel[]
          >`
            SELECT
              code_geographique,
              ST_AsGeoJSON(ST_Union(geometry)) as geometry
            FROM postgis."debroussaillement"
            WHERE code_geographique = ANY (
              SELECT code_geographique
              FROM databases."collectivites_searchbar"
              WHERE epci = (
                SELECT epci
                FROM databases."collectivites_searchbar"
                WHERE code_geographique = ${code}
                LIMIT 1
              )
            )
            GROUP BY code_geographique;
          `;
          return debroussaillement;
        } else return [];
      } else if (type === 'epci' && !eptRegex.test(libelle)) {
        const epci = await prisma.$queryRaw<DebroussaillementModel[]>`
          SELECT
            code_geographique,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."debroussaillement"
            WHERE epci = ${code}
            GROUP BY code_geographique
        `;
        return epci;
      } else if (type === 'pnr') {
        const pnr = await prisma.$queryRaw<DebroussaillementModel[]>`
          SELECT
            code_geographique,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."debroussaillement"
          WHERE code_pnr = ${code}
          GROUP BY code_geographique
        `;
        return pnr;
      } else if (type === "petr") {
        const petr = await prisma.$queryRaw<DebroussaillementModel[]>`
          SELECT
            code_geographique,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."debroussaillement"
            WHERE petr = ${libelle}
            GROUP BY code_geographique
        `;
        return petr;
      } else if (type === "departement") {
        const departement = await prisma.$queryRaw<DebroussaillementModel[]>`
          SELECT
            code_geographique,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."debroussaillement"
            WHERE departement = ${code}
            GROUP BY code_geographique
        `;
        return departement;
      } else if (type === "ept") {
        const ept = await prisma.$queryRaw<DebroussaillementModel[]>`
          SELECT
            code_geographique,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."debroussaillement"
            WHERE ept = ${libelle}
            GROUP BY code_geographique
        `;
        return ept;
      } return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
