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
var Component1 = /** @class */ (function () {
    function Component1(props) {
        this.props = props;
    }
    return Component1;
}());
var MyComponent1 = /** @class */ (function (_super) {
    __extends(MyComponent1, _super);
    function MyComponent1(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            x: 1
        };
        return _this;
    }
    MyComponent1.prototype.render = function () {
        this.props.val;
        this.state.x;
        return '<myComponent />';
    };
    MyComponent1.prototype.getInfo = function () {
        return "\u7EC4\u4EF6\uFF1AMyComponent\uFF0Cprops\uFF1A" + this.props + "\uFF0Cstate\uFF1A" + this.state;
    };
    return MyComponent1;
}(Component));
var myComponent1 = new MyComponent1({ val: 1 });
myComponent.render();
