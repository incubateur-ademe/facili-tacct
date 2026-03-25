'use server';

const BASE_URL =
  'https://odisse.santepubliquefrance.fr/api/explore/v2.1/catalog/datasets/changement-climatique-indicateurs-du-barometre-2024/records';

export interface BarometreIndicateur {
  indicateur: string;
  annee: number;
  estimation: number;
  ic_inf: number;
  ic_sup: number;
  effectif_brut: number;
}

interface OdisseRecord {
  indicateur: string;
  annee: number | string;
  sexe: string;
  classe_d_age: string;
  diplome: string;
  nouvelles_regions: string;
  pcs: string;
  situation_financiere_percue: string;
  estimation: number | string;
  ic_inf: number | string;
  ic_sup: number | string;
  effectif_brut: number | string;
}

interface OdisseResponse {
  total_count: number;
  results: OdisseRecord[];
}

export const GetBarometreCC = async (): Promise<BarometreIndicateur[]> => {
  const params = new URLSearchParams({
    where: [
      'sexe="Tous"',
      'classe_d_age="Tous"',
      'diplome="Tous"',
      'pcs="Tous"',
      'situation_financiere_percue="Tous"',
      'nouvelles_regions="Tous"'
    ].join(' AND '),
    order_by: 'indicateur',
    limit: '100'
  });

  try {
    const response = await fetch(`${BASE_URL}?${params.toString()}`, {
      next: { revalidate: 86400 }
    });

    if (!response.ok) {
      throw new Error(`Baromètre CC API error: ${response.status}`);
    }

    const data: OdisseResponse = await response.json();

    return data.results.map((record) => ({
      indicateur: record.indicateur,
      annee: Number(record.annee),
      estimation: Number(record.estimation),
      ic_inf: Number(record.ic_inf),
      ic_sup: Number(record.ic_sup),
      effectif_brut: Number(record.effectif_brut)
    }));
  } catch (error) {
    console.error('[BAROMETRE_CC] Error:', error);
    return [];
  }
};
