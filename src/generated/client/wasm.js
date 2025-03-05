Object.defineProperty(exports, '__esModule', { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js');

const Prisma = {};

exports.Prisma = Prisma;
exports.$Enums = {};

/**
 * Prisma Client JS version: 6.3.0
 * Query Engine version: a9055b89e58b4b5bfb59600785423b1db3d0e75d
 */
Prisma.prismaVersion = {
  client: '6.3.0',
  engine: 'a9055b89e58b4b5bfb59600785423b1db3d0e75d'
};

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`);
};

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull;
Prisma.JsonNull = objectEnumValues.instances.JsonNull;
Prisma.AnyNull = objectEnumValues.instances.AnyNull;

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
};

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.Inconfort_thermiqueScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region',
  age_bati_post06: 'age_bati_post06',
  age_bati_91_05: 'age_bati_91_05',
  age_bati_46_90: 'age_bati_46_90',
  age_bati_19_45: 'age_bati_19_45',
  age_bati_pre_19: 'age_bati_pre_19',
  under_4_sum_1968: 'under_4_sum_1968',
  to_80_sum_1968: 'to_80_sum_1968',
  over_80_sum_1968: 'over_80_sum_1968',
  under_4_sum_1975: 'under_4_sum_1975',
  to_80_sum_1975: 'to_80_sum_1975',
  over_80_sum_1975: 'over_80_sum_1975',
  under_4_sum_1982: 'under_4_sum_1982',
  to_80_sum_1982: 'to_80_sum_1982',
  over_80_sum_1982: 'over_80_sum_1982',
  under_4_sum_1990: 'under_4_sum_1990',
  to_80_sum_1990: 'to_80_sum_1990',
  over_80_sum_1990: 'over_80_sum_1990',
  under_4_sum_1999: 'under_4_sum_1999',
  to_80_sum_1999: 'to_80_sum_1999',
  over_80_sum_1999: 'over_80_sum_1999',
  under_4_sum_2009: 'under_4_sum_2009',
  to_80_sum_2009: 'to_80_sum_2009',
  over_80_sum_2009: 'over_80_sum_2009',
  under_4_sum_2014: 'under_4_sum_2014',
  to_80_sum_2014: 'to_80_sum_2014',
  over_80_sum_2014: 'over_80_sum_2014',
  under_4_sum_2020: 'under_4_sum_2020',
  to_80_sum_2020: 'to_80_sum_2020',
  over_80_sum_2020: 'over_80_sum_2020',
  P20_POP80P: 'P20_POP80P',
  P20_POP80P_PSEUL: 'P20_POP80P_PSEUL',
  P20_POP80P_PSEUL_PERCENT: 'P20_POP80P_PSEUL_PERCENT',
  tee_log: 'tee_log',
  tee_mob: 'tee_mob',
  precarite_logement: 'precarite_logement',
  NA5AZ_sum: 'NA5AZ_sum',
  NA5BE_sum: 'NA5BE_sum',
  NA5FZ_sum: 'NA5FZ_sum',
  NA5GU_sum: 'NA5GU_sum',
  NA5OQ_sum: 'NA5OQ_sum',
  s_geom_cstr_bati: 's_geom_cstr_bati',
  hauteur: 'hauteur',
  h_x_s: 'h_x_s',
  densite_bati: 'densite_bati',
  clc_1_artificialise: 'clc_1_artificialise',
  clc_2_agricole: 'clc_2_agricole',
  clc_3_foret_semiNaturel: 'clc_3_foret_semiNaturel',
  clc_4_humide: 'clc_4_humide',
  clc_5_eau: 'clc_5_eau',
  superf_choro: 'superf_choro'
};

exports.Prisma.Clc_epciScalarFieldEnum = {
  pk: 'pk',
  legend: 'legend',
  epci_code: 'epci_code'
};

exports.Prisma.Collectivites_searchbarScalarFieldEnum = {
  index: 'index',
  code_commune: 'code_commune',
  coordinates: 'coordinates',
  libelle_commune: 'libelle_commune',
  code_epci: 'code_epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region',
  search_code: 'search_code',
  search_libelle: 'search_libelle'
};

exports.Prisma.BiodiversiteScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  type_touristique: 'type_touristique',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region'
};

exports.Prisma.Gestion_risquesScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  lib_risque_jo: 'lib_risque_jo',
  dat_pub_arrete: 'dat_pub_arrete',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region'
};

exports.Prisma.Communes_dromScalarFieldEnum = {
  pk: 'pk',
  code_commune: 'code_commune',
  libelle_commune: 'libelle_commune',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  coordinates: 'coordinates',
  densite_bati: 'densite_bati',
  precarite_logement: 'precarite_logement',
  surface: 'surface'
};

exports.Prisma.Ressources_eauScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  LIBELLE_SOUS_CHAMP: 'LIBELLE_SOUS_CHAMP',
  SOUS_CHAMP: 'SOUS_CHAMP',
  A2020: 'A2020',
  A2019: 'A2019',
  A2018: 'A2018',
  A2017: 'A2017',
  A2016: 'A2016',
  A2015: 'A2015',
  A2014: 'A2014',
  A2013: 'A2013',
  A2012: 'A2012',
  A2011: 'A2011',
  A2010: 'A2010',
  A2009: 'A2009',
  A2008: 'A2008',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region'
};

exports.Prisma.Agriculture_bioScalarFieldEnum = {
  index: 'index',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  VARIABLE: 'VARIABLE',
  LIBELLE_SOUS_CHAMP: 'LIBELLE_SOUS_CHAMP',
  surface_2022: 'surface_2022',
  surface_2021: 'surface_2021',
  surface_2020: 'surface_2020',
  surface_2019: 'surface_2019',
  nombre_2022: 'nombre_2022',
  nombre_2021: 'nombre_2021',
  nombre_2020: 'nombre_2020',
  nombre_2019: 'nombre_2019'
};

exports.Prisma.Erosion_cotiereScalarFieldEnum = {
  pk: 'pk',
  taux: 'taux',
  duree: 'duree',
  tdc_ancien: 'tdc_ancien',
  tdc_rec: 'tdc_rec'
};

exports.Prisma.EpciScalarFieldEnum = {
  pk: 'pk',
  epci_code: 'epci_code'
};

exports.Prisma.Surfaces_protegeesScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  PNC: 'PNC',
  RAMSAR: 'RAMSAR',
  PNR: 'PNR',
  PNP: 'PNP',
  FOR_PRO: 'FOR_PRO',
  ZZZ: 'ZZZ',
  ZNIEFF2: 'ZNIEFF2',
  ZNIEFF1: 'ZNIEFF1',
  RNR: 'RNR',
  TOU_PRO: 'TOU_PRO',
  NATURA: 'NATURA',
  ZPS: 'ZPS',
  SIC: 'SIC',
  CELRL: 'CELRL',
  BIO: 'BIO',
  APB: 'APB',
  RN: 'RN',
  RBFD: 'RBFD',
  RNCFS: 'RNCFS',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region'
};

exports.Prisma.Spatial_ref_sysScalarFieldEnum = {
  srid: 'srid',
  auth_name: 'auth_name',
  auth_srid: 'auth_srid',
  srtext: 'srtext',
  proj4text: 'proj4text'
};

exports.Prisma.Consommation_espaces_nafScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region',
  naf09art10: 'naf09art10',
  art09act10: 'art09act10',
  art09hab10: 'art09hab10',
  art09mix10: 'art09mix10',
  art09rou10: 'art09rou10',
  art09fer10: 'art09fer10',
  art09inc10: 'art09inc10',
  naf10art11: 'naf10art11',
  art10act11: 'art10act11',
  art10hab11: 'art10hab11',
  art10mix11: 'art10mix11',
  art10rou11: 'art10rou11',
  art10fer11: 'art10fer11',
  art10inc11: 'art10inc11',
  naf11art12: 'naf11art12',
  art11act12: 'art11act12',
  art11hab12: 'art11hab12',
  art11mix12: 'art11mix12',
  art11rou12: 'art11rou12',
  art11fer12: 'art11fer12',
  art11inc12: 'art11inc12',
  naf12art13: 'naf12art13',
  art12act13: 'art12act13',
  art12hab13: 'art12hab13',
  art12mix13: 'art12mix13',
  art12rou13: 'art12rou13',
  art12fer13: 'art12fer13',
  art12inc13: 'art12inc13',
  naf13art14: 'naf13art14',
  art13act14: 'art13act14',
  art13hab14: 'art13hab14',
  art13mix14: 'art13mix14',
  art13rou14: 'art13rou14',
  art13fer14: 'art13fer14',
  art13inc14: 'art13inc14',
  naf14art15: 'naf14art15',
  art14act15: 'art14act15',
  art14hab15: 'art14hab15',
  art14mix15: 'art14mix15',
  art14rou15: 'art14rou15',
  art14fer15: 'art14fer15',
  art14inc15: 'art14inc15',
  naf15art16: 'naf15art16',
  art15act16: 'art15act16',
  art15hab16: 'art15hab16',
  art15mix16: 'art15mix16',
  art15rou16: 'art15rou16',
  art15fer16: 'art15fer16',
  art15inc16: 'art15inc16',
  naf16art17: 'naf16art17',
  art16act17: 'art16act17',
  art16hab17: 'art16hab17',
  art16mix17: 'art16mix17',
  art16rou17: 'art16rou17',
  art16fer17: 'art16fer17',
  art16inc17: 'art16inc17',
  naf17art18: 'naf17art18',
  art17act18: 'art17act18',
  art17hab18: 'art17hab18',
  art17mix18: 'art17mix18',
  art17rou18: 'art17rou18',
  art17fer18: 'art17fer18',
  art17inc18: 'art17inc18',
  naf18art19: 'naf18art19',
  art18act19: 'art18act19',
  art18hab19: 'art18hab19',
  art18mix19: 'art18mix19',
  art18rou19: 'art18rou19',
  art18fer19: 'art18fer19',
  art18inc19: 'art18inc19',
  naf19art20: 'naf19art20',
  art19act20: 'art19act20',
  art19hab20: 'art19hab20',
  art19mix20: 'art19mix20',
  art19rou20: 'art19rou20',
  art19fer20: 'art19fer20',
  art19inc20: 'art19inc20',
  naf20art21: 'naf20art21',
  art20act21: 'art20act21',
  art20hab21: 'art20hab21',
  art20mix21: 'art20mix21',
  art20rou21: 'art20rou21',
  art20fer21: 'art20fer21',
  art20inc21: 'art20inc21',
  naf21art22: 'naf21art22',
  art21act22: 'art21act22',
  art21hab22: 'art21hab22',
  art21mix22: 'art21mix22',
  art21rou22: 'art21rou22',
  art21fer22: 'art21fer22',
  art21inc22: 'art21inc22',
  naf22art23: 'naf22art23',
  art22act23: 'art22act23',
  art22hab23: 'art22hab23',
  art22mix23: 'art22mix23',
  art22rou23: 'art22rou23',
  art22fer23: 'art22fer23',
  art22inc23: 'art22inc23',
  naf09art23: 'naf09art23',
  art09act23: 'art09act23',
  art09hab23: 'art09hab23',
  art09mix23: 'art09mix23',
  art09inc23: 'art09inc23',
  art09rou23: 'art09rou23',
  art09fer23: 'art09fer23',
  artcom0923: 'artcom0923',
  pop14: 'pop14',
  pop20: 'pop20',
  pop1420: 'pop1420',
  men14: 'men14',
  men20: 'men20',
  men1420: 'men1420',
  emp14: 'emp14',
  emp20: 'emp20',
  emp1420: 'emp1420',
  mepart1420: 'mepart1420',
  menhab1420: 'menhab1420',
  artpop1420: 'artpop1420',
  surfcom2023: 'surfcom2023',
  C10_MEN: 'C10_MEN',
  C15_MEN: 'C15_MEN',
  C21_MEN: 'C21_MEN'
};

exports.Prisma.Lcz_bayonne_testScalarFieldEnum = {
  pk: 'pk',
  identifier: 'identifier',
  hre: 'hre',
  are: 'are',
  bur: 'bur',
  ror: 'ror',
  bsr: 'bsr',
  war: 'war',
  ver: 'ver',
  vhr: 'vhr',
  lcz: 'lcz',
  lcz_int: 'lcz_int'
};

exports.Prisma.North_star_metricScalarFieldEnum = {
  value: 'value',
  date: 'date',
  pk: 'pk'
};

exports.Prisma.Etat_cours_d_eauScalarFieldEnum = {
  pk: 'pk',
  name: 'name',
  longueur: 'longueur',
  etateco: 'etateco'
};

exports.Prisma.Aot_40ScalarFieldEnum = {
  index: 'index',
  nom_site: 'nom_site',
  type_d_implantation: 'type_d_implantation',
  valeur_brute: 'valeur_brute',
  Latitude: 'Latitude',
  Longitude: 'Longitude'
};

exports.Prisma.UsersScalarFieldEnum = {
  pk: 'pk',
  email: 'email',
  username: 'username',
  password: 'password',
  created_at: 'created_at',
  last_connection: 'last_connection',
  role: 'role'
};

exports.Prisma.Qualite_sites_baignadeScalarFieldEnum = {
  index: 'index',
  DEP_NOM: 'DEP_NOM',
  DEP_NUM: 'DEP_NUM',
  TYPE: 'TYPE',
  COMMUNE: 'COMMUNE',
  POINT: 'POINT',
  LONG: 'LONG',
  LAT: 'LAT',
  QEB_2013: 'QEB_2013',
  QEB_2014: 'QEB_2014',
  QEB_2015: 'QEB_2015',
  QEB_2016: 'QEB_2016',
  QEB_2017: 'QEB_2017',
  QEB_2018: 'QEB_2018',
  QEB_2019: 'QEB_2019',
  QEB_2020: 'QEB_2020'
};

exports.Prisma.AgricultureScalarFieldEnum = {
  index: 'index',
  CODGEO: 'CODGEO',
  LIBGEO: 'LIBGEO',
  EPCI: 'EPCI',
  LIBEPCI: 'LIBEPCI',
  DEP: 'DEP',
  REG: 'REG',
  part_irr_SAU_2020: 'part_irr_SAU_2020',
  part_over_55: 'part_over_55'
};

exports.Prisma.Incendies_foretScalarFieldEnum = {
  index: 'index',
  code_geographique: 'code_geographique',
  libelle_geographique: 'libelle_geographique',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region',
  nature: 'nature',
  annee: 'annee',
  surface_parcourue: 'surface_parcourue',
  surface_foret: 'surface_foret',
  surface_maquis_garrigues: 'surface_maquis_garrigues',
  autres_surfaces_naturelles_hors_foret:
    'autres_surfaces_naturelles_hors_foret',
  surfaces_agricoles: 'surfaces_agricoles',
  surfaces_non_boisees: 'surfaces_non_boisees',
  surfaces_non_boisees_artificialisees: 'surfaces_non_boisees_artificialisees',
  surfaces_non_boisees_naturelles: 'surfaces_non_boisees_naturelles',
  surface_autres_terres_boisees: 'surface_autres_terres_boisees',
  autres_surfaces: 'autres_surfaces'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.ModelName = {
  inconfort_thermique: 'inconfort_thermique',
  clc_epci: 'clc_epci',
  collectivites_searchbar: 'collectivites_searchbar',
  biodiversite: 'biodiversite',
  gestion_risques: 'gestion_risques',
  communes_drom: 'communes_drom',
  ressources_eau: 'ressources_eau',
  agriculture_bio: 'agriculture_bio',
  erosion_cotiere: 'erosion_cotiere',
  epci: 'epci',
  surfaces_protegees: 'surfaces_protegees',
  spatial_ref_sys: 'spatial_ref_sys',
  consommation_espaces_naf: 'consommation_espaces_naf',
  lcz_bayonne_test: 'lcz_bayonne_test',
  north_star_metric: 'north_star_metric',
  etat_cours_d_eau: 'etat_cours_d_eau',
  aot_40: 'aot_40',
  users: 'users',
  qualite_sites_baignade: 'qualite_sites_baignade',
  agriculture: 'agriculture',
  incendies_foret: 'incendies_foret'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message;
        const runtime = getRuntime();
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message =
            'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' +
            runtime.prettyName +
            '`).';
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`;

        throw new Error(message);
      }
    });
  }
}

exports.PrismaClient = PrismaClient;

Object.assign(exports, Prisma);
