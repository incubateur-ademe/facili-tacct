import { ExportCoursDeau } from '@/lib/postgres/models';
import * as Sentry from '@sentry/nextjs';
import { ColumnCodeCheck } from '../columns';
import { prisma } from '../redis';

export const GetExportCoursDeau = async (
  code: string,
  libelle: string,
  type: string
): Promise<ExportCoursDeau[]> => {
  const column = ColumnCodeCheck(type);
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 2000)
  );
  const dbQuery = (async () => {
    try {
      // Fast existence check
      if (!libelle || !type || (!code && type !== 'petr')) return [];
      const exists = await prisma.export_cours_d_eau.findFirst({
        where: { [column]: type === 'petr' || type === 'ept' ? libelle : code }
      });
      if (!exists) return [];
      else {
        const value = await prisma.export_cours_d_eau.findMany({
          where: {
            [column]: type === 'petr' || type === 'ept' ? libelle : code
          }
        });
        return value;
      }
    } catch (error) {
      console.error(error);
      Sentry.captureException(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
