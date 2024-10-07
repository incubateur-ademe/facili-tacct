
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
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
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
    collectivites_searchbar: 'collectivites_searchbar'
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
      modelProps: "inconfort_thermique" | "clc_epci" | "communes" | "collectivites_searchbar"
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