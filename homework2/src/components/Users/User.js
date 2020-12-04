import React, {Component} from 'react';


class User extends Component {
    render() {
        let {item,onSelectUser} = this.props;
        return (
            <div>
                {item.id} - {item.name}
                <button onClick={() => onSelectUser(item.id)}>chose</button>
            </div>
        );
    }
}

export default User;