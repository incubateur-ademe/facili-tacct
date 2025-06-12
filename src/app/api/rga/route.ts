import { GetRga } from '@/lib/queries/databases/gestionRisques';
import { GetRGACarte } from '@/lib/queries/postgis/rga';
import { NextRequest, NextResponse } from 'next/server';

interface Replacer {
  (key: string, value: unknown): unknown;
}

const replacer: Replacer = (key: string, value: unknown): unknown => {
  return typeof value === 'bigint' ? value.toString() : value;
};

export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code') || '';
  const libelle = searchParams.get('libelle') || '';
  const type = searchParams.get('type') || '';
  const rga = await GetRga(code, libelle, type);
  const rgaCarte = await GetRGACarte(code, libelle, type);
  // Convert BigInt to string
  const data = JSON.parse(JSON.stringify({ rga, rgaCarte }, replacer));
  return NextResponse.json(data);
};
