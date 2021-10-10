import React from 'react';
import styled from 'styled-components';

import Subheader from '../components/Subheader.js';
import Link from '../components/Link';

import ContactImage from '../assets/images/contact.svg';

export default function Contact() {
  return (
    <StyledContainer>
      <StyledImage src={ContactImage} alt="" />
      <Subheader>Feel free to get in touch!</Subheader>
      <StyledLinkContainer>
        <Link href="mailto:mail@alexandramoo.re" text="Email me - mail@alexandramoo.re" />
        <Link href="https://twitter.com/alexandrathedev" text="Tweet me - @alexandrathedev" />
      </StyledLinkContainer>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  margin: 0;
`;

const StyledImage = styled.img`
  height: 12rem;
  margin: 2rem;
`;

const StyledLinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
`;