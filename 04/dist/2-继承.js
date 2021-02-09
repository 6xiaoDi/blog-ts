var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User1 = /** @class */ (function () {
    function User1(id, username) {
        this.id = id;
        this.username = username;
    }
    User1.prototype.postArticle = function (title, content) {
        console.log(this.username + " \u53D1\u8868\u4E86\u4E00\u7BC7\u6587\u7AE0\uFF1A" + title);
    };
    return User1;
}());
var VIP = /** @class */ (function (_super) {
    __extends(VIP, _super);
    function VIP(id, username, score) {
        var _this = 
        // this.id;
        _super.call(this, id, username) || this;
        _this.score = score;
        // 必须在super调用之后才能访问 this
        console.log('子类构造函数');
        return _this;
    }
    // postArticle 方法重写，覆盖
    VIP.prototype.postArticle = function (title, content) {
        this.score++;
        console.log(this.username + " \u53D1\u8868\u4E86\u4E00\u7BC7\u6587\u7AE0\uFF1A " + title + "\uFF0C\u79EF\u5206\uFF1A" + this.score);
    };
    VIP.prototype.postAttachment = function (file) {
        console.log(this.username + " \u4E0A\u4F20\u4E86\u4E00\u4E2A\u9644\u4EF6\uFF1A " + file);
    };
    return VIP;
}(User1));
var vip1 = new VIP(1, "zhangsan", 0);
vip1.postArticle('标题', '内容');
vip1.postAttachment('1.png');
