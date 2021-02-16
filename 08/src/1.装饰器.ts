function log(target: Function, name: string, descriptor: PropertyDescriptor) {

    /**
     * target : 被装饰的方法所属的类
     * name : 被装饰的方法的名称
     * descriptor : 描述符
     */
    console.log(target, name, descriptor);
}

class M {

    @log
    static add(a: number, b: number) {
        return a + b;
    }
}

// let v1 = M.add(1, 2);
// console.log(v1);
