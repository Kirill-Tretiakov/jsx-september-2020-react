import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Posts extends Component {
    render() {
        const {item, match: {url}} = this.props;
        return (
            <div>
                {item.id} -- {item.title}- <Link to={url + '/' + item.id}>info page</Link>
            </div>
        );
    }
}

export default withRouter(Posts);