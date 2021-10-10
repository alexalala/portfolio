import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Timeline from '../assets/images/career-timeline.svg';
import Squiggle from '../components/Squiggle';
import Bee from '../components/Bee';
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
      <TimelineContainer>
        <StyledHeading>My Timeline Into Tech</StyledHeading>
        <StyledTimeline src={Timeline} alt="career timeline" />
      </TimelineContainer>
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

const TimelineContainer = styled.div`
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

const StyledTitle= styled.h1`
  font-family: 'Playfair Display', serif;
  padding: 2rem;
  font-size: 4rem;
`;

const StyledHeading = styled.h2`
  font-family: 'Playfair Display', serif;
  padding: 2rem;
  font-size: 2.5rem;
`;

const StyledTimeline = styled.img`
  max-width: 45rem;
`;