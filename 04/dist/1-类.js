// class User {
//     id: number;
//     username: string;
//
//     // 具体特征就是 {} 中进行定义的
//     constructor(
//         id: number,
//         username: string
//     ) {
//         // 创建类的函数，当类通过new实例化的时候，就会执行该函数
//         console.log('这是构造函数，对类中成员属性进行初始化赋值');
//
//         this.id = id;
//         this.username = username;
//     }
//
//     postArticle(title: string, content: string) {
//         console.log(`${this.username} 发表了一篇文章：${title}`)
//     }
// }
var User = /** @class */ (function () {
    function User(id, username) {
        this.id = id;
        this.username = username;
    }
    User.prototype.postArticle = function (title, content) {
        console.log(this.username + " \u53D1\u8868\u4E86\u4E00\u7BC7\u6587\u7AE0\uFF1A" + title);
    };
    return User;
}());
var user1 = new User(1, "zhangsan");
console.log(user1);
user1.postArticle('标题', '内容');
