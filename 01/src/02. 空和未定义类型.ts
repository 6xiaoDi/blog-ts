// let a: null;
// let b: undefined;

// // a = 1;

// let c: number;
// // ok
// // c = null;
// c = undefined;

// let a:number;
// a = null;
// // ok（实际运行是有问题的）
// a.toFixed(1);

let ele = document.querySelector('div');
// ele.style.display = 'none';
// 获取元素的方法返回的类型可能会包含 null，所以最好是先进行必要的判断，再进行操作
if (ele) {
    ele.style.display = 'none';
}