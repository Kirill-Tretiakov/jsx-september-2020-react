import React, {Component} from 'react';
import CommentService from "../../services/comments-service/ConmentService";
import Comments from "./Comments";
import {Route, Switch, withRouter} from 'react-router-dom';
import FullComment from "../full-comment/FullComment";

class AllComments extends Component {
    state = {comments: []};
    commentService = new CommentService()

    async componentDidMount() {
        let comments = await this.commentService.comments()
        this.setState({comments})
    }

    render() {
        let {comments} = this.state;
        let {match: {url}} = this.props;
        return (
            <div>
                {
                    comments.map(value => <Comments item={value} key={value.id}/>)
                }
                <hr/>
                <Switch>
                    <Route path={url + '/:id'} render={(props) => {
                        const {match: {params: {id}}} = props;
                        return <FullComment commentId={id} key={id}/>;
                    }}/>
                </Switch>
                <hr/>
            </div>
        );
    }
}

export default withRouter(AllComments);