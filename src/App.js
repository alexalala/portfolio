import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import Navbar from './components/Navbar';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
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
