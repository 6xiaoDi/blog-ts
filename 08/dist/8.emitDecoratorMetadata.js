"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
function f() {
    return function (target, name, descriptor) {
        var _t = Reflect.getMetadata('design:paramtypes', target, name)[0];
        console.log(_t);
        var value = descriptor.value;
        if (_t === Number) {
            value(100);
        }
        if (_t === String) {
            value('csdn');
        }
        if (_t === Date) {
            value(new Date);
        }
    };
}
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.method1 = function (a, b) {
        return 'a';
    };
    B.prototype.method2 = function (x) {
        console.log(x);
    };
    __decorate([
        f(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, Number]),
        __metadata("design:returntype", String)
    ], B.prototype, "method1", null);
    __decorate([
        f(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Date]),
        __metadata("design:returntype", void 0)
    ], B.prototype, "method2", null);
    return B;
}());
var b = new B();
// b.method2();
