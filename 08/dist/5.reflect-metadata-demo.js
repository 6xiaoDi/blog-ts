"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var A = /** @class */ (function () {
    function A() {
    }
    A.method1 = function () {
    };
    A.prototype.method2 = function () {
    };
    return A;
}());
var obj = new A;
Reflect.defineMetadata('n', 1, A);
// 给类的静态方法添加元数据
Reflect.defineMetadata('n', 2, A, 'method1');
Reflect.defineMetadata('n', 3, obj);
// 给对象的实例方法添加元数据
Reflect.defineMetadata('n', 4, obj, 'method2');
console.log(Reflect.getMetadata('n', A));
console.log(Reflect.getMetadata('n', A, 'method1'));
console.log(Reflect.getMetadata('n', obj));
console.log(Reflect.getMetadata('n', obj, 'method2'));
