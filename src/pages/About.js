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
        <p>I'm a self-taught front end developer from Norwich.</p>
        <p>
          I love to help others from diverse backgrounds learn to code and get into the industry
          and have managed to achieve this by volunteering for a Code First:Girls course and
          setting up a codebar chapter in Norwich.
        </p>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  font-size: 1.5rem;
`;

const StyledImage = styled.img`
  height: 20rem;
  margin: 2rem;
`;
