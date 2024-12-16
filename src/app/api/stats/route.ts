// // GET /api/stats
// interface StatInput {
// 	/**
//    * Nombre de jours/semaine/mois/années.
//    */
// 	since?: number;

// 	periodicity?: 'day' | 'week' | 'month' | 'year'
// }

// interface Stat {
//   /**
//    * Valeur numérique de la stat demandée.
//    * Mesure de la KPI.
//    */
// 	value: number;
//   date: Date;
// }

// // output:
// type StatOuput =  {
// 	description?: string
// 	stats: Stat[];
// }

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

export const GET = async (request: NextRequest) => {
  const since = request.nextUrl.searchParams.get('since');

  const test = [
    {
      value: 1,
      date: new Date()
    },
    {
      value: 2,
      date: new Date()
    }
  ];
  const data = {
    description: 'Description de la North Star Metric',
    stats: test
  };
  return NextResponse.json({ data });
};
