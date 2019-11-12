import React from 'react';
import tomicon from './favicon.tom.png';
import './Contact.css';

class Contact extends React.Component {

  render () {
    return (
      <div className="contact-info">
        <h1>Contact</h1>
        <div>
          {/* <ul id="list" className="card">
            <li className="list-item">Follow me on <a href="https://twitter.com/notthomasdugan">Twitter</a></li>
            <li className="list-item">Reach out on <a href="https://www.facebook.com/quadsman117">Facebook</a></li>
            <li className="list-item">Shout me out on <a href="https://www.instagram.com/notthomasdugan/">Instagram</a></li>
            <li className="list-item">See me in action on <a href="https://github.com/ledugani">GitHub</a></li>
            <li className="list-item">Yell out my name in a public place</li>
          </ul> */}

          <div class="center">
            <div class="card">
              <div class="additional">
                <div class="user-card">
                  <div class="level center">
                    Junior Level
                  </div>

                  <img src={tomicon} alt="" className="favicon" />

                  <div class="points center">
                    Software Developer
                  </div>
                </div>
                <div class="more-info">
                  <h2>Thomas Dugan</h2>
                  <div class="coords">
                    <span>Group Name</span>
                    <span>Began Coding October 2015</span>
                  </div>
                  <div class="coords">
                    <span>Position/Role</span>
                    <span>Nashville, TN</span>
                  </div>
                  <div class="stats">
                    <div>
                      <div class="title">Experience</div>
                      <i class="fa fa-trophy"></i>
                      <div class="value">4yr</div>
                    </div>
                    <div>
                      <div class="title">Collection</div>
                      <i class="fa fa-gamepad"></i>
                      <div class="value">27</div>
                    </div>
                    <div>
                      <div class="title">Weekly Meetups</div>
                      <i class="fa fa-group"></i>
                      <div class="value">3</div>
                    </div>
                    <div>
                      <div class="title">Coffee</div>
                      <i class="fa fa-coffee"></i>
                      <div class="value infinity">∞</div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="general">
                <h2>Thomas Dugan</h2>
                <ul id="list" className="card">
                  <li>Follow me on <a href="https://twitter.com/notthomasdugan">Twitter</a></li>
                  <li>Reach out on <a href="https://www.facebook.com/quadsman117">Facebook</a></li>
                  <li>Shout me out on <a href="https://www.instagram.com/notthomasdugan/">Instagram</a></li>
                  <li>See me in action on <a href="https://github.com/ledugani">GitHub</a></li>
                  <li>Yell out my name in a public place</li>
                </ul>
                <span class="more">Mouse over the card for more info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Contact;
