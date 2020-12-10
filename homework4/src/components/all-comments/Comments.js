import React, {Component} from 'react';

class Comments extends Component {
    render() {
        let {item} = this.props
        return (
            <div>
                {item.id} -- {item.name} -- {item.body}
            </div>
        );
    }
}

export default Comments;