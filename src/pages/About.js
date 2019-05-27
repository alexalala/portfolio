import React, { Component } from 'react';
import styled from 'styled-components';

import { tertiary_colour, tertiary_font } from '../styles/variables.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

class About extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <img src={require('../styles/assets/me.svg')} alt="myself"></img>
        <p>I&lsquo;m Alexandra. A front-end web developer based in Norwich.</p>
      </PageWrapper>
    );
  };
};

const AboutStyled = styled(About)`
  img {
    height: 13rem;
  }

  p {
    color: ${tertiary_colour};
    font-family: ${tertiary_font};
    font-size: 1.5rem;
  }
`;

export default AboutStyled;
