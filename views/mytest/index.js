import React, { Component } from 'react';

class Mytest extends Component {

	constructor(props) {
        super(props);
        this.state = {
            name: [],
            value:{
                newName:''
            },
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

    handleChange = (event) => {
        this.setState({
            value:{
                newName:event.target.value
            }, 
        });
    }

    async addUser (e) {
        e & e.preventDefault();
        console.log(this.state.value.newName);
        const url = '/api/users/registerUser';
        const reqData = {
            cmd: 'registerUserName',
            name: this.state.value.newName,
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
        }
        catch (err) {
            throw err;
        }
    }

    render(){
        const {name, value} = this.state;
        return(
            <div>
                <h1>名字：{name.join(',') || '--'}</h1>
                <button onClick={this.loadUser.bind(this)} >再点从服务器返回的名字</button>
                <hr/>
                <form >
                    <label>新增的名字</label>
                    <input type="text" name="firstname" value={value.newName} onChange={this.handleChange}/>
                    <button onClick={this.addUser.bind(this)}>新增</button>
                </form>
            </div>
        )
    }
}

export default Mytest;