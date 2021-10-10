import React from 'react';
import styled from 'styled-components';

import {  black } from '../assets/styles/variables.js';

const Link = ({ href, text }) => {
  return (
    <StyledLink href={href}>
      {text}
    </StyledLink>
  );
};

export default Link;

const StyledLink = styled.a`
  background-image: linear-gradient(180deg,transparent 65%,#a9d8f3 0);
  background-size: 0 100%;
  background-repeat: no-repeat;
  text-decoration: none;
  color: ${black};
  font-size: 1.25rem;
  font-weight: 100;
  margin-bottom: 1.5rem;
  width: fit-content;

  &:hover {
    background-size: 100% 100%;
    cursor: pointer;
    color: ${black};
  }
`;