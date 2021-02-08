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

// class Person {
//     constructor(public username: string) {}
// }
// class Student extends Person {
//
// }
//
// interface Point {
//     [key: string]: Person;
//     [key: number]: Student;
// }


// interface IFunc {
//     (x: number, y: number): number
// }
//
// let fn1: IFunc = function(a: number, b: number): number {
//     return a + b;
// }
// let fn12: IFunc = function(a: number, b: number): number {
//     return a + b;
// }

// function todo(callback: IFunc) {
//     // ....
//     let v = callback(1, 2);
//     // ....
// }
//
// todo( function(a: number, b: number): number {
//     return a + b;
// } )


interface IEventFunc {
    (e: MouseEvent): void
}


function on(el: HTMLElement, evname: string, callback: IEventFunc) {

}

let div = document.querySelector('div');
if (div) {
    on(div, 'click', function(e) {
        e.clientX
    });
}