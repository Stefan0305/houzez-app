import React from "react";
import './Contact.scss';
function Contact() {
  return (
  <main>
      <section className="header contactHeader">
        <img src="/images/apartment-1.jpg"/>
        <div className="container">Contact Us</div>
      </section>
      <section className="inputDetails">
        <div className="container sectionFlex">
          <form method="POST">
            <p>Design your custom contact forms with this Houzez Elementor custom widget and connect your leads with the integrated Houzez CRM.</p>
            <div className="nameDetails">
              <label for="name">First Name <span className="requiredStar">*</span></label>
              <input type="text" placeholder="Enter your name" name="name" id="name" required/>
              </div>
              <div className="nameDetails">
              <label for="lastname">Last Name <span className="requiredStar">*</span></label>
              <input type="text" placeholder="Enter your last name" name="lastname" id="lastname" required/>
            </div>
            <label for="email">Email <span className="requiredStar">*</span></label>
            <input type="email" placeholder="Email" name="email" id="email" required/>
            <label for="message">Message <span className="requiredStar">*</span></label>
            <textarea id="message" name="message" rows="3" placeholder="Message" required/>
            <input type="submit" className="btn"/>
          </form>

          <aside className="contactDetails">
            <div className="cardDetails">
              <h3 style={{marginBottom:"1rem"}}>For inquiries contact: </h3>
              <h3>Amy Miller</h3>
              <p>Public Relations Manager</p>
              <p>774 NE 84th St Miami, FL 33879</p>
              <p style={{marginBottom:"1rem"}}>amy.miller@houzez.com</p>
              <h3>Kyle Parker</h3>
              <p>Public Relations Associated</p>
              <p>774 NE 84th St Miami, FL 33879</p>
              <p>kyle.parker@houzez.com</p>
            </div>
            <div className="cardDetails">
              <h3>Corporate Headquarters</h3>
              <p>1584 Biscayne Boulevard</p>
              <p>Miami FL, 33176</p>
            </div>
            <div className="socialMedia">
              <div className="socialBox facebookBox">
                <i className="fa-brands fa-facebook-f"/>
              </div>
              <div className="socialBox twitterBox">
                <i className="fa-brands fa-twitter"/>
              </div>
              <div className="socialBox youtubeBox">
                <i className="fa-brands fa-youtube"/>
              </div>
              <div className="socialBox linkedinBox">
                <i className="fa-brands fa-linkedin"/>
              </div>
              <div className="socialBox instagramBox">
                <i className="fa-brands fa-instagram"/>
              </div>
              <div className="socialBox skypeBox">
                <i className="fa-brands fa-skype"/>
              </div>
            </div>
          </aside>
          </div>
          <div className="container">
            <section className="map">
              <iframe
              width="100%"
              height="300"
              style={{border:"0", marginTop: "1em"}}
              loading="lazy"
              allowfullscreen
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAsLmoQBRtTu0b48QtV0-zuy33bsvVFB6c&q=Space+Needle,Seattle+WA">
              </iframe>
              <div>
                <p><span>Address</span>: 1584 Biscayne Blvd, Miami, FL 33132 – <a href="#">Get Directions</a></p>
              </div>
            </section>
          </div>
      </section>
  </main>
  );
}

export default Contact;
