// interface Point {
//     x: number;
//     y: number;
//     color?: string;
// }

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 100,
    y: 100
};

p1.x = 200;

// let p2 = Point;	//错误