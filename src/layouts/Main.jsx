import React, { Component, Fragment } from 'react';

import Home from '../pages/Home.js';
import About from '../pages/About.js';
import Contact from '../pages/Contact.js';

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        <About />
        <Contact />
      </Fragment>
    );
  };
};

export default Main;
