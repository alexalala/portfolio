import React, { Component } from 'react';
import styled from 'styled-components';

import { primary_colour, white } from '../assets/styles/variables.js';
import Subheader from '../components/Subheader.js';
import PageWrapper from '../layouts/PageWrapper.jsx';

class Contact extends Component {
  render() {
    return (
      <PageWrapper className={this.props.className}>
        <Subheader>Feel free to get in touch!</Subheader>
        <form action="https://formspree.io/contact@alexandramoo.re" method="POST">
          <label>
            Your name:
            <input type="text" name="name"></input>
          </label>
          <label>
            Your email:
            <input type="email" name="_replyto"></input>
          </label>
          <label>
            Description:
            <textarea rows="3" cols="3" name="description"></textarea>
          </label>
          <input type="submit" value="Send"></input>
        </form>
      </PageWrapper>
    );
  };
};

const styledContact = styled(Contact)`
  background-color: ${primary_colour};
  margin: 0;
  width 100%;

  input {
    box-sizing: border-box;
    width: 100%;
    background-color: ${white};
    display: block;
    margin: 1rem 0;
    padding: 1rem;
  }

  form {
    width: 70%;
  }

  textarea {
    box-sizing: border-box;
    width: 100%;
    background-color: ${white};
    display: block;
    margin: 1rem 0;
    padding: 1rem;
  }
`;

export default styledContact;
