import { Equal, Expect } from "./utils"

type X = Promise<string>

type Unwrap<T> = T extends Promise<infer Input> ? Input : never

type result = Expect<Equal<string, Unwrap<X>>>