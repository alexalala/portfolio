import React, { Component } from 'react';

import '../styles/pages/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <img src={require('../styles/assets/myself.jpg')} alt="myself"/>
      </div>
    );
  };
};

export default About;
