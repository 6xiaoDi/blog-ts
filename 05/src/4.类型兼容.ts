interface IFly {
    fly():void;
}

class Person implements IFly {
    name: string;
    age: number;

    study(){

    }

    fly() {

    }
}

class Cat implements IFly {
    name: string;
    age: number;

    catchMouse() {}

    fly() {

    }
}

// function fn(p: Person) {
//     p.name;
// }

let zs = new Person();
let xiaohua = new Cat();
// ok，因为 Cat 类型的结构与 Person 类型的结构相似，所以它们是兼容的
// fn(xiaohua);

function fn2(arg: IFly) {
    arg.fly();
}

fn2(zs);
fn2(xiaohua);