import React, { Component } from 'react';

import '../styles/pages/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <p>Feel free to get in touch!</p>
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
      </div>
    );
  };
};

export default Contact;
