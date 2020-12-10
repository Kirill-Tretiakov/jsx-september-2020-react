import React, {Component} from 'react';
import CommentService from "../../services/comments-service/ConmentService";
import Comments from "./Comments";

class AllComments extends Component {
    state = {comments: []};
    commentService = new CommentService()

    async componentDidMount() {
        let comments = await this.commentService.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        return (
            <div>
                {
                    comments.map(value => <Comments item={value} key={value.id}/>)
                }
            </div>
        );
    }
}

export default AllComments;