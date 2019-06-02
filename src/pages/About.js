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
        <div className="copy-container">
          <p>
            I'm a self-taught front end developer from Norwich.
          </p>
          <p>
            I love to help others from diverse backgrounds learn to code and get into the industry
            and have managed to achieve this by volunteering for a Code First:Girls course and
            setting up a codebar chapter in Norwich.
          </p>
        </div>
        <Subheader>Skills</Subheader>
        <div className="copy-container">
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

  .copy-container {
    font-size: 1.25rem;
    margin: 0 2rem;
    font-weight: 100;

    p {
      margin: 1rem 0;
    }
  }
  .unicorn {
    bottom: 0;
  }
`;

export default AboutStyled;
