let a: string;
a = '1';
// error 
// String（它是包装对象类型）有的内容，string不一定有（包装对象有的，基础类型不一定有，但反过来是一定的）
// a = new String('1');

let b: String;
// b = new String('2');
// ok 
// 和上面正好相反（基础类型有的内容，包装对象一定有）
b = '2';