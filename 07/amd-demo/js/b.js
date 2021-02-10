define( function(require, exports, module) {
    let a = 1;
    let b = 2;

    // module.exports === exports;  // 两者是同一个东西

    // 可以这种方式导出
    // exports.x = a;
    // exports.y = b;

    module.exports = {
        x: a,
        y: b
    }
} );