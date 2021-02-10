// let str1 = 'csdn';
// // 如果是 let ，把 'string' 作为值
// let t = typeof str1;
// // 如果是 type，把 'string' 作为类型
// type myType = typeof str1;

// // 使用
// let str2: myType = '6xd';
// let str3: typeof str1 = '6xd';

// interface Person {
//     name: string;
//     age: number;
// };

// type personKeys = keyof Person;
// // 等同：type personKeys = "name" | "age"

// let p1 = {
//     name: 'zs',
//     age: 35
// }
// // function getPersonVal(k: string) {
// //     return p1[k];
// // }

// function getPersonVal(k: personKeys) {
//     return p1[k];
// }
// /**
// 等同：
// function getPersonVal(k: 'name'|'age') {
//  return p1[k];
// }
// */
// getPersonVal('name'); //正确
// getPersonVal('gender'); //错误

interface Person {
    name: string;
    age: number; 
}
type personKeys = keyof Person;
type newPerson = {
    [k in personKeys]: number;
    /**
 等同 [k in 'name'|'age']: number;
 也可以写成
 [k in keyof Person]: number;
 */
}