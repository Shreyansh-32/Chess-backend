
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
 * Model Player
 * 
 */
export type Player = $Result.DefaultSelection<Prisma.$PlayerPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Move
 * 
 */
export type Move = $Result.DefaultSelection<Prisma.$MovePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Players
 * const players = await prisma.player.findMany()
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
   * // Fetch zero or more Players
   * const players = await prisma.player.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.player`: Exposes CRUD operations for the **Player** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Players
    * const players = await prisma.player.findMany()
    * ```
    */
  get player(): Prisma.PlayerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.move`: Exposes CRUD operations for the **Move** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Moves
    * const moves = await prisma.move.findMany()
    * ```
    */
  get move(): Prisma.MoveDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Player: 'Player',
    Game: 'Game',
    Move: 'Move'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "player" | "game" | "move"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Player: {
        payload: Prisma.$PlayerPayload<ExtArgs>
        fields: Prisma.PlayerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlayerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlayerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findFirst: {
            args: Prisma.PlayerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlayerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          findMany: {
            args: Prisma.PlayerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          create: {
            args: Prisma.PlayerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          createMany: {
            args: Prisma.PlayerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlayerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          delete: {
            args: Prisma.PlayerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          update: {
            args: Prisma.PlayerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          deleteMany: {
            args: Prisma.PlayerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlayerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlayerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>[]
          }
          upsert: {
            args: Prisma.PlayerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlayerPayload>
          }
          aggregate: {
            args: Prisma.PlayerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlayer>
          }
          groupBy: {
            args: Prisma.PlayerGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlayerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlayerCountArgs<ExtArgs>
            result: $Utils.Optional<PlayerCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Move: {
        payload: Prisma.$MovePayload<ExtArgs>
        fields: Prisma.MoveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findFirst: {
            args: Prisma.MoveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          findMany: {
            args: Prisma.MoveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          create: {
            args: Prisma.MoveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          createMany: {
            args: Prisma.MoveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MoveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          delete: {
            args: Prisma.MoveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          update: {
            args: Prisma.MoveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          deleteMany: {
            args: Prisma.MoveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MoveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MoveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>[]
          }
          upsert: {
            args: Prisma.MoveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovePayload>
          }
          aggregate: {
            args: Prisma.MoveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMove>
          }
          groupBy: {
            args: Prisma.MoveGroupByArgs<ExtArgs>
            result: $Utils.Optional<MoveGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoveCountArgs<ExtArgs>
            result: $Utils.Optional<MoveCountAggregateOutputType> | number
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    player?: PlayerOmit
    game?: GameOmit
    move?: MoveOmit
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
    | 'updateManyAndReturn'
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
   * Count Type PlayerCountOutputType
   */

  export type PlayerCountOutputType = {
    gamesAsPlayer1: number
    gamesAsPlayer2: number
    moves: number
  }

  export type PlayerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsPlayer1?: boolean | PlayerCountOutputTypeCountGamesAsPlayer1Args
    gamesAsPlayer2?: boolean | PlayerCountOutputTypeCountGamesAsPlayer2Args
    moves?: boolean | PlayerCountOutputTypeCountMovesArgs
  }

  // Custom InputTypes
  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlayerCountOutputType
     */
    select?: PlayerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountGamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountGamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
  }

  /**
   * PlayerCountOutputType without action
   */
  export type PlayerCountOutputTypeCountMovesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Count Type GameCountOutputType
   */

  export type GameCountOutputType = {
    move: number
  }

  export type GameCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    move?: boolean | GameCountOutputTypeCountMoveArgs
  }

  // Custom InputTypes
  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameCountOutputType
     */
    select?: GameCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GameCountOutputType without action
   */
  export type GameCountOutputTypeCountMoveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Player
   */

  export type AggregatePlayer = {
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  export type PlayerAvgAggregateOutputType = {
    id: number | null
  }

  export type PlayerSumAggregateOutputType = {
    id: number | null
  }

  export type PlayerMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type PlayerMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type PlayerCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type PlayerAvgAggregateInputType = {
    id?: true
  }

  export type PlayerSumAggregateInputType = {
    id?: true
  }

  export type PlayerMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type PlayerMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type PlayerCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type PlayerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Player to aggregate.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Players
    **/
    _count?: true | PlayerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlayerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlayerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlayerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlayerMaxAggregateInputType
  }

  export type GetPlayerAggregateType<T extends PlayerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlayer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlayer[P]>
      : GetScalarType<T[P], AggregatePlayer[P]>
  }




  export type PlayerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlayerWhereInput
    orderBy?: PlayerOrderByWithAggregationInput | PlayerOrderByWithAggregationInput[]
    by: PlayerScalarFieldEnum[] | PlayerScalarFieldEnum
    having?: PlayerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlayerCountAggregateInputType | true
    _avg?: PlayerAvgAggregateInputType
    _sum?: PlayerSumAggregateInputType
    _min?: PlayerMinAggregateInputType
    _max?: PlayerMaxAggregateInputType
  }

  export type PlayerGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: PlayerCountAggregateOutputType | null
    _avg: PlayerAvgAggregateOutputType | null
    _sum: PlayerSumAggregateOutputType | null
    _min: PlayerMinAggregateOutputType | null
    _max: PlayerMaxAggregateOutputType | null
  }

  type GetPlayerGroupByPayload<T extends PlayerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlayerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlayerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlayerGroupByOutputType[P]>
            : GetScalarType<T[P], PlayerGroupByOutputType[P]>
        }
      >
    >


  export type PlayerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    gamesAsPlayer1?: boolean | Player$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | Player$gamesAsPlayer2Args<ExtArgs>
    moves?: boolean | Player$movesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
  }, ExtArgs["result"]["player"]>

  export type PlayerSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type PlayerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["player"]>
  export type PlayerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gamesAsPlayer1?: boolean | Player$gamesAsPlayer1Args<ExtArgs>
    gamesAsPlayer2?: boolean | Player$gamesAsPlayer2Args<ExtArgs>
    moves?: boolean | Player$movesArgs<ExtArgs>
    _count?: boolean | PlayerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlayerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlayerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlayerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Player"
    objects: {
      gamesAsPlayer1: Prisma.$GamePayload<ExtArgs>[]
      gamesAsPlayer2: Prisma.$GamePayload<ExtArgs>[]
      moves: Prisma.$MovePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["player"]>
    composites: {}
  }

  type PlayerGetPayload<S extends boolean | null | undefined | PlayerDefaultArgs> = $Result.GetResult<Prisma.$PlayerPayload, S>

  type PlayerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlayerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlayerCountAggregateInputType | true
    }

  export interface PlayerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Player'], meta: { name: 'Player' } }
    /**
     * Find zero or one Player that matches the filter.
     * @param {PlayerFindUniqueArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlayerFindUniqueArgs>(args: SelectSubset<T, PlayerFindUniqueArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Player that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlayerFindUniqueOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlayerFindUniqueOrThrowArgs>(args: SelectSubset<T, PlayerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlayerFindFirstArgs>(args?: SelectSubset<T, PlayerFindFirstArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Player that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindFirstOrThrowArgs} args - Arguments to find a Player
     * @example
     * // Get one Player
     * const player = await prisma.player.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlayerFindFirstOrThrowArgs>(args?: SelectSubset<T, PlayerFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Players that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Players
     * const players = await prisma.player.findMany()
     * 
     * // Get first 10 Players
     * const players = await prisma.player.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playerWithIdOnly = await prisma.player.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlayerFindManyArgs>(args?: SelectSubset<T, PlayerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Player.
     * @param {PlayerCreateArgs} args - Arguments to create a Player.
     * @example
     * // Create one Player
     * const Player = await prisma.player.create({
     *   data: {
     *     // ... data to create a Player
     *   }
     * })
     * 
     */
    create<T extends PlayerCreateArgs>(args: SelectSubset<T, PlayerCreateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Players.
     * @param {PlayerCreateManyArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlayerCreateManyArgs>(args?: SelectSubset<T, PlayerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Players and returns the data saved in the database.
     * @param {PlayerCreateManyAndReturnArgs} args - Arguments to create many Players.
     * @example
     * // Create many Players
     * const player = await prisma.player.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlayerCreateManyAndReturnArgs>(args?: SelectSubset<T, PlayerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Player.
     * @param {PlayerDeleteArgs} args - Arguments to delete one Player.
     * @example
     * // Delete one Player
     * const Player = await prisma.player.delete({
     *   where: {
     *     // ... filter to delete one Player
     *   }
     * })
     * 
     */
    delete<T extends PlayerDeleteArgs>(args: SelectSubset<T, PlayerDeleteArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Player.
     * @param {PlayerUpdateArgs} args - Arguments to update one Player.
     * @example
     * // Update one Player
     * const player = await prisma.player.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlayerUpdateArgs>(args: SelectSubset<T, PlayerUpdateArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Players.
     * @param {PlayerDeleteManyArgs} args - Arguments to filter Players to delete.
     * @example
     * // Delete a few Players
     * const { count } = await prisma.player.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlayerDeleteManyArgs>(args?: SelectSubset<T, PlayerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlayerUpdateManyArgs>(args: SelectSubset<T, PlayerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Players and returns the data updated in the database.
     * @param {PlayerUpdateManyAndReturnArgs} args - Arguments to update many Players.
     * @example
     * // Update many Players
     * const player = await prisma.player.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Players and only return the `id`
     * const playerWithIdOnly = await prisma.player.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlayerUpdateManyAndReturnArgs>(args: SelectSubset<T, PlayerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Player.
     * @param {PlayerUpsertArgs} args - Arguments to update or create a Player.
     * @example
     * // Update or create a Player
     * const player = await prisma.player.upsert({
     *   create: {
     *     // ... data to create a Player
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Player we want to update
     *   }
     * })
     */
    upsert<T extends PlayerUpsertArgs>(args: SelectSubset<T, PlayerUpsertArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Players.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerCountArgs} args - Arguments to filter Players to count.
     * @example
     * // Count the number of Players
     * const count = await prisma.player.count({
     *   where: {
     *     // ... the filter for the Players we want to count
     *   }
     * })
    **/
    count<T extends PlayerCountArgs>(
      args?: Subset<T, PlayerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlayerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlayerAggregateArgs>(args: Subset<T, PlayerAggregateArgs>): Prisma.PrismaPromise<GetPlayerAggregateType<T>>

    /**
     * Group by Player.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlayerGroupByArgs} args - Group by arguments.
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
      T extends PlayerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlayerGroupByArgs['orderBy'] }
        : { orderBy?: PlayerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlayerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlayerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Player model
   */
  readonly fields: PlayerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Player.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlayerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gamesAsPlayer1<T extends Player$gamesAsPlayer1Args<ExtArgs> = {}>(args?: Subset<T, Player$gamesAsPlayer1Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    gamesAsPlayer2<T extends Player$gamesAsPlayer2Args<ExtArgs> = {}>(args?: Subset<T, Player$gamesAsPlayer2Args<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    moves<T extends Player$movesArgs<ExtArgs> = {}>(args?: Subset<T, Player$movesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Player model
   */
  interface PlayerFieldRefs {
    readonly id: FieldRef<"Player", 'Int'>
    readonly username: FieldRef<"Player", 'String'>
    readonly password: FieldRef<"Player", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Player findUnique
   */
  export type PlayerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findUniqueOrThrow
   */
  export type PlayerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player findFirst
   */
  export type PlayerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findFirstOrThrow
   */
  export type PlayerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Player to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Players.
     */
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player findMany
   */
  export type PlayerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter, which Players to fetch.
     */
    where?: PlayerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Players to fetch.
     */
    orderBy?: PlayerOrderByWithRelationInput | PlayerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Players.
     */
    cursor?: PlayerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Players from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Players.
     */
    skip?: number
    distinct?: PlayerScalarFieldEnum | PlayerScalarFieldEnum[]
  }

  /**
   * Player create
   */
  export type PlayerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to create a Player.
     */
    data: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
  }

  /**
   * Player createMany
   */
  export type PlayerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player createManyAndReturn
   */
  export type PlayerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to create many Players.
     */
    data: PlayerCreateManyInput | PlayerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Player update
   */
  export type PlayerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The data needed to update a Player.
     */
    data: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
    /**
     * Choose, which Player to update.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player updateMany
   */
  export type PlayerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player updateManyAndReturn
   */
  export type PlayerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * The data used to update Players.
     */
    data: XOR<PlayerUpdateManyMutationInput, PlayerUncheckedUpdateManyInput>
    /**
     * Filter which Players to update
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to update.
     */
    limit?: number
  }

  /**
   * Player upsert
   */
  export type PlayerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * The filter to search for the Player to update in case it exists.
     */
    where: PlayerWhereUniqueInput
    /**
     * In case the Player found by the `where` argument doesn't exist, create a new Player with this data.
     */
    create: XOR<PlayerCreateInput, PlayerUncheckedCreateInput>
    /**
     * In case the Player was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlayerUpdateInput, PlayerUncheckedUpdateInput>
  }

  /**
   * Player delete
   */
  export type PlayerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
    /**
     * Filter which Player to delete.
     */
    where: PlayerWhereUniqueInput
  }

  /**
   * Player deleteMany
   */
  export type PlayerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Players to delete
     */
    where?: PlayerWhereInput
    /**
     * Limit how many Players to delete.
     */
    limit?: number
  }

  /**
   * Player.gamesAsPlayer1
   */
  export type Player$gamesAsPlayer1Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Player.gamesAsPlayer2
   */
  export type Player$gamesAsPlayer2Args<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    where?: GameWhereInput
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    cursor?: GameWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Player.moves
   */
  export type Player$movesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Player without action
   */
  export type PlayerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Player
     */
    select?: PlayerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Player
     */
    omit?: PlayerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlayerInclude<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
    player1Id: number | null
    player2Id: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
    player1Id: number | null
    player2Id: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    player1Id: number | null
    player2Id: number | null
    status: boolean | null
    result: string | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    player1Id: number | null
    player2Id: number | null
    status: boolean | null
    result: string | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    player1Id: number
    player2Id: number
    status: number
    result: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    status?: true
    result?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    status?: true
    result?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    player1Id?: true
    player2Id?: true
    status?: true
    result?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    player1Id: number
    player2Id: number
    status: boolean
    result: string
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    result?: boolean
    player1?: boolean | PlayerDefaultArgs<ExtArgs>
    player2?: boolean | PlayerDefaultArgs<ExtArgs>
    move?: boolean | Game$moveArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    result?: boolean
    player1?: boolean | PlayerDefaultArgs<ExtArgs>
    player2?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    result?: boolean
    player1?: boolean | PlayerDefaultArgs<ExtArgs>
    player2?: boolean | PlayerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["game"]>

  export type GameSelectScalar = {
    id?: boolean
    player1Id?: boolean
    player2Id?: boolean
    status?: boolean
    result?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "player1Id" | "player2Id" | "status" | "result", ExtArgs["result"]["game"]>
  export type GameInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | PlayerDefaultArgs<ExtArgs>
    player2?: boolean | PlayerDefaultArgs<ExtArgs>
    move?: boolean | Game$moveArgs<ExtArgs>
    _count?: boolean | GameCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GameIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | PlayerDefaultArgs<ExtArgs>
    player2?: boolean | PlayerDefaultArgs<ExtArgs>
  }
  export type GameIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player1?: boolean | PlayerDefaultArgs<ExtArgs>
    player2?: boolean | PlayerDefaultArgs<ExtArgs>
  }

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {
      player1: Prisma.$PlayerPayload<ExtArgs>
      player2: Prisma.$PlayerPayload<ExtArgs>
      move: Prisma.$MovePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      player1Id: number
      player2Id: number
      status: boolean
      result: string
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Games and returns the data saved in the database.
     * @param {GameCreateManyAndReturnArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameCreateManyAndReturnArgs>(args?: SelectSubset<T, GameCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games and returns the data updated in the database.
     * @param {GameUpdateManyAndReturnArgs} args - Arguments to update many Games.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Games and only return the `id`
     * const gameWithIdOnly = await prisma.game.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GameUpdateManyAndReturnArgs>(args: SelectSubset<T, GameUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
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
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player1<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    player2<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    move<T extends Game$moveArgs<ExtArgs> = {}>(args?: Subset<T, Game$moveArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly player1Id: FieldRef<"Game", 'Int'>
    readonly player2Id: FieldRef<"Game", 'Int'>
    readonly status: FieldRef<"Game", 'Boolean'>
    readonly result: FieldRef<"Game", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game createManyAndReturn
   */
  export type GameCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game updateManyAndReturn
   */
  export type GameUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game.move
   */
  export type Game$moveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    cursor?: MoveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GameInclude<ExtArgs> | null
  }


  /**
   * Model Move
   */

  export type AggregateMove = {
    _count: MoveCountAggregateOutputType | null
    _avg: MoveAvgAggregateOutputType | null
    _sum: MoveSumAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  export type MoveAvgAggregateOutputType = {
    id: number | null
    playerId: number | null
    gameId: number | null
  }

  export type MoveSumAggregateOutputType = {
    id: number | null
    playerId: number | null
    gameId: number | null
  }

  export type MoveMinAggregateOutputType = {
    id: number | null
    to: string | null
    from: string | null
    moveTime: Date | null
    playerId: number | null
    gameId: number | null
  }

  export type MoveMaxAggregateOutputType = {
    id: number | null
    to: string | null
    from: string | null
    moveTime: Date | null
    playerId: number | null
    gameId: number | null
  }

  export type MoveCountAggregateOutputType = {
    id: number
    to: number
    from: number
    moveTime: number
    playerId: number
    gameId: number
    _all: number
  }


  export type MoveAvgAggregateInputType = {
    id?: true
    playerId?: true
    gameId?: true
  }

  export type MoveSumAggregateInputType = {
    id?: true
    playerId?: true
    gameId?: true
  }

  export type MoveMinAggregateInputType = {
    id?: true
    to?: true
    from?: true
    moveTime?: true
    playerId?: true
    gameId?: true
  }

  export type MoveMaxAggregateInputType = {
    id?: true
    to?: true
    from?: true
    moveTime?: true
    playerId?: true
    gameId?: true
  }

  export type MoveCountAggregateInputType = {
    id?: true
    to?: true
    from?: true
    moveTime?: true
    playerId?: true
    gameId?: true
    _all?: true
  }

  export type MoveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Move to aggregate.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Moves
    **/
    _count?: true | MoveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoveMaxAggregateInputType
  }

  export type GetMoveAggregateType<T extends MoveAggregateArgs> = {
        [P in keyof T & keyof AggregateMove]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMove[P]>
      : GetScalarType<T[P], AggregateMove[P]>
  }




  export type MoveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoveWhereInput
    orderBy?: MoveOrderByWithAggregationInput | MoveOrderByWithAggregationInput[]
    by: MoveScalarFieldEnum[] | MoveScalarFieldEnum
    having?: MoveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoveCountAggregateInputType | true
    _avg?: MoveAvgAggregateInputType
    _sum?: MoveSumAggregateInputType
    _min?: MoveMinAggregateInputType
    _max?: MoveMaxAggregateInputType
  }

  export type MoveGroupByOutputType = {
    id: number
    to: string
    from: string
    moveTime: Date
    playerId: number
    gameId: number
    _count: MoveCountAggregateOutputType | null
    _avg: MoveAvgAggregateOutputType | null
    _sum: MoveSumAggregateOutputType | null
    _min: MoveMinAggregateOutputType | null
    _max: MoveMaxAggregateOutputType | null
  }

  type GetMoveGroupByPayload<T extends MoveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoveGroupByOutputType[P]>
            : GetScalarType<T[P], MoveGroupByOutputType[P]>
        }
      >
    >


  export type MoveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    from?: boolean
    moveTime?: boolean
    playerId?: boolean
    gameId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    from?: boolean
    moveTime?: boolean
    playerId?: boolean
    gameId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    to?: boolean
    from?: boolean
    moveTime?: boolean
    playerId?: boolean
    gameId?: boolean
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["move"]>

  export type MoveSelectScalar = {
    id?: boolean
    to?: boolean
    from?: boolean
    moveTime?: boolean
    playerId?: boolean
    gameId?: boolean
  }

  export type MoveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "to" | "from" | "moveTime" | "playerId" | "gameId", ExtArgs["result"]["move"]>
  export type MoveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type MoveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }
  export type MoveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    player?: boolean | PlayerDefaultArgs<ExtArgs>
    game?: boolean | GameDefaultArgs<ExtArgs>
  }

  export type $MovePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Move"
    objects: {
      player: Prisma.$PlayerPayload<ExtArgs>
      game: Prisma.$GamePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      to: string
      from: string
      moveTime: Date
      playerId: number
      gameId: number
    }, ExtArgs["result"]["move"]>
    composites: {}
  }

  type MoveGetPayload<S extends boolean | null | undefined | MoveDefaultArgs> = $Result.GetResult<Prisma.$MovePayload, S>

  type MoveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MoveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MoveCountAggregateInputType | true
    }

  export interface MoveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Move'], meta: { name: 'Move' } }
    /**
     * Find zero or one Move that matches the filter.
     * @param {MoveFindUniqueArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MoveFindUniqueArgs>(args: SelectSubset<T, MoveFindUniqueArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Move that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MoveFindUniqueOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MoveFindUniqueOrThrowArgs>(args: SelectSubset<T, MoveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MoveFindFirstArgs>(args?: SelectSubset<T, MoveFindFirstArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Move that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindFirstOrThrowArgs} args - Arguments to find a Move
     * @example
     * // Get one Move
     * const move = await prisma.move.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MoveFindFirstOrThrowArgs>(args?: SelectSubset<T, MoveFindFirstOrThrowArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Moves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Moves
     * const moves = await prisma.move.findMany()
     * 
     * // Get first 10 Moves
     * const moves = await prisma.move.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moveWithIdOnly = await prisma.move.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MoveFindManyArgs>(args?: SelectSubset<T, MoveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Move.
     * @param {MoveCreateArgs} args - Arguments to create a Move.
     * @example
     * // Create one Move
     * const Move = await prisma.move.create({
     *   data: {
     *     // ... data to create a Move
     *   }
     * })
     * 
     */
    create<T extends MoveCreateArgs>(args: SelectSubset<T, MoveCreateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Moves.
     * @param {MoveCreateManyArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MoveCreateManyArgs>(args?: SelectSubset<T, MoveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Moves and returns the data saved in the database.
     * @param {MoveCreateManyAndReturnArgs} args - Arguments to create many Moves.
     * @example
     * // Create many Moves
     * const move = await prisma.move.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MoveCreateManyAndReturnArgs>(args?: SelectSubset<T, MoveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Move.
     * @param {MoveDeleteArgs} args - Arguments to delete one Move.
     * @example
     * // Delete one Move
     * const Move = await prisma.move.delete({
     *   where: {
     *     // ... filter to delete one Move
     *   }
     * })
     * 
     */
    delete<T extends MoveDeleteArgs>(args: SelectSubset<T, MoveDeleteArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Move.
     * @param {MoveUpdateArgs} args - Arguments to update one Move.
     * @example
     * // Update one Move
     * const move = await prisma.move.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MoveUpdateArgs>(args: SelectSubset<T, MoveUpdateArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Moves.
     * @param {MoveDeleteManyArgs} args - Arguments to filter Moves to delete.
     * @example
     * // Delete a few Moves
     * const { count } = await prisma.move.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MoveDeleteManyArgs>(args?: SelectSubset<T, MoveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MoveUpdateManyArgs>(args: SelectSubset<T, MoveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Moves and returns the data updated in the database.
     * @param {MoveUpdateManyAndReturnArgs} args - Arguments to update many Moves.
     * @example
     * // Update many Moves
     * const move = await prisma.move.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Moves and only return the `id`
     * const moveWithIdOnly = await prisma.move.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MoveUpdateManyAndReturnArgs>(args: SelectSubset<T, MoveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Move.
     * @param {MoveUpsertArgs} args - Arguments to update or create a Move.
     * @example
     * // Update or create a Move
     * const move = await prisma.move.upsert({
     *   create: {
     *     // ... data to create a Move
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Move we want to update
     *   }
     * })
     */
    upsert<T extends MoveUpsertArgs>(args: SelectSubset<T, MoveUpsertArgs<ExtArgs>>): Prisma__MoveClient<$Result.GetResult<Prisma.$MovePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Moves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveCountArgs} args - Arguments to filter Moves to count.
     * @example
     * // Count the number of Moves
     * const count = await prisma.move.count({
     *   where: {
     *     // ... the filter for the Moves we want to count
     *   }
     * })
    **/
    count<T extends MoveCountArgs>(
      args?: Subset<T, MoveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoveAggregateArgs>(args: Subset<T, MoveAggregateArgs>): Prisma.PrismaPromise<GetMoveAggregateType<T>>

    /**
     * Group by Move.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoveGroupByArgs} args - Group by arguments.
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
      T extends MoveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoveGroupByArgs['orderBy'] }
        : { orderBy?: MoveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Move model
   */
  readonly fields: MoveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Move.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    player<T extends PlayerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlayerDefaultArgs<ExtArgs>>): Prisma__PlayerClient<$Result.GetResult<Prisma.$PlayerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    game<T extends GameDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GameDefaultArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Move model
   */
  interface MoveFieldRefs {
    readonly id: FieldRef<"Move", 'Int'>
    readonly to: FieldRef<"Move", 'String'>
    readonly from: FieldRef<"Move", 'String'>
    readonly moveTime: FieldRef<"Move", 'DateTime'>
    readonly playerId: FieldRef<"Move", 'Int'>
    readonly gameId: FieldRef<"Move", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Move findUnique
   */
  export type MoveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findUniqueOrThrow
   */
  export type MoveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move findFirst
   */
  export type MoveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findFirstOrThrow
   */
  export type MoveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Move to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Moves.
     */
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move findMany
   */
  export type MoveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter, which Moves to fetch.
     */
    where?: MoveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Moves to fetch.
     */
    orderBy?: MoveOrderByWithRelationInput | MoveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Moves.
     */
    cursor?: MoveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Moves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Moves.
     */
    skip?: number
    distinct?: MoveScalarFieldEnum | MoveScalarFieldEnum[]
  }

  /**
   * Move create
   */
  export type MoveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to create a Move.
     */
    data: XOR<MoveCreateInput, MoveUncheckedCreateInput>
  }

  /**
   * Move createMany
   */
  export type MoveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Move createManyAndReturn
   */
  export type MoveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to create many Moves.
     */
    data: MoveCreateManyInput | MoveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move update
   */
  export type MoveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The data needed to update a Move.
     */
    data: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
    /**
     * Choose, which Move to update.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move updateMany
   */
  export type MoveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
  }

  /**
   * Move updateManyAndReturn
   */
  export type MoveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * The data used to update Moves.
     */
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyInput>
    /**
     * Filter which Moves to update
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Move upsert
   */
  export type MoveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * The filter to search for the Move to update in case it exists.
     */
    where: MoveWhereUniqueInput
    /**
     * In case the Move found by the `where` argument doesn't exist, create a new Move with this data.
     */
    create: XOR<MoveCreateInput, MoveUncheckedCreateInput>
    /**
     * In case the Move was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoveUpdateInput, MoveUncheckedUpdateInput>
  }

  /**
   * Move delete
   */
  export type MoveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
    /**
     * Filter which Move to delete.
     */
    where: MoveWhereUniqueInput
  }

  /**
   * Move deleteMany
   */
  export type MoveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Moves to delete
     */
    where?: MoveWhereInput
    /**
     * Limit how many Moves to delete.
     */
    limit?: number
  }

  /**
   * Move without action
   */
  export type MoveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Move
     */
    select?: MoveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Move
     */
    omit?: MoveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoveInclude<ExtArgs> | null
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


  export const PlayerScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type PlayerScalarFieldEnum = (typeof PlayerScalarFieldEnum)[keyof typeof PlayerScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    player1Id: 'player1Id',
    player2Id: 'player2Id',
    status: 'status',
    result: 'result'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const MoveScalarFieldEnum: {
    id: 'id',
    to: 'to',
    from: 'from',
    moveTime: 'moveTime',
    playerId: 'playerId',
    gameId: 'gameId'
  };

  export type MoveScalarFieldEnum = (typeof MoveScalarFieldEnum)[keyof typeof MoveScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type PlayerWhereInput = {
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    id?: IntFilter<"Player"> | number
    username?: StringFilter<"Player"> | string
    password?: StringFilter<"Player"> | string
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    moves?: MoveListRelationFilter
  }

  export type PlayerOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    gamesAsPlayer1?: GameOrderByRelationAggregateInput
    gamesAsPlayer2?: GameOrderByRelationAggregateInput
    moves?: MoveOrderByRelationAggregateInput
  }

  export type PlayerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: PlayerWhereInput | PlayerWhereInput[]
    OR?: PlayerWhereInput[]
    NOT?: PlayerWhereInput | PlayerWhereInput[]
    password?: StringFilter<"Player"> | string
    gamesAsPlayer1?: GameListRelationFilter
    gamesAsPlayer2?: GameListRelationFilter
    moves?: MoveListRelationFilter
  }, "id" | "username">

  export type PlayerOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: PlayerCountOrderByAggregateInput
    _avg?: PlayerAvgOrderByAggregateInput
    _max?: PlayerMaxOrderByAggregateInput
    _min?: PlayerMinOrderByAggregateInput
    _sum?: PlayerSumOrderByAggregateInput
  }

  export type PlayerScalarWhereWithAggregatesInput = {
    AND?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    OR?: PlayerScalarWhereWithAggregatesInput[]
    NOT?: PlayerScalarWhereWithAggregatesInput | PlayerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Player"> | number
    username?: StringWithAggregatesFilter<"Player"> | string
    password?: StringWithAggregatesFilter<"Player"> | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    player1Id?: IntFilter<"Game"> | number
    player2Id?: IntFilter<"Game"> | number
    status?: BoolFilter<"Game"> | boolean
    result?: StringFilter<"Game"> | string
    player1?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    player2?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    move?: MoveListRelationFilter
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    result?: SortOrder
    player1?: PlayerOrderByWithRelationInput
    player2?: PlayerOrderByWithRelationInput
    move?: MoveOrderByRelationAggregateInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    player1Id?: IntFilter<"Game"> | number
    player2Id?: IntFilter<"Game"> | number
    status?: BoolFilter<"Game"> | boolean
    result?: StringFilter<"Game"> | string
    player1?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    player2?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    move?: MoveListRelationFilter
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    result?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    player1Id?: IntWithAggregatesFilter<"Game"> | number
    player2Id?: IntWithAggregatesFilter<"Game"> | number
    status?: BoolWithAggregatesFilter<"Game"> | boolean
    result?: StringWithAggregatesFilter<"Game"> | string
  }

  export type MoveWhereInput = {
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    id?: IntFilter<"Move"> | number
    to?: StringFilter<"Move"> | string
    from?: StringFilter<"Move"> | string
    moveTime?: DateTimeFilter<"Move"> | Date | string
    playerId?: IntFilter<"Move"> | number
    gameId?: IntFilter<"Move"> | number
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }

  export type MoveOrderByWithRelationInput = {
    id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    moveTime?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
    player?: PlayerOrderByWithRelationInput
    game?: GameOrderByWithRelationInput
  }

  export type MoveWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoveWhereInput | MoveWhereInput[]
    OR?: MoveWhereInput[]
    NOT?: MoveWhereInput | MoveWhereInput[]
    to?: StringFilter<"Move"> | string
    from?: StringFilter<"Move"> | string
    moveTime?: DateTimeFilter<"Move"> | Date | string
    playerId?: IntFilter<"Move"> | number
    gameId?: IntFilter<"Move"> | number
    player?: XOR<PlayerScalarRelationFilter, PlayerWhereInput>
    game?: XOR<GameScalarRelationFilter, GameWhereInput>
  }, "id">

  export type MoveOrderByWithAggregationInput = {
    id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    moveTime?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
    _count?: MoveCountOrderByAggregateInput
    _avg?: MoveAvgOrderByAggregateInput
    _max?: MoveMaxOrderByAggregateInput
    _min?: MoveMinOrderByAggregateInput
    _sum?: MoveSumOrderByAggregateInput
  }

  export type MoveScalarWhereWithAggregatesInput = {
    AND?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    OR?: MoveScalarWhereWithAggregatesInput[]
    NOT?: MoveScalarWhereWithAggregatesInput | MoveScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Move"> | number
    to?: StringWithAggregatesFilter<"Move"> | string
    from?: StringWithAggregatesFilter<"Move"> | string
    moveTime?: DateTimeWithAggregatesFilter<"Move"> | Date | string
    playerId?: IntWithAggregatesFilter<"Move"> | number
    gameId?: IntWithAggregatesFilter<"Move"> | number
  }

  export type PlayerCreateInput = {
    username: string
    password: string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type PlayerUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PlayerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateInput = {
    status: boolean
    result: string
    player1: PlayerCreateNestedOneWithoutGamesAsPlayer1Input
    player2: PlayerCreateNestedOneWithoutGamesAsPlayer2Input
    move?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateInput = {
    id?: number
    player1Id: number
    player2Id: number
    status: boolean
    result: string
    move?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameUpdateInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    player1?: PlayerUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: PlayerUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
    move?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    move?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameCreateManyInput = {
    id?: number
    player1Id: number
    player2Id: number
    status: boolean
    result: string
  }

  export type GameUpdateManyMutationInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
  }

  export type MoveCreateInput = {
    to: string
    from: string
    moveTime?: Date | string
    player: PlayerCreateNestedOneWithoutMovesInput
    game: GameCreateNestedOneWithoutMoveInput
  }

  export type MoveUncheckedCreateInput = {
    id?: number
    to: string
    from: string
    moveTime?: Date | string
    playerId: number
    gameId: number
  }

  export type MoveUpdateInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutMovesNestedInput
    game?: GameUpdateOneRequiredWithoutMoveNestedInput
  }

  export type MoveUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type MoveCreateManyInput = {
    id?: number
    to: string
    from: string
    moveTime?: Date | string
    playerId: number
    gameId: number
  }

  export type MoveUpdateManyMutationInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoveUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
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

  export type GameListRelationFilter = {
    every?: GameWhereInput
    some?: GameWhereInput
    none?: GameWhereInput
  }

  export type MoveListRelationFilter = {
    every?: MoveWhereInput
    some?: MoveWhereInput
    none?: MoveWhereInput
  }

  export type GameOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlayerCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type PlayerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlayerMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type PlayerMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type PlayerSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type PlayerScalarRelationFilter = {
    is?: PlayerWhereInput
    isNot?: PlayerWhereInput
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    result?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    result?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
    status?: SortOrder
    result?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
    player1Id?: SortOrder
    player2Id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GameScalarRelationFilter = {
    is?: GameWhereInput
    isNot?: GameWhereInput
  }

  export type MoveCountOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    moveTime?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
  }

  export type MoveAvgOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
  }

  export type MoveMaxOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    moveTime?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
  }

  export type MoveMinOrderByAggregateInput = {
    id?: SortOrder
    to?: SortOrder
    from?: SortOrder
    moveTime?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
  }

  export type MoveSumOrderByAggregateInput = {
    id?: SortOrder
    playerId?: SortOrder
    gameId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GameCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type MoveCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer1Input = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type GameUncheckedCreateNestedManyWithoutPlayer2Input = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutPlayerInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GameUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1Input | GameUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1Input | GameUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1Input | GameUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2Input | GameUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2Input | GameUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2Input | GameUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type MoveUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutPlayerInput | MoveUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutPlayerInput | MoveUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutPlayerInput | MoveUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GameUncheckedUpdateManyWithoutPlayer1NestedInput = {
    create?: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input> | GameCreateWithoutPlayer1Input[] | GameUncheckedCreateWithoutPlayer1Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer1Input | GameCreateOrConnectWithoutPlayer1Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer1Input | GameUpsertWithWhereUniqueWithoutPlayer1Input[]
    createMany?: GameCreateManyPlayer1InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer1Input | GameUpdateWithWhereUniqueWithoutPlayer1Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer1Input | GameUpdateManyWithWhereWithoutPlayer1Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type GameUncheckedUpdateManyWithoutPlayer2NestedInput = {
    create?: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input> | GameCreateWithoutPlayer2Input[] | GameUncheckedCreateWithoutPlayer2Input[]
    connectOrCreate?: GameCreateOrConnectWithoutPlayer2Input | GameCreateOrConnectWithoutPlayer2Input[]
    upsert?: GameUpsertWithWhereUniqueWithoutPlayer2Input | GameUpsertWithWhereUniqueWithoutPlayer2Input[]
    createMany?: GameCreateManyPlayer2InputEnvelope
    set?: GameWhereUniqueInput | GameWhereUniqueInput[]
    disconnect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    delete?: GameWhereUniqueInput | GameWhereUniqueInput[]
    connect?: GameWhereUniqueInput | GameWhereUniqueInput[]
    update?: GameUpdateWithWhereUniqueWithoutPlayer2Input | GameUpdateWithWhereUniqueWithoutPlayer2Input[]
    updateMany?: GameUpdateManyWithWhereWithoutPlayer2Input | GameUpdateManyWithWhereWithoutPlayer2Input[]
    deleteMany?: GameScalarWhereInput | GameScalarWhereInput[]
  }

  export type MoveUncheckedUpdateManyWithoutPlayerNestedInput = {
    create?: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput> | MoveCreateWithoutPlayerInput[] | MoveUncheckedCreateWithoutPlayerInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutPlayerInput | MoveCreateOrConnectWithoutPlayerInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutPlayerInput | MoveUpsertWithWhereUniqueWithoutPlayerInput[]
    createMany?: MoveCreateManyPlayerInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutPlayerInput | MoveUpdateWithWhereUniqueWithoutPlayerInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutPlayerInput | MoveUpdateManyWithWhereWithoutPlayerInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutGamesAsPlayer1Input = {
    create?: XOR<PlayerCreateWithoutGamesAsPlayer1Input, PlayerUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutGamesAsPlayer1Input
    connect?: PlayerWhereUniqueInput
  }

  export type PlayerCreateNestedOneWithoutGamesAsPlayer2Input = {
    create?: XOR<PlayerCreateWithoutGamesAsPlayer2Input, PlayerUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutGamesAsPlayer2Input
    connect?: PlayerWhereUniqueInput
  }

  export type MoveCreateNestedManyWithoutGameInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type MoveUncheckedCreateNestedManyWithoutGameInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlayerUpdateOneRequiredWithoutGamesAsPlayer1NestedInput = {
    create?: XOR<PlayerCreateWithoutGamesAsPlayer1Input, PlayerUncheckedCreateWithoutGamesAsPlayer1Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutGamesAsPlayer1Input
    upsert?: PlayerUpsertWithoutGamesAsPlayer1Input
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutGamesAsPlayer1Input, PlayerUpdateWithoutGamesAsPlayer1Input>, PlayerUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type PlayerUpdateOneRequiredWithoutGamesAsPlayer2NestedInput = {
    create?: XOR<PlayerCreateWithoutGamesAsPlayer2Input, PlayerUncheckedCreateWithoutGamesAsPlayer2Input>
    connectOrCreate?: PlayerCreateOrConnectWithoutGamesAsPlayer2Input
    upsert?: PlayerUpsertWithoutGamesAsPlayer2Input
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutGamesAsPlayer2Input, PlayerUpdateWithoutGamesAsPlayer2Input>, PlayerUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type MoveUpdateManyWithoutGameNestedInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutGameInput | MoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutGameInput | MoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutGameInput | MoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type MoveUncheckedUpdateManyWithoutGameNestedInput = {
    create?: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput> | MoveCreateWithoutGameInput[] | MoveUncheckedCreateWithoutGameInput[]
    connectOrCreate?: MoveCreateOrConnectWithoutGameInput | MoveCreateOrConnectWithoutGameInput[]
    upsert?: MoveUpsertWithWhereUniqueWithoutGameInput | MoveUpsertWithWhereUniqueWithoutGameInput[]
    createMany?: MoveCreateManyGameInputEnvelope
    set?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    disconnect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    delete?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    connect?: MoveWhereUniqueInput | MoveWhereUniqueInput[]
    update?: MoveUpdateWithWhereUniqueWithoutGameInput | MoveUpdateWithWhereUniqueWithoutGameInput[]
    updateMany?: MoveUpdateManyWithWhereWithoutGameInput | MoveUpdateManyWithWhereWithoutGameInput[]
    deleteMany?: MoveScalarWhereInput | MoveScalarWhereInput[]
  }

  export type PlayerCreateNestedOneWithoutMovesInput = {
    create?: XOR<PlayerCreateWithoutMovesInput, PlayerUncheckedCreateWithoutMovesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMovesInput
    connect?: PlayerWhereUniqueInput
  }

  export type GameCreateNestedOneWithoutMoveInput = {
    create?: XOR<GameCreateWithoutMoveInput, GameUncheckedCreateWithoutMoveInput>
    connectOrCreate?: GameCreateOrConnectWithoutMoveInput
    connect?: GameWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PlayerUpdateOneRequiredWithoutMovesNestedInput = {
    create?: XOR<PlayerCreateWithoutMovesInput, PlayerUncheckedCreateWithoutMovesInput>
    connectOrCreate?: PlayerCreateOrConnectWithoutMovesInput
    upsert?: PlayerUpsertWithoutMovesInput
    connect?: PlayerWhereUniqueInput
    update?: XOR<XOR<PlayerUpdateToOneWithWhereWithoutMovesInput, PlayerUpdateWithoutMovesInput>, PlayerUncheckedUpdateWithoutMovesInput>
  }

  export type GameUpdateOneRequiredWithoutMoveNestedInput = {
    create?: XOR<GameCreateWithoutMoveInput, GameUncheckedCreateWithoutMoveInput>
    connectOrCreate?: GameCreateOrConnectWithoutMoveInput
    upsert?: GameUpsertWithoutMoveInput
    connect?: GameWhereUniqueInput
    update?: XOR<XOR<GameUpdateToOneWithWhereWithoutMoveInput, GameUpdateWithoutMoveInput>, GameUncheckedUpdateWithoutMoveInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GameCreateWithoutPlayer1Input = {
    status: boolean
    result: string
    player2: PlayerCreateNestedOneWithoutGamesAsPlayer2Input
    move?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer1Input = {
    id?: number
    player2Id: number
    status: boolean
    result: string
    move?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input>
  }

  export type GameCreateManyPlayer1InputEnvelope = {
    data: GameCreateManyPlayer1Input | GameCreateManyPlayer1Input[]
    skipDuplicates?: boolean
  }

  export type GameCreateWithoutPlayer2Input = {
    status: boolean
    result: string
    player1: PlayerCreateNestedOneWithoutGamesAsPlayer1Input
    move?: MoveCreateNestedManyWithoutGameInput
  }

  export type GameUncheckedCreateWithoutPlayer2Input = {
    id?: number
    player1Id: number
    status: boolean
    result: string
    move?: MoveUncheckedCreateNestedManyWithoutGameInput
  }

  export type GameCreateOrConnectWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input>
  }

  export type GameCreateManyPlayer2InputEnvelope = {
    data: GameCreateManyPlayer2Input | GameCreateManyPlayer2Input[]
    skipDuplicates?: boolean
  }

  export type MoveCreateWithoutPlayerInput = {
    to: string
    from: string
    moveTime?: Date | string
    game: GameCreateNestedOneWithoutMoveInput
  }

  export type MoveUncheckedCreateWithoutPlayerInput = {
    id?: number
    to: string
    from: string
    moveTime?: Date | string
    gameId: number
  }

  export type MoveCreateOrConnectWithoutPlayerInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput>
  }

  export type MoveCreateManyPlayerInputEnvelope = {
    data: MoveCreateManyPlayerInput | MoveCreateManyPlayerInput[]
    skipDuplicates?: boolean
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer1Input, GameUncheckedUpdateWithoutPlayer1Input>
    create: XOR<GameCreateWithoutPlayer1Input, GameUncheckedCreateWithoutPlayer1Input>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer1Input = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer1Input, GameUncheckedUpdateWithoutPlayer1Input>
  }

  export type GameUpdateManyWithWhereWithoutPlayer1Input = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer1Input>
  }

  export type GameScalarWhereInput = {
    AND?: GameScalarWhereInput | GameScalarWhereInput[]
    OR?: GameScalarWhereInput[]
    NOT?: GameScalarWhereInput | GameScalarWhereInput[]
    id?: IntFilter<"Game"> | number
    player1Id?: IntFilter<"Game"> | number
    player2Id?: IntFilter<"Game"> | number
    status?: BoolFilter<"Game"> | boolean
    result?: StringFilter<"Game"> | string
  }

  export type GameUpsertWithWhereUniqueWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    update: XOR<GameUpdateWithoutPlayer2Input, GameUncheckedUpdateWithoutPlayer2Input>
    create: XOR<GameCreateWithoutPlayer2Input, GameUncheckedCreateWithoutPlayer2Input>
  }

  export type GameUpdateWithWhereUniqueWithoutPlayer2Input = {
    where: GameWhereUniqueInput
    data: XOR<GameUpdateWithoutPlayer2Input, GameUncheckedUpdateWithoutPlayer2Input>
  }

  export type GameUpdateManyWithWhereWithoutPlayer2Input = {
    where: GameScalarWhereInput
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyWithoutPlayer2Input>
  }

  export type MoveUpsertWithWhereUniqueWithoutPlayerInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutPlayerInput, MoveUncheckedUpdateWithoutPlayerInput>
    create: XOR<MoveCreateWithoutPlayerInput, MoveUncheckedCreateWithoutPlayerInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutPlayerInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutPlayerInput, MoveUncheckedUpdateWithoutPlayerInput>
  }

  export type MoveUpdateManyWithWhereWithoutPlayerInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutPlayerInput>
  }

  export type MoveScalarWhereInput = {
    AND?: MoveScalarWhereInput | MoveScalarWhereInput[]
    OR?: MoveScalarWhereInput[]
    NOT?: MoveScalarWhereInput | MoveScalarWhereInput[]
    id?: IntFilter<"Move"> | number
    to?: StringFilter<"Move"> | string
    from?: StringFilter<"Move"> | string
    moveTime?: DateTimeFilter<"Move"> | Date | string
    playerId?: IntFilter<"Move"> | number
    gameId?: IntFilter<"Move"> | number
  }

  export type PlayerCreateWithoutGamesAsPlayer1Input = {
    username: string
    password: string
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGamesAsPlayer1Input = {
    id?: number
    username: string
    password: string
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutGamesAsPlayer1Input = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGamesAsPlayer1Input, PlayerUncheckedCreateWithoutGamesAsPlayer1Input>
  }

  export type PlayerCreateWithoutGamesAsPlayer2Input = {
    username: string
    password: string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    moves?: MoveCreateNestedManyWithoutPlayerInput
  }

  export type PlayerUncheckedCreateWithoutGamesAsPlayer2Input = {
    id?: number
    username: string
    password: string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    moves?: MoveUncheckedCreateNestedManyWithoutPlayerInput
  }

  export type PlayerCreateOrConnectWithoutGamesAsPlayer2Input = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutGamesAsPlayer2Input, PlayerUncheckedCreateWithoutGamesAsPlayer2Input>
  }

  export type MoveCreateWithoutGameInput = {
    to: string
    from: string
    moveTime?: Date | string
    player: PlayerCreateNestedOneWithoutMovesInput
  }

  export type MoveUncheckedCreateWithoutGameInput = {
    id?: number
    to: string
    from: string
    moveTime?: Date | string
    playerId: number
  }

  export type MoveCreateOrConnectWithoutGameInput = {
    where: MoveWhereUniqueInput
    create: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput>
  }

  export type MoveCreateManyGameInputEnvelope = {
    data: MoveCreateManyGameInput | MoveCreateManyGameInput[]
    skipDuplicates?: boolean
  }

  export type PlayerUpsertWithoutGamesAsPlayer1Input = {
    update: XOR<PlayerUpdateWithoutGamesAsPlayer1Input, PlayerUncheckedUpdateWithoutGamesAsPlayer1Input>
    create: XOR<PlayerCreateWithoutGamesAsPlayer1Input, PlayerUncheckedCreateWithoutGamesAsPlayer1Input>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutGamesAsPlayer1Input = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutGamesAsPlayer1Input, PlayerUncheckedUpdateWithoutGamesAsPlayer1Input>
  }

  export type PlayerUpdateWithoutGamesAsPlayer1Input = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutGamesAsPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUpsertWithoutGamesAsPlayer2Input = {
    update: XOR<PlayerUpdateWithoutGamesAsPlayer2Input, PlayerUncheckedUpdateWithoutGamesAsPlayer2Input>
    create: XOR<PlayerCreateWithoutGamesAsPlayer2Input, PlayerUncheckedCreateWithoutGamesAsPlayer2Input>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutGamesAsPlayer2Input = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutGamesAsPlayer2Input, PlayerUncheckedUpdateWithoutGamesAsPlayer2Input>
  }

  export type PlayerUpdateWithoutGamesAsPlayer2Input = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    moves?: MoveUpdateManyWithoutPlayerNestedInput
  }

  export type PlayerUncheckedUpdateWithoutGamesAsPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    moves?: MoveUncheckedUpdateManyWithoutPlayerNestedInput
  }

  export type MoveUpsertWithWhereUniqueWithoutGameInput = {
    where: MoveWhereUniqueInput
    update: XOR<MoveUpdateWithoutGameInput, MoveUncheckedUpdateWithoutGameInput>
    create: XOR<MoveCreateWithoutGameInput, MoveUncheckedCreateWithoutGameInput>
  }

  export type MoveUpdateWithWhereUniqueWithoutGameInput = {
    where: MoveWhereUniqueInput
    data: XOR<MoveUpdateWithoutGameInput, MoveUncheckedUpdateWithoutGameInput>
  }

  export type MoveUpdateManyWithWhereWithoutGameInput = {
    where: MoveScalarWhereInput
    data: XOR<MoveUpdateManyMutationInput, MoveUncheckedUpdateManyWithoutGameInput>
  }

  export type PlayerCreateWithoutMovesInput = {
    username: string
    password: string
    gamesAsPlayer1?: GameCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameCreateNestedManyWithoutPlayer2Input
  }

  export type PlayerUncheckedCreateWithoutMovesInput = {
    id?: number
    username: string
    password: string
    gamesAsPlayer1?: GameUncheckedCreateNestedManyWithoutPlayer1Input
    gamesAsPlayer2?: GameUncheckedCreateNestedManyWithoutPlayer2Input
  }

  export type PlayerCreateOrConnectWithoutMovesInput = {
    where: PlayerWhereUniqueInput
    create: XOR<PlayerCreateWithoutMovesInput, PlayerUncheckedCreateWithoutMovesInput>
  }

  export type GameCreateWithoutMoveInput = {
    status: boolean
    result: string
    player1: PlayerCreateNestedOneWithoutGamesAsPlayer1Input
    player2: PlayerCreateNestedOneWithoutGamesAsPlayer2Input
  }

  export type GameUncheckedCreateWithoutMoveInput = {
    id?: number
    player1Id: number
    player2Id: number
    status: boolean
    result: string
  }

  export type GameCreateOrConnectWithoutMoveInput = {
    where: GameWhereUniqueInput
    create: XOR<GameCreateWithoutMoveInput, GameUncheckedCreateWithoutMoveInput>
  }

  export type PlayerUpsertWithoutMovesInput = {
    update: XOR<PlayerUpdateWithoutMovesInput, PlayerUncheckedUpdateWithoutMovesInput>
    create: XOR<PlayerCreateWithoutMovesInput, PlayerUncheckedCreateWithoutMovesInput>
    where?: PlayerWhereInput
  }

  export type PlayerUpdateToOneWithWhereWithoutMovesInput = {
    where?: PlayerWhereInput
    data: XOR<PlayerUpdateWithoutMovesInput, PlayerUncheckedUpdateWithoutMovesInput>
  }

  export type PlayerUpdateWithoutMovesInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer1?: GameUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUpdateManyWithoutPlayer2NestedInput
  }

  export type PlayerUncheckedUpdateWithoutMovesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    gamesAsPlayer1?: GameUncheckedUpdateManyWithoutPlayer1NestedInput
    gamesAsPlayer2?: GameUncheckedUpdateManyWithoutPlayer2NestedInput
  }

  export type GameUpsertWithoutMoveInput = {
    update: XOR<GameUpdateWithoutMoveInput, GameUncheckedUpdateWithoutMoveInput>
    create: XOR<GameCreateWithoutMoveInput, GameUncheckedCreateWithoutMoveInput>
    where?: GameWhereInput
  }

  export type GameUpdateToOneWithWhereWithoutMoveInput = {
    where?: GameWhereInput
    data: XOR<GameUpdateWithoutMoveInput, GameUncheckedUpdateWithoutMoveInput>
  }

  export type GameUpdateWithoutMoveInput = {
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    player1?: PlayerUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    player2?: PlayerUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
  }

  export type GameUncheckedUpdateWithoutMoveInput = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: IntFieldUpdateOperationsInput | number
    player2Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
  }

  export type GameCreateManyPlayer1Input = {
    id?: number
    player2Id: number
    status: boolean
    result: string
  }

  export type GameCreateManyPlayer2Input = {
    id?: number
    player1Id: number
    status: boolean
    result: string
  }

  export type MoveCreateManyPlayerInput = {
    id?: number
    to: string
    from: string
    moveTime?: Date | string
    gameId: number
  }

  export type GameUpdateWithoutPlayer1Input = {
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    player2?: PlayerUpdateOneRequiredWithoutGamesAsPlayer2NestedInput
    move?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    player2Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    move?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer1Input = {
    id?: IntFieldUpdateOperationsInput | number
    player2Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
  }

  export type GameUpdateWithoutPlayer2Input = {
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    player1?: PlayerUpdateOneRequiredWithoutGamesAsPlayer1NestedInput
    move?: MoveUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
    move?: MoveUncheckedUpdateManyWithoutGameNestedInput
  }

  export type GameUncheckedUpdateManyWithoutPlayer2Input = {
    id?: IntFieldUpdateOperationsInput | number
    player1Id?: IntFieldUpdateOperationsInput | number
    status?: BoolFieldUpdateOperationsInput | boolean
    result?: StringFieldUpdateOperationsInput | string
  }

  export type MoveUpdateWithoutPlayerInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    game?: GameUpdateOneRequiredWithoutMoveNestedInput
  }

  export type MoveUncheckedUpdateWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type MoveUncheckedUpdateManyWithoutPlayerInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    gameId?: IntFieldUpdateOperationsInput | number
  }

  export type MoveCreateManyGameInput = {
    id?: number
    to: string
    from: string
    moveTime?: Date | string
    playerId: number
  }

  export type MoveUpdateWithoutGameInput = {
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    player?: PlayerUpdateOneRequiredWithoutMovesNestedInput
  }

  export type MoveUncheckedUpdateWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: IntFieldUpdateOperationsInput | number
  }

  export type MoveUncheckedUpdateManyWithoutGameInput = {
    id?: IntFieldUpdateOperationsInput | number
    to?: StringFieldUpdateOperationsInput | string
    from?: StringFieldUpdateOperationsInput | string
    moveTime?: DateTimeFieldUpdateOperationsInput | Date | string
    playerId?: IntFieldUpdateOperationsInput | number
  }



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