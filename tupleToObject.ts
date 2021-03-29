/*
  11 - 元组转换为对象
  -------
  by sinoon (@sinoon) #简单 
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  给定数组，转换为对象类型，键/值必须在给定数组中。
  
  例如
  
  ```ts
  const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
  
  const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}
  ```
  
  > 在 Github 上查看：https://tsch.js.org/11/zh-CN
*/



// 数组泛型的T[number] 可以列举类型为 'element_1_type' | 'element_2_type'

type TupleToObject<T extends readonly any[]> = {[P in T[number]]: P}


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from './utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
type TupleType = typeof tuple
type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y'}>>,
]


