import 'reflect-metadata'

function f() {
    return function(target: any, name: string, descriptor: PropertyDescriptor) {

        console.log( Reflect.getMetadata('design:type', target, name) );
        console.log( Reflect.getMetadata('design:paramtypes', target, name) );
        console.log( Reflect.getMetadata('design:returntype', target, name) );
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
