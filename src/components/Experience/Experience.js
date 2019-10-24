import React from 'react';
import './Experience.css';
import Collapsible from 'react-collapsible';
import timelineData from './Data.json';

console.log(timelineData);

class Experience extends React.Component {


  render () {
    const timelineComponents = timelineData.map((data) => {
      return (
        <div className="timeline-item">
          <div className="timeline-item-content">
            <time>{data.start}</time>
            <h3>{data.role}</h3>
            <p><em>{data.company}</em></p>

            <Collapsible>
              <ul>
                <li>list item 1</li>
                <li>list item 2</li>
                <li>list item 3</li>
              </ul>
            </Collapsible>
            <span className="circle" />
          </div>
        </div>
      );
    });

    return (
      <div className="experience">
        <h1>Professional Experience</h1>
        <div className="timeline-container">
          {timelineComponents}
        </div>
      </div>
    );
  }
};

export default Experience;
