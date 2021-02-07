// let a: null;
// let b: undefined;
// // a = 1;
// let c: number;
// // ok
// // c = null;
// c = undefined;
var a;
a = null;
// ok（实际运行是有问题的）
a.toFixed(1);
