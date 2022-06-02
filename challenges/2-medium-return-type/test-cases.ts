// type MyReturnType<T> = any
// type MyReturnType<T> = T extends () => infer P ? P : never;
type MyReturnType<T> = T extends (...args: any[]) => infer P ? P : never;

import type { Equal, Expect } from '@type-challenges/utils'

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}


