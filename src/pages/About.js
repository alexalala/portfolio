import React from 'react';
import styled from 'styled-components';

import Subheader from '../components/Subheader.js';
import AboutImage from '../assets/images/about.svg';

export default function About() {
  return (
    <StyledContainer>
      <StyledImage src={AboutImage} alt="" />
      <Subheader>About</Subheader>
      <div className="copy-container">
        <p>I'm a self-taught Senior Frontend Engineer at Kurt Geiger.</p>
        <p>
          I love to mentor junior colleagues and those learning to code. 
          I set up a Codebar chapter in my home town of Norwich to support those from underrepresented backgrounds get into the tech industry.
        </p>
        <Subheader>Skills</Subheader>
        <StyledList>
          <li>React</li>
          <li>Javascript - ES6</li>
          <li>Typescript</li>
          <li>Next JS</li>
          <li>Accessibility and Semantic HTML</li>
          <li>Styling - CSS3, Styled Components, SASS, CSS Modules</li>
          <li>Testing - Jest, Enzyme, TestCafe</li>
          <li>Documentation - Technical Writing and Storybook for components</li>
        </StyledList>
        <Subheader>My Journey Into Tech</Subheader>
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
`;

const StyledImage = styled.img`
  height: 12rem;
  margin: 2rem;
`;

const StyledList = styled.ul`
  list-style-type: none;
`;
