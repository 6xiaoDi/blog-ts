// interface Point {
//     x: number;
//     y: number;
//     color?: string;
// }
function on(el, evname, callback) {
}
var div = document.querySelector('div');
if (div) {
    on(div, 'click', function (e) {
        e.clientX;
    });
}
