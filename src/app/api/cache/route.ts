import { NextResponse } from 'next/server';
import { safeGet } from '@/lib/redisClient';

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get('key');
  if (!key) return NextResponse.json({ ok: false, message: 'missing key' }, { status: 400 });
  try {
    const cached = await safeGet(key);
    if (!cached) return NextResponse.json({ ok: false, found: false });
    // the cached payload is already JSON string
    const parsed = JSON.parse(cached);
    return NextResponse.json({ ok: true, found: true, data: parsed });
  } catch (err) {
    console.error('[api/cache] error', err);
    return NextResponse.json({ ok: false, message: String(err) }, { status: 500 });
  }
}
