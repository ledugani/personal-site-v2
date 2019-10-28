import React from 'react';
import Collapsible from 'react-collapsible';
import allProjects from './Projects.json';

import './Projects.css';

class Projects extends React.Component {

  render () {
    const MyProjects = allProjects.map((data) => {
      return (
        <h2 className="singleProject">
          <Collapsible trigger={data.title}>
            <ul>
              <li>list item 1</li>
              <li>list item 2</li>
              <li>list item 3</li>
            </ul>
          </Collapsible>
        </h2>
      );
    });

    return (
      <div className="projects">
        <h1>Project Portfolio</h1>
        <div className="project-container">
          {MyProjects}
        </div>
      </div>
    );
  }
};

export default Projects;
