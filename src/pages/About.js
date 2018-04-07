import React, { Component } from 'react';

import '../styles/pages/About.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <img src={require('../styles/assets/myself.jpg')} alt="myself" className="fade-in one"/>
        <p className="fade-in two">I&lsquo;m Alexandra. A front-end web developer based in Norwich. I enjoy creating beautiful, innovative interfaces that people love to use.</p>
      </div>
    );
  };
};

export default About;
