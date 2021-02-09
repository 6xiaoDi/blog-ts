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

    // setPassword(password: string) {
    //     if (password.length >= 6) {
    //         this._password = password;
    //     }
    // }

    set password(password: string) {
        if (password.length >= 6) {
            this.password = password;
        }
    }

    get password(): string {
        return '****';
    }

    method1() {
        this.username;
        // this._password;
    }

}

class VIP2 extends User3 {

    method2() {
        this.username;
        // this._password;
    }

}


let user2 = new User3(1, 'ls', '123');
// user2.id;
// user2.id = 1;
// user2.username;
// user2._password;

console.log(user2.password)

user2.password = '223';

console.log(user2.password)