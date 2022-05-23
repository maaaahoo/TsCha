type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];


import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]


// 获取第一个元素类型
type First<T extends unknown[]> = T extends [infer F, ...infer Rest] ? F : never;
//  获取最后一个元素类型
type Last<T extends unknown[]> = T extends [...infer Rest, infer L] ? L : never;

type cases1 = [
  Expect<Equal<First<[1,2,3]>, 1>>,
  Expect<Equal< Last<[1,2,3]>, 3>>,
]


// spread操作符