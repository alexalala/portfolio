import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-typist/dist/Typist.css';
import { tertiary_colour, black } from '../assets/styles/variables.js';


const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  font-size: 3.75rem;

  p {
    font-size: 1.5rem;
    color: ${tertiary_colour};
    font-weight: 100;
    margin: 0.5rem;
    animation: ${fadein} 3s;
    animation-delay: 1.5s;
    animation-fill-mode: forwards;
    opacity: 0;
  }
`;

const IconContainer = styled.div`
position: absolute;
display: flex;
align-items: center;
justify-content: center;
bottom: 10vh;
width: 100%;
left: 0;
font-size: 2.5rem;

a {
  margin: 0.5rem;
  color: ${black};
}
`;

export default function Home() {
  return (
    <div>
      <Container>
        <Typist>
          Hey, I&lsquo;m Alexandra
        </Typist>
        <p>Front end developer with a passion for inclusivity.</p>
        <p>&#x2665;</p>
        <IconContainer>
          <a href="https://github.com/alexalala" aria-label="My Github profile">
            <FontAwesomeIcon icon={['fab', 'github']} />
          </a>
          <a href="https://twitter.com/alexandraamoore" aria-label="My Twitter profile">
            <FontAwesomeIcon icon={['fab', 'twitter']} />
          </a>
          <a href="https://www.linkedin.com/in/alexandra-moore-27ba56157" aria-label="My Linkedin profile">
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </a>
        </IconContainer>
      </Container>
    </div>
  )
};