var User4 = /** @class */ (function () {
    function User4(id, username, _allowFileTypes // 允许上传的附件类型
    ) {
        this.id = id;
        this.username = username;
        this._allowFileTypes = _allowFileTypes;
    }
    User4.info = function () {
        // 类的静态成员都是使用 类名.静态成员 来访问
        console.log(User4.ALLOW_FILE_TYPE_LIST);
        // console.log(this._allowFileTypes);
    };
    // static 必须在 readonly 之前
    // 整个用户群体允许上传的所有附件类型
    User4.ALLOW_FILE_TYPE_LIST = ['png', 'gif', 'jpg', 'jpeg', 'webp'];
    return User4;
}());
var user4 = new User4(1, 'zs', ['png', 'gif']);
User4.ALLOW_FILE_TYPE_LIST;
User4.info();
