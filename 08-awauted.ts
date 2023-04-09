/**
 * 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。
 * 例如：Promise<ExampleType>，请你返回 ExampleType 类型。
 * type ExampleType = Promise<string>
 * type Result = MyAwaited<ExampleType> // string
 */

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer U> ? (U extends Promise<unknown> ? MyAwaited<U> : U) : never
// 先用条件推断，泛型T是否是Promise返回，并用infer U指代返回值。
// U有两种情况：

// 普通返回值类型
// Promise类型
// 如果U是Promise类型，则需要递归检查。对应的代码是：
// U extends Promise<any> ? MyAwaited<U> : U 

// 如果是普通返回值类型，则直接返回U。
// 为什么要加extends Promise<any>?
// MyAwaited<T extends Promise<any>>的含义，是为了避免用户传入非Promise function。
// 如果用户违反规则，TypeScript会按报错处理。
type ExampleType = Promise<string>

type Result = MyAwaited<ExampleType> // string
