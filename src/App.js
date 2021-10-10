import React from 'react';

import { injectGlobal } from 'styled-components';
// import fontawesome icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import Navigation from './components/Navigation';

import Routes from './Routes';

library.add(fab);

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes />
    </div>
  )
};

/* GLOBAL STYLES */
injectGlobal`
  .App {
    box-sizing: border-box;
    text-align: center;
    background-color: #FEFEFE;
    font-family: "Raleway", sans-serif;
    color: #464545;
    height: 100%;
  }
`;