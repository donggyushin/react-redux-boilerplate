import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Post extends Component {

    componentWillMount() {
        this.props.fetchPosts();

    }


    render() {
        const { posts } = this.props;
        const postList = posts.posts

        return <div>post
            {postList.map(post => {
            return (
                <div key={post.id}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            )
        })}
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(Post)