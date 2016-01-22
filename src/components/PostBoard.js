import React, { Component, PropTypes } from 'react';
import Post from './Post';

class PostBoard extends Component {
  render() {
    const { posts } = this.props;
    return(
      <section className = 'post-board'>
        <ul className = 'post-list'>
          {posts.map(post =>
            <Post post={post} />           
          )}
        </ul>
      </section>
    );
  }
}

PostBoard.PropTypes = {
  posts: PropTypes.arrayOf(React.PropTypes.shape({
    user: PropTypes.string,
    postContent: PropTypes.string.isRequired
  }))
};

export default PostBoard;
