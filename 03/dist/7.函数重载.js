// function showOrHide(el: HTMLElement, attr: 'display'|'opacity', value: 'block'|'none'|number) {
//     //
// }
function showOrHide(el, attr, value) {
    el.style[attr] = value;
}
var div2 = document.querySelector('div');
if (div2) {
    showOrHide(div2, 'display', 'block');
    showOrHide(div2, 'display', 'none');
    showOrHide(div2, 'opacity', 1);
    showOrHide(div2, 'opacity', 'block');
}
