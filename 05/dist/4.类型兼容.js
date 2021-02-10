var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.study = function () {
    };
    Person.prototype.fly = function () {
    };
    return Person;
}());
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.catchMouse = function () { };
    Cat.prototype.fly = function () {
    };
    return Cat;
}());
// function fn(p: Person) {
//     p.name;
// }
var zs = new Person();
var xiaohua = new Cat();
// ok，因为 Cat 类型的结构与 Person 类型的结构相似，所以它们是兼容的
// fn(xiaohua);
function fn2(arg) {
    arg.fly();
}
fn2(zs);
fn2(xiaohua);
