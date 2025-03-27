type SearchParams = Promise<{
  codepci: string;
  codgeo: string;
  thematique: string;
}>;

// export type DataCommune = {
//   features: CommunesTypes[];
//   name: string;
//   type: string;
// };

// type CommunesTypes = {
//   geometry: {
//     coordinates: number[][][][];
//     type: string;
//   };
//   properties: {
//     DCOE_C_COD: string;
//     DCOE_L_LIB: string;
//     DDEP_C_COD: string;
//     DEPARTEMEN: string;
//     EPCI: string;
//     EPCI_CODE: string;
//     REGION: string;
//     REGION_COD: string;
//     ratio_precarite: number;
//   };
//   type: string;
// };

// export type DataEPCI = {
//   features: EPCITypes[];
//   type: string;
// };

// type EPCITypes = {
//   geometry: {
//     coordinates: number[][][][];
//     type: string;
//   };
//   properties: {
//     EPCI: string;
//     EPCI_CODE: number;
//   };
//   type: string;
// };

// export type CarteCommunes = {
//   code_geographique: string;
//   coordinates: string;
//   densite_bati: number;
//   epci: string;
//   geometry: string;
//   libelle_geographique: string;
//   libelle_epci: string;

//   precarite_logement: number;
//   // properties: {
//   //   code_geographique: string;
//   //   coordinates: string;
//   //   densite_bati: number;
//   //   epci: string;
//   //   libelle_geographique: string;
//   //   libelle_epci: string;
//   //   precarite_logement: number;
//   //   }
//   // type: string;
// };

// export type CLC = {
//   centroid: string;
//   geometry: string;
//   label3: string;
//   legend: string;
//   pk: number;
//   shape_length: number;
// };

// export type InconfortThermique = {
//   NA5AZ_sum: bigint | null | undefined;
//   NA5BE_sum: bigint | null | undefined;
//   NA5FZ_sum: bigint | null | undefined;
//   NA5GU_sum: bigint | null | undefined;
//   NA5OQ_sum: bigint | null | undefined;
//   P20_POP80P: number | null | undefined;
//   P20_POP80P_PSEUL: number | null | undefined;
//   age_bati_19_45: number | null | undefined;
//   age_bati_46_90: number | null | undefined;
//   age_bati_91_05: number | null | undefined;
//   age_bati_post06: number | null | undefined;
//   age_bati_pre_19: number | null | undefined;
//   clc_1_artificialise: number | null | undefined;
//   clc_2_agricole: number | null | undefined;
//   clc_3_foret_semiNaturel: number | null | undefined;
//   clc_4_humide: number | null | undefined;
//   clc_5_eau: number | null | undefined;
//   code_geographique: string | null | undefined;
//   densite_bati: number | null | undefined;
//   departement: string | null | undefined;
//   epci: string | null | undefined;
//   index: number;
//   libelle_epci: string | null | undefined;
//   libelle_geographique: string | null | undefined;
//   over_80_sum_1968: number | null | undefined;
//   over_80_sum_1975: number | null | undefined;
//   over_80_sum_1982: number | null | undefined;
//   over_80_sum_1990: number | null | undefined;
//   over_80_sum_1999: number | null | undefined;
//   over_80_sum_2009: number | null | undefined;
//   over_80_sum_2014: number | null | undefined;
//   over_80_sum_2020: number | null | undefined;
//   precarite_logement: number | null | undefined;
//   region: number | null | undefined;
//   s_geom_cstr_bati: number | null | undefined;
//   tee_log: number | null | undefined;
//   tee_mob: number | null | undefined;
//   to_80_sum_1968: number | null | undefined;
//   to_80_sum_1975: number | null | undefined;
//   to_80_sum_1982: number | null | undefined;
//   to_80_sum_1990: number | null | undefined;
//   to_80_sum_1999: number | null | undefined;
//   to_80_sum_2009: number | null | undefined;
//   to_80_sum_2014: number | null | undefined;
//   to_80_sum_2020: number | null | undefined;
//   under_4_sum_1968: number | null | undefined;
//   under_4_sum_1975: number | null | undefined;
//   under_4_sum_1982: number | null | undefined;
//   under_4_sum_1990: number | null | undefined;
//   under_4_sum_1999: number | null | undefined;
//   under_4_sum_2009: number | null | undefined;
//   under_4_sum_2014: number | null | undefined;
//   under_4_sum_2020: number | null | undefined;
// };
