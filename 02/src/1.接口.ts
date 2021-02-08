// interface Point {
//     x: number;
//     y: number;
//     color?: string;
// }

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

class Person {
    constructor(public username: string) {}
}
class Student extends Person {

}

interface Point {
    [key: string]: Person;
    [key: number]: Student;
}