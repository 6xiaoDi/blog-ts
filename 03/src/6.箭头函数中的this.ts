// let fn = (x: string) => {
//
// }

// 箭头函数中的 this 是固定

interface T {
    a: number;
    fn: (x: number) => void;
}

let obj3:T = {
    a: 1,
    fn(this: Window, x: number) {
        return () => {
            //this
            this
        }
    }
}