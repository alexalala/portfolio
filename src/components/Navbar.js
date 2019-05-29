import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import * as palette from '../assets/styles/variables.js';

const Nav = styled.ul`
  text-align: right;
  font-size: 1.5rem;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 1.5rem;

  &:active {
    color: ${palette.secondary_color};
  }
  a {
    text-decoration: none;
    color: ${palette.white};
  }
`;

const NavA = styled(NavLink)`
  text-decoration: none;
  color: ${palette.white};
`;

class Navbar extends Component {
  render() {
    return (
      <Nav>
        <NavItem>
          <NavA exact to="/" activeClassName="active">Home</NavA>
        </NavItem>
        <NavItem>
          <NavA to="/about" activeClassName="active">About</NavA>
        </NavItem>
        <NavItem>
          <NavA to="/contact" activeClassName="active">Contact</NavA>
        </NavItem>
      </Nav>
    );
  };
};

export default Navbar;
