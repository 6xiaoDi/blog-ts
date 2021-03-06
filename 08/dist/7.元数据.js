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
function log(type) {
    return function (target, name, descriptor) {
        // log 方法装饰器 是比 L 类装饰器先执行的
        var value = descriptor.value;
        descriptor.value = function (x, y) {
            var result = value(x, y);
            var _type = type;
            if (!_type) {
                if (typeof target === 'function') {
                    _type = Reflect.getMetadata('type', target);
                }
                else {
                    _type = Reflect.getMetadata('type', target.constructor);
                }
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
        log(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], M, "add", null);
    __decorate([
        log('log'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number, Number]),
        __metadata("design:returntype", void 0)
    ], M, "sub", null);
    M = __decorate([
        Reflect.metadata('type', 'storage')
    ], M);
    return M;
}());
var v1 = M.add(1, 2);
console.log(v1);
var v2 = M.sub(1, 2);
console.log(v2);
exports.default = {};
