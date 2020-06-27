import React, { Component } from 'react';
import './About.scss';

class About extends Component {
  render() {
    let profilepic;
    let bio;

    if(this.props.data){
      profilepic= "images/"+this.props.data.image;
      bio = this.props.data.bio;
    }

    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
              <img className="profile-pic"  src={profilepic} alt="Michael Chaharbaghi Profile Pic" />
          </div>
          <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
