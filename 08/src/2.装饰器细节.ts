function d1(target: Function) {
    console.log(typeof target, target);
}

function d2(target: any, name: string) {
    console.log(typeof target, name);
}

@d1
class MyClass {

    @d2
    static property1: number;

    @d2
    a: number;

    get b() { 
        return 1; 
    }

    static get c() {
        return 2;
    }

    public method1(x: number, y: number) {}

    public static method2() {}
}