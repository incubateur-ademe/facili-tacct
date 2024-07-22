
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
 * Model spatial_ref_sys
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type spatial_ref_sys = $Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>

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

  /**
   * `prisma.spatial_ref_sys`: Exposes CRUD operations for the **spatial_ref_sys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spatial_ref_sys
    * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
    * ```
    */
  get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs>;
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
    inconfort_thermique: 'inconfort_thermique',
    clc_2018_2: 'clc_2018_2',
    communes2: 'communes2',
    spatial_ref_sys: 'spatial_ref_sys'
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
      modelProps: "inconfort_thermique" | "clc_2018_2" | "communes2" | "spatial_ref_sys"
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
      clc_2018_2: {
        payload: Prisma.$clc_2018_2Payload<ExtArgs>
        fields: Prisma.clc_2018_2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.clc_2018_2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clc_2018_2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          findFirst: {
            args: Prisma.clc_2018_2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clc_2018_2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          findMany: {
            args: Prisma.clc_2018_2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>[]
          }
          create: {
            args: Prisma.clc_2018_2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          createMany: {
            args: Prisma.clc_2018_2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.clc_2018_2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>[]
          }
          delete: {
            args: Prisma.clc_2018_2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          update: {
            args: Prisma.clc_2018_2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          deleteMany: {
            args: Prisma.clc_2018_2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.clc_2018_2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.clc_2018_2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$clc_2018_2Payload>
          }
          aggregate: {
            args: Prisma.Clc_2018_2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClc_2018_2>
          }
          groupBy: {
            args: Prisma.clc_2018_2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Clc_2018_2GroupByOutputType>[]
          }
          count: {
            args: Prisma.clc_2018_2CountArgs<ExtArgs>
            result: $Utils.Optional<Clc_2018_2CountAggregateOutputType> | number
          }
        }
      }
      communes2: {
        payload: Prisma.$communes2Payload<ExtArgs>
        fields: Prisma.communes2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.communes2FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.communes2FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          findFirst: {
            args: Prisma.communes2FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.communes2FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          findMany: {
            args: Prisma.communes2FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>[]
          }
          create: {
            args: Prisma.communes2CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          createMany: {
            args: Prisma.communes2CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.communes2CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>[]
          }
          delete: {
            args: Prisma.communes2DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          update: {
            args: Prisma.communes2UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          deleteMany: {
            args: Prisma.communes2DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.communes2UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.communes2UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$communes2Payload>
          }
          aggregate: {
            args: Prisma.Communes2AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommunes2>
          }
          groupBy: {
            args: Prisma.communes2GroupByArgs<ExtArgs>
            result: $Utils.Optional<Communes2GroupByOutputType>[]
          }
          count: {
            args: Prisma.communes2CountArgs<ExtArgs>
            result: $Utils.Optional<Communes2CountAggregateOutputType> | number
          }
        }
      }
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
    ratio_precarite_log: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: number | null
    NA5BE_sum: number | null
    NA5FZ_sum: number | null
    NA5GU_sum: number | null
    NA5OQ_sum: number | null
    s_geom_cstr_bati: number | null
    densite_bati: number | null
    clc_1_artificialise: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
  }

  export type Inconfort_thermiqueSumAggregateOutputType = {
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
    ratio_precarite_log: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: bigint | null
    NA5BE_sum: bigint | null
    NA5FZ_sum: bigint | null
    NA5GU_sum: bigint | null
    NA5OQ_sum: bigint | null
    s_geom_cstr_bati: number | null
    densite_bati: number | null
    clc_1_artificialise: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
  }

  export type Inconfort_thermiqueMinAggregateOutputType = {
    index: number | null
    code_commune: string | null
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
    ratio_precarite_log: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: bigint | null
    NA5BE_sum: bigint | null
    NA5FZ_sum: bigint | null
    NA5GU_sum: bigint | null
    NA5OQ_sum: bigint | null
    s_geom_cstr_bati: number | null
    densite_bati: number | null
    clc_1_artificialise: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
  }

  export type Inconfort_thermiqueMaxAggregateOutputType = {
    index: number | null
    code_commune: string | null
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
    ratio_precarite_log: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: bigint | null
    NA5BE_sum: bigint | null
    NA5FZ_sum: bigint | null
    NA5GU_sum: bigint | null
    NA5OQ_sum: bigint | null
    s_geom_cstr_bati: number | null
    densite_bati: number | null
    clc_1_artificialise: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
  }

  export type Inconfort_thermiqueCountAggregateOutputType = {
    index: number
    code_commune: number
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
    ratio_precarite_log: number
    tee_log: number
    tee_mob: number
    precarite_logement: number
    NA5AZ_sum: number
    NA5BE_sum: number
    NA5FZ_sum: number
    NA5GU_sum: number
    NA5OQ_sum: number
    s_geom_cstr_bati: number
    densite_bati: number
    clc_1_artificialise: number
    clc_2_agricole: number
    clc_3_foret_semiNaturel: number
    clc_4_humide: number
    clc_5_eau: number
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
    ratio_precarite_log?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    s_geom_cstr_bati?: true
    densite_bati?: true
    clc_1_artificialise?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
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
    ratio_precarite_log?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    s_geom_cstr_bati?: true
    densite_bati?: true
    clc_1_artificialise?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
  }

  export type Inconfort_thermiqueMinAggregateInputType = {
    index?: true
    code_commune?: true
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
    ratio_precarite_log?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    s_geom_cstr_bati?: true
    densite_bati?: true
    clc_1_artificialise?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
  }

  export type Inconfort_thermiqueMaxAggregateInputType = {
    index?: true
    code_commune?: true
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
    ratio_precarite_log?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    s_geom_cstr_bati?: true
    densite_bati?: true
    clc_1_artificialise?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
  }

  export type Inconfort_thermiqueCountAggregateInputType = {
    index?: true
    code_commune?: true
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
    ratio_precarite_log?: true
    tee_log?: true
    tee_mob?: true
    precarite_logement?: true
    NA5AZ_sum?: true
    NA5BE_sum?: true
    NA5FZ_sum?: true
    NA5GU_sum?: true
    NA5OQ_sum?: true
    s_geom_cstr_bati?: true
    densite_bati?: true
    clc_1_artificialise?: true
    clc_2_agricole?: true
    clc_3_foret_semiNaturel?: true
    clc_4_humide?: true
    clc_5_eau?: true
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
    index: number
    code_commune: string | null
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
    ratio_precarite_log: number | null
    tee_log: number | null
    tee_mob: number | null
    precarite_logement: number | null
    NA5AZ_sum: bigint | null
    NA5BE_sum: bigint | null
    NA5FZ_sum: bigint | null
    NA5GU_sum: bigint | null
    NA5OQ_sum: bigint | null
    s_geom_cstr_bati: number | null
    densite_bati: number | null
    clc_1_artificialise: number | null
    clc_2_agricole: number | null
    clc_3_foret_semiNaturel: number | null
    clc_4_humide: number | null
    clc_5_eau: number | null
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
    code_commune?: boolean
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
    ratio_precarite_log?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    NA5AZ_sum?: boolean
    NA5BE_sum?: boolean
    NA5FZ_sum?: boolean
    NA5GU_sum?: boolean
    NA5OQ_sum?: boolean
    s_geom_cstr_bati?: boolean
    densite_bati?: boolean
    clc_1_artificialise?: boolean
    clc_2_agricole?: boolean
    clc_3_foret_semiNaturel?: boolean
    clc_4_humide?: boolean
    clc_5_eau?: boolean
  }, ExtArgs["result"]["inconfort_thermique"]>

  export type inconfort_thermiqueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    index?: boolean
    code_commune?: boolean
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
    ratio_precarite_log?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    NA5AZ_sum?: boolean
    NA5BE_sum?: boolean
    NA5FZ_sum?: boolean
    NA5GU_sum?: boolean
    NA5OQ_sum?: boolean
    s_geom_cstr_bati?: boolean
    densite_bati?: boolean
    clc_1_artificialise?: boolean
    clc_2_agricole?: boolean
    clc_3_foret_semiNaturel?: boolean
    clc_4_humide?: boolean
    clc_5_eau?: boolean
  }, ExtArgs["result"]["inconfort_thermique"]>

  export type inconfort_thermiqueSelectScalar = {
    index?: boolean
    code_commune?: boolean
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
    ratio_precarite_log?: boolean
    tee_log?: boolean
    tee_mob?: boolean
    precarite_logement?: boolean
    NA5AZ_sum?: boolean
    NA5BE_sum?: boolean
    NA5FZ_sum?: boolean
    NA5GU_sum?: boolean
    NA5OQ_sum?: boolean
    s_geom_cstr_bati?: boolean
    densite_bati?: boolean
    clc_1_artificialise?: boolean
    clc_2_agricole?: boolean
    clc_3_foret_semiNaturel?: boolean
    clc_4_humide?: boolean
    clc_5_eau?: boolean
  }


  export type $inconfort_thermiquePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inconfort_thermique"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      index: number
      code_commune: string | null
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
      ratio_precarite_log: number | null
      tee_log: number | null
      tee_mob: number | null
      precarite_logement: number | null
      NA5AZ_sum: bigint | null
      NA5BE_sum: bigint | null
      NA5FZ_sum: bigint | null
      NA5GU_sum: bigint | null
      NA5OQ_sum: bigint | null
      s_geom_cstr_bati: number | null
      densite_bati: number | null
      clc_1_artificialise: number | null
      clc_2_agricole: number | null
      clc_3_foret_semiNaturel: number | null
      clc_4_humide: number | null
      clc_5_eau: number | null
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
    readonly index: FieldRef<"inconfort_thermique", 'Int'>
    readonly code_commune: FieldRef<"inconfort_thermique", 'String'>
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
    readonly ratio_precarite_log: FieldRef<"inconfort_thermique", 'Float'>
    readonly tee_log: FieldRef<"inconfort_thermique", 'Float'>
    readonly tee_mob: FieldRef<"inconfort_thermique", 'Float'>
    readonly precarite_logement: FieldRef<"inconfort_thermique", 'Float'>
    readonly NA5AZ_sum: FieldRef<"inconfort_thermique", 'BigInt'>
    readonly NA5BE_sum: FieldRef<"inconfort_thermique", 'BigInt'>
    readonly NA5FZ_sum: FieldRef<"inconfort_thermique", 'BigInt'>
    readonly NA5GU_sum: FieldRef<"inconfort_thermique", 'BigInt'>
    readonly NA5OQ_sum: FieldRef<"inconfort_thermique", 'BigInt'>
    readonly s_geom_cstr_bati: FieldRef<"inconfort_thermique", 'Float'>
    readonly densite_bati: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_1_artificialise: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_2_agricole: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_3_foret_semiNaturel: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_4_humide: FieldRef<"inconfort_thermique", 'Float'>
    readonly clc_5_eau: FieldRef<"inconfort_thermique", 'Float'>
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

  export type clc_2018_2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
     */
    findUnique<T extends clc_2018_2FindUniqueArgs>(args: SelectSubset<T, clc_2018_2FindUniqueArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Clc_2018_2 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {clc_2018_2FindUniqueOrThrowArgs} args - Arguments to find a Clc_2018_2
     * @example
     * // Get one Clc_2018_2
     * const clc_2018_2 = await prisma.clc_2018_2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends clc_2018_2FindUniqueOrThrowArgs>(args: SelectSubset<T, clc_2018_2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends clc_2018_2FindFirstArgs>(args?: SelectSubset<T, clc_2018_2FindFirstArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends clc_2018_2FindFirstOrThrowArgs>(args?: SelectSubset<T, clc_2018_2FindFirstOrThrowArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Clc_2018_2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_2018_2FindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends clc_2018_2FindManyArgs>(args?: SelectSubset<T, clc_2018_2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends clc_2018_2CreateArgs>(args: SelectSubset<T, clc_2018_2CreateArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Clc_2018_2s.
     * @param {clc_2018_2CreateManyArgs} args - Arguments to create many Clc_2018_2s.
     * @example
     * // Create many Clc_2018_2s
     * const clc_2018_2 = await prisma.clc_2018_2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends clc_2018_2CreateManyArgs>(args?: SelectSubset<T, clc_2018_2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clc_2018_2s and returns the data saved in the database.
     * @param {clc_2018_2CreateManyAndReturnArgs} args - Arguments to create many Clc_2018_2s.
     * @example
     * // Create many Clc_2018_2s
     * const clc_2018_2 = await prisma.clc_2018_2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clc_2018_2s and only return the `pk`
     * const clc_2018_2WithPkOnly = await prisma.clc_2018_2.createManyAndReturn({ 
     *   select: { pk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends clc_2018_2CreateManyAndReturnArgs>(args?: SelectSubset<T, clc_2018_2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends clc_2018_2DeleteArgs>(args: SelectSubset<T, clc_2018_2DeleteArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends clc_2018_2UpdateArgs>(args: SelectSubset<T, clc_2018_2UpdateArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends clc_2018_2DeleteManyArgs>(args?: SelectSubset<T, clc_2018_2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends clc_2018_2UpdateManyArgs>(args: SelectSubset<T, clc_2018_2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends clc_2018_2UpsertArgs>(args: SelectSubset<T, clc_2018_2UpsertArgs<ExtArgs>>): Prisma__clc_2018_2Client<$Result.GetResult<Prisma.$clc_2018_2Payload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
   * clc_2018_2 createManyAndReturn
   */
  export type clc_2018_2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_2018_2
     */
    select?: clc_2018_2SelectCreateManyAndReturn<ExtArgs> | null
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

  export type communes2SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
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
     */
    findUnique<T extends communes2FindUniqueArgs>(args: SelectSubset<T, communes2FindUniqueArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Communes2 that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {communes2FindUniqueOrThrowArgs} args - Arguments to find a Communes2
     * @example
     * // Get one Communes2
     * const communes2 = await prisma.communes2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends communes2FindUniqueOrThrowArgs>(args: SelectSubset<T, communes2FindUniqueOrThrowArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
     */
    findFirst<T extends communes2FindFirstArgs>(args?: SelectSubset<T, communes2FindFirstArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
     */
    findFirstOrThrow<T extends communes2FindFirstOrThrowArgs>(args?: SelectSubset<T, communes2FindFirstOrThrowArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Communes2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {communes2FindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends communes2FindManyArgs>(args?: SelectSubset<T, communes2FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "findMany">>

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
     */
    create<T extends communes2CreateArgs>(args: SelectSubset<T, communes2CreateArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Communes2s.
     * @param {communes2CreateManyArgs} args - Arguments to create many Communes2s.
     * @example
     * // Create many Communes2s
     * const communes2 = await prisma.communes2.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends communes2CreateManyArgs>(args?: SelectSubset<T, communes2CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Communes2s and returns the data saved in the database.
     * @param {communes2CreateManyAndReturnArgs} args - Arguments to create many Communes2s.
     * @example
     * // Create many Communes2s
     * const communes2 = await prisma.communes2.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Communes2s and only return the `pk`
     * const communes2WithPkOnly = await prisma.communes2.createManyAndReturn({ 
     *   select: { pk: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends communes2CreateManyAndReturnArgs>(args?: SelectSubset<T, communes2CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "createManyAndReturn">>

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
     */
    delete<T extends communes2DeleteArgs>(args: SelectSubset<T, communes2DeleteArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "delete">, never, ExtArgs>

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
     */
    update<T extends communes2UpdateArgs>(args: SelectSubset<T, communes2UpdateArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "update">, never, ExtArgs>

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
     */
    deleteMany<T extends communes2DeleteManyArgs>(args?: SelectSubset<T, communes2DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends communes2UpdateManyArgs>(args: SelectSubset<T, communes2UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    upsert<T extends communes2UpsertArgs>(args: SelectSubset<T, communes2UpsertArgs<ExtArgs>>): Prisma__communes2Client<$Result.GetResult<Prisma.$communes2Payload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
   * communes2 createManyAndReturn
   */
  export type communes2CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the communes2
     */
    select?: communes2SelectCreateManyAndReturn<ExtArgs> | null
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
    code_commune: 'code_commune',
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
    ratio_precarite_log: 'ratio_precarite_log',
    tee_log: 'tee_log',
    tee_mob: 'tee_mob',
    precarite_logement: 'precarite_logement',
    NA5AZ_sum: 'NA5AZ_sum',
    NA5BE_sum: 'NA5BE_sum',
    NA5FZ_sum: 'NA5FZ_sum',
    NA5GU_sum: 'NA5GU_sum',
    NA5OQ_sum: 'NA5OQ_sum',
    s_geom_cstr_bati: 's_geom_cstr_bati',
    densite_bati: 'densite_bati',
    clc_1_artificialise: 'clc_1_artificialise',
    clc_2_agricole: 'clc_2_agricole',
    clc_3_foret_semiNaturel: 'clc_3_foret_semiNaturel',
    clc_4_humide: 'clc_4_humide',
    clc_5_eau: 'clc_5_eau'
  };

  export type Inconfort_thermiqueScalarFieldEnum = (typeof Inconfort_thermiqueScalarFieldEnum)[keyof typeof Inconfort_thermiqueScalarFieldEnum]


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


  export const Spatial_ref_sysScalarFieldEnum: {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
  };

  export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    
  /**
   * Deep Input Types
   */


  export type inconfort_thermiqueWhereInput = {
    AND?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    OR?: inconfort_thermiqueWhereInput[]
    NOT?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    index?: IntFilter<"inconfort_thermique"> | number
    code_commune?: StringNullableFilter<"inconfort_thermique"> | string | null
    libelle_geographique?: StringNullableFilter<"inconfort_thermique"> | string | null
    epci?: StringNullableFilter<"inconfort_thermique"> | string | null
    libelle_epci?: StringNullableFilter<"inconfort_thermique"> | string | null
    departement?: StringNullableFilter<"inconfort_thermique"> | string | null
    region?: IntNullableFilter<"inconfort_thermique"> | number | null
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
    ratio_precarite_log?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_log?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_mob?: FloatNullableFilter<"inconfort_thermique"> | number | null
    precarite_logement?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5AZ_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5BE_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5FZ_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5GU_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5OQ_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    s_geom_cstr_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    densite_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_1_artificialise?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_2_agricole?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_3_foret_semiNaturel?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_4_humide?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_5_eau?: FloatNullableFilter<"inconfort_thermique"> | number | null
  }

  export type inconfort_thermiqueOrderByWithRelationInput = {
    index?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
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
    ratio_precarite_log?: SortOrderInput | SortOrder
    tee_log?: SortOrderInput | SortOrder
    tee_mob?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    NA5AZ_sum?: SortOrderInput | SortOrder
    NA5BE_sum?: SortOrderInput | SortOrder
    NA5FZ_sum?: SortOrderInput | SortOrder
    NA5GU_sum?: SortOrderInput | SortOrder
    NA5OQ_sum?: SortOrderInput | SortOrder
    s_geom_cstr_bati?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    clc_1_artificialise?: SortOrderInput | SortOrder
    clc_2_agricole?: SortOrderInput | SortOrder
    clc_3_foret_semiNaturel?: SortOrderInput | SortOrder
    clc_4_humide?: SortOrderInput | SortOrder
    clc_5_eau?: SortOrderInput | SortOrder
  }

  export type inconfort_thermiqueWhereUniqueInput = Prisma.AtLeast<{
    index?: number
    AND?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    OR?: inconfort_thermiqueWhereInput[]
    NOT?: inconfort_thermiqueWhereInput | inconfort_thermiqueWhereInput[]
    code_commune?: StringNullableFilter<"inconfort_thermique"> | string | null
    libelle_geographique?: StringNullableFilter<"inconfort_thermique"> | string | null
    epci?: StringNullableFilter<"inconfort_thermique"> | string | null
    libelle_epci?: StringNullableFilter<"inconfort_thermique"> | string | null
    departement?: StringNullableFilter<"inconfort_thermique"> | string | null
    region?: IntNullableFilter<"inconfort_thermique"> | number | null
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
    ratio_precarite_log?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_log?: FloatNullableFilter<"inconfort_thermique"> | number | null
    tee_mob?: FloatNullableFilter<"inconfort_thermique"> | number | null
    precarite_logement?: FloatNullableFilter<"inconfort_thermique"> | number | null
    NA5AZ_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5BE_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5FZ_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5GU_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    NA5OQ_sum?: BigIntNullableFilter<"inconfort_thermique"> | bigint | number | null
    s_geom_cstr_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    densite_bati?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_1_artificialise?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_2_agricole?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_3_foret_semiNaturel?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_4_humide?: FloatNullableFilter<"inconfort_thermique"> | number | null
    clc_5_eau?: FloatNullableFilter<"inconfort_thermique"> | number | null
  }, "index">

  export type inconfort_thermiqueOrderByWithAggregationInput = {
    index?: SortOrder
    code_commune?: SortOrderInput | SortOrder
    libelle_geographique?: SortOrderInput | SortOrder
    epci?: SortOrderInput | SortOrder
    libelle_epci?: SortOrderInput | SortOrder
    departement?: SortOrderInput | SortOrder
    region?: SortOrderInput | SortOrder
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
    ratio_precarite_log?: SortOrderInput | SortOrder
    tee_log?: SortOrderInput | SortOrder
    tee_mob?: SortOrderInput | SortOrder
    precarite_logement?: SortOrderInput | SortOrder
    NA5AZ_sum?: SortOrderInput | SortOrder
    NA5BE_sum?: SortOrderInput | SortOrder
    NA5FZ_sum?: SortOrderInput | SortOrder
    NA5GU_sum?: SortOrderInput | SortOrder
    NA5OQ_sum?: SortOrderInput | SortOrder
    s_geom_cstr_bati?: SortOrderInput | SortOrder
    densite_bati?: SortOrderInput | SortOrder
    clc_1_artificialise?: SortOrderInput | SortOrder
    clc_2_agricole?: SortOrderInput | SortOrder
    clc_3_foret_semiNaturel?: SortOrderInput | SortOrder
    clc_4_humide?: SortOrderInput | SortOrder
    clc_5_eau?: SortOrderInput | SortOrder
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
    index?: IntWithAggregatesFilter<"inconfort_thermique"> | number
    code_commune?: StringNullableWithAggregatesFilter<"inconfort_thermique"> | string | null
    libelle_geographique?: StringNullableWithAggregatesFilter<"inconfort_thermique"> | string | null
    epci?: StringNullableWithAggregatesFilter<"inconfort_thermique"> | string | null
    libelle_epci?: StringNullableWithAggregatesFilter<"inconfort_thermique"> | string | null
    departement?: StringNullableWithAggregatesFilter<"inconfort_thermique"> | string | null
    region?: IntNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
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
    ratio_precarite_log?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    tee_log?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    tee_mob?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    precarite_logement?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    NA5AZ_sum?: BigIntNullableWithAggregatesFilter<"inconfort_thermique"> | bigint | number | null
    NA5BE_sum?: BigIntNullableWithAggregatesFilter<"inconfort_thermique"> | bigint | number | null
    NA5FZ_sum?: BigIntNullableWithAggregatesFilter<"inconfort_thermique"> | bigint | number | null
    NA5GU_sum?: BigIntNullableWithAggregatesFilter<"inconfort_thermique"> | bigint | number | null
    NA5OQ_sum?: BigIntNullableWithAggregatesFilter<"inconfort_thermique"> | bigint | number | null
    s_geom_cstr_bati?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    densite_bati?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_1_artificialise?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_2_agricole?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_3_foret_semiNaturel?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_4_humide?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
    clc_5_eau?: FloatNullableWithAggregatesFilter<"inconfort_thermique"> | number | null
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

  export type inconfort_thermiqueCreateInput = {
    index: number
    code_commune?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
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
    ratio_precarite_log?: number | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    NA5AZ_sum?: bigint | number | null
    NA5BE_sum?: bigint | number | null
    NA5FZ_sum?: bigint | number | null
    NA5GU_sum?: bigint | number | null
    NA5OQ_sum?: bigint | number | null
    s_geom_cstr_bati?: number | null
    densite_bati?: number | null
    clc_1_artificialise?: number | null
    clc_2_agricole?: number | null
    clc_3_foret_semiNaturel?: number | null
    clc_4_humide?: number | null
    clc_5_eau?: number | null
  }

  export type inconfort_thermiqueUncheckedCreateInput = {
    index: number
    code_commune?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
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
    ratio_precarite_log?: number | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    NA5AZ_sum?: bigint | number | null
    NA5BE_sum?: bigint | number | null
    NA5FZ_sum?: bigint | number | null
    NA5GU_sum?: bigint | number | null
    NA5OQ_sum?: bigint | number | null
    s_geom_cstr_bati?: number | null
    densite_bati?: number | null
    clc_1_artificialise?: number | null
    clc_2_agricole?: number | null
    clc_3_foret_semiNaturel?: number | null
    clc_4_humide?: number | null
    clc_5_eau?: number | null
  }

  export type inconfort_thermiqueUpdateInput = {
    index?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableIntFieldUpdateOperationsInput | number | null
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
    ratio_precarite_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5BE_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5FZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5GU_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5OQ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inconfort_thermiqueUncheckedUpdateInput = {
    index?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableIntFieldUpdateOperationsInput | number | null
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
    ratio_precarite_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5BE_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5FZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5GU_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5OQ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inconfort_thermiqueCreateManyInput = {
    index: number
    code_commune?: string | null
    libelle_geographique?: string | null
    epci?: string | null
    libelle_epci?: string | null
    departement?: string | null
    region?: number | null
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
    ratio_precarite_log?: number | null
    tee_log?: number | null
    tee_mob?: number | null
    precarite_logement?: number | null
    NA5AZ_sum?: bigint | number | null
    NA5BE_sum?: bigint | number | null
    NA5FZ_sum?: bigint | number | null
    NA5GU_sum?: bigint | number | null
    NA5OQ_sum?: bigint | number | null
    s_geom_cstr_bati?: number | null
    densite_bati?: number | null
    clc_1_artificialise?: number | null
    clc_2_agricole?: number | null
    clc_3_foret_semiNaturel?: number | null
    clc_4_humide?: number | null
    clc_5_eau?: number | null
  }

  export type inconfort_thermiqueUpdateManyMutationInput = {
    index?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableIntFieldUpdateOperationsInput | number | null
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
    ratio_precarite_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5BE_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5FZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5GU_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5OQ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type inconfort_thermiqueUncheckedUpdateManyInput = {
    index?: IntFieldUpdateOperationsInput | number
    code_commune?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_geographique?: NullableStringFieldUpdateOperationsInput | string | null
    epci?: NullableStringFieldUpdateOperationsInput | string | null
    libelle_epci?: NullableStringFieldUpdateOperationsInput | string | null
    departement?: NullableStringFieldUpdateOperationsInput | string | null
    region?: NullableIntFieldUpdateOperationsInput | number | null
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
    ratio_precarite_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_log?: NullableFloatFieldUpdateOperationsInput | number | null
    tee_mob?: NullableFloatFieldUpdateOperationsInput | number | null
    precarite_logement?: NullableFloatFieldUpdateOperationsInput | number | null
    NA5AZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5BE_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5FZ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5GU_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    NA5OQ_sum?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    s_geom_cstr_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    densite_bati?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_1_artificialise?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_2_agricole?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_3_foret_semiNaturel?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_4_humide?: NullableFloatFieldUpdateOperationsInput | number | null
    clc_5_eau?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inconfort_thermiqueCountOrderByAggregateInput = {
    index?: SortOrder
    code_commune?: SortOrder
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
    ratio_precarite_log?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    s_geom_cstr_bati?: SortOrder
    densite_bati?: SortOrder
    clc_1_artificialise?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
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
    ratio_precarite_log?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    s_geom_cstr_bati?: SortOrder
    densite_bati?: SortOrder
    clc_1_artificialise?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
  }

  export type inconfort_thermiqueMaxOrderByAggregateInput = {
    index?: SortOrder
    code_commune?: SortOrder
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
    ratio_precarite_log?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    s_geom_cstr_bati?: SortOrder
    densite_bati?: SortOrder
    clc_1_artificialise?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
  }

  export type inconfort_thermiqueMinOrderByAggregateInput = {
    index?: SortOrder
    code_commune?: SortOrder
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
    ratio_precarite_log?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    s_geom_cstr_bati?: SortOrder
    densite_bati?: SortOrder
    clc_1_artificialise?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
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
    ratio_precarite_log?: SortOrder
    tee_log?: SortOrder
    tee_mob?: SortOrder
    precarite_logement?: SortOrder
    NA5AZ_sum?: SortOrder
    NA5BE_sum?: SortOrder
    NA5FZ_sum?: SortOrder
    NA5GU_sum?: SortOrder
    NA5OQ_sum?: SortOrder
    s_geom_cstr_bati?: SortOrder
    densite_bati?: SortOrder
    clc_1_artificialise?: SortOrder
    clc_2_agricole?: SortOrder
    clc_3_foret_semiNaturel?: SortOrder
    clc_4_humide?: SortOrder
    clc_5_eau?: SortOrder
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
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

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
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

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use inconfort_thermiqueDefaultArgs instead
     */
    export type inconfort_thermiqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = inconfort_thermiqueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use clc_2018_2DefaultArgs instead
     */
    export type clc_2018_2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clc_2018_2DefaultArgs<ExtArgs>
    /**
     * @deprecated Use communes2DefaultArgs instead
     */
    export type communes2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = communes2DefaultArgs<ExtArgs>
    /**
     * @deprecated Use spatial_ref_sysDefaultArgs instead
     */
    export type spatial_ref_sysArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = spatial_ref_sysDefaultArgs<ExtArgs>

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