import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';
import { Well, Modal } from 'react-bootstrap';
import Post from '../../src/components/Post';

function setup() {
  const props = {
    post: {
      user: "Test",
      postContent: "Testing Post"
    }
  };

  const renderer = createRenderer();
  renderer.render(<Post {...props} />);
  let output = renderer.getRenderOutput();

  return {
    props: props,
    output: output,
    renderer: renderer
  };
}

describe('components', () => {
  describe('Post', () => {
    it('initial render', () => {
      const { output } = setup();
      const header = output.props.children[0];
      expect(header.type).to.equal(Modal.Header);
      expect(header.props.children.type).to.equal(Modal.Title);
    });
    it('should ruender user correvtly', () => {
      const { output } = setup();
      const header = output.props.children[0];
      const title = header.props.children;
      expect(title.props.children).to.equal('Test');      
    });
    it('render postContent correctly', () => {
      const { output } = setup();
      const content = output.props.children[1];
      expect(content).to.equal('Testing Post');
    });
  });
});




