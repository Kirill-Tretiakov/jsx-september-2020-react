import React, {Component} from 'react';
import UserService from "../services/UserService";

class Form extends Component {
    myForm = React.createRef();
    userService = new UserService();
    state = {inputValue: '', users: [], findUserApi: []}
    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }
    render() {
        let {users, findUserApi} = this.state;
        return (
            <div>
                <form action={'/save'} onSubmit={this.send} ref={this.myForm}>
                    <input type={'number'} onInput={this.commitState} value={this.state.inputValue}/>
                    <button>send</button>
                </form>
                <div>{findUserApi.id}-{findUserApi.name}-{findUserApi.username}-{findUserApi.email}</div>
            </div>
        );
    }
    send = (e) =>{
        e.preventDefault();
        console.log(this.state.inputValue);
        this.findUser();
    }
    commitState = (e) => {
        this.setState({inputValue: e.target.value})
    }
    findUser = () =>{
        let findUserApi = this.state.users.find(value => value.id.toString() === this.state.inputValue);
        this.setState({findUserApi});
    }
}

export default Form;