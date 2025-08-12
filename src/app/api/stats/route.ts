import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient as PostgresClient } from '../../../generated/client';

const PrismaPostgres = new PostgresClient();

// Opt out of caching for this API route
export const dynamic = 'force-dynamic';

interface Stat {
  value: string;
  date: Date;
}

interface StatOutput {
  description: string;
  stats: Stat[];
}

interface Periodicity {
  periodicity: 'day' | 'week' | 'month' | 'year';
}

export const GET = async (request: NextRequest) => {
  const rawData: Stat[] = await PrismaPostgres.north_star_metric.findMany();
  const since = request.nextUrl.searchParams.get('since');
  const periodicityParam = request.nextUrl.searchParams.get('periodicity');
  const periodicity: Periodicity = periodicityParam
    ? { periodicity: periodicityParam as 'day' | 'week' | 'month' | 'year' }
    : { periodicity: 'month' };
  var d = new Date();

  if (periodicity.periodicity === 'day') {
    d.setTime(d.getTime() - Number(since) * 24 * 60 * 60 * 1000);
  } else if (periodicity.periodicity === 'week') {
    d.setDate(d.getDate() - Number(since) * 7);
  } else if (periodicity.periodicity === 'year') {
    d.setFullYear(d.getFullYear() - Number(since));
  } else d.setMonth(d.getMonth() - Number(since));

  const filteredData = rawData.filter((stat) => {
    if (since === null) {
      return stat;
    } else return stat.date.getTime() > d.getTime();
  });

  const data: StatOutput = {
    description: `Description de la North Star Metric`,
    stats: filteredData
  };

  const response = NextResponse.json({ data });
  
  // Set cache control headers to prevent caching
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  response.headers.set('Surrogate-Control', 'no-store');

  return response;
};
