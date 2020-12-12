import React, {Component} from 'react';
import Users from "./Users";
import UserService from "../../services/user-service/UserService";
import {Route, Switch, withRouter} from 'react-router-dom';
import FullUser from "../full-user/FullUser";

class AllUsers extends Component {
    state = {users: []};
    userService = new UserService();

    async componentDidMount() {
        let users = await this.userService.users()
        this.setState({users})
    }

    render() {
        let {users} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <Users item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <FullUser userId={id} key={id}/>;
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllUsers);