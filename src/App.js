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
    box-sizing: border-box;
    text-align: center;
    background-color: #fbe4f5;
    font-family: "Raleway", sans-serif;
    color: #464545;
    height: 100%;
  }
`;

export default App;
