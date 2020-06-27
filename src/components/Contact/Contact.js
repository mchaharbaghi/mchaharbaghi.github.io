import React, { Component } from 'react';
import './Contact.scss'

class Contact extends Component {
  render() {

    if(this.props.data){
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
                  <p className="lead">{message}</p>
            </div>
         </div>

         <div id="contact-details-block">
            <p className="email">
               <a href={`mailto:${email}`}>{email}</a>
            </p>
            <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="horizontal" data-theme="dark" data-vanity="michael-chaharbaghi"><a class="LI-simple-link" href='https://uk.linkedin.com/in/michael-chaharbaghi?trk=profile-badge'>Michael Chaharbaghi</a></div>
         </div>
      </section>
    );
  }
}

export default Contact;
