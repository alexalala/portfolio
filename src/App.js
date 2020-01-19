import React, { Component } from 'react';

import { injectGlobal } from 'styled-components';
// import fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Routes from './Routes';

library.add(fab);

class App extends Component {
  render() {
    return (
        <div className="App">
          <Routes />
        </div>
    );
  }
}

/* GLOBAL STYLES */
injectGlobal`
  .App {
    box-sizing: border-box;
    text-align: center;
    background-color: #fbe4f5;
    font-family: "Raleway", sans-serif;
    color: #464545;
    height: 100%;
  }
`;

export default App;
