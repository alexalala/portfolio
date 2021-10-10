import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

import Squiggle from '../components/Squiggle';
import Bee from '../components/Bee';
import Link from '../components/Link'
import Subheader from '../components/Subheader';
import 'react-typist/dist/Typist.css';
import { black } from '../assets/styles/variables.js';

export default function Home() {
  return (
    <div>
      {
        (window.innerWidth > 740) &&
        <Bee />
      }
      <Container>
        <StyledTitle>Alexandra Moore</StyledTitle>
        <p>Senior Frontend Developer. Inclusivity advocate.</p>
        <p>&#x2665;</p>
        <IconContainer>
          <a href="https://github.com/alexalala" aria-label="My Github profile">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://twitter.com/alexandrathedev" aria-label="My Twitter profile">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a href="https://www.linkedin.com/in/alexandra-moore-27ba56157" aria-label="My Linkedin profile">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </IconContainer>
      </Container>
      <Squiggle />
      <SecondaryContainer>
        <Subheader>Latest Achievements</Subheader>
        <StyledList>
          <li>
            <FontAwesomeIcon icon={faBook} />
            <Link to="https://alexalala.hashnode.dev/track-my-savings-keep-tabs-on-your-savings-on-a-monthly-basis" text="Blog Post - Creating 'Track My Savings' with Auth0 and React" />
          </li>
          <li>
            <FontAwesomeIcon icon={faBook} />
            <Link to="https://www.statuscake.com/blog/design-systems-a-storybook-and-react-tutorial/" text="Blog Post - Design Systems – A Storybook and React Tutorial" />
          </li>
          <li>
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <p>Talk @ Fashion Retail Academy - Accessibility and the web</p>
          </li>
        </StyledList>
      </SecondaryContainer>
    </div>
  )
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  font-size: 3.75rem;
  background: linear-gradient(0deg,rgba(255,255,255,1) 0%,rgb(235, 242, 249) 100%);

  p {
    font-size: 1.5rem;
    color: #2d6a8c;
    font-weight: 100;
    margin: 0.5rem;
  }
`;

const SecondaryContainer = styled.div`
  background: linear-gradient(180deg,rgba(255,255,255,1) 0%,rgb(235, 242, 249) 100%);
`;

const IconContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 3vh;
  width: 100%;
  left: 0;
  font-size: 2.5rem;

  a {
    margin: 0.5rem;
    color: ${black};
  }
`;

const StyledTitle = styled.h1`
  font-family: 'Playfair Display', serif;
  padding: 2rem;
  font-size: 4rem;
`;

const StyledList = styled.ul`
  list-style-type: none;

  li {
    display: flex;
    align-items: center;

    > a, p {
      margin: 0;
    }

    > svg {
      margin: 1rem;
    }
  }
`;