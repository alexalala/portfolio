import React from 'react';
import styled from 'styled-components';

import { primary_colour, black } from '../assets/styles/variables.js';
import Subheader from '../components/Subheader.js';

export default function Contact() {
  return (
    <StyledContainer>
      <Subheader>Feel free to get in touch!</Subheader>
      <ContactLinks href="mailto:mail@alexandramoo.re">Email me - mail@alexandramoo.re</ContactLinks>
      <ContactLinks href="https://twitter.com/alexandraamoore">Tweet me - @alexandraamoore</ContactLinks>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  background-color: ${primary_colour};
  margin: 0;
  width 100%;
`;

const ContactLinks = styled.a`
  background-image: linear-gradient(180deg,transparent 65%,#a9d8f3 0);
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  color: ${black};
  font-size: 2rem;
  font-weight: 100;
  margin-bottom: 1.5rem;

  &:hover {
    background-size: 100% 100%;
    cursor: pointer;
    color: ${black};
  }
`;
