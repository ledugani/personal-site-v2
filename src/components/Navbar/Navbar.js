import React from 'react';
import home from './icons/home.svg';
import contact from './icons/contact.svg';
import experience from './icons/experience.svg';
import projects from './icons/projects.svg';
import blog from './icons/blog.svg';
import right from './icons/right.svg';
import './Navbar.css';

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <ul className="navigation-list">
          <a href="/">
            <li className="nav-btn nav-home">
              <img src={home} className="mobile-icon" alt="logo" />
              <p className="engraved">Home</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-experience">
              <img src={experience} className="mobile-icon" alt="logo" />
              <p className="engraved">Experience</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-projects">
              <img src={projects} className="mobile-icon" alt="logo" />
              <p className="engraved">Projects</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-blog">
              <img src={blog} className="mobile-icon" alt="logo" />
              <p className="engraved">Blog</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </a>

          <a href="/">
            <li className="nav-btn nav-contact">
              <img src={contact} className="mobile-icon" alt="logo" />
              <p className="engraved">Contact</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </a>
        </ul>
      </nav>
    );
  }
};

export default Navbar;
