export type InconfortThermique = {
  NA5AZ_sum: number | null;
  NA5BE_sum: number | null;
  NA5FZ_sum: number | null;
  NA5GU_sum: number | null;
  NA5OQ_sum: number | null;
  P20_POP80P: number | null;
  P20_POP80P_PSEUL: number | null;
  // P20_POP80P_PERCENT: number | null;
  age_bati_19_45: number | null;
  age_bati_46_90: number | null;
  age_bati_91_05: number | null;
  age_bati_post06: number | null;
  age_bati_pre_19: number | null;
  clc_1_artificialise: number | null;
  clc_2_agricole: number | null;
  clc_3_foret_semiNaturel: number | null;
  clc_4_humide: number | null;
  clc_5_eau: number | null;
  code_geographique: string;
  densite_bati: number | null;
  departement: string;
  libelle_departement: string;
  epci: string;
  index: bigint;
  libelle_epci: string;
  libelle_geographique: string;
  code_pnr: string | null;
  libelle_pnr: string | null;
  ept: string | null;
  libelle_petr: string | null;
  over_80_sum_1968: number | null;
  over_80_sum_1975: number | null;
  over_80_sum_1982: number | null;
  over_80_sum_1990: number | null;
  over_80_sum_1999: number | null;
  over_80_sum_2009: number | null;
  over_80_sum_2014: number | null;
  over_80_sum_2020: number | null;
  precarite_logement: number | null;
  region: bigint;
  s_geom_cstr_bati: number | null;
  superf_choro: number | null;
  tee_log: number | null;
  tee_mob: number | null;
  to_80_sum_1968: number | null;
  to_80_sum_1975: number | null;
  to_80_sum_1982: number | null;
  to_80_sum_1990: number | null;
  to_80_sum_1999: number | null;
  to_80_sum_2009: number | null;
  to_80_sum_2014: number | null;
  to_80_sum_2020: number | null;
  under_4_sum_1968: number | null;
  under_4_sum_1975: number | null;
  under_4_sum_1982: number | null;
  under_4_sum_1990: number | null;
  under_4_sum_1999: number | null;
  under_4_sum_2009: number | null;
  under_4_sum_2014: number | null;
  under_4_sum_2020: number | null;
};

export type Biodiversite = {
  type_touristique: string | null;
  code_geographique: string | null;
  departement: string | null;
  epci: string | null;
  index: bigint | null;
  libelle_epci: string | null;
  libelle_geographique: string | null;
  region: number | null;
};

export type GestionRisques = {
  lib_risque_jo: string;
  dat_pub_arrete: string;
  code_geographique: string;
  departement: string;
  epci: string;
  index: bigint;
  libelle_epci: string;
  libelle_geographique: string;
  region: number;
};

export type ArreteCatNat = {
  lib_risque_jo: string;
  dat_pub_arrete: string;
  code_geographique: string;
  departement: string;
  libelle_departement: string;
  epci: string;
  index: bigint;
  libelle_epci: string;
  libelle_geographique: string;
  region: number;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
};

export type RessourcesEau = {
  LIBELLE_SOUS_CHAMP: string;
  SOUS_CHAMP: string;
  code_geographique: string;
  departement: string;
  libelle_departement: string;
  epci: string;
  index: bigint;
  libelle_epci: string;
  libelle_geographique: string;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  region: number;
  A2008: number;
  A2009: number;
  A2010: number;
  A2011: number;
  A2012: number;
  A2013: number;
  A2014: number;
  A2015: number;
  A2016: number;
  A2017: number;
  A2018: number;
  A2019: number;
  A2020: number;
};

export type AgricultureBio = {
  index: bigint;
  epci: string;
  libelle_epci: string;
  VARIABLE: string;
  LIBELLE_SOUS_CHAMP: string | null;
  surface_2022: number;
  surface_2021: number;
  surface_2020: number;
  surface_2019: number;
  nombre_2022: number;
  nombre_2021: number;
  nombre_2020: number;
  nombre_2019: number;
};

export type CollectivitesSearchbar = {
  code_geographique: string | null;
  coordinates: string | null;
  epci: string | null;
  libelle_geographique: string | null;
  libelle_epci: string | null;
  search_libelle: string;
  search_code: string | null;
  departement: string | null;
  region: string | null;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  libelle_departement: string | null;
};

export type CarteCommunes = {
  code_geographique: string;
  coordinates: string;
  densite_bati?: number;
  epci: string;
  geometry: string;
  libelle_geographique: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  region: number;
  ept: string;
  libelle_petr: string;
  code_pnr: string;
  libelle_pnr: string;
  precarite_logement?: number;
  catnat?: Object;
  naf?: number;
  surface: number;
  surfacesIrriguees?: number;
  incendiesForet?: number;
};

export type CarteCommunesView = {
  code_geographique: string | null;
  coordinates: string | null;
  densite_bati?: number | null;
  epci: string | null;
  geometry: string | null;
  libelle_geographique: string | null;
  libelle_epci: string | null;
  departement: string | null;
  libelle_departement?: string | null;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  precarite_logement?: number | null;
  catnat?: Object | null;
  naf?: number | null;
  surface: number | null;
  surfacesIrriguees?: number | null;
  incendiesForet?: number | null;
};

export type EpciContours = {
  epci_code: string;
  geometry: string;
  pk: number;
};

export type CLC = {
  centroid: string;
  geometry: string;
  label3: string;
  legend: string;
  pk: number;
  shape_length: number;
};

export type CLCTerritoires = {
  centroid: string;
  geometry: string;
  legend: string;
  pk: number;
  code_geographique: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
};

export type ErosionCotiere = {
  pk: number;
  taux: number;
  duree: number;
  tdc_ancien: number;
  tdc_rec: number;
  geometry: string;
};

export type DataGrandAge = {
  P20_POP80P?: number;
  P20_POP80P_PSEUL?: number;
  code_geographique: string;
  epci: string;
  libelle_epci: string;
  libelle_geographique: string;
  over_80_sum_1968?: number;
  over_80_sum_1975?: number;
  over_80_sum_1982?: number;
  over_80_sum_1990?: number;
  over_80_sum_1999?: number;
  over_80_sum_2009?: number;
  over_80_sum_2014?: number;
  over_80_sum_2020?: number;
  to_80_sum_1968?: number;
  to_80_sum_1975?: number;
  to_80_sum_1982?: number;
  to_80_sum_1990?: number;
  to_80_sum_1999?: number;
  to_80_sum_2009?: number;
  to_80_sum_2014?: number;
  to_80_sum_2020?: number;
  under_4_sum_1968?: number;
  under_4_sum_1975?: number;
  under_4_sum_1982?: number;
  under_4_sum_1990?: number;
  under_4_sum_1999?: number;
  under_4_sum_2009?: number;
  under_4_sum_2014?: number;
  under_4_sum_2020?: number;
};

export type SurfacesProtegeesByCol = {
  index: bigint;
  code_geographique: string;
  PNC: string | null;
  RAMSAR: string | null;
  PNR: string | null;
  PNP: string | null;
  FOR_PRO: string | null;
  ZZZ: string | null;
  ZNIEFF2: string | null;
  ZNIEFF1: string | null;
  RNR: string | null;
  TOU_PRO: string | null;
  NATURA: string | null;
  ZPS: string | null;
  SIC: string | null;
  CELRL: string | null;
  BIO: string | null;
  APB: string | null;
  RN: string | null;
  RBFD: string | null;
  RNCFS: string | null;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  region: number;
};

export type ConsommationNAF = {
  index: bigint;
  code_geographique: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  region: number;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  naf09art10: number;
  art09act10: number;
  art09hab10: number;
  art09mix10: number;
  art09rou10: number;
  art09fer10: number;
  art09inc10: number;
  naf10art11: number;
  art10act11: number;
  art10hab11: number;
  art10mix11: number;
  art10rou11: number;
  art10fer11: number;
  naf11art12: number;
  art11act12: number;
  art11hab12: number;
  art11mix12: number;
  art11rou12: number;
  art11fer12: number;
  art11inc12: number;
  naf12art13: number;
  art12act13: number;
  art12hab13: number;
  art12mix13: number;
  art12rou13: number;
  art12fer13: number;
  art12inc13: number;
  naf13art14: number;
  art13act14: number;
  art13hab14: number;
  art13mix14: number;
  art13rou14: number;
  art13fer14: number;
  art13inc14: number;
  naf14art15: number;
  art14act15: number;
  art14hab15: number;
  art14mix15: number;
  art14rou15: number;
  art14fer15: number;
  art14inc15: number;
  naf15art16: number;
  art15act16: number;
  art15hab16: number;
  art15mix16: number;
  art15rou16: number;
  art15fer16: number;
  art15inc16: number;
  naf16art17: number;
  art16act17: number;
  art16hab17: number;
  art16mix17: number;
  art16rou17: number;
  art16fer17: number;
  art16inc17: number;
  naf17art18: number;
  art17act18: number;
  art17hab18: number;
  art17mix18: number;
  art17rou18: number;
  art17fer18: number;
  art17inc18: number;
  naf18art19: number;
  art18act19: number;
  art18hab19: number;
  art18mix19: number;
  art18rou19: number;
  art18fer19: number;
  art18inc19: number;
  naf19art20: number;
  art19act20: number;
  art19hab20: number;
  art19mix20: number;
  art19rou20: number;
  art19fer20: number;
  art19inc20: number;
  naf20art21: number;
  art20act21: number;
  art20hab21: number;
  art20mix21: number;
  art20rou21: number;
  art20fer21: number;
  art20inc21: number;
  naf21art22: number;
  art21act22: number;
  art21hab22: number;
  art21mix22: number;
  art21rou22: number;
  art21fer22: number;
  art21inc22: number;
  naf22art23: number;
  art22act23: number;
  art22hab23: number;
  art22mix23: number;
  art22rou23: number;
  art22fer23: number;
  art22inc23: number;
  naf09art23: number;
  art09act23: number;
  art09hab23: number;
  art09mix23: number;
  art09inc23: number;
  art09rou23: number;
  art09fer23: number;
  artcom0923: number;
};

export type EtatCoursDeau = {
  pk: number;
  name: string;
  longueur: number;
  etateco: string | null;
  geometry: string;
};

export type AOT40 = {
  index: bigint;
  nom_site: string;
  type_d_implantation: string;
  valeur_brute: number;
  Latitude: number;
  Longitude: number;
};

export type QualiteSitesBaignade = {
  index: bigint;
  DEP_NOM: string;
  DEP_NUM: string;
  TYPE: string;
  COMMUNE: string;
  POINT: string;
  LONG: number;
  LAT: number;
  QEB_2013: string | null;
  QEB_2014: string | null;
  QEB_2015: string | null;
  QEB_2016: string | null;
  QEB_2017: string | null;
  QEB_2018: string | null;
  QEB_2019: string | null;
  QEB_2020: string | null;
};

export type Agriculture = {
  index: bigint;
  code_geographique: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  region: number;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  part_irr_SAU_2020: number | null;
};

export type IncendiesForet = {
  index: bigint;
  code_geographique: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  region: number;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  nature: string | null;
  annee: number;
  surface_parcourue: number;
  surface_foret: number | null;
  surface_maquis_garrigues: number | null;
  autres_surfaces_naturelles_hors_foret: number | null;
  surfaces_agricoles: number | null;
  surfaces_non_boisees: number | null;
  surfaces_non_boisees_artificialisees: number | null;
  surfaces_non_boisees_naturelles: number | null;
  surface_autres_terres_boisees: number | null;
  autres_surfaces: number | null;
};

export type RGACarte = {
  pk: number;
  alea: string;
  code_geographique: string;
  geometry: string;
};

export type RGAdb = {
  index: bigint;
  code_geographique: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  region: number;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  nb_logement: number;
  nb_logement_alea_moyen_fort: number;
  nb_logement_alea_faible: number;
  nb_logement_sans_alea: number;
  nb_logement_alea_moyen_fort_avant_1920: number;
  nb_logement_alea_moyen_fort_1920_1945: number;
  nb_logement_alea_moyen_fort_1945_1975: number;
  nb_logement_alea_moyen_fort_apres_1975: number;
  nb_logement_alea_faible_avant_1920: number;
  nb_logement_alea_faible_1920_1945: number;
  nb_logement_alea_faible_1945_1975: number;
  nb_logement_alea_faible_apres_1975: number;
  surface_commune: number;
  surface_alea_faible_commune: number;
  surface_alea_moyen_fort_commune: number;
  part_logement_alea_moyen_fort_avant_1920: number;
  part_logement_alea_moyen_fort_1920_1945: number;
  part_logement_alea_moyen_fort_1945_1975: number;
  part_logement_alea_moyen_fort_apres_1975: number;
  part_logement_alea_faible_avant_1920: number;
  part_logement_alea_faible_1920_1945: number;
  part_logement_alea_faible_1945_1975: number;
  part_logement_alea_faible_apres_1975: number;
  part_alea_faible_commune: number;
  part_alea_moyen_fort_commune: number;
};

export type SurfacesAgricolesModel = {
  index: bigint;
  epci: string;
  exploitation_sau: number;
  exploitation_sau_terres_arables: number;
  exploitation_sau_terres_arables_cereales: number;
  exploitation_sau_terres_arables_oleagineux: number;
  exploitation_sau_terres_arables_fourrageres: number;
  exploitation_sau_terres_arables_tubercules: number;
  exploitation_sau_terres_arables_legumes_melons_fraises: number;
  exploitation_sau_terres_arables_fleurs: number;
  exploitation_sau_terres_arables_autres: number;
  exploitation_sau_cultures_permanentes: number;
  exploitation_sau_cultures_permanentes_vigne: number;
  exploitation_sau_cultures_permanentes_fruits: number;
  exploitation_sau_cultures_permanentes_autres: number;
  exploitation_sau_herbe: number;
  exploitation_sau_herbe_prairies_productives: number;
  exploitation_sau_herbe_prairies_peu_productives: number;
  exploitation_sau_herbe_subventions: number;
  exploitation_sau_herbe_bois_patures: number;
  exploitation_sau_jardins: number;
  superficie_sau: number;
  superficie_sau_terres_arables: number;
  superficie_sau_terres_arables_cereales: number;
  superficie_sau_terres_arables_oleagineux: number;
  superficie_sau_terres_arables_fourrageres: number;
  superficie_sau_terres_arables_tubercules: number;
  superficie_sau_terres_arables_legumes_melons_fraises: number;
  superficie_sau_terres_arables_fleurs: number;
  superficie_sau_terres_arables_autres: number;
  superficie_sau_cultures_permanentes: number;
  superficie_sau_cultures_permanentes_vigne: number;
  superficie_sau_cultures_permanentes_fruits: number;
  superficie_sau_cultures_permanentes_autres: number;
  superficie_sau_herbe: number;
  superficie_sau_herbe_prairies_productives: number;
  superficie_sau_herbe_prairies_peu_productives: number;
  superficie_sau_herbe_subventions: number;
  superficie_sau_herbe_bois_patures: number;
  superficie_sau_jardins: number;
};

export type Patch4 = {
  index: bigint;
  code_geographique: string;
  niveaux_marins: number | null;
  feux_foret: number;
  secheresse_sols: number;
  fortes_precipitations: number;
  fortes_chaleurs: number;
};

export type LczCouverture = {
  index: bigint;
  code_geographique: string;
  libelle_geographique: string;
  epci: string;
  libelle_epci: string;
  departement: string;
  libelle_departement: string;
  region: number;
  ept: string | null;
  libelle_petr: string | null;
  code_pnr: string | null;
  libelle_pnr: string | null;
  couverture_lcz: number | null;
};
