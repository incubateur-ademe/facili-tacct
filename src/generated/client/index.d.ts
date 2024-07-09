
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
 * Model clc_paris
 * 
 */
export type clc_paris = $Result.DefaultSelection<Prisma.$clc_parisPayload>
/**
 * Model test
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type test = $Result.DefaultSelection<Prisma.$testPayload>
/**
 * Model test2
 * 
 */
export type test2 = $Result.DefaultSelection<Prisma.$test2Payload>
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
 * // Fetch zero or more Clc_parises
 * const clc_parises = await prisma.clc_paris.findMany()
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
   * // Fetch zero or more Clc_parises
   * const clc_parises = await prisma.clc_paris.findMany()
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
   * `prisma.clc_paris`: Exposes CRUD operations for the **clc_paris** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clc_parises
    * const clc_parises = await prisma.clc_paris.findMany()
    * ```
    */
  get clc_paris(): Prisma.clc_parisDelegate<ExtArgs>;

  /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.testDelegate<ExtArgs>;

  /**
   * `prisma.test2`: Exposes CRUD operations for the **test2** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Test2s
    * const test2s = await prisma.test2.findMany()
    * ```
    */
  get test2(): Prisma.test2Delegate<ExtArgs>;

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
    clc_paris: 'clc_paris',
    test: 'test',
    test2: 'test2',
    spatial_ref_sys: 'spatial_ref_sys'
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
      modelProps: 'clc_paris' | 'test' | 'test2' | 'spatial_ref_sys'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      clc_paris: {
        payload: Prisma.$clc_parisPayload<ExtArgs>
        fields: Prisma.clc_parisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.clc_parisFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.clc_parisFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>
          }
          findFirst: {
            args: Prisma.clc_parisFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.clc_parisFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>
          }
          findMany: {
            args: Prisma.clc_parisFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>[]
          }
          create: {
            args: Prisma.clc_parisCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>
          }
          createMany: {
            args: Prisma.clc_parisCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.clc_parisDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>
          }
          update: {
            args: Prisma.clc_parisUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>
          }
          deleteMany: {
            args: Prisma.clc_parisDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.clc_parisUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.clc_parisUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$clc_parisPayload>
          }
          aggregate: {
            args: Prisma.Clc_parisAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClc_paris>
          }
          groupBy: {
            args: Prisma.clc_parisGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Clc_parisGroupByOutputType>[]
          }
          count: {
            args: Prisma.clc_parisCountArgs<ExtArgs>,
            result: $Utils.Optional<Clc_parisCountAggregateOutputType> | number
          }
        }
      }
      test: {
        payload: Prisma.$testPayload<ExtArgs>
        fields: Prisma.testFieldRefs
        operations: {
          findUnique: {
            args: Prisma.testFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.testFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findFirst: {
            args: Prisma.testFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.testFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          findMany: {
            args: Prisma.testFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>[]
          }
          delete: {
            args: Prisma.testDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          update: {
            args: Prisma.testUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$testPayload>
          }
          deleteMany: {
            args: Prisma.testDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.testUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          aggregate: {
            args: Prisma.TestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest>
          }
          groupBy: {
            args: Prisma.testGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TestGroupByOutputType>[]
          }
          count: {
            args: Prisma.testCountArgs<ExtArgs>,
            result: $Utils.Optional<TestCountAggregateOutputType> | number
          }
        }
      }
      test2: {
        payload: Prisma.$test2Payload<ExtArgs>
        fields: Prisma.test2FieldRefs
        operations: {
          findUnique: {
            args: Prisma.test2FindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.test2FindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          findFirst: {
            args: Prisma.test2FindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.test2FindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          findMany: {
            args: Prisma.test2FindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>[]
          }
          create: {
            args: Prisma.test2CreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          createMany: {
            args: Prisma.test2CreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.test2DeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          update: {
            args: Prisma.test2UpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          deleteMany: {
            args: Prisma.test2DeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.test2UpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.test2UpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$test2Payload>
          }
          aggregate: {
            args: Prisma.Test2AggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTest2>
          }
          groupBy: {
            args: Prisma.test2GroupByArgs<ExtArgs>,
            result: $Utils.Optional<Test2GroupByOutputType>[]
          }
          count: {
            args: Prisma.test2CountArgs<ExtArgs>,
            result: $Utils.Optional<Test2CountAggregateOutputType> | number
          }
        }
      }
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
   * Model clc_paris
   */

  export type AggregateClc_paris = {
    _count: Clc_parisCountAggregateOutputType | null
    _avg: Clc_parisAvgAggregateOutputType | null
    _sum: Clc_parisSumAggregateOutputType | null
    _min: Clc_parisMinAggregateOutputType | null
    _max: Clc_parisMaxAggregateOutputType | null
  }

  export type Clc_parisAvgAggregateOutputType = {
    pk: number | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_parisSumAggregateOutputType = {
    pk: number | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_parisMinAggregateOutputType = {
    pk: number | null
    class_2018: string | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_parisMaxAggregateOutputType = {
    pk: number | null
    class_2018: string | null
    shape_length: number | null
    shape_area: number | null
  }

  export type Clc_parisCountAggregateOutputType = {
    pk: number
    class_2018: number
    shape_length: number
    shape_area: number
    _all: number
  }


  export type Clc_parisAvgAggregateInputType = {
    pk?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_parisSumAggregateInputType = {
    pk?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_parisMinAggregateInputType = {
    pk?: true
    class_2018?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_parisMaxAggregateInputType = {
    pk?: true
    class_2018?: true
    shape_length?: true
    shape_area?: true
  }

  export type Clc_parisCountAggregateInputType = {
    pk?: true
    class_2018?: true
    shape_length?: true
    shape_area?: true
    _all?: true
  }

  export type Clc_parisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_paris to aggregate.
     */
    where?: clc_parisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_parises to fetch.
     */
    orderBy?: clc_parisOrderByWithRelationInput | clc_parisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: clc_parisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_parises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_parises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned clc_parises
    **/
    _count?: true | Clc_parisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Clc_parisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Clc_parisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Clc_parisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Clc_parisMaxAggregateInputType
  }

  export type GetClc_parisAggregateType<T extends Clc_parisAggregateArgs> = {
        [P in keyof T & keyof AggregateClc_paris]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClc_paris[P]>
      : GetScalarType<T[P], AggregateClc_paris[P]>
  }




  export type clc_parisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clc_parisWhereInput
    orderBy?: clc_parisOrderByWithAggregationInput | clc_parisOrderByWithAggregationInput[]
    by: Clc_parisScalarFieldEnum[] | Clc_parisScalarFieldEnum
    having?: clc_parisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Clc_parisCountAggregateInputType | true
    _avg?: Clc_parisAvgAggregateInputType
    _sum?: Clc_parisSumAggregateInputType
    _min?: Clc_parisMinAggregateInputType
    _max?: Clc_parisMaxAggregateInputType
  }

  export type Clc_parisGroupByOutputType = {
    pk: number
    class_2018: string | null
    shape_length: number | null
    shape_area: number | null
    _count: Clc_parisCountAggregateOutputType | null
    _avg: Clc_parisAvgAggregateOutputType | null
    _sum: Clc_parisSumAggregateOutputType | null
    _min: Clc_parisMinAggregateOutputType | null
    _max: Clc_parisMaxAggregateOutputType | null
  }

  type GetClc_parisGroupByPayload<T extends clc_parisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Clc_parisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Clc_parisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Clc_parisGroupByOutputType[P]>
            : GetScalarType<T[P], Clc_parisGroupByOutputType[P]>
        }
      >
    >


  export type clc_parisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    class_2018?: boolean
    shape_length?: boolean
    shape_area?: boolean
  }, ExtArgs["result"]["clc_paris"]>

  export type clc_parisSelectScalar = {
    pk?: boolean
    class_2018?: boolean
    shape_length?: boolean
    shape_area?: boolean
  }



  export type $clc_parisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "clc_paris"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      class_2018: string | null
      shape_length: number | null
      shape_area: number | null
    }, ExtArgs["result"]["clc_paris"]>
    composites: {}
  }


  type clc_parisGetPayload<S extends boolean | null | undefined | clc_parisDefaultArgs> = $Result.GetResult<Prisma.$clc_parisPayload, S>

  type clc_parisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<clc_parisFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Clc_parisCountAggregateInputType | true
    }

  export interface clc_parisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clc_paris'], meta: { name: 'clc_paris' } }
    /**
     * Find zero or one Clc_paris that matches the filter.
     * @param {clc_parisFindUniqueArgs} args - Arguments to find a Clc_paris
     * @example
     * // Get one Clc_paris
     * const clc_paris = await prisma.clc_paris.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends clc_parisFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clc_parisFindUniqueArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Clc_paris that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {clc_parisFindUniqueOrThrowArgs} args - Arguments to find a Clc_paris
     * @example
     * // Get one Clc_paris
     * const clc_paris = await prisma.clc_paris.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends clc_parisFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_parisFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Clc_paris that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_parisFindFirstArgs} args - Arguments to find a Clc_paris
     * @example
     * // Get one Clc_paris
     * const clc_paris = await prisma.clc_paris.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends clc_parisFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_parisFindFirstArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Clc_paris that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_parisFindFirstOrThrowArgs} args - Arguments to find a Clc_paris
     * @example
     * // Get one Clc_paris
     * const clc_paris = await prisma.clc_paris.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends clc_parisFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_parisFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clc_parises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_parisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clc_parises
     * const clc_parises = await prisma.clc_paris.findMany()
     * 
     * // Get first 10 Clc_parises
     * const clc_parises = await prisma.clc_paris.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const clc_parisWithPkOnly = await prisma.clc_paris.findMany({ select: { pk: true } })
     * 
    **/
    findMany<T extends clc_parisFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_parisFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Clc_paris.
     * @param {clc_parisCreateArgs} args - Arguments to create a Clc_paris.
     * @example
     * // Create one Clc_paris
     * const Clc_paris = await prisma.clc_paris.create({
     *   data: {
     *     // ... data to create a Clc_paris
     *   }
     * })
     * 
    **/
    create<T extends clc_parisCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clc_parisCreateArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clc_parises.
     *     @param {clc_parisCreateManyArgs} args - Arguments to create many Clc_parises.
     *     @example
     *     // Create many Clc_parises
     *     const clc_paris = await prisma.clc_paris.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends clc_parisCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_parisCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Clc_paris.
     * @param {clc_parisDeleteArgs} args - Arguments to delete one Clc_paris.
     * @example
     * // Delete one Clc_paris
     * const Clc_paris = await prisma.clc_paris.delete({
     *   where: {
     *     // ... filter to delete one Clc_paris
     *   }
     * })
     * 
    **/
    delete<T extends clc_parisDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clc_parisDeleteArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Clc_paris.
     * @param {clc_parisUpdateArgs} args - Arguments to update one Clc_paris.
     * @example
     * // Update one Clc_paris
     * const clc_paris = await prisma.clc_paris.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends clc_parisUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clc_parisUpdateArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clc_parises.
     * @param {clc_parisDeleteManyArgs} args - Arguments to filter Clc_parises to delete.
     * @example
     * // Delete a few Clc_parises
     * const { count } = await prisma.clc_paris.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends clc_parisDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clc_parisDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clc_parises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_parisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clc_parises
     * const clc_paris = await prisma.clc_paris.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends clc_parisUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clc_parisUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Clc_paris.
     * @param {clc_parisUpsertArgs} args - Arguments to update or create a Clc_paris.
     * @example
     * // Update or create a Clc_paris
     * const clc_paris = await prisma.clc_paris.upsert({
     *   create: {
     *     // ... data to create a Clc_paris
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clc_paris we want to update
     *   }
     * })
    **/
    upsert<T extends clc_parisUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clc_parisUpsertArgs<ExtArgs>>
    ): Prisma__clc_parisClient<$Result.GetResult<Prisma.$clc_parisPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clc_parises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_parisCountArgs} args - Arguments to filter Clc_parises to count.
     * @example
     * // Count the number of Clc_parises
     * const count = await prisma.clc_paris.count({
     *   where: {
     *     // ... the filter for the Clc_parises we want to count
     *   }
     * })
    **/
    count<T extends clc_parisCountArgs>(
      args?: Subset<T, clc_parisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Clc_parisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Clc_paris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Clc_parisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Clc_parisAggregateArgs>(args: Subset<T, Clc_parisAggregateArgs>): Prisma.PrismaPromise<GetClc_parisAggregateType<T>>

    /**
     * Group by Clc_paris.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clc_parisGroupByArgs} args - Group by arguments.
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
      T extends clc_parisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clc_parisGroupByArgs['orderBy'] }
        : { orderBy?: clc_parisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, clc_parisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClc_parisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the clc_paris model
   */
  readonly fields: clc_parisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clc_paris.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clc_parisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the clc_paris model
   */ 
  interface clc_parisFieldRefs {
    readonly pk: FieldRef<"clc_paris", 'Int'>
    readonly class_2018: FieldRef<"clc_paris", 'String'>
    readonly shape_length: FieldRef<"clc_paris", 'Float'>
    readonly shape_area: FieldRef<"clc_paris", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * clc_paris findUnique
   */
  export type clc_parisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * Filter, which clc_paris to fetch.
     */
    where: clc_parisWhereUniqueInput
  }

  /**
   * clc_paris findUniqueOrThrow
   */
  export type clc_parisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * Filter, which clc_paris to fetch.
     */
    where: clc_parisWhereUniqueInput
  }

  /**
   * clc_paris findFirst
   */
  export type clc_parisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * Filter, which clc_paris to fetch.
     */
    where?: clc_parisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_parises to fetch.
     */
    orderBy?: clc_parisOrderByWithRelationInput | clc_parisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_parises.
     */
    cursor?: clc_parisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_parises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_parises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_parises.
     */
    distinct?: Clc_parisScalarFieldEnum | Clc_parisScalarFieldEnum[]
  }

  /**
   * clc_paris findFirstOrThrow
   */
  export type clc_parisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * Filter, which clc_paris to fetch.
     */
    where?: clc_parisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_parises to fetch.
     */
    orderBy?: clc_parisOrderByWithRelationInput | clc_parisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for clc_parises.
     */
    cursor?: clc_parisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_parises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_parises.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of clc_parises.
     */
    distinct?: Clc_parisScalarFieldEnum | Clc_parisScalarFieldEnum[]
  }

  /**
   * clc_paris findMany
   */
  export type clc_parisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * Filter, which clc_parises to fetch.
     */
    where?: clc_parisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of clc_parises to fetch.
     */
    orderBy?: clc_parisOrderByWithRelationInput | clc_parisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing clc_parises.
     */
    cursor?: clc_parisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` clc_parises from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` clc_parises.
     */
    skip?: number
    distinct?: Clc_parisScalarFieldEnum | Clc_parisScalarFieldEnum[]
  }

  /**
   * clc_paris create
   */
  export type clc_parisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * The data needed to create a clc_paris.
     */
    data?: XOR<clc_parisCreateInput, clc_parisUncheckedCreateInput>
  }

  /**
   * clc_paris createMany
   */
  export type clc_parisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clc_parises.
     */
    data: clc_parisCreateManyInput | clc_parisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * clc_paris update
   */
  export type clc_parisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * The data needed to update a clc_paris.
     */
    data: XOR<clc_parisUpdateInput, clc_parisUncheckedUpdateInput>
    /**
     * Choose, which clc_paris to update.
     */
    where: clc_parisWhereUniqueInput
  }

  /**
   * clc_paris updateMany
   */
  export type clc_parisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clc_parises.
     */
    data: XOR<clc_parisUpdateManyMutationInput, clc_parisUncheckedUpdateManyInput>
    /**
     * Filter which clc_parises to update
     */
    where?: clc_parisWhereInput
  }

  /**
   * clc_paris upsert
   */
  export type clc_parisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * The filter to search for the clc_paris to update in case it exists.
     */
    where: clc_parisWhereUniqueInput
    /**
     * In case the clc_paris found by the `where` argument doesn't exist, create a new clc_paris with this data.
     */
    create: XOR<clc_parisCreateInput, clc_parisUncheckedCreateInput>
    /**
     * In case the clc_paris was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clc_parisUpdateInput, clc_parisUncheckedUpdateInput>
  }

  /**
   * clc_paris delete
   */
  export type clc_parisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
    /**
     * Filter which clc_paris to delete.
     */
    where: clc_parisWhereUniqueInput
  }

  /**
   * clc_paris deleteMany
   */
  export type clc_parisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clc_parises to delete
     */
    where?: clc_parisWhereInput
  }

  /**
   * clc_paris without action
   */
  export type clc_parisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clc_paris
     */
    select?: clc_parisSelect<ExtArgs> | null
  }


  /**
   * Model test
   */

  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    Shape_Length: number | null
    Shape_Area: number | null
    pk: number | null
  }

  export type TestSumAggregateOutputType = {
    Shape_Length: number | null
    Shape_Area: number | null
    pk: number | null
  }

  export type TestMinAggregateOutputType = {
    class_2018: string | null
    Shape_Length: number | null
    Shape_Area: number | null
    pk: number | null
  }

  export type TestMaxAggregateOutputType = {
    class_2018: string | null
    Shape_Length: number | null
    Shape_Area: number | null
    pk: number | null
  }

  export type TestCountAggregateOutputType = {
    class_2018: number
    Shape_Length: number
    Shape_Area: number
    pk: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    Shape_Length?: true
    Shape_Area?: true
    pk?: true
  }

  export type TestSumAggregateInputType = {
    Shape_Length?: true
    Shape_Area?: true
    pk?: true
  }

  export type TestMinAggregateInputType = {
    class_2018?: true
    Shape_Length?: true
    Shape_Area?: true
    pk?: true
  }

  export type TestMaxAggregateInputType = {
    class_2018?: true
    Shape_Length?: true
    Shape_Area?: true
    pk?: true
  }

  export type TestCountAggregateInputType = {
    class_2018?: true
    Shape_Length?: true
    Shape_Area?: true
    pk?: true
    _all?: true
  }

  export type TestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test to aggregate.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type testGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: testWhereInput
    orderBy?: testOrderByWithAggregationInput | testOrderByWithAggregationInput[]
    by: TestScalarFieldEnum[] | TestScalarFieldEnum
    having?: testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }

  export type TestGroupByOutputType = {
    class_2018: string | null
    Shape_Length: number | null
    Shape_Area: number | null
    pk: number
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends testGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type testSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    class_2018?: boolean
    Shape_Length?: boolean
    Shape_Area?: boolean
    pk?: boolean
  }, ExtArgs["result"]["test"]>

  export type testSelectScalar = {
    class_2018?: boolean
    Shape_Length?: boolean
    Shape_Area?: boolean
    pk?: boolean
  }



  export type $testPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      class_2018: string | null
      Shape_Length: number | null
      Shape_Area: number | null
      pk: number
    }, ExtArgs["result"]["test"]>
    composites: {}
  }


  type testGetPayload<S extends boolean | null | undefined | testDefaultArgs> = $Result.GetResult<Prisma.$testPayload, S>

  type testCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<testFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TestCountAggregateInputType | true
    }

  export interface testDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test'], meta: { name: 'test' } }
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends testFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, testFindUniqueArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends testFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindFirstArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends testFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `class_2018`
     * const testWithClass_2018Only = await prisma.test.findMany({ select: { class_2018: true } })
     * 
    **/
    findMany<T extends testFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends testDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, testDeleteArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends testUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, testUpdateArgs<ExtArgs>>
    ): Prisma__testClient<$Result.GetResult<Prisma.$testPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends testDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, testDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends testUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, testUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): Prisma.PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testGroupByArgs} args - Group by arguments.
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
      T extends testGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: testGroupByArgs['orderBy'] }
        : { orderBy?: testGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, testGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test model
   */
  readonly fields: testFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__testClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the test model
   */ 
  interface testFieldRefs {
    readonly class_2018: FieldRef<"test", 'String'>
    readonly Shape_Length: FieldRef<"test", 'Float'>
    readonly Shape_Area: FieldRef<"test", 'Float'>
    readonly pk: FieldRef<"test", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * test findUnique
   */
  export type testFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where: testWhereUniqueInput
  }

  /**
   * test findFirst
   */
  export type testFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Filter, which test to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     */
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test findMany
   */
  export type testFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Filter, which tests to fetch.
     */
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     */
    orderBy?: testOrderByWithRelationInput | testOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tests.
     */
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     */
    skip?: number
    distinct?: TestScalarFieldEnum | TestScalarFieldEnum[]
  }

  /**
   * test update
   */
  export type testUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * The data needed to update a test.
     */
    data: XOR<testUpdateInput, testUncheckedUpdateInput>
    /**
     * Choose, which test to update.
     */
    where: testWhereUniqueInput
  }

  /**
   * test updateMany
   */
  export type testUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tests.
     */
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     */
    where?: testWhereInput
  }

  /**
   * test delete
   */
  export type testDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
    /**
     * Filter which test to delete.
     */
    where: testWhereUniqueInput
  }

  /**
   * test deleteMany
   */
  export type testDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tests to delete
     */
    where?: testWhereInput
  }

  /**
   * test without action
   */
  export type testDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test
     */
    select?: testSelect<ExtArgs> | null
  }


  /**
   * Model test2
   */

  export type AggregateTest2 = {
    _count: Test2CountAggregateOutputType | null
    _avg: Test2AvgAggregateOutputType | null
    _sum: Test2SumAggregateOutputType | null
    _min: Test2MinAggregateOutputType | null
    _max: Test2MaxAggregateOutputType | null
  }

  export type Test2AvgAggregateOutputType = {
    pk: number | null
    Shape_Length: number | null
    Shape_Area: number | null
  }

  export type Test2SumAggregateOutputType = {
    pk: number | null
    Shape_Length: number | null
    Shape_Area: number | null
  }

  export type Test2MinAggregateOutputType = {
    pk: number | null
    class_2018: string | null
    Shape_Length: number | null
    Shape_Area: number | null
  }

  export type Test2MaxAggregateOutputType = {
    pk: number | null
    class_2018: string | null
    Shape_Length: number | null
    Shape_Area: number | null
  }

  export type Test2CountAggregateOutputType = {
    pk: number
    class_2018: number
    Shape_Length: number
    Shape_Area: number
    _all: number
  }


  export type Test2AvgAggregateInputType = {
    pk?: true
    Shape_Length?: true
    Shape_Area?: true
  }

  export type Test2SumAggregateInputType = {
    pk?: true
    Shape_Length?: true
    Shape_Area?: true
  }

  export type Test2MinAggregateInputType = {
    pk?: true
    class_2018?: true
    Shape_Length?: true
    Shape_Area?: true
  }

  export type Test2MaxAggregateInputType = {
    pk?: true
    class_2018?: true
    Shape_Length?: true
    Shape_Area?: true
  }

  export type Test2CountAggregateInputType = {
    pk?: true
    class_2018?: true
    Shape_Length?: true
    Shape_Area?: true
    _all?: true
  }

  export type Test2AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test2 to aggregate.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned test2s
    **/
    _count?: true | Test2CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Test2AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Test2SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Test2MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Test2MaxAggregateInputType
  }

  export type GetTest2AggregateType<T extends Test2AggregateArgs> = {
        [P in keyof T & keyof AggregateTest2]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest2[P]>
      : GetScalarType<T[P], AggregateTest2[P]>
  }




  export type test2GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: test2WhereInput
    orderBy?: test2OrderByWithAggregationInput | test2OrderByWithAggregationInput[]
    by: Test2ScalarFieldEnum[] | Test2ScalarFieldEnum
    having?: test2ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Test2CountAggregateInputType | true
    _avg?: Test2AvgAggregateInputType
    _sum?: Test2SumAggregateInputType
    _min?: Test2MinAggregateInputType
    _max?: Test2MaxAggregateInputType
  }

  export type Test2GroupByOutputType = {
    pk: number
    class_2018: string | null
    Shape_Length: number | null
    Shape_Area: number | null
    _count: Test2CountAggregateOutputType | null
    _avg: Test2AvgAggregateOutputType | null
    _sum: Test2SumAggregateOutputType | null
    _min: Test2MinAggregateOutputType | null
    _max: Test2MaxAggregateOutputType | null
  }

  type GetTest2GroupByPayload<T extends test2GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Test2GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Test2GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Test2GroupByOutputType[P]>
            : GetScalarType<T[P], Test2GroupByOutputType[P]>
        }
      >
    >


  export type test2Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk?: boolean
    class_2018?: boolean
    Shape_Length?: boolean
    Shape_Area?: boolean
  }, ExtArgs["result"]["test2"]>

  export type test2SelectScalar = {
    pk?: boolean
    class_2018?: boolean
    Shape_Length?: boolean
    Shape_Area?: boolean
  }



  export type $test2Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "test2"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk: number
      class_2018: string | null
      Shape_Length: number | null
      Shape_Area: number | null
    }, ExtArgs["result"]["test2"]>
    composites: {}
  }


  type test2GetPayload<S extends boolean | null | undefined | test2DefaultArgs> = $Result.GetResult<Prisma.$test2Payload, S>

  type test2CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<test2FindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Test2CountAggregateInputType | true
    }

  export interface test2Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['test2'], meta: { name: 'test2' } }
    /**
     * Find zero or one Test2 that matches the filter.
     * @param {test2FindUniqueArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends test2FindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, test2FindUniqueArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Test2 that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {test2FindUniqueOrThrowArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends test2FindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test2FindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Test2 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2FindFirstArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends test2FindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, test2FindFirstArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Test2 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2FindFirstOrThrowArgs} args - Arguments to find a Test2
     * @example
     * // Get one Test2
     * const test2 = await prisma.test2.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends test2FindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, test2FindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Test2s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2FindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Test2s
     * const test2s = await prisma.test2.findMany()
     * 
     * // Get first 10 Test2s
     * const test2s = await prisma.test2.findMany({ take: 10 })
     * 
     * // Only select the `pk`
     * const test2WithPkOnly = await prisma.test2.findMany({ select: { pk: true } })
     * 
    **/
    findMany<T extends test2FindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test2FindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Test2.
     * @param {test2CreateArgs} args - Arguments to create a Test2.
     * @example
     * // Create one Test2
     * const Test2 = await prisma.test2.create({
     *   data: {
     *     // ... data to create a Test2
     *   }
     * })
     * 
    **/
    create<T extends test2CreateArgs<ExtArgs>>(
      args: SelectSubset<T, test2CreateArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Test2s.
     *     @param {test2CreateManyArgs} args - Arguments to create many Test2s.
     *     @example
     *     // Create many Test2s
     *     const test2 = await prisma.test2.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends test2CreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test2CreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Test2.
     * @param {test2DeleteArgs} args - Arguments to delete one Test2.
     * @example
     * // Delete one Test2
     * const Test2 = await prisma.test2.delete({
     *   where: {
     *     // ... filter to delete one Test2
     *   }
     * })
     * 
    **/
    delete<T extends test2DeleteArgs<ExtArgs>>(
      args: SelectSubset<T, test2DeleteArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Test2.
     * @param {test2UpdateArgs} args - Arguments to update one Test2.
     * @example
     * // Update one Test2
     * const test2 = await prisma.test2.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends test2UpdateArgs<ExtArgs>>(
      args: SelectSubset<T, test2UpdateArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Test2s.
     * @param {test2DeleteManyArgs} args - Arguments to filter Test2s to delete.
     * @example
     * // Delete a few Test2s
     * const { count } = await prisma.test2.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends test2DeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, test2DeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Test2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Test2s
     * const test2 = await prisma.test2.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends test2UpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, test2UpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Test2.
     * @param {test2UpsertArgs} args - Arguments to update or create a Test2.
     * @example
     * // Update or create a Test2
     * const test2 = await prisma.test2.upsert({
     *   create: {
     *     // ... data to create a Test2
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test2 we want to update
     *   }
     * })
    **/
    upsert<T extends test2UpsertArgs<ExtArgs>>(
      args: SelectSubset<T, test2UpsertArgs<ExtArgs>>
    ): Prisma__test2Client<$Result.GetResult<Prisma.$test2Payload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Test2s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2CountArgs} args - Arguments to filter Test2s to count.
     * @example
     * // Count the number of Test2s
     * const count = await prisma.test2.count({
     *   where: {
     *     // ... the filter for the Test2s we want to count
     *   }
     * })
    **/
    count<T extends test2CountArgs>(
      args?: Subset<T, test2CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Test2CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Test2AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Test2AggregateArgs>(args: Subset<T, Test2AggregateArgs>): Prisma.PrismaPromise<GetTest2AggregateType<T>>

    /**
     * Group by Test2.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {test2GroupByArgs} args - Group by arguments.
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
      T extends test2GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: test2GroupByArgs['orderBy'] }
        : { orderBy?: test2GroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, test2GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTest2GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the test2 model
   */
  readonly fields: test2FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for test2.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__test2Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the test2 model
   */ 
  interface test2FieldRefs {
    readonly pk: FieldRef<"test2", 'Int'>
    readonly class_2018: FieldRef<"test2", 'String'>
    readonly Shape_Length: FieldRef<"test2", 'Float'>
    readonly Shape_Area: FieldRef<"test2", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * test2 findUnique
   */
  export type test2FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 findUniqueOrThrow
   */
  export type test2FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 findFirst
   */
  export type test2FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test2s.
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test2s.
     */
    distinct?: Test2ScalarFieldEnum | Test2ScalarFieldEnum[]
  }

  /**
   * test2 findFirstOrThrow
   */
  export type test2FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Filter, which test2 to fetch.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for test2s.
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of test2s.
     */
    distinct?: Test2ScalarFieldEnum | Test2ScalarFieldEnum[]
  }

  /**
   * test2 findMany
   */
  export type test2FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Filter, which test2s to fetch.
     */
    where?: test2WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of test2s to fetch.
     */
    orderBy?: test2OrderByWithRelationInput | test2OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing test2s.
     */
    cursor?: test2WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` test2s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` test2s.
     */
    skip?: number
    distinct?: Test2ScalarFieldEnum | Test2ScalarFieldEnum[]
  }

  /**
   * test2 create
   */
  export type test2CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * The data needed to create a test2.
     */
    data?: XOR<test2CreateInput, test2UncheckedCreateInput>
  }

  /**
   * test2 createMany
   */
  export type test2CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many test2s.
     */
    data: test2CreateManyInput | test2CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * test2 update
   */
  export type test2UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * The data needed to update a test2.
     */
    data: XOR<test2UpdateInput, test2UncheckedUpdateInput>
    /**
     * Choose, which test2 to update.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 updateMany
   */
  export type test2UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update test2s.
     */
    data: XOR<test2UpdateManyMutationInput, test2UncheckedUpdateManyInput>
    /**
     * Filter which test2s to update
     */
    where?: test2WhereInput
  }

  /**
   * test2 upsert
   */
  export type test2UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * The filter to search for the test2 to update in case it exists.
     */
    where: test2WhereUniqueInput
    /**
     * In case the test2 found by the `where` argument doesn't exist, create a new test2 with this data.
     */
    create: XOR<test2CreateInput, test2UncheckedCreateInput>
    /**
     * In case the test2 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<test2UpdateInput, test2UncheckedUpdateInput>
  }

  /**
   * test2 delete
   */
  export type test2DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
    /**
     * Filter which test2 to delete.
     */
    where: test2WhereUniqueInput
  }

  /**
   * test2 deleteMany
   */
  export type test2DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which test2s to delete
     */
    where?: test2WhereInput
  }

  /**
   * test2 without action
   */
  export type test2DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the test2
     */
    select?: test2Select<ExtArgs> | null
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Clc_parisScalarFieldEnum: {
    pk: 'pk',
    class_2018: 'class_2018',
    shape_length: 'shape_length',
    shape_area: 'shape_area'
  };

  export type Clc_parisScalarFieldEnum = (typeof Clc_parisScalarFieldEnum)[keyof typeof Clc_parisScalarFieldEnum]


  export const TestScalarFieldEnum: {
    class_2018: 'class_2018',
    Shape_Length: 'Shape_Length',
    Shape_Area: 'Shape_Area',
    pk: 'pk'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const Test2ScalarFieldEnum: {
    pk: 'pk',
    class_2018: 'class_2018',
    Shape_Length: 'Shape_Length',
    Shape_Area: 'Shape_Area'
  };

  export type Test2ScalarFieldEnum = (typeof Test2ScalarFieldEnum)[keyof typeof Test2ScalarFieldEnum]


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
   * Deep Input Types
   */


  export type clc_parisWhereInput = {
    AND?: clc_parisWhereInput | clc_parisWhereInput[]
    OR?: clc_parisWhereInput[]
    NOT?: clc_parisWhereInput | clc_parisWhereInput[]
    pk?: IntFilter<"clc_paris"> | number
    class_2018?: StringNullableFilter<"clc_paris"> | string | null
    shape_length?: FloatNullableFilter<"clc_paris"> | number | null
    shape_area?: FloatNullableFilter<"clc_paris"> | number | null
  }

  export type clc_parisOrderByWithRelationInput = {
    pk?: SortOrder
    class_2018?: SortOrderInput | SortOrder
    shape_length?: SortOrderInput | SortOrder
    shape_area?: SortOrderInput | SortOrder
  }

  export type clc_parisWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: clc_parisWhereInput | clc_parisWhereInput[]
    OR?: clc_parisWhereInput[]
    NOT?: clc_parisWhereInput | clc_parisWhereInput[]
    class_2018?: StringNullableFilter<"clc_paris"> | string | null
    shape_length?: FloatNullableFilter<"clc_paris"> | number | null
    shape_area?: FloatNullableFilter<"clc_paris"> | number | null
  }, "pk">

  export type clc_parisOrderByWithAggregationInput = {
    pk?: SortOrder
    class_2018?: SortOrderInput | SortOrder
    shape_length?: SortOrderInput | SortOrder
    shape_area?: SortOrderInput | SortOrder
    _count?: clc_parisCountOrderByAggregateInput
    _avg?: clc_parisAvgOrderByAggregateInput
    _max?: clc_parisMaxOrderByAggregateInput
    _min?: clc_parisMinOrderByAggregateInput
    _sum?: clc_parisSumOrderByAggregateInput
  }

  export type clc_parisScalarWhereWithAggregatesInput = {
    AND?: clc_parisScalarWhereWithAggregatesInput | clc_parisScalarWhereWithAggregatesInput[]
    OR?: clc_parisScalarWhereWithAggregatesInput[]
    NOT?: clc_parisScalarWhereWithAggregatesInput | clc_parisScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"clc_paris"> | number
    class_2018?: StringNullableWithAggregatesFilter<"clc_paris"> | string | null
    shape_length?: FloatNullableWithAggregatesFilter<"clc_paris"> | number | null
    shape_area?: FloatNullableWithAggregatesFilter<"clc_paris"> | number | null
  }

  export type testWhereInput = {
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    class_2018?: StringNullableFilter<"test"> | string | null
    Shape_Length?: FloatNullableFilter<"test"> | number | null
    Shape_Area?: FloatNullableFilter<"test"> | number | null
    pk?: IntFilter<"test"> | number
  }

  export type testOrderByWithRelationInput = {
    class_2018?: SortOrderInput | SortOrder
    Shape_Length?: SortOrderInput | SortOrder
    Shape_Area?: SortOrderInput | SortOrder
    pk?: SortOrder
  }

  export type testWhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: testWhereInput | testWhereInput[]
    OR?: testWhereInput[]
    NOT?: testWhereInput | testWhereInput[]
    class_2018?: StringNullableFilter<"test"> | string | null
    Shape_Length?: FloatNullableFilter<"test"> | number | null
    Shape_Area?: FloatNullableFilter<"test"> | number | null
  }, "pk">

  export type testOrderByWithAggregationInput = {
    class_2018?: SortOrderInput | SortOrder
    Shape_Length?: SortOrderInput | SortOrder
    Shape_Area?: SortOrderInput | SortOrder
    pk?: SortOrder
    _count?: testCountOrderByAggregateInput
    _avg?: testAvgOrderByAggregateInput
    _max?: testMaxOrderByAggregateInput
    _min?: testMinOrderByAggregateInput
    _sum?: testSumOrderByAggregateInput
  }

  export type testScalarWhereWithAggregatesInput = {
    AND?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    OR?: testScalarWhereWithAggregatesInput[]
    NOT?: testScalarWhereWithAggregatesInput | testScalarWhereWithAggregatesInput[]
    class_2018?: StringNullableWithAggregatesFilter<"test"> | string | null
    Shape_Length?: FloatNullableWithAggregatesFilter<"test"> | number | null
    Shape_Area?: FloatNullableWithAggregatesFilter<"test"> | number | null
    pk?: IntWithAggregatesFilter<"test"> | number
  }

  export type test2WhereInput = {
    AND?: test2WhereInput | test2WhereInput[]
    OR?: test2WhereInput[]
    NOT?: test2WhereInput | test2WhereInput[]
    pk?: IntFilter<"test2"> | number
    class_2018?: StringNullableFilter<"test2"> | string | null
    Shape_Length?: FloatNullableFilter<"test2"> | number | null
    Shape_Area?: FloatNullableFilter<"test2"> | number | null
  }

  export type test2OrderByWithRelationInput = {
    pk?: SortOrder
    class_2018?: SortOrderInput | SortOrder
    Shape_Length?: SortOrderInput | SortOrder
    Shape_Area?: SortOrderInput | SortOrder
  }

  export type test2WhereUniqueInput = Prisma.AtLeast<{
    pk?: number
    AND?: test2WhereInput | test2WhereInput[]
    OR?: test2WhereInput[]
    NOT?: test2WhereInput | test2WhereInput[]
    class_2018?: StringNullableFilter<"test2"> | string | null
    Shape_Length?: FloatNullableFilter<"test2"> | number | null
    Shape_Area?: FloatNullableFilter<"test2"> | number | null
  }, "pk">

  export type test2OrderByWithAggregationInput = {
    pk?: SortOrder
    class_2018?: SortOrderInput | SortOrder
    Shape_Length?: SortOrderInput | SortOrder
    Shape_Area?: SortOrderInput | SortOrder
    _count?: test2CountOrderByAggregateInput
    _avg?: test2AvgOrderByAggregateInput
    _max?: test2MaxOrderByAggregateInput
    _min?: test2MinOrderByAggregateInput
    _sum?: test2SumOrderByAggregateInput
  }

  export type test2ScalarWhereWithAggregatesInput = {
    AND?: test2ScalarWhereWithAggregatesInput | test2ScalarWhereWithAggregatesInput[]
    OR?: test2ScalarWhereWithAggregatesInput[]
    NOT?: test2ScalarWhereWithAggregatesInput | test2ScalarWhereWithAggregatesInput[]
    pk?: IntWithAggregatesFilter<"test2"> | number
    class_2018?: StringNullableWithAggregatesFilter<"test2"> | string | null
    Shape_Length?: FloatNullableWithAggregatesFilter<"test2"> | number | null
    Shape_Area?: FloatNullableWithAggregatesFilter<"test2"> | number | null
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

  export type clc_parisCreateInput = {
    class_2018?: string | null
    shape_length?: number | null
    shape_area?: number | null
  }

  export type clc_parisUncheckedCreateInput = {
    pk?: number
    class_2018?: string | null
    shape_length?: number | null
    shape_area?: number | null
  }

  export type clc_parisUpdateInput = {
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type clc_parisUncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type clc_parisCreateManyInput = {
    pk?: number
    class_2018?: string | null
    shape_length?: number | null
    shape_area?: number | null
  }

  export type clc_parisUpdateManyMutationInput = {
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type clc_parisUncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    shape_length?: NullableFloatFieldUpdateOperationsInput | number | null
    shape_area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type testUpdateInput = {
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
    pk?: IntFieldUpdateOperationsInput | number
  }

  export type testUncheckedUpdateInput = {
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
    pk?: IntFieldUpdateOperationsInput | number
  }

  export type testUpdateManyMutationInput = {
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
    pk?: IntFieldUpdateOperationsInput | number
  }

  export type testUncheckedUpdateManyInput = {
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
    pk?: IntFieldUpdateOperationsInput | number
  }

  export type test2CreateInput = {
    pk?: number
    class_2018?: string | null
    Shape_Length?: number | null
    Shape_Area?: number | null
  }

  export type test2UncheckedCreateInput = {
    pk?: number
    class_2018?: string | null
    Shape_Length?: number | null
    Shape_Area?: number | null
  }

  export type test2UpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type test2UncheckedUpdateInput = {
    pk?: IntFieldUpdateOperationsInput | number
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type test2CreateManyInput = {
    pk?: number
    class_2018?: string | null
    Shape_Length?: number | null
    Shape_Area?: number | null
  }

  export type test2UpdateManyMutationInput = {
    pk?: IntFieldUpdateOperationsInput | number
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type test2UncheckedUpdateManyInput = {
    pk?: IntFieldUpdateOperationsInput | number
    class_2018?: NullableStringFieldUpdateOperationsInput | string | null
    Shape_Length?: NullableFloatFieldUpdateOperationsInput | number | null
    Shape_Area?: NullableFloatFieldUpdateOperationsInput | number | null
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

  export type clc_parisCountOrderByAggregateInput = {
    pk?: SortOrder
    class_2018?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type clc_parisAvgOrderByAggregateInput = {
    pk?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type clc_parisMaxOrderByAggregateInput = {
    pk?: SortOrder
    class_2018?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type clc_parisMinOrderByAggregateInput = {
    pk?: SortOrder
    class_2018?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
  }

  export type clc_parisSumOrderByAggregateInput = {
    pk?: SortOrder
    shape_length?: SortOrder
    shape_area?: SortOrder
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

  export type testCountOrderByAggregateInput = {
    class_2018?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
    pk?: SortOrder
  }

  export type testAvgOrderByAggregateInput = {
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
    pk?: SortOrder
  }

  export type testMaxOrderByAggregateInput = {
    class_2018?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
    pk?: SortOrder
  }

  export type testMinOrderByAggregateInput = {
    class_2018?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
    pk?: SortOrder
  }

  export type testSumOrderByAggregateInput = {
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
    pk?: SortOrder
  }

  export type test2CountOrderByAggregateInput = {
    pk?: SortOrder
    class_2018?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
  }

  export type test2AvgOrderByAggregateInput = {
    pk?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
  }

  export type test2MaxOrderByAggregateInput = {
    pk?: SortOrder
    class_2018?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
  }

  export type test2MinOrderByAggregateInput = {
    pk?: SortOrder
    class_2018?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
  }

  export type test2SumOrderByAggregateInput = {
    pk?: SortOrder
    Shape_Length?: SortOrder
    Shape_Area?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
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
     * @deprecated Use clc_parisDefaultArgs instead
     */
    export type clc_parisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = clc_parisDefaultArgs<ExtArgs>
    /**
     * @deprecated Use testDefaultArgs instead
     */
    export type testArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = testDefaultArgs<ExtArgs>
    /**
     * @deprecated Use test2DefaultArgs instead
     */
    export type test2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = test2DefaultArgs<ExtArgs>
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