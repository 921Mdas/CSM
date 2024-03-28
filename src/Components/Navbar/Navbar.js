import React, { useState, useEffect } from "react";
import "./navbar.scss";
import gsap from "gsap";
// components
import Sidebar from "./Sidebar";

// icons
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

   useEffect(() => {
   let tl = gsap.timeline()

   tl.fromTo(".first_pop", {y:-100,opacity:0 }, {y:0, opacity:1, duration:0.5, ease:'power2.out'}).fromTo(".second_pop", {y:-100,opacity:0 }, { y: 0, opacity:1, ease:'power2.out', duration:0.5 })

  }, []);

  const sideDrawer = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className="navbar">
        <div className="welcome">
          <span className="first_pop">Bonjour, </span>
          <span className="second_pop">nice to meet you!</span>
        </div>
        <ul className="links">
          <li>
            <span>01. </span>
            <a name="about" href="#about">
              About
            </a>
          </li>
          <li>
            <span>02. </span>
            <a href="#projects">Timeline</a>
          </li>
          <li>
            <span>03. </span>
            <a href="#Contact">Contact</a>
          </li>
          {/* <li>
            <button className="resume">
              <a
                target={"/"}
                href="https://drive.google.com/file/d/1BuZ6xg2GdsHI98OLqyAgu5xJuycW5FCQ/view?usp=sharing"
              >
                Resume
              </a>{" "}
            </button>
          </li> */}
        </ul>
      </div>
      <div className="hamburger" onClick={sideDrawer}>
        {showMenu ? <ImCross /> : <GiHamburgerMenu />}
      </div>
      <Sidebar showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};

export default Navbar;
