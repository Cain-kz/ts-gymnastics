/**
 * 元组转换为对象
 * 传入一个元组类型，将这个元组类型转换成对象类型，这个对象类型的键/值都是从元组中遍历出来。
 * const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
 * type result = TupleToObject<typeof tuple> 
 */

type TupleToObject<T extends readonly string[]> = string
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type result = TupleToObject<typeof tuple> 