// type MyAwaited = any;

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer P> ? P extends Promise<unknown> ? MyAwaited<P> : P : never;

import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
]

// @ts-expect-error
type error = MyAwaited<number>



// infer 只能在条件语句中使用
// 设置变量
