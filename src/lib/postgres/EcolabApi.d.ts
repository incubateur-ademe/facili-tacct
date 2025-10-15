export type ConsommationNAFEcolabApi = {
  "conso_enaf_com.secteur": string,
  "conso_enaf_com.date_mesure": string,
  "conso_enaf_com.id_611": string,
  "conso_enaf_com.date_mesure.year": string,
  "conso_enaf_com.geocode_departement"?: string,
  "conso_enaf_com.geocode_epci"?: string,
  "conso_enaf_com.geocode_commune"?: string
};

export type SurfacesBiocolabApi = {
  "surface_bio_epci.date_mesure": string,
  "surface_bio_epci.id_606": string,
  "surface_bio_epci.date_mesure.year": string,
  "surface_bio_dpt.geocode_departement"?: string,
  "surface_bio_epci.geocode_epci"?: string,
};
