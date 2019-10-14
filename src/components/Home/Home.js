import React from 'react';
import me from '../../img/portrait.jpg'
import './Home.css';

class Home extends React.Component {

  render () {
    return (
      <div className="home">
        <div className="frame">
          <img src={me} alt="portrait" className="picture" />
        </div>

      </div>
    );
  }
};

export default Home;
