/**
 * 实现内置的Exclude <T, U>类型，但不能直接使用它本身。
 * type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'
 */
type MyExclude<T, U> = T extends U ? never : T   //重点是如何移除U，T中的某一项如果在U中(T extends U)，返回never移除U，否则返回T。
type Result = MyExclude<'a' | 'b' | 'c', 'a'> // 'b' | 'c'