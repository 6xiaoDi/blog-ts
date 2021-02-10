(function(root, factory) {
    // Node, CommonJS-like环境
    if (typeof module === "object" && typeof module.exports === "object") {
        module.exports = factory();
    // AMD 模块环境下
    } else if (typeof define === "function" && define.amd) {
        define( factory );
    //  不使用任何模块系统，无模块化，则挂载到全局（浏览器是window，服务端是global，直接使用this即可）
    } else {
        root.factory = factory;
    }
})(this, function() {
    let a = 1;
    let b = 2;

    return {
        x: a,
        y: b
    }
})