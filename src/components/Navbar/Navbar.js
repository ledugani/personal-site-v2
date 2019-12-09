import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar (props) {
  return (
    <div>
      <nav id="desktop-navbar" className="navbar navbar-default">
        <ul className="navigation-list">
          <Link smooth to="/" >
            <li className="nav-btn nav-home">
              <p className="engraved">Home</p>
            </li>
          </Link>

          <Link smooth to="#proficiencies">
            <li className="nav-btn nav-blog">
              <p className="engraved">Proficiencies</p>
            </li>
          </Link>

          <Link smooth to="#experience">
            <li className="nav-btn nav-experience">
              <p className="engraved">Experience</p>
            </li>
          </Link>

          <Link smooth to="#projects">
            <li className="nav-btn nav-projects">
              <p className="engraved">Projects</p>
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
              <p className="engraved">Contact</p>
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
