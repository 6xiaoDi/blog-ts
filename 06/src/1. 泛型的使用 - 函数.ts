function getVal<T>(obj: T, k: keyof T) {
    return obj[k];
}

let obj1 = {
    x:1,
    y:2
}

let obj2 = {
    username:'ls',
    age:'25'
}

getVal<typeof  obj1>(obj1,'x')
// 默认类型推导，可以不写泛型确定后的类型
getVal(obj2,'age')
