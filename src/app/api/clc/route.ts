import { GetClcTerritoires } from '@/lib/queries/postgis/cartographie';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const libelle = url.searchParams.get('libelle')!;
    const type = url.searchParams.get('type')!;
    const code = url.searchParams.get('code')!;

  const data = await GetClcTerritoires(libelle, type, code);
    return NextResponse.json({ ok: true, data });
  } catch (err) {
    console.error('Error fetching CLC', err);
    return NextResponse.json({ ok: false, error: 'Failed to fetch CLC' }, { status: 500 });
  }
}
