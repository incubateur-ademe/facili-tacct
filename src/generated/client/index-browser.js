
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.16.2
 * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
 */
Prisma.prismaVersion = {
  client: "5.16.2",
  engine: "34ace0eb2704183d2c05b60b52fba5c43c13f303"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

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
  superf_choro: 'superf_choro',
  s_geom_cstr_bati: 's_geom_cstr_bati',
  hauteur: 'hauteur',
  h_x_s: 'h_x_s',
  densite_bati: 'densite_bati',
  clc_2_agricole: 'clc_2_agricole',
  clc_3_foret_semiNaturel: 'clc_3_foret_semiNaturel',
  clc_4_humide: 'clc_4_humide',
  clc_5_eau: 'clc_5_eau',
  clc_1_artificialise: 'clc_1_artificialise'
};

exports.Prisma.Clc_epciScalarFieldEnum = {
  pk: 'pk',
  legend: 'legend',
  epci_code: 'epci_code'
};

exports.Prisma.CommunesScalarFieldEnum = {
  pk: 'pk',
  code_commune: 'code_commune',
  libelle_commune: 'libelle_commune',
  epci: 'epci',
  libelle_epci: 'libelle_epci',
  libgeo: 'libgeo',
  coordinates: 'coordinates',
  densite_bati: 'densite_bati',
  precarite_logement: 'precarite_logement'
};

exports.Prisma.Collectivites_searchbarScalarFieldEnum = {
  index: 'index',
  code_commune: 'code_commune',
  libelle_commune: 'libelle_commune',
  code_epci: 'code_epci',
  libelle_epci: 'libelle_epci',
  departement: 'departement',
  region: 'region',
  search_code: 'search_code',
  search_libelle: 'search_libelle'
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
  communes: 'communes',
  collectivites_searchbar: 'collectivites_searchbar'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
