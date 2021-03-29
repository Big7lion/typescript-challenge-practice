import { Equal, Expect } from "./utils";
type HelloWorld = string

type test = Expect<Equal<HelloWorld, string>>