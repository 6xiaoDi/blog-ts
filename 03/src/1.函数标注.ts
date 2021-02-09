// 函数声明
function fn1(a: string): string {
    return '';
}
// 函数表达式
let fn2: (a: string) => string = function(a) {
    return '';
}

type callback = (a: string) => string;

let fn3: callback = function(b) {
    return ''
}

interface ICallBack {
    (a: string): string;
}

let fn4: ICallBack = function(c) {
    return '';
}