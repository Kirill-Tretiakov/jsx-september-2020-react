import React, {Component} from 'react';

class User extends Component {

    render() {
        let {item, onSelectOne} = this.props;
        return (
            <div>
                {item.name} - {item.id}
                <button onClick={() => onSelectOne(item.id)}>Choose</button>
            </div>
        );
    }
}

export default User;