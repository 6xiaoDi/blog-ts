class Component{

    props: any;
    state: any;

    constructor(props: any) {
        this.props = props;
    }

    render(): string {
        return '';
    }

}


class MyComponent extends Component {

    constructor(props: any) {
        super(props);

        this.state = {
            x: 1
        }
    }

    render() {
        return '<myComponent />';
    }

}


let myComponent = new MyComponent({val: 1});
myComponent.render();