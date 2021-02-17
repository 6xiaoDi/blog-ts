import 'reflect-metadata';

class A {
    public static method1() {
    }

    public method2() {
    }
}

let obj = new A;

Reflect.defineMetadata( 'n', 1, A );
// 给类的静态方法添加元数据
Reflect.defineMetadata( 'n', 2, A, 'method1' );
Reflect.defineMetadata( 'n', 3, obj );
// 给对象的实例方法添加元数据
Reflect.defineMetadata( 'n', 4, obj, 'method2' );

console.log(Reflect.getMetadata('n', A));
console.log(Reflect.getMetadata('n', A, 'method1'));
console.log(Reflect.getMetadata('n', obj));
console.log(Reflect.getMetadata('n', obj, 'method2'));
