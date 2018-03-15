
import React from 'react';
import { render } from 'react-dom';
import { observable, computed, autorun } from "mobx";
import { Provider,  observer ,  inject} from 'mobx-react';


class Hello extends React.Component {
    constructor(props) {
        super(props);
    }

    handleClick =() => {

    }

    render() {
        return (
            <h1 onClick={this.handleClick}> 点我 </h1>
        );
    }
}

class Change extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.actions.buttonClick();
    }

    render() {
        return (
            <button onClick={this.handleClick} >change</button>
        );
    }
}

@inject("color")
@observer
class MyApp extends React.Component {

    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('注入->：',  this.props.color) 
    }

    render() {
        return (
            <div>
                <Hello />
                {/* <Change /> */}
            </div>
        );
    }
}


function Mytest() {
    return (
        <Provider color="red" text="厉害啊">
            <MyApp />
        </Provider>
    )
}

export default Mytest;