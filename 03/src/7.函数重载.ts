// function showOrHide(el: HTMLElement, attr: 'display'|'opacity', value: 'block'|'none'|number) {
//     //
// }

// 重载
function showOrHide (ele: HTMLElement, attr: 'display', value: 'block'|'none') : void;
function showOrHide(ele: HTMLElement, attr: 'opacity', value: number) : void;
function showOrHide(el: HTMLElement, attr: any, value: any) {
    el.style[attr] = value;
}


let div2 = document.querySelector('div');

if (div2 ) {

    showOrHide(div2, 'display', 'block');
    showOrHide(div2, 'display', 'none');
    showOrHide(div2, 'opacity', 1);

    showOrHide(div2, 'opacity', 'block');

}