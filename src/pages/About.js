import React, { Component } from 'react';
import styled from 'styled-components';

import { tertiary_colour, tertiary_font } from '../assets/styles/variables.js';
import PageWrapper from '../layouts/PageWrapper.jsx';
import Subheader from '../components/Subheader.js';
import Unicorn from '../components/unicorn/Unicorn.js';

const skillsArray = [
  'HTML5',
  'CSS3',
  'Javascript',
  'React',
  'Vue',
  'AWS',
  'Accesibility'
];

class About extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <Subheader>Skills</Subheader>
        <Unicorn />
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
