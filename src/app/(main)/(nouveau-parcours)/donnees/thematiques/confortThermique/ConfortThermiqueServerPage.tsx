import { SearchParams } from "@/app/(main)/types";
import { GetInconfortThermique } from "@/lib/queries/databases/inconfortThermique";
import { GetCommunes } from "@/lib/queries/postgis/cartographie";
import DonneesConfortThermique from "./DonneesConfortThermique";

const ConfortThermiqueServerPage = async (props: { searchParams: SearchParams }) => {
  const { code, libelle, type } = await props.searchParams;
  const carteCommunes = await GetCommunes(code, libelle, type);
  const dbInconfortThermique = await GetInconfortThermique(code, libelle, type);

  return (
    <DonneesConfortThermique
      carteCommunes={carteCommunes}
      inconfortThermique={dbInconfortThermique}
    />
  );
};

export default ConfortThermiqueServerPage;

  // Try to read prefetch cache first (safeGet will use an ephemeral client if needed)
  // const tStart = Date.now();
  // let carteCommunes: any = undefined;
  // let dbInconfortThermique: any = undefined;
  // let cacheHit = false;
  // let cacheFetchMs: number | null = null;
  // let getCommunesMs: number | null = null;
  // let getInconfortMs: number | null = null;
  // try {
  //   // For debugging: directly try the provided raw key (user-requested).
  //   const rawKey = 'A7b6a5696c667e3e0265fdb4b54439d07a37e3a858e8361c23d6403c0f621e98a';
  //   const prefixed = `prefetch:${rawKey}`;

  //   // Try prefixed key first, then raw key.
  //   const tCacheStart = Date.now();
  //   let cached = await safeGet(prefixed);
  //   if (!cached) cached = await safeGet(rawKey);
  //   cacheFetchMs = Date.now() - tCacheStart;
  //   console.log('[cache] fetch ms', cacheFetchMs);
  //   if (cached) {
  //     cacheHit = true;
  //     try {
  //       console.info('[cache] found via manual key', prefixed, 'or', rawKey, 'sizeBytes', Buffer.byteLength(cached, 'utf8'));
  //       const preview = cached.length > 500 ? cached.slice(0, 500) + '...<truncated>' : cached;
  //       console.info('[cache] preview', preview);
  //     } catch (e) {
  //       console.info('[cache] found via manual key');
  //     }
  //     const parsed = JSON.parse(cached);
  //     carteCommunes = parsed.carteCommunes;
  //     dbInconfortThermique = parsed.dbInconfortThermique;
  //   }
  // } catch (e) {
  //   // ignore cache errors and fallback to DB
  //   console.warn('Redis read failed', e);
  // }

  // if (!carteCommunes || !dbInconfortThermique) {
  //   console.log('no cache, QUERYING DB');
  //   const _code = code;
  //   const _libelle = libelle;
  //   const _type = type;
  //   const tCommStart = Date.now();
  //   carteCommunes = await GetCommunes(_code, _libelle, _type);
  //   getCommunesMs = Date.now() - tCommStart;
  //   const tInflStart = Date.now();
  //   dbInconfortThermique = await GetInconfortThermique(_code, _libelle, _type);
  //   getInconfortMs = Date.now() - tInflStart;
  // }

  // const totalMs = Date.now() - tStart;
  // console.info('[timing] ConfortThermiqueServerPage', {
  //   cacheHit,
  //   cacheFetchMs,
  //   getCommunesMs,
  //   getInconfortMs,
  //   totalMs,
  // });
