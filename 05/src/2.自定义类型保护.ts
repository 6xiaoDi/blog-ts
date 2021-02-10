// 自定义保护函数
function canEach(data: any): data is Element[]|NodeList {
    return data.forEach !== undefined;
}

function fn2(elements: Element[]|NodeList|Element) {
    if ( canEach(elements) ) {
        elements.forEach((el: Element)=>{
            el.classList.add('box');
        });
    } else {
        elements.classList.add('box');
    }
}