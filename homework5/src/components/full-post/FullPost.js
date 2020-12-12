import React, {Component} from 'react';
import PostService from "../../services/post-service/PostService";

class FullPost extends Component {
    state = {post: null};
    postService = new PostService();

    async componentDidMount() {
        const {postId} = this.props;
        const post = await this.postService.post(postId);
        this.setState({post});
    }

    render() {
        const {post} = this.state;
        return (
            <div>
                {post && <div>{post.id}-{post.body}}</div>}
            </div>
        );
    }
}

export default FullPost;