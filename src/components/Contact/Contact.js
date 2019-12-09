import React from 'react';
//import tomicon from './favicon.tom.png';
import './Contact.css';

class Contact extends React.Component {

  render () {
    return (
      <div className="contact-info" id="contact">
        <h1>Contact</h1>
        <div>
          <button className="contact-card">
            <div className="row derecha bizcard-top">
              <div className="bizcard-title">Full Stack Developer</div>
              <div className="bizcard-punch">Let's Build Something.</div>
            </div>

            <div className="row derecha bizcard-contact">
              <p><strong>Thomas Dugan</strong></p>
              <p><strong>Mobile</strong>: <span>(615) 556-2342</span></p>
              <p><strong>Location</strong>: <span>Greater Nashville Area, TN</span></p>
              <p><strong>Email</strong>: <span>tdugan85@gmail.com</span></p>
              <p><strong>Website</strong>: <span>www.ledugani.com</span></p>
            </div>
          </button>

        </div>
      </div>
    );
  }
};

export default Contact;
