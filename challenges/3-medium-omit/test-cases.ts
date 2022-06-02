// type MyOmit<T, K> = any
// type MyOmit<T, K> = {
//   [U in keyof T as U extends K ? never : U]: T[U]
// }

type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>


import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

type cc = Exclude<keyof Todo, 'description'>