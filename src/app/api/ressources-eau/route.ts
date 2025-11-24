import { prisma } from '@/lib/queries/db';
import { NextRequest } from 'next/server';

function replacer(key: string, value: any) {
  return typeof value === 'bigint' ? value.toString() : value;
}

export async function GET(req: NextRequest) {
  const departement = req.nextUrl.searchParams.get('code');
  if (!departement) {
    return new Response(JSON.stringify({ error: 'Missing code' }), {
      status: 400,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  const stream = new ReadableStream({
    async start(controller) {
      controller.enqueue(new TextEncoder().encode('['));
      let first = true;
      const batchSize = 1000;
      let skip = 0;
      let hasMore = true;

      while (hasMore) {
        const rows = await prisma.ressources_eau.findMany({
          where: { departement },
          skip,
          take: batchSize
        });
        hasMore = rows.length === batchSize;
        skip += batchSize;

        for (const row of rows) {
          if (!first) controller.enqueue(new TextEncoder().encode(','));
          controller.enqueue(
            new TextEncoder().encode(JSON.stringify(row, replacer))
          );
          first = false;
        }
      }
      controller.enqueue(new TextEncoder().encode(']'));
      controller.close();
    }
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'application/json' }
  });
}
