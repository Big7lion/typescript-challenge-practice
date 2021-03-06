/*
  18 - 获取元组长度
  -------
  by sinoon (@sinoon) #简单 #tuple
  
  ### 题目
  
  > 由谷歌自动翻译，欢迎 PR 改进翻译质量。
  
  对于给定的元组，您需要创建一个通用的`Length`，选择元组的长度
  
  例如
  
  ```ts
  type tesla = ['tesla', 'model 3', 'model X', 'model Y']
  type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']
  
  type teslaLength = Length<tesla>  // expected 4
  type spaceXLength = Length<spaceX> // expected 5
  ```
  
  > 在 Github 上查看：https://tsch.js.org/18/zh-CN
*/


/* _____________ 你的代码 _____________ */


// 数组长度
type Length<T extends any> = T extends {length: number} ? T['length'] : 0


/* _____________ 测试用例 _____________ */
import { Equal, Expect } from './utils'

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const
type Tesla = typeof tesla
const spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT'] as const

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
]



/* _____________ 下一步 _____________ */
/*
  > 分享你的解答：https://tsch.js.org/18/answer/zh-CN
  > 查看解答：https://tsch.js.org/18/solutions
  > 更多题目：https://tsch.js.org/zh-CN
*/

