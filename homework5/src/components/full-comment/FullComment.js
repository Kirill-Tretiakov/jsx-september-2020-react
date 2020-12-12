import React, {Component} from 'react';
import ConmentService from "../../services/comments-service/ConmentService";

class FullComment extends Component {

    state = {comment: null};
    conmentService = new ConmentService()

    async componentDidMount() {
        const {commentId} = this.props;
        const comment = await this.conmentService.comment(commentId);
        this.setState({comment});
    }

    render() {
        const {comment} = this.state;
        return (
            <div>
                {comment && <div>{comment.name}-{comment.email}-{comment.body}</div>}
            </div>
        );
    }
}

export default FullComment;