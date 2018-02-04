import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/components/Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <ul>
        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
      </ul>
    );
  };
};

export default Navbar;
