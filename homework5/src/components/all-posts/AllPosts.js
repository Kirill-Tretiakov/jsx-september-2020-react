import React, {Component} from 'react';
import PostService from "../../services/post-service/PostService";
import Posts from "./Posts";
import {Route, Switch, withRouter} from 'react-router-dom';
import FullPost from "../full-post/FullPost";


class AllPosts extends Component {
    state = {posts: []};
    postService = new PostService();

    async componentDidMount() {
        let posts = await this.postService.posts()
        this.setState({posts})
    }

    render() {
        let {posts} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    posts.map(value => <Posts item={value} key={value.id}/>)
                }

                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <FullPost postId={id} key={id}/>;
                    }}/>
                </Switch>
                <hr/>

            </div>
        );
    }
}

export default withRouter(AllPosts);