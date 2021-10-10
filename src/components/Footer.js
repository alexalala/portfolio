import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <p>Designed &amp; built by Alexandra Moore &hearts;</p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.div`
  background-color: #a9d8f354;
  p {
    margin: 0;
    font-size: 0.75rem;
  }
`;