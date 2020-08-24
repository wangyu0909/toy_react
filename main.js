import { createElement, render, Component } from './toy-react';

class MyComponent extends Component {
    render() {
        return (
            <div>
                <h1>my</h1>
                {
                    this.children
                }
            </div> 
        );
    }
}

let dom = <MyComponent id="a" class="b">
    <div></div>
    <div style="color: red">123</div>
</MyComponent>;

console.log(document.body);
render(dom, document.body);

window.dom = dom;