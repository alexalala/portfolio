import React, { Component } from 'react';
import styled from 'styled-components';

import { primary_colour, black } from '../assets/styles/variables.js';
import Subheader from '../components/Subheader.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

class Contact extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <Subheader>Feel free to get in touch!</Subheader>
        <a href="mailto:mail@alexandramoo.re">Email me - mail@alexandramoo.re</a>
        <a href="https://twitter.com/alexandraamoore">Tweet me - @alexandraamoore</a>
      </PageWrapper>
    );
  };
};

const styledContact = styled(Contact)`
  background-color: ${primary_colour};
  margin: 0;
  width 100%;

  a {
    background-image: linear-gradient(180deg,transparent 65%,#a9d8f3 0);
    background-size: 0 100%;
    background-repeat: no-repeat;
    text-decoration: none;
    color: ${black};
    font-size: 2rem;
    font-weight: 100;
    margin-bottom: 1.5rem;

    &:hover {
      background-size: 100% 100%;
      cursor: pointer;
      color: ${black};
    }
  }
`;

export default styledContact;
