import React, { Component } from 'react';
import styled from 'styled-components';

import PageWrapper from '../layouts/PageWrapper.jsx';

const Me = styled.img`
  height: 240px;
  margin: 2rem 0;
  border-radius: 12px;
`;

class About extends Component {
  render() {
    return (
      <PageWrapper>
        <Me src={require('../styles/assets/myself.jpg')} alt="myself"></Me>
        <p>I&lsquo;m Alexandra. A front-end web developer based in Norwich. I enjoy creating beautiful, innovative interfaces that people love to use.</p>
      </PageWrapper>
    );
  };
};

export default About;
