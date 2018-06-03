import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Main from './layouts/Main.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Route exact path="/" component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

/* GLOBAL STYLES */
injectGlobal`
  .App {
    text-align: center;
    background-color: #febcc8;
    font-family: "Raleway", sans-serif;
    color: #fff;
    height: 100%;
  }
`;

export default App;
