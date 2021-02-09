function css(el: HTMLElement, attr: string, val?: any) {
    //...
}

let div = document.querySelector('div');

// 设置
div && css(div, 'width', '100px');
// 获取
div && css(div, 'width');