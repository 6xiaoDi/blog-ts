// interface Point {
//     x: number;
//     y: number;
//     color?: string;
// }
//
// let fn1: IFunc = function(a: number, b: number): number {
//     return a + b;
// }
// let fn12: IFunc = function(a: number, b: number): number {
//     return a + b;
// }
function todo(callback) {
    // ....
    var v = callback(1, 2);
    // ....
}
todo(function (a, b) {
    return a + b;
});
