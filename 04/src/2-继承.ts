class User1 {
    constructor(
        public id: number,
        public username: string
    ) {
    }

    postArticle(title: string, content: string) {
        console.log(`${this.username} 发表了一篇文章：${title}`)
    }
}

class VIP extends User1 {
    constructor(
        id: number,
        username: string,
        public score: number
    ) {
        // this.id;
        super(id, username);
        // 必须在super调用之后才能访问 this
        console.log('子类构造函数');
    }

    // postArticle 方法重写，覆盖
    postArticle(title: string, content: string): void {
        this.score++;
        console.log(`${this.username} 发表了一篇文章： ${title}，积分：${this.score}`)
    }

    postAttachment(file: string): void {
        console.log(`${this.username} 上传了一个附件： ${file}`)
    }
}

let vip1 = new VIP(1, "zhangsan", 0);
vip1.postArticle('标题', '内容');
vip1.postAttachment('1.png');