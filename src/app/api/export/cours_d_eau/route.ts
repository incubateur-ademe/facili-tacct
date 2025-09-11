import { GetExportCoursDeau } from '@/lib/queries/exports/etatCoursDeau';
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
  const coursDeau = await GetExportCoursDeau(code, libelle, type);
  const data = JSON.parse(JSON.stringify({ coursDeau }, replacer));
  return NextResponse.json(data);
};
