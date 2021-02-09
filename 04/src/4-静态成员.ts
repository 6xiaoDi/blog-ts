type IAllowFileTypeList = 'png'|'gif'|'jpg'|'jpeg'|'webp';

class User4 {

    // static 必须在 readonly 之前
    // 整个用户群体允许上传的所有附件类型
    static readonly ALLOW_FILE_TYPE_LIST: Array<IAllowFileTypeList> = ['png','gif','jpg','jpeg','webp'];

    constructor(
        public id: number,
        public username: string,
        private _allowFileTypes: Array<IAllowFileTypeList>  // 允许上传的附件类型
    ) {

    }

    static info(): void {
        // 类的静态成员都是使用 类名.静态成员 来访问
        console.log(User4.ALLOW_FILE_TYPE_LIST);
        console.log(this._allowFileTypes);
    }

}

let user4 = new User4(1, 'zs', ['png', 'gif']);
User4.ALLOW_FILE_TYPE_LIST;
User4.info();