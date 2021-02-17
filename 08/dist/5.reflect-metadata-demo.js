"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var A = /** @class */ (function () {
    function A() {
    }
    A.method1 = function () {
    };
    A.prototype.method2 = function () {
    };
    __decorate([
        Reflect.metadata('n', 4)
    ], A.prototype, "method2", null);
    __decorate([
        Reflect.metadata('n', 2)
    ], A, "method1", null);
    A = __decorate([
        Reflect.metadata('n', 1)
    ], A);
    return A;
}());
var obj = new A;
console.log(Reflect.getMetadata('n', A));
console.log(Reflect.getMetadata('n', A, 'method1'));
console.log(Reflect.getMetadata('n', obj));
console.log(Reflect.getMetadata('n', obj, 'method2'));
