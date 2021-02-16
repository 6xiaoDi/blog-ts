function d1(target: Function) {
    console.log(typeof target, target);
}

@d1
class MyClass {

    static property1: number;

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