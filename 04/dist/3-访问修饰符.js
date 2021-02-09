var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User3 = /** @class */ (function () {
    function User3(
    // 可以访问，但是一旦确定不能修改
    id, 
    // 可以访问，但是不能外部修改
    username, 
    // 外部包括子类不能访问，也不可修改
    _password) {
        this.id = id;
        this.username = username;
        this._password = _password;
        // ...
    }
    Object.defineProperty(User3.prototype, "password", {
        get: function () {
            return '****';
        },
        // setPassword(password: string) {
        //     if (password.length >= 6) {
        //         this._password = password;
        //     }
        // }
        set: function (password) {
            if (password.length >= 6) {
                this.password = password;
            }
        },
        enumerable: false,
        configurable: true
    });
    User3.prototype.method1 = function () {
        this.username;
        // this._password;
    };
    return User3;
}());
var VIP2 = /** @class */ (function (_super) {
    __extends(VIP2, _super);
    function VIP2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VIP2.prototype.method2 = function () {
        this.username;
        // this._password;
    };
    return VIP2;
}(User3));
var user2 = new User3(1, 'ls', '123');
// user2.id;
// user2.id = 1;
// user2.username;
// user2._password;
console.log(user2.password);
user2.password = '223';
console.log(user2.password);
