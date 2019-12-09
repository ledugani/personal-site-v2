import React from 'react';
import home from '../icons/home.svg';
import contact from '../icons/contact.svg';
import experience from '../icons/experience.svg';
import projects from '../icons/projects.svg';
// import prof from '../icons/blog.svg';
import right from '../icons/right.svg';
import { HashLink as Link } from 'react-router-hash-link';

import './SideDrawer.css';

const SideDrawer = (props) => {
  let drawerClasses = ['side-drawer'];
  if (props.show) {
    drawerClasses = ['side-drawer open'];
  }

  return (
    <nav className={drawerClasses}>
      <ul>
        <Link smooth to="#home" >
          <li className="nav-btn nav-home">
            <img src={home} className="mobile-icon" alt="logo" />
            <p className="side-text">Home</p>
            <img src={right} className="mobile-icon right-arrow" alt="logo" />
          </li>
        </Link>

        {/* <Link smooth to="#proficiencies">
          <li className="nav-btn nav-blog">
            <img src={prof} className="mobile-icon" alt="logo" />
            <p className="side-text">Proficiencies</p>
            <img src={right} className="mobile-icon right-arrow" alt="logo" />
          </li>
        </Link> */}

        <Link smooth to="#experience">
          <li className="nav-btn nav-experience">
            <img src={experience} className="mobile-icon" alt="logo" />
            <p className="side-text">Experience</p>
            <img src={right} className="mobile-icon right-arrow" alt="logo" />
          </li>
        </Link>

        <Link smooth to="#projects">
          <li className="nav-btn nav-projects">
            <img src={projects} className="mobile-icon" alt="logo" />
            <p className="side-text">Projects</p>
            <img src={right} className="mobile-icon right-arrow" alt="logo" />
          </li>
        </Link>

        <Link smooth to="#contact">
          <li className="nav-btn nav-contact">
            <img src={contact} className="mobile-icon" alt="logo" />
            <p className="side-text">Contact</p>
            <img src={right} className="mobile-icon right-arrow" alt="logo" />
          </li>
        </Link>
      </ul>
    </nav>
  )
}

export default SideDrawer;