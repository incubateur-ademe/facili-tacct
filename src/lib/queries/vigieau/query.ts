'use server';

export interface VigieauZone {
  id: number;
  idSandre: number;
  code: string;
  nom: string;
  type: string;
  niveauGravite: string;
  departement: string;
  CdZAS: string;
  LbZAS: string;
  TypeZAS: string;
  arrete?: {
    id: number;
    dateDebutValidite: string;
    dateFinValidite: string | null;
    cheminFichier: string;
    cheminFichierArreteCadre: string;
  };
}

export const GetZonesByDepartements = async (
  departements: string[]
): Promise<VigieauZone[]> => {
  const startTime = Date.now();
  try {
    const promises = departements.map((dept) =>
      fetch(`https://api.vigieau.beta.gouv.fr/api/zones/departement/${dept}`)
        .then((res) => {
          if (!res.ok) {
            if (res.status === 404) {
              console.warn(`[VIGIEAU] No data for dept ${dept} (404 - département sans restriction ou invalide)`);
              return [];
            }
            throw new Error(`Failed for dept ${dept}: ${res.status}`);
          }
          return res.json();
        })
        .catch((error) => {
          console.error(`[VIGIEAU] Error for dept ${dept}:`, error);
          return [];
        })
    );

    const results = await Promise.all(promises);
    const allZones = results.flat();

    return allZones;
  } catch (error) {
    console.error('[VIGIEAU] Error:', error);
    throw error;
  }
};
