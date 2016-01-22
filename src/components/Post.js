import React, { Component, PropTypes } from 'react';
import { Well, Modal } from 'react-bootstrap';

class Post extends Component {
  render() {
    const { post } = this.props;
    return (
      <Well>
        <Modal.Header>
          <Modal.Title>{ post.user }</Modal.Title>
        </Modal.Header>
        { post.postContent }
      </Well>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    user: PropTypes.string,
    postContent: PropTypes.string.isRequired
  }).isRequired
};

export default Post;
