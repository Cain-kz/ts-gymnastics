/**
 * 期望是一个 string 类型
 * type HelloWorld = any
 * 
 * 你需要使得如下这行不会抛出异常
 * type test = Expect<Equal<HelloWorld, string>>
 */

type HelloWorld = string

// 你需要使得如下这行不会抛出异常
import { Expect, Equal } from '@type-challenges/utils'
type test = Expect<Equal<HelloWorld, string>>