import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-typist/dist/Typist.css';
import { primary_colour, tertiary_colour, white, black } from '../assets/styles/variables.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

const Triangle = styled.div`
  border-left: 50vw solid ${white};
  border-right: 50vw solid ${white};
  border-top: 100px solid ${primary_colour};
`;

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
  background-color: ${primary_colour};

  p {
    font-size: 1.5rem;
    color: ${tertiary_colour};
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

class Home extends Component {
  render() {
    return (
      <PageWrapper>
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
        <Triangle></Triangle>
      </PageWrapper>
    );
  };
};

export default Home;
