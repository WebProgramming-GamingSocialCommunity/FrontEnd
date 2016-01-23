import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    Button, Input, ButtonGroup, ButtonInput, 
    Nav, Navbar, NavItem, NavDropdown,
    MenuItem, Tabs, Tab, ListGroup, ListGroupItem, 
    Grid, Row, Col, form
} from 'react-bootstrap';
import NewsFeedSection from '../components/NewsFeedSection';
import * as PostActions from '../actions/posts'

class GameCommunity extends React.Component{
  render(){
    const { posts, actions } = this.props;
    return(
      <Grid fluid>
        <Row className = 'Toolbar'>
          <Navbar inverse>
            <Col lg={11}>
              <Navbar.Header>
                <Navbar.Brand>
                  <a href='#'>Game Community</a>
                </Navbar.Brand>
                <Navbar.Toggle/>
              </Navbar.Header>
              <Navbar.Collapse>
                <Nav>
                  <NavItem eventKey={1} href='#'>Irtoduction</NavItem>
                  <NavItem eventKey={2} href='#'>News</NavItem>
                  <NavDropdown eventKey={3} title="Games">
                    <MenuItem eventKey={3.1}>LOL</MenuItem>
                    <MenuItem eventKey={3.2}>Hearthstone</MenuItem>
                  </NavDropdown>
                  <Navbar.Form pullLeft>
                    <Input type='text' placeholder="search"/>
                    <Button type='submit'>Search</Button>
                  </Navbar.Form>
                </Nav>
                <Nav pullRight>
                  <NavItem eventKey={1} href='#'>Lin</NavItem>
                  <NavItem eventKey={2} href='#'>Home</NavItem>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Navbar>
        </Row>
        <Col lg={10} className = 'Features'>
          <Tabs position='left' tabWidth={2}>
            <Tab eventKey={1} title="News Feed">
              <NewsFeedSection posts={posts} addPost={actions.addPostToServer}/>
            </Tab>
          </Tabs>
        </Col>
      </Grid>
    );
  }
}

GameCommunity.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    usr: PropTypes.string,
    title: PropTypes.string,
    postContent: PropTypes.string.isRequired
  })).isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(PostActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCommunity);

