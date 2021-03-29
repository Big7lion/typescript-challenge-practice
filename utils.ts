export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2 ) extends (<T>() => T extends Y ? 1 : 2 ) ? true : false
export type NotEqual<X, Y> = true extends Equal<X, Y> ? false : true
export type Expect<T extends true> = T
export type ExpectFalse<T extends false> = T

export type MergeInsertions<T> =
  T extends object
    ? { [K in keyof T]: MergeInsertions<T[K]> }
    : T

export type Alike<X, Y> = Equal<MergeInsertions<X>, MergeInsertions<Y>>