import React from 'react';
import styled from 'styled-components';

import Link from './Link';

export default function Navigation() {
  return (
    <nav>
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
    </nav>
  );
};

const StyledList = styled.ul`
  display: flex;
  justify-content: flex-end;

  li {
    list-style-type: none;
    margin: 1rem;
  }
`;
