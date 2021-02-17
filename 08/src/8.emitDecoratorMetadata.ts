function f() {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {

        console.log(descriptor.value.length)

    }
}

class B {
    name: string;

    constructor(a:string) {

    }

    @f()
    method1(a: string, b: number): string {
        return 'a'
    }
}
