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
    return User3;
}());
var user2 = new User3(1, 'ls', '123');
user2.id;
user2.id = 1;
user2.username;
user2._password;
