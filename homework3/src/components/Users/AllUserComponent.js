import React, {Component} from 'react';
import {UserService} from "../../services/UserServices/UserService";
import User from "./User";

class AllUserComponent extends Component {
    userService = new UserService();
    state = {users: [], chooseOne: null}

    onSelectOne = (id) => {
        this.setState({chooseOne: this.state.users.find(value => value.id === id)})
    }

    componentDidMount() {
        this.userService.getAllUsers()
            .then(value =>
                this.setState({users: value}))
    }

    render() {
        let {users, chooseOne} = this.state;
        return (
            <div>
                {
                    users.map(value => (<User item={value} key={value.id} onSelectOne={this.onSelectOne}/>))
                }

                {
                    chooseOne && <User item={chooseOne}/>
                }

            </div>
        );
    }
}

export default AllUserComponent;