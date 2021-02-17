"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
function L(type) {
    return function (target) {
        target.prototype.type = type;
    };
}
function log(type) {
    return function (target, name, descriptor) {
        // log 方法装饰器 是比 L 类装饰器先执行的
        var value = descriptor.value;
        descriptor.value = function (x, y) {
            var result = value(x, y);
            var _type = type;
            if (!_type) {
                _type = typeof target === 'function' ? target.prototype.type : target.type;
            }
            console.log({
                type: _type,
                name: name,
                x: x,
                y: y,
                result: result
            });
            return result;
        };
    };
}
var M = /** @class */ (function () {
    function M() {
    }
    M.add = function (x, y) {
        return x + y;
    };
    M.sub = function (x, y) {
        return x - y;
    };
    __decorate([
        log()
    ], M, "add", null);
    __decorate([
        log('log')
    ], M, "sub", null);
    M = __decorate([
        L('storage')
    ], M);
    return M;
}());
var v1 = M.add(1, 2);
console.log(v1);
var v2 = M.sub(1, 2);
console.log(v2);
exports.default = {};
