import React, { Component } from 'react';
import styled from 'styled-components';

import { primary_colour } from '../assets/styles/variables.js';
import Subheader from '../components/Subheader.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

class Contact extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <Subheader>Feel free to get in touch!</Subheader>
        <a href="mailto:mail@alexandramoo.re">Email me at mail@alexandramoo.re</a>
        <a href="https://twitter.com/alexandraamoore">Tweet me @alexandraamoore</a>
      </PageWrapper>
    );
  };
};

const styledContact = styled(Contact)`
  background-color: ${primary_colour};
  margin: 0;
  width 100%;
`;

export default styledContact;
