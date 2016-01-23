import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';
import NewsFeedSection from '../../src/components/NewsFeedSection';
import PostBoard from '../../src/components/PostBoard';
import PostInput from '../../src/components/PostInput';

function setup() {
  const props = {
    posts: [
      {
        usr: "Test",
        title: "Test Title",
        postContent: "Testing NewsFeedSection"
      },{
        usr: "Test Test",
        title: "Test Title Test Title",
        postContent: "Testing NewsFeedSection Testing NewsFeedSection"
      }
    ],
    addPost: spy()
  };

  const renderer = createRenderer();
  renderer.render(<NewsFeedSection {...props} />);
  const output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  describe('NewsFeedSection', () => {
    it('should render container', () => {
      const { output } = setup();
      expect(output.type).to.equal('section');
      expect(output.props.className).to.equal('news-feed-section');
    });
     
    describe('PostInput', () => {
      const { output, props } = setup();
      const input = output.props.children[0];
      
      it('should render correctly', () => {
        
        expect(input.type).to.equal(PostInput);
        expect(input.props.placeholder).to.equal('What do you want to post?');
        
      });

      it('should call addPost if length of text is greater than 0', () => {
        input.props.onSave('');
        expect(props.addPost).to.not.have.been.called;
        input.props.onSave('Use Redux');
        expect(props.addPost).to.have.been.calledOnce;
      });
    });

    describe('PostBoard', () => {
      it('should render correctly', () => {
        const { output } = setup();
        expect(output.props.children[1].type).to.equal(PostBoard);
      });
    });
  });
});


