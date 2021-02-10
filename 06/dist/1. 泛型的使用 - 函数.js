function getVal(obj, k) {
    return obj[k];
}
var obj1 = {
    x: 1,
    y: 2
};
var obj2 = {
    username: 'ls',
    age: '25'
};
getVal(obj1, 'x');
// 默认类型推导，可以不写泛型确定后的类型
getVal(obj2, 'age');
