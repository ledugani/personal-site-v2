import React from 'react';
import './Experience.css';
import Collapsible from 'react-collapsible';
import timelineData from './Data.json';

class Experience extends React.Component {
  render () {
    const timelineComponents = timelineData.map((data) => {
      return (
        <div key={data.company} className="timeline-item">
          <div className="timeline-item-content">
            <time>{data.start}</time>
            <h3>{data.role}</h3>
            <p><em>{data.company}</em></p>

            <Collapsible>
              <ul className="responsibilities">
                {data.responsibilities.map((item, index) => (
                  <li key={index} item={item}>{item}</li>
                ))}
              </ul>
            </Collapsible>
            <span className="circle" />
          </div>
        </div>
      );
    });

    return (
      <div className="experience" id="experience">
        <h1>Professional Experience</h1>
        <div className="timeline-container">
          {timelineComponents}
        </div>
      </div>
    );
  }
};

export default Experience;
