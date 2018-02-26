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

    loadUser = () =>{
        apiInfo({
            url :'/api/users/getUser',
            reqData:{
                cmd: 'queryUserName',
            }
		}).then((data) => {
            console.log(data);
            this.setState({
                name: data.username,
            })
        })
    }
    
    addUser = (e) =>{
        e & e.preventDefault();
        apiInfo({
            url :'/api/users/registerUser',
            reqData:{
                cmd: 'registerUserName',
                name: this.state.value.newName,                
            }
		}).then((data) => {
            console.log(data);
        })
    }


    handleChange = (event) => {
        this.setState({
            value:{
                newName:event.target.value
            }, 
        });
    }

    render(){
        const {name, value} = this.state;
        return(
            <div>
                <h1>名字：{name.join(',') || '--'}</h1>
                <button onClick={this.loadUser} >再点从服务器返回的名字</button>
                <hr/>
                <form >
                    <label>新增的名字</label>
                    <input type="text" name="firstname" value={value.newName} onChange={this.handleChange}/>
                    <button onClick={this.addUser}>新增</button>
                </form>
            </div>
        )
    }
}

export default Mytest;