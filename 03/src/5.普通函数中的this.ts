interface T {
    a: number;
    fn: (x: number) => void;
}

let obj1 = {
    a: 1,
    fn( x: number) {
        // this
        this.a
    }
}

// let obj2: T = {
//     a: 1,
//     fn(x: number) {
//         // this
//         (<T>this).b;
//     }
// }

let obj2: T = {
    a: 1,
    fn(this: T, x: number) {
        // this
        (<T>this).b;
        // this
    }
}
