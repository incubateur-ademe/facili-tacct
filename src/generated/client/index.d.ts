
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model inconfort_thermique
 * 
 */
export type inconfort_thermique = $Result.DefaultSelection<Prisma.$inconfort_thermiquePayload>
/**
 * Model clc_epci
 * 
 */
export type clc_epci = $Result.DefaultSelection<Prisma.$clc_epciPayload>
/**
 * Model communes
 * 
 */
export type communes = $Result.DefaultSelection<Prisma.$communesPayload>
/**
 * Model collectivites_searchbar
 * 
 */
export type collectivites_searchbar = $Result.DefaultSelection<Prisma.$collectivites_searchbarPayload>
/**
 * Model biodiversite
 * 
 */
export type biodiversite = $Result.DefaultSelection<Prisma.$biodiversitePayload>
/**
 * Model gestion_risques
 * 
 */
export type gestion_risques = $Result.DefaultSelection<Prisma.$gestion_risquesPayload>
/**
 * Model communes_drom
 * 
 */
export type communes_drom = $Result.DefaultSelection<Prisma.$communes_dromPayload>
/**
 * Model ressources_eau
 * 
 */
export type ressources_eau = $Result.DefaultSelection<Prisma.$ressources_eauPayload>
/**
 * Model agriculture_bio
 * 
 */
export type agriculture_bio = $Result.DefaultSelection<Prisma.$agriculture_bioPayload>
/**
 * Model erosion_cotiere
 * 
 */
export type erosion_cotiere = $Result.DefaultSelection<Prisma.$erosion_cotierePayload>
/**
 * Model epci
 * 
 */
export type epci = $Result.DefaultSelection<Prisma.$epciPayload>
/**
 * Model surfaces_protegees
 * 
 */
export type surfaces_protegees = $Result.DefaultSelection<Prisma.$surfaces_protegeesPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inconfort_thermiques
 * const inconfort_thermiques = await prisma.inconfort_thermique.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inconfort_thermiques
   * const inconfort_thermiques = await prisma.inconfort_thermique.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.inconfort_thermique`: Exposes CRUD operations for the **inconfort_thermique** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inconfort_thermiques
    * const inconfort_thermiques = await prisma.inconfort_thermique.findMany()
    * ```
    */
  get inconfort_thermique(): Prisma.inconfort_thermiqueDelegate<ExtArgs>;

  /**
   * `prisma.clc_epci`: Exposes CRUD operations for the **clc_epci** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clc_epcis
    * const clc_epcis = await prisma.clc_epci.findMany()
    * ```
    */
  get clc_epci(): Prisma.clc_epciDelegate<ExtArgs>;

  /**
   * `prisma.communes`: Exposes CRUD operations for the **communes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes
    * const communes = await prisma.communes.findMany()
    * ```
    */
  get communes(): Prisma.communesDelegate<ExtArgs>;

  /**
   * `prisma.collectivites_searchbar`: Exposes CRUD operations for the **collectivites_searchbar** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collectivites_searchbars
    * const collectivites_searchbars = await prisma.collectivites_searchbar.findMany()
    * ```
    */
  get collectivites_searchbar(): Prisma.collectivites_searchbarDelegate<ExtArgs>;

  /**
   * `prisma.biodiversite`: Exposes CRUD operations for the **biodiversite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Biodiversites
    * const biodiversites = await prisma.biodiversite.findMany()
    * ```
    */
  get biodiversite(): Prisma.biodiversiteDelegate<ExtArgs>;

  /**
   * `prisma.gestion_risques`: Exposes CRUD operations for the **gestion_risques** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Gestion_risques
    * const gestion_risques = await prisma.gestion_risques.findMany()
    * ```
    */
  get gestion_risques(): Prisma.gestion_risquesDelegate<ExtArgs>;

  /**
   * `prisma.communes_drom`: Exposes CRUD operations for the **communes_drom** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes_droms
    * const communes_droms = await prisma.communes_drom.findMany()
    * ```
    */
  get communes_drom(): Prisma.communes_dromDelegate<ExtArgs>;

  /**
   * `prisma.ressources_eau`: Exposes CRUD operations for the **ressources_eau** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ressources_eaus
    * const ressources_eaus = await prisma.ressources_eau.findMany()
    * ```
    */
  get ressources_eau(): Prisma.ressources_eauDelegate<ExtArgs>;

  /**
   * `prisma.agriculture_bio`: Exposes CRUD operations for the **agriculture_bio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Agriculture_bios
    * const agriculture_bios = await prisma.agriculture_bio.findMany()
    * ```
    */
  get agriculture_bio(): Prisma.agriculture_bioDelegate<ExtArgs>;

  /**
   * `prisma.erosion_cotiere`: Exposes CRUD operations for the **erosion_cotiere** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Erosion_cotieres
    * const erosion_cotieres = await prisma.erosion_cotiere.findMany()
    * ```
    */
  get erosion_cotiere(): Prisma.erosion_cotiereDelegate<ExtArgs>;

  /**
   * `prisma.epci`: Exposes CRUD operations for the **epci** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Epcis
    * const epcis = await prisma.epci.findMany()
    * ```
    */
  get epci(): Prisma.epciDelegate<ExtArgs>;

  /**
   * `prisma.surfaces_protegees`: Exposes CRUD operations for the **surfaces_protegees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surfaces_protegees
    * const surfaces_protegees = await prisma.surfaces_protegees.findMany()
    * ```
    */
  get surfaces_protegees(): Prisma.surfaces_protegeesDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    inconfort_thermique: 'inconfort_thermique',
    clc_epci: 'clc_epci',
    communes: 'communes',
    collectivites_searchbar: 'collectivites_searchbar',
    biodiversite: 'biodiversite',
    gestion_risques: 'gestion_risques',
    communes_drom: 'communes_drom',
    ressources_eau: 'ressources_eau',
    agriculture_bio: 'agriculture_bio',
    erosion_cotiere: 'erosion_cotiere',
    epci: 'epci',
    surfaces_protegees: 'surfaces_protegees'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "inconfort_thermique" | "clc_epci" | "communes" | "collectivites_searchbar" | "biodiversite" | "gestion_risques" | "communes_drom" | "ressources_eau" | "agriculture_bio" | "erosion_cotiere" | "epci" | "surfaces_protegees"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      inconfort_thermique: {
        payload: Prisma.$inconfort_thermiquePayload<ExtArgs>
        fields: Prisma.inconfort_thermiqueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inconfort_thermiqueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inconfort_thermiqueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>
          }
          findFirst: {
            args: Prisma.inconfort_thermiqueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inconfort_thermiqueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>
          }
          findMany: {
            args: Prisma.inconfort_thermiqueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>[]
          }
          create: {
            args: Prisma.inconfort_thermiqueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>
          }
          createMany: {
            args: Prisma.inconfort_thermiqueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inconfort_thermiqueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>[]
          }
          delete: {
            args: Prisma.inconfort_thermiqueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>
          }
          update: {
            args: Prisma.inconfort_thermiqueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>
          }
          deleteMany: {
            args: Prisma.inconfort_thermiqueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inconfort_thermiqueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.inconfort_thermiqueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inconfort_thermiquePayload>
          }
          aggregate: {
            args: Prisma.Inconfort_thermiqueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInconfort_thermique>
          }
          groupBy: {
            args: Prisma.inconfort_thermiqueGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inconfort_thermiqueGroupByOutputType>[]
          }
          count: {
            args: Prisma.inconfort_thermiqueCountArgs<ExtArgs>
            result: $Utils.Optional<Inconfort_thermiqueCountAggregateOutputType> | number
          }
        }
      }
      clc_epci: {
        payload: Prisma.$clc_epciPayload<ExtArgs>
        fields: Prisma.clc_epciFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clc_epciFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clc_epciFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>
          }
          findFirst: {
            args: Prisma.clc_epciFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clc_epciFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>
          }
          findMany: {
            args: Prisma.clc_epciFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>[]
          }
          create: {
            args: Prisma.clc_epciCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>
          }
          createMany: {
            args: Prisma.clc_epciCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clc_epciCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>[]
          }
          delete: {
            args: Prisma.clc_epciDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>
          }
          update: {
            args: Prisma.clc_epciUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>
          }
          deleteMany: {
            args: Prisma.clc_epciDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clc_epciUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clc_epciUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_epciPayload>
          }
          aggregate: {
            args: Prisma.Clc_epciAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClc_epci>
          }
          groupBy: {
            args: Prisma.clc_epciGroupByArgs<ExtArgs>
            result: $Utils.Optional<Clc_epciGroupByOutputType>[]
          }
          count: {
            args: Prisma.clc_epciCountArgs<ExtArgs>
            result: $Utils.Optional<Clc_epciCountAggregateOutputType> | number
          }
        }
      }
      communes: {
        payload: Prisma.$communesPayload<ExtArgs>
        fields: Prisma.communesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          findFirst: {
            args: Prisma.communesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          findMany: {
            args: Prisma.communesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>[]
          }
          create: {
            args: Prisma.communesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          createMany: {
            args: Prisma.communesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.communesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>[]
          }
          delete: {
            args: Prisma.communesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          update: {
            args: Prisma.communesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          deleteMany: {
            args: Prisma.communesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.communesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          aggregate: {
            args: Prisma.CommunesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunes>
          }
          groupBy: {
            args: Prisma.communesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommunesGroupByOutputType>[]
          }
          count: {
            args: Prisma.communesCountArgs<ExtArgs>
            result: $Utils.Optional<CommunesCountAggregateOutputType> | number
          }
        }
      }
      collectivites_searchbar: {
        payload: Prisma.$collectivites_searchbarPayload<ExtArgs>
        fields: Prisma.collectivites_searchbarFieldRefs
        operations: {
          findUnique: {
            args: Prisma.collectivites_searchbarFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.collectivites_searchbarFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>
          }
          findFirst: {
            args: Prisma.collectivites_searchbarFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.collectivites_searchbarFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>
          }
          findMany: {
            args: Prisma.collectivites_searchbarFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>[]
          }
          create: {
            args: Prisma.collectivites_searchbarCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>
          }
          createMany: {
            args: Prisma.collectivites_searchbarCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.collectivites_searchbarCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>[]
          }
          delete: {
            args: Prisma.collectivites_searchbarDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>
          }
          update: {
            args: Prisma.collectivites_searchbarUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>
          }
          deleteMany: {
            args: Prisma.collectivites_searchbarDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.collectivites_searchbarUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.collectivites_searchbarUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$collectivites_searchbarPayload>
          }
          aggregate: {
            args: Prisma.Collectivites_searchbarAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollectivites_searchbar>
          }
          groupBy: {
            args: Prisma.collectivites_searchbarGroupByArgs<ExtArgs>
            result: $Utils.Optional<Collectivites_searchbarGroupByOutputType>[]
          }
          count: {
            args: Prisma.collectivites_searchbarCountArgs<ExtArgs>
            result: $Utils.Optional<Collectivites_searchbarCountAggregateOutputType> | number
          }
        }
      }
      biodiversite: {
        payload: Prisma.$biodiversitePayload<ExtArgs>
        fields: Prisma.biodiversiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.biodiversiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.biodiversiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>
          }
          findFirst: {
            args: Prisma.biodiversiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.biodiversiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>
          }
          findMany: {
            args: Prisma.biodiversiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>[]
          }
          create: {
            args: Prisma.biodiversiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>
          }
          createMany: {
            args: Prisma.biodiversiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.biodiversiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>[]
          }
          delete: {
            args: Prisma.biodiversiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>
          }
          update: {
            args: Prisma.biodiversiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>
          }
          deleteMany: {
            args: Prisma.biodiversiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.biodiversiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.biodiversiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$biodiversitePayload>
          }
          aggregate: {
            args: Prisma.BiodiversiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBiodiversite>
          }
          groupBy: {
            args: Prisma.biodiversiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<BiodiversiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.biodiversiteCountArgs<ExtArgs>
            result: $Utils.Optional<BiodiversiteCountAggregateOutputType> | number
          }
        }
      }
      gestion_risques: {
        payload: Prisma.$gestion_risquesPayload<ExtArgs>
        fields: Prisma.gestion_risquesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.gestion_risquesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.gestion_risquesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>
          }
          findFirst: {
            args: Prisma.gestion_risquesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.gestion_risquesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>
          }
          findMany: {
            args: Prisma.gestion_risquesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>[]
          }
          create: {
            args: Prisma.gestion_risquesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>
          }
          createMany: {
            args: Prisma.gestion_risquesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.gestion_risquesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>[]
          }
          delete: {
            args: Prisma.gestion_risquesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>
          }
          update: {
            args: Prisma.gestion_risquesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>
          }
          deleteMany: {
            args: Prisma.gestion_risquesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.gestion_risquesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.gestion_risquesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$gestion_risquesPayload>
          }
          aggregate: {
            args: Prisma.Gestion_risquesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGestion_risques>
          }
          groupBy: {
            args: Prisma.gestion_risquesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Gestion_risquesGroupByOutputType>[]
          }
          count: {
            args: Prisma.gestion_risquesCountArgs<ExtArgs>
            result: $Utils.Optional<Gestion_risquesCountAggregateOutputType> | number
          }
        }
      }
      communes_drom: {
        payload: Prisma.$communes_dromPayload<ExtArgs>
        fields: Prisma.communes_dromFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communes_dromFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communes_dromFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload>
          }
          findFirst: {
            args: Prisma.communes_dromFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communes_dromFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload>
          }
          findMany: {
            args: Prisma.communes_dromFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload>[]
          }
          delete: {
            args: Prisma.communes_dromDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload>
          }
          update: {
            args: Prisma.communes_dromUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_dromPayload>
          }
          deleteMany: {
            args: Prisma.communes_dromDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communes_dromUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          aggregate: {
            args: Prisma.Communes_dromAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunes_drom>
          }
          groupBy: {
            args: Prisma.communes_dromGroupByArgs<ExtArgs>
            result: $Utils.Optional<Communes_dromGroupByOutputType>[]
          }
          count: {
            args: Prisma.communes_dromCountArgs<ExtArgs>
            result: $Utils.Optional<Communes_dromCountAggregateOutputType> | number
          }
        }
      }
      ressources_eau: {
        payload: Prisma.$ressources_eauPayload<ExtArgs>
        fields: Prisma.ressources_eauFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ressources_eauFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ressources_eauFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>
          }
          findFirst: {
            args: Prisma.ressources_eauFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ressources_eauFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>
          }
          findMany: {
            args: Prisma.ressources_eauFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>[]
          }
          create: {
            args: Prisma.ressources_eauCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>
          }
          createMany: {
            args: Prisma.ressources_eauCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ressources_eauCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>[]
          }
          delete: {
            args: Prisma.ressources_eauDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>
          }
          update: {
            args: Prisma.ressources_eauUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>
          }
          deleteMany: {
            args: Prisma.ressources_eauDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ressources_eauUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ressources_eauUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ressources_eauPayload>
          }
          aggregate: {
            args: Prisma.Ressources_eauAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRessources_eau>
          }
          groupBy: {
            args: Prisma.ressources_eauGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ressources_eauGroupByOutputType>[]
          }
          count: {
            args: Prisma.ressources_eauCountArgs<ExtArgs>
            result: $Utils.Optional<Ressources_eauCountAggregateOutputType> | number
          }
        }
      }
      agriculture_bio: {
        payload: Prisma.$agriculture_bioPayload<ExtArgs>
        fields: Prisma.agriculture_bioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.agriculture_bioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.agriculture_bioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>
          }
          findFirst: {
            args: Prisma.agriculture_bioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.agriculture_bioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>
          }
          findMany: {
            args: Prisma.agriculture_bioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>[]
          }
          create: {
            args: Prisma.agriculture_bioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>
          }
          createMany: {
            args: Prisma.agriculture_bioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.agriculture_bioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>[]
          }
          delete: {
            args: Prisma.agriculture_bioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>
          }
          update: {
            args: Prisma.agriculture_bioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>
          }
          deleteMany: {
            args: Prisma.agriculture_bioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.agriculture_bioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.agriculture_bioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$agriculture_bioPayload>
          }
          aggregate: {
            args: Prisma.Agriculture_bioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAgriculture_bio>
          }
          groupBy: {
            args: Prisma.agriculture_bioGroupByArgs<ExtArgs>
            result: $Utils.Optional<Agriculture_bioGroupByOutputType>[]
          }
          count: {
            args: Prisma.agriculture_bioCountArgs<ExtArgs>
            result: $Utils.Optional<Agriculture_bioCountAggregateOutputType> | number
          }
        }
      }
      erosion_cotiere: {
        payload: Prisma.$erosion_cotierePayload<ExtArgs>
        fields: Prisma.erosion_cotiereFieldRefs
        operations: {
          findUnique: {
            args: Prisma.erosion_cotiereFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.erosion_cotiereFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload>
          }
          findFirst: {
            args: Prisma.erosion_cotiereFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.erosion_cotiereFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload>
          }
          findMany: {
            args: Prisma.erosion_cotiereFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload>[]
          }
          delete: {
            args: Prisma.erosion_cotiereDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload>
          }
          update: {
            args: Prisma.erosion_cotiereUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$erosion_cotierePayload>
          }
          deleteMany: {
            args: Prisma.erosion_cotiereDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.erosion_cotiereUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          aggregate: {
            args: Prisma.Erosion_cotiereAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateErosion_cotiere>
          }
          groupBy: {
            args: Prisma.erosion_cotiereGroupByArgs<ExtArgs>
            result: $Utils.Optional<Erosion_cotiereGroupByOutputType>[]
          }
          count: {
            args: Prisma.erosion_cotiereCountArgs<ExtArgs>
            result: $Utils.Optional<Erosion_cotiereCountAggregateOutputType> | number
          }
        }
      }
      epci: {
        payload: Prisma.$epciPayload<ExtArgs>
        fields: Prisma.epciFieldRefs
        operations: {
          findUnique: {
            args: Prisma.epciFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.epciFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload>
          }
          findFirst: {
            args: Prisma.epciFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.epciFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload>
          }
          findMany: {
            args: Prisma.epciFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload>[]
          }
          delete: {
            args: Prisma.epciDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload>
          }
          update: {
            args: Prisma.epciUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$epciPayload>
          }
          deleteMany: {
            args: Prisma.epciDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.epciUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          aggregate: {
            args: Prisma.EpciAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEpci>
          }
          groupBy: {
            args: Prisma.epciGroupByArgs<ExtArgs>
            result: $Utils.Optional<EpciGroupByOutputType>[]
          }
          count: {
            args: Prisma.epciCountArgs<ExtArgs>
            result: $Utils.Optional<EpciCountAggregateOutputType> | number
          }
        }
      }
      surfaces_protegees: {
        payload: Prisma.$surfaces_protegeesPayload<ExtArgs>
        fields: Prisma.surfaces_protegeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.surfaces_protegeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.surfaces_protegeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>
          }
          findFirst: {
            args: Prisma.surfaces_protegeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.surfaces_protegeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>
          }
          findMany: {
            args: Prisma.surfaces_protegeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>[]
          }
          create: {
            args: Prisma.surfaces_protegeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>
          }
          createMany: {
            args: Prisma.surfaces_protegeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.surfaces_protegeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>[]
          }
          delete: {
            args: Prisma.surfaces_protegeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>
          }
          update: {
            args: Prisma.surfaces_protegeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>
          }
          deleteMany: {
            args: Prisma.surfaces_protegeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.surfaces_protegeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.surfaces_protegeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surfaces_protegeesPayload>
          }
          aggregate: {
            args: Prisma.Surfaces_protegeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurfaces_protegees>
          }
          groupBy: {
            args: Prisma.surfaces_protegeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Surfaces_protegeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.surfaces_protegeesCountArgs<ExtArgs>
            result: $Utils.Optional<Surfaces_protegeesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model inconfort_thermique
   */

  export type AggregateInconfort_thermique = {
    _count: Inconfort_thermiqueCountAggregateOutputType | null
    _avg: Inconfort_thermiqueAvgAggregateOutputType | null
    _sum: Inconfort_thermiqueSumAggregateOutputType | null
    _min: Inconfort_thermiqueMinAggregateOutputType | null
    _max: Inconfort_thermiqueMaxAggregateOutputType | null
  }

  export type Inconfort_thermiqueAvgAggregateOutputType = {
    index: number | null
    region: number | null
    age_bati_post06: number | null
    age_bati_91_05: number | null
    age_bati_46_90: number | null
    age_bati_19_45: number | null
    age_bati_pre_19: number | null
    under_4_sum_1968: number | null
    to_80_sum_1968: number | null
    over_80_sum_1968: number | null
    under_4_sum_1975: number | null
    to_80_sum_1975: number | null
    over_80_sum_1975: number | null
    under_4_sum_1982: number | null
    to_80_sum_1982: number | null
    over_80_sum_1982: number | null
    under_4_sum_1990: number | null
    to_80_sum_1990: number | null
    over_80_sum_1990: number | null
    under_4_sum_1999: number | null
    to_80_sum_1999: number | null
    over_80_sum_1999: number | null
    under_4_sum_2009: number | null
    to_80_sum_2009: number | null
    over_80_sum_2009: number | null
    under_4_sum_2014: number | null
    to_80_sum_2014: number | null
    over_80_sum_2014: number | null
    under_4_sum_2020: number | null
    to_80_sum_2020: number | null
    over_80_sum_2020: number | null
    P20_POP80P: number | null
    P20_POP80P_PSEUL: number | null
    P20_POP80P_PSEUL_PERCENT: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: number | null
    NA5BE_sum: number | null
    NA5FZ_sum: number | null
    NA5GU_sum: number | null
    NA5OQ_sum: number | null
    superf_choro: number | null
    s_geom_cstr_bati: number | null
    hauteur: number | null
    h_x_s: number | null
    densite_bati: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
    clc_1_artificialise: number | null
  }

  export type Inconfort_thermiqueSumAggregateOutputType = {
    index: bigint | null
    region: number | null
    age_bati_post06: number | null
    age_bati_91_05: number | null
    age_bati_46_90: number | null
    age_bati_19_45: number | null
    age_bati_pre_19: number | null
    under_4_sum_1968: number | null
    to_80_sum_1968: number | null
    over_80_sum_1968: number | null
    under_4_sum_1975: number | null
    to_80_sum_1975: number | null
    over_80_sum_1975: number | null
    under_4_sum_1982: number | null
    to_80_sum_1982: number | null
    over_80_sum_1982: number | null
    under_4_sum_1990: number | null
    to_80_sum_1990: number | null
    over_80_sum_1990: number | null
    under_4_sum_1999: number | null
    to_80_sum_1999: number | null
    over_80_sum_1999: number | null
    under_4_sum_2009: number | null
    to_80_sum_2009: number | null
    over_80_sum_2009: number | null
    under_4_sum_2014: number | null
    to_80_sum_2014: number | null
    over_80_sum_2014: number | null
    under_4_sum_2020: number | null
    to_80_sum_2020: number | null
    over_80_sum_2020: number | null
    P20_POP80P: number | null
    P20_POP80P_PSEUL: number | null
    P20_POP80P_PSEUL_PERCENT: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: number | null
    NA5BE_sum: number | null
    NA5FZ_sum: number | null
    NA5GU_sum: number | null
    NA5OQ_sum: number | null
    superf_choro: number | null
    s_geom_cstr_bati: number | null
    hauteur: number | null
    h_x_s: number | null
    densite_bati: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
    clc_1_artificialise: number | null
  }

  export type Inconfort_thermiqueMinAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
    age_bati_post06: number | null
    age_bati_91_05: number | null
    age_bati_46_90: number | null
    age_bati_19_45: number | null
    age_bati_pre_19: number | null
    under_4_sum_1968: number | null
    to_80_sum_1968: number | null
    over_80_sum_1968: number | null
    under_4_sum_1975: number | null
    to_80_sum_1975: number | null
    over_80_sum_1975: number | null
    under_4_sum_1982: number | null
    to_80_sum_1982: number | null
    over_80_sum_1982: number | null
    under_4_sum_1990: number | null
    to_80_sum_1990: number | null
    over_80_sum_1990: number | null
    under_4_sum_1999: number | null
    to_80_sum_1999: number | null
    over_80_sum_1999: number | null
    under_4_sum_2009: number | null
    to_80_sum_2009: number | null
    over_80_sum_2009: number | null
    under_4_sum_2014: number | null
    to_80_sum_2014: number | null
    over_80_sum_2014: number | null
    under_4_sum_2020: number | null
    to_80_sum_2020: number | null
    over_80_sum_2020: number | null
    P20_POP80P: number | null
    P20_POP80P_PSEUL: number | null
    P20_POP80P_PSEUL_PERCENT: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: number | null
    NA5BE_sum: number | null
    NA5FZ_sum: number | null
    NA5GU_sum: number | null
    NA5OQ_sum: number | null
    superf_choro: number | null
    s_geom_cstr_bati: number | null
    hauteur: number | null
    h_x_s: number | null
    densite_bati: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
    clc_1_artificialise: number | null
  }

  export type Inconfort_thermiqueMaxAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
    age_bati_post06: number | null
    age_bati_91_05: number | null
    age_bati_46_90: number | null
    age_bati_19_45: number | null
    age_bati_pre_19: number | null
    under_4_sum_1968: number | null
    to_80_sum_1968: number | null
    over_80_sum_1968: number | null
    under_4_sum_1975: number | null
    to_80_sum_1975: number | null
    over_80_sum_1975: number | null
    under_4_sum_1982: number | null
    to_80_sum_1982: number | null
    over_80_sum_1982: number | null
    under_4_sum_1990: number | null
    to_80_sum_1990: number | null
    over_80_sum_1990: number | null
    under_4_sum_1999: number | null
    to_80_sum_1999: number | null
    over_80_sum_1999: number | null
    under_4_sum_2009: number | null
    to_80_sum_2009: number | null
    over_80_sum_2009: number | null
    under_4_sum_2014: number | null
    to_80_sum_2014: number | null
    over_80_sum_2014: number | null
    under_4_sum_2020: number | null
    to_80_sum_2020: number | null
    over_80_sum_2020: number | null
    P20_POP80P: number | null
    P20_POP80P_PSEUL: number | null
    P20_POP80P_PSEUL_PERCENT: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: number | null
    NA5BE_sum: number | null
    NA5FZ_sum: number | null
    NA5GU_sum: number | null
    NA5OQ_sum: number | null
    superf_choro: number | null
    s_geom_cstr_bati: number | null
    hauteur: number | null
    h_x_s: number | null
    densite_bati: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
    clc_1_artificialise: number | null
  }

  export type Inconfort_thermiqueCountAggregateOutputType = {
    index: number
    code_geographique: number
    libelle_geographique: number
    epci: number
    libelle_epci: number
    departement: number
    region: number
    age_bati_post06: number
    age_bati_91_05: number
    age_bati_46_90: number
    age_bati_19_45: number
    age_bati_pre_19: number
    under_4_sum_1968: number
    to_80_sum_1968: number
    over_80_sum_1968: number
    under_4_sum_1975: number
    to_80_sum_1975: number
    over_80_sum_1975: number
    under_4_sum_1982: number
    to_80_sum_1982: number
    over_80_sum_1982: number
    under_4_sum_1990: number
    to_80_sum_1990: number
    over_80_sum_1990: number
    under_4_sum_1999: number
    to_80_sum_1999: number
    over_80_sum_1999: number
    under_4_sum_2009: number
    to_80_sum_2009: number
    over_80_sum_2009: number
    under_4_sum_2014: number
    to_80_sum_2014: number
    over_80_sum_2014: number
    under_4_sum_2020: number
    to_80_sum_2020: number
    over_80_sum_2020: number
    P20_POP80P: number
    P20_POP80P_PSEUL: number
    P20_POP80P_PSEUL_PERCENT: number
    tee_log: number
    tee_mob: number
    precarite_logement: number
    NA5AZ_sum: number
    NA5BE_sum: number
    NA5FZ_sum: number
    NA5GU_sum: number
    NA5OQ_sum: number
    superf_choro: number
    s_geom_cstr_bati: number
    hauteur: number
    h_x_s: number
    densite_bati: number
    clc_2_agricole: number
    clc_3_foret_semiNaturel: number
    clc_4_humide: number
    clc_5_eau: number
    clc_1_artificialise: number
    _all: number
  }


  export type Inconfort_thermiqueAvgAggregateInputType = {
    index?: true
    region?: true
    age_bati_post06?: true
    age_bati_91_05?: true
    age_bati_46_90?: true
    age_bati_19_45?: true
    age_bati_pre_19?: true
    under_4_sum_1968?: true
    to_80_sum_1968?: true
    over_80_sum_1968?: true
    under_4_sum_1975?: true
    to_80_sum_1975?: true
    over_80_sum_1975?: true
    under_4_sum_1982?: true
    to_80_sum_1982?: true
    over_80_sum_1982?: true
    under_4_sum_1990?: true
    to_80_sum_1990?: true
    over_80_sum_1990?: true
    under_4_sum_1999?: true
    to_80_sum_1999?: true
    over_80_sum_1999?: true
    under_4_sum_2009?: true
    to_80_sum_2009?: true
    over_80_sum_2009?: true
    under_4_sum_2014?: true
    to_80_sum_2014?: true
    over_80_sum_2014?: true
    under_4_sum_2020?: true
    to_80_sum_2020?: true
    over_80_sum_2020?: true
    P20_POP80P?: true
    P20_POP80P_PSEUL?: true
    P20_POP80P_PSEUL_PERCENT?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    superf_choro?: true
    s_geom_cstr_bati?: true
    hauteur?: true
    h_x_s?: true
    densite_bati?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
    clc_1_artificialise?: true
  }

  export type Inconfort_thermiqueSumAggregateInputType = {
    index?: true
    region?: true
    age_bati_post06?: true
    age_bati_91_05?: true
    age_bati_46_90?: true
    age_bati_19_45?: true
    age_bati_pre_19?: true
    under_4_sum_1968?: true
    to_80_sum_1968?: true
    over_80_sum_1968?: true
    under_4_sum_1975?: true
    to_80_sum_1975?: true
    over_80_sum_1975?: true
    under_4_sum_1982?: true
    to_80_sum_1982?: true
    over_80_sum_1982?: true
    under_4_sum_1990?: true
    to_80_sum_1990?: true
    over_80_sum_1990?: true
    under_4_sum_1999?: true
    to_80_sum_1999?: true
    over_80_sum_1999?: true
    under_4_sum_2009?: true
    to_80_sum_2009?: true
    over_80_sum_2009?: true
    under_4_sum_2014?: true
    to_80_sum_2014?: true
    over_80_sum_2014?: true
    under_4_sum_2020?: true
    to_80_sum_2020?: true
    over_80_sum_2020?: true
    P20_POP80P?: true
    P20_POP80P_PSEUL?: true
    P20_POP80P_PSEUL_PERCENT?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    superf_choro?: true
    s_geom_cstr_bati?: true
    hauteur?: true
    h_x_s?: true
    densite_bati?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
    clc_1_artificialise?: true
  }

  export type Inconfort_thermiqueMinAggregateInputType = {
    index?: true
    code_geographique?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    age_bati_post06?: true
    age_bati_91_05?: true
    age_bati_46_90?: true
    age_bati_19_45?: true
    age_bati_pre_19?: true
    under_4_sum_1968?: true
    to_80_sum_1968?: true
    over_80_sum_1968?: true
    under_4_sum_1975?: true
    to_80_sum_1975?: true
    over_80_sum_1975?: true
    under_4_sum_1982?: true
    to_80_sum_1982?: true
    over_80_sum_1982?: true
    under_4_sum_1990?: true
    to_80_sum_1990?: true
    over_80_sum_1990?: true
    under_4_sum_1999?: true
    to_80_sum_1999?: true
    over_80_sum_1999?: true
    under_4_sum_2009?: true
    to_80_sum_2009?: true
    over_80_sum_2009?: true
    under_4_sum_2014?: true
    to_80_sum_2014?: true
    over_80_sum_2014?: true
    under_4_sum_2020?: true
    to_80_sum_2020?: true
    over_80_sum_2020?: true
    P20_POP80P?: true
    P20_POP80P_PSEUL?: true
    P20_POP80P_PSEUL_PERCENT?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    superf_choro?: true
    s_geom_cstr_bati?: true
    hauteur?: true
    h_x_s?: true
    densite_bati?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
    clc_1_artificialise?: true
  }

  export type Inconfort_thermiqueMaxAggregateInputType = {
    index?: true
    code_geographique?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    age_bati_post06?: true
    age_bati_91_05?: true
    age_bati_46_90?: true
    age_bati_19_45?: true
    age_bati_pre_19?: true
    under_4_sum_1968?: true
    to_80_sum_1968?: true
    over_80_sum_1968?: true
    under_4_sum_1975?: true
    to_80_sum_1975?: true
    over_80_sum_1975?: true
    under_4_sum_1982?: true
    to_80_sum_1982?: true
    over_80_sum_1982?: true
    under_4_sum_1990?: true
    to_80_sum_1990?: true
    over_80_sum_1990?: true
    under_4_sum_1999?: true
    to_80_sum_1999?: true
    over_80_sum_1999?: true
    under_4_sum_2009?: true
    to_80_sum_2009?: true
    over_80_sum_2009?: true
    under_4_sum_2014?: true
    to_80_sum_2014?: true
    over_80_sum_2014?: true
    under_4_sum_2020?: true
    to_80_sum_2020?: true
    over_80_sum_2020?: true
    P20_POP80P?: true
    P20_POP80P_PSEUL?: true
    P20_POP80P_PSEUL_PERCENT?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    superf_choro?: true
    s_geom_cstr_bati?: true
    hauteur?: true
    h_x_s?: true
    densite_bati?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
    clc_1_artificialise?: true
  }

  export type Inconfort_thermiqueCountAggregateInputType = {
    index?: true
    code_geographique?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    age_bati_post06?: true
    age_bati_91_05?: true
    age_bati_46_90?: true
    age_bati_19_45?: true
    age_bati_pre_19?: true
    under_4_sum_1968?: true
    to_80_sum_1968?: true
    over_80_sum_1968?: true
    under_4_sum_1975?: true
    to_80_sum_1975?: true
    over_80_sum_1975?: true
    under_4_sum_1982?: true
    to_80_sum_1982?: true
    over_80_sum_1982?: true
    under_4_sum_1990?: true
    to_80_sum_1990?: true
    over_80_sum_1990?: true
    under_4_sum_1999?: true
    to_80_sum_1999?: true
    over_80_sum_1999?: true
    under_4_sum_2009?: true
    to_80_sum_2009?: true
    over_80_sum_2009?: true
    under_4_sum_2014?: true
    to_80_sum_2014?: true
    over_80_sum_2014?: true
    under_4_sum_2020?: true
    to_80_sum_2020?: true
    over_80_sum_2020?: true
    P20_POP80P?: true
    P20_POP80P_PSEUL?: true
    P20_POP80P_PSEUL_PERCENT?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    superf_choro?: true
    s_geom_cstr_bati?: true
    hauteur?: true
    h_x_s?: true
    densite_bati?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
    clc_1_artificialise?: true
    _all?: true
  }

  export type Inconfort_thermiqueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inconfort_thermique to aggregate.
     */
    where?: inconfort_thermiqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inconfort_thermiques to fetch.
     */
    orderBy?: inconfort_thermiqueOrderByWithRelationInput | inconfort_thermiqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inconfort_thermiqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inconfort_thermiques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inconfort_thermiques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inconfort_thermiques
    **/
    _count?: true | Inconfort_thermiqueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inconfort_thermiqueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inconfort_thermiqueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inconfort_thermiqueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inconfort_thermiqueMaxAggregateInputType
  }

  export type GetInconfort_thermiqueAggregateType<T extends Inconfort_thermiqueAggregateArgs> = {
        [P in keyof T & keyof AggregateInconfort_thermique]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInconfort_thermique[P]>
      : GetScalarType<T[P], AggregateInconfort_thermique[P]>
  }




  export type inconfort_thermiqueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inconfort_thermiqueWhereInput
    orderBy?: inconfort_thermiqueOrderByWithAggregationInput | inconfort_thermiqueOrderByWithAggregationInput[]
    by: Inconfort_thermiqueScalarFieldEnum[] | Inconfort_thermiqueScalarFieldEnum
    having?: inconfort_thermiqueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inconfort_thermiqueCountAggregateInputType | true
    _avg?: Inconfort_thermiqueAvgAggregateInputType
    _sum?: Inconfort_thermiqueSumAggregateInputType
    _min?: Inconfort_thermiqueMinAggregateInputType
    _max?: Inconfort_thermiqueMaxAggregateInputType
  }

  export type Inconfort_thermiqueGroupByOutputType = {
    index: bigint
    code_geographique: string
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
    age_bati_post06: number | null
    age_bati_91_05: number | null
    age_bati_46_90: number | null
    age_bati_19_45: number | null
    age_bati_pre_19: number | null
    under_4_sum_1968: number | null
    to_80_sum_1968: number | null
    over_80_sum_1968: number | null
    under_4_sum_1975: number | null
    to_80_sum_1975: number | null
    over_80_sum_1975: number | null
    under_4_sum_1982: number | null
    to_80_sum_1982: number | null
    over_80_sum_1982: number | null
    under_4_sum_1990: number | null
    to_80_sum_1990: number | null
    over_80_sum_1990: number | null
    under_4_sum_1999: number | null
    to_80_sum_1999: number | null
    over_80_sum_1999: number | null
    under_4_sum_2009: number | null
    to_80_sum_2009: number | null
    over_80_sum_2009: number | null
    under_4_sum_2014: number | null
    to_80_sum_2014: number | null
    over_80_sum_2014: number | null
    under_4_sum_2020: number | null
    to_80_sum_2020: number | null
    over_80_sum_2020: number | null
    P20_POP80P: number | null
    P20_POP80P_PSEUL: number | null
    P20_POP80P_PSEUL_PERCENT: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: number | null
    NA5BE_sum: number | null
    NA5FZ_sum: number | null
    NA5GU_sum: number | null
    NA5OQ_sum: number | null
    superf_choro: number | null
    s_geom_cstr_bati: number | null
    hauteur: number | null
    h_x_s: number | null
    densite_bati: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
    clc_1_artificialise: number | null
    _count: Inconfort_thermiqueCountAggregateOutputType | null
    _avg: Inconfort_thermiqueAvgAggregateOutputType | null
    _sum: Inconfort_thermiqueSumAggregateOutputType | null
    _min: Inconfort_thermiqueMinAggregateOutputType | null
    _max: Inconfort_thermiqueMaxAggregateOutputType | null
  }

  type GetInconfort_thermiqueGroupByPayload<T extends inconfort_thermiqueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inconfort_thermiqueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inconfort_thermiqueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inconfort_thermiqueGroupByOutputType[P]>
            : GetScalarType<T[P], Inconfort_thermiqueGroupByOutputType[P]>
        }
      >
    >


  export type inconfort_thermiqueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
    age_bati_post06?: boolean
    age_bati_91_05?: boolean
    age_bati_46_90?: boolean
    age_bati_19_45?: boolean
    age_bati_pre_19?: boolean
    under_4_sum_1968?: boolean
    to_80_sum_1968?: boolean
    over_80_sum_1968?: boolean
    under_4_sum_1975?: boolean
    to_80_sum_1975?: boolean
    over_80_sum_1975?: boolean
    under_4_sum_1982?: boolean
    to_80_sum_1982?: boolean
    over_80_sum_1982?: boolean
    under_4_sum_1990?: boolean
    to_80_sum_1990?: boolean
    over_80_sum_1990?: boolean
    under_4_sum_1999?: boolean
    to_80_sum_1999?: boolean
    over_80_sum_1999?: boolean
    under_4_sum_2009?: boolean
    to_80_sum_2009?: boolean
    over_80_sum_2009?: boolean
    under_4_sum_2014?: boolean
    to_80_sum_2014?: boolean
    over_80_sum_2014?: boolean
    under_4_sum_2020?: boolean
    to_80_sum_2020?: boolean
    over_80_sum_2020?: boolean
    P20_POP80P?: boolean
    P20_POP80P_PSEUL?: boolean
    P20_POP80P_PSEUL_PERCENT?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    NA5AZ_sum?: boolean
    NA5BE_sum?: boolean
    NA5FZ_sum?: boolean
    NA5GU_sum?: boolean
    NA5OQ_sum?: boolean
    superf_choro?: boolean
    s_geom_cstr_bati?: boolean
    hauteur?: boolean
    h_x_s?: boolean
    densite_bati?: boolean
    clc_2_agricole?: boolean
    clc_3_foret_semiNaturel?: boolean
    clc_4_humide?: boolean
    clc_5_eau?: boolean
    clc_1_artificialise?: boolean
  }, ExtArgs["result"]["inconfort_thermique"]>

  export type inconfort_thermiqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
    age_bati_post06?: boolean
    age_bati_91_05?: boolean
    age_bati_46_90?: boolean
    age_bati_19_45?: boolean
    age_bati_pre_19?: boolean
    under_4_sum_1968?: boolean
    to_80_sum_1968?: boolean
    over_80_sum_1968?: boolean
    under_4_sum_1975?: boolean
    to_80_sum_1975?: boolean
    over_80_sum_1975?: boolean
    under_4_sum_1982?: boolean
    to_80_sum_1982?: boolean
    over_80_sum_1982?: boolean
    under_4_sum_1990?: boolean
    to_80_sum_1990?: boolean
    over_80_sum_1990?: boolean
    under_4_sum_1999?: boolean
    to_80_sum_1999?: boolean
    over_80_sum_1999?: boolean
    under_4_sum_2009?: boolean
    to_80_sum_2009?: boolean
    over_80_sum_2009?: boolean
    under_4_sum_2014?: boolean
    to_80_sum_2014?: boolean
    over_80_sum_2014?: boolean
    under_4_sum_2020?: boolean
    to_80_sum_2020?: boolean
    over_80_sum_2020?: boolean
    P20_POP80P?: boolean
    P20_POP80P_PSEUL?: boolean
    P20_POP80P_PSEUL_PERCENT?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    NA5AZ_sum?: boolean
    NA5BE_sum?: boolean
    NA5FZ_sum?: boolean
    NA5GU_sum?: boolean
    NA5OQ_sum?: boolean
    superf_choro?: boolean
    s_geom_cstr_bati?: boolean
    hauteur?: boolean
    h_x_s?: boolean
    densite_bati?: boolean
    clc_2_agricole?: boolean
    clc_3_foret_semiNaturel?: boolean
    clc_4_humide?: boolean
    clc_5_eau?: boolean
    clc_1_artificialise?: boolean
  }, ExtArgs["result"]["inconfort_thermique"]>

  export type inconfort_thermiqueSelectScalar = {
    index?: boolean
    code_geographique?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
    age_bati_post06?: boolean
    age_bati_91_05?: boolean
    age_bati_46_90?: boolean
    age_bati_19_45?: boolean
    age_bati_pre_19?: boolean
    under_4_sum_1968?: boolean
    to_80_sum_1968?: boolean
    over_80_sum_1968?: boolean
    under_4_sum_1975?: boolean
    to_80_sum_1975?: boolean
    over_80_sum_1975?: boolean
    under_4_sum_1982?: boolean
    to_80_sum_1982?: boolean
    over_80_sum_1982?: boolean
    under_4_sum_1990?: boolean
    to_80_sum_1990?: boolean
    over_80_sum_1990?: boolean
    under_4_sum_1999?: boolean
    to_80_sum_1999?: boolean
    over_80_sum_1999?: boolean
    under_4_sum_2009?: boolean
    to_80_sum_2009?: boolean
    over_80_sum_2009?: boolean
    under_4_sum_2014?: boolean
    to_80_sum_2014?: boolean
    over_80_sum_2014?: boolean
    under_4_sum_2020?: boolean
    to_80_sum_2020?: boolean
    over_80_sum_2020?: boolean
    P20_POP80P?: boolean
    P20_POP80P_PSEUL?: boolean
    P20_POP80P_PSEUL_PERCENT?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    NA5AZ_sum?: boolean
    NA5BE_sum?: boolean
    NA5FZ_sum?: boolean
    NA5GU_sum?: boolean
    NA5OQ_sum?: boolean
    superf_choro?: boolean
    s_geom_cstr_bati?: boolean
    hauteur?: boolean
    h_x_s?: boolean
    densite_bati?: boolean
    clc_2_agricole?: boolean
    clc_3_foret_semiNaturel?: boolean
    clc_4_humide?: boolean
    clc_5_eau?: boolean
    clc_1_artificialise?: boolean
  }


  export type $inconfort_thermiquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inconfort_thermique"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      code_geographique: string
      libelle_geographique: string
      epci: string
      libelle_epci: string
      departement: string
      region: number
      age_bati_post06: number | null
      age_bati_91_05: number | null
      age_bati_46_90: number | null
      age_bati_19_45: number | null
      age_bati_pre_19: number | null
      under_4_sum_1968: number | null
      to_80_sum_1968: number | null
      over_80_sum_1968: number | null
      under_4_sum_1975: number | null
      to_80_sum_1975: number | null
      over_80_sum_1975: number | null
      under_4_sum_1982: number | null
      to_80_sum_1982: number | null
      over_80_sum_1982: number | null
      under_4_sum_1990: number | null
      to_80_sum_1990: number | null
      over_80_sum_1990: number | null
      under_4_sum_1999: number | null
      to_80_sum_1999: number | null
      over_80_sum_1999: number | null
      under_4_sum_2009: number | null
      to_80_sum_2009: number | null
      over_80_sum_2009: number | null
      under_4_sum_2014: number | null
      to_80_sum_2014: number | null
      over_80_sum_2014: number | null
      under_4_sum_2020: number | null
      to_80_sum_2020: number | null
      over_80_sum_2020: number | null
      P20_POP80P: number | null
      P20_POP80P_PSEUL: number | null
      P20_POP80P_PSEUL_PERCENT: number | null
      tee_log: number | null
      tee_mob: number | null
      precarite_logement: number | null
      NA5AZ_sum: number | null
      NA5BE_sum: number | null
      NA5FZ_sum: number | null
      NA5GU_sum: number | null
      NA5OQ_sum: number | null
      superf_choro: number | null
      s_geom_cstr_bati: number | null
      hauteur: number | null
      h_x_s: number | null
      densite_bati: number | null
      clc_2_agricole: number | null
      clc_3_foret_semiNaturel: number | null
      clc_4_humide: number | null
      clc_5_eau: number | null
      clc_1_artificialise: number | null
    }, ExtArgs["result"]["inconfort_thermique"]>
    composites: {}
  }

  type inconfort_thermiqueGetPayload<S extends boolean | null | undefined | inconfort_thermiqueDefaultArgs> = $Result.GetResult<Prisma.$inconfort_thermiquePayload, S>

  type inconfort_thermiqueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<inconfort_thermiqueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Inconfort_thermiqueCountAggregateInputType | true
    }

  export interface inconfort_thermiqueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inconfort_thermique'], meta: { name: 'inconfort_thermique' } }
    /**
     * Find zero or one Inconfort_thermique that matches the filter.
     * @param {inconfort_thermiqueFindUniqueArgs} args - Arguments to find a Inconfort_thermique
     * @example
     * // Get one Inconfort_thermique
     * const inconfort_thermique = await prisma.inconfort_thermique.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inconfort_thermiqueFindUniqueArgs>(args: SelectSubset<T, inconfort_thermiqueFindUniqueArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inconfort_thermique that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {inconfort_thermiqueFindUniqueOrThrowArgs} args - Arguments to find a Inconfort_thermique
     * @example
     * // Get one Inconfort_thermique
     * const inconfort_thermique = await prisma.inconfort_thermique.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inconfort_thermiqueFindUniqueOrThrowArgs>(args: SelectSubset<T, inconfort_thermiqueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inconfort_thermique that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inconfort_thermiqueFindFirstArgs} args - Arguments to find a Inconfort_thermique
     * @example
     * // Get one Inconfort_thermique
     * const inconfort_thermique = await prisma.inconfort_thermique.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inconfort_thermiqueFindFirstArgs>(args?: SelectSubset<T, inconfort_thermiqueFindFirstArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inconfort_thermique that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inconfort_thermiqueFindFirstOrThrowArgs} args - Arguments to find a Inconfort_thermique
     * @example
     * // Get one Inconfort_thermique
     * const inconfort_thermique = await prisma.inconfort_thermique.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inconfort_thermiqueFindFirstOrThrowArgs>(args?: SelectSubset<T, inconfort_thermiqueFindFirstOrThrowArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inconfort_thermiques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inconfort_thermiqueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inconfort_thermiques
     * const inconfort_thermiques = await prisma.inconfort_thermique.findMany()
     * 
     * // Get first 10 Inconfort_thermiques
     * const inconfort_thermiques = await prisma.inconfort_thermique.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const inconfort_thermiqueWithIndexOnly = await prisma.inconfort_thermique.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends inconfort_thermiqueFindManyArgs>(args?: SelectSubset<T, inconfort_thermiqueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inconfort_thermique.
     * @param {inconfort_thermiqueCreateArgs} args - Arguments to create a Inconfort_thermique.
     * @example
     * // Create one Inconfort_thermique
     * const Inconfort_thermique = await prisma.inconfort_thermique.create({
     *   data: {
     *     // ... data to create a Inconfort_thermique
     *   }
     * })
     * 
     */
    create<T extends inconfort_thermiqueCreateArgs>(args: SelectSubset<T, inconfort_thermiqueCreateArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inconfort_thermiques.
     * @param {inconfort_thermiqueCreateManyArgs} args - Arguments to create many Inconfort_thermiques.
     * @example
     * // Create many Inconfort_thermiques
     * const inconfort_thermique = await prisma.inconfort_thermique.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inconfort_thermiqueCreateManyArgs>(args?: SelectSubset<T, inconfort_thermiqueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inconfort_thermiques and returns the data saved in the database.
     * @param {inconfort_thermiqueCreateManyAndReturnArgs} args - Arguments to create many Inconfort_thermiques.
     * @example
     * // Create many Inconfort_thermiques
     * const inconfort_thermique = await prisma.inconfort_thermique.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inconfort_thermiques and only return the `index`
     * const inconfort_thermiqueWithIndexOnly = await prisma.inconfort_thermique.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inconfort_thermiqueCreateManyAndReturnArgs>(args?: SelectSubset<T, inconfort_thermiqueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inconfort_thermique.
     * @param {inconfort_thermiqueDeleteArgs} args - Arguments to delete one Inconfort_thermique.
     * @example
     * // Delete one Inconfort_thermique
     * const Inconfort_thermique = await prisma.inconfort_thermique.delete({
     *   where: {
     *     // ... filter to delete one Inconfort_thermique
     *   }
     * })
     * 
     */
    delete<T extends inconfort_thermiqueDeleteArgs>(args: SelectSubset<T, inconfort_thermiqueDeleteArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inconfort_thermique.
     * @param {inconfort_thermiqueUpdateArgs} args - Arguments to update one Inconfort_thermique.
     * @example
     * // Update one Inconfort_thermique
     * const inconfort_thermique = await prisma.inconfort_thermique.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inconfort_thermiqueUpdateArgs>(args: SelectSubset<T, inconfort_thermiqueUpdateArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inconfort_thermiques.
     * @param {inconfort_thermiqueDeleteManyArgs} args - Arguments to filter Inconfort_thermiques to delete.
     * @example
     * // Delete a few Inconfort_thermiques
     * const { count } = await prisma.inconfort_thermique.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inconfort_thermiqueDeleteManyArgs>(args?: SelectSubset<T, inconfort_thermiqueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inconfort_thermiques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inconfort_thermiqueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inconfort_thermiques
     * const inconfort_thermique = await prisma.inconfort_thermique.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inconfort_thermiqueUpdateManyArgs>(args: SelectSubset<T, inconfort_thermiqueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Inconfort_thermique.
     * @param {inconfort_thermiqueUpsertArgs} args - Arguments to update or create a Inconfort_thermique.
     * @example
     * // Update or create a Inconfort_thermique
     * const inconfort_thermique = await prisma.inconfort_thermique.upsert({
     *   create: {
     *     // ... data to create a Inconfort_thermique
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inconfort_thermique we want to update
     *   }
     * })
     */
    upsert<T extends inconfort_thermiqueUpsertArgs>(args: SelectSubset<T, inconfort_thermiqueUpsertArgs<ExtArgs>>): Prisma__inconfort_thermiqueClient<$Result.GetResult<Prisma.$inconfort_thermiquePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inconfort_thermiques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inconfort_thermiqueCountArgs} args - Arguments to filter Inconfort_thermiques to count.
     * @example
     * // Count the number of Inconfort_thermiques
     * const count = await prisma.inconfort_thermique.count({
     *   where: {
     *     // ... the filter for the Inconfort_thermiques we want to count
     *   }
     * })
    **/
    count<T extends inconfort_thermiqueCountArgs>(
      args?: Subset<T, inconfort_thermiqueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inconfort_thermiqueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inconfort_thermique.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inconfort_thermiqueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inconfort_thermiqueAggregateArgs>(args: Subset<T, Inconfort_thermiqueAggregateArgs>): Prisma.PrismaPromise<GetInconfort_thermiqueAggregateType<T>>

    /**
     * Group by Inconfort_thermique.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inconfort_thermiqueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inconfort_thermiqueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inconfort_thermiqueGroupByArgs['orderBy'] }
        : { orderBy?: inconfort_thermiqueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inconfort_thermiqueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInconfort_thermiqueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inconfort_thermique model
   */
  readonly fields: inconfort_thermiqueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inconfort_thermique.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inconfort_thermiqueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inconfort_thermique model
   */ 
  interface inconfort_thermiqueFieldRefs {
    readonly index: FieldRef<"inconfort_thermique", 'BigInt'>
    readonly code_geographique: FieldRef<"inconfort_thermique", 'String'>
    readonly libelle_geographique: FieldRef<"inconfort_thermique", 'String'>
    readonly epci: FieldRef<"inconfort_thermique", 'String'>
    readonly libelle_epci: FieldRef<"inconfort_thermique", 'String'>
    readonly departement: FieldRef<"inconfort_thermique", 'String'>
    readonly region: FieldRef<"inconfort_thermique", 'Int'>
    readonly age_bati_post06: FieldRef<"inconfort_thermique", 'Float'>
    readonly age_bati_91_05: FieldRef<"inconfort_thermique", 'Float'>
    readonly age_bati_46_90: FieldRef<"inconfort_thermique", 'Float'>
    readonly age_bati_19_45: FieldRef<"inconfort_thermique", 'Float'>
    readonly age_bati_pre_19: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_1968: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_1968: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_1968: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_1975: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_1975: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_1975: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_1982: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_1982: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_1982: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_1990: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_1990: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_1990: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_1999: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_1999: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_1999: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_2009: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_2009: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_2009: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_2014: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_2014: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_2014: FieldRef<"inconfort_thermique", 'Float'>
    readonly under_4_sum_2020: FieldRef<"inconfort_thermique", 'Float'>
    readonly to_80_sum_2020: FieldRef<"inconfort_thermique", 'Float'>
    readonly over_80_sum_2020: FieldRef<"inconfort_thermique", 'Float'>
    readonly P20_POP80P: FieldRef<"inconfort_thermique", 'Float'>
    readonly P20_POP80P_PSEUL: FieldRef<"inconfort_thermique", 'Float'>
    readonly P20_POP80P_PSEUL_PERCENT: FieldRef<"inconfort_thermique", 'Float'>
    readonly tee_log: FieldRef<"inconfort_thermique", 'Float'>
    readonly tee_mob: FieldRef<"inconfort_thermique", 'Float'>
    readonly precarite_logement: FieldRef<"inconfort_thermique", 'Float'>
    readonly NA5AZ_sum: FieldRef<"inconfort_thermique", 'Float'>
    readonly NA5BE_sum: FieldRef<"inconfort_thermique", 'Float'>
    readonly NA5FZ_sum: FieldRef<"inconfort_thermique", 'Float'>
    readonly NA5GU_sum: FieldRef<"inconfort_thermique", 'Float'>
    readonly NA5OQ_sum: FieldRef<"inconfort_thermique", 'Float'>
    readonly superf_choro: FieldRef<"inconfort_thermique", 'Float'>
    readonly s_geom_cstr_bati: FieldRef<"inconfort_thermique", 'Float'>
    readonly hauteur: FieldRef<"inconfort_thermique", 'Float'>
    readonly h_x_s: FieldRef<"inconfort_thermique", 'Float'>
    readonly densite_bati: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_2_agricole: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_3_foret_semiNaturel: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_4_humide: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_5_eau: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_1_artificialise: FieldRef<"inconfort_thermique", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * inconfort_thermique findUnique
   */
  export type inconfort_thermiqueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * Filter, which inconfort_thermique to fetch.
     */
    where: inconfort_thermiqueWhereUniqueInput
  }

  /**
   * inconfort_thermique findUniqueOrThrow
   */
  export type inconfort_thermiqueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * Filter, which inconfort_thermique to fetch.
     */
    where: inconfort_thermiqueWhereUniqueInput
  }

  /**
   * inconfort_thermique findFirst
   */
  export type inconfort_thermiqueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * Filter, which inconfort_thermique to fetch.
     */
    where?: inconfort_thermiqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inconfort_thermiques to fetch.
     */
    orderBy?: inconfort_thermiqueOrderByWithRelationInput | inconfort_thermiqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inconfort_thermiques.
     */
    cursor?: inconfort_thermiqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inconfort_thermiques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inconfort_thermiques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inconfort_thermiques.
     */
    distinct?: Inconfort_thermiqueScalarFieldEnum | Inconfort_thermiqueScalarFieldEnum[]
  }

  /**
   * inconfort_thermique findFirstOrThrow
   */
  export type inconfort_thermiqueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * Filter, which inconfort_thermique to fetch.
     */
    where?: inconfort_thermiqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inconfort_thermiques to fetch.
     */
    orderBy?: inconfort_thermiqueOrderByWithRelationInput | inconfort_thermiqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inconfort_thermiques.
     */
    cursor?: inconfort_thermiqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inconfort_thermiques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inconfort_thermiques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inconfort_thermiques.
     */
    distinct?: Inconfort_thermiqueScalarFieldEnum | Inconfort_thermiqueScalarFieldEnum[]
  }

  /**
   * inconfort_thermique findMany
   */
  export type inconfort_thermiqueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * Filter, which inconfort_thermiques to fetch.
     */
    where?: inconfort_thermiqueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inconfort_thermiques to fetch.
     */
    orderBy?: inconfort_thermiqueOrderByWithRelationInput | inconfort_thermiqueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inconfort_thermiques.
     */
    cursor?: inconfort_thermiqueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inconfort_thermiques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inconfort_thermiques.
     */
    skip?: number
    distinct?: Inconfort_thermiqueScalarFieldEnum | Inconfort_thermiqueScalarFieldEnum[]
  }

  /**
   * inconfort_thermique create
   */
  export type inconfort_thermiqueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * The data needed to create a inconfort_thermique.
     */
    data: XOR<inconfort_thermiqueCreateInput, inconfort_thermiqueUncheckedCreateInput>
  }

  /**
   * inconfort_thermique createMany
   */
  export type inconfort_thermiqueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inconfort_thermiques.
     */
    data: inconfort_thermiqueCreateManyInput | inconfort_thermiqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inconfort_thermique createManyAndReturn
   */
  export type inconfort_thermiqueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many inconfort_thermiques.
     */
    data: inconfort_thermiqueCreateManyInput | inconfort_thermiqueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inconfort_thermique update
   */
  export type inconfort_thermiqueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * The data needed to update a inconfort_thermique.
     */
    data: XOR<inconfort_thermiqueUpdateInput, inconfort_thermiqueUncheckedUpdateInput>
    /**
     * Choose, which inconfort_thermique to update.
     */
    where: inconfort_thermiqueWhereUniqueInput
  }

  /**
   * inconfort_thermique updateMany
   */
  export type inconfort_thermiqueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inconfort_thermiques.
     */
    data: XOR<inconfort_thermiqueUpdateManyMutationInput, inconfort_thermiqueUncheckedUpdateManyInput>
    /**
     * Filter which inconfort_thermiques to update
     */
    where?: inconfort_thermiqueWhereInput
  }

  /**
   * inconfort_thermique upsert
   */
  export type inconfort_thermiqueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * The filter to search for the inconfort_thermique to update in case it exists.
     */
    where: inconfort_thermiqueWhereUniqueInput
    /**
     * In case the inconfort_thermique found by the `where` argument doesn't exist, create a new inconfort_thermique with this data.
     */
    create: XOR<inconfort_thermiqueCreateInput, inconfort_thermiqueUncheckedCreateInput>
    /**
     * In case the inconfort_thermique was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inconfort_thermiqueUpdateInput, inconfort_thermiqueUncheckedUpdateInput>
  }

  /**
   * inconfort_thermique delete
   */
  export type inconfort_thermiqueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
    /**
     * Filter which inconfort_thermique to delete.
     */
    where: inconfort_thermiqueWhereUniqueInput
  }

  /**
   * inconfort_thermique deleteMany
   */
  export type inconfort_thermiqueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inconfort_thermiques to delete
     */
    where?: inconfort_thermiqueWhereInput
  }

  /**
   * inconfort_thermique without action
   */
  export type inconfort_thermiqueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inconfort_thermique
     */
    select?: inconfort_thermiqueSelect<ExtArgs> | null
  }


  /**
   * Model clc_epci
   */

  export type AggregateClc_epci = {
    _count: Clc_epciCountAggregateOutputType | null
    _avg: Clc_epciAvgAggregateOutputType | null
    _sum: Clc_epciSumAggregateOutputType | null
    _min: Clc_epciMinAggregateOutputType | null
    _max: Clc_epciMaxAggregateOutputType | null
  }

  export type Clc_epciAvgAggregateOutputType = {
    pk: number | null
    epci_code: number | null
  }

  export type Clc_epciSumAggregateOutputType = {
    pk: number | null
    epci_code: number | null
  }

  export type Clc_epciMinAggregateOutputType = {
    pk: number | null
    legend: string | null
    epci_code: number | null
  }

  export type Clc_epciMaxAggregateOutputType = {
    pk: number | null
    legend: string | null
    epci_code: number | null
  }

  export type Clc_epciCountAggregateOutputType = {
    pk: number
    legend: number
    epci_code: number
    _all: number
  }


  export type Clc_epciAvgAggregateInputType = {
    pk?: true
    epci_code?: true
  }

  export type Clc_epciSumAggregateInputType = {
    pk?: true
    epci_code?: true
  }

  export type Clc_epciMinAggregateInputType = {
    pk?: true
    legend?: true
    epci_code?: true
  }

  export type Clc_epciMaxAggregateInputType = {
    pk?: true
    legend?: true
    epci_code?: true
  }

  export type Clc_epciCountAggregateInputType = {
    pk?: true
    legend?: true
    epci_code?: true
    _all?: true
  }

  export type Clc_epciAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_epci to aggregate.
     */
    where?: clc_epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_epcis to fetch.
     */
    orderBy?: clc_epciOrderByWithRelationInput | clc_epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clc_epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_epcis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clc_epcis
    **/
    _count?: true | Clc_epciCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Clc_epciAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Clc_epciSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clc_epciMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clc_epciMaxAggregateInputType
  }

  export type GetClc_epciAggregateType<T extends Clc_epciAggregateArgs> = {
        [P in keyof T & keyof AggregateClc_epci]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClc_epci[P]>
      : GetScalarType<T[P], AggregateClc_epci[P]>
  }




  export type clc_epciGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clc_epciWhereInput
    orderBy?: clc_epciOrderByWithAggregationInput | clc_epciOrderByWithAggregationInput[]
    by: Clc_epciScalarFieldEnum[] | Clc_epciScalarFieldEnum
    having?: clc_epciScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clc_epciCountAggregateInputType | true
    _avg?: Clc_epciAvgAggregateInputType
    _sum?: Clc_epciSumAggregateInputType
    _min?: Clc_epciMinAggregateInputType
    _max?: Clc_epciMaxAggregateInputType
  }

  export type Clc_epciGroupByOutputType = {
    pk: number
    legend: string | null
    epci_code: number | null
    _count: Clc_epciCountAggregateOutputType | null
    _avg: Clc_epciAvgAggregateOutputType | null
    _sum: Clc_epciSumAggregateOutputType | null
    _min: Clc_epciMinAggregateOutputType | null
    _max: Clc_epciMaxAggregateOutputType | null
  }

  type GetClc_epciGroupByPayload<T extends clc_epciGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clc_epciGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clc_epciGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clc_epciGroupByOutputType[P]>
            : GetScalarType<T[P], Clc_epciGroupByOutputType[P]>
        }
      >
    >


  export type clc_epciSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    legend?: boolean
    epci_code?: boolean
  }, ExtArgs["result"]["clc_epci"]>

  export type clc_epciSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    legend?: boolean
    epci_code?: boolean
  }, ExtArgs["result"]["clc_epci"]>

  export type clc_epciSelectScalar = {
    pk?: boolean
    legend?: boolean
    epci_code?: boolean
  }


  export type $clc_epciPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clc_epci"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      legend: string | null
      epci_code: number | null
    }, ExtArgs["result"]["clc_epci"]>
    composites: {}
  }

  type clc_epciGetPayload<S extends boolean | null | undefined | clc_epciDefaultArgs> = $Result.GetResult<Prisma.$clc_epciPayload, S>

  type clc_epciCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clc_epciFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Clc_epciCountAggregateInputType | true
    }

  export interface clc_epciDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clc_epci'], meta: { name: 'clc_epci' } }
    /**
     * Find zero or one Clc_epci that matches the filter.
     * @param {clc_epciFindUniqueArgs} args - Arguments to find a Clc_epci
     * @example
     * // Get one Clc_epci
     * const clc_epci = await prisma.clc_epci.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clc_epciFindUniqueArgs>(args: SelectSubset<T, clc_epciFindUniqueArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clc_epci that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clc_epciFindUniqueOrThrowArgs} args - Arguments to find a Clc_epci
     * @example
     * // Get one Clc_epci
     * const clc_epci = await prisma.clc_epci.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clc_epciFindUniqueOrThrowArgs>(args: SelectSubset<T, clc_epciFindUniqueOrThrowArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clc_epci that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_epciFindFirstArgs} args - Arguments to find a Clc_epci
     * @example
     * // Get one Clc_epci
     * const clc_epci = await prisma.clc_epci.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clc_epciFindFirstArgs>(args?: SelectSubset<T, clc_epciFindFirstArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clc_epci that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_epciFindFirstOrThrowArgs} args - Arguments to find a Clc_epci
     * @example
     * // Get one Clc_epci
     * const clc_epci = await prisma.clc_epci.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clc_epciFindFirstOrThrowArgs>(args?: SelectSubset<T, clc_epciFindFirstOrThrowArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clc_epcis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_epciFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clc_epcis
     * const clc_epcis = await prisma.clc_epci.findMany()
     * 
     * // Get first 10 Clc_epcis
     * const clc_epcis = await prisma.clc_epci.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const clc_epciWithPkOnly = await prisma.clc_epci.findMany({ select: { pk: true } })
     * 
     */
    findMany<T extends clc_epciFindManyArgs>(args?: SelectSubset<T, clc_epciFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clc_epci.
     * @param {clc_epciCreateArgs} args - Arguments to create a Clc_epci.
     * @example
     * // Create one Clc_epci
     * const Clc_epci = await prisma.clc_epci.create({
     *   data: {
     *     // ... data to create a Clc_epci
     *   }
     * })
     * 
     */
    create<T extends clc_epciCreateArgs>(args: SelectSubset<T, clc_epciCreateArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clc_epcis.
     * @param {clc_epciCreateManyArgs} args - Arguments to create many Clc_epcis.
     * @example
     * // Create many Clc_epcis
     * const clc_epci = await prisma.clc_epci.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clc_epciCreateManyArgs>(args?: SelectSubset<T, clc_epciCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clc_epcis and returns the data saved in the database.
     * @param {clc_epciCreateManyAndReturnArgs} args - Arguments to create many Clc_epcis.
     * @example
     * // Create many Clc_epcis
     * const clc_epci = await prisma.clc_epci.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clc_epcis and only return the `pk`
     * const clc_epciWithPkOnly = await prisma.clc_epci.createManyAndReturn({ 
     *   select: { pk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clc_epciCreateManyAndReturnArgs>(args?: SelectSubset<T, clc_epciCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clc_epci.
     * @param {clc_epciDeleteArgs} args - Arguments to delete one Clc_epci.
     * @example
     * // Delete one Clc_epci
     * const Clc_epci = await prisma.clc_epci.delete({
     *   where: {
     *     // ... filter to delete one Clc_epci
     *   }
     * })
     * 
     */
    delete<T extends clc_epciDeleteArgs>(args: SelectSubset<T, clc_epciDeleteArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clc_epci.
     * @param {clc_epciUpdateArgs} args - Arguments to update one Clc_epci.
     * @example
     * // Update one Clc_epci
     * const clc_epci = await prisma.clc_epci.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clc_epciUpdateArgs>(args: SelectSubset<T, clc_epciUpdateArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clc_epcis.
     * @param {clc_epciDeleteManyArgs} args - Arguments to filter Clc_epcis to delete.
     * @example
     * // Delete a few Clc_epcis
     * const { count } = await prisma.clc_epci.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clc_epciDeleteManyArgs>(args?: SelectSubset<T, clc_epciDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clc_epcis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_epciUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clc_epcis
     * const clc_epci = await prisma.clc_epci.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clc_epciUpdateManyArgs>(args: SelectSubset<T, clc_epciUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clc_epci.
     * @param {clc_epciUpsertArgs} args - Arguments to update or create a Clc_epci.
     * @example
     * // Update or create a Clc_epci
     * const clc_epci = await prisma.clc_epci.upsert({
     *   create: {
     *     // ... data to create a Clc_epci
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clc_epci we want to update
     *   }
     * })
     */
    upsert<T extends clc_epciUpsertArgs>(args: SelectSubset<T, clc_epciUpsertArgs<ExtArgs>>): Prisma__clc_epciClient<$Result.GetResult<Prisma.$clc_epciPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clc_epcis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_epciCountArgs} args - Arguments to filter Clc_epcis to count.
     * @example
     * // Count the number of Clc_epcis
     * const count = await prisma.clc_epci.count({
     *   where: {
     *     // ... the filter for the Clc_epcis we want to count
     *   }
     * })
    **/
    count<T extends clc_epciCountArgs>(
      args?: Subset<T, clc_epciCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clc_epciCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clc_epci.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clc_epciAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Clc_epciAggregateArgs>(args: Subset<T, Clc_epciAggregateArgs>): Prisma.PrismaPromise<GetClc_epciAggregateType<T>>

    /**
     * Group by Clc_epci.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_epciGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends clc_epciGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clc_epciGroupByArgs['orderBy'] }
        : { orderBy?: clc_epciGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, clc_epciGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClc_epciGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clc_epci model
   */
  readonly fields: clc_epciFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clc_epci.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clc_epciClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the clc_epci model
   */ 
  interface clc_epciFieldRefs {
    readonly pk: FieldRef<"clc_epci", 'Int'>
    readonly legend: FieldRef<"clc_epci", 'String'>
    readonly epci_code: FieldRef<"clc_epci", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * clc_epci findUnique
   */
  export type clc_epciFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * Filter, which clc_epci to fetch.
     */
    where: clc_epciWhereUniqueInput
  }

  /**
   * clc_epci findUniqueOrThrow
   */
  export type clc_epciFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * Filter, which clc_epci to fetch.
     */
    where: clc_epciWhereUniqueInput
  }

  /**
   * clc_epci findFirst
   */
  export type clc_epciFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * Filter, which clc_epci to fetch.
     */
    where?: clc_epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_epcis to fetch.
     */
    orderBy?: clc_epciOrderByWithRelationInput | clc_epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_epcis.
     */
    cursor?: clc_epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_epcis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_epcis.
     */
    distinct?: Clc_epciScalarFieldEnum | Clc_epciScalarFieldEnum[]
  }

  /**
   * clc_epci findFirstOrThrow
   */
  export type clc_epciFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * Filter, which clc_epci to fetch.
     */
    where?: clc_epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_epcis to fetch.
     */
    orderBy?: clc_epciOrderByWithRelationInput | clc_epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_epcis.
     */
    cursor?: clc_epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_epcis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_epcis.
     */
    distinct?: Clc_epciScalarFieldEnum | Clc_epciScalarFieldEnum[]
  }

  /**
   * clc_epci findMany
   */
  export type clc_epciFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * Filter, which clc_epcis to fetch.
     */
    where?: clc_epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_epcis to fetch.
     */
    orderBy?: clc_epciOrderByWithRelationInput | clc_epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clc_epcis.
     */
    cursor?: clc_epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_epcis.
     */
    skip?: number
    distinct?: Clc_epciScalarFieldEnum | Clc_epciScalarFieldEnum[]
  }

  /**
   * clc_epci create
   */
  export type clc_epciCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * The data needed to create a clc_epci.
     */
    data?: XOR<clc_epciCreateInput, clc_epciUncheckedCreateInput>
  }

  /**
   * clc_epci createMany
   */
  export type clc_epciCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clc_epcis.
     */
    data: clc_epciCreateManyInput | clc_epciCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clc_epci createManyAndReturn
   */
  export type clc_epciCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clc_epcis.
     */
    data: clc_epciCreateManyInput | clc_epciCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clc_epci update
   */
  export type clc_epciUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * The data needed to update a clc_epci.
     */
    data: XOR<clc_epciUpdateInput, clc_epciUncheckedUpdateInput>
    /**
     * Choose, which clc_epci to update.
     */
    where: clc_epciWhereUniqueInput
  }

  /**
   * clc_epci updateMany
   */
  export type clc_epciUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clc_epcis.
     */
    data: XOR<clc_epciUpdateManyMutationInput, clc_epciUncheckedUpdateManyInput>
    /**
     * Filter which clc_epcis to update
     */
    where?: clc_epciWhereInput
  }

  /**
   * clc_epci upsert
   */
  export type clc_epciUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * The filter to search for the clc_epci to update in case it exists.
     */
    where: clc_epciWhereUniqueInput
    /**
     * In case the clc_epci found by the `where` argument doesn't exist, create a new clc_epci with this data.
     */
    create: XOR<clc_epciCreateInput, clc_epciUncheckedCreateInput>
    /**
     * In case the clc_epci was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clc_epciUpdateInput, clc_epciUncheckedUpdateInput>
  }

  /**
   * clc_epci delete
   */
  export type clc_epciDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
    /**
     * Filter which clc_epci to delete.
     */
    where: clc_epciWhereUniqueInput
  }

  /**
   * clc_epci deleteMany
   */
  export type clc_epciDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_epcis to delete
     */
    where?: clc_epciWhereInput
  }

  /**
   * clc_epci without action
   */
  export type clc_epciDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_epci
     */
    select?: clc_epciSelect<ExtArgs> | null
  }


  /**
   * Model communes
   */

  export type AggregateCommunes = {
    _count: CommunesCountAggregateOutputType | null
    _avg: CommunesAvgAggregateOutputType | null
    _sum: CommunesSumAggregateOutputType | null
    _min: CommunesMinAggregateOutputType | null
    _max: CommunesMaxAggregateOutputType | null
  }

  export type CommunesAvgAggregateOutputType = {
    pk: number | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesSumAggregateOutputType = {
    pk: number | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesMinAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    epci: string | null
    libelle_epci: string | null
    libgeo: string | null
    coordinates: string | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesMaxAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    epci: string | null
    libelle_epci: string | null
    libgeo: string | null
    coordinates: string | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesCountAggregateOutputType = {
    pk: number
    code_commune: number
    libelle_commune: number
    epci: number
    libelle_epci: number
    libgeo: number
    coordinates: number
    densite_bati: number
    precarite_logement: number
    _all: number
  }


  export type CommunesAvgAggregateInputType = {
    pk?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesSumAggregateInputType = {
    pk?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesMinAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    epci?: true
    libelle_epci?: true
    libgeo?: true
    coordinates?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesMaxAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    epci?: true
    libelle_epci?: true
    libgeo?: true
    coordinates?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesCountAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    epci?: true
    libelle_epci?: true
    libgeo?: true
    coordinates?: true
    densite_bati?: true
    precarite_logement?: true
    _all?: true
  }

  export type CommunesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes to aggregate.
     */
    where?: communesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes to fetch.
     */
    orderBy?: communesOrderByWithRelationInput | communesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communes
    **/
    _count?: true | CommunesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommunesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommunesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommunesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommunesMaxAggregateInputType
  }

  export type GetCommunesAggregateType<T extends CommunesAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunes[P]>
      : GetScalarType<T[P], AggregateCommunes[P]>
  }




  export type communesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communesWhereInput
    orderBy?: communesOrderByWithAggregationInput | communesOrderByWithAggregationInput[]
    by: CommunesScalarFieldEnum[] | CommunesScalarFieldEnum
    having?: communesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommunesCountAggregateInputType | true
    _avg?: CommunesAvgAggregateInputType
    _sum?: CommunesSumAggregateInputType
    _min?: CommunesMinAggregateInputType
    _max?: CommunesMaxAggregateInputType
  }

  export type CommunesGroupByOutputType = {
    pk: number
    code_commune: string | null
    libelle_commune: string | null
    epci: string | null
    libelle_epci: string | null
    libgeo: string | null
    coordinates: string | null
    densite_bati: number | null
    precarite_logement: number | null
    _count: CommunesCountAggregateOutputType | null
    _avg: CommunesAvgAggregateOutputType | null
    _sum: CommunesSumAggregateOutputType | null
    _min: CommunesMinAggregateOutputType | null
    _max: CommunesMaxAggregateOutputType | null
  }

  type GetCommunesGroupByPayload<T extends communesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommunesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommunesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommunesGroupByOutputType[P]>
            : GetScalarType<T[P], CommunesGroupByOutputType[P]>
        }
      >
    >


  export type communesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    epci?: boolean
    libelle_epci?: boolean
    libgeo?: boolean
    coordinates?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
  }, ExtArgs["result"]["communes"]>

  export type communesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    epci?: boolean
    libelle_epci?: boolean
    libgeo?: boolean
    coordinates?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
  }, ExtArgs["result"]["communes"]>

  export type communesSelectScalar = {
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    epci?: boolean
    libelle_epci?: boolean
    libgeo?: boolean
    coordinates?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
  }


  export type $communesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      code_commune: string | null
      libelle_commune: string | null
      epci: string | null
      libelle_epci: string | null
      libgeo: string | null
      coordinates: string | null
      densite_bati: number | null
      precarite_logement: number | null
    }, ExtArgs["result"]["communes"]>
    composites: {}
  }

  type communesGetPayload<S extends boolean | null | undefined | communesDefaultArgs> = $Result.GetResult<Prisma.$communesPayload, S>

  type communesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<communesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CommunesCountAggregateInputType | true
    }

  export interface communesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communes'], meta: { name: 'communes' } }
    /**
     * Find zero or one Communes that matches the filter.
     * @param {communesFindUniqueArgs} args - Arguments to find a Communes
     * @example
     * // Get one Communes
     * const communes = await prisma.communes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends communesFindUniqueArgs>(args: SelectSubset<T, communesFindUniqueArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Communes that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {communesFindUniqueOrThrowArgs} args - Arguments to find a Communes
     * @example
     * // Get one Communes
     * const communes = await prisma.communes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communesFindUniqueOrThrowArgs>(args: SelectSubset<T, communesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Communes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesFindFirstArgs} args - Arguments to find a Communes
     * @example
     * // Get one Communes
     * const communes = await prisma.communes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends communesFindFirstArgs>(args?: SelectSubset<T, communesFindFirstArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Communes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesFindFirstOrThrowArgs} args - Arguments to find a Communes
     * @example
     * // Get one Communes
     * const communes = await prisma.communes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends communesFindFirstOrThrowArgs>(args?: SelectSubset<T, communesFindFirstOrThrowArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Communes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communes
     * const communes = await prisma.communes.findMany()
     * 
     * // Get first 10 Communes
     * const communes = await prisma.communes.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const communesWithPkOnly = await prisma.communes.findMany({ select: { pk: true } })
     * 
     */
    findMany<T extends communesFindManyArgs>(args?: SelectSubset<T, communesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Communes.
     * @param {communesCreateArgs} args - Arguments to create a Communes.
     * @example
     * // Create one Communes
     * const Communes = await prisma.communes.create({
     *   data: {
     *     // ... data to create a Communes
     *   }
     * })
     * 
     */
    create<T extends communesCreateArgs>(args: SelectSubset<T, communesCreateArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Communes.
     * @param {communesCreateManyArgs} args - Arguments to create many Communes.
     * @example
     * // Create many Communes
     * const communes = await prisma.communes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends communesCreateManyArgs>(args?: SelectSubset<T, communesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communes and returns the data saved in the database.
     * @param {communesCreateManyAndReturnArgs} args - Arguments to create many Communes.
     * @example
     * // Create many Communes
     * const communes = await prisma.communes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communes and only return the `pk`
     * const communesWithPkOnly = await prisma.communes.createManyAndReturn({ 
     *   select: { pk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends communesCreateManyAndReturnArgs>(args?: SelectSubset<T, communesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Communes.
     * @param {communesDeleteArgs} args - Arguments to delete one Communes.
     * @example
     * // Delete one Communes
     * const Communes = await prisma.communes.delete({
     *   where: {
     *     // ... filter to delete one Communes
     *   }
     * })
     * 
     */
    delete<T extends communesDeleteArgs>(args: SelectSubset<T, communesDeleteArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Communes.
     * @param {communesUpdateArgs} args - Arguments to update one Communes.
     * @example
     * // Update one Communes
     * const communes = await prisma.communes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends communesUpdateArgs>(args: SelectSubset<T, communesUpdateArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Communes.
     * @param {communesDeleteManyArgs} args - Arguments to filter Communes to delete.
     * @example
     * // Delete a few Communes
     * const { count } = await prisma.communes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends communesDeleteManyArgs>(args?: SelectSubset<T, communesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communes
     * const communes = await prisma.communes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends communesUpdateManyArgs>(args: SelectSubset<T, communesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Communes.
     * @param {communesUpsertArgs} args - Arguments to update or create a Communes.
     * @example
     * // Update or create a Communes
     * const communes = await prisma.communes.upsert({
     *   create: {
     *     // ... data to create a Communes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communes we want to update
     *   }
     * })
     */
    upsert<T extends communesUpsertArgs>(args: SelectSubset<T, communesUpsertArgs<ExtArgs>>): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesCountArgs} args - Arguments to filter Communes to count.
     * @example
     * // Count the number of Communes
     * const count = await prisma.communes.count({
     *   where: {
     *     // ... the filter for the Communes we want to count
     *   }
     * })
    **/
    count<T extends communesCountArgs>(
      args?: Subset<T, communesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommunesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommunesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommunesAggregateArgs>(args: Subset<T, CommunesAggregateArgs>): Prisma.PrismaPromise<GetCommunesAggregateType<T>>

    /**
     * Group by Communes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends communesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communesGroupByArgs['orderBy'] }
        : { orderBy?: communesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, communesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communes model
   */
  readonly fields: communesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the communes model
   */ 
  interface communesFieldRefs {
    readonly pk: FieldRef<"communes", 'Int'>
    readonly code_commune: FieldRef<"communes", 'String'>
    readonly libelle_commune: FieldRef<"communes", 'String'>
    readonly epci: FieldRef<"communes", 'String'>
    readonly libelle_epci: FieldRef<"communes", 'String'>
    readonly libgeo: FieldRef<"communes", 'String'>
    readonly coordinates: FieldRef<"communes", 'String'>
    readonly densite_bati: FieldRef<"communes", 'Float'>
    readonly precarite_logement: FieldRef<"communes", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * communes findUnique
   */
  export type communesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * Filter, which communes to fetch.
     */
    where: communesWhereUniqueInput
  }

  /**
   * communes findUniqueOrThrow
   */
  export type communesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * Filter, which communes to fetch.
     */
    where: communesWhereUniqueInput
  }

  /**
   * communes findFirst
   */
  export type communesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * Filter, which communes to fetch.
     */
    where?: communesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes to fetch.
     */
    orderBy?: communesOrderByWithRelationInput | communesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes.
     */
    cursor?: communesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes.
     */
    distinct?: CommunesScalarFieldEnum | CommunesScalarFieldEnum[]
  }

  /**
   * communes findFirstOrThrow
   */
  export type communesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * Filter, which communes to fetch.
     */
    where?: communesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes to fetch.
     */
    orderBy?: communesOrderByWithRelationInput | communesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes.
     */
    cursor?: communesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes.
     */
    distinct?: CommunesScalarFieldEnum | CommunesScalarFieldEnum[]
  }

  /**
   * communes findMany
   */
  export type communesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * Filter, which communes to fetch.
     */
    where?: communesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes to fetch.
     */
    orderBy?: communesOrderByWithRelationInput | communesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communes.
     */
    cursor?: communesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes.
     */
    skip?: number
    distinct?: CommunesScalarFieldEnum | CommunesScalarFieldEnum[]
  }

  /**
   * communes create
   */
  export type communesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * The data needed to create a communes.
     */
    data?: XOR<communesCreateInput, communesUncheckedCreateInput>
  }

  /**
   * communes createMany
   */
  export type communesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many communes.
     */
    data: communesCreateManyInput | communesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communes createManyAndReturn
   */
  export type communesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many communes.
     */
    data: communesCreateManyInput | communesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communes update
   */
  export type communesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * The data needed to update a communes.
     */
    data: XOR<communesUpdateInput, communesUncheckedUpdateInput>
    /**
     * Choose, which communes to update.
     */
    where: communesWhereUniqueInput
  }

  /**
   * communes updateMany
   */
  export type communesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communes.
     */
    data: XOR<communesUpdateManyMutationInput, communesUncheckedUpdateManyInput>
    /**
     * Filter which communes to update
     */
    where?: communesWhereInput
  }

  /**
   * communes upsert
   */
  export type communesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * The filter to search for the communes to update in case it exists.
     */
    where: communesWhereUniqueInput
    /**
     * In case the communes found by the `where` argument doesn't exist, create a new communes with this data.
     */
    create: XOR<communesCreateInput, communesUncheckedCreateInput>
    /**
     * In case the communes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<communesUpdateInput, communesUncheckedUpdateInput>
  }

  /**
   * communes delete
   */
  export type communesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
    /**
     * Filter which communes to delete.
     */
    where: communesWhereUniqueInput
  }

  /**
   * communes deleteMany
   */
  export type communesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes to delete
     */
    where?: communesWhereInput
  }

  /**
   * communes without action
   */
  export type communesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes
     */
    select?: communesSelect<ExtArgs> | null
  }


  /**
   * Model collectivites_searchbar
   */

  export type AggregateCollectivites_searchbar = {
    _count: Collectivites_searchbarCountAggregateOutputType | null
    _avg: Collectivites_searchbarAvgAggregateOutputType | null
    _sum: Collectivites_searchbarSumAggregateOutputType | null
    _min: Collectivites_searchbarMinAggregateOutputType | null
    _max: Collectivites_searchbarMaxAggregateOutputType | null
  }

  export type Collectivites_searchbarAvgAggregateOutputType = {
    index: number | null
  }

  export type Collectivites_searchbarSumAggregateOutputType = {
    index: bigint | null
  }

  export type Collectivites_searchbarMinAggregateOutputType = {
    index: bigint | null
    code_commune: string | null
    coordinates: string | null
    libelle_commune: string | null
    code_epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: string | null
    search_code: string | null
    search_libelle: string | null
  }

  export type Collectivites_searchbarMaxAggregateOutputType = {
    index: bigint | null
    code_commune: string | null
    coordinates: string | null
    libelle_commune: string | null
    code_epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: string | null
    search_code: string | null
    search_libelle: string | null
  }

  export type Collectivites_searchbarCountAggregateOutputType = {
    index: number
    code_commune: number
    coordinates: number
    libelle_commune: number
    code_epci: number
    libelle_epci: number
    departement: number
    region: number
    search_code: number
    search_libelle: number
    _all: number
  }


  export type Collectivites_searchbarAvgAggregateInputType = {
    index?: true
  }

  export type Collectivites_searchbarSumAggregateInputType = {
    index?: true
  }

  export type Collectivites_searchbarMinAggregateInputType = {
    index?: true
    code_commune?: true
    coordinates?: true
    libelle_commune?: true
    code_epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    search_code?: true
    search_libelle?: true
  }

  export type Collectivites_searchbarMaxAggregateInputType = {
    index?: true
    code_commune?: true
    coordinates?: true
    libelle_commune?: true
    code_epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    search_code?: true
    search_libelle?: true
  }

  export type Collectivites_searchbarCountAggregateInputType = {
    index?: true
    code_commune?: true
    coordinates?: true
    libelle_commune?: true
    code_epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    search_code?: true
    search_libelle?: true
    _all?: true
  }

  export type Collectivites_searchbarAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collectivites_searchbar to aggregate.
     */
    where?: collectivites_searchbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectivites_searchbars to fetch.
     */
    orderBy?: collectivites_searchbarOrderByWithRelationInput | collectivites_searchbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: collectivites_searchbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectivites_searchbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectivites_searchbars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned collectivites_searchbars
    **/
    _count?: true | Collectivites_searchbarCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Collectivites_searchbarAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Collectivites_searchbarSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Collectivites_searchbarMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Collectivites_searchbarMaxAggregateInputType
  }

  export type GetCollectivites_searchbarAggregateType<T extends Collectivites_searchbarAggregateArgs> = {
        [P in keyof T & keyof AggregateCollectivites_searchbar]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollectivites_searchbar[P]>
      : GetScalarType<T[P], AggregateCollectivites_searchbar[P]>
  }




  export type collectivites_searchbarGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: collectivites_searchbarWhereInput
    orderBy?: collectivites_searchbarOrderByWithAggregationInput | collectivites_searchbarOrderByWithAggregationInput[]
    by: Collectivites_searchbarScalarFieldEnum[] | Collectivites_searchbarScalarFieldEnum
    having?: collectivites_searchbarScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Collectivites_searchbarCountAggregateInputType | true
    _avg?: Collectivites_searchbarAvgAggregateInputType
    _sum?: Collectivites_searchbarSumAggregateInputType
    _min?: Collectivites_searchbarMinAggregateInputType
    _max?: Collectivites_searchbarMaxAggregateInputType
  }

  export type Collectivites_searchbarGroupByOutputType = {
    index: bigint
    code_commune: string | null
    coordinates: string | null
    libelle_commune: string | null
    code_epci: string
    libelle_epci: string
    departement: string
    region: string
    search_code: string
    search_libelle: string
    _count: Collectivites_searchbarCountAggregateOutputType | null
    _avg: Collectivites_searchbarAvgAggregateOutputType | null
    _sum: Collectivites_searchbarSumAggregateOutputType | null
    _min: Collectivites_searchbarMinAggregateOutputType | null
    _max: Collectivites_searchbarMaxAggregateOutputType | null
  }

  type GetCollectivites_searchbarGroupByPayload<T extends collectivites_searchbarGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Collectivites_searchbarGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Collectivites_searchbarGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Collectivites_searchbarGroupByOutputType[P]>
            : GetScalarType<T[P], Collectivites_searchbarGroupByOutputType[P]>
        }
      >
    >


  export type collectivites_searchbarSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_commune?: boolean
    coordinates?: boolean
    libelle_commune?: boolean
    code_epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
    search_code?: boolean
    search_libelle?: boolean
  }, ExtArgs["result"]["collectivites_searchbar"]>

  export type collectivites_searchbarSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_commune?: boolean
    coordinates?: boolean
    libelle_commune?: boolean
    code_epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
    search_code?: boolean
    search_libelle?: boolean
  }, ExtArgs["result"]["collectivites_searchbar"]>

  export type collectivites_searchbarSelectScalar = {
    index?: boolean
    code_commune?: boolean
    coordinates?: boolean
    libelle_commune?: boolean
    code_epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
    search_code?: boolean
    search_libelle?: boolean
  }


  export type $collectivites_searchbarPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "collectivites_searchbar"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      code_commune: string | null
      coordinates: string | null
      libelle_commune: string | null
      code_epci: string
      libelle_epci: string
      departement: string
      region: string
      search_code: string
      search_libelle: string
    }, ExtArgs["result"]["collectivites_searchbar"]>
    composites: {}
  }

  type collectivites_searchbarGetPayload<S extends boolean | null | undefined | collectivites_searchbarDefaultArgs> = $Result.GetResult<Prisma.$collectivites_searchbarPayload, S>

  type collectivites_searchbarCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<collectivites_searchbarFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Collectivites_searchbarCountAggregateInputType | true
    }

  export interface collectivites_searchbarDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['collectivites_searchbar'], meta: { name: 'collectivites_searchbar' } }
    /**
     * Find zero or one Collectivites_searchbar that matches the filter.
     * @param {collectivites_searchbarFindUniqueArgs} args - Arguments to find a Collectivites_searchbar
     * @example
     * // Get one Collectivites_searchbar
     * const collectivites_searchbar = await prisma.collectivites_searchbar.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends collectivites_searchbarFindUniqueArgs>(args: SelectSubset<T, collectivites_searchbarFindUniqueArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Collectivites_searchbar that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {collectivites_searchbarFindUniqueOrThrowArgs} args - Arguments to find a Collectivites_searchbar
     * @example
     * // Get one Collectivites_searchbar
     * const collectivites_searchbar = await prisma.collectivites_searchbar.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends collectivites_searchbarFindUniqueOrThrowArgs>(args: SelectSubset<T, collectivites_searchbarFindUniqueOrThrowArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Collectivites_searchbar that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectivites_searchbarFindFirstArgs} args - Arguments to find a Collectivites_searchbar
     * @example
     * // Get one Collectivites_searchbar
     * const collectivites_searchbar = await prisma.collectivites_searchbar.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends collectivites_searchbarFindFirstArgs>(args?: SelectSubset<T, collectivites_searchbarFindFirstArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Collectivites_searchbar that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectivites_searchbarFindFirstOrThrowArgs} args - Arguments to find a Collectivites_searchbar
     * @example
     * // Get one Collectivites_searchbar
     * const collectivites_searchbar = await prisma.collectivites_searchbar.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends collectivites_searchbarFindFirstOrThrowArgs>(args?: SelectSubset<T, collectivites_searchbarFindFirstOrThrowArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Collectivites_searchbars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectivites_searchbarFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collectivites_searchbars
     * const collectivites_searchbars = await prisma.collectivites_searchbar.findMany()
     * 
     * // Get first 10 Collectivites_searchbars
     * const collectivites_searchbars = await prisma.collectivites_searchbar.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const collectivites_searchbarWithIndexOnly = await prisma.collectivites_searchbar.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends collectivites_searchbarFindManyArgs>(args?: SelectSubset<T, collectivites_searchbarFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Collectivites_searchbar.
     * @param {collectivites_searchbarCreateArgs} args - Arguments to create a Collectivites_searchbar.
     * @example
     * // Create one Collectivites_searchbar
     * const Collectivites_searchbar = await prisma.collectivites_searchbar.create({
     *   data: {
     *     // ... data to create a Collectivites_searchbar
     *   }
     * })
     * 
     */
    create<T extends collectivites_searchbarCreateArgs>(args: SelectSubset<T, collectivites_searchbarCreateArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Collectivites_searchbars.
     * @param {collectivites_searchbarCreateManyArgs} args - Arguments to create many Collectivites_searchbars.
     * @example
     * // Create many Collectivites_searchbars
     * const collectivites_searchbar = await prisma.collectivites_searchbar.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends collectivites_searchbarCreateManyArgs>(args?: SelectSubset<T, collectivites_searchbarCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collectivites_searchbars and returns the data saved in the database.
     * @param {collectivites_searchbarCreateManyAndReturnArgs} args - Arguments to create many Collectivites_searchbars.
     * @example
     * // Create many Collectivites_searchbars
     * const collectivites_searchbar = await prisma.collectivites_searchbar.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collectivites_searchbars and only return the `index`
     * const collectivites_searchbarWithIndexOnly = await prisma.collectivites_searchbar.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends collectivites_searchbarCreateManyAndReturnArgs>(args?: SelectSubset<T, collectivites_searchbarCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Collectivites_searchbar.
     * @param {collectivites_searchbarDeleteArgs} args - Arguments to delete one Collectivites_searchbar.
     * @example
     * // Delete one Collectivites_searchbar
     * const Collectivites_searchbar = await prisma.collectivites_searchbar.delete({
     *   where: {
     *     // ... filter to delete one Collectivites_searchbar
     *   }
     * })
     * 
     */
    delete<T extends collectivites_searchbarDeleteArgs>(args: SelectSubset<T, collectivites_searchbarDeleteArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Collectivites_searchbar.
     * @param {collectivites_searchbarUpdateArgs} args - Arguments to update one Collectivites_searchbar.
     * @example
     * // Update one Collectivites_searchbar
     * const collectivites_searchbar = await prisma.collectivites_searchbar.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends collectivites_searchbarUpdateArgs>(args: SelectSubset<T, collectivites_searchbarUpdateArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Collectivites_searchbars.
     * @param {collectivites_searchbarDeleteManyArgs} args - Arguments to filter Collectivites_searchbars to delete.
     * @example
     * // Delete a few Collectivites_searchbars
     * const { count } = await prisma.collectivites_searchbar.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends collectivites_searchbarDeleteManyArgs>(args?: SelectSubset<T, collectivites_searchbarDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collectivites_searchbars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectivites_searchbarUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collectivites_searchbars
     * const collectivites_searchbar = await prisma.collectivites_searchbar.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends collectivites_searchbarUpdateManyArgs>(args: SelectSubset<T, collectivites_searchbarUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Collectivites_searchbar.
     * @param {collectivites_searchbarUpsertArgs} args - Arguments to update or create a Collectivites_searchbar.
     * @example
     * // Update or create a Collectivites_searchbar
     * const collectivites_searchbar = await prisma.collectivites_searchbar.upsert({
     *   create: {
     *     // ... data to create a Collectivites_searchbar
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collectivites_searchbar we want to update
     *   }
     * })
     */
    upsert<T extends collectivites_searchbarUpsertArgs>(args: SelectSubset<T, collectivites_searchbarUpsertArgs<ExtArgs>>): Prisma__collectivites_searchbarClient<$Result.GetResult<Prisma.$collectivites_searchbarPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Collectivites_searchbars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectivites_searchbarCountArgs} args - Arguments to filter Collectivites_searchbars to count.
     * @example
     * // Count the number of Collectivites_searchbars
     * const count = await prisma.collectivites_searchbar.count({
     *   where: {
     *     // ... the filter for the Collectivites_searchbars we want to count
     *   }
     * })
    **/
    count<T extends collectivites_searchbarCountArgs>(
      args?: Subset<T, collectivites_searchbarCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Collectivites_searchbarCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collectivites_searchbar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Collectivites_searchbarAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Collectivites_searchbarAggregateArgs>(args: Subset<T, Collectivites_searchbarAggregateArgs>): Prisma.PrismaPromise<GetCollectivites_searchbarAggregateType<T>>

    /**
     * Group by Collectivites_searchbar.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {collectivites_searchbarGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends collectivites_searchbarGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: collectivites_searchbarGroupByArgs['orderBy'] }
        : { orderBy?: collectivites_searchbarGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, collectivites_searchbarGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollectivites_searchbarGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the collectivites_searchbar model
   */
  readonly fields: collectivites_searchbarFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for collectivites_searchbar.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__collectivites_searchbarClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the collectivites_searchbar model
   */ 
  interface collectivites_searchbarFieldRefs {
    readonly index: FieldRef<"collectivites_searchbar", 'BigInt'>
    readonly code_commune: FieldRef<"collectivites_searchbar", 'String'>
    readonly coordinates: FieldRef<"collectivites_searchbar", 'String'>
    readonly libelle_commune: FieldRef<"collectivites_searchbar", 'String'>
    readonly code_epci: FieldRef<"collectivites_searchbar", 'String'>
    readonly libelle_epci: FieldRef<"collectivites_searchbar", 'String'>
    readonly departement: FieldRef<"collectivites_searchbar", 'String'>
    readonly region: FieldRef<"collectivites_searchbar", 'String'>
    readonly search_code: FieldRef<"collectivites_searchbar", 'String'>
    readonly search_libelle: FieldRef<"collectivites_searchbar", 'String'>
  }
    

  // Custom InputTypes
  /**
   * collectivites_searchbar findUnique
   */
  export type collectivites_searchbarFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * Filter, which collectivites_searchbar to fetch.
     */
    where: collectivites_searchbarWhereUniqueInput
  }

  /**
   * collectivites_searchbar findUniqueOrThrow
   */
  export type collectivites_searchbarFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * Filter, which collectivites_searchbar to fetch.
     */
    where: collectivites_searchbarWhereUniqueInput
  }

  /**
   * collectivites_searchbar findFirst
   */
  export type collectivites_searchbarFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * Filter, which collectivites_searchbar to fetch.
     */
    where?: collectivites_searchbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectivites_searchbars to fetch.
     */
    orderBy?: collectivites_searchbarOrderByWithRelationInput | collectivites_searchbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collectivites_searchbars.
     */
    cursor?: collectivites_searchbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectivites_searchbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectivites_searchbars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collectivites_searchbars.
     */
    distinct?: Collectivites_searchbarScalarFieldEnum | Collectivites_searchbarScalarFieldEnum[]
  }

  /**
   * collectivites_searchbar findFirstOrThrow
   */
  export type collectivites_searchbarFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * Filter, which collectivites_searchbar to fetch.
     */
    where?: collectivites_searchbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectivites_searchbars to fetch.
     */
    orderBy?: collectivites_searchbarOrderByWithRelationInput | collectivites_searchbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for collectivites_searchbars.
     */
    cursor?: collectivites_searchbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectivites_searchbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectivites_searchbars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of collectivites_searchbars.
     */
    distinct?: Collectivites_searchbarScalarFieldEnum | Collectivites_searchbarScalarFieldEnum[]
  }

  /**
   * collectivites_searchbar findMany
   */
  export type collectivites_searchbarFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * Filter, which collectivites_searchbars to fetch.
     */
    where?: collectivites_searchbarWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of collectivites_searchbars to fetch.
     */
    orderBy?: collectivites_searchbarOrderByWithRelationInput | collectivites_searchbarOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing collectivites_searchbars.
     */
    cursor?: collectivites_searchbarWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` collectivites_searchbars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` collectivites_searchbars.
     */
    skip?: number
    distinct?: Collectivites_searchbarScalarFieldEnum | Collectivites_searchbarScalarFieldEnum[]
  }

  /**
   * collectivites_searchbar create
   */
  export type collectivites_searchbarCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * The data needed to create a collectivites_searchbar.
     */
    data: XOR<collectivites_searchbarCreateInput, collectivites_searchbarUncheckedCreateInput>
  }

  /**
   * collectivites_searchbar createMany
   */
  export type collectivites_searchbarCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many collectivites_searchbars.
     */
    data: collectivites_searchbarCreateManyInput | collectivites_searchbarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * collectivites_searchbar createManyAndReturn
   */
  export type collectivites_searchbarCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many collectivites_searchbars.
     */
    data: collectivites_searchbarCreateManyInput | collectivites_searchbarCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * collectivites_searchbar update
   */
  export type collectivites_searchbarUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * The data needed to update a collectivites_searchbar.
     */
    data: XOR<collectivites_searchbarUpdateInput, collectivites_searchbarUncheckedUpdateInput>
    /**
     * Choose, which collectivites_searchbar to update.
     */
    where: collectivites_searchbarWhereUniqueInput
  }

  /**
   * collectivites_searchbar updateMany
   */
  export type collectivites_searchbarUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update collectivites_searchbars.
     */
    data: XOR<collectivites_searchbarUpdateManyMutationInput, collectivites_searchbarUncheckedUpdateManyInput>
    /**
     * Filter which collectivites_searchbars to update
     */
    where?: collectivites_searchbarWhereInput
  }

  /**
   * collectivites_searchbar upsert
   */
  export type collectivites_searchbarUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * The filter to search for the collectivites_searchbar to update in case it exists.
     */
    where: collectivites_searchbarWhereUniqueInput
    /**
     * In case the collectivites_searchbar found by the `where` argument doesn't exist, create a new collectivites_searchbar with this data.
     */
    create: XOR<collectivites_searchbarCreateInput, collectivites_searchbarUncheckedCreateInput>
    /**
     * In case the collectivites_searchbar was found with the provided `where` argument, update it with this data.
     */
    update: XOR<collectivites_searchbarUpdateInput, collectivites_searchbarUncheckedUpdateInput>
  }

  /**
   * collectivites_searchbar delete
   */
  export type collectivites_searchbarDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
    /**
     * Filter which collectivites_searchbar to delete.
     */
    where: collectivites_searchbarWhereUniqueInput
  }

  /**
   * collectivites_searchbar deleteMany
   */
  export type collectivites_searchbarDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which collectivites_searchbars to delete
     */
    where?: collectivites_searchbarWhereInput
  }

  /**
   * collectivites_searchbar without action
   */
  export type collectivites_searchbarDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the collectivites_searchbar
     */
    select?: collectivites_searchbarSelect<ExtArgs> | null
  }


  /**
   * Model biodiversite
   */

  export type AggregateBiodiversite = {
    _count: BiodiversiteCountAggregateOutputType | null
    _avg: BiodiversiteAvgAggregateOutputType | null
    _sum: BiodiversiteSumAggregateOutputType | null
    _min: BiodiversiteMinAggregateOutputType | null
    _max: BiodiversiteMaxAggregateOutputType | null
  }

  export type BiodiversiteAvgAggregateOutputType = {
    index: number | null
    region: number | null
  }

  export type BiodiversiteSumAggregateOutputType = {
    index: bigint | null
    region: number | null
  }

  export type BiodiversiteMinAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    type_touristique: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type BiodiversiteMaxAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    type_touristique: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type BiodiversiteCountAggregateOutputType = {
    index: number
    code_geographique: number
    type_touristique: number
    libelle_geographique: number
    epci: number
    libelle_epci: number
    departement: number
    region: number
    _all: number
  }


  export type BiodiversiteAvgAggregateInputType = {
    index?: true
    region?: true
  }

  export type BiodiversiteSumAggregateInputType = {
    index?: true
    region?: true
  }

  export type BiodiversiteMinAggregateInputType = {
    index?: true
    code_geographique?: true
    type_touristique?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type BiodiversiteMaxAggregateInputType = {
    index?: true
    code_geographique?: true
    type_touristique?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type BiodiversiteCountAggregateInputType = {
    index?: true
    code_geographique?: true
    type_touristique?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    _all?: true
  }

  export type BiodiversiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which biodiversite to aggregate.
     */
    where?: biodiversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biodiversites to fetch.
     */
    orderBy?: biodiversiteOrderByWithRelationInput | biodiversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: biodiversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biodiversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biodiversites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned biodiversites
    **/
    _count?: true | BiodiversiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BiodiversiteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BiodiversiteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BiodiversiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BiodiversiteMaxAggregateInputType
  }

  export type GetBiodiversiteAggregateType<T extends BiodiversiteAggregateArgs> = {
        [P in keyof T & keyof AggregateBiodiversite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBiodiversite[P]>
      : GetScalarType<T[P], AggregateBiodiversite[P]>
  }




  export type biodiversiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: biodiversiteWhereInput
    orderBy?: biodiversiteOrderByWithAggregationInput | biodiversiteOrderByWithAggregationInput[]
    by: BiodiversiteScalarFieldEnum[] | BiodiversiteScalarFieldEnum
    having?: biodiversiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BiodiversiteCountAggregateInputType | true
    _avg?: BiodiversiteAvgAggregateInputType
    _sum?: BiodiversiteSumAggregateInputType
    _min?: BiodiversiteMinAggregateInputType
    _max?: BiodiversiteMaxAggregateInputType
  }

  export type BiodiversiteGroupByOutputType = {
    index: bigint
    code_geographique: string | null
    type_touristique: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
    _count: BiodiversiteCountAggregateOutputType | null
    _avg: BiodiversiteAvgAggregateOutputType | null
    _sum: BiodiversiteSumAggregateOutputType | null
    _min: BiodiversiteMinAggregateOutputType | null
    _max: BiodiversiteMaxAggregateOutputType | null
  }

  type GetBiodiversiteGroupByPayload<T extends biodiversiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BiodiversiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BiodiversiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BiodiversiteGroupByOutputType[P]>
            : GetScalarType<T[P], BiodiversiteGroupByOutputType[P]>
        }
      >
    >


  export type biodiversiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    type_touristique?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["biodiversite"]>

  export type biodiversiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    type_touristique?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["biodiversite"]>

  export type biodiversiteSelectScalar = {
    index?: boolean
    code_geographique?: boolean
    type_touristique?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }


  export type $biodiversitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "biodiversite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      code_geographique: string | null
      type_touristique: string | null
      libelle_geographique: string | null
      epci: string | null
      libelle_epci: string | null
      departement: string | null
      region: number | null
    }, ExtArgs["result"]["biodiversite"]>
    composites: {}
  }

  type biodiversiteGetPayload<S extends boolean | null | undefined | biodiversiteDefaultArgs> = $Result.GetResult<Prisma.$biodiversitePayload, S>

  type biodiversiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<biodiversiteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: BiodiversiteCountAggregateInputType | true
    }

  export interface biodiversiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['biodiversite'], meta: { name: 'biodiversite' } }
    /**
     * Find zero or one Biodiversite that matches the filter.
     * @param {biodiversiteFindUniqueArgs} args - Arguments to find a Biodiversite
     * @example
     * // Get one Biodiversite
     * const biodiversite = await prisma.biodiversite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends biodiversiteFindUniqueArgs>(args: SelectSubset<T, biodiversiteFindUniqueArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Biodiversite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {biodiversiteFindUniqueOrThrowArgs} args - Arguments to find a Biodiversite
     * @example
     * // Get one Biodiversite
     * const biodiversite = await prisma.biodiversite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends biodiversiteFindUniqueOrThrowArgs>(args: SelectSubset<T, biodiversiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Biodiversite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {biodiversiteFindFirstArgs} args - Arguments to find a Biodiversite
     * @example
     * // Get one Biodiversite
     * const biodiversite = await prisma.biodiversite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends biodiversiteFindFirstArgs>(args?: SelectSubset<T, biodiversiteFindFirstArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Biodiversite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {biodiversiteFindFirstOrThrowArgs} args - Arguments to find a Biodiversite
     * @example
     * // Get one Biodiversite
     * const biodiversite = await prisma.biodiversite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends biodiversiteFindFirstOrThrowArgs>(args?: SelectSubset<T, biodiversiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Biodiversites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {biodiversiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Biodiversites
     * const biodiversites = await prisma.biodiversite.findMany()
     * 
     * // Get first 10 Biodiversites
     * const biodiversites = await prisma.biodiversite.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const biodiversiteWithIndexOnly = await prisma.biodiversite.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends biodiversiteFindManyArgs>(args?: SelectSubset<T, biodiversiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Biodiversite.
     * @param {biodiversiteCreateArgs} args - Arguments to create a Biodiversite.
     * @example
     * // Create one Biodiversite
     * const Biodiversite = await prisma.biodiversite.create({
     *   data: {
     *     // ... data to create a Biodiversite
     *   }
     * })
     * 
     */
    create<T extends biodiversiteCreateArgs>(args: SelectSubset<T, biodiversiteCreateArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Biodiversites.
     * @param {biodiversiteCreateManyArgs} args - Arguments to create many Biodiversites.
     * @example
     * // Create many Biodiversites
     * const biodiversite = await prisma.biodiversite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends biodiversiteCreateManyArgs>(args?: SelectSubset<T, biodiversiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Biodiversites and returns the data saved in the database.
     * @param {biodiversiteCreateManyAndReturnArgs} args - Arguments to create many Biodiversites.
     * @example
     * // Create many Biodiversites
     * const biodiversite = await prisma.biodiversite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Biodiversites and only return the `index`
     * const biodiversiteWithIndexOnly = await prisma.biodiversite.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends biodiversiteCreateManyAndReturnArgs>(args?: SelectSubset<T, biodiversiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Biodiversite.
     * @param {biodiversiteDeleteArgs} args - Arguments to delete one Biodiversite.
     * @example
     * // Delete one Biodiversite
     * const Biodiversite = await prisma.biodiversite.delete({
     *   where: {
     *     // ... filter to delete one Biodiversite
     *   }
     * })
     * 
     */
    delete<T extends biodiversiteDeleteArgs>(args: SelectSubset<T, biodiversiteDeleteArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Biodiversite.
     * @param {biodiversiteUpdateArgs} args - Arguments to update one Biodiversite.
     * @example
     * // Update one Biodiversite
     * const biodiversite = await prisma.biodiversite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends biodiversiteUpdateArgs>(args: SelectSubset<T, biodiversiteUpdateArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Biodiversites.
     * @param {biodiversiteDeleteManyArgs} args - Arguments to filter Biodiversites to delete.
     * @example
     * // Delete a few Biodiversites
     * const { count } = await prisma.biodiversite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends biodiversiteDeleteManyArgs>(args?: SelectSubset<T, biodiversiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Biodiversites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {biodiversiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Biodiversites
     * const biodiversite = await prisma.biodiversite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends biodiversiteUpdateManyArgs>(args: SelectSubset<T, biodiversiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Biodiversite.
     * @param {biodiversiteUpsertArgs} args - Arguments to update or create a Biodiversite.
     * @example
     * // Update or create a Biodiversite
     * const biodiversite = await prisma.biodiversite.upsert({
     *   create: {
     *     // ... data to create a Biodiversite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Biodiversite we want to update
     *   }
     * })
     */
    upsert<T extends biodiversiteUpsertArgs>(args: SelectSubset<T, biodiversiteUpsertArgs<ExtArgs>>): Prisma__biodiversiteClient<$Result.GetResult<Prisma.$biodiversitePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Biodiversites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {biodiversiteCountArgs} args - Arguments to filter Biodiversites to count.
     * @example
     * // Count the number of Biodiversites
     * const count = await prisma.biodiversite.count({
     *   where: {
     *     // ... the filter for the Biodiversites we want to count
     *   }
     * })
    **/
    count<T extends biodiversiteCountArgs>(
      args?: Subset<T, biodiversiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BiodiversiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Biodiversite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BiodiversiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BiodiversiteAggregateArgs>(args: Subset<T, BiodiversiteAggregateArgs>): Prisma.PrismaPromise<GetBiodiversiteAggregateType<T>>

    /**
     * Group by Biodiversite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {biodiversiteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends biodiversiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: biodiversiteGroupByArgs['orderBy'] }
        : { orderBy?: biodiversiteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, biodiversiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBiodiversiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the biodiversite model
   */
  readonly fields: biodiversiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for biodiversite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__biodiversiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the biodiversite model
   */ 
  interface biodiversiteFieldRefs {
    readonly index: FieldRef<"biodiversite", 'BigInt'>
    readonly code_geographique: FieldRef<"biodiversite", 'String'>
    readonly type_touristique: FieldRef<"biodiversite", 'String'>
    readonly libelle_geographique: FieldRef<"biodiversite", 'String'>
    readonly epci: FieldRef<"biodiversite", 'String'>
    readonly libelle_epci: FieldRef<"biodiversite", 'String'>
    readonly departement: FieldRef<"biodiversite", 'String'>
    readonly region: FieldRef<"biodiversite", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * biodiversite findUnique
   */
  export type biodiversiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * Filter, which biodiversite to fetch.
     */
    where: biodiversiteWhereUniqueInput
  }

  /**
   * biodiversite findUniqueOrThrow
   */
  export type biodiversiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * Filter, which biodiversite to fetch.
     */
    where: biodiversiteWhereUniqueInput
  }

  /**
   * biodiversite findFirst
   */
  export type biodiversiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * Filter, which biodiversite to fetch.
     */
    where?: biodiversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biodiversites to fetch.
     */
    orderBy?: biodiversiteOrderByWithRelationInput | biodiversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for biodiversites.
     */
    cursor?: biodiversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biodiversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biodiversites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of biodiversites.
     */
    distinct?: BiodiversiteScalarFieldEnum | BiodiversiteScalarFieldEnum[]
  }

  /**
   * biodiversite findFirstOrThrow
   */
  export type biodiversiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * Filter, which biodiversite to fetch.
     */
    where?: biodiversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biodiversites to fetch.
     */
    orderBy?: biodiversiteOrderByWithRelationInput | biodiversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for biodiversites.
     */
    cursor?: biodiversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biodiversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biodiversites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of biodiversites.
     */
    distinct?: BiodiversiteScalarFieldEnum | BiodiversiteScalarFieldEnum[]
  }

  /**
   * biodiversite findMany
   */
  export type biodiversiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * Filter, which biodiversites to fetch.
     */
    where?: biodiversiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of biodiversites to fetch.
     */
    orderBy?: biodiversiteOrderByWithRelationInput | biodiversiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing biodiversites.
     */
    cursor?: biodiversiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` biodiversites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` biodiversites.
     */
    skip?: number
    distinct?: BiodiversiteScalarFieldEnum | BiodiversiteScalarFieldEnum[]
  }

  /**
   * biodiversite create
   */
  export type biodiversiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * The data needed to create a biodiversite.
     */
    data: XOR<biodiversiteCreateInput, biodiversiteUncheckedCreateInput>
  }

  /**
   * biodiversite createMany
   */
  export type biodiversiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many biodiversites.
     */
    data: biodiversiteCreateManyInput | biodiversiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * biodiversite createManyAndReturn
   */
  export type biodiversiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many biodiversites.
     */
    data: biodiversiteCreateManyInput | biodiversiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * biodiversite update
   */
  export type biodiversiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * The data needed to update a biodiversite.
     */
    data: XOR<biodiversiteUpdateInput, biodiversiteUncheckedUpdateInput>
    /**
     * Choose, which biodiversite to update.
     */
    where: biodiversiteWhereUniqueInput
  }

  /**
   * biodiversite updateMany
   */
  export type biodiversiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update biodiversites.
     */
    data: XOR<biodiversiteUpdateManyMutationInput, biodiversiteUncheckedUpdateManyInput>
    /**
     * Filter which biodiversites to update
     */
    where?: biodiversiteWhereInput
  }

  /**
   * biodiversite upsert
   */
  export type biodiversiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * The filter to search for the biodiversite to update in case it exists.
     */
    where: biodiversiteWhereUniqueInput
    /**
     * In case the biodiversite found by the `where` argument doesn't exist, create a new biodiversite with this data.
     */
    create: XOR<biodiversiteCreateInput, biodiversiteUncheckedCreateInput>
    /**
     * In case the biodiversite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<biodiversiteUpdateInput, biodiversiteUncheckedUpdateInput>
  }

  /**
   * biodiversite delete
   */
  export type biodiversiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
    /**
     * Filter which biodiversite to delete.
     */
    where: biodiversiteWhereUniqueInput
  }

  /**
   * biodiversite deleteMany
   */
  export type biodiversiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which biodiversites to delete
     */
    where?: biodiversiteWhereInput
  }

  /**
   * biodiversite without action
   */
  export type biodiversiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the biodiversite
     */
    select?: biodiversiteSelect<ExtArgs> | null
  }


  /**
   * Model gestion_risques
   */

  export type AggregateGestion_risques = {
    _count: Gestion_risquesCountAggregateOutputType | null
    _avg: Gestion_risquesAvgAggregateOutputType | null
    _sum: Gestion_risquesSumAggregateOutputType | null
    _min: Gestion_risquesMinAggregateOutputType | null
    _max: Gestion_risquesMaxAggregateOutputType | null
  }

  export type Gestion_risquesAvgAggregateOutputType = {
    index: number | null
    region: number | null
  }

  export type Gestion_risquesSumAggregateOutputType = {
    index: bigint | null
    region: number | null
  }

  export type Gestion_risquesMinAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    lib_risque_jo: string | null
    dat_pub_arrete: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type Gestion_risquesMaxAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    lib_risque_jo: string | null
    dat_pub_arrete: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type Gestion_risquesCountAggregateOutputType = {
    index: number
    code_geographique: number
    lib_risque_jo: number
    dat_pub_arrete: number
    libelle_geographique: number
    epci: number
    libelle_epci: number
    departement: number
    region: number
    _all: number
  }


  export type Gestion_risquesAvgAggregateInputType = {
    index?: true
    region?: true
  }

  export type Gestion_risquesSumAggregateInputType = {
    index?: true
    region?: true
  }

  export type Gestion_risquesMinAggregateInputType = {
    index?: true
    code_geographique?: true
    lib_risque_jo?: true
    dat_pub_arrete?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type Gestion_risquesMaxAggregateInputType = {
    index?: true
    code_geographique?: true
    lib_risque_jo?: true
    dat_pub_arrete?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type Gestion_risquesCountAggregateInputType = {
    index?: true
    code_geographique?: true
    lib_risque_jo?: true
    dat_pub_arrete?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    _all?: true
  }

  export type Gestion_risquesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gestion_risques to aggregate.
     */
    where?: gestion_risquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestion_risques to fetch.
     */
    orderBy?: gestion_risquesOrderByWithRelationInput | gestion_risquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: gestion_risquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestion_risques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestion_risques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned gestion_risques
    **/
    _count?: true | Gestion_risquesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Gestion_risquesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Gestion_risquesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Gestion_risquesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Gestion_risquesMaxAggregateInputType
  }

  export type GetGestion_risquesAggregateType<T extends Gestion_risquesAggregateArgs> = {
        [P in keyof T & keyof AggregateGestion_risques]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGestion_risques[P]>
      : GetScalarType<T[P], AggregateGestion_risques[P]>
  }




  export type gestion_risquesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: gestion_risquesWhereInput
    orderBy?: gestion_risquesOrderByWithAggregationInput | gestion_risquesOrderByWithAggregationInput[]
    by: Gestion_risquesScalarFieldEnum[] | Gestion_risquesScalarFieldEnum
    having?: gestion_risquesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Gestion_risquesCountAggregateInputType | true
    _avg?: Gestion_risquesAvgAggregateInputType
    _sum?: Gestion_risquesSumAggregateInputType
    _min?: Gestion_risquesMinAggregateInputType
    _max?: Gestion_risquesMaxAggregateInputType
  }

  export type Gestion_risquesGroupByOutputType = {
    index: bigint
    code_geographique: string | null
    lib_risque_jo: string | null
    dat_pub_arrete: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
    _count: Gestion_risquesCountAggregateOutputType | null
    _avg: Gestion_risquesAvgAggregateOutputType | null
    _sum: Gestion_risquesSumAggregateOutputType | null
    _min: Gestion_risquesMinAggregateOutputType | null
    _max: Gestion_risquesMaxAggregateOutputType | null
  }

  type GetGestion_risquesGroupByPayload<T extends gestion_risquesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Gestion_risquesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Gestion_risquesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Gestion_risquesGroupByOutputType[P]>
            : GetScalarType<T[P], Gestion_risquesGroupByOutputType[P]>
        }
      >
    >


  export type gestion_risquesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    lib_risque_jo?: boolean
    dat_pub_arrete?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["gestion_risques"]>

  export type gestion_risquesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    lib_risque_jo?: boolean
    dat_pub_arrete?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["gestion_risques"]>

  export type gestion_risquesSelectScalar = {
    index?: boolean
    code_geographique?: boolean
    lib_risque_jo?: boolean
    dat_pub_arrete?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }


  export type $gestion_risquesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "gestion_risques"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      code_geographique: string | null
      lib_risque_jo: string | null
      dat_pub_arrete: string | null
      libelle_geographique: string | null
      epci: string | null
      libelle_epci: string | null
      departement: string | null
      region: number | null
    }, ExtArgs["result"]["gestion_risques"]>
    composites: {}
  }

  type gestion_risquesGetPayload<S extends boolean | null | undefined | gestion_risquesDefaultArgs> = $Result.GetResult<Prisma.$gestion_risquesPayload, S>

  type gestion_risquesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<gestion_risquesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Gestion_risquesCountAggregateInputType | true
    }

  export interface gestion_risquesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['gestion_risques'], meta: { name: 'gestion_risques' } }
    /**
     * Find zero or one Gestion_risques that matches the filter.
     * @param {gestion_risquesFindUniqueArgs} args - Arguments to find a Gestion_risques
     * @example
     * // Get one Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends gestion_risquesFindUniqueArgs>(args: SelectSubset<T, gestion_risquesFindUniqueArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Gestion_risques that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {gestion_risquesFindUniqueOrThrowArgs} args - Arguments to find a Gestion_risques
     * @example
     * // Get one Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends gestion_risquesFindUniqueOrThrowArgs>(args: SelectSubset<T, gestion_risquesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Gestion_risques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestion_risquesFindFirstArgs} args - Arguments to find a Gestion_risques
     * @example
     * // Get one Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends gestion_risquesFindFirstArgs>(args?: SelectSubset<T, gestion_risquesFindFirstArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Gestion_risques that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestion_risquesFindFirstOrThrowArgs} args - Arguments to find a Gestion_risques
     * @example
     * // Get one Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends gestion_risquesFindFirstOrThrowArgs>(args?: SelectSubset<T, gestion_risquesFindFirstOrThrowArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Gestion_risques that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestion_risquesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.findMany()
     * 
     * // Get first 10 Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const gestion_risquesWithIndexOnly = await prisma.gestion_risques.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends gestion_risquesFindManyArgs>(args?: SelectSubset<T, gestion_risquesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Gestion_risques.
     * @param {gestion_risquesCreateArgs} args - Arguments to create a Gestion_risques.
     * @example
     * // Create one Gestion_risques
     * const Gestion_risques = await prisma.gestion_risques.create({
     *   data: {
     *     // ... data to create a Gestion_risques
     *   }
     * })
     * 
     */
    create<T extends gestion_risquesCreateArgs>(args: SelectSubset<T, gestion_risquesCreateArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Gestion_risques.
     * @param {gestion_risquesCreateManyArgs} args - Arguments to create many Gestion_risques.
     * @example
     * // Create many Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends gestion_risquesCreateManyArgs>(args?: SelectSubset<T, gestion_risquesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Gestion_risques and returns the data saved in the database.
     * @param {gestion_risquesCreateManyAndReturnArgs} args - Arguments to create many Gestion_risques.
     * @example
     * // Create many Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Gestion_risques and only return the `index`
     * const gestion_risquesWithIndexOnly = await prisma.gestion_risques.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends gestion_risquesCreateManyAndReturnArgs>(args?: SelectSubset<T, gestion_risquesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Gestion_risques.
     * @param {gestion_risquesDeleteArgs} args - Arguments to delete one Gestion_risques.
     * @example
     * // Delete one Gestion_risques
     * const Gestion_risques = await prisma.gestion_risques.delete({
     *   where: {
     *     // ... filter to delete one Gestion_risques
     *   }
     * })
     * 
     */
    delete<T extends gestion_risquesDeleteArgs>(args: SelectSubset<T, gestion_risquesDeleteArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Gestion_risques.
     * @param {gestion_risquesUpdateArgs} args - Arguments to update one Gestion_risques.
     * @example
     * // Update one Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends gestion_risquesUpdateArgs>(args: SelectSubset<T, gestion_risquesUpdateArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Gestion_risques.
     * @param {gestion_risquesDeleteManyArgs} args - Arguments to filter Gestion_risques to delete.
     * @example
     * // Delete a few Gestion_risques
     * const { count } = await prisma.gestion_risques.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends gestion_risquesDeleteManyArgs>(args?: SelectSubset<T, gestion_risquesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Gestion_risques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestion_risquesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends gestion_risquesUpdateManyArgs>(args: SelectSubset<T, gestion_risquesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Gestion_risques.
     * @param {gestion_risquesUpsertArgs} args - Arguments to update or create a Gestion_risques.
     * @example
     * // Update or create a Gestion_risques
     * const gestion_risques = await prisma.gestion_risques.upsert({
     *   create: {
     *     // ... data to create a Gestion_risques
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Gestion_risques we want to update
     *   }
     * })
     */
    upsert<T extends gestion_risquesUpsertArgs>(args: SelectSubset<T, gestion_risquesUpsertArgs<ExtArgs>>): Prisma__gestion_risquesClient<$Result.GetResult<Prisma.$gestion_risquesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Gestion_risques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestion_risquesCountArgs} args - Arguments to filter Gestion_risques to count.
     * @example
     * // Count the number of Gestion_risques
     * const count = await prisma.gestion_risques.count({
     *   where: {
     *     // ... the filter for the Gestion_risques we want to count
     *   }
     * })
    **/
    count<T extends gestion_risquesCountArgs>(
      args?: Subset<T, gestion_risquesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Gestion_risquesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Gestion_risques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Gestion_risquesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Gestion_risquesAggregateArgs>(args: Subset<T, Gestion_risquesAggregateArgs>): Prisma.PrismaPromise<GetGestion_risquesAggregateType<T>>

    /**
     * Group by Gestion_risques.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {gestion_risquesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends gestion_risquesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: gestion_risquesGroupByArgs['orderBy'] }
        : { orderBy?: gestion_risquesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, gestion_risquesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGestion_risquesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the gestion_risques model
   */
  readonly fields: gestion_risquesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for gestion_risques.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__gestion_risquesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the gestion_risques model
   */ 
  interface gestion_risquesFieldRefs {
    readonly index: FieldRef<"gestion_risques", 'BigInt'>
    readonly code_geographique: FieldRef<"gestion_risques", 'String'>
    readonly lib_risque_jo: FieldRef<"gestion_risques", 'String'>
    readonly dat_pub_arrete: FieldRef<"gestion_risques", 'String'>
    readonly libelle_geographique: FieldRef<"gestion_risques", 'String'>
    readonly epci: FieldRef<"gestion_risques", 'String'>
    readonly libelle_epci: FieldRef<"gestion_risques", 'String'>
    readonly departement: FieldRef<"gestion_risques", 'String'>
    readonly region: FieldRef<"gestion_risques", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * gestion_risques findUnique
   */
  export type gestion_risquesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * Filter, which gestion_risques to fetch.
     */
    where: gestion_risquesWhereUniqueInput
  }

  /**
   * gestion_risques findUniqueOrThrow
   */
  export type gestion_risquesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * Filter, which gestion_risques to fetch.
     */
    where: gestion_risquesWhereUniqueInput
  }

  /**
   * gestion_risques findFirst
   */
  export type gestion_risquesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * Filter, which gestion_risques to fetch.
     */
    where?: gestion_risquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestion_risques to fetch.
     */
    orderBy?: gestion_risquesOrderByWithRelationInput | gestion_risquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gestion_risques.
     */
    cursor?: gestion_risquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestion_risques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestion_risques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gestion_risques.
     */
    distinct?: Gestion_risquesScalarFieldEnum | Gestion_risquesScalarFieldEnum[]
  }

  /**
   * gestion_risques findFirstOrThrow
   */
  export type gestion_risquesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * Filter, which gestion_risques to fetch.
     */
    where?: gestion_risquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestion_risques to fetch.
     */
    orderBy?: gestion_risquesOrderByWithRelationInput | gestion_risquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for gestion_risques.
     */
    cursor?: gestion_risquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestion_risques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestion_risques.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of gestion_risques.
     */
    distinct?: Gestion_risquesScalarFieldEnum | Gestion_risquesScalarFieldEnum[]
  }

  /**
   * gestion_risques findMany
   */
  export type gestion_risquesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * Filter, which gestion_risques to fetch.
     */
    where?: gestion_risquesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of gestion_risques to fetch.
     */
    orderBy?: gestion_risquesOrderByWithRelationInput | gestion_risquesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing gestion_risques.
     */
    cursor?: gestion_risquesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` gestion_risques from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` gestion_risques.
     */
    skip?: number
    distinct?: Gestion_risquesScalarFieldEnum | Gestion_risquesScalarFieldEnum[]
  }

  /**
   * gestion_risques create
   */
  export type gestion_risquesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * The data needed to create a gestion_risques.
     */
    data: XOR<gestion_risquesCreateInput, gestion_risquesUncheckedCreateInput>
  }

  /**
   * gestion_risques createMany
   */
  export type gestion_risquesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many gestion_risques.
     */
    data: gestion_risquesCreateManyInput | gestion_risquesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gestion_risques createManyAndReturn
   */
  export type gestion_risquesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many gestion_risques.
     */
    data: gestion_risquesCreateManyInput | gestion_risquesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * gestion_risques update
   */
  export type gestion_risquesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * The data needed to update a gestion_risques.
     */
    data: XOR<gestion_risquesUpdateInput, gestion_risquesUncheckedUpdateInput>
    /**
     * Choose, which gestion_risques to update.
     */
    where: gestion_risquesWhereUniqueInput
  }

  /**
   * gestion_risques updateMany
   */
  export type gestion_risquesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update gestion_risques.
     */
    data: XOR<gestion_risquesUpdateManyMutationInput, gestion_risquesUncheckedUpdateManyInput>
    /**
     * Filter which gestion_risques to update
     */
    where?: gestion_risquesWhereInput
  }

  /**
   * gestion_risques upsert
   */
  export type gestion_risquesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * The filter to search for the gestion_risques to update in case it exists.
     */
    where: gestion_risquesWhereUniqueInput
    /**
     * In case the gestion_risques found by the `where` argument doesn't exist, create a new gestion_risques with this data.
     */
    create: XOR<gestion_risquesCreateInput, gestion_risquesUncheckedCreateInput>
    /**
     * In case the gestion_risques was found with the provided `where` argument, update it with this data.
     */
    update: XOR<gestion_risquesUpdateInput, gestion_risquesUncheckedUpdateInput>
  }

  /**
   * gestion_risques delete
   */
  export type gestion_risquesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
    /**
     * Filter which gestion_risques to delete.
     */
    where: gestion_risquesWhereUniqueInput
  }

  /**
   * gestion_risques deleteMany
   */
  export type gestion_risquesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which gestion_risques to delete
     */
    where?: gestion_risquesWhereInput
  }

  /**
   * gestion_risques without action
   */
  export type gestion_risquesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the gestion_risques
     */
    select?: gestion_risquesSelect<ExtArgs> | null
  }


  /**
   * Model communes_drom
   */

  export type AggregateCommunes_drom = {
    _count: Communes_dromCountAggregateOutputType | null
    _avg: Communes_dromAvgAggregateOutputType | null
    _sum: Communes_dromSumAggregateOutputType | null
    _min: Communes_dromMinAggregateOutputType | null
    _max: Communes_dromMaxAggregateOutputType | null
  }

  export type Communes_dromAvgAggregateOutputType = {
    pk: number | null
    densite_bati: number | null
    precarite_logement: number | null
    surface: number | null
  }

  export type Communes_dromSumAggregateOutputType = {
    pk: number | null
    densite_bati: number | null
    precarite_logement: number | null
    surface: number | null
  }

  export type Communes_dromMinAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    epci: string | null
    libelle_epci: string | null
    coordinates: string | null
    densite_bati: number | null
    precarite_logement: number | null
    surface: number | null
  }

  export type Communes_dromMaxAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    epci: string | null
    libelle_epci: string | null
    coordinates: string | null
    densite_bati: number | null
    precarite_logement: number | null
    surface: number | null
  }

  export type Communes_dromCountAggregateOutputType = {
    pk: number
    code_commune: number
    libelle_commune: number
    epci: number
    libelle_epci: number
    coordinates: number
    densite_bati: number
    precarite_logement: number
    surface: number
    _all: number
  }


  export type Communes_dromAvgAggregateInputType = {
    pk?: true
    densite_bati?: true
    precarite_logement?: true
    surface?: true
  }

  export type Communes_dromSumAggregateInputType = {
    pk?: true
    densite_bati?: true
    precarite_logement?: true
    surface?: true
  }

  export type Communes_dromMinAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    epci?: true
    libelle_epci?: true
    coordinates?: true
    densite_bati?: true
    precarite_logement?: true
    surface?: true
  }

  export type Communes_dromMaxAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    epci?: true
    libelle_epci?: true
    coordinates?: true
    densite_bati?: true
    precarite_logement?: true
    surface?: true
  }

  export type Communes_dromCountAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    epci?: true
    libelle_epci?: true
    coordinates?: true
    densite_bati?: true
    precarite_logement?: true
    surface?: true
    _all?: true
  }

  export type Communes_dromAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes_drom to aggregate.
     */
    where?: communes_dromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_droms to fetch.
     */
    orderBy?: communes_dromOrderByWithRelationInput | communes_dromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communes_dromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_droms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_droms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communes_droms
    **/
    _count?: true | Communes_dromCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Communes_dromAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Communes_dromSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Communes_dromMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Communes_dromMaxAggregateInputType
  }

  export type GetCommunes_dromAggregateType<T extends Communes_dromAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunes_drom]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunes_drom[P]>
      : GetScalarType<T[P], AggregateCommunes_drom[P]>
  }




  export type communes_dromGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communes_dromWhereInput
    orderBy?: communes_dromOrderByWithAggregationInput | communes_dromOrderByWithAggregationInput[]
    by: Communes_dromScalarFieldEnum[] | Communes_dromScalarFieldEnum
    having?: communes_dromScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Communes_dromCountAggregateInputType | true
    _avg?: Communes_dromAvgAggregateInputType
    _sum?: Communes_dromSumAggregateInputType
    _min?: Communes_dromMinAggregateInputType
    _max?: Communes_dromMaxAggregateInputType
  }

  export type Communes_dromGroupByOutputType = {
    pk: number
    code_commune: string
    libelle_commune: string
    epci: string
    libelle_epci: string
    coordinates: string
    densite_bati: number | null
    precarite_logement: number | null
    surface: number | null
    _count: Communes_dromCountAggregateOutputType | null
    _avg: Communes_dromAvgAggregateOutputType | null
    _sum: Communes_dromSumAggregateOutputType | null
    _min: Communes_dromMinAggregateOutputType | null
    _max: Communes_dromMaxAggregateOutputType | null
  }

  type GetCommunes_dromGroupByPayload<T extends communes_dromGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Communes_dromGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Communes_dromGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Communes_dromGroupByOutputType[P]>
            : GetScalarType<T[P], Communes_dromGroupByOutputType[P]>
        }
      >
    >


  export type communes_dromSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    epci?: boolean
    libelle_epci?: boolean
    coordinates?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
    surface?: boolean
  }, ExtArgs["result"]["communes_drom"]>


  export type communes_dromSelectScalar = {
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    epci?: boolean
    libelle_epci?: boolean
    coordinates?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
    surface?: boolean
  }


  export type $communes_dromPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communes_drom"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      code_commune: string
      libelle_commune: string
      epci: string
      libelle_epci: string
      coordinates: string
      densite_bati: number | null
      precarite_logement: number | null
      surface: number | null
    }, ExtArgs["result"]["communes_drom"]>
    composites: {}
  }

  type communes_dromGetPayload<S extends boolean | null | undefined | communes_dromDefaultArgs> = $Result.GetResult<Prisma.$communes_dromPayload, S>

  type communes_dromCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<communes_dromFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Communes_dromCountAggregateInputType | true
    }

  export interface communes_dromDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communes_drom'], meta: { name: 'communes_drom' } }
    /**
     * Find zero or one Communes_drom that matches the filter.
     * @param {communes_dromFindUniqueArgs} args - Arguments to find a Communes_drom
     * @example
     * // Get one Communes_drom
     * const communes_drom = await prisma.communes_drom.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends communes_dromFindUniqueArgs>(args: SelectSubset<T, communes_dromFindUniqueArgs<ExtArgs>>): Prisma__communes_dromClient<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Communes_drom that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {communes_dromFindUniqueOrThrowArgs} args - Arguments to find a Communes_drom
     * @example
     * // Get one Communes_drom
     * const communes_drom = await prisma.communes_drom.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communes_dromFindUniqueOrThrowArgs>(args: SelectSubset<T, communes_dromFindUniqueOrThrowArgs<ExtArgs>>): Prisma__communes_dromClient<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Communes_drom that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_dromFindFirstArgs} args - Arguments to find a Communes_drom
     * @example
     * // Get one Communes_drom
     * const communes_drom = await prisma.communes_drom.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends communes_dromFindFirstArgs>(args?: SelectSubset<T, communes_dromFindFirstArgs<ExtArgs>>): Prisma__communes_dromClient<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Communes_drom that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_dromFindFirstOrThrowArgs} args - Arguments to find a Communes_drom
     * @example
     * // Get one Communes_drom
     * const communes_drom = await prisma.communes_drom.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends communes_dromFindFirstOrThrowArgs>(args?: SelectSubset<T, communes_dromFindFirstOrThrowArgs<ExtArgs>>): Prisma__communes_dromClient<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Communes_droms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_dromFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communes_droms
     * const communes_droms = await prisma.communes_drom.findMany()
     * 
     * // Get first 10 Communes_droms
     * const communes_droms = await prisma.communes_drom.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const communes_dromWithPkOnly = await prisma.communes_drom.findMany({ select: { pk: true } })
     * 
     */
    findMany<T extends communes_dromFindManyArgs>(args?: SelectSubset<T, communes_dromFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "findMany">>

    /**
     * Delete a Communes_drom.
     * @param {communes_dromDeleteArgs} args - Arguments to delete one Communes_drom.
     * @example
     * // Delete one Communes_drom
     * const Communes_drom = await prisma.communes_drom.delete({
     *   where: {
     *     // ... filter to delete one Communes_drom
     *   }
     * })
     * 
     */
    delete<T extends communes_dromDeleteArgs>(args: SelectSubset<T, communes_dromDeleteArgs<ExtArgs>>): Prisma__communes_dromClient<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Communes_drom.
     * @param {communes_dromUpdateArgs} args - Arguments to update one Communes_drom.
     * @example
     * // Update one Communes_drom
     * const communes_drom = await prisma.communes_drom.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends communes_dromUpdateArgs>(args: SelectSubset<T, communes_dromUpdateArgs<ExtArgs>>): Prisma__communes_dromClient<$Result.GetResult<Prisma.$communes_dromPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Communes_droms.
     * @param {communes_dromDeleteManyArgs} args - Arguments to filter Communes_droms to delete.
     * @example
     * // Delete a few Communes_droms
     * const { count } = await prisma.communes_drom.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends communes_dromDeleteManyArgs>(args?: SelectSubset<T, communes_dromDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes_droms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_dromUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communes_droms
     * const communes_drom = await prisma.communes_drom.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends communes_dromUpdateManyArgs>(args: SelectSubset<T, communes_dromUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>


    /**
     * Count the number of Communes_droms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_dromCountArgs} args - Arguments to filter Communes_droms to count.
     * @example
     * // Count the number of Communes_droms
     * const count = await prisma.communes_drom.count({
     *   where: {
     *     // ... the filter for the Communes_droms we want to count
     *   }
     * })
    **/
    count<T extends communes_dromCountArgs>(
      args?: Subset<T, communes_dromCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Communes_dromCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communes_drom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Communes_dromAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Communes_dromAggregateArgs>(args: Subset<T, Communes_dromAggregateArgs>): Prisma.PrismaPromise<GetCommunes_dromAggregateType<T>>

    /**
     * Group by Communes_drom.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_dromGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends communes_dromGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communes_dromGroupByArgs['orderBy'] }
        : { orderBy?: communes_dromGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, communes_dromGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunes_dromGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communes_drom model
   */
  readonly fields: communes_dromFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communes_drom.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communes_dromClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the communes_drom model
   */ 
  interface communes_dromFieldRefs {
    readonly pk: FieldRef<"communes_drom", 'Int'>
    readonly code_commune: FieldRef<"communes_drom", 'String'>
    readonly libelle_commune: FieldRef<"communes_drom", 'String'>
    readonly epci: FieldRef<"communes_drom", 'String'>
    readonly libelle_epci: FieldRef<"communes_drom", 'String'>
    readonly coordinates: FieldRef<"communes_drom", 'String'>
    readonly densite_bati: FieldRef<"communes_drom", 'Float'>
    readonly precarite_logement: FieldRef<"communes_drom", 'Float'>
    readonly surface: FieldRef<"communes_drom", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * communes_drom findUnique
   */
  export type communes_dromFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * Filter, which communes_drom to fetch.
     */
    where: communes_dromWhereUniqueInput
  }

  /**
   * communes_drom findUniqueOrThrow
   */
  export type communes_dromFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * Filter, which communes_drom to fetch.
     */
    where: communes_dromWhereUniqueInput
  }

  /**
   * communes_drom findFirst
   */
  export type communes_dromFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * Filter, which communes_drom to fetch.
     */
    where?: communes_dromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_droms to fetch.
     */
    orderBy?: communes_dromOrderByWithRelationInput | communes_dromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes_droms.
     */
    cursor?: communes_dromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_droms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_droms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes_droms.
     */
    distinct?: Communes_dromScalarFieldEnum | Communes_dromScalarFieldEnum[]
  }

  /**
   * communes_drom findFirstOrThrow
   */
  export type communes_dromFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * Filter, which communes_drom to fetch.
     */
    where?: communes_dromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_droms to fetch.
     */
    orderBy?: communes_dromOrderByWithRelationInput | communes_dromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes_droms.
     */
    cursor?: communes_dromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_droms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_droms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes_droms.
     */
    distinct?: Communes_dromScalarFieldEnum | Communes_dromScalarFieldEnum[]
  }

  /**
   * communes_drom findMany
   */
  export type communes_dromFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * Filter, which communes_droms to fetch.
     */
    where?: communes_dromWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_droms to fetch.
     */
    orderBy?: communes_dromOrderByWithRelationInput | communes_dromOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communes_droms.
     */
    cursor?: communes_dromWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_droms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_droms.
     */
    skip?: number
    distinct?: Communes_dromScalarFieldEnum | Communes_dromScalarFieldEnum[]
  }

  /**
   * communes_drom update
   */
  export type communes_dromUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * The data needed to update a communes_drom.
     */
    data: XOR<communes_dromUpdateInput, communes_dromUncheckedUpdateInput>
    /**
     * Choose, which communes_drom to update.
     */
    where: communes_dromWhereUniqueInput
  }

  /**
   * communes_drom updateMany
   */
  export type communes_dromUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communes_droms.
     */
    data: XOR<communes_dromUpdateManyMutationInput, communes_dromUncheckedUpdateManyInput>
    /**
     * Filter which communes_droms to update
     */
    where?: communes_dromWhereInput
  }

  /**
   * communes_drom delete
   */
  export type communes_dromDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
    /**
     * Filter which communes_drom to delete.
     */
    where: communes_dromWhereUniqueInput
  }

  /**
   * communes_drom deleteMany
   */
  export type communes_dromDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes_droms to delete
     */
    where?: communes_dromWhereInput
  }

  /**
   * communes_drom without action
   */
  export type communes_dromDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_drom
     */
    select?: communes_dromSelect<ExtArgs> | null
  }


  /**
   * Model ressources_eau
   */

  export type AggregateRessources_eau = {
    _count: Ressources_eauCountAggregateOutputType | null
    _avg: Ressources_eauAvgAggregateOutputType | null
    _sum: Ressources_eauSumAggregateOutputType | null
    _min: Ressources_eauMinAggregateOutputType | null
    _max: Ressources_eauMaxAggregateOutputType | null
  }

  export type Ressources_eauAvgAggregateOutputType = {
    index: number | null
    A2020: number | null
    A2019: number | null
    A2018: number | null
    A2017: number | null
    A2016: number | null
    A2015: number | null
    A2014: number | null
    A2013: number | null
    A2012: number | null
    A2011: number | null
    A2010: number | null
    A2009: number | null
    A2008: number | null
    region: number | null
  }

  export type Ressources_eauSumAggregateOutputType = {
    index: bigint | null
    A2020: number | null
    A2019: number | null
    A2018: number | null
    A2017: number | null
    A2016: number | null
    A2015: number | null
    A2014: number | null
    A2013: number | null
    A2012: number | null
    A2011: number | null
    A2010: number | null
    A2009: number | null
    A2008: number | null
    region: number | null
  }

  export type Ressources_eauMinAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    LIBELLE_SOUS_CHAMP: string | null
    SOUS_CHAMP: string | null
    A2020: number | null
    A2019: number | null
    A2018: number | null
    A2017: number | null
    A2016: number | null
    A2015: number | null
    A2014: number | null
    A2013: number | null
    A2012: number | null
    A2011: number | null
    A2010: number | null
    A2009: number | null
    A2008: number | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type Ressources_eauMaxAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    LIBELLE_SOUS_CHAMP: string | null
    SOUS_CHAMP: string | null
    A2020: number | null
    A2019: number | null
    A2018: number | null
    A2017: number | null
    A2016: number | null
    A2015: number | null
    A2014: number | null
    A2013: number | null
    A2012: number | null
    A2011: number | null
    A2010: number | null
    A2009: number | null
    A2008: number | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type Ressources_eauCountAggregateOutputType = {
    index: number
    code_geographique: number
    LIBELLE_SOUS_CHAMP: number
    SOUS_CHAMP: number
    A2020: number
    A2019: number
    A2018: number
    A2017: number
    A2016: number
    A2015: number
    A2014: number
    A2013: number
    A2012: number
    A2011: number
    A2010: number
    A2009: number
    A2008: number
    libelle_geographique: number
    epci: number
    libelle_epci: number
    departement: number
    region: number
    _all: number
  }


  export type Ressources_eauAvgAggregateInputType = {
    index?: true
    A2020?: true
    A2019?: true
    A2018?: true
    A2017?: true
    A2016?: true
    A2015?: true
    A2014?: true
    A2013?: true
    A2012?: true
    A2011?: true
    A2010?: true
    A2009?: true
    A2008?: true
    region?: true
  }

  export type Ressources_eauSumAggregateInputType = {
    index?: true
    A2020?: true
    A2019?: true
    A2018?: true
    A2017?: true
    A2016?: true
    A2015?: true
    A2014?: true
    A2013?: true
    A2012?: true
    A2011?: true
    A2010?: true
    A2009?: true
    A2008?: true
    region?: true
  }

  export type Ressources_eauMinAggregateInputType = {
    index?: true
    code_geographique?: true
    LIBELLE_SOUS_CHAMP?: true
    SOUS_CHAMP?: true
    A2020?: true
    A2019?: true
    A2018?: true
    A2017?: true
    A2016?: true
    A2015?: true
    A2014?: true
    A2013?: true
    A2012?: true
    A2011?: true
    A2010?: true
    A2009?: true
    A2008?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type Ressources_eauMaxAggregateInputType = {
    index?: true
    code_geographique?: true
    LIBELLE_SOUS_CHAMP?: true
    SOUS_CHAMP?: true
    A2020?: true
    A2019?: true
    A2018?: true
    A2017?: true
    A2016?: true
    A2015?: true
    A2014?: true
    A2013?: true
    A2012?: true
    A2011?: true
    A2010?: true
    A2009?: true
    A2008?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type Ressources_eauCountAggregateInputType = {
    index?: true
    code_geographique?: true
    LIBELLE_SOUS_CHAMP?: true
    SOUS_CHAMP?: true
    A2020?: true
    A2019?: true
    A2018?: true
    A2017?: true
    A2016?: true
    A2015?: true
    A2014?: true
    A2013?: true
    A2012?: true
    A2011?: true
    A2010?: true
    A2009?: true
    A2008?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    _all?: true
  }

  export type Ressources_eauAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ressources_eau to aggregate.
     */
    where?: ressources_eauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources_eaus to fetch.
     */
    orderBy?: ressources_eauOrderByWithRelationInput | ressources_eauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ressources_eauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources_eaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources_eaus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ressources_eaus
    **/
    _count?: true | Ressources_eauCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ressources_eauAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ressources_eauSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ressources_eauMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ressources_eauMaxAggregateInputType
  }

  export type GetRessources_eauAggregateType<T extends Ressources_eauAggregateArgs> = {
        [P in keyof T & keyof AggregateRessources_eau]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRessources_eau[P]>
      : GetScalarType<T[P], AggregateRessources_eau[P]>
  }




  export type ressources_eauGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ressources_eauWhereInput
    orderBy?: ressources_eauOrderByWithAggregationInput | ressources_eauOrderByWithAggregationInput[]
    by: Ressources_eauScalarFieldEnum[] | Ressources_eauScalarFieldEnum
    having?: ressources_eauScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ressources_eauCountAggregateInputType | true
    _avg?: Ressources_eauAvgAggregateInputType
    _sum?: Ressources_eauSumAggregateInputType
    _min?: Ressources_eauMinAggregateInputType
    _max?: Ressources_eauMaxAggregateInputType
  }

  export type Ressources_eauGroupByOutputType = {
    index: bigint
    code_geographique: string
    LIBELLE_SOUS_CHAMP: string | null
    SOUS_CHAMP: string | null
    A2020: number | null
    A2019: number | null
    A2018: number | null
    A2017: number | null
    A2016: number | null
    A2015: number | null
    A2014: number | null
    A2013: number | null
    A2012: number | null
    A2011: number | null
    A2010: number | null
    A2009: number | null
    A2008: number | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
    _count: Ressources_eauCountAggregateOutputType | null
    _avg: Ressources_eauAvgAggregateOutputType | null
    _sum: Ressources_eauSumAggregateOutputType | null
    _min: Ressources_eauMinAggregateOutputType | null
    _max: Ressources_eauMaxAggregateOutputType | null
  }

  type GetRessources_eauGroupByPayload<T extends ressources_eauGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ressources_eauGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ressources_eauGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ressources_eauGroupByOutputType[P]>
            : GetScalarType<T[P], Ressources_eauGroupByOutputType[P]>
        }
      >
    >


  export type ressources_eauSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    LIBELLE_SOUS_CHAMP?: boolean
    SOUS_CHAMP?: boolean
    A2020?: boolean
    A2019?: boolean
    A2018?: boolean
    A2017?: boolean
    A2016?: boolean
    A2015?: boolean
    A2014?: boolean
    A2013?: boolean
    A2012?: boolean
    A2011?: boolean
    A2010?: boolean
    A2009?: boolean
    A2008?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["ressources_eau"]>

  export type ressources_eauSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    LIBELLE_SOUS_CHAMP?: boolean
    SOUS_CHAMP?: boolean
    A2020?: boolean
    A2019?: boolean
    A2018?: boolean
    A2017?: boolean
    A2016?: boolean
    A2015?: boolean
    A2014?: boolean
    A2013?: boolean
    A2012?: boolean
    A2011?: boolean
    A2010?: boolean
    A2009?: boolean
    A2008?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["ressources_eau"]>

  export type ressources_eauSelectScalar = {
    index?: boolean
    code_geographique?: boolean
    LIBELLE_SOUS_CHAMP?: boolean
    SOUS_CHAMP?: boolean
    A2020?: boolean
    A2019?: boolean
    A2018?: boolean
    A2017?: boolean
    A2016?: boolean
    A2015?: boolean
    A2014?: boolean
    A2013?: boolean
    A2012?: boolean
    A2011?: boolean
    A2010?: boolean
    A2009?: boolean
    A2008?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }


  export type $ressources_eauPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ressources_eau"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      code_geographique: string
      LIBELLE_SOUS_CHAMP: string | null
      SOUS_CHAMP: string | null
      A2020: number | null
      A2019: number | null
      A2018: number | null
      A2017: number | null
      A2016: number | null
      A2015: number | null
      A2014: number | null
      A2013: number | null
      A2012: number | null
      A2011: number | null
      A2010: number | null
      A2009: number | null
      A2008: number | null
      libelle_geographique: string | null
      epci: string | null
      libelle_epci: string | null
      departement: string | null
      region: number | null
    }, ExtArgs["result"]["ressources_eau"]>
    composites: {}
  }

  type ressources_eauGetPayload<S extends boolean | null | undefined | ressources_eauDefaultArgs> = $Result.GetResult<Prisma.$ressources_eauPayload, S>

  type ressources_eauCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ressources_eauFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Ressources_eauCountAggregateInputType | true
    }

  export interface ressources_eauDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ressources_eau'], meta: { name: 'ressources_eau' } }
    /**
     * Find zero or one Ressources_eau that matches the filter.
     * @param {ressources_eauFindUniqueArgs} args - Arguments to find a Ressources_eau
     * @example
     * // Get one Ressources_eau
     * const ressources_eau = await prisma.ressources_eau.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ressources_eauFindUniqueArgs>(args: SelectSubset<T, ressources_eauFindUniqueArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Ressources_eau that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ressources_eauFindUniqueOrThrowArgs} args - Arguments to find a Ressources_eau
     * @example
     * // Get one Ressources_eau
     * const ressources_eau = await prisma.ressources_eau.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ressources_eauFindUniqueOrThrowArgs>(args: SelectSubset<T, ressources_eauFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Ressources_eau that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressources_eauFindFirstArgs} args - Arguments to find a Ressources_eau
     * @example
     * // Get one Ressources_eau
     * const ressources_eau = await prisma.ressources_eau.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ressources_eauFindFirstArgs>(args?: SelectSubset<T, ressources_eauFindFirstArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Ressources_eau that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressources_eauFindFirstOrThrowArgs} args - Arguments to find a Ressources_eau
     * @example
     * // Get one Ressources_eau
     * const ressources_eau = await prisma.ressources_eau.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ressources_eauFindFirstOrThrowArgs>(args?: SelectSubset<T, ressources_eauFindFirstOrThrowArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Ressources_eaus that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressources_eauFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ressources_eaus
     * const ressources_eaus = await prisma.ressources_eau.findMany()
     * 
     * // Get first 10 Ressources_eaus
     * const ressources_eaus = await prisma.ressources_eau.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const ressources_eauWithIndexOnly = await prisma.ressources_eau.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends ressources_eauFindManyArgs>(args?: SelectSubset<T, ressources_eauFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Ressources_eau.
     * @param {ressources_eauCreateArgs} args - Arguments to create a Ressources_eau.
     * @example
     * // Create one Ressources_eau
     * const Ressources_eau = await prisma.ressources_eau.create({
     *   data: {
     *     // ... data to create a Ressources_eau
     *   }
     * })
     * 
     */
    create<T extends ressources_eauCreateArgs>(args: SelectSubset<T, ressources_eauCreateArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Ressources_eaus.
     * @param {ressources_eauCreateManyArgs} args - Arguments to create many Ressources_eaus.
     * @example
     * // Create many Ressources_eaus
     * const ressources_eau = await prisma.ressources_eau.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ressources_eauCreateManyArgs>(args?: SelectSubset<T, ressources_eauCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Ressources_eaus and returns the data saved in the database.
     * @param {ressources_eauCreateManyAndReturnArgs} args - Arguments to create many Ressources_eaus.
     * @example
     * // Create many Ressources_eaus
     * const ressources_eau = await prisma.ressources_eau.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Ressources_eaus and only return the `index`
     * const ressources_eauWithIndexOnly = await prisma.ressources_eau.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ressources_eauCreateManyAndReturnArgs>(args?: SelectSubset<T, ressources_eauCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Ressources_eau.
     * @param {ressources_eauDeleteArgs} args - Arguments to delete one Ressources_eau.
     * @example
     * // Delete one Ressources_eau
     * const Ressources_eau = await prisma.ressources_eau.delete({
     *   where: {
     *     // ... filter to delete one Ressources_eau
     *   }
     * })
     * 
     */
    delete<T extends ressources_eauDeleteArgs>(args: SelectSubset<T, ressources_eauDeleteArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Ressources_eau.
     * @param {ressources_eauUpdateArgs} args - Arguments to update one Ressources_eau.
     * @example
     * // Update one Ressources_eau
     * const ressources_eau = await prisma.ressources_eau.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ressources_eauUpdateArgs>(args: SelectSubset<T, ressources_eauUpdateArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Ressources_eaus.
     * @param {ressources_eauDeleteManyArgs} args - Arguments to filter Ressources_eaus to delete.
     * @example
     * // Delete a few Ressources_eaus
     * const { count } = await prisma.ressources_eau.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ressources_eauDeleteManyArgs>(args?: SelectSubset<T, ressources_eauDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ressources_eaus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressources_eauUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ressources_eaus
     * const ressources_eau = await prisma.ressources_eau.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ressources_eauUpdateManyArgs>(args: SelectSubset<T, ressources_eauUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ressources_eau.
     * @param {ressources_eauUpsertArgs} args - Arguments to update or create a Ressources_eau.
     * @example
     * // Update or create a Ressources_eau
     * const ressources_eau = await prisma.ressources_eau.upsert({
     *   create: {
     *     // ... data to create a Ressources_eau
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ressources_eau we want to update
     *   }
     * })
     */
    upsert<T extends ressources_eauUpsertArgs>(args: SelectSubset<T, ressources_eauUpsertArgs<ExtArgs>>): Prisma__ressources_eauClient<$Result.GetResult<Prisma.$ressources_eauPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Ressources_eaus.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressources_eauCountArgs} args - Arguments to filter Ressources_eaus to count.
     * @example
     * // Count the number of Ressources_eaus
     * const count = await prisma.ressources_eau.count({
     *   where: {
     *     // ... the filter for the Ressources_eaus we want to count
     *   }
     * })
    **/
    count<T extends ressources_eauCountArgs>(
      args?: Subset<T, ressources_eauCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ressources_eauCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ressources_eau.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ressources_eauAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Ressources_eauAggregateArgs>(args: Subset<T, Ressources_eauAggregateArgs>): Prisma.PrismaPromise<GetRessources_eauAggregateType<T>>

    /**
     * Group by Ressources_eau.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ressources_eauGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ressources_eauGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ressources_eauGroupByArgs['orderBy'] }
        : { orderBy?: ressources_eauGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ressources_eauGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRessources_eauGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ressources_eau model
   */
  readonly fields: ressources_eauFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ressources_eau.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ressources_eauClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ressources_eau model
   */ 
  interface ressources_eauFieldRefs {
    readonly index: FieldRef<"ressources_eau", 'BigInt'>
    readonly code_geographique: FieldRef<"ressources_eau", 'String'>
    readonly LIBELLE_SOUS_CHAMP: FieldRef<"ressources_eau", 'String'>
    readonly SOUS_CHAMP: FieldRef<"ressources_eau", 'String'>
    readonly A2020: FieldRef<"ressources_eau", 'Float'>
    readonly A2019: FieldRef<"ressources_eau", 'Float'>
    readonly A2018: FieldRef<"ressources_eau", 'Float'>
    readonly A2017: FieldRef<"ressources_eau", 'Float'>
    readonly A2016: FieldRef<"ressources_eau", 'Float'>
    readonly A2015: FieldRef<"ressources_eau", 'Float'>
    readonly A2014: FieldRef<"ressources_eau", 'Float'>
    readonly A2013: FieldRef<"ressources_eau", 'Float'>
    readonly A2012: FieldRef<"ressources_eau", 'Float'>
    readonly A2011: FieldRef<"ressources_eau", 'Float'>
    readonly A2010: FieldRef<"ressources_eau", 'Float'>
    readonly A2009: FieldRef<"ressources_eau", 'Float'>
    readonly A2008: FieldRef<"ressources_eau", 'Float'>
    readonly libelle_geographique: FieldRef<"ressources_eau", 'String'>
    readonly epci: FieldRef<"ressources_eau", 'String'>
    readonly libelle_epci: FieldRef<"ressources_eau", 'String'>
    readonly departement: FieldRef<"ressources_eau", 'String'>
    readonly region: FieldRef<"ressources_eau", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * ressources_eau findUnique
   */
  export type ressources_eauFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * Filter, which ressources_eau to fetch.
     */
    where: ressources_eauWhereUniqueInput
  }

  /**
   * ressources_eau findUniqueOrThrow
   */
  export type ressources_eauFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * Filter, which ressources_eau to fetch.
     */
    where: ressources_eauWhereUniqueInput
  }

  /**
   * ressources_eau findFirst
   */
  export type ressources_eauFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * Filter, which ressources_eau to fetch.
     */
    where?: ressources_eauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources_eaus to fetch.
     */
    orderBy?: ressources_eauOrderByWithRelationInput | ressources_eauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ressources_eaus.
     */
    cursor?: ressources_eauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources_eaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources_eaus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ressources_eaus.
     */
    distinct?: Ressources_eauScalarFieldEnum | Ressources_eauScalarFieldEnum[]
  }

  /**
   * ressources_eau findFirstOrThrow
   */
  export type ressources_eauFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * Filter, which ressources_eau to fetch.
     */
    where?: ressources_eauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources_eaus to fetch.
     */
    orderBy?: ressources_eauOrderByWithRelationInput | ressources_eauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ressources_eaus.
     */
    cursor?: ressources_eauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources_eaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources_eaus.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ressources_eaus.
     */
    distinct?: Ressources_eauScalarFieldEnum | Ressources_eauScalarFieldEnum[]
  }

  /**
   * ressources_eau findMany
   */
  export type ressources_eauFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * Filter, which ressources_eaus to fetch.
     */
    where?: ressources_eauWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ressources_eaus to fetch.
     */
    orderBy?: ressources_eauOrderByWithRelationInput | ressources_eauOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ressources_eaus.
     */
    cursor?: ressources_eauWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ressources_eaus from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ressources_eaus.
     */
    skip?: number
    distinct?: Ressources_eauScalarFieldEnum | Ressources_eauScalarFieldEnum[]
  }

  /**
   * ressources_eau create
   */
  export type ressources_eauCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * The data needed to create a ressources_eau.
     */
    data: XOR<ressources_eauCreateInput, ressources_eauUncheckedCreateInput>
  }

  /**
   * ressources_eau createMany
   */
  export type ressources_eauCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ressources_eaus.
     */
    data: ressources_eauCreateManyInput | ressources_eauCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ressources_eau createManyAndReturn
   */
  export type ressources_eauCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ressources_eaus.
     */
    data: ressources_eauCreateManyInput | ressources_eauCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ressources_eau update
   */
  export type ressources_eauUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * The data needed to update a ressources_eau.
     */
    data: XOR<ressources_eauUpdateInput, ressources_eauUncheckedUpdateInput>
    /**
     * Choose, which ressources_eau to update.
     */
    where: ressources_eauWhereUniqueInput
  }

  /**
   * ressources_eau updateMany
   */
  export type ressources_eauUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ressources_eaus.
     */
    data: XOR<ressources_eauUpdateManyMutationInput, ressources_eauUncheckedUpdateManyInput>
    /**
     * Filter which ressources_eaus to update
     */
    where?: ressources_eauWhereInput
  }

  /**
   * ressources_eau upsert
   */
  export type ressources_eauUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * The filter to search for the ressources_eau to update in case it exists.
     */
    where: ressources_eauWhereUniqueInput
    /**
     * In case the ressources_eau found by the `where` argument doesn't exist, create a new ressources_eau with this data.
     */
    create: XOR<ressources_eauCreateInput, ressources_eauUncheckedCreateInput>
    /**
     * In case the ressources_eau was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ressources_eauUpdateInput, ressources_eauUncheckedUpdateInput>
  }

  /**
   * ressources_eau delete
   */
  export type ressources_eauDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
    /**
     * Filter which ressources_eau to delete.
     */
    where: ressources_eauWhereUniqueInput
  }

  /**
   * ressources_eau deleteMany
   */
  export type ressources_eauDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ressources_eaus to delete
     */
    where?: ressources_eauWhereInput
  }

  /**
   * ressources_eau without action
   */
  export type ressources_eauDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ressources_eau
     */
    select?: ressources_eauSelect<ExtArgs> | null
  }


  /**
   * Model agriculture_bio
   */

  export type AggregateAgriculture_bio = {
    _count: Agriculture_bioCountAggregateOutputType | null
    _avg: Agriculture_bioAvgAggregateOutputType | null
    _sum: Agriculture_bioSumAggregateOutputType | null
    _min: Agriculture_bioMinAggregateOutputType | null
    _max: Agriculture_bioMaxAggregateOutputType | null
  }

  export type Agriculture_bioAvgAggregateOutputType = {
    index: number | null
    surface_2022: number | null
    surface_2021: number | null
    surface_2020: number | null
    surface_2019: number | null
    nombre_2022: number | null
    nombre_2021: number | null
    nombre_2020: number | null
    nombre_2019: number | null
  }

  export type Agriculture_bioSumAggregateOutputType = {
    index: bigint | null
    surface_2022: number | null
    surface_2021: number | null
    surface_2020: number | null
    surface_2019: number | null
    nombre_2022: number | null
    nombre_2021: number | null
    nombre_2020: number | null
    nombre_2019: number | null
  }

  export type Agriculture_bioMinAggregateOutputType = {
    index: bigint | null
    epci: string | null
    libelle_epci: string | null
    VARIABLE: string | null
    LIBELLE_SOUS_CHAMP: string | null
    surface_2022: number | null
    surface_2021: number | null
    surface_2020: number | null
    surface_2019: number | null
    nombre_2022: number | null
    nombre_2021: number | null
    nombre_2020: number | null
    nombre_2019: number | null
  }

  export type Agriculture_bioMaxAggregateOutputType = {
    index: bigint | null
    epci: string | null
    libelle_epci: string | null
    VARIABLE: string | null
    LIBELLE_SOUS_CHAMP: string | null
    surface_2022: number | null
    surface_2021: number | null
    surface_2020: number | null
    surface_2019: number | null
    nombre_2022: number | null
    nombre_2021: number | null
    nombre_2020: number | null
    nombre_2019: number | null
  }

  export type Agriculture_bioCountAggregateOutputType = {
    index: number
    epci: number
    libelle_epci: number
    VARIABLE: number
    LIBELLE_SOUS_CHAMP: number
    surface_2022: number
    surface_2021: number
    surface_2020: number
    surface_2019: number
    nombre_2022: number
    nombre_2021: number
    nombre_2020: number
    nombre_2019: number
    _all: number
  }


  export type Agriculture_bioAvgAggregateInputType = {
    index?: true
    surface_2022?: true
    surface_2021?: true
    surface_2020?: true
    surface_2019?: true
    nombre_2022?: true
    nombre_2021?: true
    nombre_2020?: true
    nombre_2019?: true
  }

  export type Agriculture_bioSumAggregateInputType = {
    index?: true
    surface_2022?: true
    surface_2021?: true
    surface_2020?: true
    surface_2019?: true
    nombre_2022?: true
    nombre_2021?: true
    nombre_2020?: true
    nombre_2019?: true
  }

  export type Agriculture_bioMinAggregateInputType = {
    index?: true
    epci?: true
    libelle_epci?: true
    VARIABLE?: true
    LIBELLE_SOUS_CHAMP?: true
    surface_2022?: true
    surface_2021?: true
    surface_2020?: true
    surface_2019?: true
    nombre_2022?: true
    nombre_2021?: true
    nombre_2020?: true
    nombre_2019?: true
  }

  export type Agriculture_bioMaxAggregateInputType = {
    index?: true
    epci?: true
    libelle_epci?: true
    VARIABLE?: true
    LIBELLE_SOUS_CHAMP?: true
    surface_2022?: true
    surface_2021?: true
    surface_2020?: true
    surface_2019?: true
    nombre_2022?: true
    nombre_2021?: true
    nombre_2020?: true
    nombre_2019?: true
  }

  export type Agriculture_bioCountAggregateInputType = {
    index?: true
    epci?: true
    libelle_epci?: true
    VARIABLE?: true
    LIBELLE_SOUS_CHAMP?: true
    surface_2022?: true
    surface_2021?: true
    surface_2020?: true
    surface_2019?: true
    nombre_2022?: true
    nombre_2021?: true
    nombre_2020?: true
    nombre_2019?: true
    _all?: true
  }

  export type Agriculture_bioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agriculture_bio to aggregate.
     */
    where?: agriculture_bioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agriculture_bios to fetch.
     */
    orderBy?: agriculture_bioOrderByWithRelationInput | agriculture_bioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: agriculture_bioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agriculture_bios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agriculture_bios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned agriculture_bios
    **/
    _count?: true | Agriculture_bioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Agriculture_bioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Agriculture_bioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Agriculture_bioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Agriculture_bioMaxAggregateInputType
  }

  export type GetAgriculture_bioAggregateType<T extends Agriculture_bioAggregateArgs> = {
        [P in keyof T & keyof AggregateAgriculture_bio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAgriculture_bio[P]>
      : GetScalarType<T[P], AggregateAgriculture_bio[P]>
  }




  export type agriculture_bioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: agriculture_bioWhereInput
    orderBy?: agriculture_bioOrderByWithAggregationInput | agriculture_bioOrderByWithAggregationInput[]
    by: Agriculture_bioScalarFieldEnum[] | Agriculture_bioScalarFieldEnum
    having?: agriculture_bioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Agriculture_bioCountAggregateInputType | true
    _avg?: Agriculture_bioAvgAggregateInputType
    _sum?: Agriculture_bioSumAggregateInputType
    _min?: Agriculture_bioMinAggregateInputType
    _max?: Agriculture_bioMaxAggregateInputType
  }

  export type Agriculture_bioGroupByOutputType = {
    index: bigint
    epci: string
    libelle_epci: string
    VARIABLE: string
    LIBELLE_SOUS_CHAMP: string | null
    surface_2022: number
    surface_2021: number
    surface_2020: number
    surface_2019: number
    nombre_2022: number
    nombre_2021: number
    nombre_2020: number
    nombre_2019: number
    _count: Agriculture_bioCountAggregateOutputType | null
    _avg: Agriculture_bioAvgAggregateOutputType | null
    _sum: Agriculture_bioSumAggregateOutputType | null
    _min: Agriculture_bioMinAggregateOutputType | null
    _max: Agriculture_bioMaxAggregateOutputType | null
  }

  type GetAgriculture_bioGroupByPayload<T extends agriculture_bioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Agriculture_bioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Agriculture_bioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Agriculture_bioGroupByOutputType[P]>
            : GetScalarType<T[P], Agriculture_bioGroupByOutputType[P]>
        }
      >
    >


  export type agriculture_bioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    epci?: boolean
    libelle_epci?: boolean
    VARIABLE?: boolean
    LIBELLE_SOUS_CHAMP?: boolean
    surface_2022?: boolean
    surface_2021?: boolean
    surface_2020?: boolean
    surface_2019?: boolean
    nombre_2022?: boolean
    nombre_2021?: boolean
    nombre_2020?: boolean
    nombre_2019?: boolean
  }, ExtArgs["result"]["agriculture_bio"]>

  export type agriculture_bioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    epci?: boolean
    libelle_epci?: boolean
    VARIABLE?: boolean
    LIBELLE_SOUS_CHAMP?: boolean
    surface_2022?: boolean
    surface_2021?: boolean
    surface_2020?: boolean
    surface_2019?: boolean
    nombre_2022?: boolean
    nombre_2021?: boolean
    nombre_2020?: boolean
    nombre_2019?: boolean
  }, ExtArgs["result"]["agriculture_bio"]>

  export type agriculture_bioSelectScalar = {
    index?: boolean
    epci?: boolean
    libelle_epci?: boolean
    VARIABLE?: boolean
    LIBELLE_SOUS_CHAMP?: boolean
    surface_2022?: boolean
    surface_2021?: boolean
    surface_2020?: boolean
    surface_2019?: boolean
    nombre_2022?: boolean
    nombre_2021?: boolean
    nombre_2020?: boolean
    nombre_2019?: boolean
  }


  export type $agriculture_bioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "agriculture_bio"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      epci: string
      libelle_epci: string
      VARIABLE: string
      LIBELLE_SOUS_CHAMP: string | null
      surface_2022: number
      surface_2021: number
      surface_2020: number
      surface_2019: number
      nombre_2022: number
      nombre_2021: number
      nombre_2020: number
      nombre_2019: number
    }, ExtArgs["result"]["agriculture_bio"]>
    composites: {}
  }

  type agriculture_bioGetPayload<S extends boolean | null | undefined | agriculture_bioDefaultArgs> = $Result.GetResult<Prisma.$agriculture_bioPayload, S>

  type agriculture_bioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<agriculture_bioFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Agriculture_bioCountAggregateInputType | true
    }

  export interface agriculture_bioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['agriculture_bio'], meta: { name: 'agriculture_bio' } }
    /**
     * Find zero or one Agriculture_bio that matches the filter.
     * @param {agriculture_bioFindUniqueArgs} args - Arguments to find a Agriculture_bio
     * @example
     * // Get one Agriculture_bio
     * const agriculture_bio = await prisma.agriculture_bio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends agriculture_bioFindUniqueArgs>(args: SelectSubset<T, agriculture_bioFindUniqueArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Agriculture_bio that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {agriculture_bioFindUniqueOrThrowArgs} args - Arguments to find a Agriculture_bio
     * @example
     * // Get one Agriculture_bio
     * const agriculture_bio = await prisma.agriculture_bio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends agriculture_bioFindUniqueOrThrowArgs>(args: SelectSubset<T, agriculture_bioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Agriculture_bio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agriculture_bioFindFirstArgs} args - Arguments to find a Agriculture_bio
     * @example
     * // Get one Agriculture_bio
     * const agriculture_bio = await prisma.agriculture_bio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends agriculture_bioFindFirstArgs>(args?: SelectSubset<T, agriculture_bioFindFirstArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Agriculture_bio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agriculture_bioFindFirstOrThrowArgs} args - Arguments to find a Agriculture_bio
     * @example
     * // Get one Agriculture_bio
     * const agriculture_bio = await prisma.agriculture_bio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends agriculture_bioFindFirstOrThrowArgs>(args?: SelectSubset<T, agriculture_bioFindFirstOrThrowArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Agriculture_bios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agriculture_bioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Agriculture_bios
     * const agriculture_bios = await prisma.agriculture_bio.findMany()
     * 
     * // Get first 10 Agriculture_bios
     * const agriculture_bios = await prisma.agriculture_bio.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const agriculture_bioWithIndexOnly = await prisma.agriculture_bio.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends agriculture_bioFindManyArgs>(args?: SelectSubset<T, agriculture_bioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Agriculture_bio.
     * @param {agriculture_bioCreateArgs} args - Arguments to create a Agriculture_bio.
     * @example
     * // Create one Agriculture_bio
     * const Agriculture_bio = await prisma.agriculture_bio.create({
     *   data: {
     *     // ... data to create a Agriculture_bio
     *   }
     * })
     * 
     */
    create<T extends agriculture_bioCreateArgs>(args: SelectSubset<T, agriculture_bioCreateArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Agriculture_bios.
     * @param {agriculture_bioCreateManyArgs} args - Arguments to create many Agriculture_bios.
     * @example
     * // Create many Agriculture_bios
     * const agriculture_bio = await prisma.agriculture_bio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends agriculture_bioCreateManyArgs>(args?: SelectSubset<T, agriculture_bioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Agriculture_bios and returns the data saved in the database.
     * @param {agriculture_bioCreateManyAndReturnArgs} args - Arguments to create many Agriculture_bios.
     * @example
     * // Create many Agriculture_bios
     * const agriculture_bio = await prisma.agriculture_bio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Agriculture_bios and only return the `index`
     * const agriculture_bioWithIndexOnly = await prisma.agriculture_bio.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends agriculture_bioCreateManyAndReturnArgs>(args?: SelectSubset<T, agriculture_bioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Agriculture_bio.
     * @param {agriculture_bioDeleteArgs} args - Arguments to delete one Agriculture_bio.
     * @example
     * // Delete one Agriculture_bio
     * const Agriculture_bio = await prisma.agriculture_bio.delete({
     *   where: {
     *     // ... filter to delete one Agriculture_bio
     *   }
     * })
     * 
     */
    delete<T extends agriculture_bioDeleteArgs>(args: SelectSubset<T, agriculture_bioDeleteArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Agriculture_bio.
     * @param {agriculture_bioUpdateArgs} args - Arguments to update one Agriculture_bio.
     * @example
     * // Update one Agriculture_bio
     * const agriculture_bio = await prisma.agriculture_bio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends agriculture_bioUpdateArgs>(args: SelectSubset<T, agriculture_bioUpdateArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Agriculture_bios.
     * @param {agriculture_bioDeleteManyArgs} args - Arguments to filter Agriculture_bios to delete.
     * @example
     * // Delete a few Agriculture_bios
     * const { count } = await prisma.agriculture_bio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends agriculture_bioDeleteManyArgs>(args?: SelectSubset<T, agriculture_bioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Agriculture_bios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agriculture_bioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Agriculture_bios
     * const agriculture_bio = await prisma.agriculture_bio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends agriculture_bioUpdateManyArgs>(args: SelectSubset<T, agriculture_bioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Agriculture_bio.
     * @param {agriculture_bioUpsertArgs} args - Arguments to update or create a Agriculture_bio.
     * @example
     * // Update or create a Agriculture_bio
     * const agriculture_bio = await prisma.agriculture_bio.upsert({
     *   create: {
     *     // ... data to create a Agriculture_bio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Agriculture_bio we want to update
     *   }
     * })
     */
    upsert<T extends agriculture_bioUpsertArgs>(args: SelectSubset<T, agriculture_bioUpsertArgs<ExtArgs>>): Prisma__agriculture_bioClient<$Result.GetResult<Prisma.$agriculture_bioPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Agriculture_bios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agriculture_bioCountArgs} args - Arguments to filter Agriculture_bios to count.
     * @example
     * // Count the number of Agriculture_bios
     * const count = await prisma.agriculture_bio.count({
     *   where: {
     *     // ... the filter for the Agriculture_bios we want to count
     *   }
     * })
    **/
    count<T extends agriculture_bioCountArgs>(
      args?: Subset<T, agriculture_bioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Agriculture_bioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Agriculture_bio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Agriculture_bioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Agriculture_bioAggregateArgs>(args: Subset<T, Agriculture_bioAggregateArgs>): Prisma.PrismaPromise<GetAgriculture_bioAggregateType<T>>

    /**
     * Group by Agriculture_bio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {agriculture_bioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends agriculture_bioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: agriculture_bioGroupByArgs['orderBy'] }
        : { orderBy?: agriculture_bioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, agriculture_bioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAgriculture_bioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the agriculture_bio model
   */
  readonly fields: agriculture_bioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for agriculture_bio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__agriculture_bioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the agriculture_bio model
   */ 
  interface agriculture_bioFieldRefs {
    readonly index: FieldRef<"agriculture_bio", 'BigInt'>
    readonly epci: FieldRef<"agriculture_bio", 'String'>
    readonly libelle_epci: FieldRef<"agriculture_bio", 'String'>
    readonly VARIABLE: FieldRef<"agriculture_bio", 'String'>
    readonly LIBELLE_SOUS_CHAMP: FieldRef<"agriculture_bio", 'String'>
    readonly surface_2022: FieldRef<"agriculture_bio", 'Float'>
    readonly surface_2021: FieldRef<"agriculture_bio", 'Float'>
    readonly surface_2020: FieldRef<"agriculture_bio", 'Float'>
    readonly surface_2019: FieldRef<"agriculture_bio", 'Float'>
    readonly nombre_2022: FieldRef<"agriculture_bio", 'Float'>
    readonly nombre_2021: FieldRef<"agriculture_bio", 'Float'>
    readonly nombre_2020: FieldRef<"agriculture_bio", 'Float'>
    readonly nombre_2019: FieldRef<"agriculture_bio", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * agriculture_bio findUnique
   */
  export type agriculture_bioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * Filter, which agriculture_bio to fetch.
     */
    where: agriculture_bioWhereUniqueInput
  }

  /**
   * agriculture_bio findUniqueOrThrow
   */
  export type agriculture_bioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * Filter, which agriculture_bio to fetch.
     */
    where: agriculture_bioWhereUniqueInput
  }

  /**
   * agriculture_bio findFirst
   */
  export type agriculture_bioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * Filter, which agriculture_bio to fetch.
     */
    where?: agriculture_bioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agriculture_bios to fetch.
     */
    orderBy?: agriculture_bioOrderByWithRelationInput | agriculture_bioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agriculture_bios.
     */
    cursor?: agriculture_bioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agriculture_bios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agriculture_bios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agriculture_bios.
     */
    distinct?: Agriculture_bioScalarFieldEnum | Agriculture_bioScalarFieldEnum[]
  }

  /**
   * agriculture_bio findFirstOrThrow
   */
  export type agriculture_bioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * Filter, which agriculture_bio to fetch.
     */
    where?: agriculture_bioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agriculture_bios to fetch.
     */
    orderBy?: agriculture_bioOrderByWithRelationInput | agriculture_bioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for agriculture_bios.
     */
    cursor?: agriculture_bioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agriculture_bios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agriculture_bios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of agriculture_bios.
     */
    distinct?: Agriculture_bioScalarFieldEnum | Agriculture_bioScalarFieldEnum[]
  }

  /**
   * agriculture_bio findMany
   */
  export type agriculture_bioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * Filter, which agriculture_bios to fetch.
     */
    where?: agriculture_bioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of agriculture_bios to fetch.
     */
    orderBy?: agriculture_bioOrderByWithRelationInput | agriculture_bioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing agriculture_bios.
     */
    cursor?: agriculture_bioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` agriculture_bios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` agriculture_bios.
     */
    skip?: number
    distinct?: Agriculture_bioScalarFieldEnum | Agriculture_bioScalarFieldEnum[]
  }

  /**
   * agriculture_bio create
   */
  export type agriculture_bioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * The data needed to create a agriculture_bio.
     */
    data: XOR<agriculture_bioCreateInput, agriculture_bioUncheckedCreateInput>
  }

  /**
   * agriculture_bio createMany
   */
  export type agriculture_bioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many agriculture_bios.
     */
    data: agriculture_bioCreateManyInput | agriculture_bioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agriculture_bio createManyAndReturn
   */
  export type agriculture_bioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many agriculture_bios.
     */
    data: agriculture_bioCreateManyInput | agriculture_bioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * agriculture_bio update
   */
  export type agriculture_bioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * The data needed to update a agriculture_bio.
     */
    data: XOR<agriculture_bioUpdateInput, agriculture_bioUncheckedUpdateInput>
    /**
     * Choose, which agriculture_bio to update.
     */
    where: agriculture_bioWhereUniqueInput
  }

  /**
   * agriculture_bio updateMany
   */
  export type agriculture_bioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update agriculture_bios.
     */
    data: XOR<agriculture_bioUpdateManyMutationInput, agriculture_bioUncheckedUpdateManyInput>
    /**
     * Filter which agriculture_bios to update
     */
    where?: agriculture_bioWhereInput
  }

  /**
   * agriculture_bio upsert
   */
  export type agriculture_bioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * The filter to search for the agriculture_bio to update in case it exists.
     */
    where: agriculture_bioWhereUniqueInput
    /**
     * In case the agriculture_bio found by the `where` argument doesn't exist, create a new agriculture_bio with this data.
     */
    create: XOR<agriculture_bioCreateInput, agriculture_bioUncheckedCreateInput>
    /**
     * In case the agriculture_bio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<agriculture_bioUpdateInput, agriculture_bioUncheckedUpdateInput>
  }

  /**
   * agriculture_bio delete
   */
  export type agriculture_bioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
    /**
     * Filter which agriculture_bio to delete.
     */
    where: agriculture_bioWhereUniqueInput
  }

  /**
   * agriculture_bio deleteMany
   */
  export type agriculture_bioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which agriculture_bios to delete
     */
    where?: agriculture_bioWhereInput
  }

  /**
   * agriculture_bio without action
   */
  export type agriculture_bioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the agriculture_bio
     */
    select?: agriculture_bioSelect<ExtArgs> | null
  }


  /**
   * Model erosion_cotiere
   */

  export type AggregateErosion_cotiere = {
    _count: Erosion_cotiereCountAggregateOutputType | null
    _avg: Erosion_cotiereAvgAggregateOutputType | null
    _sum: Erosion_cotiereSumAggregateOutputType | null
    _min: Erosion_cotiereMinAggregateOutputType | null
    _max: Erosion_cotiereMaxAggregateOutputType | null
  }

  export type Erosion_cotiereAvgAggregateOutputType = {
    pk: number | null
    taux: number | null
    duree: number | null
    tdc_ancien: number | null
    tdc_rec: number | null
  }

  export type Erosion_cotiereSumAggregateOutputType = {
    pk: number | null
    taux: number | null
    duree: number | null
    tdc_ancien: bigint | null
    tdc_rec: bigint | null
  }

  export type Erosion_cotiereMinAggregateOutputType = {
    pk: number | null
    taux: number | null
    duree: number | null
    tdc_ancien: bigint | null
    tdc_rec: bigint | null
  }

  export type Erosion_cotiereMaxAggregateOutputType = {
    pk: number | null
    taux: number | null
    duree: number | null
    tdc_ancien: bigint | null
    tdc_rec: bigint | null
  }

  export type Erosion_cotiereCountAggregateOutputType = {
    pk: number
    taux: number
    duree: number
    tdc_ancien: number
    tdc_rec: number
    _all: number
  }


  export type Erosion_cotiereAvgAggregateInputType = {
    pk?: true
    taux?: true
    duree?: true
    tdc_ancien?: true
    tdc_rec?: true
  }

  export type Erosion_cotiereSumAggregateInputType = {
    pk?: true
    taux?: true
    duree?: true
    tdc_ancien?: true
    tdc_rec?: true
  }

  export type Erosion_cotiereMinAggregateInputType = {
    pk?: true
    taux?: true
    duree?: true
    tdc_ancien?: true
    tdc_rec?: true
  }

  export type Erosion_cotiereMaxAggregateInputType = {
    pk?: true
    taux?: true
    duree?: true
    tdc_ancien?: true
    tdc_rec?: true
  }

  export type Erosion_cotiereCountAggregateInputType = {
    pk?: true
    taux?: true
    duree?: true
    tdc_ancien?: true
    tdc_rec?: true
    _all?: true
  }

  export type Erosion_cotiereAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which erosion_cotiere to aggregate.
     */
    where?: erosion_cotiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of erosion_cotieres to fetch.
     */
    orderBy?: erosion_cotiereOrderByWithRelationInput | erosion_cotiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: erosion_cotiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` erosion_cotieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` erosion_cotieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned erosion_cotieres
    **/
    _count?: true | Erosion_cotiereCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Erosion_cotiereAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Erosion_cotiereSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Erosion_cotiereMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Erosion_cotiereMaxAggregateInputType
  }

  export type GetErosion_cotiereAggregateType<T extends Erosion_cotiereAggregateArgs> = {
        [P in keyof T & keyof AggregateErosion_cotiere]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateErosion_cotiere[P]>
      : GetScalarType<T[P], AggregateErosion_cotiere[P]>
  }




  export type erosion_cotiereGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: erosion_cotiereWhereInput
    orderBy?: erosion_cotiereOrderByWithAggregationInput | erosion_cotiereOrderByWithAggregationInput[]
    by: Erosion_cotiereScalarFieldEnum[] | Erosion_cotiereScalarFieldEnum
    having?: erosion_cotiereScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Erosion_cotiereCountAggregateInputType | true
    _avg?: Erosion_cotiereAvgAggregateInputType
    _sum?: Erosion_cotiereSumAggregateInputType
    _min?: Erosion_cotiereMinAggregateInputType
    _max?: Erosion_cotiereMaxAggregateInputType
  }

  export type Erosion_cotiereGroupByOutputType = {
    pk: number
    taux: number
    duree: number
    tdc_ancien: bigint
    tdc_rec: bigint
    _count: Erosion_cotiereCountAggregateOutputType | null
    _avg: Erosion_cotiereAvgAggregateOutputType | null
    _sum: Erosion_cotiereSumAggregateOutputType | null
    _min: Erosion_cotiereMinAggregateOutputType | null
    _max: Erosion_cotiereMaxAggregateOutputType | null
  }

  type GetErosion_cotiereGroupByPayload<T extends erosion_cotiereGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Erosion_cotiereGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Erosion_cotiereGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Erosion_cotiereGroupByOutputType[P]>
            : GetScalarType<T[P], Erosion_cotiereGroupByOutputType[P]>
        }
      >
    >


  export type erosion_cotiereSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    taux?: boolean
    duree?: boolean
    tdc_ancien?: boolean
    tdc_rec?: boolean
  }, ExtArgs["result"]["erosion_cotiere"]>


  export type erosion_cotiereSelectScalar = {
    pk?: boolean
    taux?: boolean
    duree?: boolean
    tdc_ancien?: boolean
    tdc_rec?: boolean
  }


  export type $erosion_cotierePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "erosion_cotiere"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      taux: number
      duree: number
      tdc_ancien: bigint
      tdc_rec: bigint
    }, ExtArgs["result"]["erosion_cotiere"]>
    composites: {}
  }

  type erosion_cotiereGetPayload<S extends boolean | null | undefined | erosion_cotiereDefaultArgs> = $Result.GetResult<Prisma.$erosion_cotierePayload, S>

  type erosion_cotiereCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<erosion_cotiereFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Erosion_cotiereCountAggregateInputType | true
    }

  export interface erosion_cotiereDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['erosion_cotiere'], meta: { name: 'erosion_cotiere' } }
    /**
     * Find zero or one Erosion_cotiere that matches the filter.
     * @param {erosion_cotiereFindUniqueArgs} args - Arguments to find a Erosion_cotiere
     * @example
     * // Get one Erosion_cotiere
     * const erosion_cotiere = await prisma.erosion_cotiere.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends erosion_cotiereFindUniqueArgs>(args: SelectSubset<T, erosion_cotiereFindUniqueArgs<ExtArgs>>): Prisma__erosion_cotiereClient<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Erosion_cotiere that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {erosion_cotiereFindUniqueOrThrowArgs} args - Arguments to find a Erosion_cotiere
     * @example
     * // Get one Erosion_cotiere
     * const erosion_cotiere = await prisma.erosion_cotiere.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends erosion_cotiereFindUniqueOrThrowArgs>(args: SelectSubset<T, erosion_cotiereFindUniqueOrThrowArgs<ExtArgs>>): Prisma__erosion_cotiereClient<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Erosion_cotiere that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {erosion_cotiereFindFirstArgs} args - Arguments to find a Erosion_cotiere
     * @example
     * // Get one Erosion_cotiere
     * const erosion_cotiere = await prisma.erosion_cotiere.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends erosion_cotiereFindFirstArgs>(args?: SelectSubset<T, erosion_cotiereFindFirstArgs<ExtArgs>>): Prisma__erosion_cotiereClient<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Erosion_cotiere that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {erosion_cotiereFindFirstOrThrowArgs} args - Arguments to find a Erosion_cotiere
     * @example
     * // Get one Erosion_cotiere
     * const erosion_cotiere = await prisma.erosion_cotiere.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends erosion_cotiereFindFirstOrThrowArgs>(args?: SelectSubset<T, erosion_cotiereFindFirstOrThrowArgs<ExtArgs>>): Prisma__erosion_cotiereClient<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Erosion_cotieres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {erosion_cotiereFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Erosion_cotieres
     * const erosion_cotieres = await prisma.erosion_cotiere.findMany()
     * 
     * // Get first 10 Erosion_cotieres
     * const erosion_cotieres = await prisma.erosion_cotiere.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const erosion_cotiereWithPkOnly = await prisma.erosion_cotiere.findMany({ select: { pk: true } })
     * 
     */
    findMany<T extends erosion_cotiereFindManyArgs>(args?: SelectSubset<T, erosion_cotiereFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "findMany">>

    /**
     * Delete a Erosion_cotiere.
     * @param {erosion_cotiereDeleteArgs} args - Arguments to delete one Erosion_cotiere.
     * @example
     * // Delete one Erosion_cotiere
     * const Erosion_cotiere = await prisma.erosion_cotiere.delete({
     *   where: {
     *     // ... filter to delete one Erosion_cotiere
     *   }
     * })
     * 
     */
    delete<T extends erosion_cotiereDeleteArgs>(args: SelectSubset<T, erosion_cotiereDeleteArgs<ExtArgs>>): Prisma__erosion_cotiereClient<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Erosion_cotiere.
     * @param {erosion_cotiereUpdateArgs} args - Arguments to update one Erosion_cotiere.
     * @example
     * // Update one Erosion_cotiere
     * const erosion_cotiere = await prisma.erosion_cotiere.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends erosion_cotiereUpdateArgs>(args: SelectSubset<T, erosion_cotiereUpdateArgs<ExtArgs>>): Prisma__erosion_cotiereClient<$Result.GetResult<Prisma.$erosion_cotierePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Erosion_cotieres.
     * @param {erosion_cotiereDeleteManyArgs} args - Arguments to filter Erosion_cotieres to delete.
     * @example
     * // Delete a few Erosion_cotieres
     * const { count } = await prisma.erosion_cotiere.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends erosion_cotiereDeleteManyArgs>(args?: SelectSubset<T, erosion_cotiereDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Erosion_cotieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {erosion_cotiereUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Erosion_cotieres
     * const erosion_cotiere = await prisma.erosion_cotiere.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends erosion_cotiereUpdateManyArgs>(args: SelectSubset<T, erosion_cotiereUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>


    /**
     * Count the number of Erosion_cotieres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {erosion_cotiereCountArgs} args - Arguments to filter Erosion_cotieres to count.
     * @example
     * // Count the number of Erosion_cotieres
     * const count = await prisma.erosion_cotiere.count({
     *   where: {
     *     // ... the filter for the Erosion_cotieres we want to count
     *   }
     * })
    **/
    count<T extends erosion_cotiereCountArgs>(
      args?: Subset<T, erosion_cotiereCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Erosion_cotiereCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Erosion_cotiere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Erosion_cotiereAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Erosion_cotiereAggregateArgs>(args: Subset<T, Erosion_cotiereAggregateArgs>): Prisma.PrismaPromise<GetErosion_cotiereAggregateType<T>>

    /**
     * Group by Erosion_cotiere.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {erosion_cotiereGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends erosion_cotiereGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: erosion_cotiereGroupByArgs['orderBy'] }
        : { orderBy?: erosion_cotiereGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, erosion_cotiereGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetErosion_cotiereGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the erosion_cotiere model
   */
  readonly fields: erosion_cotiereFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for erosion_cotiere.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__erosion_cotiereClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the erosion_cotiere model
   */ 
  interface erosion_cotiereFieldRefs {
    readonly pk: FieldRef<"erosion_cotiere", 'Int'>
    readonly taux: FieldRef<"erosion_cotiere", 'Float'>
    readonly duree: FieldRef<"erosion_cotiere", 'Float'>
    readonly tdc_ancien: FieldRef<"erosion_cotiere", 'BigInt'>
    readonly tdc_rec: FieldRef<"erosion_cotiere", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * erosion_cotiere findUnique
   */
  export type erosion_cotiereFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * Filter, which erosion_cotiere to fetch.
     */
    where: erosion_cotiereWhereUniqueInput
  }

  /**
   * erosion_cotiere findUniqueOrThrow
   */
  export type erosion_cotiereFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * Filter, which erosion_cotiere to fetch.
     */
    where: erosion_cotiereWhereUniqueInput
  }

  /**
   * erosion_cotiere findFirst
   */
  export type erosion_cotiereFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * Filter, which erosion_cotiere to fetch.
     */
    where?: erosion_cotiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of erosion_cotieres to fetch.
     */
    orderBy?: erosion_cotiereOrderByWithRelationInput | erosion_cotiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for erosion_cotieres.
     */
    cursor?: erosion_cotiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` erosion_cotieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` erosion_cotieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of erosion_cotieres.
     */
    distinct?: Erosion_cotiereScalarFieldEnum | Erosion_cotiereScalarFieldEnum[]
  }

  /**
   * erosion_cotiere findFirstOrThrow
   */
  export type erosion_cotiereFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * Filter, which erosion_cotiere to fetch.
     */
    where?: erosion_cotiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of erosion_cotieres to fetch.
     */
    orderBy?: erosion_cotiereOrderByWithRelationInput | erosion_cotiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for erosion_cotieres.
     */
    cursor?: erosion_cotiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` erosion_cotieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` erosion_cotieres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of erosion_cotieres.
     */
    distinct?: Erosion_cotiereScalarFieldEnum | Erosion_cotiereScalarFieldEnum[]
  }

  /**
   * erosion_cotiere findMany
   */
  export type erosion_cotiereFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * Filter, which erosion_cotieres to fetch.
     */
    where?: erosion_cotiereWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of erosion_cotieres to fetch.
     */
    orderBy?: erosion_cotiereOrderByWithRelationInput | erosion_cotiereOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing erosion_cotieres.
     */
    cursor?: erosion_cotiereWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` erosion_cotieres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` erosion_cotieres.
     */
    skip?: number
    distinct?: Erosion_cotiereScalarFieldEnum | Erosion_cotiereScalarFieldEnum[]
  }

  /**
   * erosion_cotiere update
   */
  export type erosion_cotiereUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * The data needed to update a erosion_cotiere.
     */
    data: XOR<erosion_cotiereUpdateInput, erosion_cotiereUncheckedUpdateInput>
    /**
     * Choose, which erosion_cotiere to update.
     */
    where: erosion_cotiereWhereUniqueInput
  }

  /**
   * erosion_cotiere updateMany
   */
  export type erosion_cotiereUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update erosion_cotieres.
     */
    data: XOR<erosion_cotiereUpdateManyMutationInput, erosion_cotiereUncheckedUpdateManyInput>
    /**
     * Filter which erosion_cotieres to update
     */
    where?: erosion_cotiereWhereInput
  }

  /**
   * erosion_cotiere delete
   */
  export type erosion_cotiereDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
    /**
     * Filter which erosion_cotiere to delete.
     */
    where: erosion_cotiereWhereUniqueInput
  }

  /**
   * erosion_cotiere deleteMany
   */
  export type erosion_cotiereDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which erosion_cotieres to delete
     */
    where?: erosion_cotiereWhereInput
  }

  /**
   * erosion_cotiere without action
   */
  export type erosion_cotiereDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the erosion_cotiere
     */
    select?: erosion_cotiereSelect<ExtArgs> | null
  }


  /**
   * Model epci
   */

  export type AggregateEpci = {
    _count: EpciCountAggregateOutputType | null
    _avg: EpciAvgAggregateOutputType | null
    _sum: EpciSumAggregateOutputType | null
    _min: EpciMinAggregateOutputType | null
    _max: EpciMaxAggregateOutputType | null
  }

  export type EpciAvgAggregateOutputType = {
    pk: number | null
  }

  export type EpciSumAggregateOutputType = {
    pk: number | null
  }

  export type EpciMinAggregateOutputType = {
    pk: number | null
    epci_code: string | null
  }

  export type EpciMaxAggregateOutputType = {
    pk: number | null
    epci_code: string | null
  }

  export type EpciCountAggregateOutputType = {
    pk: number
    epci_code: number
    _all: number
  }


  export type EpciAvgAggregateInputType = {
    pk?: true
  }

  export type EpciSumAggregateInputType = {
    pk?: true
  }

  export type EpciMinAggregateInputType = {
    pk?: true
    epci_code?: true
  }

  export type EpciMaxAggregateInputType = {
    pk?: true
    epci_code?: true
  }

  export type EpciCountAggregateInputType = {
    pk?: true
    epci_code?: true
    _all?: true
  }

  export type EpciAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which epci to aggregate.
     */
    where?: epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epcis to fetch.
     */
    orderBy?: epciOrderByWithRelationInput | epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epcis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned epcis
    **/
    _count?: true | EpciCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EpciAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EpciSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EpciMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EpciMaxAggregateInputType
  }

  export type GetEpciAggregateType<T extends EpciAggregateArgs> = {
        [P in keyof T & keyof AggregateEpci]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEpci[P]>
      : GetScalarType<T[P], AggregateEpci[P]>
  }




  export type epciGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: epciWhereInput
    orderBy?: epciOrderByWithAggregationInput | epciOrderByWithAggregationInput[]
    by: EpciScalarFieldEnum[] | EpciScalarFieldEnum
    having?: epciScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EpciCountAggregateInputType | true
    _avg?: EpciAvgAggregateInputType
    _sum?: EpciSumAggregateInputType
    _min?: EpciMinAggregateInputType
    _max?: EpciMaxAggregateInputType
  }

  export type EpciGroupByOutputType = {
    pk: number
    epci_code: string
    _count: EpciCountAggregateOutputType | null
    _avg: EpciAvgAggregateOutputType | null
    _sum: EpciSumAggregateOutputType | null
    _min: EpciMinAggregateOutputType | null
    _max: EpciMaxAggregateOutputType | null
  }

  type GetEpciGroupByPayload<T extends epciGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EpciGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EpciGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EpciGroupByOutputType[P]>
            : GetScalarType<T[P], EpciGroupByOutputType[P]>
        }
      >
    >


  export type epciSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    epci_code?: boolean
  }, ExtArgs["result"]["epci"]>


  export type epciSelectScalar = {
    pk?: boolean
    epci_code?: boolean
  }


  export type $epciPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "epci"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      epci_code: string
    }, ExtArgs["result"]["epci"]>
    composites: {}
  }

  type epciGetPayload<S extends boolean | null | undefined | epciDefaultArgs> = $Result.GetResult<Prisma.$epciPayload, S>

  type epciCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<epciFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EpciCountAggregateInputType | true
    }

  export interface epciDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['epci'], meta: { name: 'epci' } }
    /**
     * Find zero or one Epci that matches the filter.
     * @param {epciFindUniqueArgs} args - Arguments to find a Epci
     * @example
     * // Get one Epci
     * const epci = await prisma.epci.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends epciFindUniqueArgs>(args: SelectSubset<T, epciFindUniqueArgs<ExtArgs>>): Prisma__epciClient<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Epci that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {epciFindUniqueOrThrowArgs} args - Arguments to find a Epci
     * @example
     * // Get one Epci
     * const epci = await prisma.epci.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends epciFindUniqueOrThrowArgs>(args: SelectSubset<T, epciFindUniqueOrThrowArgs<ExtArgs>>): Prisma__epciClient<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Epci that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epciFindFirstArgs} args - Arguments to find a Epci
     * @example
     * // Get one Epci
     * const epci = await prisma.epci.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends epciFindFirstArgs>(args?: SelectSubset<T, epciFindFirstArgs<ExtArgs>>): Prisma__epciClient<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Epci that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epciFindFirstOrThrowArgs} args - Arguments to find a Epci
     * @example
     * // Get one Epci
     * const epci = await prisma.epci.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends epciFindFirstOrThrowArgs>(args?: SelectSubset<T, epciFindFirstOrThrowArgs<ExtArgs>>): Prisma__epciClient<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Epcis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epciFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Epcis
     * const epcis = await prisma.epci.findMany()
     * 
     * // Get first 10 Epcis
     * const epcis = await prisma.epci.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const epciWithPkOnly = await prisma.epci.findMany({ select: { pk: true } })
     * 
     */
    findMany<T extends epciFindManyArgs>(args?: SelectSubset<T, epciFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "findMany">>

    /**
     * Delete a Epci.
     * @param {epciDeleteArgs} args - Arguments to delete one Epci.
     * @example
     * // Delete one Epci
     * const Epci = await prisma.epci.delete({
     *   where: {
     *     // ... filter to delete one Epci
     *   }
     * })
     * 
     */
    delete<T extends epciDeleteArgs>(args: SelectSubset<T, epciDeleteArgs<ExtArgs>>): Prisma__epciClient<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Epci.
     * @param {epciUpdateArgs} args - Arguments to update one Epci.
     * @example
     * // Update one Epci
     * const epci = await prisma.epci.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends epciUpdateArgs>(args: SelectSubset<T, epciUpdateArgs<ExtArgs>>): Prisma__epciClient<$Result.GetResult<Prisma.$epciPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Epcis.
     * @param {epciDeleteManyArgs} args - Arguments to filter Epcis to delete.
     * @example
     * // Delete a few Epcis
     * const { count } = await prisma.epci.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends epciDeleteManyArgs>(args?: SelectSubset<T, epciDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Epcis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epciUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Epcis
     * const epci = await prisma.epci.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends epciUpdateManyArgs>(args: SelectSubset<T, epciUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>


    /**
     * Count the number of Epcis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epciCountArgs} args - Arguments to filter Epcis to count.
     * @example
     * // Count the number of Epcis
     * const count = await prisma.epci.count({
     *   where: {
     *     // ... the filter for the Epcis we want to count
     *   }
     * })
    **/
    count<T extends epciCountArgs>(
      args?: Subset<T, epciCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EpciCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Epci.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EpciAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EpciAggregateArgs>(args: Subset<T, EpciAggregateArgs>): Prisma.PrismaPromise<GetEpciAggregateType<T>>

    /**
     * Group by Epci.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {epciGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends epciGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: epciGroupByArgs['orderBy'] }
        : { orderBy?: epciGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, epciGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEpciGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the epci model
   */
  readonly fields: epciFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for epci.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__epciClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the epci model
   */ 
  interface epciFieldRefs {
    readonly pk: FieldRef<"epci", 'Int'>
    readonly epci_code: FieldRef<"epci", 'String'>
  }
    

  // Custom InputTypes
  /**
   * epci findUnique
   */
  export type epciFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * Filter, which epci to fetch.
     */
    where: epciWhereUniqueInput
  }

  /**
   * epci findUniqueOrThrow
   */
  export type epciFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * Filter, which epci to fetch.
     */
    where: epciWhereUniqueInput
  }

  /**
   * epci findFirst
   */
  export type epciFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * Filter, which epci to fetch.
     */
    where?: epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epcis to fetch.
     */
    orderBy?: epciOrderByWithRelationInput | epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for epcis.
     */
    cursor?: epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epcis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of epcis.
     */
    distinct?: EpciScalarFieldEnum | EpciScalarFieldEnum[]
  }

  /**
   * epci findFirstOrThrow
   */
  export type epciFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * Filter, which epci to fetch.
     */
    where?: epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epcis to fetch.
     */
    orderBy?: epciOrderByWithRelationInput | epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for epcis.
     */
    cursor?: epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epcis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of epcis.
     */
    distinct?: EpciScalarFieldEnum | EpciScalarFieldEnum[]
  }

  /**
   * epci findMany
   */
  export type epciFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * Filter, which epcis to fetch.
     */
    where?: epciWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of epcis to fetch.
     */
    orderBy?: epciOrderByWithRelationInput | epciOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing epcis.
     */
    cursor?: epciWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` epcis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` epcis.
     */
    skip?: number
    distinct?: EpciScalarFieldEnum | EpciScalarFieldEnum[]
  }

  /**
   * epci update
   */
  export type epciUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * The data needed to update a epci.
     */
    data: XOR<epciUpdateInput, epciUncheckedUpdateInput>
    /**
     * Choose, which epci to update.
     */
    where: epciWhereUniqueInput
  }

  /**
   * epci updateMany
   */
  export type epciUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update epcis.
     */
    data: XOR<epciUpdateManyMutationInput, epciUncheckedUpdateManyInput>
    /**
     * Filter which epcis to update
     */
    where?: epciWhereInput
  }

  /**
   * epci delete
   */
  export type epciDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
    /**
     * Filter which epci to delete.
     */
    where: epciWhereUniqueInput
  }

  /**
   * epci deleteMany
   */
  export type epciDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which epcis to delete
     */
    where?: epciWhereInput
  }

  /**
   * epci without action
   */
  export type epciDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the epci
     */
    select?: epciSelect<ExtArgs> | null
  }


  /**
   * Model surfaces_protegees
   */

  export type AggregateSurfaces_protegees = {
    _count: Surfaces_protegeesCountAggregateOutputType | null
    _avg: Surfaces_protegeesAvgAggregateOutputType | null
    _sum: Surfaces_protegeesSumAggregateOutputType | null
    _min: Surfaces_protegeesMinAggregateOutputType | null
    _max: Surfaces_protegeesMaxAggregateOutputType | null
  }

  export type Surfaces_protegeesAvgAggregateOutputType = {
    index: number | null
    region: number | null
  }

  export type Surfaces_protegeesSumAggregateOutputType = {
    index: bigint | null
    region: number | null
  }

  export type Surfaces_protegeesMinAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    PNC: string | null
    RAMSAR: string | null
    PNR: string | null
    PNP: string | null
    FOR_PRO: string | null
    ZZZ: string | null
    ZNIEFF2: string | null
    ZNIEFF1: string | null
    RNR: string | null
    TOU_PRO: string | null
    NATURA: string | null
    ZPS: string | null
    SIC: string | null
    CELRL: string | null
    BIO: string | null
    APB: string | null
    RN: string | null
    RBFD: string | null
    RNCFS: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type Surfaces_protegeesMaxAggregateOutputType = {
    index: bigint | null
    code_geographique: string | null
    PNC: string | null
    RAMSAR: string | null
    PNR: string | null
    PNP: string | null
    FOR_PRO: string | null
    ZZZ: string | null
    ZNIEFF2: string | null
    ZNIEFF1: string | null
    RNR: string | null
    TOU_PRO: string | null
    NATURA: string | null
    ZPS: string | null
    SIC: string | null
    CELRL: string | null
    BIO: string | null
    APB: string | null
    RN: string | null
    RBFD: string | null
    RNCFS: string | null
    libelle_geographique: string | null
    epci: string | null
    libelle_epci: string | null
    departement: string | null
    region: number | null
  }

  export type Surfaces_protegeesCountAggregateOutputType = {
    index: number
    code_geographique: number
    PNC: number
    RAMSAR: number
    PNR: number
    PNP: number
    FOR_PRO: number
    ZZZ: number
    ZNIEFF2: number
    ZNIEFF1: number
    RNR: number
    TOU_PRO: number
    NATURA: number
    ZPS: number
    SIC: number
    CELRL: number
    BIO: number
    APB: number
    RN: number
    RBFD: number
    RNCFS: number
    libelle_geographique: number
    epci: number
    libelle_epci: number
    departement: number
    region: number
    _all: number
  }


  export type Surfaces_protegeesAvgAggregateInputType = {
    index?: true
    region?: true
  }

  export type Surfaces_protegeesSumAggregateInputType = {
    index?: true
    region?: true
  }

  export type Surfaces_protegeesMinAggregateInputType = {
    index?: true
    code_geographique?: true
    PNC?: true
    RAMSAR?: true
    PNR?: true
    PNP?: true
    FOR_PRO?: true
    ZZZ?: true
    ZNIEFF2?: true
    ZNIEFF1?: true
    RNR?: true
    TOU_PRO?: true
    NATURA?: true
    ZPS?: true
    SIC?: true
    CELRL?: true
    BIO?: true
    APB?: true
    RN?: true
    RBFD?: true
    RNCFS?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type Surfaces_protegeesMaxAggregateInputType = {
    index?: true
    code_geographique?: true
    PNC?: true
    RAMSAR?: true
    PNR?: true
    PNP?: true
    FOR_PRO?: true
    ZZZ?: true
    ZNIEFF2?: true
    ZNIEFF1?: true
    RNR?: true
    TOU_PRO?: true
    NATURA?: true
    ZPS?: true
    SIC?: true
    CELRL?: true
    BIO?: true
    APB?: true
    RN?: true
    RBFD?: true
    RNCFS?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
  }

  export type Surfaces_protegeesCountAggregateInputType = {
    index?: true
    code_geographique?: true
    PNC?: true
    RAMSAR?: true
    PNR?: true
    PNP?: true
    FOR_PRO?: true
    ZZZ?: true
    ZNIEFF2?: true
    ZNIEFF1?: true
    RNR?: true
    TOU_PRO?: true
    NATURA?: true
    ZPS?: true
    SIC?: true
    CELRL?: true
    BIO?: true
    APB?: true
    RN?: true
    RBFD?: true
    RNCFS?: true
    libelle_geographique?: true
    epci?: true
    libelle_epci?: true
    departement?: true
    region?: true
    _all?: true
  }

  export type Surfaces_protegeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which surfaces_protegees to aggregate.
     */
    where?: surfaces_protegeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surfaces_protegees to fetch.
     */
    orderBy?: surfaces_protegeesOrderByWithRelationInput | surfaces_protegeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: surfaces_protegeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surfaces_protegees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surfaces_protegees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned surfaces_protegees
    **/
    _count?: true | Surfaces_protegeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Surfaces_protegeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Surfaces_protegeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Surfaces_protegeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Surfaces_protegeesMaxAggregateInputType
  }

  export type GetSurfaces_protegeesAggregateType<T extends Surfaces_protegeesAggregateArgs> = {
        [P in keyof T & keyof AggregateSurfaces_protegees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurfaces_protegees[P]>
      : GetScalarType<T[P], AggregateSurfaces_protegees[P]>
  }




  export type surfaces_protegeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: surfaces_protegeesWhereInput
    orderBy?: surfaces_protegeesOrderByWithAggregationInput | surfaces_protegeesOrderByWithAggregationInput[]
    by: Surfaces_protegeesScalarFieldEnum[] | Surfaces_protegeesScalarFieldEnum
    having?: surfaces_protegeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Surfaces_protegeesCountAggregateInputType | true
    _avg?: Surfaces_protegeesAvgAggregateInputType
    _sum?: Surfaces_protegeesSumAggregateInputType
    _min?: Surfaces_protegeesMinAggregateInputType
    _max?: Surfaces_protegeesMaxAggregateInputType
  }

  export type Surfaces_protegeesGroupByOutputType = {
    index: bigint
    code_geographique: string
    PNC: string | null
    RAMSAR: string | null
    PNR: string | null
    PNP: string | null
    FOR_PRO: string | null
    ZZZ: string | null
    ZNIEFF2: string | null
    ZNIEFF1: string | null
    RNR: string | null
    TOU_PRO: string | null
    NATURA: string | null
    ZPS: string | null
    SIC: string | null
    CELRL: string | null
    BIO: string | null
    APB: string | null
    RN: string | null
    RBFD: string | null
    RNCFS: string | null
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
    _count: Surfaces_protegeesCountAggregateOutputType | null
    _avg: Surfaces_protegeesAvgAggregateOutputType | null
    _sum: Surfaces_protegeesSumAggregateOutputType | null
    _min: Surfaces_protegeesMinAggregateOutputType | null
    _max: Surfaces_protegeesMaxAggregateOutputType | null
  }

  type GetSurfaces_protegeesGroupByPayload<T extends surfaces_protegeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Surfaces_protegeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Surfaces_protegeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Surfaces_protegeesGroupByOutputType[P]>
            : GetScalarType<T[P], Surfaces_protegeesGroupByOutputType[P]>
        }
      >
    >


  export type surfaces_protegeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    PNC?: boolean
    RAMSAR?: boolean
    PNR?: boolean
    PNP?: boolean
    FOR_PRO?: boolean
    ZZZ?: boolean
    ZNIEFF2?: boolean
    ZNIEFF1?: boolean
    RNR?: boolean
    TOU_PRO?: boolean
    NATURA?: boolean
    ZPS?: boolean
    SIC?: boolean
    CELRL?: boolean
    BIO?: boolean
    APB?: boolean
    RN?: boolean
    RBFD?: boolean
    RNCFS?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["surfaces_protegees"]>

  export type surfaces_protegeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_geographique?: boolean
    PNC?: boolean
    RAMSAR?: boolean
    PNR?: boolean
    PNP?: boolean
    FOR_PRO?: boolean
    ZZZ?: boolean
    ZNIEFF2?: boolean
    ZNIEFF1?: boolean
    RNR?: boolean
    TOU_PRO?: boolean
    NATURA?: boolean
    ZPS?: boolean
    SIC?: boolean
    CELRL?: boolean
    BIO?: boolean
    APB?: boolean
    RN?: boolean
    RBFD?: boolean
    RNCFS?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }, ExtArgs["result"]["surfaces_protegees"]>

  export type surfaces_protegeesSelectScalar = {
    index?: boolean
    code_geographique?: boolean
    PNC?: boolean
    RAMSAR?: boolean
    PNR?: boolean
    PNP?: boolean
    FOR_PRO?: boolean
    ZZZ?: boolean
    ZNIEFF2?: boolean
    ZNIEFF1?: boolean
    RNR?: boolean
    TOU_PRO?: boolean
    NATURA?: boolean
    ZPS?: boolean
    SIC?: boolean
    CELRL?: boolean
    BIO?: boolean
    APB?: boolean
    RN?: boolean
    RBFD?: boolean
    RNCFS?: boolean
    libelle_geographique?: boolean
    epci?: boolean
    libelle_epci?: boolean
    departement?: boolean
    region?: boolean
  }


  export type $surfaces_protegeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "surfaces_protegees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: bigint
      code_geographique: string
      PNC: string | null
      RAMSAR: string | null
      PNR: string | null
      PNP: string | null
      FOR_PRO: string | null
      ZZZ: string | null
      ZNIEFF2: string | null
      ZNIEFF1: string | null
      RNR: string | null
      TOU_PRO: string | null
      NATURA: string | null
      ZPS: string | null
      SIC: string | null
      CELRL: string | null
      BIO: string | null
      APB: string | null
      RN: string | null
      RBFD: string | null
      RNCFS: string | null
      libelle_geographique: string
      epci: string
      libelle_epci: string
      departement: string
      region: number
    }, ExtArgs["result"]["surfaces_protegees"]>
    composites: {}
  }

  type surfaces_protegeesGetPayload<S extends boolean | null | undefined | surfaces_protegeesDefaultArgs> = $Result.GetResult<Prisma.$surfaces_protegeesPayload, S>

  type surfaces_protegeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<surfaces_protegeesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Surfaces_protegeesCountAggregateInputType | true
    }

  export interface surfaces_protegeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['surfaces_protegees'], meta: { name: 'surfaces_protegees' } }
    /**
     * Find zero or one Surfaces_protegees that matches the filter.
     * @param {surfaces_protegeesFindUniqueArgs} args - Arguments to find a Surfaces_protegees
     * @example
     * // Get one Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends surfaces_protegeesFindUniqueArgs>(args: SelectSubset<T, surfaces_protegeesFindUniqueArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Surfaces_protegees that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {surfaces_protegeesFindUniqueOrThrowArgs} args - Arguments to find a Surfaces_protegees
     * @example
     * // Get one Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends surfaces_protegeesFindUniqueOrThrowArgs>(args: SelectSubset<T, surfaces_protegeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Surfaces_protegees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surfaces_protegeesFindFirstArgs} args - Arguments to find a Surfaces_protegees
     * @example
     * // Get one Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends surfaces_protegeesFindFirstArgs>(args?: SelectSubset<T, surfaces_protegeesFindFirstArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Surfaces_protegees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surfaces_protegeesFindFirstOrThrowArgs} args - Arguments to find a Surfaces_protegees
     * @example
     * // Get one Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends surfaces_protegeesFindFirstOrThrowArgs>(args?: SelectSubset<T, surfaces_protegeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Surfaces_protegees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surfaces_protegeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.findMany()
     * 
     * // Get first 10 Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.findMany({ take: 10 })
     * 
     * // Only select the `index`
     * const surfaces_protegeesWithIndexOnly = await prisma.surfaces_protegees.findMany({ select: { index: true } })
     * 
     */
    findMany<T extends surfaces_protegeesFindManyArgs>(args?: SelectSubset<T, surfaces_protegeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Surfaces_protegees.
     * @param {surfaces_protegeesCreateArgs} args - Arguments to create a Surfaces_protegees.
     * @example
     * // Create one Surfaces_protegees
     * const Surfaces_protegees = await prisma.surfaces_protegees.create({
     *   data: {
     *     // ... data to create a Surfaces_protegees
     *   }
     * })
     * 
     */
    create<T extends surfaces_protegeesCreateArgs>(args: SelectSubset<T, surfaces_protegeesCreateArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Surfaces_protegees.
     * @param {surfaces_protegeesCreateManyArgs} args - Arguments to create many Surfaces_protegees.
     * @example
     * // Create many Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends surfaces_protegeesCreateManyArgs>(args?: SelectSubset<T, surfaces_protegeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Surfaces_protegees and returns the data saved in the database.
     * @param {surfaces_protegeesCreateManyAndReturnArgs} args - Arguments to create many Surfaces_protegees.
     * @example
     * // Create many Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Surfaces_protegees and only return the `index`
     * const surfaces_protegeesWithIndexOnly = await prisma.surfaces_protegees.createManyAndReturn({ 
     *   select: { index: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends surfaces_protegeesCreateManyAndReturnArgs>(args?: SelectSubset<T, surfaces_protegeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Surfaces_protegees.
     * @param {surfaces_protegeesDeleteArgs} args - Arguments to delete one Surfaces_protegees.
     * @example
     * // Delete one Surfaces_protegees
     * const Surfaces_protegees = await prisma.surfaces_protegees.delete({
     *   where: {
     *     // ... filter to delete one Surfaces_protegees
     *   }
     * })
     * 
     */
    delete<T extends surfaces_protegeesDeleteArgs>(args: SelectSubset<T, surfaces_protegeesDeleteArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Surfaces_protegees.
     * @param {surfaces_protegeesUpdateArgs} args - Arguments to update one Surfaces_protegees.
     * @example
     * // Update one Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends surfaces_protegeesUpdateArgs>(args: SelectSubset<T, surfaces_protegeesUpdateArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Surfaces_protegees.
     * @param {surfaces_protegeesDeleteManyArgs} args - Arguments to filter Surfaces_protegees to delete.
     * @example
     * // Delete a few Surfaces_protegees
     * const { count } = await prisma.surfaces_protegees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends surfaces_protegeesDeleteManyArgs>(args?: SelectSubset<T, surfaces_protegeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surfaces_protegees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surfaces_protegeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends surfaces_protegeesUpdateManyArgs>(args: SelectSubset<T, surfaces_protegeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Surfaces_protegees.
     * @param {surfaces_protegeesUpsertArgs} args - Arguments to update or create a Surfaces_protegees.
     * @example
     * // Update or create a Surfaces_protegees
     * const surfaces_protegees = await prisma.surfaces_protegees.upsert({
     *   create: {
     *     // ... data to create a Surfaces_protegees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Surfaces_protegees we want to update
     *   }
     * })
     */
    upsert<T extends surfaces_protegeesUpsertArgs>(args: SelectSubset<T, surfaces_protegeesUpsertArgs<ExtArgs>>): Prisma__surfaces_protegeesClient<$Result.GetResult<Prisma.$surfaces_protegeesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Surfaces_protegees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surfaces_protegeesCountArgs} args - Arguments to filter Surfaces_protegees to count.
     * @example
     * // Count the number of Surfaces_protegees
     * const count = await prisma.surfaces_protegees.count({
     *   where: {
     *     // ... the filter for the Surfaces_protegees we want to count
     *   }
     * })
    **/
    count<T extends surfaces_protegeesCountArgs>(
      args?: Subset<T, surfaces_protegeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Surfaces_protegeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Surfaces_protegees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Surfaces_protegeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Surfaces_protegeesAggregateArgs>(args: Subset<T, Surfaces_protegeesAggregateArgs>): Prisma.PrismaPromise<GetSurfaces_protegeesAggregateType<T>>

    /**
     * Group by Surfaces_protegees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surfaces_protegeesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends surfaces_protegeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: surfaces_protegeesGroupByArgs['orderBy'] }
        : { orderBy?: surfaces_protegeesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, surfaces_protegeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurfaces_protegeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the surfaces_protegees model
   */
  readonly fields: surfaces_protegeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for surfaces_protegees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__surfaces_protegeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the surfaces_protegees model
   */ 
  interface surfaces_protegeesFieldRefs {
    readonly index: FieldRef<"surfaces_protegees", 'BigInt'>
    readonly code_geographique: FieldRef<"surfaces_protegees", 'String'>
    readonly PNC: FieldRef<"surfaces_protegees", 'String'>
    readonly RAMSAR: FieldRef<"surfaces_protegees", 'String'>
    readonly PNR: FieldRef<"surfaces_protegees", 'String'>
    readonly PNP: FieldRef<"surfaces_protegees", 'String'>
    readonly FOR_PRO: FieldRef<"surfaces_protegees", 'String'>
    readonly ZZZ: FieldRef<"surfaces_protegees", 'String'>
    readonly ZNIEFF2: FieldRef<"surfaces_protegees", 'String'>
    readonly ZNIEFF1: FieldRef<"surfaces_protegees", 'String'>
    readonly RNR: FieldRef<"surfaces_protegees", 'String'>
    readonly TOU_PRO: FieldRef<"surfaces_protegees", 'String'>
    readonly NATURA: FieldRef<"surfaces_protegees", 'String'>
    readonly ZPS: FieldRef<"surfaces_protegees", 'String'>
    readonly SIC: FieldRef<"surfaces_protegees", 'String'>
    readonly CELRL: FieldRef<"surfaces_protegees", 'String'>
    readonly BIO: FieldRef<"surfaces_protegees", 'String'>
    readonly APB: FieldRef<"surfaces_protegees", 'String'>
    readonly RN: FieldRef<"surfaces_protegees", 'String'>
    readonly RBFD: FieldRef<"surfaces_protegees", 'String'>
    readonly RNCFS: FieldRef<"surfaces_protegees", 'String'>
    readonly libelle_geographique: FieldRef<"surfaces_protegees", 'String'>
    readonly epci: FieldRef<"surfaces_protegees", 'String'>
    readonly libelle_epci: FieldRef<"surfaces_protegees", 'String'>
    readonly departement: FieldRef<"surfaces_protegees", 'String'>
    readonly region: FieldRef<"surfaces_protegees", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * surfaces_protegees findUnique
   */
  export type surfaces_protegeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * Filter, which surfaces_protegees to fetch.
     */
    where: surfaces_protegeesWhereUniqueInput
  }

  /**
   * surfaces_protegees findUniqueOrThrow
   */
  export type surfaces_protegeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * Filter, which surfaces_protegees to fetch.
     */
    where: surfaces_protegeesWhereUniqueInput
  }

  /**
   * surfaces_protegees findFirst
   */
  export type surfaces_protegeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * Filter, which surfaces_protegees to fetch.
     */
    where?: surfaces_protegeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surfaces_protegees to fetch.
     */
    orderBy?: surfaces_protegeesOrderByWithRelationInput | surfaces_protegeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surfaces_protegees.
     */
    cursor?: surfaces_protegeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surfaces_protegees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surfaces_protegees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surfaces_protegees.
     */
    distinct?: Surfaces_protegeesScalarFieldEnum | Surfaces_protegeesScalarFieldEnum[]
  }

  /**
   * surfaces_protegees findFirstOrThrow
   */
  export type surfaces_protegeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * Filter, which surfaces_protegees to fetch.
     */
    where?: surfaces_protegeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surfaces_protegees to fetch.
     */
    orderBy?: surfaces_protegeesOrderByWithRelationInput | surfaces_protegeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surfaces_protegees.
     */
    cursor?: surfaces_protegeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surfaces_protegees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surfaces_protegees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surfaces_protegees.
     */
    distinct?: Surfaces_protegeesScalarFieldEnum | Surfaces_protegeesScalarFieldEnum[]
  }

  /**
   * surfaces_protegees findMany
   */
  export type surfaces_protegeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * Filter, which surfaces_protegees to fetch.
     */
    where?: surfaces_protegeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surfaces_protegees to fetch.
     */
    orderBy?: surfaces_protegeesOrderByWithRelationInput | surfaces_protegeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing surfaces_protegees.
     */
    cursor?: surfaces_protegeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surfaces_protegees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surfaces_protegees.
     */
    skip?: number
    distinct?: Surfaces_protegeesScalarFieldEnum | Surfaces_protegeesScalarFieldEnum[]
  }

  /**
   * surfaces_protegees create
   */
  export type surfaces_protegeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * The data needed to create a surfaces_protegees.
     */
    data: XOR<surfaces_protegeesCreateInput, surfaces_protegeesUncheckedCreateInput>
  }

  /**
   * surfaces_protegees createMany
   */
  export type surfaces_protegeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many surfaces_protegees.
     */
    data: surfaces_protegeesCreateManyInput | surfaces_protegeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * surfaces_protegees createManyAndReturn
   */
  export type surfaces_protegeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many surfaces_protegees.
     */
    data: surfaces_protegeesCreateManyInput | surfaces_protegeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * surfaces_protegees update
   */
  export type surfaces_protegeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * The data needed to update a surfaces_protegees.
     */
    data: XOR<surfaces_protegeesUpdateInput, surfaces_protegeesUncheckedUpdateInput>
    /**
     * Choose, which surfaces_protegees to update.
     */
    where: surfaces_protegeesWhereUniqueInput
  }

  /**
   * surfaces_protegees updateMany
   */
  export type surfaces_protegeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update surfaces_protegees.
     */
    data: XOR<surfaces_protegeesUpdateManyMutationInput, surfaces_protegeesUncheckedUpdateManyInput>
    /**
     * Filter which surfaces_protegees to update
     */
    where?: surfaces_protegeesWhereInput
  }

  /**
   * surfaces_protegees upsert
   */
  export type surfaces_protegeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * The filter to search for the surfaces_protegees to update in case it exists.
     */
    where: surfaces_protegeesWhereUniqueInput
    /**
     * In case the surfaces_protegees found by the `where` argument doesn't exist, create a new surfaces_protegees with this data.
     */
    create: XOR<surfaces_protegeesCreateInput, surfaces_protegeesUncheckedCreateInput>
    /**
     * In case the surfaces_protegees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<surfaces_protegeesUpdateInput, surfaces_protegeesUncheckedUpdateInput>
  }

  /**
   * surfaces_protegees delete
   */
  export type surfaces_protegeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
    /**
     * Filter which surfaces_protegees to delete.
     */
    where: surfaces_protegeesWhereUniqueInput
  }

  /**
   * surfaces_protegees deleteMany
   */
  export type surfaces_protegeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which surfaces_protegees to delete
     */
    where?: surfaces_protegeesWhereInput
  }

  /**
   * surfaces_protegees without action
   */
  export type surfaces_protegeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the surfaces_protegees
     */
    select?: surfaces_protegeesSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Inconfort_thermiqueScalarFieldEnum: {
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

  export type Inconfort_thermiqueScalarFieldEnum = (typeof Inconfort_thermiqueScalarFieldEnum)[keyof typeof Inconfort_thermiqueScalarFieldEnum]


  export const Clc_epciScalarFieldEnum: {
    pk: 'pk',
    legend: 'legend',
    epci_code: 'epci_code'
  };

  export type Clc_epciScalarFieldEnum = (typeof Clc_epciScalarFieldEnum)[keyof typeof Clc_epciScalarFieldEnum]


  export const CommunesScalarFieldEnum: {
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

  export type CommunesScalarFieldEnum = (typeof CommunesScalarFieldEnum)[keyof typeof CommunesScalarFieldEnum]


  export const Collectivites_searchbarScalarFieldEnum: {
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

  export type Collectivites_searchbarScalarFieldEnum = (typeof Collectivites_searchbarScalarFieldEnum)[keyof typeof Collectivites_searchbarScalarFieldEnum]


  export const BiodiversiteScalarFieldEnum: {
    index: 'index',
    code_geographique: 'code_geographique',
    type_touristique: 'type_touristique',
    libelle_geographique: 'libelle_geographique',
    epci: 'epci',
    libelle_epci: 'libelle_epci',
    departement: 'departement',
    region: 'region'
  };

  export type BiodiversiteScalarFieldEnum = (typeof BiodiversiteScalarFieldEnum)[keyof typeof BiodiversiteScalarFieldEnum]


  export const Gestion_risquesScalarFieldEnum: {
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

  export type Gestion_risquesScalarFieldEnum = (typeof Gestion_risquesScalarFieldEnum)[keyof typeof Gestion_risquesScalarFieldEnum]


  export const Communes_dromScalarFieldEnum: {
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

  export type Communes_dromScalarFieldEnum = (typeof Communes_dromScalarFieldEnum)[keyof typeof Communes_dromScalarFieldEnum]


  export const Ressources_eauScalarFieldEnum: {
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

  export type Ressources_eauScalarFieldEnum = (typeof Ressources_eauScalarFieldEnum)[keyof typeof Ressources_eauScalarFieldEnum]


  export const Agriculture_bioScalarFieldEnum: {
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

  export type Agriculture_bioScalarFieldEnum = (typeof Agriculture_bioScalarFieldEnum)[keyof typeof Agriculture_bioScalarFieldEnum]


  export const Erosion_cotiereScalarFieldEnum: {
    pk: 'pk',
    taux: 'taux',
    duree: 'duree',
    tdc_ancien: 'tdc_ancien',
    tdc_rec: 'tdc_rec'
  };

  export type Erosion_cotiereScalarFieldEnum = (typeof Erosion_cotiereScalarFieldEnum)[keyof typeof Erosion_cotiereScalarFieldEnum]


  export const EpciScalarFieldEnum: {
    pk: 'pk',
    epci_code: 'epci_code'
  };

  export type EpciScalarFieldEnum = (typeof EpciScalarFieldEnum)[keyof typeof EpciScalarFieldEnum]


  export const Surfaces_protegeesScalarFieldEnum: {
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

  export type Surfaces_protegeesScalarFieldEnum = (typeof Surfaces_protegeesScalarFieldEnum)[keyof typeof Surfaces_protegeesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type inconfort_thermiqueWhereInput = {
    AND?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    OR?: inconfort_thermiqueWhereInput[]
    NOT?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    index?: BigIntFilter<"inconfort_thermique"> | bigint | number
    code_geographique?: StringFilter<"inconfort_thermique"> | string
    libelle_geographique?: StringFilter<"inconfort_thermique"> | string
    epci?: StringFilter<"inconfort_thermique"> | string
    libelle_epci?: StringFilter<"inconfort_thermique"> | string
    departement?: StringFilter<"inconfort_thermique"> | string
    region?: IntFilter<"inconfort_thermique"> | number
    age_bati_post06?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_91_05?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_46_90?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_19_45?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_pre_19?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1968?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1968?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1968?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1975?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1975?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1975?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1982?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1982?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1982?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1990?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1990?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1990?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1999?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1999?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1999?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_2009?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_2009?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_2009?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_2014?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_2014?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_2014?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_2020?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_2020?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_2020?: FloatNullableFilter<"inconfort_thermique"> | number | null
    P20_POP80P?: FloatNullableFilter<"inconfort_thermique"> | number | null
    P20_POP80P_PSEUL?: FloatNullableFilter<"inconfort_thermique"> | number | null
    P20_POP80P_PSEUL_PERCENT?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_log?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_mob?: FloatNullableFilter<"inconfort_thermique"> | number | null
    precarite_logement?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5AZ_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5BE_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5FZ_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5GU_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5OQ_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    superf_choro?: FloatNullableFilter<"inconfort_thermique"> | number | null
    s_geom_cstr_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    hauteur?: FloatNullableFilter<"inconfort_thermique"> | number | null
    h_x_s?: FloatNullableFilter<"inconfort_thermique"> | number | null
    densite_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_2_agricole?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_3_foret_semiNaturel?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_4_humide?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_5_eau?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_1_artificialise?: FloatNullableFilter<"inconfort_thermique"> | number | null
  }

  export type inconfort_thermiqueOrderByWithRelationInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrderInput | SortOrder
    age_bati_91_05?: SortOrderInput | SortOrder
    age_bati_46_90?: SortOrderInput | SortOrder
    age_bati_19_45?: SortOrderInput | SortOrder
    age_bati_pre_19?: SortOrderInput | SortOrder
    under_4_sum_1968?: SortOrderInput | SortOrder
    to_80_sum_1968?: SortOrderInput | SortOrder
    over_80_sum_1968?: SortOrderInput | SortOrder
    under_4_sum_1975?: SortOrderInput | SortOrder
    to_80_sum_1975?: SortOrderInput | SortOrder
    over_80_sum_1975?: SortOrderInput | SortOrder
    under_4_sum_1982?: SortOrderInput | SortOrder
    to_80_sum_1982?: SortOrderInput | SortOrder
    over_80_sum_1982?: SortOrderInput | SortOrder
    under_4_sum_1990?: SortOrderInput | SortOrder
    to_80_sum_1990?: SortOrderInput | SortOrder
    over_80_sum_1990?: SortOrderInput | SortOrder
    under_4_sum_1999?: SortOrderInput | SortOrder
    to_80_sum_1999?: SortOrderInput | SortOrder
    over_80_sum_1999?: SortOrderInput | SortOrder
    under_4_sum_2009?: SortOrderInput | SortOrder
    to_80_sum_2009?: SortOrderInput | SortOrder
    over_80_sum_2009?: SortOrderInput | SortOrder
    under_4_sum_2014?: SortOrderInput | SortOrder
    to_80_sum_2014?: SortOrderInput | SortOrder
    over_80_sum_2014?: SortOrderInput | SortOrder
    under_4_sum_2020?: SortOrderInput | SortOrder
    to_80_sum_2020?: SortOrderInput | SortOrder
    over_80_sum_2020?: SortOrderInput | SortOrder
    P20_POP80P?: SortOrderInput | SortOrder
    P20_POP80P_PSEUL?: SortOrderInput | SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrderInput | SortOrder
    tee_log?: SortOrderInput | SortOrder
    tee_mob?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    NA5AZ_sum?: SortOrderInput | SortOrder
    NA5BE_sum?: SortOrderInput | SortOrder
    NA5FZ_sum?: SortOrderInput | SortOrder
    NA5GU_sum?: SortOrderInput | SortOrder
    NA5OQ_sum?: SortOrderInput | SortOrder
    superf_choro?: SortOrderInput | SortOrder
    s_geom_cstr_bati?: SortOrderInput | SortOrder
    hauteur?: SortOrderInput | SortOrder
    h_x_s?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    clc_2_agricole?: SortOrderInput | SortOrder
    clc_3_foret_semiNaturel?: SortOrderInput | SortOrder
    clc_4_humide?: SortOrderInput | SortOrder
    clc_5_eau?: SortOrderInput | SortOrder
    clc_1_artificialise?: SortOrderInput | SortOrder
  }

  export type inconfort_thermiqueWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    OR?: inconfort_thermiqueWhereInput[]
    NOT?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    code_geographique?: StringFilter<"inconfort_thermique"> | string
    libelle_geographique?: StringFilter<"inconfort_thermique"> | string
    epci?: StringFilter<"inconfort_thermique"> | string
    libelle_epci?: StringFilter<"inconfort_thermique"> | string
    departement?: StringFilter<"inconfort_thermique"> | string
    region?: IntFilter<"inconfort_thermique"> | number
    age_bati_post06?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_91_05?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_46_90?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_19_45?: FloatNullableFilter<"inconfort_thermique"> | number | null
    age_bati_pre_19?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1968?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1968?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1968?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1975?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1975?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1975?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1982?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1982?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1982?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1990?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1990?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1990?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_1999?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_1999?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_1999?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_2009?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_2009?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_2009?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_2014?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_2014?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_2014?: FloatNullableFilter<"inconfort_thermique"> | number | null
    under_4_sum_2020?: FloatNullableFilter<"inconfort_thermique"> | number | null
    to_80_sum_2020?: FloatNullableFilter<"inconfort_thermique"> | number | null
    over_80_sum_2020?: FloatNullableFilter<"inconfort_thermique"> | number | null
    P20_POP80P?: FloatNullableFilter<"inconfort_thermique"> | number | null
    P20_POP80P_PSEUL?: FloatNullableFilter<"inconfort_thermique"> | number | null
    P20_POP80P_PSEUL_PERCENT?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_log?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_mob?: FloatNullableFilter<"inconfort_thermique"> | number | null
    precarite_logement?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5AZ_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5BE_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5FZ_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5GU_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5OQ_sum?: FloatNullableFilter<"inconfort_thermique"> | number | null
    superf_choro?: FloatNullableFilter<"inconfort_thermique"> | number | null
    s_geom_cstr_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    hauteur?: FloatNullableFilter<"inconfort_thermique"> | number | null
    h_x_s?: FloatNullableFilter<"inconfort_thermique"> | number | null
    densite_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_2_agricole?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_3_foret_semiNaturel?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_4_humide?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_5_eau?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_1_artificialise?: FloatNullableFilter<"inconfort_thermique"> | number | null
  }, "index">

  export type inconfort_thermiqueOrderByWithAggregationInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrderInput | SortOrder
    age_bati_91_05?: SortOrderInput | SortOrder
    age_bati_46_90?: SortOrderInput | SortOrder
    age_bati_19_45?: SortOrderInput | SortOrder
    age_bati_pre_19?: SortOrderInput | SortOrder
    under_4_sum_1968?: SortOrderInput | SortOrder
    to_80_sum_1968?: SortOrderInput | SortOrder
    over_80_sum_1968?: SortOrderInput | SortOrder
    under_4_sum_1975?: SortOrderInput | SortOrder
    to_80_sum_1975?: SortOrderInput | SortOrder
    over_80_sum_1975?: SortOrderInput | SortOrder
    under_4_sum_1982?: SortOrderInput | SortOrder
    to_80_sum_1982?: SortOrderInput | SortOrder
    over_80_sum_1982?: SortOrderInput | SortOrder
    under_4_sum_1990?: SortOrderInput | SortOrder
    to_80_sum_1990?: SortOrderInput | SortOrder
    over_80_sum_1990?: SortOrderInput | SortOrder
    under_4_sum_1999?: SortOrderInput | SortOrder
    to_80_sum_1999?: SortOrderInput | SortOrder
    over_80_sum_1999?: SortOrderInput | SortOrder
    under_4_sum_2009?: SortOrderInput | SortOrder
    to_80_sum_2009?: SortOrderInput | SortOrder
    over_80_sum_2009?: SortOrderInput | SortOrder
    under_4_sum_2014?: SortOrderInput | SortOrder
    to_80_sum_2014?: SortOrderInput | SortOrder
    over_80_sum_2014?: SortOrderInput | SortOrder
    under_4_sum_2020?: SortOrderInput | SortOrder
    to_80_sum_2020?: SortOrderInput | SortOrder
    over_80_sum_2020?: SortOrderInput | SortOrder
    P20_POP80P?: SortOrderInput | SortOrder
    P20_POP80P_PSEUL?: SortOrderInput | SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrderInput | SortOrder
    tee_log?: SortOrderInput | SortOrder
    tee_mob?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    NA5AZ_sum?: SortOrderInput | SortOrder
    NA5BE_sum?: SortOrderInput | SortOrder
    NA5FZ_sum?: SortOrderInput | SortOrder
    NA5GU_sum?: SortOrderInput | SortOrder
    NA5OQ_sum?: SortOrderInput | SortOrder
    superf_choro?: SortOrderInput | SortOrder
    s_geom_cstr_bati?: SortOrderInput | SortOrder
    hauteur?: SortOrderInput | SortOrder
    h_x_s?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    clc_2_agricole?: SortOrderInput | SortOrder
    clc_3_foret_semiNaturel?: SortOrderInput | SortOrder
    clc_4_humide?: SortOrderInput | SortOrder
    clc_5_eau?: SortOrderInput | SortOrder
    clc_1_artificialise?: SortOrderInput | SortOrder
    _count?: inconfort_thermiqueCountOrderByAggregateInput
    _avg?: inconfort_thermiqueAvgOrderByAggregateInput
    _max?: inconfort_thermiqueMaxOrderByAggregateInput
    _min?: inconfort_thermiqueMinOrderByAggregateInput
    _sum?: inconfort_thermiqueSumOrderByAggregateInput
  }

  export type inconfort_thermiqueScalarWhereWithAggregatesInput = {
    AND?: inconfort_thermiqueScalarWhereWithAggregatesInput | inconfort_thermiqueScalarWhereWithAggregatesInput[]
    OR?: inconfort_thermiqueScalarWhereWithAggregatesInput[]
    NOT?: inconfort_thermiqueScalarWhereWithAggregatesInput | inconfort_thermiqueScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"inconfort_thermique"> | bigint | number
    code_geographique?: StringWithAggregatesFilter<"inconfort_thermique"> | string
    libelle_geographique?: StringWithAggregatesFilter<"inconfort_thermique"> | string
    epci?: StringWithAggregatesFilter<"inconfort_thermique"> | string
    libelle_epci?: StringWithAggregatesFilter<"inconfort_thermique"> | string
    departement?: StringWithAggregatesFilter<"inconfort_thermique"> | string
    region?: IntWithAggregatesFilter<"inconfort_thermique"> | number
    age_bati_post06?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    age_bati_91_05?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    age_bati_46_90?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    age_bati_19_45?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    age_bati_pre_19?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_1968?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_1968?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_1968?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_1975?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_1975?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_1975?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_1982?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_1982?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_1982?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_1990?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_1990?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_1990?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_1999?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_1999?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_1999?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_2009?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_2009?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_2009?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_2014?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_2014?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_2014?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    under_4_sum_2020?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    to_80_sum_2020?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    over_80_sum_2020?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    P20_POP80P?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    P20_POP80P_PSEUL?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    P20_POP80P_PSEUL_PERCENT?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    tee_log?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    tee_mob?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    NA5AZ_sum?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    NA5BE_sum?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    NA5FZ_sum?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    NA5GU_sum?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    NA5OQ_sum?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    superf_choro?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    s_geom_cstr_bati?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    hauteur?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    h_x_s?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    densite_bati?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_2_agricole?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_3_foret_semiNaturel?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_4_humide?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_5_eau?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_1_artificialise?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
  }

  export type clc_epciWhereInput = {
    AND?: clc_epciWhereInput | clc_epciWhereInput[]
    OR?: clc_epciWhereInput[]
    NOT?: clc_epciWhereInput | clc_epciWhereInput[]
    pk?: IntFilter<"clc_epci"> | number
    legend?: StringNullableFilter<"clc_epci"> | string | null
    epci_code?: IntNullableFilter<"clc_epci"> | number | null
  }

  export type clc_epciOrderByWithRelationInput = {
    pk?: SortOrder
    legend?: SortOrderInput | SortOrder
    epci_code?: SortOrderInput | SortOrder
  }

  export type clc_epciWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: clc_epciWhereInput | clc_epciWhereInput[]
    OR?: clc_epciWhereInput[]
    NOT?: clc_epciWhereInput | clc_epciWhereInput[]
    legend?: StringNullableFilter<"clc_epci"> | string | null
    epci_code?: IntNullableFilter<"clc_epci"> | number | null
  }, "pk">

  export type clc_epciOrderByWithAggregationInput = {
    pk?: SortOrder
    legend?: SortOrderInput | SortOrder
    epci_code?: SortOrderInput | SortOrder
    _count?: clc_epciCountOrderByAggregateInput
    _avg?: clc_epciAvgOrderByAggregateInput
    _max?: clc_epciMaxOrderByAggregateInput
    _min?: clc_epciMinOrderByAggregateInput
    _sum?: clc_epciSumOrderByAggregateInput
  }

  export type clc_epciScalarWhereWithAggregatesInput = {
    AND?: clc_epciScalarWhereWithAggregatesInput | clc_epciScalarWhereWithAggregatesInput[]
    OR?: clc_epciScalarWhereWithAggregatesInput[]
    NOT?: clc_epciScalarWhereWithAggregatesInput | clc_epciScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"clc_epci"> | number
    legend?: StringNullableWithAggregatesFilter<"clc_epci"> | string | null
    epci_code?: IntNullableWithAggregatesFilter<"clc_epci"> | number | null
  }

  export type communesWhereInput = {
    AND?: communesWhereInput | communesWhereInput[]
    OR?: communesWhereInput[]
    NOT?: communesWhereInput | communesWhereInput[]
    pk?: IntFilter<"communes"> | number
    code_commune?: StringNullableFilter<"communes"> | string | null
    libelle_commune?: StringNullableFilter<"communes"> | string | null
    epci?: StringNullableFilter<"communes"> | string | null
    libelle_epci?: StringNullableFilter<"communes"> | string | null
    libgeo?: StringNullableFilter<"communes"> | string | null
    coordinates?: StringNullableFilter<"communes"> | string | null
    densite_bati?: FloatNullableFilter<"communes"> | number | null
    precarite_logement?: FloatNullableFilter<"communes"> | number | null
  }

  export type communesOrderByWithRelationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    libgeo?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
  }

  export type communesWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: communesWhereInput | communesWhereInput[]
    OR?: communesWhereInput[]
    NOT?: communesWhereInput | communesWhereInput[]
    code_commune?: StringNullableFilter<"communes"> | string | null
    libelle_commune?: StringNullableFilter<"communes"> | string | null
    epci?: StringNullableFilter<"communes"> | string | null
    libelle_epci?: StringNullableFilter<"communes"> | string | null
    libgeo?: StringNullableFilter<"communes"> | string | null
    coordinates?: StringNullableFilter<"communes"> | string | null
    densite_bati?: FloatNullableFilter<"communes"> | number | null
    precarite_logement?: FloatNullableFilter<"communes"> | number | null
  }, "pk">

  export type communesOrderByWithAggregationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    libgeo?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    _count?: communesCountOrderByAggregateInput
    _avg?: communesAvgOrderByAggregateInput
    _max?: communesMaxOrderByAggregateInput
    _min?: communesMinOrderByAggregateInput
    _sum?: communesSumOrderByAggregateInput
  }

  export type communesScalarWhereWithAggregatesInput = {
    AND?: communesScalarWhereWithAggregatesInput | communesScalarWhereWithAggregatesInput[]
    OR?: communesScalarWhereWithAggregatesInput[]
    NOT?: communesScalarWhereWithAggregatesInput | communesScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"communes"> | number
    code_commune?: StringNullableWithAggregatesFilter<"communes"> | string | null
    libelle_commune?: StringNullableWithAggregatesFilter<"communes"> | string | null
    epci?: StringNullableWithAggregatesFilter<"communes"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"communes"> | string | null
    libgeo?: StringNullableWithAggregatesFilter<"communes"> | string | null
    coordinates?: StringNullableWithAggregatesFilter<"communes"> | string | null
    densite_bati?: FloatNullableWithAggregatesFilter<"communes"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"communes"> | number | null
  }

  export type collectivites_searchbarWhereInput = {
    AND?: collectivites_searchbarWhereInput | collectivites_searchbarWhereInput[]
    OR?: collectivites_searchbarWhereInput[]
    NOT?: collectivites_searchbarWhereInput | collectivites_searchbarWhereInput[]
    index?: BigIntFilter<"collectivites_searchbar"> | bigint | number
    code_commune?: StringNullableFilter<"collectivites_searchbar"> | string | null
    coordinates?: StringNullableFilter<"collectivites_searchbar"> | string | null
    libelle_commune?: StringNullableFilter<"collectivites_searchbar"> | string | null
    code_epci?: StringFilter<"collectivites_searchbar"> | string
    libelle_epci?: StringFilter<"collectivites_searchbar"> | string
    departement?: StringFilter<"collectivites_searchbar"> | string
    region?: StringFilter<"collectivites_searchbar"> | string
    search_code?: StringFilter<"collectivites_searchbar"> | string
    search_libelle?: StringFilter<"collectivites_searchbar"> | string
  }

  export type collectivites_searchbarOrderByWithRelationInput = {
    index?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    code_epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    search_code?: SortOrder
    search_libelle?: SortOrder
  }

  export type collectivites_searchbarWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: collectivites_searchbarWhereInput | collectivites_searchbarWhereInput[]
    OR?: collectivites_searchbarWhereInput[]
    NOT?: collectivites_searchbarWhereInput | collectivites_searchbarWhereInput[]
    code_commune?: StringNullableFilter<"collectivites_searchbar"> | string | null
    coordinates?: StringNullableFilter<"collectivites_searchbar"> | string | null
    libelle_commune?: StringNullableFilter<"collectivites_searchbar"> | string | null
    code_epci?: StringFilter<"collectivites_searchbar"> | string
    libelle_epci?: StringFilter<"collectivites_searchbar"> | string
    departement?: StringFilter<"collectivites_searchbar"> | string
    region?: StringFilter<"collectivites_searchbar"> | string
    search_code?: StringFilter<"collectivites_searchbar"> | string
    search_libelle?: StringFilter<"collectivites_searchbar"> | string
  }, "index">

  export type collectivites_searchbarOrderByWithAggregationInput = {
    index?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    code_epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    search_code?: SortOrder
    search_libelle?: SortOrder
    _count?: collectivites_searchbarCountOrderByAggregateInput
    _avg?: collectivites_searchbarAvgOrderByAggregateInput
    _max?: collectivites_searchbarMaxOrderByAggregateInput
    _min?: collectivites_searchbarMinOrderByAggregateInput
    _sum?: collectivites_searchbarSumOrderByAggregateInput
  }

  export type collectivites_searchbarScalarWhereWithAggregatesInput = {
    AND?: collectivites_searchbarScalarWhereWithAggregatesInput | collectivites_searchbarScalarWhereWithAggregatesInput[]
    OR?: collectivites_searchbarScalarWhereWithAggregatesInput[]
    NOT?: collectivites_searchbarScalarWhereWithAggregatesInput | collectivites_searchbarScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"collectivites_searchbar"> | bigint | number
    code_commune?: StringNullableWithAggregatesFilter<"collectivites_searchbar"> | string | null
    coordinates?: StringNullableWithAggregatesFilter<"collectivites_searchbar"> | string | null
    libelle_commune?: StringNullableWithAggregatesFilter<"collectivites_searchbar"> | string | null
    code_epci?: StringWithAggregatesFilter<"collectivites_searchbar"> | string
    libelle_epci?: StringWithAggregatesFilter<"collectivites_searchbar"> | string
    departement?: StringWithAggregatesFilter<"collectivites_searchbar"> | string
    region?: StringWithAggregatesFilter<"collectivites_searchbar"> | string
    search_code?: StringWithAggregatesFilter<"collectivites_searchbar"> | string
    search_libelle?: StringWithAggregatesFilter<"collectivites_searchbar"> | string
  }

  export type biodiversiteWhereInput = {
    AND?: biodiversiteWhereInput | biodiversiteWhereInput[]
    OR?: biodiversiteWhereInput[]
    NOT?: biodiversiteWhereInput | biodiversiteWhereInput[]
    index?: BigIntFilter<"biodiversite"> | bigint | number
    code_geographique?: StringNullableFilter<"biodiversite"> | string | null
    type_touristique?: StringNullableFilter<"biodiversite"> | string | null
    libelle_geographique?: StringNullableFilter<"biodiversite"> | string | null
    epci?: StringNullableFilter<"biodiversite"> | string | null
    libelle_epci?: StringNullableFilter<"biodiversite"> | string | null
    departement?: StringNullableFilter<"biodiversite"> | string | null
    region?: FloatNullableFilter<"biodiversite"> | number | null
  }

  export type biodiversiteOrderByWithRelationInput = {
    index?: SortOrder
    code_geographique?: SortOrderInput | SortOrder
    type_touristique?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
  }

  export type biodiversiteWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: biodiversiteWhereInput | biodiversiteWhereInput[]
    OR?: biodiversiteWhereInput[]
    NOT?: biodiversiteWhereInput | biodiversiteWhereInput[]
    code_geographique?: StringNullableFilter<"biodiversite"> | string | null
    type_touristique?: StringNullableFilter<"biodiversite"> | string | null
    libelle_geographique?: StringNullableFilter<"biodiversite"> | string | null
    epci?: StringNullableFilter<"biodiversite"> | string | null
    libelle_epci?: StringNullableFilter<"biodiversite"> | string | null
    departement?: StringNullableFilter<"biodiversite"> | string | null
    region?: FloatNullableFilter<"biodiversite"> | number | null
  }, "index">

  export type biodiversiteOrderByWithAggregationInput = {
    index?: SortOrder
    code_geographique?: SortOrderInput | SortOrder
    type_touristique?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    _count?: biodiversiteCountOrderByAggregateInput
    _avg?: biodiversiteAvgOrderByAggregateInput
    _max?: biodiversiteMaxOrderByAggregateInput
    _min?: biodiversiteMinOrderByAggregateInput
    _sum?: biodiversiteSumOrderByAggregateInput
  }

  export type biodiversiteScalarWhereWithAggregatesInput = {
    AND?: biodiversiteScalarWhereWithAggregatesInput | biodiversiteScalarWhereWithAggregatesInput[]
    OR?: biodiversiteScalarWhereWithAggregatesInput[]
    NOT?: biodiversiteScalarWhereWithAggregatesInput | biodiversiteScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"biodiversite"> | bigint | number
    code_geographique?: StringNullableWithAggregatesFilter<"biodiversite"> | string | null
    type_touristique?: StringNullableWithAggregatesFilter<"biodiversite"> | string | null
    libelle_geographique?: StringNullableWithAggregatesFilter<"biodiversite"> | string | null
    epci?: StringNullableWithAggregatesFilter<"biodiversite"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"biodiversite"> | string | null
    departement?: StringNullableWithAggregatesFilter<"biodiversite"> | string | null
    region?: FloatNullableWithAggregatesFilter<"biodiversite"> | number | null
  }

  export type gestion_risquesWhereInput = {
    AND?: gestion_risquesWhereInput | gestion_risquesWhereInput[]
    OR?: gestion_risquesWhereInput[]
    NOT?: gestion_risquesWhereInput | gestion_risquesWhereInput[]
    index?: BigIntFilter<"gestion_risques"> | bigint | number
    code_geographique?: StringNullableFilter<"gestion_risques"> | string | null
    lib_risque_jo?: StringNullableFilter<"gestion_risques"> | string | null
    dat_pub_arrete?: StringNullableFilter<"gestion_risques"> | string | null
    libelle_geographique?: StringNullableFilter<"gestion_risques"> | string | null
    epci?: StringNullableFilter<"gestion_risques"> | string | null
    libelle_epci?: StringNullableFilter<"gestion_risques"> | string | null
    departement?: StringNullableFilter<"gestion_risques"> | string | null
    region?: FloatNullableFilter<"gestion_risques"> | number | null
  }

  export type gestion_risquesOrderByWithRelationInput = {
    index?: SortOrder
    code_geographique?: SortOrderInput | SortOrder
    lib_risque_jo?: SortOrderInput | SortOrder
    dat_pub_arrete?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
  }

  export type gestion_risquesWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: gestion_risquesWhereInput | gestion_risquesWhereInput[]
    OR?: gestion_risquesWhereInput[]
    NOT?: gestion_risquesWhereInput | gestion_risquesWhereInput[]
    code_geographique?: StringNullableFilter<"gestion_risques"> | string | null
    lib_risque_jo?: StringNullableFilter<"gestion_risques"> | string | null
    dat_pub_arrete?: StringNullableFilter<"gestion_risques"> | string | null
    libelle_geographique?: StringNullableFilter<"gestion_risques"> | string | null
    epci?: StringNullableFilter<"gestion_risques"> | string | null
    libelle_epci?: StringNullableFilter<"gestion_risques"> | string | null
    departement?: StringNullableFilter<"gestion_risques"> | string | null
    region?: FloatNullableFilter<"gestion_risques"> | number | null
  }, "index">

  export type gestion_risquesOrderByWithAggregationInput = {
    index?: SortOrder
    code_geographique?: SortOrderInput | SortOrder
    lib_risque_jo?: SortOrderInput | SortOrder
    dat_pub_arrete?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    _count?: gestion_risquesCountOrderByAggregateInput
    _avg?: gestion_risquesAvgOrderByAggregateInput
    _max?: gestion_risquesMaxOrderByAggregateInput
    _min?: gestion_risquesMinOrderByAggregateInput
    _sum?: gestion_risquesSumOrderByAggregateInput
  }

  export type gestion_risquesScalarWhereWithAggregatesInput = {
    AND?: gestion_risquesScalarWhereWithAggregatesInput | gestion_risquesScalarWhereWithAggregatesInput[]
    OR?: gestion_risquesScalarWhereWithAggregatesInput[]
    NOT?: gestion_risquesScalarWhereWithAggregatesInput | gestion_risquesScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"gestion_risques"> | bigint | number
    code_geographique?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    lib_risque_jo?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    dat_pub_arrete?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    libelle_geographique?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    epci?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    departement?: StringNullableWithAggregatesFilter<"gestion_risques"> | string | null
    region?: FloatNullableWithAggregatesFilter<"gestion_risques"> | number | null
  }

  export type communes_dromWhereInput = {
    AND?: communes_dromWhereInput | communes_dromWhereInput[]
    OR?: communes_dromWhereInput[]
    NOT?: communes_dromWhereInput | communes_dromWhereInput[]
    pk?: IntFilter<"communes_drom"> | number
    code_commune?: StringFilter<"communes_drom"> | string
    libelle_commune?: StringFilter<"communes_drom"> | string
    epci?: StringFilter<"communes_drom"> | string
    libelle_epci?: StringFilter<"communes_drom"> | string
    coordinates?: StringFilter<"communes_drom"> | string
    densite_bati?: FloatNullableFilter<"communes_drom"> | number | null
    precarite_logement?: FloatNullableFilter<"communes_drom"> | number | null
    surface?: FloatNullableFilter<"communes_drom"> | number | null
  }

  export type communes_dromOrderByWithRelationInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
  }

  export type communes_dromWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: communes_dromWhereInput | communes_dromWhereInput[]
    OR?: communes_dromWhereInput[]
    NOT?: communes_dromWhereInput | communes_dromWhereInput[]
    code_commune?: StringFilter<"communes_drom"> | string
    libelle_commune?: StringFilter<"communes_drom"> | string
    epci?: StringFilter<"communes_drom"> | string
    libelle_epci?: StringFilter<"communes_drom"> | string
    coordinates?: StringFilter<"communes_drom"> | string
    densite_bati?: FloatNullableFilter<"communes_drom"> | number | null
    precarite_logement?: FloatNullableFilter<"communes_drom"> | number | null
    surface?: FloatNullableFilter<"communes_drom"> | number | null
  }, "pk">

  export type communes_dromOrderByWithAggregationInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    surface?: SortOrderInput | SortOrder
    _count?: communes_dromCountOrderByAggregateInput
    _avg?: communes_dromAvgOrderByAggregateInput
    _max?: communes_dromMaxOrderByAggregateInput
    _min?: communes_dromMinOrderByAggregateInput
    _sum?: communes_dromSumOrderByAggregateInput
  }

  export type communes_dromScalarWhereWithAggregatesInput = {
    AND?: communes_dromScalarWhereWithAggregatesInput | communes_dromScalarWhereWithAggregatesInput[]
    OR?: communes_dromScalarWhereWithAggregatesInput[]
    NOT?: communes_dromScalarWhereWithAggregatesInput | communes_dromScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"communes_drom"> | number
    code_commune?: StringWithAggregatesFilter<"communes_drom"> | string
    libelle_commune?: StringWithAggregatesFilter<"communes_drom"> | string
    epci?: StringWithAggregatesFilter<"communes_drom"> | string
    libelle_epci?: StringWithAggregatesFilter<"communes_drom"> | string
    coordinates?: StringWithAggregatesFilter<"communes_drom"> | string
    densite_bati?: FloatNullableWithAggregatesFilter<"communes_drom"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"communes_drom"> | number | null
    surface?: FloatNullableWithAggregatesFilter<"communes_drom"> | number | null
  }

  export type ressources_eauWhereInput = {
    AND?: ressources_eauWhereInput | ressources_eauWhereInput[]
    OR?: ressources_eauWhereInput[]
    NOT?: ressources_eauWhereInput | ressources_eauWhereInput[]
    index?: BigIntFilter<"ressources_eau"> | bigint | number
    code_geographique?: StringFilter<"ressources_eau"> | string
    LIBELLE_SOUS_CHAMP?: StringNullableFilter<"ressources_eau"> | string | null
    SOUS_CHAMP?: StringNullableFilter<"ressources_eau"> | string | null
    A2020?: FloatNullableFilter<"ressources_eau"> | number | null
    A2019?: FloatNullableFilter<"ressources_eau"> | number | null
    A2018?: FloatNullableFilter<"ressources_eau"> | number | null
    A2017?: FloatNullableFilter<"ressources_eau"> | number | null
    A2016?: FloatNullableFilter<"ressources_eau"> | number | null
    A2015?: FloatNullableFilter<"ressources_eau"> | number | null
    A2014?: FloatNullableFilter<"ressources_eau"> | number | null
    A2013?: FloatNullableFilter<"ressources_eau"> | number | null
    A2012?: FloatNullableFilter<"ressources_eau"> | number | null
    A2011?: FloatNullableFilter<"ressources_eau"> | number | null
    A2010?: FloatNullableFilter<"ressources_eau"> | number | null
    A2009?: FloatNullableFilter<"ressources_eau"> | number | null
    A2008?: FloatNullableFilter<"ressources_eau"> | number | null
    libelle_geographique?: StringNullableFilter<"ressources_eau"> | string | null
    epci?: StringNullableFilter<"ressources_eau"> | string | null
    libelle_epci?: StringNullableFilter<"ressources_eau"> | string | null
    departement?: StringNullableFilter<"ressources_eau"> | string | null
    region?: FloatNullableFilter<"ressources_eau"> | number | null
  }

  export type ressources_eauOrderByWithRelationInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrderInput | SortOrder
    SOUS_CHAMP?: SortOrderInput | SortOrder
    A2020?: SortOrderInput | SortOrder
    A2019?: SortOrderInput | SortOrder
    A2018?: SortOrderInput | SortOrder
    A2017?: SortOrderInput | SortOrder
    A2016?: SortOrderInput | SortOrder
    A2015?: SortOrderInput | SortOrder
    A2014?: SortOrderInput | SortOrder
    A2013?: SortOrderInput | SortOrder
    A2012?: SortOrderInput | SortOrder
    A2011?: SortOrderInput | SortOrder
    A2010?: SortOrderInput | SortOrder
    A2009?: SortOrderInput | SortOrder
    A2008?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
  }

  export type ressources_eauWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: ressources_eauWhereInput | ressources_eauWhereInput[]
    OR?: ressources_eauWhereInput[]
    NOT?: ressources_eauWhereInput | ressources_eauWhereInput[]
    code_geographique?: StringFilter<"ressources_eau"> | string
    LIBELLE_SOUS_CHAMP?: StringNullableFilter<"ressources_eau"> | string | null
    SOUS_CHAMP?: StringNullableFilter<"ressources_eau"> | string | null
    A2020?: FloatNullableFilter<"ressources_eau"> | number | null
    A2019?: FloatNullableFilter<"ressources_eau"> | number | null
    A2018?: FloatNullableFilter<"ressources_eau"> | number | null
    A2017?: FloatNullableFilter<"ressources_eau"> | number | null
    A2016?: FloatNullableFilter<"ressources_eau"> | number | null
    A2015?: FloatNullableFilter<"ressources_eau"> | number | null
    A2014?: FloatNullableFilter<"ressources_eau"> | number | null
    A2013?: FloatNullableFilter<"ressources_eau"> | number | null
    A2012?: FloatNullableFilter<"ressources_eau"> | number | null
    A2011?: FloatNullableFilter<"ressources_eau"> | number | null
    A2010?: FloatNullableFilter<"ressources_eau"> | number | null
    A2009?: FloatNullableFilter<"ressources_eau"> | number | null
    A2008?: FloatNullableFilter<"ressources_eau"> | number | null
    libelle_geographique?: StringNullableFilter<"ressources_eau"> | string | null
    epci?: StringNullableFilter<"ressources_eau"> | string | null
    libelle_epci?: StringNullableFilter<"ressources_eau"> | string | null
    departement?: StringNullableFilter<"ressources_eau"> | string | null
    region?: FloatNullableFilter<"ressources_eau"> | number | null
  }, "index">

  export type ressources_eauOrderByWithAggregationInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrderInput | SortOrder
    SOUS_CHAMP?: SortOrderInput | SortOrder
    A2020?: SortOrderInput | SortOrder
    A2019?: SortOrderInput | SortOrder
    A2018?: SortOrderInput | SortOrder
    A2017?: SortOrderInput | SortOrder
    A2016?: SortOrderInput | SortOrder
    A2015?: SortOrderInput | SortOrder
    A2014?: SortOrderInput | SortOrder
    A2013?: SortOrderInput | SortOrder
    A2012?: SortOrderInput | SortOrder
    A2011?: SortOrderInput | SortOrder
    A2010?: SortOrderInput | SortOrder
    A2009?: SortOrderInput | SortOrder
    A2008?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
    _count?: ressources_eauCountOrderByAggregateInput
    _avg?: ressources_eauAvgOrderByAggregateInput
    _max?: ressources_eauMaxOrderByAggregateInput
    _min?: ressources_eauMinOrderByAggregateInput
    _sum?: ressources_eauSumOrderByAggregateInput
  }

  export type ressources_eauScalarWhereWithAggregatesInput = {
    AND?: ressources_eauScalarWhereWithAggregatesInput | ressources_eauScalarWhereWithAggregatesInput[]
    OR?: ressources_eauScalarWhereWithAggregatesInput[]
    NOT?: ressources_eauScalarWhereWithAggregatesInput | ressources_eauScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"ressources_eau"> | bigint | number
    code_geographique?: StringWithAggregatesFilter<"ressources_eau"> | string
    LIBELLE_SOUS_CHAMP?: StringNullableWithAggregatesFilter<"ressources_eau"> | string | null
    SOUS_CHAMP?: StringNullableWithAggregatesFilter<"ressources_eau"> | string | null
    A2020?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2019?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2018?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2017?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2016?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2015?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2014?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2013?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2012?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2011?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2010?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2009?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    A2008?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
    libelle_geographique?: StringNullableWithAggregatesFilter<"ressources_eau"> | string | null
    epci?: StringNullableWithAggregatesFilter<"ressources_eau"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"ressources_eau"> | string | null
    departement?: StringNullableWithAggregatesFilter<"ressources_eau"> | string | null
    region?: FloatNullableWithAggregatesFilter<"ressources_eau"> | number | null
  }

  export type agriculture_bioWhereInput = {
    AND?: agriculture_bioWhereInput | agriculture_bioWhereInput[]
    OR?: agriculture_bioWhereInput[]
    NOT?: agriculture_bioWhereInput | agriculture_bioWhereInput[]
    index?: BigIntFilter<"agriculture_bio"> | bigint | number
    epci?: StringFilter<"agriculture_bio"> | string
    libelle_epci?: StringFilter<"agriculture_bio"> | string
    VARIABLE?: StringFilter<"agriculture_bio"> | string
    LIBELLE_SOUS_CHAMP?: StringNullableFilter<"agriculture_bio"> | string | null
    surface_2022?: FloatFilter<"agriculture_bio"> | number
    surface_2021?: FloatFilter<"agriculture_bio"> | number
    surface_2020?: FloatFilter<"agriculture_bio"> | number
    surface_2019?: FloatFilter<"agriculture_bio"> | number
    nombre_2022?: FloatFilter<"agriculture_bio"> | number
    nombre_2021?: FloatFilter<"agriculture_bio"> | number
    nombre_2020?: FloatFilter<"agriculture_bio"> | number
    nombre_2019?: FloatFilter<"agriculture_bio"> | number
  }

  export type agriculture_bioOrderByWithRelationInput = {
    index?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    VARIABLE?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrderInput | SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
  }

  export type agriculture_bioWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: agriculture_bioWhereInput | agriculture_bioWhereInput[]
    OR?: agriculture_bioWhereInput[]
    NOT?: agriculture_bioWhereInput | agriculture_bioWhereInput[]
    epci?: StringFilter<"agriculture_bio"> | string
    libelle_epci?: StringFilter<"agriculture_bio"> | string
    VARIABLE?: StringFilter<"agriculture_bio"> | string
    LIBELLE_SOUS_CHAMP?: StringNullableFilter<"agriculture_bio"> | string | null
    surface_2022?: FloatFilter<"agriculture_bio"> | number
    surface_2021?: FloatFilter<"agriculture_bio"> | number
    surface_2020?: FloatFilter<"agriculture_bio"> | number
    surface_2019?: FloatFilter<"agriculture_bio"> | number
    nombre_2022?: FloatFilter<"agriculture_bio"> | number
    nombre_2021?: FloatFilter<"agriculture_bio"> | number
    nombre_2020?: FloatFilter<"agriculture_bio"> | number
    nombre_2019?: FloatFilter<"agriculture_bio"> | number
  }, "index">

  export type agriculture_bioOrderByWithAggregationInput = {
    index?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    VARIABLE?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrderInput | SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
    _count?: agriculture_bioCountOrderByAggregateInput
    _avg?: agriculture_bioAvgOrderByAggregateInput
    _max?: agriculture_bioMaxOrderByAggregateInput
    _min?: agriculture_bioMinOrderByAggregateInput
    _sum?: agriculture_bioSumOrderByAggregateInput
  }

  export type agriculture_bioScalarWhereWithAggregatesInput = {
    AND?: agriculture_bioScalarWhereWithAggregatesInput | agriculture_bioScalarWhereWithAggregatesInput[]
    OR?: agriculture_bioScalarWhereWithAggregatesInput[]
    NOT?: agriculture_bioScalarWhereWithAggregatesInput | agriculture_bioScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"agriculture_bio"> | bigint | number
    epci?: StringWithAggregatesFilter<"agriculture_bio"> | string
    libelle_epci?: StringWithAggregatesFilter<"agriculture_bio"> | string
    VARIABLE?: StringWithAggregatesFilter<"agriculture_bio"> | string
    LIBELLE_SOUS_CHAMP?: StringNullableWithAggregatesFilter<"agriculture_bio"> | string | null
    surface_2022?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    surface_2021?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    surface_2020?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    surface_2019?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    nombre_2022?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    nombre_2021?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    nombre_2020?: FloatWithAggregatesFilter<"agriculture_bio"> | number
    nombre_2019?: FloatWithAggregatesFilter<"agriculture_bio"> | number
  }

  export type erosion_cotiereWhereInput = {
    AND?: erosion_cotiereWhereInput | erosion_cotiereWhereInput[]
    OR?: erosion_cotiereWhereInput[]
    NOT?: erosion_cotiereWhereInput | erosion_cotiereWhereInput[]
    pk?: IntFilter<"erosion_cotiere"> | number
    taux?: FloatFilter<"erosion_cotiere"> | number
    duree?: FloatFilter<"erosion_cotiere"> | number
    tdc_ancien?: BigIntFilter<"erosion_cotiere"> | bigint | number
    tdc_rec?: BigIntFilter<"erosion_cotiere"> | bigint | number
  }

  export type erosion_cotiereOrderByWithRelationInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
  }

  export type erosion_cotiereWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: erosion_cotiereWhereInput | erosion_cotiereWhereInput[]
    OR?: erosion_cotiereWhereInput[]
    NOT?: erosion_cotiereWhereInput | erosion_cotiereWhereInput[]
    taux?: FloatFilter<"erosion_cotiere"> | number
    duree?: FloatFilter<"erosion_cotiere"> | number
    tdc_ancien?: BigIntFilter<"erosion_cotiere"> | bigint | number
    tdc_rec?: BigIntFilter<"erosion_cotiere"> | bigint | number
  }, "pk">

  export type erosion_cotiereOrderByWithAggregationInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
    _count?: erosion_cotiereCountOrderByAggregateInput
    _avg?: erosion_cotiereAvgOrderByAggregateInput
    _max?: erosion_cotiereMaxOrderByAggregateInput
    _min?: erosion_cotiereMinOrderByAggregateInput
    _sum?: erosion_cotiereSumOrderByAggregateInput
  }

  export type erosion_cotiereScalarWhereWithAggregatesInput = {
    AND?: erosion_cotiereScalarWhereWithAggregatesInput | erosion_cotiereScalarWhereWithAggregatesInput[]
    OR?: erosion_cotiereScalarWhereWithAggregatesInput[]
    NOT?: erosion_cotiereScalarWhereWithAggregatesInput | erosion_cotiereScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"erosion_cotiere"> | number
    taux?: FloatWithAggregatesFilter<"erosion_cotiere"> | number
    duree?: FloatWithAggregatesFilter<"erosion_cotiere"> | number
    tdc_ancien?: BigIntWithAggregatesFilter<"erosion_cotiere"> | bigint | number
    tdc_rec?: BigIntWithAggregatesFilter<"erosion_cotiere"> | bigint | number
  }

  export type epciWhereInput = {
    AND?: epciWhereInput | epciWhereInput[]
    OR?: epciWhereInput[]
    NOT?: epciWhereInput | epciWhereInput[]
    pk?: IntFilter<"epci"> | number
    epci_code?: StringFilter<"epci"> | string
  }

  export type epciOrderByWithRelationInput = {
    pk?: SortOrder
    epci_code?: SortOrder
  }

  export type epciWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: epciWhereInput | epciWhereInput[]
    OR?: epciWhereInput[]
    NOT?: epciWhereInput | epciWhereInput[]
    epci_code?: StringFilter<"epci"> | string
  }, "pk">

  export type epciOrderByWithAggregationInput = {
    pk?: SortOrder
    epci_code?: SortOrder
    _count?: epciCountOrderByAggregateInput
    _avg?: epciAvgOrderByAggregateInput
    _max?: epciMaxOrderByAggregateInput
    _min?: epciMinOrderByAggregateInput
    _sum?: epciSumOrderByAggregateInput
  }

  export type epciScalarWhereWithAggregatesInput = {
    AND?: epciScalarWhereWithAggregatesInput | epciScalarWhereWithAggregatesInput[]
    OR?: epciScalarWhereWithAggregatesInput[]
    NOT?: epciScalarWhereWithAggregatesInput | epciScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"epci"> | number
    epci_code?: StringWithAggregatesFilter<"epci"> | string
  }

  export type surfaces_protegeesWhereInput = {
    AND?: surfaces_protegeesWhereInput | surfaces_protegeesWhereInput[]
    OR?: surfaces_protegeesWhereInput[]
    NOT?: surfaces_protegeesWhereInput | surfaces_protegeesWhereInput[]
    index?: BigIntFilter<"surfaces_protegees"> | bigint | number
    code_geographique?: StringFilter<"surfaces_protegees"> | string
    PNC?: StringNullableFilter<"surfaces_protegees"> | string | null
    RAMSAR?: StringNullableFilter<"surfaces_protegees"> | string | null
    PNR?: StringNullableFilter<"surfaces_protegees"> | string | null
    PNP?: StringNullableFilter<"surfaces_protegees"> | string | null
    FOR_PRO?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZZZ?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZNIEFF2?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZNIEFF1?: StringNullableFilter<"surfaces_protegees"> | string | null
    RNR?: StringNullableFilter<"surfaces_protegees"> | string | null
    TOU_PRO?: StringNullableFilter<"surfaces_protegees"> | string | null
    NATURA?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZPS?: StringNullableFilter<"surfaces_protegees"> | string | null
    SIC?: StringNullableFilter<"surfaces_protegees"> | string | null
    CELRL?: StringNullableFilter<"surfaces_protegees"> | string | null
    BIO?: StringNullableFilter<"surfaces_protegees"> | string | null
    APB?: StringNullableFilter<"surfaces_protegees"> | string | null
    RN?: StringNullableFilter<"surfaces_protegees"> | string | null
    RBFD?: StringNullableFilter<"surfaces_protegees"> | string | null
    RNCFS?: StringNullableFilter<"surfaces_protegees"> | string | null
    libelle_geographique?: StringFilter<"surfaces_protegees"> | string
    epci?: StringFilter<"surfaces_protegees"> | string
    libelle_epci?: StringFilter<"surfaces_protegees"> | string
    departement?: StringFilter<"surfaces_protegees"> | string
    region?: FloatFilter<"surfaces_protegees"> | number
  }

  export type surfaces_protegeesOrderByWithRelationInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    PNC?: SortOrderInput | SortOrder
    RAMSAR?: SortOrderInput | SortOrder
    PNR?: SortOrderInput | SortOrder
    PNP?: SortOrderInput | SortOrder
    FOR_PRO?: SortOrderInput | SortOrder
    ZZZ?: SortOrderInput | SortOrder
    ZNIEFF2?: SortOrderInput | SortOrder
    ZNIEFF1?: SortOrderInput | SortOrder
    RNR?: SortOrderInput | SortOrder
    TOU_PRO?: SortOrderInput | SortOrder
    NATURA?: SortOrderInput | SortOrder
    ZPS?: SortOrderInput | SortOrder
    SIC?: SortOrderInput | SortOrder
    CELRL?: SortOrderInput | SortOrder
    BIO?: SortOrderInput | SortOrder
    APB?: SortOrderInput | SortOrder
    RN?: SortOrderInput | SortOrder
    RBFD?: SortOrderInput | SortOrder
    RNCFS?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type surfaces_protegeesWhereUniqueInput = Prisma.AtLeast<{
    index?: bigint | number
    AND?: surfaces_protegeesWhereInput | surfaces_protegeesWhereInput[]
    OR?: surfaces_protegeesWhereInput[]
    NOT?: surfaces_protegeesWhereInput | surfaces_protegeesWhereInput[]
    code_geographique?: StringFilter<"surfaces_protegees"> | string
    PNC?: StringNullableFilter<"surfaces_protegees"> | string | null
    RAMSAR?: StringNullableFilter<"surfaces_protegees"> | string | null
    PNR?: StringNullableFilter<"surfaces_protegees"> | string | null
    PNP?: StringNullableFilter<"surfaces_protegees"> | string | null
    FOR_PRO?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZZZ?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZNIEFF2?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZNIEFF1?: StringNullableFilter<"surfaces_protegees"> | string | null
    RNR?: StringNullableFilter<"surfaces_protegees"> | string | null
    TOU_PRO?: StringNullableFilter<"surfaces_protegees"> | string | null
    NATURA?: StringNullableFilter<"surfaces_protegees"> | string | null
    ZPS?: StringNullableFilter<"surfaces_protegees"> | string | null
    SIC?: StringNullableFilter<"surfaces_protegees"> | string | null
    CELRL?: StringNullableFilter<"surfaces_protegees"> | string | null
    BIO?: StringNullableFilter<"surfaces_protegees"> | string | null
    APB?: StringNullableFilter<"surfaces_protegees"> | string | null
    RN?: StringNullableFilter<"surfaces_protegees"> | string | null
    RBFD?: StringNullableFilter<"surfaces_protegees"> | string | null
    RNCFS?: StringNullableFilter<"surfaces_protegees"> | string | null
    libelle_geographique?: StringFilter<"surfaces_protegees"> | string
    epci?: StringFilter<"surfaces_protegees"> | string
    libelle_epci?: StringFilter<"surfaces_protegees"> | string
    departement?: StringFilter<"surfaces_protegees"> | string
    region?: FloatFilter<"surfaces_protegees"> | number
  }, "index">

  export type surfaces_protegeesOrderByWithAggregationInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    PNC?: SortOrderInput | SortOrder
    RAMSAR?: SortOrderInput | SortOrder
    PNR?: SortOrderInput | SortOrder
    PNP?: SortOrderInput | SortOrder
    FOR_PRO?: SortOrderInput | SortOrder
    ZZZ?: SortOrderInput | SortOrder
    ZNIEFF2?: SortOrderInput | SortOrder
    ZNIEFF1?: SortOrderInput | SortOrder
    RNR?: SortOrderInput | SortOrder
    TOU_PRO?: SortOrderInput | SortOrder
    NATURA?: SortOrderInput | SortOrder
    ZPS?: SortOrderInput | SortOrder
    SIC?: SortOrderInput | SortOrder
    CELRL?: SortOrderInput | SortOrder
    BIO?: SortOrderInput | SortOrder
    APB?: SortOrderInput | SortOrder
    RN?: SortOrderInput | SortOrder
    RBFD?: SortOrderInput | SortOrder
    RNCFS?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    _count?: surfaces_protegeesCountOrderByAggregateInput
    _avg?: surfaces_protegeesAvgOrderByAggregateInput
    _max?: surfaces_protegeesMaxOrderByAggregateInput
    _min?: surfaces_protegeesMinOrderByAggregateInput
    _sum?: surfaces_protegeesSumOrderByAggregateInput
  }

  export type surfaces_protegeesScalarWhereWithAggregatesInput = {
    AND?: surfaces_protegeesScalarWhereWithAggregatesInput | surfaces_protegeesScalarWhereWithAggregatesInput[]
    OR?: surfaces_protegeesScalarWhereWithAggregatesInput[]
    NOT?: surfaces_protegeesScalarWhereWithAggregatesInput | surfaces_protegeesScalarWhereWithAggregatesInput[]
    index?: BigIntWithAggregatesFilter<"surfaces_protegees"> | bigint | number
    code_geographique?: StringWithAggregatesFilter<"surfaces_protegees"> | string
    PNC?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    RAMSAR?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    PNR?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    PNP?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    FOR_PRO?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    ZZZ?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    ZNIEFF2?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    ZNIEFF1?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    RNR?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    TOU_PRO?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    NATURA?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    ZPS?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    SIC?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    CELRL?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    BIO?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    APB?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    RN?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    RBFD?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    RNCFS?: StringNullableWithAggregatesFilter<"surfaces_protegees"> | string | null
    libelle_geographique?: StringWithAggregatesFilter<"surfaces_protegees"> | string
    epci?: StringWithAggregatesFilter<"surfaces_protegees"> | string
    libelle_epci?: StringWithAggregatesFilter<"surfaces_protegees"> | string
    departement?: StringWithAggregatesFilter<"surfaces_protegees"> | string
    region?: FloatWithAggregatesFilter<"surfaces_protegees"> | number
  }

  export type inconfort_thermiqueCreateInput = {
    index: bigint | number
    code_geographique: string
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
    age_bati_post06?: number | null
    age_bati_91_05?: number | null
    age_bati_46_90?: number | null
    age_bati_19_45?: number | null
    age_bati_pre_19?: number | null
    under_4_sum_1968?: number | null
    to_80_sum_1968?: number | null
    over_80_sum_1968?: number | null
    under_4_sum_1975?: number | null
    to_80_sum_1975?: number | null
    over_80_sum_1975?: number | null
    under_4_sum_1982?: number | null
    to_80_sum_1982?: number | null
    over_80_sum_1982?: number | null
    under_4_sum_1990?: number | null
    to_80_sum_1990?: number | null
    over_80_sum_1990?: number | null
    under_4_sum_1999?: number | null
    to_80_sum_1999?: number | null
    over_80_sum_1999?: number | null
    under_4_sum_2009?: number | null
    to_80_sum_2009?: number | null
    over_80_sum_2009?: number | null
    under_4_sum_2014?: number | null
    to_80_sum_2014?: number | null
    over_80_sum_2014?: number | null
    under_4_sum_2020?: number | null
    to_80_sum_2020?: number | null
    over_80_sum_2020?: number | null
    P20_POP80P?: number | null
    P20_POP80P_PSEUL?: number | null
    P20_POP80P_PSEUL_PERCENT?: number | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    NA5AZ_sum?: number | null
    NA5BE_sum?: number | null
    NA5FZ_sum?: number | null
    NA5GU_sum?: number | null
    NA5OQ_sum?: number | null
    superf_choro?: number | null
    s_geom_cstr_bati?: number | null
    hauteur?: number | null
    h_x_s?: number | null
    densite_bati?: number | null
    clc_2_agricole?: number | null
    clc_3_foret_semiNaturel?: number | null
    clc_4_humide?: number | null
    clc_5_eau?: number | null
    clc_1_artificialise?: number | null
  }

  export type inconfort_thermiqueUncheckedCreateInput = {
    index: bigint | number
    code_geographique: string
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
    age_bati_post06?: number | null
    age_bati_91_05?: number | null
    age_bati_46_90?: number | null
    age_bati_19_45?: number | null
    age_bati_pre_19?: number | null
    under_4_sum_1968?: number | null
    to_80_sum_1968?: number | null
    over_80_sum_1968?: number | null
    under_4_sum_1975?: number | null
    to_80_sum_1975?: number | null
    over_80_sum_1975?: number | null
    under_4_sum_1982?: number | null
    to_80_sum_1982?: number | null
    over_80_sum_1982?: number | null
    under_4_sum_1990?: number | null
    to_80_sum_1990?: number | null
    over_80_sum_1990?: number | null
    under_4_sum_1999?: number | null
    to_80_sum_1999?: number | null
    over_80_sum_1999?: number | null
    under_4_sum_2009?: number | null
    to_80_sum_2009?: number | null
    over_80_sum_2009?: number | null
    under_4_sum_2014?: number | null
    to_80_sum_2014?: number | null
    over_80_sum_2014?: number | null
    under_4_sum_2020?: number | null
    to_80_sum_2020?: number | null
    over_80_sum_2020?: number | null
    P20_POP80P?: number | null
    P20_POP80P_PSEUL?: number | null
    P20_POP80P_PSEUL_PERCENT?: number | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    NA5AZ_sum?: number | null
    NA5BE_sum?: number | null
    NA5FZ_sum?: number | null
    NA5GU_sum?: number | null
    NA5OQ_sum?: number | null
    superf_choro?: number | null
    s_geom_cstr_bati?: number | null
    hauteur?: number | null
    h_x_s?: number | null
    densite_bati?: number | null
    clc_2_agricole?: number | null
    clc_3_foret_semiNaturel?: number | null
    clc_4_humide?: number | null
    clc_5_eau?: number | null
    clc_1_artificialise?: number | null
  }

  export type inconfort_thermiqueUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: IntFieldUpdateOperationsInput | number
    age_bati_post06?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_91_05?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_46_90?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_19_45?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_pre_19?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL_PERCENT?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5BE_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5FZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5GU_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5OQ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    superf_choro?: NullableFloatFieldUpdateOperationsInput | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    h_x_s?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inconfort_thermiqueUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: IntFieldUpdateOperationsInput | number
    age_bati_post06?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_91_05?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_46_90?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_19_45?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_pre_19?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL_PERCENT?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5BE_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5FZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5GU_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5OQ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    superf_choro?: NullableFloatFieldUpdateOperationsInput | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    h_x_s?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inconfort_thermiqueCreateManyInput = {
    index: bigint | number
    code_geographique: string
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
    age_bati_post06?: number | null
    age_bati_91_05?: number | null
    age_bati_46_90?: number | null
    age_bati_19_45?: number | null
    age_bati_pre_19?: number | null
    under_4_sum_1968?: number | null
    to_80_sum_1968?: number | null
    over_80_sum_1968?: number | null
    under_4_sum_1975?: number | null
    to_80_sum_1975?: number | null
    over_80_sum_1975?: number | null
    under_4_sum_1982?: number | null
    to_80_sum_1982?: number | null
    over_80_sum_1982?: number | null
    under_4_sum_1990?: number | null
    to_80_sum_1990?: number | null
    over_80_sum_1990?: number | null
    under_4_sum_1999?: number | null
    to_80_sum_1999?: number | null
    over_80_sum_1999?: number | null
    under_4_sum_2009?: number | null
    to_80_sum_2009?: number | null
    over_80_sum_2009?: number | null
    under_4_sum_2014?: number | null
    to_80_sum_2014?: number | null
    over_80_sum_2014?: number | null
    under_4_sum_2020?: number | null
    to_80_sum_2020?: number | null
    over_80_sum_2020?: number | null
    P20_POP80P?: number | null
    P20_POP80P_PSEUL?: number | null
    P20_POP80P_PSEUL_PERCENT?: number | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    NA5AZ_sum?: number | null
    NA5BE_sum?: number | null
    NA5FZ_sum?: number | null
    NA5GU_sum?: number | null
    NA5OQ_sum?: number | null
    superf_choro?: number | null
    s_geom_cstr_bati?: number | null
    hauteur?: number | null
    h_x_s?: number | null
    densite_bati?: number | null
    clc_2_agricole?: number | null
    clc_3_foret_semiNaturel?: number | null
    clc_4_humide?: number | null
    clc_5_eau?: number | null
    clc_1_artificialise?: number | null
  }

  export type inconfort_thermiqueUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: IntFieldUpdateOperationsInput | number
    age_bati_post06?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_91_05?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_46_90?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_19_45?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_pre_19?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL_PERCENT?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5BE_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5FZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5GU_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5OQ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    superf_choro?: NullableFloatFieldUpdateOperationsInput | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    h_x_s?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inconfort_thermiqueUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: IntFieldUpdateOperationsInput | number
    age_bati_post06?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_91_05?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_46_90?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_19_45?: NullableFloatFieldUpdateOperationsInput | number | null
    age_bati_pre_19?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1968?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1975?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1982?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1990?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_1999?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2009?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2014?: NullableFloatFieldUpdateOperationsInput | number | null
    under_4_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    to_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    over_80_sum_2020?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL?: NullableFloatFieldUpdateOperationsInput | number | null
    P20_POP80P_PSEUL_PERCENT?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5BE_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5FZ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5GU_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5OQ_sum?: NullableFloatFieldUpdateOperationsInput | number | null
    superf_choro?: NullableFloatFieldUpdateOperationsInput | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    hauteur?: NullableFloatFieldUpdateOperationsInput | number | null
    h_x_s?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type clc_epciCreateInput = {
    legend?: string | null
    epci_code?: number | null
  }

  export type clc_epciUncheckedCreateInput = {
    pk?: number
    legend?: string | null
    epci_code?: number | null
  }

  export type clc_epciUpdateInput = {
    legend?: NullableStringFieldUpdateOperationsInput | string | null
    epci_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clc_epciUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    legend?: NullableStringFieldUpdateOperationsInput | string | null
    epci_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clc_epciCreateManyInput = {
    pk?: number
    legend?: string | null
    epci_code?: number | null
  }

  export type clc_epciUpdateManyMutationInput = {
    legend?: NullableStringFieldUpdateOperationsInput | string | null
    epci_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type clc_epciUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    legend?: NullableStringFieldUpdateOperationsInput | string | null
    epci_code?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type communesCreateInput = {
    code_commune?: string | null
    libelle_commune?: string | null
    epci?: string | null
    libelle_epci?: string | null
    libgeo?: string | null
    coordinates?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
  }

  export type communesUncheckedCreateInput = {
    pk?: number
    code_commune?: string | null
    libelle_commune?: string | null
    epci?: string | null
    libelle_epci?: string | null
    libgeo?: string | null
    coordinates?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
  }

  export type communesUpdateInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    libgeo?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communesUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    libgeo?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communesCreateManyInput = {
    pk?: number
    code_commune?: string | null
    libelle_commune?: string | null
    epci?: string | null
    libelle_epci?: string | null
    libgeo?: string | null
    coordinates?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
  }

  export type communesUpdateManyMutationInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    libgeo?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communesUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    libgeo?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type collectivites_searchbarCreateInput = {
    index: bigint | number
    code_commune?: string | null
    coordinates?: string | null
    libelle_commune?: string | null
    code_epci: string
    libelle_epci: string
    departement: string
    region: string
    search_code: string
    search_libelle: string
  }

  export type collectivites_searchbarUncheckedCreateInput = {
    index: bigint | number
    code_commune?: string | null
    coordinates?: string | null
    libelle_commune?: string | null
    code_epci: string
    libelle_epci: string
    departement: string
    region: string
    search_code: string
    search_libelle: string
  }

  export type collectivites_searchbarUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    code_epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    search_code?: StringFieldUpdateOperationsInput | string
    search_libelle?: StringFieldUpdateOperationsInput | string
  }

  export type collectivites_searchbarUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    code_epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    search_code?: StringFieldUpdateOperationsInput | string
    search_libelle?: StringFieldUpdateOperationsInput | string
  }

  export type collectivites_searchbarCreateManyInput = {
    index: bigint | number
    code_commune?: string | null
    coordinates?: string | null
    libelle_commune?: string | null
    code_epci: string
    libelle_epci: string
    departement: string
    region: string
    search_code: string
    search_libelle: string
  }

  export type collectivites_searchbarUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    code_epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    search_code?: StringFieldUpdateOperationsInput | string
    search_libelle?: StringFieldUpdateOperationsInput | string
  }

  export type collectivites_searchbarUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    code_epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: StringFieldUpdateOperationsInput | string
    search_code?: StringFieldUpdateOperationsInput | string
    search_libelle?: StringFieldUpdateOperationsInput | string
  }

  export type biodiversiteCreateInput = {
    index: bigint | number
    code_geographique?: string | null
    type_touristique?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type biodiversiteUncheckedCreateInput = {
    index: bigint | number
    code_geographique?: string | null
    type_touristique?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type biodiversiteUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    type_touristique?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type biodiversiteUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    type_touristique?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type biodiversiteCreateManyInput = {
    index: bigint | number
    code_geographique?: string | null
    type_touristique?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type biodiversiteUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    type_touristique?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type biodiversiteUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    type_touristique?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gestion_risquesCreateInput = {
    index: bigint | number
    code_geographique?: string | null
    lib_risque_jo?: string | null
    dat_pub_arrete?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type gestion_risquesUncheckedCreateInput = {
    index: bigint | number
    code_geographique?: string | null
    lib_risque_jo?: string | null
    dat_pub_arrete?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type gestion_risquesUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    lib_risque_jo?: NullableStringFieldUpdateOperationsInput | string | null
    dat_pub_arrete?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gestion_risquesUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    lib_risque_jo?: NullableStringFieldUpdateOperationsInput | string | null
    dat_pub_arrete?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gestion_risquesCreateManyInput = {
    index: bigint | number
    code_geographique?: string | null
    lib_risque_jo?: string | null
    dat_pub_arrete?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type gestion_risquesUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    lib_risque_jo?: NullableStringFieldUpdateOperationsInput | string | null
    dat_pub_arrete?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type gestion_risquesUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    lib_risque_jo?: NullableStringFieldUpdateOperationsInput | string | null
    dat_pub_arrete?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communes_dromUpdateInput = {
    code_commune?: StringFieldUpdateOperationsInput | string
    libelle_commune?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communes_dromUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: StringFieldUpdateOperationsInput | string
    libelle_commune?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communes_dromUpdateManyMutationInput = {
    code_commune?: StringFieldUpdateOperationsInput | string
    libelle_commune?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communes_dromUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: StringFieldUpdateOperationsInput | string
    libelle_commune?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    coordinates?: StringFieldUpdateOperationsInput | string
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    surface?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ressources_eauCreateInput = {
    index: bigint | number
    code_geographique: string
    LIBELLE_SOUS_CHAMP?: string | null
    SOUS_CHAMP?: string | null
    A2020?: number | null
    A2019?: number | null
    A2018?: number | null
    A2017?: number | null
    A2016?: number | null
    A2015?: number | null
    A2014?: number | null
    A2013?: number | null
    A2012?: number | null
    A2011?: number | null
    A2010?: number | null
    A2009?: number | null
    A2008?: number | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type ressources_eauUncheckedCreateInput = {
    index: bigint | number
    code_geographique: string
    LIBELLE_SOUS_CHAMP?: string | null
    SOUS_CHAMP?: string | null
    A2020?: number | null
    A2019?: number | null
    A2018?: number | null
    A2017?: number | null
    A2016?: number | null
    A2015?: number | null
    A2014?: number | null
    A2013?: number | null
    A2012?: number | null
    A2011?: number | null
    A2010?: number | null
    A2009?: number | null
    A2008?: number | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type ressources_eauUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    A2020?: NullableFloatFieldUpdateOperationsInput | number | null
    A2019?: NullableFloatFieldUpdateOperationsInput | number | null
    A2018?: NullableFloatFieldUpdateOperationsInput | number | null
    A2017?: NullableFloatFieldUpdateOperationsInput | number | null
    A2016?: NullableFloatFieldUpdateOperationsInput | number | null
    A2015?: NullableFloatFieldUpdateOperationsInput | number | null
    A2014?: NullableFloatFieldUpdateOperationsInput | number | null
    A2013?: NullableFloatFieldUpdateOperationsInput | number | null
    A2012?: NullableFloatFieldUpdateOperationsInput | number | null
    A2011?: NullableFloatFieldUpdateOperationsInput | number | null
    A2010?: NullableFloatFieldUpdateOperationsInput | number | null
    A2009?: NullableFloatFieldUpdateOperationsInput | number | null
    A2008?: NullableFloatFieldUpdateOperationsInput | number | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ressources_eauUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    A2020?: NullableFloatFieldUpdateOperationsInput | number | null
    A2019?: NullableFloatFieldUpdateOperationsInput | number | null
    A2018?: NullableFloatFieldUpdateOperationsInput | number | null
    A2017?: NullableFloatFieldUpdateOperationsInput | number | null
    A2016?: NullableFloatFieldUpdateOperationsInput | number | null
    A2015?: NullableFloatFieldUpdateOperationsInput | number | null
    A2014?: NullableFloatFieldUpdateOperationsInput | number | null
    A2013?: NullableFloatFieldUpdateOperationsInput | number | null
    A2012?: NullableFloatFieldUpdateOperationsInput | number | null
    A2011?: NullableFloatFieldUpdateOperationsInput | number | null
    A2010?: NullableFloatFieldUpdateOperationsInput | number | null
    A2009?: NullableFloatFieldUpdateOperationsInput | number | null
    A2008?: NullableFloatFieldUpdateOperationsInput | number | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ressources_eauCreateManyInput = {
    index: bigint | number
    code_geographique: string
    LIBELLE_SOUS_CHAMP?: string | null
    SOUS_CHAMP?: string | null
    A2020?: number | null
    A2019?: number | null
    A2018?: number | null
    A2017?: number | null
    A2016?: number | null
    A2015?: number | null
    A2014?: number | null
    A2013?: number | null
    A2012?: number | null
    A2011?: number | null
    A2010?: number | null
    A2009?: number | null
    A2008?: number | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
  }

  export type ressources_eauUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    A2020?: NullableFloatFieldUpdateOperationsInput | number | null
    A2019?: NullableFloatFieldUpdateOperationsInput | number | null
    A2018?: NullableFloatFieldUpdateOperationsInput | number | null
    A2017?: NullableFloatFieldUpdateOperationsInput | number | null
    A2016?: NullableFloatFieldUpdateOperationsInput | number | null
    A2015?: NullableFloatFieldUpdateOperationsInput | number | null
    A2014?: NullableFloatFieldUpdateOperationsInput | number | null
    A2013?: NullableFloatFieldUpdateOperationsInput | number | null
    A2012?: NullableFloatFieldUpdateOperationsInput | number | null
    A2011?: NullableFloatFieldUpdateOperationsInput | number | null
    A2010?: NullableFloatFieldUpdateOperationsInput | number | null
    A2009?: NullableFloatFieldUpdateOperationsInput | number | null
    A2008?: NullableFloatFieldUpdateOperationsInput | number | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type ressources_eauUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    A2020?: NullableFloatFieldUpdateOperationsInput | number | null
    A2019?: NullableFloatFieldUpdateOperationsInput | number | null
    A2018?: NullableFloatFieldUpdateOperationsInput | number | null
    A2017?: NullableFloatFieldUpdateOperationsInput | number | null
    A2016?: NullableFloatFieldUpdateOperationsInput | number | null
    A2015?: NullableFloatFieldUpdateOperationsInput | number | null
    A2014?: NullableFloatFieldUpdateOperationsInput | number | null
    A2013?: NullableFloatFieldUpdateOperationsInput | number | null
    A2012?: NullableFloatFieldUpdateOperationsInput | number | null
    A2011?: NullableFloatFieldUpdateOperationsInput | number | null
    A2010?: NullableFloatFieldUpdateOperationsInput | number | null
    A2009?: NullableFloatFieldUpdateOperationsInput | number | null
    A2008?: NullableFloatFieldUpdateOperationsInput | number | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type agriculture_bioCreateInput = {
    index: bigint | number
    epci: string
    libelle_epci: string
    VARIABLE: string
    LIBELLE_SOUS_CHAMP?: string | null
    surface_2022: number
    surface_2021: number
    surface_2020: number
    surface_2019: number
    nombre_2022: number
    nombre_2021: number
    nombre_2020: number
    nombre_2019: number
  }

  export type agriculture_bioUncheckedCreateInput = {
    index: bigint | number
    epci: string
    libelle_epci: string
    VARIABLE: string
    LIBELLE_SOUS_CHAMP?: string | null
    surface_2022: number
    surface_2021: number
    surface_2020: number
    surface_2019: number
    nombre_2022: number
    nombre_2021: number
    nombre_2020: number
    nombre_2019: number
  }

  export type agriculture_bioUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    VARIABLE?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    surface_2022?: FloatFieldUpdateOperationsInput | number
    surface_2021?: FloatFieldUpdateOperationsInput | number
    surface_2020?: FloatFieldUpdateOperationsInput | number
    surface_2019?: FloatFieldUpdateOperationsInput | number
    nombre_2022?: FloatFieldUpdateOperationsInput | number
    nombre_2021?: FloatFieldUpdateOperationsInput | number
    nombre_2020?: FloatFieldUpdateOperationsInput | number
    nombre_2019?: FloatFieldUpdateOperationsInput | number
  }

  export type agriculture_bioUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    VARIABLE?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    surface_2022?: FloatFieldUpdateOperationsInput | number
    surface_2021?: FloatFieldUpdateOperationsInput | number
    surface_2020?: FloatFieldUpdateOperationsInput | number
    surface_2019?: FloatFieldUpdateOperationsInput | number
    nombre_2022?: FloatFieldUpdateOperationsInput | number
    nombre_2021?: FloatFieldUpdateOperationsInput | number
    nombre_2020?: FloatFieldUpdateOperationsInput | number
    nombre_2019?: FloatFieldUpdateOperationsInput | number
  }

  export type agriculture_bioCreateManyInput = {
    index: bigint | number
    epci: string
    libelle_epci: string
    VARIABLE: string
    LIBELLE_SOUS_CHAMP?: string | null
    surface_2022: number
    surface_2021: number
    surface_2020: number
    surface_2019: number
    nombre_2022: number
    nombre_2021: number
    nombre_2020: number
    nombre_2019: number
  }

  export type agriculture_bioUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    VARIABLE?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    surface_2022?: FloatFieldUpdateOperationsInput | number
    surface_2021?: FloatFieldUpdateOperationsInput | number
    surface_2020?: FloatFieldUpdateOperationsInput | number
    surface_2019?: FloatFieldUpdateOperationsInput | number
    nombre_2022?: FloatFieldUpdateOperationsInput | number
    nombre_2021?: FloatFieldUpdateOperationsInput | number
    nombre_2020?: FloatFieldUpdateOperationsInput | number
    nombre_2019?: FloatFieldUpdateOperationsInput | number
  }

  export type agriculture_bioUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    VARIABLE?: StringFieldUpdateOperationsInput | string
    LIBELLE_SOUS_CHAMP?: NullableStringFieldUpdateOperationsInput | string | null
    surface_2022?: FloatFieldUpdateOperationsInput | number
    surface_2021?: FloatFieldUpdateOperationsInput | number
    surface_2020?: FloatFieldUpdateOperationsInput | number
    surface_2019?: FloatFieldUpdateOperationsInput | number
    nombre_2022?: FloatFieldUpdateOperationsInput | number
    nombre_2021?: FloatFieldUpdateOperationsInput | number
    nombre_2020?: FloatFieldUpdateOperationsInput | number
    nombre_2019?: FloatFieldUpdateOperationsInput | number
  }

  export type erosion_cotiereUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    taux?: FloatFieldUpdateOperationsInput | number
    duree?: FloatFieldUpdateOperationsInput | number
    tdc_ancien?: BigIntFieldUpdateOperationsInput | bigint | number
    tdc_rec?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type erosion_cotiereUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    taux?: FloatFieldUpdateOperationsInput | number
    duree?: FloatFieldUpdateOperationsInput | number
    tdc_ancien?: BigIntFieldUpdateOperationsInput | bigint | number
    tdc_rec?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type erosion_cotiereUpdateManyMutationInput = {
    pk?: IntFieldUpdateOperationsInput | number
    taux?: FloatFieldUpdateOperationsInput | number
    duree?: FloatFieldUpdateOperationsInput | number
    tdc_ancien?: BigIntFieldUpdateOperationsInput | bigint | number
    tdc_rec?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type erosion_cotiereUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    taux?: FloatFieldUpdateOperationsInput | number
    duree?: FloatFieldUpdateOperationsInput | number
    tdc_ancien?: BigIntFieldUpdateOperationsInput | bigint | number
    tdc_rec?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type epciUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    epci_code?: StringFieldUpdateOperationsInput | string
  }

  export type epciUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    epci_code?: StringFieldUpdateOperationsInput | string
  }

  export type epciUpdateManyMutationInput = {
    pk?: IntFieldUpdateOperationsInput | number
    epci_code?: StringFieldUpdateOperationsInput | string
  }

  export type epciUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    epci_code?: StringFieldUpdateOperationsInput | string
  }

  export type surfaces_protegeesCreateInput = {
    index: bigint | number
    code_geographique: string
    PNC?: string | null
    RAMSAR?: string | null
    PNR?: string | null
    PNP?: string | null
    FOR_PRO?: string | null
    ZZZ?: string | null
    ZNIEFF2?: string | null
    ZNIEFF1?: string | null
    RNR?: string | null
    TOU_PRO?: string | null
    NATURA?: string | null
    ZPS?: string | null
    SIC?: string | null
    CELRL?: string | null
    BIO?: string | null
    APB?: string | null
    RN?: string | null
    RBFD?: string | null
    RNCFS?: string | null
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
  }

  export type surfaces_protegeesUncheckedCreateInput = {
    index: bigint | number
    code_geographique: string
    PNC?: string | null
    RAMSAR?: string | null
    PNR?: string | null
    PNP?: string | null
    FOR_PRO?: string | null
    ZZZ?: string | null
    ZNIEFF2?: string | null
    ZNIEFF1?: string | null
    RNR?: string | null
    TOU_PRO?: string | null
    NATURA?: string | null
    ZPS?: string | null
    SIC?: string | null
    CELRL?: string | null
    BIO?: string | null
    APB?: string | null
    RN?: string | null
    RBFD?: string | null
    RNCFS?: string | null
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
  }

  export type surfaces_protegeesUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    PNC?: NullableStringFieldUpdateOperationsInput | string | null
    RAMSAR?: NullableStringFieldUpdateOperationsInput | string | null
    PNR?: NullableStringFieldUpdateOperationsInput | string | null
    PNP?: NullableStringFieldUpdateOperationsInput | string | null
    FOR_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    ZZZ?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF2?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF1?: NullableStringFieldUpdateOperationsInput | string | null
    RNR?: NullableStringFieldUpdateOperationsInput | string | null
    TOU_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    NATURA?: NullableStringFieldUpdateOperationsInput | string | null
    ZPS?: NullableStringFieldUpdateOperationsInput | string | null
    SIC?: NullableStringFieldUpdateOperationsInput | string | null
    CELRL?: NullableStringFieldUpdateOperationsInput | string | null
    BIO?: NullableStringFieldUpdateOperationsInput | string | null
    APB?: NullableStringFieldUpdateOperationsInput | string | null
    RN?: NullableStringFieldUpdateOperationsInput | string | null
    RBFD?: NullableStringFieldUpdateOperationsInput | string | null
    RNCFS?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: FloatFieldUpdateOperationsInput | number
  }

  export type surfaces_protegeesUncheckedUpdateInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    PNC?: NullableStringFieldUpdateOperationsInput | string | null
    RAMSAR?: NullableStringFieldUpdateOperationsInput | string | null
    PNR?: NullableStringFieldUpdateOperationsInput | string | null
    PNP?: NullableStringFieldUpdateOperationsInput | string | null
    FOR_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    ZZZ?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF2?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF1?: NullableStringFieldUpdateOperationsInput | string | null
    RNR?: NullableStringFieldUpdateOperationsInput | string | null
    TOU_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    NATURA?: NullableStringFieldUpdateOperationsInput | string | null
    ZPS?: NullableStringFieldUpdateOperationsInput | string | null
    SIC?: NullableStringFieldUpdateOperationsInput | string | null
    CELRL?: NullableStringFieldUpdateOperationsInput | string | null
    BIO?: NullableStringFieldUpdateOperationsInput | string | null
    APB?: NullableStringFieldUpdateOperationsInput | string | null
    RN?: NullableStringFieldUpdateOperationsInput | string | null
    RBFD?: NullableStringFieldUpdateOperationsInput | string | null
    RNCFS?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: FloatFieldUpdateOperationsInput | number
  }

  export type surfaces_protegeesCreateManyInput = {
    index: bigint | number
    code_geographique: string
    PNC?: string | null
    RAMSAR?: string | null
    PNR?: string | null
    PNP?: string | null
    FOR_PRO?: string | null
    ZZZ?: string | null
    ZNIEFF2?: string | null
    ZNIEFF1?: string | null
    RNR?: string | null
    TOU_PRO?: string | null
    NATURA?: string | null
    ZPS?: string | null
    SIC?: string | null
    CELRL?: string | null
    BIO?: string | null
    APB?: string | null
    RN?: string | null
    RBFD?: string | null
    RNCFS?: string | null
    libelle_geographique: string
    epci: string
    libelle_epci: string
    departement: string
    region: number
  }

  export type surfaces_protegeesUpdateManyMutationInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    PNC?: NullableStringFieldUpdateOperationsInput | string | null
    RAMSAR?: NullableStringFieldUpdateOperationsInput | string | null
    PNR?: NullableStringFieldUpdateOperationsInput | string | null
    PNP?: NullableStringFieldUpdateOperationsInput | string | null
    FOR_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    ZZZ?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF2?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF1?: NullableStringFieldUpdateOperationsInput | string | null
    RNR?: NullableStringFieldUpdateOperationsInput | string | null
    TOU_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    NATURA?: NullableStringFieldUpdateOperationsInput | string | null
    ZPS?: NullableStringFieldUpdateOperationsInput | string | null
    SIC?: NullableStringFieldUpdateOperationsInput | string | null
    CELRL?: NullableStringFieldUpdateOperationsInput | string | null
    BIO?: NullableStringFieldUpdateOperationsInput | string | null
    APB?: NullableStringFieldUpdateOperationsInput | string | null
    RN?: NullableStringFieldUpdateOperationsInput | string | null
    RBFD?: NullableStringFieldUpdateOperationsInput | string | null
    RNCFS?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: FloatFieldUpdateOperationsInput | number
  }

  export type surfaces_protegeesUncheckedUpdateManyInput = {
    index?: BigIntFieldUpdateOperationsInput | bigint | number
    code_geographique?: StringFieldUpdateOperationsInput | string
    PNC?: NullableStringFieldUpdateOperationsInput | string | null
    RAMSAR?: NullableStringFieldUpdateOperationsInput | string | null
    PNR?: NullableStringFieldUpdateOperationsInput | string | null
    PNP?: NullableStringFieldUpdateOperationsInput | string | null
    FOR_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    ZZZ?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF2?: NullableStringFieldUpdateOperationsInput | string | null
    ZNIEFF1?: NullableStringFieldUpdateOperationsInput | string | null
    RNR?: NullableStringFieldUpdateOperationsInput | string | null
    TOU_PRO?: NullableStringFieldUpdateOperationsInput | string | null
    NATURA?: NullableStringFieldUpdateOperationsInput | string | null
    ZPS?: NullableStringFieldUpdateOperationsInput | string | null
    SIC?: NullableStringFieldUpdateOperationsInput | string | null
    CELRL?: NullableStringFieldUpdateOperationsInput | string | null
    BIO?: NullableStringFieldUpdateOperationsInput | string | null
    APB?: NullableStringFieldUpdateOperationsInput | string | null
    RN?: NullableStringFieldUpdateOperationsInput | string | null
    RBFD?: NullableStringFieldUpdateOperationsInput | string | null
    RNCFS?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: StringFieldUpdateOperationsInput | string
    epci?: StringFieldUpdateOperationsInput | string
    libelle_epci?: StringFieldUpdateOperationsInput | string
    departement?: StringFieldUpdateOperationsInput | string
    region?: FloatFieldUpdateOperationsInput | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inconfort_thermiqueCountOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrder
    age_bati_91_05?: SortOrder
    age_bati_46_90?: SortOrder
    age_bati_19_45?: SortOrder
    age_bati_pre_19?: SortOrder
    under_4_sum_1968?: SortOrder
    to_80_sum_1968?: SortOrder
    over_80_sum_1968?: SortOrder
    under_4_sum_1975?: SortOrder
    to_80_sum_1975?: SortOrder
    over_80_sum_1975?: SortOrder
    under_4_sum_1982?: SortOrder
    to_80_sum_1982?: SortOrder
    over_80_sum_1982?: SortOrder
    under_4_sum_1990?: SortOrder
    to_80_sum_1990?: SortOrder
    over_80_sum_1990?: SortOrder
    under_4_sum_1999?: SortOrder
    to_80_sum_1999?: SortOrder
    over_80_sum_1999?: SortOrder
    under_4_sum_2009?: SortOrder
    to_80_sum_2009?: SortOrder
    over_80_sum_2009?: SortOrder
    under_4_sum_2014?: SortOrder
    to_80_sum_2014?: SortOrder
    over_80_sum_2014?: SortOrder
    under_4_sum_2020?: SortOrder
    to_80_sum_2020?: SortOrder
    over_80_sum_2020?: SortOrder
    P20_POP80P?: SortOrder
    P20_POP80P_PSEUL?: SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    superf_choro?: SortOrder
    s_geom_cstr_bati?: SortOrder
    hauteur?: SortOrder
    h_x_s?: SortOrder
    densite_bati?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
    clc_1_artificialise?: SortOrder
  }

  export type inconfort_thermiqueAvgOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrder
    age_bati_91_05?: SortOrder
    age_bati_46_90?: SortOrder
    age_bati_19_45?: SortOrder
    age_bati_pre_19?: SortOrder
    under_4_sum_1968?: SortOrder
    to_80_sum_1968?: SortOrder
    over_80_sum_1968?: SortOrder
    under_4_sum_1975?: SortOrder
    to_80_sum_1975?: SortOrder
    over_80_sum_1975?: SortOrder
    under_4_sum_1982?: SortOrder
    to_80_sum_1982?: SortOrder
    over_80_sum_1982?: SortOrder
    under_4_sum_1990?: SortOrder
    to_80_sum_1990?: SortOrder
    over_80_sum_1990?: SortOrder
    under_4_sum_1999?: SortOrder
    to_80_sum_1999?: SortOrder
    over_80_sum_1999?: SortOrder
    under_4_sum_2009?: SortOrder
    to_80_sum_2009?: SortOrder
    over_80_sum_2009?: SortOrder
    under_4_sum_2014?: SortOrder
    to_80_sum_2014?: SortOrder
    over_80_sum_2014?: SortOrder
    under_4_sum_2020?: SortOrder
    to_80_sum_2020?: SortOrder
    over_80_sum_2020?: SortOrder
    P20_POP80P?: SortOrder
    P20_POP80P_PSEUL?: SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    superf_choro?: SortOrder
    s_geom_cstr_bati?: SortOrder
    hauteur?: SortOrder
    h_x_s?: SortOrder
    densite_bati?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
    clc_1_artificialise?: SortOrder
  }

  export type inconfort_thermiqueMaxOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrder
    age_bati_91_05?: SortOrder
    age_bati_46_90?: SortOrder
    age_bati_19_45?: SortOrder
    age_bati_pre_19?: SortOrder
    under_4_sum_1968?: SortOrder
    to_80_sum_1968?: SortOrder
    over_80_sum_1968?: SortOrder
    under_4_sum_1975?: SortOrder
    to_80_sum_1975?: SortOrder
    over_80_sum_1975?: SortOrder
    under_4_sum_1982?: SortOrder
    to_80_sum_1982?: SortOrder
    over_80_sum_1982?: SortOrder
    under_4_sum_1990?: SortOrder
    to_80_sum_1990?: SortOrder
    over_80_sum_1990?: SortOrder
    under_4_sum_1999?: SortOrder
    to_80_sum_1999?: SortOrder
    over_80_sum_1999?: SortOrder
    under_4_sum_2009?: SortOrder
    to_80_sum_2009?: SortOrder
    over_80_sum_2009?: SortOrder
    under_4_sum_2014?: SortOrder
    to_80_sum_2014?: SortOrder
    over_80_sum_2014?: SortOrder
    under_4_sum_2020?: SortOrder
    to_80_sum_2020?: SortOrder
    over_80_sum_2020?: SortOrder
    P20_POP80P?: SortOrder
    P20_POP80P_PSEUL?: SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    superf_choro?: SortOrder
    s_geom_cstr_bati?: SortOrder
    hauteur?: SortOrder
    h_x_s?: SortOrder
    densite_bati?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
    clc_1_artificialise?: SortOrder
  }

  export type inconfort_thermiqueMinOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrder
    age_bati_91_05?: SortOrder
    age_bati_46_90?: SortOrder
    age_bati_19_45?: SortOrder
    age_bati_pre_19?: SortOrder
    under_4_sum_1968?: SortOrder
    to_80_sum_1968?: SortOrder
    over_80_sum_1968?: SortOrder
    under_4_sum_1975?: SortOrder
    to_80_sum_1975?: SortOrder
    over_80_sum_1975?: SortOrder
    under_4_sum_1982?: SortOrder
    to_80_sum_1982?: SortOrder
    over_80_sum_1982?: SortOrder
    under_4_sum_1990?: SortOrder
    to_80_sum_1990?: SortOrder
    over_80_sum_1990?: SortOrder
    under_4_sum_1999?: SortOrder
    to_80_sum_1999?: SortOrder
    over_80_sum_1999?: SortOrder
    under_4_sum_2009?: SortOrder
    to_80_sum_2009?: SortOrder
    over_80_sum_2009?: SortOrder
    under_4_sum_2014?: SortOrder
    to_80_sum_2014?: SortOrder
    over_80_sum_2014?: SortOrder
    under_4_sum_2020?: SortOrder
    to_80_sum_2020?: SortOrder
    over_80_sum_2020?: SortOrder
    P20_POP80P?: SortOrder
    P20_POP80P_PSEUL?: SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    superf_choro?: SortOrder
    s_geom_cstr_bati?: SortOrder
    hauteur?: SortOrder
    h_x_s?: SortOrder
    densite_bati?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
    clc_1_artificialise?: SortOrder
  }

  export type inconfort_thermiqueSumOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
    age_bati_post06?: SortOrder
    age_bati_91_05?: SortOrder
    age_bati_46_90?: SortOrder
    age_bati_19_45?: SortOrder
    age_bati_pre_19?: SortOrder
    under_4_sum_1968?: SortOrder
    to_80_sum_1968?: SortOrder
    over_80_sum_1968?: SortOrder
    under_4_sum_1975?: SortOrder
    to_80_sum_1975?: SortOrder
    over_80_sum_1975?: SortOrder
    under_4_sum_1982?: SortOrder
    to_80_sum_1982?: SortOrder
    over_80_sum_1982?: SortOrder
    under_4_sum_1990?: SortOrder
    to_80_sum_1990?: SortOrder
    over_80_sum_1990?: SortOrder
    under_4_sum_1999?: SortOrder
    to_80_sum_1999?: SortOrder
    over_80_sum_1999?: SortOrder
    under_4_sum_2009?: SortOrder
    to_80_sum_2009?: SortOrder
    over_80_sum_2009?: SortOrder
    under_4_sum_2014?: SortOrder
    to_80_sum_2014?: SortOrder
    over_80_sum_2014?: SortOrder
    under_4_sum_2020?: SortOrder
    to_80_sum_2020?: SortOrder
    over_80_sum_2020?: SortOrder
    P20_POP80P?: SortOrder
    P20_POP80P_PSEUL?: SortOrder
    P20_POP80P_PSEUL_PERCENT?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    superf_choro?: SortOrder
    s_geom_cstr_bati?: SortOrder
    hauteur?: SortOrder
    h_x_s?: SortOrder
    densite_bati?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
    clc_1_artificialise?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type clc_epciCountOrderByAggregateInput = {
    pk?: SortOrder
    legend?: SortOrder
    epci_code?: SortOrder
  }

  export type clc_epciAvgOrderByAggregateInput = {
    pk?: SortOrder
    epci_code?: SortOrder
  }

  export type clc_epciMaxOrderByAggregateInput = {
    pk?: SortOrder
    legend?: SortOrder
    epci_code?: SortOrder
  }

  export type clc_epciMinOrderByAggregateInput = {
    pk?: SortOrder
    legend?: SortOrder
    epci_code?: SortOrder
  }

  export type clc_epciSumOrderByAggregateInput = {
    pk?: SortOrder
    epci_code?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type communesCountOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    libgeo?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesAvgOrderByAggregateInput = {
    pk?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesMaxOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    libgeo?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesMinOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    libgeo?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesSumOrderByAggregateInput = {
    pk?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type collectivites_searchbarCountOrderByAggregateInput = {
    index?: SortOrder
    code_commune?: SortOrder
    coordinates?: SortOrder
    libelle_commune?: SortOrder
    code_epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    search_code?: SortOrder
    search_libelle?: SortOrder
  }

  export type collectivites_searchbarAvgOrderByAggregateInput = {
    index?: SortOrder
  }

  export type collectivites_searchbarMaxOrderByAggregateInput = {
    index?: SortOrder
    code_commune?: SortOrder
    coordinates?: SortOrder
    libelle_commune?: SortOrder
    code_epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    search_code?: SortOrder
    search_libelle?: SortOrder
  }

  export type collectivites_searchbarMinOrderByAggregateInput = {
    index?: SortOrder
    code_commune?: SortOrder
    coordinates?: SortOrder
    libelle_commune?: SortOrder
    code_epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
    search_code?: SortOrder
    search_libelle?: SortOrder
  }

  export type collectivites_searchbarSumOrderByAggregateInput = {
    index?: SortOrder
  }

  export type biodiversiteCountOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    type_touristique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type biodiversiteAvgOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
  }

  export type biodiversiteMaxOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    type_touristique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type biodiversiteMinOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    type_touristique?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type biodiversiteSumOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
  }

  export type gestion_risquesCountOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    lib_risque_jo?: SortOrder
    dat_pub_arrete?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type gestion_risquesAvgOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
  }

  export type gestion_risquesMaxOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    lib_risque_jo?: SortOrder
    dat_pub_arrete?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type gestion_risquesMinOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    lib_risque_jo?: SortOrder
    dat_pub_arrete?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type gestion_risquesSumOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
  }

  export type communes_dromCountOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    surface?: SortOrder
  }

  export type communes_dromAvgOrderByAggregateInput = {
    pk?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    surface?: SortOrder
  }

  export type communes_dromMaxOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    surface?: SortOrder
  }

  export type communes_dromMinOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    coordinates?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    surface?: SortOrder
  }

  export type communes_dromSumOrderByAggregateInput = {
    pk?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    surface?: SortOrder
  }

  export type ressources_eauCountOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrder
    SOUS_CHAMP?: SortOrder
    A2020?: SortOrder
    A2019?: SortOrder
    A2018?: SortOrder
    A2017?: SortOrder
    A2016?: SortOrder
    A2015?: SortOrder
    A2014?: SortOrder
    A2013?: SortOrder
    A2012?: SortOrder
    A2011?: SortOrder
    A2010?: SortOrder
    A2009?: SortOrder
    A2008?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type ressources_eauAvgOrderByAggregateInput = {
    index?: SortOrder
    A2020?: SortOrder
    A2019?: SortOrder
    A2018?: SortOrder
    A2017?: SortOrder
    A2016?: SortOrder
    A2015?: SortOrder
    A2014?: SortOrder
    A2013?: SortOrder
    A2012?: SortOrder
    A2011?: SortOrder
    A2010?: SortOrder
    A2009?: SortOrder
    A2008?: SortOrder
    region?: SortOrder
  }

  export type ressources_eauMaxOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrder
    SOUS_CHAMP?: SortOrder
    A2020?: SortOrder
    A2019?: SortOrder
    A2018?: SortOrder
    A2017?: SortOrder
    A2016?: SortOrder
    A2015?: SortOrder
    A2014?: SortOrder
    A2013?: SortOrder
    A2012?: SortOrder
    A2011?: SortOrder
    A2010?: SortOrder
    A2009?: SortOrder
    A2008?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type ressources_eauMinOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrder
    SOUS_CHAMP?: SortOrder
    A2020?: SortOrder
    A2019?: SortOrder
    A2018?: SortOrder
    A2017?: SortOrder
    A2016?: SortOrder
    A2015?: SortOrder
    A2014?: SortOrder
    A2013?: SortOrder
    A2012?: SortOrder
    A2011?: SortOrder
    A2010?: SortOrder
    A2009?: SortOrder
    A2008?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type ressources_eauSumOrderByAggregateInput = {
    index?: SortOrder
    A2020?: SortOrder
    A2019?: SortOrder
    A2018?: SortOrder
    A2017?: SortOrder
    A2016?: SortOrder
    A2015?: SortOrder
    A2014?: SortOrder
    A2013?: SortOrder
    A2012?: SortOrder
    A2011?: SortOrder
    A2010?: SortOrder
    A2009?: SortOrder
    A2008?: SortOrder
    region?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type agriculture_bioCountOrderByAggregateInput = {
    index?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    VARIABLE?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
  }

  export type agriculture_bioAvgOrderByAggregateInput = {
    index?: SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
  }

  export type agriculture_bioMaxOrderByAggregateInput = {
    index?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    VARIABLE?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
  }

  export type agriculture_bioMinOrderByAggregateInput = {
    index?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    VARIABLE?: SortOrder
    LIBELLE_SOUS_CHAMP?: SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
  }

  export type agriculture_bioSumOrderByAggregateInput = {
    index?: SortOrder
    surface_2022?: SortOrder
    surface_2021?: SortOrder
    surface_2020?: SortOrder
    surface_2019?: SortOrder
    nombre_2022?: SortOrder
    nombre_2021?: SortOrder
    nombre_2020?: SortOrder
    nombre_2019?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type erosion_cotiereCountOrderByAggregateInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
  }

  export type erosion_cotiereAvgOrderByAggregateInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
  }

  export type erosion_cotiereMaxOrderByAggregateInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
  }

  export type erosion_cotiereMinOrderByAggregateInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
  }

  export type erosion_cotiereSumOrderByAggregateInput = {
    pk?: SortOrder
    taux?: SortOrder
    duree?: SortOrder
    tdc_ancien?: SortOrder
    tdc_rec?: SortOrder
  }

  export type epciCountOrderByAggregateInput = {
    pk?: SortOrder
    epci_code?: SortOrder
  }

  export type epciAvgOrderByAggregateInput = {
    pk?: SortOrder
  }

  export type epciMaxOrderByAggregateInput = {
    pk?: SortOrder
    epci_code?: SortOrder
  }

  export type epciMinOrderByAggregateInput = {
    pk?: SortOrder
    epci_code?: SortOrder
  }

  export type epciSumOrderByAggregateInput = {
    pk?: SortOrder
  }

  export type surfaces_protegeesCountOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    PNC?: SortOrder
    RAMSAR?: SortOrder
    PNR?: SortOrder
    PNP?: SortOrder
    FOR_PRO?: SortOrder
    ZZZ?: SortOrder
    ZNIEFF2?: SortOrder
    ZNIEFF1?: SortOrder
    RNR?: SortOrder
    TOU_PRO?: SortOrder
    NATURA?: SortOrder
    ZPS?: SortOrder
    SIC?: SortOrder
    CELRL?: SortOrder
    BIO?: SortOrder
    APB?: SortOrder
    RN?: SortOrder
    RBFD?: SortOrder
    RNCFS?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type surfaces_protegeesAvgOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
  }

  export type surfaces_protegeesMaxOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    PNC?: SortOrder
    RAMSAR?: SortOrder
    PNR?: SortOrder
    PNP?: SortOrder
    FOR_PRO?: SortOrder
    ZZZ?: SortOrder
    ZNIEFF2?: SortOrder
    ZNIEFF1?: SortOrder
    RNR?: SortOrder
    TOU_PRO?: SortOrder
    NATURA?: SortOrder
    ZPS?: SortOrder
    SIC?: SortOrder
    CELRL?: SortOrder
    BIO?: SortOrder
    APB?: SortOrder
    RN?: SortOrder
    RBFD?: SortOrder
    RNCFS?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type surfaces_protegeesMinOrderByAggregateInput = {
    index?: SortOrder
    code_geographique?: SortOrder
    PNC?: SortOrder
    RAMSAR?: SortOrder
    PNR?: SortOrder
    PNP?: SortOrder
    FOR_PRO?: SortOrder
    ZZZ?: SortOrder
    ZNIEFF2?: SortOrder
    ZNIEFF1?: SortOrder
    RNR?: SortOrder
    TOU_PRO?: SortOrder
    NATURA?: SortOrder
    ZPS?: SortOrder
    SIC?: SortOrder
    CELRL?: SortOrder
    BIO?: SortOrder
    APB?: SortOrder
    RN?: SortOrder
    RBFD?: SortOrder
    RNCFS?: SortOrder
    libelle_geographique?: SortOrder
    epci?: SortOrder
    libelle_epci?: SortOrder
    departement?: SortOrder
    region?: SortOrder
  }

  export type surfaces_protegeesSumOrderByAggregateInput = {
    index?: SortOrder
    region?: SortOrder
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use inconfort_thermiqueDefaultArgs instead
     */
    export type inconfort_thermiqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inconfort_thermiqueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clc_epciDefaultArgs instead
     */
    export type clc_epciArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clc_epciDefaultArgs<ExtArgs>
    /**
     * @deprecated Use communesDefaultArgs instead
     */
    export type communesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use collectivites_searchbarDefaultArgs instead
     */
    export type collectivites_searchbarArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = collectivites_searchbarDefaultArgs<ExtArgs>
    /**
     * @deprecated Use biodiversiteDefaultArgs instead
     */
    export type biodiversiteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = biodiversiteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use gestion_risquesDefaultArgs instead
     */
    export type gestion_risquesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = gestion_risquesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use communes_dromDefaultArgs instead
     */
    export type communes_dromArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communes_dromDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ressources_eauDefaultArgs instead
     */
    export type ressources_eauArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ressources_eauDefaultArgs<ExtArgs>
    /**
     * @deprecated Use agriculture_bioDefaultArgs instead
     */
    export type agriculture_bioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = agriculture_bioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use erosion_cotiereDefaultArgs instead
     */
    export type erosion_cotiereArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = erosion_cotiereDefaultArgs<ExtArgs>
    /**
     * @deprecated Use epciDefaultArgs instead
     */
    export type epciArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = epciDefaultArgs<ExtArgs>
    /**
     * @deprecated Use surfaces_protegeesDefaultArgs instead
     */
    export type surfaces_protegeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = surfaces_protegeesDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}