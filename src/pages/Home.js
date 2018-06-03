import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';
import * as palette from '../styles/variables.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

const Triangle = styled.div`
  border-left: 50vw solid ${palette.white};
  border-right: 50vw solid ${palette.white};
  border-top: 100px solid ${palette.primary_color};
`;

const Typed = styled(Typist)`
  align-items: center;
  display: flex;
  height: 90vh;
  font-size: 4rem;
`;

class Home extends Component {
  render() {
    return (
      <PageWrapper>
        <Typed>
          Hey, I&lsquo;m Alexandra.
        </Typed>
        <Triangle></Triangle>
      </PageWrapper>
    );
  };
};

export default Home;
