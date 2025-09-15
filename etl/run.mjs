import 'dotenv/config';
import fs from 'fs';
import { PrismaClient } from '../src/generated/client/index.js';

function safeParseJSON(s) {
  if (s == null) return null;
  if (typeof s === 'object') return s;
  try { return JSON.parse(s); } catch { return null; }
}


// 1) Chargement des variables d'env
const prisma = new PrismaClient();
const POSTHOG_HOST = 'https://eu.posthog.com'
const POSTHOG_PROJECT_ID = process.env.POSTHOG_PROJECT_ID
const POSTHOG_API_KEY = process.env.POSTHOG_API_KEY

if (!POSTHOG_PROJECT_ID || !POSTHOG_API_KEY) {
  console.error('Env manquantes: POSTHOG_PROJECT_ID et POSTHOG_API_KEY (ou POSTHOG_PERSONAL_API_KEY)');
  process.exit(1);
}

// 2) Récupérer le dernier event en base - 5min
const [{ max_ts }] = await prisma.$queryRaw`
  SELECT COALESCE(MAX(event_timestamp), '1970-01-01'::timestamptz) AS max_ts
  FROM "analytics"."all_pageview_raw"
`;
const startIso = new Date(new Date(max_ts).getTime() - 5 * 60 * 1000).toISOString();

// 3) Charger ta requête et injecter la borne basse
let hogql = fs.readFileSync('./etl/queries/query.hogql.sql', 'utf8');
hogql = hogql.replace(
  /AND\s+timestamp\s*<\s*now\(\)/i,
  `AND timestamp >= toDateTime('${startIso}') AND timestamp < now()`
);

// 4) Lancer la requête et insérer les données
(async () => {
  const url = `${POSTHOG_HOST}/api/projects/${POSTHOG_PROJECT_ID}/query/`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${POSTHOG_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: { kind: 'HogQLQuery', query: hogql },
    }),
  });

  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`PostHog ${resp.status}: ${text}`);
  }

  const data = await resp.json();
  console.log("longueur des données requêtées :", data.results.length);

  try {
    const rows = data.results || [];
    const inserted = await insertAllPageviewRaw(rows);
    console.log(`Insertion OK : ${inserted} ligne(s) insérée(s).`);
  } catch (e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})().catch((err) => {
  console.error(err);
  process.exit(1);
});


async function insertAllPageviewRaw(rows) {
  let inserted = 0;

  for (const row of rows) {
    const [ts, propertiesStr, distinct_id, session_id, current_url, person_id] = row;
    const props = safeParseJSON(propertiesStr);

    await prisma.$executeRaw`
        INSERT INTO "analytics"."all_pageview_raw"
            (event_timestamp, properties, distinct_id, session_id, current_url, person_id)
        VALUES
            (${ts}::timestamptz, ${JSON.stringify(props)}::jsonb, ${distinct_id}, ${session_id}, ${current_url}, ${person_id})
        ON CONFLICT ON CONSTRAINT uq_all_pageview_raw_natural DO NOTHING
    `;

    inserted++;
  }

  return inserted;
}
