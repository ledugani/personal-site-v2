import React from 'react';
import Collapsible from 'react-collapsible';

import './Projects.css';

class Projects extends React.Component {

  render () {
    const MyProjects =
    return (
      <div className="projects">
        <h1>Full Stack Projects</h1>
        <Collapsible>
          <ul className="responsibilities">
            {data.responsibilities.map((item, index) => (
              <li key={index} item={item}>{item}</li>
            ))}
          </ul>
        </Collapsible>
      </div>
    );
  }
};

export default Projects;
