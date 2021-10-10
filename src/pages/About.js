import React from 'react';
import styled from 'styled-components';

import Subheader from '../components/Subheader.js';
import AboutImage from '../assets/images/about.svg';
import Underline from '../components/Underline'

export default function About() {
  return (
    <StyledContainer>
      <StyledImage src={AboutImage} alt="" />
      <Subheader>About</Subheader>
      <div className="copy-container">
        <p>I'm a self-taught Senior Frontend Engineer at Kurt Geiger.</p>
        <p>
          I love to mentor junior colleagues and those learning to code. 
          I set up a Codebar chapter in my home town of Norwich to support those from underrepresented backgrounds to get into the tech industry.
        </p>
        <Subheader>Skills</Subheader>
        <StyledList>
          <li><Underline>React</Underline></li>
          <li><Underline>Javascript</Underline> - ES6</li>
          <li><Underline>Typescript</Underline></li>
          <li><Underline>Next JS</Underline></li>
          <li><Underline>Accessibility</Underline> - Semantic HTML and WCAG 2.0 Compliance</li>
          <li><Underline>Styling</Underline> - CSS3, Styled Components, SASS, CSS Modules</li>
          <li><Underline>Testing</Underline> - Jest, Enzyme, TestCafe</li>
          <li><Underline>Documentation</Underline> - Technical Writing and Storybook for components</li>
        </StyledList>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 1.5rem;
  text-align: left;
  margin: 0 2rem;
`;

const StyledImage = styled.img`
  height: 12rem;
  margin: 2rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;