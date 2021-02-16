var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function d1(target) {
    console.log(typeof target, target);
}
function d2(target, name) {
    console.log(typeof target, name);
}
function d3(target, name, descriptor) {
    console.log(typeof target, name, descriptor);
}
function d4(target, name, descriptor) {
    console.log(typeof target, name, descriptor);
}
var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    Object.defineProperty(MyClass.prototype, "b", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MyClass, "c", {
        get: function () {
            return 2;
        },
        enumerable: false,
        configurable: true
    });
    MyClass.prototype.method1 = function (x, y) { };
    MyClass.method2 = function () { };
    __decorate([
        d2
    ], MyClass.prototype, "a", void 0);
    __decorate([
        d3
    ], MyClass.prototype, "b", null);
    __decorate([
        d4
    ], MyClass.prototype, "method1", null);
    __decorate([
        d2
    ], MyClass, "property1", void 0);
    __decorate([
        d3
    ], MyClass, "c", null);
    __decorate([
        d4
    ], MyClass, "method2", null);
    MyClass = __decorate([
        d1
    ], MyClass);
    return MyClass;
}());
