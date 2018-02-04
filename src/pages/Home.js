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
        <img src={require('../styles/assets/palm-leaf.svg')} alt="palm leaf"/>
      </div>
    );
  };
};

export default Home;
