import React from 'react';
import home from './icons/home.svg';
import contact from './icons/contact.svg';
import experience from './icons/experience.svg';
import projects from './icons/projects.svg';
import prof from './icons/blog.svg';
import right from './icons/right.svg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

//import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar (props) {
  return (
    <div>
      <nav id="desktop-navbar" className="navbar navbar-default">
        <ul className="navigation-list">
          <Link smooth to="/" >
            <li className="nav-btn nav-home">
              <img src={home} className="mobile-icon" alt="logo" />
              <p className="engraved">Home</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </Link>

          <Link smooth to="#proficiencies">
            <li className="nav-btn nav-blog">
              <img src={prof} className="mobile-icon" alt="logo" />
              <p className="engraved">Proficiencies</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </Link>

          <Link smooth to="#experience">
            <li className="nav-btn nav-experience">
              <img src={experience} className="mobile-icon" alt="logo" />
              <p className="engraved">Experience</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </Link>

          <Link smooth to="#projects">
            <li className="nav-btn nav-projects">
              <img src={projects} className="mobile-icon" alt="logo" />
              <p className="engraved">Projects</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </Link>

          {/* <Link to="#">
            <li className="nav-btn nav-blog">
              <img src={blog} className="mobile-icon" alt="logo" />
              <p className="engraved">Blog</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </Link> */}

          <Link smooth to="#contact">
            <li className="nav-btn nav-contact">
              <img src={contact} className="mobile-icon" alt="logo" />
              <p className="engraved">Contact</p>
              <img src={right} className="mobile-icon right-arrow" alt="logo" />
            </li>
          </Link>
        </ul>
      </nav>
      <nav id="mobile-navbar">
        <div className="button-border">
          <button className="toggle-button" onClick={props.drawerToggleClickHandler}>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>
            <div className="toggle-button__line"></div>

            {/* <FontAwesomeIcon className="fa-icon" icon={faBars} size="3x" /> */}
          </button>
        </div>
      </nav>
    </div>
  );
};
