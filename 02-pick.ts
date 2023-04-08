/**
 * 实现ts内置的Pick<T,K>,但不可以使用它
 * 从类型T中选择出属性K，构造成一个新的类型
 * interface Todo {
    title: string
    description: string
    completed: boolean
    }

    type TodoPreview = MyPick<Todo, 'title' | 'completed'>

    const todo: TodoPreview = {
        title: 'Clean room',
        completed: false,
    }
 */

type MyPick<T, K extends keyof T> = {  //keyof: 取interface的键后保存为联合类型
    [key in K]: T[key]
}
interface Todo {
    title: string
    description: string
    completed: boolean
}
type TodoPreview = MyPick<Todo, 'title' | 'completed'>

const todo: TodoPreview = {
    title: 'Clean room',
    completed: false,
}

// 举例
function getValue1(o:object, key: string){
    return o[key]
}
// 这样写丧失了ts的优势：
// 1.无法确定返回值类型
// 2.无法对key进行约束
function getValue2<T extends Object, K extends keyof T>(o: T, key: K){
    return o[key]
}
const obj1 = { name: 'zhangsan', age: 18 }
const values = getValue2(obj1, 'name')

