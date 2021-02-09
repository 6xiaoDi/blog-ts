// let fn = (x: string) => {
//
// }
var obj3 = {
    a: 1,
    fn: function (x) {
        var _this = this;
        return function () {
            //this
            _this;
        };
    }
};
