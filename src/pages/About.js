import React, { Component } from 'react';
import styled from 'styled-components';

import PageWrapper from '../layouts/PageWrapper.jsx';

const Me = styled.img`
  height: 240px;
  margin: 2rem 0;
  border-radius: 12px;
`;

const AboutText = styled.p`
  color: #ff9fb0;
  font-size: 2rem;
`;

class About extends Component {
  render() {
    return (
      <PageWrapper>
        <Me src={require('../styles/assets/me.svg')} alt="myself"></Me>
        <AboutText>I&lsquo;m Alexandra. A front-end web developer based in Norwich. I enjoy creating beautiful, innovative interfaces that people love to use.</AboutText>
      </PageWrapper>
    );
  };
};

export default About;
