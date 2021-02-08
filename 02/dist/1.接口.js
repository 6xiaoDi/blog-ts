// interface Point {
//     x: number;
//     y: number;
//     color?: string;
// }
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
// interface Point {
//     readonly x: number;
//     readonly y: number;
// }
// interface Point {
//     x: number;
//     y: number;
//     // color?: string;
//     color?: number;
//     // [key:string]: number;
//     // [key: string]: string  |  undefined;
//     [key: string]: number  |  undefined;
// }
// interface Point {
//     x: number;
//     y: number;
//     [key: string]: number;
// }
// let p1: Point = {
//     x: 100,
//     y: 100
// };
// p1.z = 500;
// p1[0] = 500;
// p1['0'] = 500;
// p1.x = 200;
// let p2 = Point;	//错误
var Person = /** @class */ (function () {
    function Person(username) {
        this.username = username;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Student;
}(Person));
