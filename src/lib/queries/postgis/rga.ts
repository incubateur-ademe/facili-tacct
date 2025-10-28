'use server';

import { RGACarte } from '@/lib/postgres/models';
import { eptRegex } from '@/lib/utils/regex';
import { prisma } from '../redis';
const stringifyWithBigInt = (data: any) => {
  return JSON.stringify(data, (key, value) =>
    typeof value === 'bigint' ? value.toString() : value
  );
};
export const GetRGACarte = async (
  code: string,
  libelle: string,
  type: string
): Promise<RGACarte[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      console.log(
        'GetRGACarte: Timeout reached (15 seconds), returning empty array.'
      );
      resolve([]);
    }, 15000)
  );
  const dbQuery = (async () => {
    try {
      if (
        !libelle ||
        !type ||
        (!code && type !== 'petr') ||
        libelle === 'null' ||
        (code === 'null' && type !== 'petr')
      )
        return [];
      else if (type === 'commune') {
        const commune = await prisma.$queryRaw<RGACarte[]>`
          SELECT
            code_geographique,
            alea,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."rga"
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
          GROUP BY code_geographique, alea;
        `;
        return commune;
      } else if (type === 'epci' && !eptRegex.test(libelle)) {
        const epci = await prisma.$queryRaw<RGACarte[]>`
          SELECT
            code_geographique,
            alea,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."rga"
          WHERE code_geographique = ANY (
            SELECT code_geographique
            FROM databases."collectivites_searchbar"
            WHERE epci = ${code}
          )
          GROUP BY code_geographique, alea;
        `;
        return epci;
      } else if (type === 'pnr') {
        const pnr = await prisma.$queryRaw<RGACarte[]>`
          SELECT
            code_geographique,
            alea,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."rga"
          WHERE code_geographique = ANY (
            SELECT code_geographique
            FROM databases."collectivites_searchbar"
            WHERE code_pnr = ${code}
          )
          GROUP BY code_geographique, alea;
        `;
        return pnr;
      } else if (type === 'petr') {
        const petr = await prisma.$queryRaw<RGACarte[]>`
          SELECT
            code_geographique,
            alea,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."rga"
          WHERE code_geographique = ANY (
            SELECT code_geographique
            FROM databases."collectivites_searchbar"
            WHERE libelle_petr = ${libelle}
          )
          GROUP BY code_geographique, alea;
        `;
        return petr;
      } else if (type === 'departement') {
        const departement = await prisma.$queryRaw<RGACarte[]>`
          SELECT
            code_geographique,
            alea,
            ST_AsGeoJSON(ST_Simplify(ST_Union(geometry), 0.0001)) as geometry
          FROM postgis."rga"
          WHERE code_geographique = ANY (
            SELECT code_geographique
            FROM databases."collectivites_searchbar"
            WHERE departement = ${code}
          )
          GROUP BY code_geographique, alea;
        `;
        console.log(`RGA ${type}: ${JSON.stringify(departement).length} caractères`);
const size = Buffer.byteLength(stringifyWithBigInt(departement));
console.log(`GetRGA ${type}: ${(size / 1024 / 1024).toFixed(2)} MB`);
        return departement;
      } else if (type === 'ept') {
        const ept = await prisma.$queryRaw<RGACarte[]>`
          SELECT
            code_geographique,
            alea,
            ST_AsGeoJSON(ST_Union(geometry)) as geometry
          FROM postgis."rga"
          WHERE code_geographique = ANY (
            SELECT code_geographique
            FROM databases."collectivites_searchbar"
            WHERE ept = ${code}
          )
          GROUP BY code_geographique, alea;
        `;
        return ept;
      } else return [];
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
