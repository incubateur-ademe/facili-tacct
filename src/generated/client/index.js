Object.defineProperty(exports, '__esModule', { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam
} = require('./runtime/library.js');

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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError;
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError;
Prisma.PrismaClientInitializationError = PrismaClientInitializationError;
Prisma.PrismaClientValidationError = PrismaClientValidationError;
Prisma.Decimal = Decimal;

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag;
Prisma.empty = empty;
Prisma.join = join;
Prisma.raw = raw;
Prisma.validator = Public.validator;

/**
 * Extensions
 */
Prisma.getExtensionContext = Extensions.getExtensionContext;
Prisma.defineExtension = Extensions.defineExtension;

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

const path = require('path');

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
  qualite_sites_baignade: 'qualite_sites_baignade'
};
/**
 * Create the Client
 */
const config = {
  generator: {
    name: 'client',
    provider: {
      fromEnvVar: null,
      value: 'prisma-client-js'
    },
    output: {
      value:
        'C:\\Antoine\\BetaGouv\\Code\\facili-tacct\\facili-tacct\\src\\generated\\client',
      fromEnvVar: null
    },
    config: {
      engineType: 'library'
    },
    binaryTargets: [
      {
        fromEnvVar: null,
        value: 'windows',
        native: true
      },
      {
        fromEnvVar: null,
        value: 'debian-openssl-3.0.x'
      }
    ],
    previewFeatures: ['multiSchema'],
    sourceFilePath:
      'C:\\Antoine\\BetaGouv\\Code\\facili-tacct\\facili-tacct\\prisma\\schema.prisma',
    isCustomOutput: true
  },
  relativeEnvPaths: {
    rootEnvPath: null,
    schemaEnvPath: '../../../.env'
  },
  relativePath: '../../../prisma',
  clientVersion: '6.3.0',
  engineVersion: 'a9055b89e58b4b5bfb59600785423b1db3d0e75d',
  datasourceNames: ['db'],
  activeProvider: 'postgresql',
  postinstall: false,
  inlineDatasources: {
    db: {
      url: {
        fromEnvVar: 'SCALINGO_POSTGRESQL_URL',
        value: null
      }
    }
  },
  inlineSchema:
    'generator client {\n  provider        = "prisma-client-js"\n  output          = "../src/generated/client"\n  previewFeatures = ["multiSchema"]\n  binaryTargets   = ["native", "debian-openssl-3.0.x"]\n}\n\ndatasource db {\n  provider = "postgresql"\n  url      = env("SCALINGO_POSTGRESQL_URL")\n  schemas  = ["analytics", "databases", "postgis", "ressources"]\n}\n\nmodel inconfort_thermique {\n  index                    BigInt  @id(map: "inconfort_thermique2_pkey")\n  code_geographique        String\n  libelle_geographique     String\n  epci                     String\n  libelle_epci             String\n  departement              String\n  region                   Int\n  age_bati_post06          Float?\n  age_bati_91_05           Float?\n  age_bati_46_90           Float?\n  age_bati_19_45           Float?\n  age_bati_pre_19          Float?\n  under_4_sum_1968         String?\n  to_80_sum_1968           String? @map("4_to_80_sum_1968")\n  over_80_sum_1968         String?\n  under_4_sum_1975         String?\n  to_80_sum_1975           String? @map("4_to_80_sum_1975")\n  over_80_sum_1975         String?\n  under_4_sum_1982         String?\n  to_80_sum_1982           String? @map("4_to_80_sum_1982")\n  over_80_sum_1982         String?\n  under_4_sum_1990         String?\n  to_80_sum_1990           String? @map("4_to_80_sum_1990")\n  over_80_sum_1990         String?\n  under_4_sum_1999         String?\n  to_80_sum_1999           String? @map("4_to_80_sum_1999")\n  over_80_sum_1999         String?\n  under_4_sum_2009         String?\n  to_80_sum_2009           String? @map("4_to_80_sum_2009")\n  over_80_sum_2009         String?\n  under_4_sum_2014         String?\n  to_80_sum_2014           String? @map("4_to_80_sum_2014")\n  over_80_sum_2014         String?\n  under_4_sum_2020         String?\n  to_80_sum_2020           String? @map("4_to_80_sum_2020")\n  over_80_sum_2020         String?\n  P20_POP80P               String?\n  P20_POP80P_PSEUL         String?\n  P20_POP80P_PSEUL_PERCENT String?\n  tee_log                  Float?\n  tee_mob                  Float?\n  precarite_logement       Float?\n  NA5AZ_sum                Float?\n  NA5BE_sum                Float?\n  NA5FZ_sum                Float?\n  NA5GU_sum                Float?\n  NA5OQ_sum                Float?\n  s_geom_cstr_bati         Float?\n  hauteur                  Float?\n  h_x_s                    Float?\n  densite_bati             Float?\n  clc_1_artificialise      Float?\n  clc_2_agricole           Float?\n  clc_3_foret_semiNaturel  Float?\n  clc_4_humide             Float?\n  clc_5_eau                Float?\n  superf_choro             Float?\n\n  @@index([code_geographique], map: "inconfort_thermique_communes_index")\n  @@index([departement], map: "inconfort_thermique_departement_index")\n  @@index([epci], map: "inconfort_thermique_epci_index")\n  @@index([index], map: "ix_inconfort_thermique2_index")\n  @@schema("databases")\n}\n\nmodel clc_epci {\n  pk        Int                      @id @default(autoincrement())\n  legend    String?                  @db.VarChar\n  epci_code Int?\n  geometry  Unsupported("geometry")?\n\n  @@index([geometry], map: "clc_epci_geometry_geom_idx", type: Gist)\n  @@index([epci_code], map: "clc_epci_index")\n  @@schema("postgis")\n}\n\nmodel collectivites_searchbar {\n  index           BigInt  @id\n  code_commune    String?\n  coordinates     String?\n  libelle_commune String?\n  code_epci       String\n  libelle_epci    String\n  departement     String\n  region          String\n  search_code     String\n  search_libelle  String\n\n  @@index([index], map: "ix_collectivites_searchbar_index")\n  @@schema("databases")\n}\n\nmodel biodiversite {\n  index                BigInt  @id\n  code_geographique    String?\n  type_touristique     String?\n  libelle_geographique String?\n  epci                 String?\n  libelle_epci         String?\n  departement          String?\n  region               Float?\n\n  @@index([index], map: "ix_biodiversite_index")\n  @@schema("databases")\n}\n\nmodel gestion_risques {\n  index                BigInt  @id\n  code_geographique    String?\n  lib_risque_jo        String?\n  dat_pub_arrete       String?\n  libelle_geographique String?\n  epci                 String?\n  libelle_epci         String?\n  departement          String?\n  region               Float?\n\n  @@index([index], map: "ix_gestion_risques_index")\n  @@schema("databases")\n}\n\nmodel communes_drom {\n  pk                 Int                     @id @default(autoincrement())\n  code_commune       String                  @db.VarChar\n  libelle_commune    String                  @db.VarChar\n  epci               String                  @db.VarChar\n  libelle_epci       String                  @db.VarChar\n  coordinates        String                  @db.VarChar\n  densite_bati       Float?\n  precarite_logement Float?\n  surface            Float?\n  geometry           Unsupported("geometry")\n\n  @@index([geometry], map: "communes_drom_geometry_geom_idx", type: Gist)\n  @@index([epci], map: "communes_drom_codepci_index")\n  @@index([code_commune], map: "communes_drom_codgeo_index", type: Brin)\n  @@schema("postgis")\n}\n\nmodel ressources_eau {\n  index                BigInt  @id\n  code_geographique    String\n  LIBELLE_SOUS_CHAMP   String?\n  SOUS_CHAMP           String?\n  A2020                Float?\n  A2019                Float?\n  A2018                Float?\n  A2017                Float?\n  A2016                Float?\n  A2015                Float?\n  A2014                Float?\n  A2013                Float?\n  A2012                Float?\n  A2011                Float?\n  A2010                Float?\n  A2009                Float?\n  A2008                Float?\n  libelle_geographique String?\n  epci                 String?\n  libelle_epci         String?\n  departement          String?\n  region               Float?\n\n  @@index([index], map: "ix_ressources_eau_index")\n  @@index([epci], map: "ressources_eau_codepci_index")\n  @@index([departement], map: "ressources_eau_departement_index", type: Brin)\n  @@schema("databases")\n}\n\nmodel agriculture_bio {\n  index              BigInt  @id\n  epci               String\n  libelle_epci       String\n  VARIABLE           String\n  LIBELLE_SOUS_CHAMP String?\n  surface_2022       Float\n  surface_2021       Float\n  surface_2020       Float\n  surface_2019       Float\n  nombre_2022        Float\n  nombre_2021        Float\n  nombre_2020        Float\n  nombre_2019        Float\n\n  @@index([index], map: "ix_agriculture_bio_index")\n  @@schema("databases")\n}\n\nmodel erosion_cotiere {\n  pk         Int                     @id @default(autoincrement())\n  taux       Float\n  duree      Float\n  tdc_ancien BigInt\n  tdc_rec    BigInt\n  geometry   Unsupported("geometry")\n\n  @@index([geometry], map: "erosion_cotiere_geometry_geom_idx", type: Gist)\n  @@schema("postgis")\n}\n\nmodel epci {\n  pk        Int                     @id @default(autoincrement())\n  epci_code String                  @db.VarChar\n  geometry  Unsupported("geometry")\n\n  @@index([geometry], map: "epci_geometry_geom_idx", type: Gist)\n  @@schema("postgis")\n}\n\nmodel surfaces_protegees {\n  index                BigInt  @id\n  code_geographique    String\n  PNC                  String?\n  RAMSAR               String?\n  PNR                  String?\n  PNP                  String?\n  FOR_PRO              String?\n  ZZZ                  String?\n  ZNIEFF2              String?\n  ZNIEFF1              String?\n  RNR                  String?\n  TOU_PRO              String?\n  NATURA               String?\n  ZPS                  String?\n  SIC                  String?\n  CELRL                String?\n  BIO                  String?\n  APB                  String?\n  RN                   String?\n  RBFD                 String?\n  RNCFS                String?\n  libelle_geographique String\n  epci                 String\n  libelle_epci         String\n  departement          String\n  region               Float\n\n  @@index([index], map: "ix_surfaces_protegees_index")\n  @@schema("databases")\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel spatial_ref_sys {\n  srid      Int     @id\n  auth_name String? @db.VarChar(256)\n  auth_srid Int?\n  srtext    String? @db.VarChar(2048)\n  proj4text String? @db.VarChar(2048)\n\n  @@schema("postgis")\n}\n\nmodel consommation_espaces_naf {\n  index                BigInt @id\n  code_geographique    String\n  libelle_geographique String\n  epci                 String\n  libelle_epci         String\n  departement          String\n  region               Int\n  naf09art10           Float\n  art09act10           Float\n  art09hab10           Float\n  art09mix10           Float\n  art09rou10           Float\n  art09fer10           Float\n  art09inc10           Float\n  naf10art11           Float\n  art10act11           Float\n  art10hab11           Float\n  art10mix11           Float\n  art10rou11           Float\n  art10fer11           Float\n  art10inc11           Float\n  naf11art12           Float\n  art11act12           Float\n  art11hab12           Float\n  art11mix12           Float\n  art11rou12           Float\n  art11fer12           Float\n  art11inc12           Float\n  naf12art13           Float\n  art12act13           Float\n  art12hab13           Float\n  art12mix13           Float\n  art12rou13           Float\n  art12fer13           Float\n  art12inc13           Float\n  naf13art14           Float\n  art13act14           Float\n  art13hab14           Float\n  art13mix14           Float\n  art13rou14           Float\n  art13fer14           Float\n  art13inc14           Float\n  naf14art15           Float\n  art14act15           Float\n  art14hab15           Float\n  art14mix15           Float\n  art14rou15           Float\n  art14fer15           Float\n  art14inc15           Float\n  naf15art16           Float\n  art15act16           Float\n  art15hab16           Float\n  art15mix16           Float\n  art15rou16           Float\n  art15fer16           Float\n  art15inc16           Float\n  naf16art17           Float\n  art16act17           Float\n  art16hab17           Float\n  art16mix17           Float\n  art16rou17           Float\n  art16fer17           Float\n  art16inc17           Float\n  naf17art18           Float\n  art17act18           Float\n  art17hab18           Float\n  art17mix18           Float\n  art17rou18           Float\n  art17fer18           Float\n  art17inc18           Float\n  naf18art19           Float\n  art18act19           Float\n  art18hab19           Float\n  art18mix19           Float\n  art18rou19           Float\n  art18fer19           Float\n  art18inc19           Float\n  naf19art20           Float\n  art19act20           Float\n  art19hab20           Float\n  art19mix20           Float\n  art19rou20           Float\n  art19fer20           Float\n  art19inc20           Float\n  naf20art21           Float\n  art20act21           Float\n  art20hab21           Float\n  art20mix21           Float\n  art20rou21           Float\n  art20fer21           Float\n  art20inc21           Float\n  naf21art22           Float\n  art21act22           Float\n  art21hab22           Float\n  art21mix22           Float\n  art21rou22           Float\n  art21fer22           Float\n  art21inc22           Float\n  naf22art23           Float\n  art22act23           Float\n  art22hab23           Float\n  art22mix23           Float\n  art22rou23           Float\n  art22fer23           Float\n  art22inc23           Float\n  naf09art23           Float\n  art09act23           Float\n  art09hab23           Float\n  art09mix23           Float\n  art09inc23           Float\n  art09rou23           Float\n  art09fer23           Float\n  artcom0923           Float\n  pop14                Float\n  pop20                Float\n  pop1420              Float\n  men14                Float\n  men20                Float\n  men1420              Float\n  emp14                Float\n  emp20                Float\n  emp1420              Float\n  mepart1420           Float\n  menhab1420           Float\n  artpop1420           Float?\n  surfcom2023          Float\n  C10_MEN              Float?\n  C15_MEN              Float?\n  C21_MEN              Float?\n\n  @@index([index], map: "ix_consommation_espaces_naf_index")\n  @@schema("databases")\n}\n\nmodel lcz_bayonne_test {\n  pk         Int                      @id @default(autoincrement())\n  identifier String?                  @db.VarChar\n  hre        Float?\n  are        Float?\n  bur        Float?\n  ror        Float?\n  bsr        Float?\n  war        Float?\n  ver        Float?\n  vhr        Float?\n  lcz        String?                  @db.VarChar\n  lcz_int    Int?\n  geometry   Unsupported("geometry")?\n\n  @@index([geometry], map: "lcz_bayonne_test_geometry_geom_idx", type: Gist)\n  @@schema("postgis")\n}\n\nmodel north_star_metric {\n  value String   @db.VarChar(32)\n  date  DateTime @db.Timestamp(6)\n  pk    Int      @id\n\n  @@schema("analytics")\n}\n\nmodel etat_cours_d_eau {\n  pk       Int                     @id @default(autoincrement())\n  name     String                  @db.VarChar\n  longueur Float\n  etateco  String?                 @db.VarChar\n  geometry Unsupported("geometry")\n\n  @@index([geometry], map: "etat_cours_d_eau_geometry_geom_idx", type: Gist)\n  @@schema("postgis")\n}\n\nmodel aot_40 {\n  index               BigInt @id\n  nom_site            String @map("nom site")\n  type_d_implantation String @map("type d\'implantation")\n  valeur_brute        Float  @map("valeur brute")\n  Latitude            Float\n  Longitude           Float\n\n  @@index([index], map: "ix_aot_40_index")\n  @@schema("databases")\n}\n\nmodel users {\n  pk              Int       @id @default(autoincrement())\n  email           String    @unique(map: "email") @db.VarChar(256)\n  username        String    @unique(map: "username") @db.VarChar(256)\n  password        String    @db.VarChar(256)\n  created_at      DateTime  @db.Timestamp(6)\n  last_connection DateTime? @db.Timestamptz(6)\n  role            String    @db.VarChar(8)\n\n  @@schema("ressources")\n}\n\nmodel qualite_sites_baignade {\n  index    BigInt  @id\n  DEP_NOM  String\n  DEP_NUM  String\n  TYPE     String\n  COMMUNE  String\n  POINT    String\n  LONG     Float\n  LAT      Float\n  QEB_2013 String?\n  QEB_2014 String?\n  QEB_2015 String?\n  QEB_2016 String?\n  QEB_2017 String?\n  QEB_2018 String?\n  QEB_2019 String?\n  QEB_2020 String?\n\n  @@index([index], map: "ix_qualite_sites_baignade_index")\n  @@schema("databases")\n}\n',
  inlineSchemaHash:
    '8604271378ab676648275ac203df5b340bcaa903074ae50b7d9df9218fe3daee',
  copyEngine: true
};

const fs = require('fs');

config.dirname = __dirname;
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = ['src/generated/client', 'generated/client'];

  const alternativePath =
    alternativePaths.find((altPath) => {
      return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'));
    }) ?? alternativePaths[0];

  config.dirname = path.join(process.cwd(), alternativePath);
  config.isBundled = true;
}

config.runtimeDataModel = JSON.parse(
  '{"models":{"inconfort_thermique":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"age_bati_post06","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"age_bati_91_05","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"age_bati_46_90","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"age_bati_19_45","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"age_bati_pre_19","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_1968","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_1968","dbName":"4_to_80_sum_1968","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_1968","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_1975","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_1975","dbName":"4_to_80_sum_1975","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_1975","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_1982","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_1982","dbName":"4_to_80_sum_1982","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_1982","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_1990","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_1990","dbName":"4_to_80_sum_1990","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_1990","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_1999","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_1999","dbName":"4_to_80_sum_1999","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_1999","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_2009","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_2009","dbName":"4_to_80_sum_2009","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_2009","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_2014","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_2014","dbName":"4_to_80_sum_2014","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_2014","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"under_4_sum_2020","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"to_80_sum_2020","dbName":"4_to_80_sum_2020","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"over_80_sum_2020","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"P20_POP80P","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"P20_POP80P_PSEUL","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"P20_POP80P_PSEUL_PERCENT","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tee_log","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tee_mob","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"precarite_logement","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"NA5AZ_sum","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"NA5BE_sum","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"NA5FZ_sum","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"NA5GU_sum","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"NA5OQ_sum","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"s_geom_cstr_bati","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"hauteur","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"h_x_s","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"densite_bati","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"clc_1_artificialise","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"clc_2_agricole","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"clc_3_foret_semiNaturel","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"clc_4_humide","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"clc_5_eau","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"superf_choro","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"clc_epci":{"dbName":null,"schema":"postgis","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"legend","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"epci_code","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"collectivites_searchbar":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_commune","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"coordinates","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_commune","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"search_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"search_libelle","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"biodiversite":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_geographique","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"type_touristique","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_geographique","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"gestion_risques":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_geographique","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lib_risque_jo","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"dat_pub_arrete","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_geographique","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"communes_drom":{"dbName":null,"schema":"postgis","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"code_commune","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_commune","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"coordinates","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"densite_bati","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"precarite_logement","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"surface","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"ressources_eau":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"LIBELLE_SOUS_CHAMP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"SOUS_CHAMP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2020","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2019","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2018","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2017","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2016","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2015","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2014","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2013","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2012","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2011","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2010","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2009","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"A2008","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_geographique","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"agriculture_bio":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"VARIABLE","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"LIBELLE_SOUS_CHAMP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"surface_2022","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"surface_2021","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"surface_2020","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"surface_2019","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nombre_2022","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nombre_2021","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nombre_2020","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nombre_2019","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"erosion_cotiere":{"dbName":null,"schema":"postgis","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"taux","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"duree","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tdc_ancien","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"tdc_rec","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"epci":{"dbName":null,"schema":"postgis","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"epci_code","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"surfaces_protegees":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"PNC","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"RAMSAR","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"PNR","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"PNP","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"FOR_PRO","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ZZZ","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ZNIEFF2","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ZNIEFF1","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"RNR","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"TOU_PRO","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"NATURA","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ZPS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"SIC","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"CELRL","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"BIO","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"APB","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"RN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"RBFD","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"RNCFS","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"spatial_ref_sys":{"dbName":null,"schema":"postgis","fields":[{"name":"srid","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"auth_name","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["256"]],"isGenerated":false,"isUpdatedAt":false},{"name":"auth_srid","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"srtext","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["2048"]],"isGenerated":false,"isUpdatedAt":false},{"name":"proj4text","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["2048"]],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false,"documentation":"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info."},"consommation_espaces_naf":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"code_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_geographique","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"libelle_epci","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"departement","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"region","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf09art10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09act10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09hab10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09mix10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09rou10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09fer10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09inc10","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf10art11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art10act11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art10hab11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art10mix11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art10rou11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art10fer11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art10inc11","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf11art12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art11act12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art11hab12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art11mix12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art11rou12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art11fer12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art11inc12","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf12art13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art12act13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art12hab13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art12mix13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art12rou13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art12fer13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art12inc13","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf13art14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art13act14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art13hab14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art13mix14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art13rou14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art13fer14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art13inc14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf14art15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art14act15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art14hab15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art14mix15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art14rou15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art14fer15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art14inc15","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf15art16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art15act16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art15hab16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art15mix16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art15rou16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art15fer16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art15inc16","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf16art17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art16act17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art16hab17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art16mix17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art16rou17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art16fer17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art16inc17","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf17art18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art17act18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art17hab18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art17mix18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art17rou18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art17fer18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art17inc18","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf18art19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art18act19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art18hab19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art18mix19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art18rou19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art18fer19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art18inc19","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf19art20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art19act20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art19hab20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art19mix20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art19rou20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art19fer20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art19inc20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf20art21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art20act21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art20hab21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art20mix21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art20rou21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art20fer21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art20inc21","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf21art22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art21act22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art21hab22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art21mix22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art21rou22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art21fer22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art21inc22","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf22art23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art22act23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art22hab23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art22mix23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art22rou23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art22fer23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art22inc23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"naf09art23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09act23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09hab23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09mix23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09inc23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09rou23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"art09fer23","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"artcom0923","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"pop14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"pop20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"pop1420","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"men14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"men20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"men1420","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"emp14","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"emp20","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"emp1420","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"mepart1420","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"menhab1420","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"artpop1420","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"surfcom2023","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"C10_MEN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"C15_MEN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"C21_MEN","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"lcz_bayonne_test":{"dbName":null,"schema":"postgis","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"identifier","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"hre","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"are","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"bur","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ror","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"bsr","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"war","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"ver","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"vhr","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"lcz","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"lcz_int","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"north_star_metric":{"dbName":null,"schema":"analytics","fields":[{"name":"value","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["32"]],"isGenerated":false,"isUpdatedAt":false},{"name":"date","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"Int","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"etat_cours_d_eau":{"dbName":null,"schema":"postgis","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"name","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false},{"name":"longueur","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"etateco","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",[]],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"aot_40":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"nom_site","dbName":"nom site","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"type_d_implantation","dbName":"type d\'implantation","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"valeur_brute","dbName":"valeur brute","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"Latitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"Longitude","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"users":{"dbName":null,"schema":"ressources","fields":[{"name":"pk","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":true,"type":"Int","nativeType":null,"default":{"name":"autoincrement","args":[]},"isGenerated":false,"isUpdatedAt":false},{"name":"email","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["256"]],"isGenerated":false,"isUpdatedAt":false},{"name":"username","kind":"scalar","isList":false,"isRequired":true,"isUnique":true,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["256"]],"isGenerated":false,"isUpdatedAt":false},{"name":"password","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["256"]],"isGenerated":false,"isUpdatedAt":false},{"name":"created_at","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamp",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"last_connection","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"DateTime","nativeType":["Timestamptz",["6"]],"isGenerated":false,"isUpdatedAt":false},{"name":"role","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":["VarChar",["8"]],"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false},"qualite_sites_baignade":{"dbName":null,"schema":"databases","fields":[{"name":"index","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":true,"isReadOnly":false,"hasDefaultValue":false,"type":"BigInt","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"DEP_NOM","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"DEP_NUM","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"TYPE","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"COMMUNE","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"POINT","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"LONG","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"LAT","kind":"scalar","isList":false,"isRequired":true,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"Float","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2013","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2014","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2015","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2016","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2017","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2018","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2019","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false},{"name":"QEB_2020","kind":"scalar","isList":false,"isRequired":false,"isUnique":false,"isId":false,"isReadOnly":false,"hasDefaultValue":false,"type":"String","nativeType":null,"isGenerated":false,"isUpdatedAt":false}],"primaryKey":null,"uniqueFields":[],"uniqueIndexes":[],"isGenerated":false}},"enums":{},"types":{}}'
);
defineDmmfProperty(exports.Prisma, config.runtimeDataModel);
config.engineWasm = undefined;
config.compilerWasm = undefined;

const { warnEnvConflicts } = require('./runtime/library.js');

warnEnvConflicts({
  rootEnvPath:
    config.relativeEnvPaths.rootEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
  schemaEnvPath:
    config.relativeEnvPaths.schemaEnvPath &&
    path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
});

const PrismaClient = getPrismaClient(config);
exports.PrismaClient = PrismaClient;
Object.assign(exports, Prisma);

// file annotations for bundling tools to include these files
path.join(__dirname, 'query_engine-windows.dll.node');
path.join(process.cwd(), 'src/generated/client/query_engine-windows.dll.node');

// file annotations for bundling tools to include these files
path.join(__dirname, 'libquery_engine-debian-openssl-3.0.x.so.node');
path.join(
  process.cwd(),
  'src/generated/client/libquery_engine-debian-openssl-3.0.x.so.node'
);
// file annotations for bundling tools to include these files
path.join(__dirname, 'schema.prisma');
path.join(process.cwd(), 'src/generated/client/schema.prisma');
