// type DeepReadonly<T> = any
// type DeepReadonly<T extends Record<string, any>> = {
//   readonly [key in keyof T] : T[key] extends Record<string, any> ? DeepReadonly<T[key]> : T[key]
// }

type DeepReadonly<T> = { 
  readonly [K in keyof T]: keyof T[K] extends undefined ? T[K] : DeepReadonly<T[K]>;
};

import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<DeepReadonly<X>, Expected>>,
]

type X = {
  a: () => 22
  b: string
  c: {
    d: boolean
    e: {
      g: {
        h: {
          i: true
          j: 'string'
        }
        k: 'hello'
      }
      l: [
        'hi',
        {
          m: ['hey']
        },
      ]
    }
  }
}

type Expected = {
  readonly a: () => 22
  readonly b: string
  readonly c: {
    readonly d: boolean
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true
          readonly j: 'string'
        }
        readonly k: 'hello'
      }
      readonly l: readonly [
        'hi',
        {
          readonly m: readonly ['hey']
        },
      ]
    }
  }
}


// Record<string, any> 定义一个key是string value是any的对象类型