import React, {Component} from 'react';
import Post from "./Post";

class AllPostComponent extends Component {

    state = {posts: [], choseTwo :null}

    onSelectPost=(id)=>{
        let {posts} = this.state;
        let find1 = posts.find(value => value ===id);
        this.setState({choseTwo:find1})
}

    render() {
        console.log('red');
        let {posts, choseTwo} = this.state;
        return (
            <div>
                {
                    posts.map(post=> <Post item={post} key={post.id} onSelectPost={this.onSelectPost()}/>)
                }

                {
                    choseTwo && <Post item={choseTwo}/>
                }
            </div>
        );
    }


    componentDidMount() {
        console.log('component')
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(posts=>
                this.setState(posts));
    }
}

export default AllPostComponent;