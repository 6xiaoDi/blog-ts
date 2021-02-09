class User3 {
    constructor(
        // 可以访问，但是一旦确定不能修改
        readonly id: number,
        // 可以访问，但是不能外部修改
        protected username: string,
        // 外部包括子类不能访问，也不可修改
        private _password: string
    ) {
        // ...
    }

    method1() {
        this.username;
        this._password;
    }

}

class VIP2 extends User {

    method2() {
        this.username;
        this._password;
    }

}


let user2 = new User3(1, 'ls', '123');
// user2.id;
// user2.id = 1;
// user2.username;
// user2._password;

