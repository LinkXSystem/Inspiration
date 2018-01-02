import React, { Component } from 'react';
import PropTyps from 'prop-types';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

import '../../public/fonts/fonts.css';

import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.router = this.router.bind(this);
  }

  router() {
    return (
      <Nav>
        {this.props.routers.map(router => (
          // <link to="/books" /> => <a  href="/books"/>
          <NavItem key={router.toString()} href="/books">
            {router}
          </NavItem>
        ))}
      </Nav>
    );
  }

  render() {
    return (
      <Navbar fluid className="header">
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">LinkSystem & 灵感</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          {/* 路由 */}
          {this.router()}
          <Nav pullRight>
            <NavItem eventKey={1} href="#" className="user">
              <img src={require('../../public/imgs/user.png')} alt="用户" />
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.propTypes = {
  routers: PropTyps.array.isRequired,
};

export default Header;
