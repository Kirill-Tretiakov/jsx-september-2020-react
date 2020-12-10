import React, {Component} from 'react';
import Users from "./Users";
import UserService from "../../services/user-service/UserService";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.users()
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        return (
            <div>
                {
                    users.map(value => <Users item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllUsers;