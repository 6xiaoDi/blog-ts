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

}

let vip1 = new VIP(1, "zhangsan");
