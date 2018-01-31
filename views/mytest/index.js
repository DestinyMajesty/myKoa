import React, { Component } from 'react';

class Mytest extends Component {

	constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }



    async loadUser  () {
        const url = '/api/users/getUser';
        const reqData = {
            cmd: 'queryUserName',
        };
        try{
            const rawRes = await fetch(url, {
                method: 'post',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(reqData),
                credentials: 'include',
            });
            let res = await rawRes.json();
            console.log('res',res);
            this.setState({
                name: res.username,
            })
        }
        catch (err) {
            throw err;
        }
    }
    render(){
        const {name} = this.state;
        return(
            <div>
                <h1>名字：{name || '--'}</h1>
                <button onClick={this.loadUser.bind(this)} >点我看返回的名字</button>
            </div>
        )
    }
}

export default Mytest;