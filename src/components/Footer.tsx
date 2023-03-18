import { Link, animateScroll as scroll } from 'react-scroll'
import React from 'react';

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">Maocha Kobo</h1>
                <p className="footer-text">
                  Make Aizu Great Again
        
                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Site Link</p>
                <ul>
                  <li>
                  <Link to="about" spy={true} smooth={true} duration={1000} > About </Link>
                  </li>
                  <li>
                  <Link to="people" spy={true} smooth={true} duration={1000} > People </Link>
                  </li>
                  <li>
                  <Link to="career" spy={true} smooth={true} duration={1000}>Career  </Link>
                  </li>
                  <li>
                  <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <Link to="#" >mao@cha.com</Link>
                  </li>
                  <li>
                    <Link to="#" > 福島県会津若松市摩尼山2-5</Link>
                  </li>
                  <li>
                    <Link to="#" >050-5437-7759</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}
export default Footer;