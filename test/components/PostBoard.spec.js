import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';
import PostBoard from '../../src/components/PostBoard'; 
import Post from '../../src/components/Post';

function setup(propOverrides) {
  const props = Object.assign({
    posts: [
      {
        usr: "Test",
        title: "Test Title",
        postContent: "Testing PostBoard"
      },{
        usr: "Test Test",
        title: "Test Title Test Title",
        postContent: "Testing PostBoard Testing PostBoard"
      }
    ]
  }, propOverrides);
  
  const renderer = createRenderer();
  renderer.render(<PostBoard {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  describe('PostBoard', () => {
    it('should render container', () => {
      const { output } = setup();
      expect(output.type).to.equal('section');
      expect(output.props.className).to.equal('post-board');
    });
    
    describe('post list', () => {
      it('should render', () => {
        const { output, props } = setup();
        const postList = output.props.children;
        expect(postList.type).to.equal('ul');
        expect(postList.props.children.length).to.equal(2);
        
        postList.props.children.forEach((post, i) => {
          expect(post.type).to.equal(Post);
          expect(post.props.post).to.equal(props.posts[i]);
        });
      });
    });

  });
});




