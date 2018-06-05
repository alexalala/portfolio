import React, { Component } from 'react';
import styled from 'styled-components';

import PageWrapper from '../layouts/PageWrapper.jsx';

class About extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <img src={require('../styles/assets/me.svg')} alt="myself"></img>
        <p>I&lsquo;m Alexandra. A front-end web developer based in Norwich. I enjoy creating beautiful, innovative interfaces that people love to use.</p>
      </PageWrapper>
    );
  };
};

const AboutStyled = styled(About)`
  img {
    height: 240px;
    margin: 2rem 0;
    border-radius: 12px;
  }

  p {
    color: #ff9fb0;
    font-size: 2rem;
  }
`;

export default AboutStyled;
