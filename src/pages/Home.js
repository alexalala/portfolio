import React, { Component } from 'react';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';
import '../styles/pages/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Typist>
          Hey, I&lsquo;m Alexandra.
        </Typist>
        <div className="triangle"></div>
      </div>
    );
  };
};

export default Home;
