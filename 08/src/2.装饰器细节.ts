function d1(target: Function) {
    console.log(typeof target, target);
}

function d2(target: any, name: string) {
    console.log(typeof target, name);
}

function d3(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(typeof target, name, descriptor);
}

function d4(target: any, name: string, descriptor: PropertyDescriptor) {
    console.log(typeof target, name, descriptor);
}

@d1
class MyClass {

    @d2
    static property1: number;

    @d2
    a: number;

    @d3
    get b() { 
        return 1; 
    }

    @d3
    static get c() {
        return 2;
    }

    @d4
    public method1(x: number, y: number) {}

    @d4
    public static method2() {}
}