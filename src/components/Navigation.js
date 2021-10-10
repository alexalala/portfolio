import React from 'react';
import styled from 'styled-components';

import Link from './Link';

export default function Navigation() {
  return (
    <StyledNav>
        <StyledHeading>AM</StyledHeading>
        <StyledList>
            <li>
                <Link href="/" text="Home" />
            </li>
            <li>
                <Link href="/about" text="About" />
            </li>
            <li>
                <Link href="/contact" text="Contact" />
            </li>
        </StyledList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledHeading = styled.p`
  font-family: 'Playfair Display', serif;
  font-size: 2rem;
  padding: 5px;
  margin: 0.5rem 1rem 1rem 1rem;
  background: linear-gradient(180deg,transparent 88%,#a9d8f3 0);
`;

const StyledList = styled.ul`
  display: flex;
  li {
    list-style-type: none;
    margin: 1rem;
  }
`;
