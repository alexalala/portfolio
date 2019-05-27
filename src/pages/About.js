import React, { Component } from 'react';
import styled from 'styled-components';

import { tertiary_colour, tertiary_font } from '../styles/variables.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

class About extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <p>I&lsquo;m Alexandra, a self-taught front end developer.</p>
        <p>I've been working as a developer since '17 & teaching myself to code since '14.</p>
        <p>I'm passionate about inclusivity - both through ensuring my code is accessible,
          as well as through helping others from a range of backgrounds get into the industry.</p>
      </PageWrapper>
    );
  };
};

const AboutStyled = styled(About)`
  p {
    color: ${tertiary_colour};
    font-family: ${tertiary_font};
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export default AboutStyled;
