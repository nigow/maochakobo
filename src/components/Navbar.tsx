import React, { useState } from "react";
import {Link as Scroll} from 'react-scroll';


function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <nav className={`navbar ${isOpen ? "navopened" : ""} navbar-fixed`}>
        <div className="container">
          <div className="row">
            <h1 className="logo">
              <Scroll
                spy={true}
                smooth={true}
                duration={1000}
                to="headerbg"
                style={{ cursor: "pointer" }}
              >
                Maocha Kobo
              </Scroll>
            </h1>
            <ul className={isOpen ? "bar opened" : "bar"}>
              <li>
                <Scroll activeClass="active" spy={true} smooth={true} duration={1000} to="headerbg">Home</Scroll>
              </li>
              <li>
                <Scroll activeClass="active" spy={true} smooth={true} duration={1000} to="about">About</Scroll>
              </li>
              <li>
                <Scroll activeClass="active" spy={true} smooth={true} duration={1000} to="people">People</Scroll>
              </li>
              <li>
              <Scroll activeClass="active" spy={true} smooth={true} duration={1000} to="career">Career</Scroll>
              </li>
              <li>
                <Scroll activeClass="active" spy={true} smooth={true} duration={1000} to="contact">Contact</Scroll>
              </li>
            </ul>
            <div className="button" onClick={() => toggleNav()}>
              <div className="burger"></div>
              <div className="burger"></div>
              <div className="burger"></div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar;