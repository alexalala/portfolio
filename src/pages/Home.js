import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-typist/dist/Typist.css';
import { primary_colour, white } from '../assets/styles/variables.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

const Triangle = styled.div`
  border-left: 50vw solid ${white};
  border-right: 50vw solid ${white};
  border-top: 100px solid ${primary_colour};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 90vh;
  font-size: 4rem;
`;

const IconContainer = styled.div`
position: absolute;
bottom: 10vh;
width: 100%;
left: 0;
font-size: 2.5rem;

svg {
  margin: 0.5rem;
}
`;

class Home extends Component {
  render() {
    return (
      <PageWrapper>
        <Container>
          <Typist>
            Hey, I&lsquo;m Alexandra.
          </Typist>
          <IconContainer>
            <FontAwesomeIcon icon={['fab', 'github']} />
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </IconContainer>
        </Container>
        <Triangle></Triangle>
      </PageWrapper>
    );
  };
};

export default Home;
