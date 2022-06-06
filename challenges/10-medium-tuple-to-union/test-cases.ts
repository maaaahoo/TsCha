// type TupleToUnion<T> = any
type TupleToUnion<T extends any[]> = T[number];

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]



// T[number]遍历数组类型并返回，固定写法