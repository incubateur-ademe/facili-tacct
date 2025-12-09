'use server';

import { prisma } from './db';

export const GetError = async () => {
  if (process.env.NODE_ENV !== 'production') {
    try {
      await prisma.$queryRaw`SELECT * FROM non_existent_table`;
    } catch (error) {
      console.error('Forced error for testing:', error);
      await prisma.$disconnect();
    }
  } else {
    console.warn('Skipping error test query in production environment.');
  }
};
