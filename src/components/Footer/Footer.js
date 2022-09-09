import React from "react";
import "./Footer.scss";
function Footer() {
  return (
    <footer>
      <div className="upperSection">
        <div className="container footerContainer">
          <div className="about">
            <div>
              <h4>About Site</h4>
            </div>
            <div>
              <p>
                Houzez is a premium WordPress theme for real estate where modern
                aesthetics are combined with tasteful simplicity.
              </p>
            </div>
            <div>
              <a href="#" className="footer-cta-btn">
                Read More
              </a>
            </div>
          </div>

          <div className="contact">
            <div>
              <h4>Contact Us</h4>
            </div>
            <div>
              <p>
              <i className="fa fa-location-dot"></i> 774 NE 84th St Miami, FL
                33879
              </p>
              <p>
                <i className="fa fa-phone"></i>
                <a href="#">Call us FREE +1 (800) 990 8877</a>
              </p>
              <p>
                <i className="fa fa-fax"></i>+1 (800) 990 8877
              </p>
              <p>
                <i className="fa fa-envelope"></i>
                <a href="#">email@email.com</a>
              </p>
            </div>
            <div>
              <a href="#" className="footer-cta-btn">
                Contact Us
              </a>
            </div>
          </div>

          <div className="newsletter">
            <div>
              <h4>Newsletter</h4>
            </div>
            <div className="newsletterInput">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
              />
              <button className="btn">Submit</button>
            </div>
            <div>
              <p>
                Houzez is a premium WordPress theme for real estate where modern
                aesthetics are combined with tasteful simplicity.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="copyrightSection">
        <div className="container">
          <div className="copyright">
            © Houzez - All rights reserved
          </div>
          <div className="footerNav">
            <ul>
              <li><a href='#'>Privacy</a></li>
              <li><a href='#'>Terms and Conditions</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
          </div>
          <div className="footerSocial">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-google-plus-g"></i>
          <i className="fa-brands fa-linkedin-in"></i>
          <i className="fa-brands fa-instagram"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
