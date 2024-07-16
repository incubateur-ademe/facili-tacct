
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
 * Model spatial_ref_sys
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type spatial_ref_sys = $Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>
/**
 * Model communes_precarite
 * 
 */
export type communes_precarite = $Result.DefaultSelection<Prisma.$communes_precaritePayload>
/**
 * Model communes
 * 
 */
export type communes = $Result.DefaultSelection<Prisma.$communesPayload>
/**
 * Model clc_2018_2
 * 
 */
export type clc_2018_2 = $Result.DefaultSelection<Prisma.$clc_2018_2Payload>
/**
 * Model communes2
 * 
 */
export type communes2 = $Result.DefaultSelection<Prisma.$communes2Payload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Spatial_ref_sys
 * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Spatial_ref_sys
   * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.spatial_ref_sys`: Exposes CRUD operations for the **spatial_ref_sys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spatial_ref_sys
    * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
    * ```
    */
  get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs>;

  /**
   * `prisma.communes_precarite`: Exposes CRUD operations for the **communes_precarite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes_precarites
    * const communes_precarites = await prisma.communes_precarite.findMany()
    * ```
    */
  get communes_precarite(): Prisma.communes_precariteDelegate<ExtArgs>;

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
   * `prisma.clc_2018_2`: Exposes CRUD operations for the **clc_2018_2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clc_2018_2s
    * const clc_2018_2s = await prisma.clc_2018_2.findMany()
    * ```
    */
  get clc_2018_2(): Prisma.clc_2018_2Delegate<ExtArgs>;

  /**
   * `prisma.communes2`: Exposes CRUD operations for the **communes2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes2s
    * const communes2s = await prisma.communes2.findMany()
    * ```
    */
  get communes2(): Prisma.communes2Delegate<ExtArgs>;
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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: 34ace0eb2704183d2c05b60b52fba5c43c13f303
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    spatial_ref_sys: 'spatial_ref_sys',
    communes_precarite: 'communes_precarite',
    communes: 'communes',
    clc_2018_2: 'clc_2018_2',
    communes2: 'communes2'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'spatial_ref_sys' | 'communes_precarite' | 'communes' | 'clc_2018_2' | 'communes2'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      spatial_ref_sys: {
        payload: Prisma.$spatial_ref_sysPayload<ExtArgs>
        fields: Prisma.spatial_ref_sysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findFirst: {
            args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findMany: {
            args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          create: {
            args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          createMany: {
            args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          update: {
            args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          deleteMany: {
            args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          aggregate: {
            args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSpatial_ref_sys>
          }
          groupBy: {
            args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Spatial_ref_sysGroupByOutputType>[]
          }
          count: {
            args: Prisma.spatial_ref_sysCountArgs<ExtArgs>,
            result: $Utils.Optional<Spatial_ref_sysCountAggregateOutputType> | number
          }
        }
      }
      communes_precarite: {
        payload: Prisma.$communes_precaritePayload<ExtArgs>
        fields: Prisma.communes_precariteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communes_precariteFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communes_precariteFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          findFirst: {
            args: Prisma.communes_precariteFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communes_precariteFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          findMany: {
            args: Prisma.communes_precariteFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>[]
          }
          create: {
            args: Prisma.communes_precariteCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          createMany: {
            args: Prisma.communes_precariteCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.communes_precariteDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          update: {
            args: Prisma.communes_precariteUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          deleteMany: {
            args: Prisma.communes_precariteDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.communes_precariteUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.communes_precariteUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          aggregate: {
            args: Prisma.Communes_precariteAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunes_precarite>
          }
          groupBy: {
            args: Prisma.communes_precariteGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Communes_precariteGroupByOutputType>[]
          }
          count: {
            args: Prisma.communes_precariteCountArgs<ExtArgs>,
            result: $Utils.Optional<Communes_precariteCountAggregateOutputType> | number
          }
        }
      }
      communes: {
        payload: Prisma.$communesPayload<ExtArgs>
        fields: Prisma.communesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          findFirst: {
            args: Prisma.communesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          findMany: {
            args: Prisma.communesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>[]
          }
          create: {
            args: Prisma.communesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          createMany: {
            args: Prisma.communesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.communesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          update: {
            args: Prisma.communesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          deleteMany: {
            args: Prisma.communesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.communesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.communesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communesPayload>
          }
          aggregate: {
            args: Prisma.CommunesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunes>
          }
          groupBy: {
            args: Prisma.communesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CommunesGroupByOutputType>[]
          }
          count: {
            args: Prisma.communesCountArgs<ExtArgs>,
            result: $Utils.Optional<CommunesCountAggregateOutputType> | number
          }
        }
      }
      clc_2018_2: {
        payload: Prisma.$clc_2018_2Payload<ExtArgs>
        fields: Prisma.clc_2018_2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.clc_2018_2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clc_2018_2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          findFirst: {
            args: Prisma.clc_2018_2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clc_2018_2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          findMany: {
            args: Prisma.clc_2018_2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>[]
          }
          create: {
            args: Prisma.clc_2018_2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          createMany: {
            args: Prisma.clc_2018_2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.clc_2018_2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          update: {
            args: Prisma.clc_2018_2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          deleteMany: {
            args: Prisma.clc_2018_2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clc_2018_2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clc_2018_2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          aggregate: {
            args: Prisma.Clc_2018_2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClc_2018_2>
          }
          groupBy: {
            args: Prisma.clc_2018_2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<Clc_2018_2GroupByOutputType>[]
          }
          count: {
            args: Prisma.clc_2018_2CountArgs<ExtArgs>,
            result: $Utils.Optional<Clc_2018_2CountAggregateOutputType> | number
          }
        }
      }
      communes2: {
        payload: Prisma.$communes2Payload<ExtArgs>
        fields: Prisma.communes2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.communes2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communes2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          findFirst: {
            args: Prisma.communes2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communes2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          findMany: {
            args: Prisma.communes2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>[]
          }
          create: {
            args: Prisma.communes2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          createMany: {
            args: Prisma.communes2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.communes2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          update: {
            args: Prisma.communes2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          deleteMany: {
            args: Prisma.communes2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.communes2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.communes2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          aggregate: {
            args: Prisma.Communes2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCommunes2>
          }
          groupBy: {
            args: Prisma.communes2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<Communes2GroupByOutputType>[]
          }
          count: {
            args: Prisma.communes2CountArgs<ExtArgs>,
            result: $Utils.Optional<Communes2CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Model spatial_ref_sys
   */

  export type AggregateSpatial_ref_sys = {
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  export type Spatial_ref_sysAvgAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysSumAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysMinAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysMaxAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysCountAggregateOutputType = {
    srid: number
    auth_name: number
    auth_srid: number
    srtext: number
    proj4text: number
    _all: number
  }


  export type Spatial_ref_sysAvgAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysSumAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysMinAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysMaxAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysCountAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
    _all?: true
  }

  export type Spatial_ref_sysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to aggregate.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spatial_ref_sys
    **/
    _count?: true | Spatial_ref_sysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spatial_ref_sysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spatial_ref_sysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spatial_ref_sysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type GetSpatial_ref_sysAggregateType<T extends Spatial_ref_sysAggregateArgs> = {
        [P in keyof T & keyof AggregateSpatial_ref_sys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
      : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
  }




  export type spatial_ref_sysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spatial_ref_sysWhereInput
    orderBy?: spatial_ref_sysOrderByWithAggregationInput | spatial_ref_sysOrderByWithAggregationInput[]
    by: Spatial_ref_sysScalarFieldEnum[] | Spatial_ref_sysScalarFieldEnum
    having?: spatial_ref_sysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spatial_ref_sysCountAggregateInputType | true
    _avg?: Spatial_ref_sysAvgAggregateInputType
    _sum?: Spatial_ref_sysSumAggregateInputType
    _min?: Spatial_ref_sysMinAggregateInputType
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type Spatial_ref_sysGroupByOutputType = {
    srid: number
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  type GetSpatial_ref_sysGroupByPayload<T extends spatial_ref_sysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spatial_ref_sysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spatial_ref_sysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
            : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
        }
      >
    >


  export type spatial_ref_sysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectScalar = {
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }



  export type $spatial_ref_sysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spatial_ref_sys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      srid: number
      auth_name: string | null
      auth_srid: number | null
      srtext: string | null
      proj4text: string | null
    }, ExtArgs["result"]["spatial_ref_sys"]>
    composites: {}
  }


  type spatial_ref_sysGetPayload<S extends boolean | null | undefined | spatial_ref_sysDefaultArgs> = $Result.GetResult<Prisma.$spatial_ref_sysPayload, S>

  type spatial_ref_sysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<spatial_ref_sysFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Spatial_ref_sysCountAggregateInputType | true
    }

  export interface spatial_ref_sysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spatial_ref_sys'], meta: { name: 'spatial_ref_sys' } }
    /**
     * Find zero or one Spatial_ref_sys that matches the filter.
     * @param {spatial_ref_sysFindUniqueArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends spatial_ref_sysFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Spatial_ref_sys that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {spatial_ref_sysFindUniqueOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends spatial_ref_sysFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Spatial_ref_sys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
     * 
     * // Get first 10 Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany({ take: 10 })
     * 
     * // Only select the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.findMany({ select: { srid: true } })
     * 
    **/
    findMany<T extends spatial_ref_sysFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Spatial_ref_sys.
     * @param {spatial_ref_sysCreateArgs} args - Arguments to create a Spatial_ref_sys.
     * @example
     * // Create one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.create({
     *   data: {
     *     // ... data to create a Spatial_ref_sys
     *   }
     * })
     * 
    **/
    create<T extends spatial_ref_sysCreateArgs<ExtArgs>>(
      args: SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Spatial_ref_sys.
     *     @param {spatial_ref_sysCreateManyArgs} args - Arguments to create many Spatial_ref_sys.
     *     @example
     *     // Create many Spatial_ref_sys
     *     const spatial_ref_sys = await prisma.spatial_ref_sys.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends spatial_ref_sysCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteArgs} args - Arguments to delete one Spatial_ref_sys.
     * @example
     * // Delete one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.delete({
     *   where: {
     *     // ... filter to delete one Spatial_ref_sys
     *   }
     * })
     * 
    **/
    delete<T extends spatial_ref_sysDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpdateArgs} args - Arguments to update one Spatial_ref_sys.
     * @example
     * // Update one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends spatial_ref_sysUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteManyArgs} args - Arguments to filter Spatial_ref_sys to delete.
     * @example
     * // Delete a few Spatial_ref_sys
     * const { count } = await prisma.spatial_ref_sys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends spatial_ref_sysDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends spatial_ref_sysUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpsertArgs} args - Arguments to update or create a Spatial_ref_sys.
     * @example
     * // Update or create a Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.upsert({
     *   create: {
     *     // ... data to create a Spatial_ref_sys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to update
     *   }
     * })
    **/
    upsert<T extends spatial_ref_sysUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>
    ): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysCountArgs} args - Arguments to filter Spatial_ref_sys to count.
     * @example
     * // Count the number of Spatial_ref_sys
     * const count = await prisma.spatial_ref_sys.count({
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to count
     *   }
     * })
    **/
    count<T extends spatial_ref_sysCountArgs>(
      args?: Subset<T, spatial_ref_sysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spatial_ref_sysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spatial_ref_sysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Spatial_ref_sysAggregateArgs>(args: Subset<T, Spatial_ref_sysAggregateArgs>): Prisma.PrismaPromise<GetSpatial_ref_sysAggregateType<T>>

    /**
     * Group by Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysGroupByArgs} args - Group by arguments.
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
      T extends spatial_ref_sysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spatial_ref_sysGroupByArgs['orderBy'] }
        : { orderBy?: spatial_ref_sysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spatial_ref_sysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpatial_ref_sysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spatial_ref_sys model
   */
  readonly fields: spatial_ref_sysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spatial_ref_sys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spatial_ref_sysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the spatial_ref_sys model
   */ 
  interface spatial_ref_sysFieldRefs {
    readonly srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly auth_name: FieldRef<"spatial_ref_sys", 'String'>
    readonly auth_srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly srtext: FieldRef<"spatial_ref_sys", 'String'>
    readonly proj4text: FieldRef<"spatial_ref_sys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spatial_ref_sys findUnique
   */
  export type spatial_ref_sysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findUniqueOrThrow
   */
  export type spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findFirst
   */
  export type spatial_ref_sysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findFirstOrThrow
   */
  export type spatial_ref_sysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findMany
   */
  export type spatial_ref_sysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys create
   */
  export type spatial_ref_sysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * The data needed to create a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
  }

  /**
   * spatial_ref_sys createMany
   */
  export type spatial_ref_sysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys update
   */
  export type spatial_ref_sysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * The data needed to update a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
    /**
     * Choose, which spatial_ref_sys to update.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys updateMany
   */
  export type spatial_ref_sysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
  }

  /**
   * spatial_ref_sys upsert
   */
  export type spatial_ref_sysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * The filter to search for the spatial_ref_sys to update in case it exists.
     */
    where: spatial_ref_sysWhereUniqueInput
    /**
     * In case the spatial_ref_sys found by the `where` argument doesn't exist, create a new spatial_ref_sys with this data.
     */
    create: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
    /**
     * In case the spatial_ref_sys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
  }

  /**
   * spatial_ref_sys delete
   */
  export type spatial_ref_sysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Filter which spatial_ref_sys to delete.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys deleteMany
   */
  export type spatial_ref_sysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to delete
     */
    where?: spatial_ref_sysWhereInput
  }

  /**
   * spatial_ref_sys without action
   */
  export type spatial_ref_sysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
  }


  /**
   * Model communes_precarite
   */

  export type AggregateCommunes_precarite = {
    _count: Communes_precariteCountAggregateOutputType | null
    _avg: Communes_precariteAvgAggregateOutputType | null
    _sum: Communes_precariteSumAggregateOutputType | null
    _min: Communes_precariteMinAggregateOutputType | null
    _max: Communes_precariteMaxAggregateOutputType | null
  }

  export type Communes_precariteAvgAggregateOutputType = {
    pk: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
  }

  export type Communes_precariteSumAggregateOutputType = {
    pk: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
  }

  export type Communes_precariteMinAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    epci: string | null
  }

  export type Communes_precariteMaxAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    epci: string | null
  }

  export type Communes_precariteCountAggregateOutputType = {
    pk: number
    code_commune: number
    tee_log: number
    tee_mob: number
    precarite_logement: number
    epci: number
    _all: number
  }


  export type Communes_precariteAvgAggregateInputType = {
    pk?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
  }

  export type Communes_precariteSumAggregateInputType = {
    pk?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
  }

  export type Communes_precariteMinAggregateInputType = {
    pk?: true
    code_commune?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    epci?: true
  }

  export type Communes_precariteMaxAggregateInputType = {
    pk?: true
    code_commune?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    epci?: true
  }

  export type Communes_precariteCountAggregateInputType = {
    pk?: true
    code_commune?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    epci?: true
    _all?: true
  }

  export type Communes_precariteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes_precarite to aggregate.
     */
    where?: communes_precariteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_precarites to fetch.
     */
    orderBy?: communes_precariteOrderByWithRelationInput | communes_precariteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communes_precariteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_precarites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_precarites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communes_precarites
    **/
    _count?: true | Communes_precariteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Communes_precariteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Communes_precariteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Communes_precariteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Communes_precariteMaxAggregateInputType
  }

  export type GetCommunes_precariteAggregateType<T extends Communes_precariteAggregateArgs> = {
        [P in keyof T & keyof AggregateCommunes_precarite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunes_precarite[P]>
      : GetScalarType<T[P], AggregateCommunes_precarite[P]>
  }




  export type communes_precariteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communes_precariteWhereInput
    orderBy?: communes_precariteOrderByWithAggregationInput | communes_precariteOrderByWithAggregationInput[]
    by: Communes_precariteScalarFieldEnum[] | Communes_precariteScalarFieldEnum
    having?: communes_precariteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Communes_precariteCountAggregateInputType | true
    _avg?: Communes_precariteAvgAggregateInputType
    _sum?: Communes_precariteSumAggregateInputType
    _min?: Communes_precariteMinAggregateInputType
    _max?: Communes_precariteMaxAggregateInputType
  }

  export type Communes_precariteGroupByOutputType = {
    pk: number
    code_commune: string | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    epci: string | null
    _count: Communes_precariteCountAggregateOutputType | null
    _avg: Communes_precariteAvgAggregateOutputType | null
    _sum: Communes_precariteSumAggregateOutputType | null
    _min: Communes_precariteMinAggregateOutputType | null
    _max: Communes_precariteMaxAggregateOutputType | null
  }

  type GetCommunes_precariteGroupByPayload<T extends communes_precariteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Communes_precariteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Communes_precariteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Communes_precariteGroupByOutputType[P]>
            : GetScalarType<T[P], Communes_precariteGroupByOutputType[P]>
        }
      >
    >


  export type communes_precariteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    code_commune?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    epci?: boolean
  }, ExtArgs["result"]["communes_precarite"]>

  export type communes_precariteSelectScalar = {
    pk?: boolean
    code_commune?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    epci?: boolean
  }



  export type $communes_precaritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communes_precarite"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      code_commune: string | null
      tee_log: number | null
      tee_mob: number | null
      precarite_logement: number | null
      epci: string | null
    }, ExtArgs["result"]["communes_precarite"]>
    composites: {}
  }


  type communes_precariteGetPayload<S extends boolean | null | undefined | communes_precariteDefaultArgs> = $Result.GetResult<Prisma.$communes_precaritePayload, S>

  type communes_precariteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<communes_precariteFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Communes_precariteCountAggregateInputType | true
    }

  export interface communes_precariteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communes_precarite'], meta: { name: 'communes_precarite' } }
    /**
     * Find zero or one Communes_precarite that matches the filter.
     * @param {communes_precariteFindUniqueArgs} args - Arguments to find a Communes_precarite
     * @example
     * // Get one Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends communes_precariteFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, communes_precariteFindUniqueArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Communes_precarite that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {communes_precariteFindUniqueOrThrowArgs} args - Arguments to find a Communes_precarite
     * @example
     * // Get one Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends communes_precariteFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, communes_precariteFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Communes_precarite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteFindFirstArgs} args - Arguments to find a Communes_precarite
     * @example
     * // Get one Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends communes_precariteFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, communes_precariteFindFirstArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Communes_precarite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteFindFirstOrThrowArgs} args - Arguments to find a Communes_precarite
     * @example
     * // Get one Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends communes_precariteFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, communes_precariteFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communes_precarites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communes_precarites
     * const communes_precarites = await prisma.communes_precarite.findMany()
     * 
     * // Get first 10 Communes_precarites
     * const communes_precarites = await prisma.communes_precarite.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const communes_precariteWithPkOnly = await prisma.communes_precarite.findMany({ select: { pk: true } })
     * 
    **/
    findMany<T extends communes_precariteFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communes_precariteFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Communes_precarite.
     * @param {communes_precariteCreateArgs} args - Arguments to create a Communes_precarite.
     * @example
     * // Create one Communes_precarite
     * const Communes_precarite = await prisma.communes_precarite.create({
     *   data: {
     *     // ... data to create a Communes_precarite
     *   }
     * })
     * 
    **/
    create<T extends communes_precariteCreateArgs<ExtArgs>>(
      args: SelectSubset<T, communes_precariteCreateArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communes_precarites.
     *     @param {communes_precariteCreateManyArgs} args - Arguments to create many Communes_precarites.
     *     @example
     *     // Create many Communes_precarites
     *     const communes_precarite = await prisma.communes_precarite.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends communes_precariteCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communes_precariteCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Communes_precarite.
     * @param {communes_precariteDeleteArgs} args - Arguments to delete one Communes_precarite.
     * @example
     * // Delete one Communes_precarite
     * const Communes_precarite = await prisma.communes_precarite.delete({
     *   where: {
     *     // ... filter to delete one Communes_precarite
     *   }
     * })
     * 
    **/
    delete<T extends communes_precariteDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, communes_precariteDeleteArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Communes_precarite.
     * @param {communes_precariteUpdateArgs} args - Arguments to update one Communes_precarite.
     * @example
     * // Update one Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends communes_precariteUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, communes_precariteUpdateArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communes_precarites.
     * @param {communes_precariteDeleteManyArgs} args - Arguments to filter Communes_precarites to delete.
     * @example
     * // Delete a few Communes_precarites
     * const { count } = await prisma.communes_precarite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends communes_precariteDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communes_precariteDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes_precarites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communes_precarites
     * const communes_precarite = await prisma.communes_precarite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends communes_precariteUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, communes_precariteUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Communes_precarite.
     * @param {communes_precariteUpsertArgs} args - Arguments to update or create a Communes_precarite.
     * @example
     * // Update or create a Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.upsert({
     *   create: {
     *     // ... data to create a Communes_precarite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communes_precarite we want to update
     *   }
     * })
    **/
    upsert<T extends communes_precariteUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, communes_precariteUpsertArgs<ExtArgs>>
    ): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Communes_precarites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteCountArgs} args - Arguments to filter Communes_precarites to count.
     * @example
     * // Count the number of Communes_precarites
     * const count = await prisma.communes_precarite.count({
     *   where: {
     *     // ... the filter for the Communes_precarites we want to count
     *   }
     * })
    **/
    count<T extends communes_precariteCountArgs>(
      args?: Subset<T, communes_precariteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Communes_precariteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communes_precarite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Communes_precariteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Communes_precariteAggregateArgs>(args: Subset<T, Communes_precariteAggregateArgs>): Prisma.PrismaPromise<GetCommunes_precariteAggregateType<T>>

    /**
     * Group by Communes_precarite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteGroupByArgs} args - Group by arguments.
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
      T extends communes_precariteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communes_precariteGroupByArgs['orderBy'] }
        : { orderBy?: communes_precariteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, communes_precariteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunes_precariteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communes_precarite model
   */
  readonly fields: communes_precariteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communes_precarite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communes_precariteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the communes_precarite model
   */ 
  interface communes_precariteFieldRefs {
    readonly pk: FieldRef<"communes_precarite", 'Int'>
    readonly code_commune: FieldRef<"communes_precarite", 'String'>
    readonly tee_log: FieldRef<"communes_precarite", 'Float'>
    readonly tee_mob: FieldRef<"communes_precarite", 'Float'>
    readonly precarite_logement: FieldRef<"communes_precarite", 'Float'>
    readonly epci: FieldRef<"communes_precarite", 'String'>
  }
    

  // Custom InputTypes
  /**
   * communes_precarite findUnique
   */
  export type communes_precariteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * Filter, which communes_precarite to fetch.
     */
    where: communes_precariteWhereUniqueInput
  }

  /**
   * communes_precarite findUniqueOrThrow
   */
  export type communes_precariteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * Filter, which communes_precarite to fetch.
     */
    where: communes_precariteWhereUniqueInput
  }

  /**
   * communes_precarite findFirst
   */
  export type communes_precariteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * Filter, which communes_precarite to fetch.
     */
    where?: communes_precariteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_precarites to fetch.
     */
    orderBy?: communes_precariteOrderByWithRelationInput | communes_precariteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes_precarites.
     */
    cursor?: communes_precariteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_precarites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_precarites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes_precarites.
     */
    distinct?: Communes_precariteScalarFieldEnum | Communes_precariteScalarFieldEnum[]
  }

  /**
   * communes_precarite findFirstOrThrow
   */
  export type communes_precariteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * Filter, which communes_precarite to fetch.
     */
    where?: communes_precariteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_precarites to fetch.
     */
    orderBy?: communes_precariteOrderByWithRelationInput | communes_precariteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes_precarites.
     */
    cursor?: communes_precariteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_precarites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_precarites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes_precarites.
     */
    distinct?: Communes_precariteScalarFieldEnum | Communes_precariteScalarFieldEnum[]
  }

  /**
   * communes_precarite findMany
   */
  export type communes_precariteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * Filter, which communes_precarites to fetch.
     */
    where?: communes_precariteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes_precarites to fetch.
     */
    orderBy?: communes_precariteOrderByWithRelationInput | communes_precariteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communes_precarites.
     */
    cursor?: communes_precariteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes_precarites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes_precarites.
     */
    skip?: number
    distinct?: Communes_precariteScalarFieldEnum | Communes_precariteScalarFieldEnum[]
  }

  /**
   * communes_precarite create
   */
  export type communes_precariteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * The data needed to create a communes_precarite.
     */
    data?: XOR<communes_precariteCreateInput, communes_precariteUncheckedCreateInput>
  }

  /**
   * communes_precarite createMany
   */
  export type communes_precariteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many communes_precarites.
     */
    data: communes_precariteCreateManyInput | communes_precariteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communes_precarite update
   */
  export type communes_precariteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * The data needed to update a communes_precarite.
     */
    data: XOR<communes_precariteUpdateInput, communes_precariteUncheckedUpdateInput>
    /**
     * Choose, which communes_precarite to update.
     */
    where: communes_precariteWhereUniqueInput
  }

  /**
   * communes_precarite updateMany
   */
  export type communes_precariteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communes_precarites.
     */
    data: XOR<communes_precariteUpdateManyMutationInput, communes_precariteUncheckedUpdateManyInput>
    /**
     * Filter which communes_precarites to update
     */
    where?: communes_precariteWhereInput
  }

  /**
   * communes_precarite upsert
   */
  export type communes_precariteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * The filter to search for the communes_precarite to update in case it exists.
     */
    where: communes_precariteWhereUniqueInput
    /**
     * In case the communes_precarite found by the `where` argument doesn't exist, create a new communes_precarite with this data.
     */
    create: XOR<communes_precariteCreateInput, communes_precariteUncheckedCreateInput>
    /**
     * In case the communes_precarite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<communes_precariteUpdateInput, communes_precariteUncheckedUpdateInput>
  }

  /**
   * communes_precarite delete
   */
  export type communes_precariteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
    /**
     * Filter which communes_precarite to delete.
     */
    where: communes_precariteWhereUniqueInput
  }

  /**
   * communes_precarite deleteMany
   */
  export type communes_precariteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes_precarites to delete
     */
    where?: communes_precariteWhereInput
  }

  /**
   * communes_precarite without action
   */
  export type communes_precariteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelect<ExtArgs> | null
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
    reg: number | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesSumAggregateOutputType = {
    pk: number | null
    reg: number | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesMinAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    reg: number | null
    dep: string | null
    libelle_epci: string | null
    epci: string | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesMaxAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    reg: number | null
    dep: string | null
    libelle_epci: string | null
    epci: string | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type CommunesCountAggregateOutputType = {
    pk: number
    code_commune: number
    libelle_commune: number
    reg: number
    dep: number
    libelle_epci: number
    epci: number
    densite_bati: number
    precarite_logement: number
    _all: number
  }


  export type CommunesAvgAggregateInputType = {
    pk?: true
    reg?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesSumAggregateInputType = {
    pk?: true
    reg?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesMinAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    reg?: true
    dep?: true
    libelle_epci?: true
    epci?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesMaxAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    reg?: true
    dep?: true
    libelle_epci?: true
    epci?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type CommunesCountAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    reg?: true
    dep?: true
    libelle_epci?: true
    epci?: true
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
    reg: number | null
    dep: string | null
    libelle_epci: string | null
    epci: string | null
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
    reg?: boolean
    dep?: boolean
    libelle_epci?: boolean
    epci?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
  }, ExtArgs["result"]["communes"]>

  export type communesSelectScalar = {
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    reg?: boolean
    dep?: boolean
    libelle_epci?: boolean
    epci?: boolean
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
      reg: number | null
      dep: string | null
      libelle_epci: string | null
      epci: string | null
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
    **/
    findUnique<T extends communesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, communesFindUniqueArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Communes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {communesFindUniqueOrThrowArgs} args - Arguments to find a Communes
     * @example
     * // Get one Communes
     * const communes = await prisma.communes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends communesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, communesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends communesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, communesFindFirstArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends communesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, communesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communesFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends communesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends communesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, communesCreateArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communes.
     *     @param {communesCreateManyArgs} args - Arguments to create many Communes.
     *     @example
     *     // Create many Communes
     *     const communes = await prisma.communes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends communesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends communesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, communesDeleteArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends communesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, communesUpdateArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends communesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends communesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, communesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends communesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, communesUpsertArgs<ExtArgs>>
    ): Prisma__communesClient<$Result.GetResult<Prisma.$communesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the communes model
   */ 
  interface communesFieldRefs {
    readonly pk: FieldRef<"communes", 'Int'>
    readonly code_commune: FieldRef<"communes", 'String'>
    readonly libelle_commune: FieldRef<"communes", 'String'>
    readonly reg: FieldRef<"communes", 'Float'>
    readonly dep: FieldRef<"communes", 'String'>
    readonly libelle_epci: FieldRef<"communes", 'String'>
    readonly epci: FieldRef<"communes", 'String'>
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
   * Model clc_2018_2
   */

  export type AggregateClc_2018_2 = {
    _count: Clc_2018_2CountAggregateOutputType | null
    _avg: Clc_2018_2AvgAggregateOutputType | null
    _sum: Clc_2018_2SumAggregateOutputType | null
    _min: Clc_2018_2MinAggregateOutputType | null
    _max: Clc_2018_2MaxAggregateOutputType | null
  }

  export type Clc_2018_2AvgAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_2018_2SumAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_2018_2MinAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
    label3: string | null
    centroid: string | null
  }

  export type Clc_2018_2MaxAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
    label3: string | null
    centroid: string | null
  }

  export type Clc_2018_2CountAggregateOutputType = {
    pk: number
    area_ha: number
    shape_length: number
    shape_area: number
    label3: number
    centroid: number
    _all: number
  }


  export type Clc_2018_2AvgAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_2018_2SumAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_2018_2MinAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
    label3?: true
    centroid?: true
  }

  export type Clc_2018_2MaxAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
    label3?: true
    centroid?: true
  }

  export type Clc_2018_2CountAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
    label3?: true
    centroid?: true
    _all?: true
  }

  export type Clc_2018_2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_2018_2 to aggregate.
     */
    where?: clc_2018_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018_2s to fetch.
     */
    orderBy?: clc_2018_2OrderByWithRelationInput | clc_2018_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clc_2018_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clc_2018_2s
    **/
    _count?: true | Clc_2018_2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Clc_2018_2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Clc_2018_2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clc_2018_2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clc_2018_2MaxAggregateInputType
  }

  export type GetClc_2018_2AggregateType<T extends Clc_2018_2AggregateArgs> = {
        [P in keyof T & keyof AggregateClc_2018_2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClc_2018_2[P]>
      : GetScalarType<T[P], AggregateClc_2018_2[P]>
  }




  export type clc_2018_2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clc_2018_2WhereInput
    orderBy?: clc_2018_2OrderByWithAggregationInput | clc_2018_2OrderByWithAggregationInput[]
    by: Clc_2018_2ScalarFieldEnum[] | Clc_2018_2ScalarFieldEnum
    having?: clc_2018_2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clc_2018_2CountAggregateInputType | true
    _avg?: Clc_2018_2AvgAggregateInputType
    _sum?: Clc_2018_2SumAggregateInputType
    _min?: Clc_2018_2MinAggregateInputType
    _max?: Clc_2018_2MaxAggregateInputType
  }

  export type Clc_2018_2GroupByOutputType = {
    pk: number
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
    label3: string | null
    centroid: string | null
    _count: Clc_2018_2CountAggregateOutputType | null
    _avg: Clc_2018_2AvgAggregateOutputType | null
    _sum: Clc_2018_2SumAggregateOutputType | null
    _min: Clc_2018_2MinAggregateOutputType | null
    _max: Clc_2018_2MaxAggregateOutputType | null
  }

  type GetClc_2018_2GroupByPayload<T extends clc_2018_2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clc_2018_2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clc_2018_2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clc_2018_2GroupByOutputType[P]>
            : GetScalarType<T[P], Clc_2018_2GroupByOutputType[P]>
        }
      >
    >


  export type clc_2018_2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    area_ha?: boolean
    shape_length?: boolean
    shape_area?: boolean
    label3?: boolean
    centroid?: boolean
  }, ExtArgs["result"]["clc_2018_2"]>

  export type clc_2018_2SelectScalar = {
    pk?: boolean
    area_ha?: boolean
    shape_length?: boolean
    shape_area?: boolean
    label3?: boolean
    centroid?: boolean
  }



  export type $clc_2018_2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clc_2018_2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      area_ha: number | null
      shape_length: number | null
      shape_area: number | null
      label3: string | null
      centroid: string | null
    }, ExtArgs["result"]["clc_2018_2"]>
    composites: {}
  }


  type clc_2018_2GetPayload<S extends boolean | null | undefined | clc_2018_2DefaultArgs> = $Result.GetResult<Prisma.$clc_2018_2Payload, S>

  type clc_2018_2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clc_2018_2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Clc_2018_2CountAggregateInputType | true
    }

  export interface clc_2018_2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clc_2018_2'], meta: { name: 'clc_2018_2' } }
    /**
     * Find zero or one Clc_2018_2 that matches the filter.
     * @param {clc_2018_2FindUniqueArgs} args - Arguments to find a Clc_2018_2
     * @example
     * // Get one Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clc_2018_2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clc_2018_2FindUniqueArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clc_2018_2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clc_2018_2FindUniqueOrThrowArgs} args - Arguments to find a Clc_2018_2
     * @example
     * // Get one Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clc_2018_2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_2018_2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clc_2018_2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2FindFirstArgs} args - Arguments to find a Clc_2018_2
     * @example
     * // Get one Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clc_2018_2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_2018_2FindFirstArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clc_2018_2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2FindFirstOrThrowArgs} args - Arguments to find a Clc_2018_2
     * @example
     * // Get one Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clc_2018_2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_2018_2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clc_2018_2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clc_2018_2s
     * const clc_2018_2s = await prisma.clc_2018_2.findMany()
     * 
     * // Get first 10 Clc_2018_2s
     * const clc_2018_2s = await prisma.clc_2018_2.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const clc_2018_2WithPkOnly = await prisma.clc_2018_2.findMany({ select: { pk: true } })
     * 
    **/
    findMany<T extends clc_2018_2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_2018_2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clc_2018_2.
     * @param {clc_2018_2CreateArgs} args - Arguments to create a Clc_2018_2.
     * @example
     * // Create one Clc_2018_2
     * const Clc_2018_2 = await prisma.clc_2018_2.create({
     *   data: {
     *     // ... data to create a Clc_2018_2
     *   }
     * })
     * 
    **/
    create<T extends clc_2018_2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, clc_2018_2CreateArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clc_2018_2s.
     *     @param {clc_2018_2CreateManyArgs} args - Arguments to create many Clc_2018_2s.
     *     @example
     *     // Create many Clc_2018_2s
     *     const clc_2018_2 = await prisma.clc_2018_2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clc_2018_2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_2018_2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clc_2018_2.
     * @param {clc_2018_2DeleteArgs} args - Arguments to delete one Clc_2018_2.
     * @example
     * // Delete one Clc_2018_2
     * const Clc_2018_2 = await prisma.clc_2018_2.delete({
     *   where: {
     *     // ... filter to delete one Clc_2018_2
     *   }
     * })
     * 
    **/
    delete<T extends clc_2018_2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clc_2018_2DeleteArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clc_2018_2.
     * @param {clc_2018_2UpdateArgs} args - Arguments to update one Clc_2018_2.
     * @example
     * // Update one Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clc_2018_2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clc_2018_2UpdateArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clc_2018_2s.
     * @param {clc_2018_2DeleteManyArgs} args - Arguments to filter Clc_2018_2s to delete.
     * @example
     * // Delete a few Clc_2018_2s
     * const { count } = await prisma.clc_2018_2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clc_2018_2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_2018_2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clc_2018_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clc_2018_2s
     * const clc_2018_2 = await prisma.clc_2018_2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clc_2018_2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clc_2018_2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clc_2018_2.
     * @param {clc_2018_2UpsertArgs} args - Arguments to update or create a Clc_2018_2.
     * @example
     * // Update or create a Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.upsert({
     *   create: {
     *     // ... data to create a Clc_2018_2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clc_2018_2 we want to update
     *   }
     * })
    **/
    upsert<T extends clc_2018_2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clc_2018_2UpsertArgs<ExtArgs>>
    ): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clc_2018_2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2CountArgs} args - Arguments to filter Clc_2018_2s to count.
     * @example
     * // Count the number of Clc_2018_2s
     * const count = await prisma.clc_2018_2.count({
     *   where: {
     *     // ... the filter for the Clc_2018_2s we want to count
     *   }
     * })
    **/
    count<T extends clc_2018_2CountArgs>(
      args?: Subset<T, clc_2018_2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clc_2018_2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clc_2018_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clc_2018_2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Clc_2018_2AggregateArgs>(args: Subset<T, Clc_2018_2AggregateArgs>): Prisma.PrismaPromise<GetClc_2018_2AggregateType<T>>

    /**
     * Group by Clc_2018_2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2GroupByArgs} args - Group by arguments.
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
      T extends clc_2018_2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clc_2018_2GroupByArgs['orderBy'] }
        : { orderBy?: clc_2018_2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clc_2018_2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClc_2018_2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clc_2018_2 model
   */
  readonly fields: clc_2018_2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clc_2018_2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clc_2018_2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the clc_2018_2 model
   */ 
  interface clc_2018_2FieldRefs {
    readonly pk: FieldRef<"clc_2018_2", 'Int'>
    readonly area_ha: FieldRef<"clc_2018_2", 'Float'>
    readonly shape_length: FieldRef<"clc_2018_2", 'Float'>
    readonly shape_area: FieldRef<"clc_2018_2", 'Float'>
    readonly label3: FieldRef<"clc_2018_2", 'String'>
    readonly centroid: FieldRef<"clc_2018_2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clc_2018_2 findUnique
   */
  export type clc_2018_2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * Filter, which clc_2018_2 to fetch.
     */
    where: clc_2018_2WhereUniqueInput
  }

  /**
   * clc_2018_2 findUniqueOrThrow
   */
  export type clc_2018_2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * Filter, which clc_2018_2 to fetch.
     */
    where: clc_2018_2WhereUniqueInput
  }

  /**
   * clc_2018_2 findFirst
   */
  export type clc_2018_2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * Filter, which clc_2018_2 to fetch.
     */
    where?: clc_2018_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018_2s to fetch.
     */
    orderBy?: clc_2018_2OrderByWithRelationInput | clc_2018_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_2018_2s.
     */
    cursor?: clc_2018_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_2018_2s.
     */
    distinct?: Clc_2018_2ScalarFieldEnum | Clc_2018_2ScalarFieldEnum[]
  }

  /**
   * clc_2018_2 findFirstOrThrow
   */
  export type clc_2018_2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * Filter, which clc_2018_2 to fetch.
     */
    where?: clc_2018_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018_2s to fetch.
     */
    orderBy?: clc_2018_2OrderByWithRelationInput | clc_2018_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_2018_2s.
     */
    cursor?: clc_2018_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018_2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_2018_2s.
     */
    distinct?: Clc_2018_2ScalarFieldEnum | Clc_2018_2ScalarFieldEnum[]
  }

  /**
   * clc_2018_2 findMany
   */
  export type clc_2018_2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * Filter, which clc_2018_2s to fetch.
     */
    where?: clc_2018_2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018_2s to fetch.
     */
    orderBy?: clc_2018_2OrderByWithRelationInput | clc_2018_2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clc_2018_2s.
     */
    cursor?: clc_2018_2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018_2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018_2s.
     */
    skip?: number
    distinct?: Clc_2018_2ScalarFieldEnum | Clc_2018_2ScalarFieldEnum[]
  }

  /**
   * clc_2018_2 create
   */
  export type clc_2018_2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * The data needed to create a clc_2018_2.
     */
    data?: XOR<clc_2018_2CreateInput, clc_2018_2UncheckedCreateInput>
  }

  /**
   * clc_2018_2 createMany
   */
  export type clc_2018_2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clc_2018_2s.
     */
    data: clc_2018_2CreateManyInput | clc_2018_2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clc_2018_2 update
   */
  export type clc_2018_2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * The data needed to update a clc_2018_2.
     */
    data: XOR<clc_2018_2UpdateInput, clc_2018_2UncheckedUpdateInput>
    /**
     * Choose, which clc_2018_2 to update.
     */
    where: clc_2018_2WhereUniqueInput
  }

  /**
   * clc_2018_2 updateMany
   */
  export type clc_2018_2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clc_2018_2s.
     */
    data: XOR<clc_2018_2UpdateManyMutationInput, clc_2018_2UncheckedUpdateManyInput>
    /**
     * Filter which clc_2018_2s to update
     */
    where?: clc_2018_2WhereInput
  }

  /**
   * clc_2018_2 upsert
   */
  export type clc_2018_2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * The filter to search for the clc_2018_2 to update in case it exists.
     */
    where: clc_2018_2WhereUniqueInput
    /**
     * In case the clc_2018_2 found by the `where` argument doesn't exist, create a new clc_2018_2 with this data.
     */
    create: XOR<clc_2018_2CreateInput, clc_2018_2UncheckedCreateInput>
    /**
     * In case the clc_2018_2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clc_2018_2UpdateInput, clc_2018_2UncheckedUpdateInput>
  }

  /**
   * clc_2018_2 delete
   */
  export type clc_2018_2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
    /**
     * Filter which clc_2018_2 to delete.
     */
    where: clc_2018_2WhereUniqueInput
  }

  /**
   * clc_2018_2 deleteMany
   */
  export type clc_2018_2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_2018_2s to delete
     */
    where?: clc_2018_2WhereInput
  }

  /**
   * clc_2018_2 without action
   */
  export type clc_2018_2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2Select<ExtArgs> | null
  }


  /**
   * Model communes2
   */

  export type AggregateCommunes2 = {
    _count: Communes2CountAggregateOutputType | null
    _avg: Communes2AvgAggregateOutputType | null
    _sum: Communes2SumAggregateOutputType | null
    _min: Communes2MinAggregateOutputType | null
    _max: Communes2MaxAggregateOutputType | null
  }

  export type Communes2AvgAggregateOutputType = {
    pk: number | null
    reg: number | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type Communes2SumAggregateOutputType = {
    pk: number | null
    reg: number | null
    densite_bati: number | null
    precarite_logement: number | null
  }

  export type Communes2MinAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    reg: number | null
    dep: string | null
    libelle_epci: string | null
    epci: string | null
    densite_bati: number | null
    precarite_logement: number | null
    coordinates: string | null
  }

  export type Communes2MaxAggregateOutputType = {
    pk: number | null
    code_commune: string | null
    libelle_commune: string | null
    reg: number | null
    dep: string | null
    libelle_epci: string | null
    epci: string | null
    densite_bati: number | null
    precarite_logement: number | null
    coordinates: string | null
  }

  export type Communes2CountAggregateOutputType = {
    pk: number
    code_commune: number
    libelle_commune: number
    reg: number
    dep: number
    libelle_epci: number
    epci: number
    densite_bati: number
    precarite_logement: number
    coordinates: number
    _all: number
  }


  export type Communes2AvgAggregateInputType = {
    pk?: true
    reg?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type Communes2SumAggregateInputType = {
    pk?: true
    reg?: true
    densite_bati?: true
    precarite_logement?: true
  }

  export type Communes2MinAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    reg?: true
    dep?: true
    libelle_epci?: true
    epci?: true
    densite_bati?: true
    precarite_logement?: true
    coordinates?: true
  }

  export type Communes2MaxAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    reg?: true
    dep?: true
    libelle_epci?: true
    epci?: true
    densite_bati?: true
    precarite_logement?: true
    coordinates?: true
  }

  export type Communes2CountAggregateInputType = {
    pk?: true
    code_commune?: true
    libelle_commune?: true
    reg?: true
    dep?: true
    libelle_epci?: true
    epci?: true
    densite_bati?: true
    precarite_logement?: true
    coordinates?: true
    _all?: true
  }

  export type Communes2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes2 to aggregate.
     */
    where?: communes2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes2s to fetch.
     */
    orderBy?: communes2OrderByWithRelationInput | communes2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: communes2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned communes2s
    **/
    _count?: true | Communes2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Communes2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Communes2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Communes2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Communes2MaxAggregateInputType
  }

  export type GetCommunes2AggregateType<T extends Communes2AggregateArgs> = {
        [P in keyof T & keyof AggregateCommunes2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommunes2[P]>
      : GetScalarType<T[P], AggregateCommunes2[P]>
  }




  export type communes2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: communes2WhereInput
    orderBy?: communes2OrderByWithAggregationInput | communes2OrderByWithAggregationInput[]
    by: Communes2ScalarFieldEnum[] | Communes2ScalarFieldEnum
    having?: communes2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Communes2CountAggregateInputType | true
    _avg?: Communes2AvgAggregateInputType
    _sum?: Communes2SumAggregateInputType
    _min?: Communes2MinAggregateInputType
    _max?: Communes2MaxAggregateInputType
  }

  export type Communes2GroupByOutputType = {
    pk: number
    code_commune: string | null
    libelle_commune: string | null
    reg: number | null
    dep: string | null
    libelle_epci: string | null
    epci: string | null
    densite_bati: number | null
    precarite_logement: number | null
    coordinates: string | null
    _count: Communes2CountAggregateOutputType | null
    _avg: Communes2AvgAggregateOutputType | null
    _sum: Communes2SumAggregateOutputType | null
    _min: Communes2MinAggregateOutputType | null
    _max: Communes2MaxAggregateOutputType | null
  }

  type GetCommunes2GroupByPayload<T extends communes2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Communes2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Communes2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Communes2GroupByOutputType[P]>
            : GetScalarType<T[P], Communes2GroupByOutputType[P]>
        }
      >
    >


  export type communes2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    reg?: boolean
    dep?: boolean
    libelle_epci?: boolean
    epci?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
    coordinates?: boolean
  }, ExtArgs["result"]["communes2"]>

  export type communes2SelectScalar = {
    pk?: boolean
    code_commune?: boolean
    libelle_commune?: boolean
    reg?: boolean
    dep?: boolean
    libelle_epci?: boolean
    epci?: boolean
    densite_bati?: boolean
    precarite_logement?: boolean
    coordinates?: boolean
  }



  export type $communes2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "communes2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      code_commune: string | null
      libelle_commune: string | null
      reg: number | null
      dep: string | null
      libelle_epci: string | null
      epci: string | null
      densite_bati: number | null
      precarite_logement: number | null
      coordinates: string | null
    }, ExtArgs["result"]["communes2"]>
    composites: {}
  }


  type communes2GetPayload<S extends boolean | null | undefined | communes2DefaultArgs> = $Result.GetResult<Prisma.$communes2Payload, S>

  type communes2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<communes2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Communes2CountAggregateInputType | true
    }

  export interface communes2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['communes2'], meta: { name: 'communes2' } }
    /**
     * Find zero or one Communes2 that matches the filter.
     * @param {communes2FindUniqueArgs} args - Arguments to find a Communes2
     * @example
     * // Get one Communes2
     * const communes2 = await prisma.communes2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends communes2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, communes2FindUniqueArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Communes2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {communes2FindUniqueOrThrowArgs} args - Arguments to find a Communes2
     * @example
     * // Get one Communes2
     * const communes2 = await prisma.communes2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends communes2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, communes2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Communes2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2FindFirstArgs} args - Arguments to find a Communes2
     * @example
     * // Get one Communes2
     * const communes2 = await prisma.communes2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends communes2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, communes2FindFirstArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Communes2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2FindFirstOrThrowArgs} args - Arguments to find a Communes2
     * @example
     * // Get one Communes2
     * const communes2 = await prisma.communes2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends communes2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, communes2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Communes2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Communes2s
     * const communes2s = await prisma.communes2.findMany()
     * 
     * // Get first 10 Communes2s
     * const communes2s = await prisma.communes2.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const communes2WithPkOnly = await prisma.communes2.findMany({ select: { pk: true } })
     * 
    **/
    findMany<T extends communes2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communes2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Communes2.
     * @param {communes2CreateArgs} args - Arguments to create a Communes2.
     * @example
     * // Create one Communes2
     * const Communes2 = await prisma.communes2.create({
     *   data: {
     *     // ... data to create a Communes2
     *   }
     * })
     * 
    **/
    create<T extends communes2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, communes2CreateArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Communes2s.
     *     @param {communes2CreateManyArgs} args - Arguments to create many Communes2s.
     *     @example
     *     // Create many Communes2s
     *     const communes2 = await prisma.communes2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends communes2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communes2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Communes2.
     * @param {communes2DeleteArgs} args - Arguments to delete one Communes2.
     * @example
     * // Delete one Communes2
     * const Communes2 = await prisma.communes2.delete({
     *   where: {
     *     // ... filter to delete one Communes2
     *   }
     * })
     * 
    **/
    delete<T extends communes2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, communes2DeleteArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Communes2.
     * @param {communes2UpdateArgs} args - Arguments to update one Communes2.
     * @example
     * // Update one Communes2
     * const communes2 = await prisma.communes2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends communes2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, communes2UpdateArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Communes2s.
     * @param {communes2DeleteManyArgs} args - Arguments to filter Communes2s to delete.
     * @example
     * // Delete a few Communes2s
     * const { count } = await prisma.communes2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends communes2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, communes2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Communes2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Communes2s
     * const communes2 = await prisma.communes2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends communes2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, communes2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Communes2.
     * @param {communes2UpsertArgs} args - Arguments to update or create a Communes2.
     * @example
     * // Update or create a Communes2
     * const communes2 = await prisma.communes2.upsert({
     *   create: {
     *     // ... data to create a Communes2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Communes2 we want to update
     *   }
     * })
    **/
    upsert<T extends communes2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, communes2UpsertArgs<ExtArgs>>
    ): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Communes2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2CountArgs} args - Arguments to filter Communes2s to count.
     * @example
     * // Count the number of Communes2s
     * const count = await prisma.communes2.count({
     *   where: {
     *     // ... the filter for the Communes2s we want to count
     *   }
     * })
    **/
    count<T extends communes2CountArgs>(
      args?: Subset<T, communes2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Communes2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Communes2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Communes2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Communes2AggregateArgs>(args: Subset<T, Communes2AggregateArgs>): Prisma.PrismaPromise<GetCommunes2AggregateType<T>>

    /**
     * Group by Communes2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2GroupByArgs} args - Group by arguments.
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
      T extends communes2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: communes2GroupByArgs['orderBy'] }
        : { orderBy?: communes2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, communes2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommunes2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the communes2 model
   */
  readonly fields: communes2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for communes2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__communes2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the communes2 model
   */ 
  interface communes2FieldRefs {
    readonly pk: FieldRef<"communes2", 'Int'>
    readonly code_commune: FieldRef<"communes2", 'String'>
    readonly libelle_commune: FieldRef<"communes2", 'String'>
    readonly reg: FieldRef<"communes2", 'Float'>
    readonly dep: FieldRef<"communes2", 'String'>
    readonly libelle_epci: FieldRef<"communes2", 'String'>
    readonly epci: FieldRef<"communes2", 'String'>
    readonly densite_bati: FieldRef<"communes2", 'Float'>
    readonly precarite_logement: FieldRef<"communes2", 'Float'>
    readonly coordinates: FieldRef<"communes2", 'String'>
  }
    

  // Custom InputTypes
  /**
   * communes2 findUnique
   */
  export type communes2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * Filter, which communes2 to fetch.
     */
    where: communes2WhereUniqueInput
  }

  /**
   * communes2 findUniqueOrThrow
   */
  export type communes2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * Filter, which communes2 to fetch.
     */
    where: communes2WhereUniqueInput
  }

  /**
   * communes2 findFirst
   */
  export type communes2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * Filter, which communes2 to fetch.
     */
    where?: communes2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes2s to fetch.
     */
    orderBy?: communes2OrderByWithRelationInput | communes2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes2s.
     */
    cursor?: communes2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes2s.
     */
    distinct?: Communes2ScalarFieldEnum | Communes2ScalarFieldEnum[]
  }

  /**
   * communes2 findFirstOrThrow
   */
  export type communes2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * Filter, which communes2 to fetch.
     */
    where?: communes2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes2s to fetch.
     */
    orderBy?: communes2OrderByWithRelationInput | communes2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for communes2s.
     */
    cursor?: communes2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of communes2s.
     */
    distinct?: Communes2ScalarFieldEnum | Communes2ScalarFieldEnum[]
  }

  /**
   * communes2 findMany
   */
  export type communes2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * Filter, which communes2s to fetch.
     */
    where?: communes2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of communes2s to fetch.
     */
    orderBy?: communes2OrderByWithRelationInput | communes2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing communes2s.
     */
    cursor?: communes2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` communes2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` communes2s.
     */
    skip?: number
    distinct?: Communes2ScalarFieldEnum | Communes2ScalarFieldEnum[]
  }

  /**
   * communes2 create
   */
  export type communes2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * The data needed to create a communes2.
     */
    data?: XOR<communes2CreateInput, communes2UncheckedCreateInput>
  }

  /**
   * communes2 createMany
   */
  export type communes2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many communes2s.
     */
    data: communes2CreateManyInput | communes2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * communes2 update
   */
  export type communes2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * The data needed to update a communes2.
     */
    data: XOR<communes2UpdateInput, communes2UncheckedUpdateInput>
    /**
     * Choose, which communes2 to update.
     */
    where: communes2WhereUniqueInput
  }

  /**
   * communes2 updateMany
   */
  export type communes2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update communes2s.
     */
    data: XOR<communes2UpdateManyMutationInput, communes2UncheckedUpdateManyInput>
    /**
     * Filter which communes2s to update
     */
    where?: communes2WhereInput
  }

  /**
   * communes2 upsert
   */
  export type communes2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * The filter to search for the communes2 to update in case it exists.
     */
    where: communes2WhereUniqueInput
    /**
     * In case the communes2 found by the `where` argument doesn't exist, create a new communes2 with this data.
     */
    create: XOR<communes2CreateInput, communes2UncheckedCreateInput>
    /**
     * In case the communes2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<communes2UpdateInput, communes2UncheckedUpdateInput>
  }

  /**
   * communes2 delete
   */
  export type communes2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
    /**
     * Filter which communes2 to delete.
     */
    where: communes2WhereUniqueInput
  }

  /**
   * communes2 deleteMany
   */
  export type communes2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which communes2s to delete
     */
    where?: communes2WhereInput
  }

  /**
   * communes2 without action
   */
  export type communes2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2Select<ExtArgs> | null
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


  export const Spatial_ref_sysScalarFieldEnum: {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
  };

  export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum]


  export const Communes_precariteScalarFieldEnum: {
    pk: 'pk',
    code_commune: 'code_commune',
    tee_log: 'tee_log',
    tee_mob: 'tee_mob',
    precarite_logement: 'precarite_logement',
    epci: 'epci'
  };

  export type Communes_precariteScalarFieldEnum = (typeof Communes_precariteScalarFieldEnum)[keyof typeof Communes_precariteScalarFieldEnum]


  export const CommunesScalarFieldEnum: {
    pk: 'pk',
    code_commune: 'code_commune',
    libelle_commune: 'libelle_commune',
    reg: 'reg',
    dep: 'dep',
    libelle_epci: 'libelle_epci',
    epci: 'epci',
    densite_bati: 'densite_bati',
    precarite_logement: 'precarite_logement'
  };

  export type CommunesScalarFieldEnum = (typeof CommunesScalarFieldEnum)[keyof typeof CommunesScalarFieldEnum]


  export const Clc_2018_2ScalarFieldEnum: {
    pk: 'pk',
    area_ha: 'area_ha',
    shape_length: 'shape_length',
    shape_area: 'shape_area',
    label3: 'label3',
    centroid: 'centroid'
  };

  export type Clc_2018_2ScalarFieldEnum = (typeof Clc_2018_2ScalarFieldEnum)[keyof typeof Clc_2018_2ScalarFieldEnum]


  export const Communes2ScalarFieldEnum: {
    pk: 'pk',
    code_commune: 'code_commune',
    libelle_commune: 'libelle_commune',
    reg: 'reg',
    dep: 'dep',
    libelle_epci: 'libelle_epci',
    epci: 'epci',
    densite_bati: 'densite_bati',
    precarite_logement: 'precarite_logement',
    coordinates: 'coordinates'
  };

  export type Communes2ScalarFieldEnum = (typeof Communes2ScalarFieldEnum)[keyof typeof Communes2ScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


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


  export type spatial_ref_sysWhereInput = {
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    srid?: IntFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }

  export type spatial_ref_sysOrderByWithRelationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
  }

  export type spatial_ref_sysWhereUniqueInput = Prisma.AtLeast<{
    srid?: number
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }, "srid">

  export type spatial_ref_sysOrderByWithAggregationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
    _count?: spatial_ref_sysCountOrderByAggregateInput
    _avg?: spatial_ref_sysAvgOrderByAggregateInput
    _max?: spatial_ref_sysMaxOrderByAggregateInput
    _min?: spatial_ref_sysMinOrderByAggregateInput
    _sum?: spatial_ref_sysSumOrderByAggregateInput
  }

  export type spatial_ref_sysScalarWhereWithAggregatesInput = {
    AND?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    OR?: spatial_ref_sysScalarWhereWithAggregatesInput[]
    NOT?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    srid?: IntWithAggregatesFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableWithAggregatesFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
  }

  export type communes_precariteWhereInput = {
    AND?: communes_precariteWhereInput | communes_precariteWhereInput[]
    OR?: communes_precariteWhereInput[]
    NOT?: communes_precariteWhereInput | communes_precariteWhereInput[]
    pk?: IntFilter<"communes_precarite"> | number
    code_commune?: StringNullableFilter<"communes_precarite"> | string | null
    tee_log?: FloatNullableFilter<"communes_precarite"> | number | null
    tee_mob?: FloatNullableFilter<"communes_precarite"> | number | null
    precarite_logement?: FloatNullableFilter<"communes_precarite"> | number | null
    epci?: StringNullableFilter<"communes_precarite"> | string | null
  }

  export type communes_precariteOrderByWithRelationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    tee_log?: SortOrderInput | SortOrder
    tee_mob?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
  }

  export type communes_precariteWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: communes_precariteWhereInput | communes_precariteWhereInput[]
    OR?: communes_precariteWhereInput[]
    NOT?: communes_precariteWhereInput | communes_precariteWhereInput[]
    code_commune?: StringNullableFilter<"communes_precarite"> | string | null
    tee_log?: FloatNullableFilter<"communes_precarite"> | number | null
    tee_mob?: FloatNullableFilter<"communes_precarite"> | number | null
    precarite_logement?: FloatNullableFilter<"communes_precarite"> | number | null
    epci?: StringNullableFilter<"communes_precarite"> | string | null
  }, "pk">

  export type communes_precariteOrderByWithAggregationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    tee_log?: SortOrderInput | SortOrder
    tee_mob?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    _count?: communes_precariteCountOrderByAggregateInput
    _avg?: communes_precariteAvgOrderByAggregateInput
    _max?: communes_precariteMaxOrderByAggregateInput
    _min?: communes_precariteMinOrderByAggregateInput
    _sum?: communes_precariteSumOrderByAggregateInput
  }

  export type communes_precariteScalarWhereWithAggregatesInput = {
    AND?: communes_precariteScalarWhereWithAggregatesInput | communes_precariteScalarWhereWithAggregatesInput[]
    OR?: communes_precariteScalarWhereWithAggregatesInput[]
    NOT?: communes_precariteScalarWhereWithAggregatesInput | communes_precariteScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"communes_precarite"> | number
    code_commune?: StringNullableWithAggregatesFilter<"communes_precarite"> | string | null
    tee_log?: FloatNullableWithAggregatesFilter<"communes_precarite"> | number | null
    tee_mob?: FloatNullableWithAggregatesFilter<"communes_precarite"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"communes_precarite"> | number | null
    epci?: StringNullableWithAggregatesFilter<"communes_precarite"> | string | null
  }

  export type communesWhereInput = {
    AND?: communesWhereInput | communesWhereInput[]
    OR?: communesWhereInput[]
    NOT?: communesWhereInput | communesWhereInput[]
    pk?: IntFilter<"communes"> | number
    code_commune?: StringNullableFilter<"communes"> | string | null
    libelle_commune?: StringNullableFilter<"communes"> | string | null
    reg?: FloatNullableFilter<"communes"> | number | null
    dep?: StringNullableFilter<"communes"> | string | null
    libelle_epci?: StringNullableFilter<"communes"> | string | null
    epci?: StringNullableFilter<"communes"> | string | null
    densite_bati?: FloatNullableFilter<"communes"> | number | null
    precarite_logement?: FloatNullableFilter<"communes"> | number | null
  }

  export type communesOrderByWithRelationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    reg?: SortOrderInput | SortOrder
    dep?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
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
    reg?: FloatNullableFilter<"communes"> | number | null
    dep?: StringNullableFilter<"communes"> | string | null
    libelle_epci?: StringNullableFilter<"communes"> | string | null
    epci?: StringNullableFilter<"communes"> | string | null
    densite_bati?: FloatNullableFilter<"communes"> | number | null
    precarite_logement?: FloatNullableFilter<"communes"> | number | null
  }, "pk">

  export type communesOrderByWithAggregationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    reg?: SortOrderInput | SortOrder
    dep?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
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
    reg?: FloatNullableWithAggregatesFilter<"communes"> | number | null
    dep?: StringNullableWithAggregatesFilter<"communes"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"communes"> | string | null
    epci?: StringNullableWithAggregatesFilter<"communes"> | string | null
    densite_bati?: FloatNullableWithAggregatesFilter<"communes"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"communes"> | number | null
  }

  export type clc_2018_2WhereInput = {
    AND?: clc_2018_2WhereInput | clc_2018_2WhereInput[]
    OR?: clc_2018_2WhereInput[]
    NOT?: clc_2018_2WhereInput | clc_2018_2WhereInput[]
    pk?: IntFilter<"clc_2018_2"> | number
    area_ha?: FloatNullableFilter<"clc_2018_2"> | number | null
    shape_length?: FloatNullableFilter<"clc_2018_2"> | number | null
    shape_area?: FloatNullableFilter<"clc_2018_2"> | number | null
    label3?: StringNullableFilter<"clc_2018_2"> | string | null
    centroid?: StringNullableFilter<"clc_2018_2"> | string | null
  }

  export type clc_2018_2OrderByWithRelationInput = {
    pk?: SortOrder
    area_ha?: SortOrderInput | SortOrder
    shape_length?: SortOrderInput | SortOrder
    shape_area?: SortOrderInput | SortOrder
    label3?: SortOrderInput | SortOrder
    centroid?: SortOrderInput | SortOrder
  }

  export type clc_2018_2WhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: clc_2018_2WhereInput | clc_2018_2WhereInput[]
    OR?: clc_2018_2WhereInput[]
    NOT?: clc_2018_2WhereInput | clc_2018_2WhereInput[]
    area_ha?: FloatNullableFilter<"clc_2018_2"> | number | null
    shape_length?: FloatNullableFilter<"clc_2018_2"> | number | null
    shape_area?: FloatNullableFilter<"clc_2018_2"> | number | null
    label3?: StringNullableFilter<"clc_2018_2"> | string | null
    centroid?: StringNullableFilter<"clc_2018_2"> | string | null
  }, "pk">

  export type clc_2018_2OrderByWithAggregationInput = {
    pk?: SortOrder
    area_ha?: SortOrderInput | SortOrder
    shape_length?: SortOrderInput | SortOrder
    shape_area?: SortOrderInput | SortOrder
    label3?: SortOrderInput | SortOrder
    centroid?: SortOrderInput | SortOrder
    _count?: clc_2018_2CountOrderByAggregateInput
    _avg?: clc_2018_2AvgOrderByAggregateInput
    _max?: clc_2018_2MaxOrderByAggregateInput
    _min?: clc_2018_2MinOrderByAggregateInput
    _sum?: clc_2018_2SumOrderByAggregateInput
  }

  export type clc_2018_2ScalarWhereWithAggregatesInput = {
    AND?: clc_2018_2ScalarWhereWithAggregatesInput | clc_2018_2ScalarWhereWithAggregatesInput[]
    OR?: clc_2018_2ScalarWhereWithAggregatesInput[]
    NOT?: clc_2018_2ScalarWhereWithAggregatesInput | clc_2018_2ScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"clc_2018_2"> | number
    area_ha?: FloatNullableWithAggregatesFilter<"clc_2018_2"> | number | null
    shape_length?: FloatNullableWithAggregatesFilter<"clc_2018_2"> | number | null
    shape_area?: FloatNullableWithAggregatesFilter<"clc_2018_2"> | number | null
    label3?: StringNullableWithAggregatesFilter<"clc_2018_2"> | string | null
    centroid?: StringNullableWithAggregatesFilter<"clc_2018_2"> | string | null
  }

  export type communes2WhereInput = {
    AND?: communes2WhereInput | communes2WhereInput[]
    OR?: communes2WhereInput[]
    NOT?: communes2WhereInput | communes2WhereInput[]
    pk?: IntFilter<"communes2"> | number
    code_commune?: StringNullableFilter<"communes2"> | string | null
    libelle_commune?: StringNullableFilter<"communes2"> | string | null
    reg?: FloatNullableFilter<"communes2"> | number | null
    dep?: StringNullableFilter<"communes2"> | string | null
    libelle_epci?: StringNullableFilter<"communes2"> | string | null
    epci?: StringNullableFilter<"communes2"> | string | null
    densite_bati?: FloatNullableFilter<"communes2"> | number | null
    precarite_logement?: FloatNullableFilter<"communes2"> | number | null
    coordinates?: StringNullableFilter<"communes2"> | string | null
  }

  export type communes2OrderByWithRelationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    reg?: SortOrderInput | SortOrder
    dep?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
  }

  export type communes2WhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: communes2WhereInput | communes2WhereInput[]
    OR?: communes2WhereInput[]
    NOT?: communes2WhereInput | communes2WhereInput[]
    code_commune?: StringNullableFilter<"communes2"> | string | null
    libelle_commune?: StringNullableFilter<"communes2"> | string | null
    reg?: FloatNullableFilter<"communes2"> | number | null
    dep?: StringNullableFilter<"communes2"> | string | null
    libelle_epci?: StringNullableFilter<"communes2"> | string | null
    epci?: StringNullableFilter<"communes2"> | string | null
    densite_bati?: FloatNullableFilter<"communes2"> | number | null
    precarite_logement?: FloatNullableFilter<"communes2"> | number | null
    coordinates?: StringNullableFilter<"communes2"> | string | null
  }, "pk">

  export type communes2OrderByWithAggregationInput = {
    pk?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_commune?: SortOrderInput | SortOrder
    reg?: SortOrderInput | SortOrder
    dep?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    coordinates?: SortOrderInput | SortOrder
    _count?: communes2CountOrderByAggregateInput
    _avg?: communes2AvgOrderByAggregateInput
    _max?: communes2MaxOrderByAggregateInput
    _min?: communes2MinOrderByAggregateInput
    _sum?: communes2SumOrderByAggregateInput
  }

  export type communes2ScalarWhereWithAggregatesInput = {
    AND?: communes2ScalarWhereWithAggregatesInput | communes2ScalarWhereWithAggregatesInput[]
    OR?: communes2ScalarWhereWithAggregatesInput[]
    NOT?: communes2ScalarWhereWithAggregatesInput | communes2ScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"communes2"> | number
    code_commune?: StringNullableWithAggregatesFilter<"communes2"> | string | null
    libelle_commune?: StringNullableWithAggregatesFilter<"communes2"> | string | null
    reg?: FloatNullableWithAggregatesFilter<"communes2"> | number | null
    dep?: StringNullableWithAggregatesFilter<"communes2"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"communes2"> | string | null
    epci?: StringNullableWithAggregatesFilter<"communes2"> | string | null
    densite_bati?: FloatNullableWithAggregatesFilter<"communes2"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"communes2"> | number | null
    coordinates?: StringNullableWithAggregatesFilter<"communes2"> | string | null
  }

  export type spatial_ref_sysCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUncheckedCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysCreateManyInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateManyMutationInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateManyInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes_precariteCreateInput = {
    code_commune?: string | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    epci?: string | null
  }

  export type communes_precariteUncheckedCreateInput = {
    pk?: number
    code_commune?: string | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    epci?: string | null
  }

  export type communes_precariteUpdateInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes_precariteUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes_precariteCreateManyInput = {
    pk?: number
    code_commune?: string | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    epci?: string | null
  }

  export type communes_precariteUpdateManyMutationInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes_precariteUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communesCreateInput = {
    code_commune?: string | null
    libelle_commune?: string | null
    reg?: number | null
    dep?: string | null
    libelle_epci?: string | null
    epci?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
  }

  export type communesUncheckedCreateInput = {
    pk?: number
    code_commune?: string | null
    libelle_commune?: string | null
    reg?: number | null
    dep?: string | null
    libelle_epci?: string | null
    epci?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
  }

  export type communesUpdateInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communesUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communesCreateManyInput = {
    pk?: number
    code_commune?: string | null
    libelle_commune?: string | null
    reg?: number | null
    dep?: string | null
    libelle_epci?: string | null
    epci?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
  }

  export type communesUpdateManyMutationInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type communesUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type clc_2018_2CreateInput = {
    area_ha?: number | null
    shape_length?: number | null
    shape_area?: number | null
    label3?: string | null
    centroid?: string | null
  }

  export type clc_2018_2UncheckedCreateInput = {
    pk?: number
    area_ha?: number | null
    shape_length?: number | null
    shape_area?: number | null
    label3?: string | null
    centroid?: string | null
  }

  export type clc_2018_2UpdateInput = {
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
    centroid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clc_2018_2UncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
    centroid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clc_2018_2CreateManyInput = {
    pk?: number
    area_ha?: number | null
    shape_length?: number | null
    shape_area?: number | null
    label3?: string | null
    centroid?: string | null
  }

  export type clc_2018_2UpdateManyMutationInput = {
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
    centroid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clc_2018_2UncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
    centroid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes2CreateInput = {
    code_commune?: string | null
    libelle_commune?: string | null
    reg?: number | null
    dep?: string | null
    libelle_epci?: string | null
    epci?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
    coordinates?: string | null
  }

  export type communes2UncheckedCreateInput = {
    pk?: number
    code_commune?: string | null
    libelle_commune?: string | null
    reg?: number | null
    dep?: string | null
    libelle_epci?: string | null
    epci?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
    coordinates?: string | null
  }

  export type communes2UpdateInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes2UncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes2CreateManyInput = {
    pk?: number
    code_commune?: string | null
    libelle_commune?: string | null
    reg?: number | null
    dep?: string | null
    libelle_epci?: string | null
    epci?: string | null
    densite_bati?: number | null
    precarite_logement?: number | null
    coordinates?: string | null
  }

  export type communes2UpdateManyMutationInput = {
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type communes2UncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_commune?: NullableStringFieldUpdateOperationsInput | string | null
    reg?: NullableFloatFieldUpdateOperationsInput | number | null
    dep?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    coordinates?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type spatial_ref_sysCountOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysAvgOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type spatial_ref_sysMaxOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysMinOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysSumOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
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

  export type communes_precariteCountOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    epci?: SortOrder
  }

  export type communes_precariteAvgOrderByAggregateInput = {
    pk?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communes_precariteMaxOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    epci?: SortOrder
  }

  export type communes_precariteMinOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    epci?: SortOrder
  }

  export type communes_precariteSumOrderByAggregateInput = {
    pk?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
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

  export type communesCountOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    reg?: SortOrder
    dep?: SortOrder
    libelle_epci?: SortOrder
    epci?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesAvgOrderByAggregateInput = {
    pk?: SortOrder
    reg?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesMaxOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    reg?: SortOrder
    dep?: SortOrder
    libelle_epci?: SortOrder
    epci?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesMinOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    reg?: SortOrder
    dep?: SortOrder
    libelle_epci?: SortOrder
    epci?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communesSumOrderByAggregateInput = {
    pk?: SortOrder
    reg?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type clc_2018_2CountOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
    label3?: SortOrder
    centroid?: SortOrder
  }

  export type clc_2018_2AvgOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type clc_2018_2MaxOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
    label3?: SortOrder
    centroid?: SortOrder
  }

  export type clc_2018_2MinOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
    label3?: SortOrder
    centroid?: SortOrder
  }

  export type clc_2018_2SumOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type communes2CountOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    reg?: SortOrder
    dep?: SortOrder
    libelle_epci?: SortOrder
    epci?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    coordinates?: SortOrder
  }

  export type communes2AvgOrderByAggregateInput = {
    pk?: SortOrder
    reg?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type communes2MaxOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    reg?: SortOrder
    dep?: SortOrder
    libelle_epci?: SortOrder
    epci?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    coordinates?: SortOrder
  }

  export type communes2MinOrderByAggregateInput = {
    pk?: SortOrder
    code_commune?: SortOrder
    libelle_commune?: SortOrder
    reg?: SortOrder
    dep?: SortOrder
    libelle_epci?: SortOrder
    epci?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
    coordinates?: SortOrder
  }

  export type communes2SumOrderByAggregateInput = {
    pk?: SortOrder
    reg?: SortOrder
    densite_bati?: SortOrder
    precarite_logement?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
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

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use spatial_ref_sysDefaultArgs instead
     */
    export type spatial_ref_sysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = spatial_ref_sysDefaultArgs<ExtArgs>
    /**
     * @deprecated Use communes_precariteDefaultArgs instead
     */
    export type communes_precariteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communes_precariteDefaultArgs<ExtArgs>
    /**
     * @deprecated Use communesDefaultArgs instead
     */
    export type communesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clc_2018_2DefaultArgs instead
     */
    export type clc_2018_2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clc_2018_2DefaultArgs<ExtArgs>
    /**
     * @deprecated Use communes2DefaultArgs instead
     */
    export type communes2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communes2DefaultArgs<ExtArgs>

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