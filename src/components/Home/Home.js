import React from 'react';
import me from '../../img/portrait.jpg'
import './Home.css';

class Home extends React.Component {

  render () {
    return (
      <div className="home">
        <div className="wallpaper">
          <div className="frame">
            <img src={me} alt="portrait" className="picture" />
          </div>
        </div>
        <div className="bio">
          <p className="bio-text">Hello! My name is Thomas Dugan and I am a Software and Web Developer with almost 6 years of experience in web-based languages. I also have quite a bit of experience utilizing popular Content Management Systems and JavaScript libraries. My strengths include designing applications and troubleshooting complex client integrations and implementations while thoroughly documenting recurring processes. I'm currently seeking to expand my breadth of knowledge and experience in Software-oriented roles with a company offering a team-based, fast-paced environment with opportunities for growth.</p>
        </div>
      </div>
    );
  }
};

export default Home;
