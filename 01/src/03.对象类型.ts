// let a: object = {};  // 对象类型
// let arr: Array<number> = [1,2,3];   // 数字型数组类型
// let d1: Date = new Date();  // 日期类型

// let a: object = {
//     x: 1,
//     y: 2
// };

// let a: {username: string; age: number} = {
//     username: 'ls',
//     age: 35,
//     // gender: 'female'
//   };
//   // ok
//   a.username;
//   a.age;
//   // error
//   a.gender;

// interface Person {
//     username: string;
//     age: number;
// }

// let user: Person = {
//     username: 'ls',
//     age: 35
// }
// let user1: Person = {
//     username: 'zs',
//     age: 30
// }

// let user2 = Person;

// class Person {
    
//     constructor(public username: string, public age: number) {

//     }
// }

// let user: Person = new Person('ls', 35);

interface AjaxOptions {
    url: string;
    method: string;
}

function ajax(options: AjaxOptions) {}

ajax({
    url: '',
    method: 'get'
});