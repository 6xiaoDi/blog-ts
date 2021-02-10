// 自定义保护函数
function canEach(data) {
    return data.forEach !== undefined;
}
function fn2(elements) {
    if (canEach(elements)) {
        elements.forEach(function (el) {
            el.classList.add('box');
        });
    }
    else {
        elements.classList.add('box');
    }
}
