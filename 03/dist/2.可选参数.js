function css(el, attr, val) {
    //...
}
var div = document.querySelector('div');
// 设置
div && css(div, 'width', '100px');
// 获取
div && css(div, 'width');
