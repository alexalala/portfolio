import React, { Component } from 'react';
import styled from 'styled-components';
import Typist from 'react-typist';

import 'react-typist/dist/Typist.css';
import * as palette from '../styles/Variables.js';

const HomeContent = styled.div`
  font-size: 5rem;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Triangle = styled.div`
  position: fixed;
  bottom: 0;
  border-left: 50vw solid ${palette.white};
  border-right: 50vw solid ${palette.white};
  border-top: 100px solid ${palette.primary_color};
`;

class Home extends Component {
  render() {
    return (
      <HomeContent>
        <Typist>
          Hey, I&lsquo;m Alexandra.
        </Typist>
        <Triangle></Triangle>
      </HomeContent>
    );
  };
};

export default Home;
