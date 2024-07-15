
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
 * Model clc_2018
 * 
 */
export type clc_2018 = $Result.DefaultSelection<Prisma.$clc_2018Payload>
/**
 * Model communes
 * 
 */
export type communes = $Result.DefaultSelection<Prisma.$communesPayload>

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
   * // Fetch zero or more Spatial_ref_sys
   * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
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
   * `prisma.clc_2018`: Exposes CRUD operations for the **clc_2018** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clc_2018s
    * const clc_2018s = await prisma.clc_2018.findMany()
    * ```
    */
  get clc_2018(): Prisma.clc_2018Delegate<ExtArgs>;

  /**
   * `prisma.communes`: Exposes CRUD operations for the **communes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Communes
    * const communes = await prisma.communes.findMany()
    * ```
    */
  get communes(): Prisma.communesDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.16.2
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
    clc_2018: 'clc_2018',
    communes: 'communes'
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
      modelProps: "spatial_ref_sys" | "communes_precarite" | "clc_2018" | "communes"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      spatial_ref_sys: {
        payload: Prisma.$spatial_ref_sysPayload<ExtArgs>
        fields: Prisma.spatial_ref_sysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findFirst: {
            args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findMany: {
            args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          create: {
            args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          createMany: {
            args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          delete: {
            args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          update: {
            args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          deleteMany: {
            args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          aggregate: {
            args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpatial_ref_sys>
          }
          groupBy: {
            args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysGroupByOutputType>[]
          }
          count: {
            args: Prisma.spatial_ref_sysCountArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysCountAggregateOutputType> | number
          }
        }
      }
      communes_precarite: {
        payload: Prisma.$communes_precaritePayload<ExtArgs>
        fields: Prisma.communes_precariteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.communes_precariteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communes_precariteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          findFirst: {
            args: Prisma.communes_precariteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communes_precariteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          findMany: {
            args: Prisma.communes_precariteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>[]
          }
          create: {
            args: Prisma.communes_precariteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          createMany: {
            args: Prisma.communes_precariteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.communes_precariteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>[]
          }
          delete: {
            args: Prisma.communes_precariteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          update: {
            args: Prisma.communes_precariteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          deleteMany: {
            args: Prisma.communes_precariteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communes_precariteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.communes_precariteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes_precaritePayload>
          }
          aggregate: {
            args: Prisma.Communes_precariteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunes_precarite>
          }
          groupBy: {
            args: Prisma.communes_precariteGroupByArgs<ExtArgs>
            result: $Utils.Optional<Communes_precariteGroupByOutputType>[]
          }
          count: {
            args: Prisma.communes_precariteCountArgs<ExtArgs>
            result: $Utils.Optional<Communes_precariteCountAggregateOutputType> | number
          }
        }
      }
      clc_2018: {
        payload: Prisma.$clc_2018Payload<ExtArgs>
        fields: Prisma.clc_2018FieldRefs
        operations: {
          findUnique: {
            args: Prisma.clc_2018FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clc_2018FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>
          }
          findFirst: {
            args: Prisma.clc_2018FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clc_2018FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>
          }
          findMany: {
            args: Prisma.clc_2018FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>[]
          }
          create: {
            args: Prisma.clc_2018CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>
          }
          createMany: {
            args: Prisma.clc_2018CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clc_2018CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>[]
          }
          delete: {
            args: Prisma.clc_2018DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>
          }
          update: {
            args: Prisma.clc_2018UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>
          }
          deleteMany: {
            args: Prisma.clc_2018DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clc_2018UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clc_2018UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018Payload>
          }
          aggregate: {
            args: Prisma.Clc_2018AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClc_2018>
          }
          groupBy: {
            args: Prisma.clc_2018GroupByArgs<ExtArgs>
            result: $Utils.Optional<Clc_2018GroupByOutputType>[]
          }
          count: {
            args: Prisma.clc_2018CountArgs<ExtArgs>
            result: $Utils.Optional<Clc_2018CountAggregateOutputType> | number
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

  export type spatial_ref_sysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
     */
    findUnique<T extends spatial_ref_sysFindUniqueArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Spatial_ref_sys that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {spatial_ref_sysFindUniqueOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends spatial_ref_sysFindFirstArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends spatial_ref_sysFindManyArgs>(args?: SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends spatial_ref_sysCreateArgs>(args: SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Spatial_ref_sys.
     * @param {spatial_ref_sysCreateManyArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spatial_ref_sysCreateManyArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spatial_ref_sys and returns the data saved in the database.
     * @param {spatial_ref_sysCreateManyAndReturnArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.createManyAndReturn({ 
     *   select: { srid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spatial_ref_sysCreateManyAndReturnArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends spatial_ref_sysDeleteArgs>(args: SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends spatial_ref_sysUpdateArgs>(args: SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends spatial_ref_sysDeleteManyArgs>(args?: SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends spatial_ref_sysUpdateManyArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends spatial_ref_sysUpsertArgs>(args: SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
   * spatial_ref_sys createManyAndReturn
   */
  export type spatial_ref_sysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectCreateManyAndReturn<ExtArgs> | null
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

  export type communes_precariteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
     */
    findUnique<T extends communes_precariteFindUniqueArgs>(args: SelectSubset<T, communes_precariteFindUniqueArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Communes_precarite that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {communes_precariteFindUniqueOrThrowArgs} args - Arguments to find a Communes_precarite
     * @example
     * // Get one Communes_precarite
     * const communes_precarite = await prisma.communes_precarite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communes_precariteFindUniqueOrThrowArgs>(args: SelectSubset<T, communes_precariteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends communes_precariteFindFirstArgs>(args?: SelectSubset<T, communes_precariteFindFirstArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends communes_precariteFindFirstOrThrowArgs>(args?: SelectSubset<T, communes_precariteFindFirstOrThrowArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Communes_precarites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes_precariteFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends communes_precariteFindManyArgs>(args?: SelectSubset<T, communes_precariteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends communes_precariteCreateArgs>(args: SelectSubset<T, communes_precariteCreateArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Communes_precarites.
     * @param {communes_precariteCreateManyArgs} args - Arguments to create many Communes_precarites.
     * @example
     * // Create many Communes_precarites
     * const communes_precarite = await prisma.communes_precarite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends communes_precariteCreateManyArgs>(args?: SelectSubset<T, communes_precariteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communes_precarites and returns the data saved in the database.
     * @param {communes_precariteCreateManyAndReturnArgs} args - Arguments to create many Communes_precarites.
     * @example
     * // Create many Communes_precarites
     * const communes_precarite = await prisma.communes_precarite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communes_precarites and only return the `pk`
     * const communes_precariteWithPkOnly = await prisma.communes_precarite.createManyAndReturn({ 
     *   select: { pk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends communes_precariteCreateManyAndReturnArgs>(args?: SelectSubset<T, communes_precariteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends communes_precariteDeleteArgs>(args: SelectSubset<T, communes_precariteDeleteArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends communes_precariteUpdateArgs>(args: SelectSubset<T, communes_precariteUpdateArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends communes_precariteDeleteManyArgs>(args?: SelectSubset<T, communes_precariteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends communes_precariteUpdateManyArgs>(args: SelectSubset<T, communes_precariteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends communes_precariteUpsertArgs>(args: SelectSubset<T, communes_precariteUpsertArgs<ExtArgs>>): Prisma__communes_precariteClient<$Result.GetResult<Prisma.$communes_precaritePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
   * communes_precarite createManyAndReturn
   */
  export type communes_precariteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes_precarite
     */
    select?: communes_precariteSelectCreateManyAndReturn<ExtArgs> | null
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
   * Model clc_2018
   */

  export type AggregateClc_2018 = {
    _count: Clc_2018CountAggregateOutputType | null
    _avg: Clc_2018AvgAggregateOutputType | null
    _sum: Clc_2018SumAggregateOutputType | null
    _min: Clc_2018MinAggregateOutputType | null
    _max: Clc_2018MaxAggregateOutputType | null
  }

  export type Clc_2018AvgAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_2018SumAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_2018MinAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
    label3: string | null
  }

  export type Clc_2018MaxAggregateOutputType = {
    pk: number | null
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
    label3: string | null
  }

  export type Clc_2018CountAggregateOutputType = {
    pk: number
    area_ha: number
    shape_length: number
    shape_area: number
    label3: number
    _all: number
  }


  export type Clc_2018AvgAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_2018SumAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_2018MinAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
    label3?: true
  }

  export type Clc_2018MaxAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
    label3?: true
  }

  export type Clc_2018CountAggregateInputType = {
    pk?: true
    area_ha?: true
    shape_length?: true
    shape_area?: true
    label3?: true
    _all?: true
  }

  export type Clc_2018AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_2018 to aggregate.
     */
    where?: clc_2018WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018s to fetch.
     */
    orderBy?: clc_2018OrderByWithRelationInput | clc_2018OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clc_2018WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clc_2018s
    **/
    _count?: true | Clc_2018CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Clc_2018AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Clc_2018SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clc_2018MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clc_2018MaxAggregateInputType
  }

  export type GetClc_2018AggregateType<T extends Clc_2018AggregateArgs> = {
        [P in keyof T & keyof AggregateClc_2018]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClc_2018[P]>
      : GetScalarType<T[P], AggregateClc_2018[P]>
  }




  export type clc_2018GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clc_2018WhereInput
    orderBy?: clc_2018OrderByWithAggregationInput | clc_2018OrderByWithAggregationInput[]
    by: Clc_2018ScalarFieldEnum[] | Clc_2018ScalarFieldEnum
    having?: clc_2018ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clc_2018CountAggregateInputType | true
    _avg?: Clc_2018AvgAggregateInputType
    _sum?: Clc_2018SumAggregateInputType
    _min?: Clc_2018MinAggregateInputType
    _max?: Clc_2018MaxAggregateInputType
  }

  export type Clc_2018GroupByOutputType = {
    pk: number
    area_ha: number | null
    shape_length: number | null
    shape_area: number | null
    label3: string | null
    _count: Clc_2018CountAggregateOutputType | null
    _avg: Clc_2018AvgAggregateOutputType | null
    _sum: Clc_2018SumAggregateOutputType | null
    _min: Clc_2018MinAggregateOutputType | null
    _max: Clc_2018MaxAggregateOutputType | null
  }

  type GetClc_2018GroupByPayload<T extends clc_2018GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clc_2018GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clc_2018GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clc_2018GroupByOutputType[P]>
            : GetScalarType<T[P], Clc_2018GroupByOutputType[P]>
        }
      >
    >


  export type clc_2018Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    area_ha?: boolean
    shape_length?: boolean
    shape_area?: boolean
    label3?: boolean
  }, ExtArgs["result"]["clc_2018"]>

  export type clc_2018SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    area_ha?: boolean
    shape_length?: boolean
    shape_area?: boolean
    label3?: boolean
  }, ExtArgs["result"]["clc_2018"]>

  export type clc_2018SelectScalar = {
    pk?: boolean
    area_ha?: boolean
    shape_length?: boolean
    shape_area?: boolean
    label3?: boolean
  }


  export type $clc_2018Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clc_2018"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      area_ha: number | null
      shape_length: number | null
      shape_area: number | null
      label3: string | null
    }, ExtArgs["result"]["clc_2018"]>
    composites: {}
  }

  type clc_2018GetPayload<S extends boolean | null | undefined | clc_2018DefaultArgs> = $Result.GetResult<Prisma.$clc_2018Payload, S>

  type clc_2018CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clc_2018FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Clc_2018CountAggregateInputType | true
    }

  export interface clc_2018Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clc_2018'], meta: { name: 'clc_2018' } }
    /**
     * Find zero or one Clc_2018 that matches the filter.
     * @param {clc_2018FindUniqueArgs} args - Arguments to find a Clc_2018
     * @example
     * // Get one Clc_2018
     * const clc_2018 = await prisma.clc_2018.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends clc_2018FindUniqueArgs>(args: SelectSubset<T, clc_2018FindUniqueArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clc_2018 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clc_2018FindUniqueOrThrowArgs} args - Arguments to find a Clc_2018
     * @example
     * // Get one Clc_2018
     * const clc_2018 = await prisma.clc_2018.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clc_2018FindUniqueOrThrowArgs>(args: SelectSubset<T, clc_2018FindUniqueOrThrowArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Clc_2018 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018FindFirstArgs} args - Arguments to find a Clc_2018
     * @example
     * // Get one Clc_2018
     * const clc_2018 = await prisma.clc_2018.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends clc_2018FindFirstArgs>(args?: SelectSubset<T, clc_2018FindFirstArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Clc_2018 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018FindFirstOrThrowArgs} args - Arguments to find a Clc_2018
     * @example
     * // Get one Clc_2018
     * const clc_2018 = await prisma.clc_2018.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends clc_2018FindFirstOrThrowArgs>(args?: SelectSubset<T, clc_2018FindFirstOrThrowArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clc_2018s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clc_2018s
     * const clc_2018s = await prisma.clc_2018.findMany()
     * 
     * // Get first 10 Clc_2018s
     * const clc_2018s = await prisma.clc_2018.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const clc_2018WithPkOnly = await prisma.clc_2018.findMany({ select: { pk: true } })
     * 
     */
    findMany<T extends clc_2018FindManyArgs>(args?: SelectSubset<T, clc_2018FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "findMany">>

    /**
     * Create a Clc_2018.
     * @param {clc_2018CreateArgs} args - Arguments to create a Clc_2018.
     * @example
     * // Create one Clc_2018
     * const Clc_2018 = await prisma.clc_2018.create({
     *   data: {
     *     // ... data to create a Clc_2018
     *   }
     * })
     * 
     */
    create<T extends clc_2018CreateArgs>(args: SelectSubset<T, clc_2018CreateArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clc_2018s.
     * @param {clc_2018CreateManyArgs} args - Arguments to create many Clc_2018s.
     * @example
     * // Create many Clc_2018s
     * const clc_2018 = await prisma.clc_2018.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clc_2018CreateManyArgs>(args?: SelectSubset<T, clc_2018CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clc_2018s and returns the data saved in the database.
     * @param {clc_2018CreateManyAndReturnArgs} args - Arguments to create many Clc_2018s.
     * @example
     * // Create many Clc_2018s
     * const clc_2018 = await prisma.clc_2018.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clc_2018s and only return the `pk`
     * const clc_2018WithPkOnly = await prisma.clc_2018.createManyAndReturn({ 
     *   select: { pk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clc_2018CreateManyAndReturnArgs>(args?: SelectSubset<T, clc_2018CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Clc_2018.
     * @param {clc_2018DeleteArgs} args - Arguments to delete one Clc_2018.
     * @example
     * // Delete one Clc_2018
     * const Clc_2018 = await prisma.clc_2018.delete({
     *   where: {
     *     // ... filter to delete one Clc_2018
     *   }
     * })
     * 
     */
    delete<T extends clc_2018DeleteArgs>(args: SelectSubset<T, clc_2018DeleteArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Clc_2018.
     * @param {clc_2018UpdateArgs} args - Arguments to update one Clc_2018.
     * @example
     * // Update one Clc_2018
     * const clc_2018 = await prisma.clc_2018.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends clc_2018UpdateArgs>(args: SelectSubset<T, clc_2018UpdateArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Clc_2018s.
     * @param {clc_2018DeleteManyArgs} args - Arguments to filter Clc_2018s to delete.
     * @example
     * // Delete a few Clc_2018s
     * const { count } = await prisma.clc_2018.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends clc_2018DeleteManyArgs>(args?: SelectSubset<T, clc_2018DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clc_2018s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clc_2018s
     * const clc_2018 = await prisma.clc_2018.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends clc_2018UpdateManyArgs>(args: SelectSubset<T, clc_2018UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clc_2018.
     * @param {clc_2018UpsertArgs} args - Arguments to update or create a Clc_2018.
     * @example
     * // Update or create a Clc_2018
     * const clc_2018 = await prisma.clc_2018.upsert({
     *   create: {
     *     // ... data to create a Clc_2018
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clc_2018 we want to update
     *   }
     * })
     */
    upsert<T extends clc_2018UpsertArgs>(args: SelectSubset<T, clc_2018UpsertArgs<ExtArgs>>): Prisma__clc_2018Client<$Result.GetResult<Prisma.$clc_2018Payload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Clc_2018s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018CountArgs} args - Arguments to filter Clc_2018s to count.
     * @example
     * // Count the number of Clc_2018s
     * const count = await prisma.clc_2018.count({
     *   where: {
     *     // ... the filter for the Clc_2018s we want to count
     *   }
     * })
    **/
    count<T extends clc_2018CountArgs>(
      args?: Subset<T, clc_2018CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clc_2018CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clc_2018.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clc_2018AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Clc_2018AggregateArgs>(args: Subset<T, Clc_2018AggregateArgs>): Prisma.PrismaPromise<GetClc_2018AggregateType<T>>

    /**
     * Group by Clc_2018.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018GroupByArgs} args - Group by arguments.
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
      T extends clc_2018GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clc_2018GroupByArgs['orderBy'] }
        : { orderBy?: clc_2018GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clc_2018GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClc_2018GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clc_2018 model
   */
  readonly fields: clc_2018FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clc_2018.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clc_2018Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the clc_2018 model
   */ 
  interface clc_2018FieldRefs {
    readonly pk: FieldRef<"clc_2018", 'Int'>
    readonly area_ha: FieldRef<"clc_2018", 'Float'>
    readonly shape_length: FieldRef<"clc_2018", 'Float'>
    readonly shape_area: FieldRef<"clc_2018", 'Float'>
    readonly label3: FieldRef<"clc_2018", 'String'>
  }
    

  // Custom InputTypes
  /**
   * clc_2018 findUnique
   */
  export type clc_2018FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * Filter, which clc_2018 to fetch.
     */
    where: clc_2018WhereUniqueInput
  }

  /**
   * clc_2018 findUniqueOrThrow
   */
  export type clc_2018FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * Filter, which clc_2018 to fetch.
     */
    where: clc_2018WhereUniqueInput
  }

  /**
   * clc_2018 findFirst
   */
  export type clc_2018FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * Filter, which clc_2018 to fetch.
     */
    where?: clc_2018WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018s to fetch.
     */
    orderBy?: clc_2018OrderByWithRelationInput | clc_2018OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_2018s.
     */
    cursor?: clc_2018WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_2018s.
     */
    distinct?: Clc_2018ScalarFieldEnum | Clc_2018ScalarFieldEnum[]
  }

  /**
   * clc_2018 findFirstOrThrow
   */
  export type clc_2018FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * Filter, which clc_2018 to fetch.
     */
    where?: clc_2018WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018s to fetch.
     */
    orderBy?: clc_2018OrderByWithRelationInput | clc_2018OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_2018s.
     */
    cursor?: clc_2018WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_2018s.
     */
    distinct?: Clc_2018ScalarFieldEnum | Clc_2018ScalarFieldEnum[]
  }

  /**
   * clc_2018 findMany
   */
  export type clc_2018FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * Filter, which clc_2018s to fetch.
     */
    where?: clc_2018WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_2018s to fetch.
     */
    orderBy?: clc_2018OrderByWithRelationInput | clc_2018OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clc_2018s.
     */
    cursor?: clc_2018WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_2018s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_2018s.
     */
    skip?: number
    distinct?: Clc_2018ScalarFieldEnum | Clc_2018ScalarFieldEnum[]
  }

  /**
   * clc_2018 create
   */
  export type clc_2018CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * The data needed to create a clc_2018.
     */
    data?: XOR<clc_2018CreateInput, clc_2018UncheckedCreateInput>
  }

  /**
   * clc_2018 createMany
   */
  export type clc_2018CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clc_2018s.
     */
    data: clc_2018CreateManyInput | clc_2018CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clc_2018 createManyAndReturn
   */
  export type clc_2018CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many clc_2018s.
     */
    data: clc_2018CreateManyInput | clc_2018CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clc_2018 update
   */
  export type clc_2018UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * The data needed to update a clc_2018.
     */
    data: XOR<clc_2018UpdateInput, clc_2018UncheckedUpdateInput>
    /**
     * Choose, which clc_2018 to update.
     */
    where: clc_2018WhereUniqueInput
  }

  /**
   * clc_2018 updateMany
   */
  export type clc_2018UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clc_2018s.
     */
    data: XOR<clc_2018UpdateManyMutationInput, clc_2018UncheckedUpdateManyInput>
    /**
     * Filter which clc_2018s to update
     */
    where?: clc_2018WhereInput
  }

  /**
   * clc_2018 upsert
   */
  export type clc_2018UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * The filter to search for the clc_2018 to update in case it exists.
     */
    where: clc_2018WhereUniqueInput
    /**
     * In case the clc_2018 found by the `where` argument doesn't exist, create a new clc_2018 with this data.
     */
    create: XOR<clc_2018CreateInput, clc_2018UncheckedCreateInput>
    /**
     * In case the clc_2018 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clc_2018UpdateInput, clc_2018UncheckedUpdateInput>
  }

  /**
   * clc_2018 delete
   */
  export type clc_2018DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
    /**
     * Filter which clc_2018 to delete.
     */
    where: clc_2018WhereUniqueInput
  }

  /**
   * clc_2018 deleteMany
   */
  export type clc_2018DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_2018s to delete
     */
    where?: clc_2018WhereInput
  }

  /**
   * clc_2018 without action
   */
  export type clc_2018DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018
     */
    select?: clc_2018Select<ExtArgs> | null
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

  export type communesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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


  export const Clc_2018ScalarFieldEnum: {
    pk: 'pk',
    area_ha: 'area_ha',
    shape_length: 'shape_length',
    shape_area: 'shape_area',
    label3: 'label3'
  };

  export type Clc_2018ScalarFieldEnum = (typeof Clc_2018ScalarFieldEnum)[keyof typeof Clc_2018ScalarFieldEnum]


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

  export type clc_2018WhereInput = {
    AND?: clc_2018WhereInput | clc_2018WhereInput[]
    OR?: clc_2018WhereInput[]
    NOT?: clc_2018WhereInput | clc_2018WhereInput[]
    pk?: IntFilter<"clc_2018"> | number
    area_ha?: FloatNullableFilter<"clc_2018"> | number | null
    shape_length?: FloatNullableFilter<"clc_2018"> | number | null
    shape_area?: FloatNullableFilter<"clc_2018"> | number | null
    label3?: StringNullableFilter<"clc_2018"> | string | null
  }

  export type clc_2018OrderByWithRelationInput = {
    pk?: SortOrder
    area_ha?: SortOrderInput | SortOrder
    shape_length?: SortOrderInput | SortOrder
    shape_area?: SortOrderInput | SortOrder
    label3?: SortOrderInput | SortOrder
  }

  export type clc_2018WhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: clc_2018WhereInput | clc_2018WhereInput[]
    OR?: clc_2018WhereInput[]
    NOT?: clc_2018WhereInput | clc_2018WhereInput[]
    area_ha?: FloatNullableFilter<"clc_2018"> | number | null
    shape_length?: FloatNullableFilter<"clc_2018"> | number | null
    shape_area?: FloatNullableFilter<"clc_2018"> | number | null
    label3?: StringNullableFilter<"clc_2018"> | string | null
  }, "pk">

  export type clc_2018OrderByWithAggregationInput = {
    pk?: SortOrder
    area_ha?: SortOrderInput | SortOrder
    shape_length?: SortOrderInput | SortOrder
    shape_area?: SortOrderInput | SortOrder
    label3?: SortOrderInput | SortOrder
    _count?: clc_2018CountOrderByAggregateInput
    _avg?: clc_2018AvgOrderByAggregateInput
    _max?: clc_2018MaxOrderByAggregateInput
    _min?: clc_2018MinOrderByAggregateInput
    _sum?: clc_2018SumOrderByAggregateInput
  }

  export type clc_2018ScalarWhereWithAggregatesInput = {
    AND?: clc_2018ScalarWhereWithAggregatesInput | clc_2018ScalarWhereWithAggregatesInput[]
    OR?: clc_2018ScalarWhereWithAggregatesInput[]
    NOT?: clc_2018ScalarWhereWithAggregatesInput | clc_2018ScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"clc_2018"> | number
    area_ha?: FloatNullableWithAggregatesFilter<"clc_2018"> | number | null
    shape_length?: FloatNullableWithAggregatesFilter<"clc_2018"> | number | null
    shape_area?: FloatNullableWithAggregatesFilter<"clc_2018"> | number | null
    label3?: StringNullableWithAggregatesFilter<"clc_2018"> | string | null
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

  export type clc_2018CreateInput = {
    area_ha?: number | null
    shape_length?: number | null
    shape_area?: number | null
    label3?: string | null
  }

  export type clc_2018UncheckedCreateInput = {
    pk?: number
    area_ha?: number | null
    shape_length?: number | null
    shape_area?: number | null
    label3?: string | null
  }

  export type clc_2018UpdateInput = {
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clc_2018UncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clc_2018CreateManyInput = {
    pk?: number
    area_ha?: number | null
    shape_length?: number | null
    shape_area?: number | null
    label3?: string | null
  }

  export type clc_2018UpdateManyMutationInput = {
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type clc_2018UncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    area_ha?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
    label3?: NullableStringFieldUpdateOperationsInput | string | null
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

  export type clc_2018CountOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
    label3?: SortOrder
  }

  export type clc_2018AvgOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type clc_2018MaxOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
    label3?: SortOrder
  }

  export type clc_2018MinOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
    label3?: SortOrder
  }

  export type clc_2018SumOrderByAggregateInput = {
    pk?: SortOrder
    area_ha?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
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
     * @deprecated Use clc_2018DefaultArgs instead
     */
    export type clc_2018Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clc_2018DefaultArgs<ExtArgs>
    /**
     * @deprecated Use communesDefaultArgs instead
     */
    export type communesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communesDefaultArgs<ExtArgs>

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