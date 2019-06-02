import React, { Component, Fragment } from 'react';
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
  'Accesibility',
  'Making CSS Unicorns'
];

const skillsArrayLastItem = skillsArray[skillsArray.length - 1];

class About extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <Subheader>Skills</Subheader>
        <div>
          {skillsArray.map(skill =>
            <span key={skill}>
            {
              (skill !== skillsArrayLastItem) ?
                (<Fragment>{skill} / </Fragment>)
              :
                (<Fragment>{skill}</Fragment>)
            }
            </span>
          )}
        </div>
        <Unicorn />
      </PageWrapper>
    );
  };
};

const AboutStyled = styled(About)`
  position: relative;

  .unicorn {
    bottom: 0;
  }

  p {
    color: ${tertiary_colour};
    font-family: ${tertiary_font};
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export default AboutStyled;
