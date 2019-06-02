import React, { Component, Fragment } from 'react';
import styled from 'styled-components';

import PageWrapper from '../layouts/PageWrapper.jsx';
import Subheader from '../components/Subheader.js';
import Unicorn from '../components/unicorn/Unicorn.js';

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Vue',
  'AWS',
  'Accesibility',
  'Making CSS Unicorns'
];

const skillsLastItem = skills[skills.length - 1];

class About extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <Subheader>About</Subheader>

        <Subheader>Skills</Subheader>
        <div className="skills">
          {skills.map(skill =>
            <span key={skill}>
            {
              (skill !== skillsLastItem) ?
                (<Fragment>{skill} | </Fragment>)
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
  display: flex;
  justify-content: start;
  font-size: 1.5rem;
  margin: 0 2rem;

  .skills {
    font-size: 1.5rem;
    margin: 0 2rem;
  }
  .unicorn {
    bottom: 0;
  }
`;

export default AboutStyled;
