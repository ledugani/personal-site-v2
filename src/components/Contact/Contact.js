import React from 'react';
//import tomicon from './favicon.tom.png';
import './Contact.css';

class Contact extends React.Component {

  render () {
    return (
      <div className="contact-info">
        <h1>Contact</h1>
        <div>
          {/* <ul id="list" classNamcontact-e="card">
            <li className="list-item">Follow me on <a href="https://twitter.com/notthomasdugan">Twitter</a></li>
            <li className="list-item">Reach out on <a href="https://www.facebook.com/quadsman117">Facebook</a></li>
            <li className="list-item">Shout me out on <a href="https://www.instagram.com/notthomasdugan/">Instagram</a></li>
            <li className="list-item">See me in action on <a href="https://github.com/ledugani">GitHub</a></li>
            <li className="list-item">Yell out my name in a public place</li>
          </ul> */}

          <button className="contact-card">
            <div className="row clearfix right">
              {/* <div className="left">615 556 2342</div> */}
              <div className="bizcard-title">Full Stack Developer</div>

              {/* <div className="right">
                <p>
                  <span className="big">T</span>
                  homas &amp;
                  <span className="big">D</span>ugan
                </p>
                <p>
                  <span className="med no-space">D</span>
                  <span className="small no-space">ev for </span>
                  <span className="med no-space">H</span>
                  <span className="small no-space">ire</span>
                </p>
              </div> */}

              <div className="bizcard-punch">Let's Build Something.</div>
            </div>
            {/* <div className="row">
              <p>
                <span className="big">T</span>homas
                <span className="big">Dugan</span>
              </p>
              <p>
                <span className="big">S</span>oftware
                <span className="big">D</span>eveloper
              </p>
            </div> */}
            <div className="row right bizcard-contact">
              <p><strong>Thomas Dugan</strong></p>
              <p><strong>Mobile</strong>: <span>(615) 556-2342</span></p>
              <p><strong>Location</strong>: <span>Greater Nashville Area, TN</span></p>
              <p><strong>Email</strong>: <span>tdugan85@gmail.com</span></p>
              <p><strong>Website</strong>: <span>www.ledugani.com</span></p>
              {/* <p>
                <span className="med">358 E</span>
                <span className="small">xchange </span>
                <span className="med">P</span>
                <span className="small">lace </span>
                <span className="med">N</span>
                <span className="small">ew </span>
                <span className="med">Y</span>
                <span className="small">ork</span>
                <span className="med">, N. Y. 10099 F</span>
                <span className="small">ax </span>
                <span className="med">212 555 6390 T</span>
                <span className="small">elex </span>
                <span className="med">10 4534</span>
              </p> */}
            </div>
          </button>

        </div>
      </div>
    );
  }
};

export default Contact;
