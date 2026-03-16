'use server';
import { O3 } from '@/lib/postgres/models';
import { prisma } from '../db';

export const GetO3 = async (): Promise<O3[]> => {
  const timeoutPromise = new Promise<[]>((resolve) =>
    setTimeout(() => {
      resolve([]);
    }, 1500)
  );
  const dbQuery = (async () => {
    try {
      const value = await prisma.o3_seuils.findMany();
      return value;
    } catch (error) {
      console.error(error);
      return [];
    }
  })();
  return Promise.race([dbQuery, timeoutPromise]);
};
