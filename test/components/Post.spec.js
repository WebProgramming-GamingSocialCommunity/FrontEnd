import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import {
  createRenderer
} from 'react-addons-test-utils';
import { Well, Modal, Col } from 'react-bootstrap';
import Post from '../../src/components/Post';

function setup() {
  const props = {
    post: {
      usr: "Test",
      title: "Test Title",
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

      const [ usr, title ] = header.props.children;
      expect(usr.type).to.equal(Col);
      expect(title.type).to.equal(Modal.Title);
    });
    it('should ruender user correvtly', () => {
      const { output } = setup();
      const header = output.props.children[0];
      const [ usr, title ] = header.props.children;
      expect(usr.props.children).to.equal('Test');
      expect(title.props.children).to.equal('Test Title');      
    });
    it('render postContent correctly', () => {
      const { output } = setup();
      const content = output.props.children[1];
      expect(content).to.equal('Testing Post');
    });
  });
});




