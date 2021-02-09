var obj1 = {
    a: 1,
    fn: function (x) {
        // this
        this.a;
    }
};
// let obj2: T = {
//     a: 1,
//     fn(x: number) {
//         // this
//         (<T>this).b;
//     }
// }
var obj2 = {
    a: 1,
    fn: function (x) {
        // this
        this.b;
        // this
    }
};
