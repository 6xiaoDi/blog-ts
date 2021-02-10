function fn(a) {
    // error，不能保证 a 就是字符串
    // a.substring(1);
    // 类型duany
    // (<string> a).substring(1);
    if (typeof a === 'string') {
        // ok
        a.substring(1);
    }
    else {
        // ok
        a.toFixed(1);
    }
}
