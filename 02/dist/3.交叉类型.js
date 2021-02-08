// interface o1 {x: number, y: string};
// interface o2 {z: number};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// let o: o1 & o2 = Object.assign({}, {x:1,y:'2'}, {z: 100});
var arr = [1, 2, 3];
var arr2 = __spreadArrays(arr, [10, 20]);
Promise.resolve();
