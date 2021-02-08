function css(ele, attr, value) {
    // ...
}
var box1 = document.querySelector('.box');
// document.querySelector 方法返回值就是一个联合类型
if (box1) {
    // ts 会提示有 null 的可能性，加上判断更严谨
    css(box1, 'width', '100px');
    css(box1, 'opacity', 1);
    // css(box1, 'opacity', [1,2]);  // 错误
}
