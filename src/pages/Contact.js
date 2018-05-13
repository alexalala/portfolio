import React, { Component } from 'react';
import styled from 'styled-components';

import Subheader from '../components/Subheader.js';

const ContactContent = styled.div`
  width: 80%;
  margin-left: 10%;
  text-align: left;
`;

const FormInput = styled.input`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  display: block;
  margin: 1rem 0;
  padding: 1rem;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  background-color: #fff;
  box-sizing: border-box;
  display: block;
  margin: 1rem 0;
  padding: 1rem;
`;

class Contact extends Component {
  render() {
    return (
      <ContactContent>
        <Subheader>Feel free to get in touch!</Subheader>
        <form action="https://formspree.io/contact@alexandramoo.re" method="POST">
          <label>
            Your name:
            <FormInput type="text" name="name"></FormInput>
          </label>
          <label>
            Your email:
            <FormInput type="email" name="_replyto"></FormInput>
          </label>
          <label>
            Description:
            <FormTextarea rows="3" cols="3" name="description"></FormTextarea>
          </label>
          <FormInput type="submit" value="Send"></FormInput>
        </form>
      </ContactContent>
    );
  };
};

export default Contact;
